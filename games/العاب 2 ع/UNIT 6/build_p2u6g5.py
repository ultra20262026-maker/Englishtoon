import os
import glob
import base64

def get_latest_image(prefix, folder):
    files = glob.glob(os.path.join(folder, f"{prefix}_*.png"))
    files.sort(key=os.path.getmtime, reverse=True)
    return files[0] if files else None

brain_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\brain\7ca242fe-3ebe-4bf7-abe1-8b6a786ebadf"
target_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\العاب 2 ع\UNIT 6"

bg_path = get_latest_image("recycling_factory_bg", brain_dir)
trash_path = get_latest_image("trash_bag_prop", brain_dir)
energy_path = get_latest_image("energy_cube_prop", brain_dir)

def file_to_b64(path):
    if not path or not os.path.exists(path): return ""
    with open(path, "rb") as f:
        return "data:image/png;base64," + base64.b64encode(f.read()).decode('utf-8')

bg_b64 = file_to_b64(bg_path)
trash_b64 = file_to_b64(trash_path)
energy_b64 = file_to_b64(energy_path)

html_content = f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الدرس الخامس - مصنع إعادة التدوير</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap');

        * {{ box-sizing: border-box; margin: 0; padding: 0; font-family: 'Outfit', 'Cairo', sans-serif; }}

        body {{
            background-color: #0F172A;
            background-image: url('{bg_b64}');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            color: #FFFFFF;
            min-height: 100vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            overflow-x: hidden;
            position: relative;
            padding-top: 2rem;
            transition: all 2s ease;
        }}

        body.complete {{
            /* Bright glowing blue theme */
            box-shadow: inset 0 0 200px rgba(56, 189, 248, 0.6);
            filter: saturate(1.5);
        }}

        body::before {{
            content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(15, 23, 42, 0.7); z-index: 1; backdrop-filter: blur(2px);
            transition: background 2s;
        }}
        
        body.complete::before {{
            background: rgba(56, 189, 248, 0.2);
        }}

        #loading-screen {{
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: #0F172A; z-index: 9999;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            color: #fff; transition: opacity 0.5s ease;
        }}
        .spinner {{
            width: 60px; height: 60px; border: 6px solid rgba(255,255,255,0.2);
            border-top-color: #38BDF8; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 20px;
        }}
        @keyframes spin {{ 100% {{ transform: rotate(360deg); }} }}

        .layout-container {{
            position: relative; z-index: 10; width: 100%; max-width: 1200px;
            display: grid; grid-template-columns: 1fr 400px; gap: 2rem; padding: 0 2rem;
        }}

        .left-col {{ display: flex; flex-direction: column; gap: 2rem; }}

        .right-col {{
            background: rgba(15, 23, 42, 0.5); border: 2px solid rgba(56, 189, 248, 0.3); border-radius: 1rem;
            height: 80vh; position: relative; box-shadow: inset 0 0 40px rgba(56, 189, 248, 0.1);
            display: flex; flex-direction: column; align-items: center; justify-content: flex-end;
            padding: 20px; overflow: hidden; backdrop-filter: blur(5px);
        }}

        .header {{
            display: flex; justify-content: space-between; align-items: center;
            background: rgba(15, 23, 42, 0.85); padding: 1rem 2rem; border-radius: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);
        }}

        .game-title {{ font-size: 2.2rem; font-weight: 900; color: #38BDF8; margin: 0; text-shadow: 0 0 10px rgba(56,189,248,0.5); }}
        .stats {{ display: flex; gap: 1rem; }}
        .stat-box {{ background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; border: 1px solid rgba(255, 255, 255, 0.2); }}
        .timer {{ color: #F87171; min-width: 80px; text-align: center; }}
        .lives {{ color: #FCA5A5; }}

        .question-box {{
            background: rgba(15, 23, 42, 0.85); border: 2px solid rgba(56, 189, 248, 0.3); border-radius: 1.5rem;
            padding: 2.5rem; backdrop-filter: blur(10px); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); display: none;
        }}

        .question-text {{ font-size: 2rem; font-weight: 700; margin-bottom: 2rem; direction: ltr; }}
        .options-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }}
        .answer-btn {{
            background: rgba(255, 255, 255, 0.05); border: 2px solid rgba(56, 189, 248, 0.4); color: #FFFFFF;
            padding: 1.2rem; font-size: 1.3rem; font-weight: 700; border-radius: 1rem; cursor: pointer; transition: all 0.3s ease; text-align: left; direction: ltr;
        }}
        .answer-btn:hover {{ background: rgba(56, 189, 248, 0.2); border-color: #7DD3FC; transform: translateY(-3px); }}
        .answer-btn.correct {{ background: rgba(16, 185, 129, 0.4); border-color: #10B981; }}
        .answer-btn.wrong {{ background: rgba(239, 68, 68, 0.4); border-color: #EF4444; }}

        .start-btn {{
            background: #38BDF8; border: none; color: #0F172A; padding: 1.5rem 3rem; font-size: 2rem; font-weight: 900;
            border-radius: 1rem; cursor: pointer; margin-top: 3rem; align-self: center; box-shadow: 0 10px 20px rgba(56,189,248,0.4);
        }}

        /* Factory Scene */
        .factory-container {{
            position: relative; width: 100%; height: 100%;
            display: flex; flex-direction: column; align-items: center;
        }}

        .energy-meter {{
            position: absolute; top: 10px; right: 10px; width: 30px; height: 200px;
            background: rgba(0,0,0,0.8); border: 2px solid #38BDF8; border-radius: 15px;
            overflow: hidden;
        }}
        .energy-fill {{
            position: absolute; bottom: 0; left: 0; width: 100%; height: 0%;
            background: linear-gradient(to top, #0284C7, #38BDF8);
            transition: height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 0 10px #38BDF8;
        }}

        .machine-core {{
            position: absolute; top: 30%; width: 120px; height: 120px;
            border-radius: 50%; background: radial-gradient(circle, rgba(56,189,248,0.1) 0%, rgba(0,0,0,0) 70%);
            border: 4px solid rgba(56, 189, 248, 0.2);
            transition: all 0.5s; z-index: 10;
        }}
        .machine-core.active {{
            background: radial-gradient(circle, rgba(56,189,248,0.8) 0%, transparent 70%);
            border-color: #38BDF8;
            box-shadow: 0 0 50px #38BDF8;
        }}

        .conveyor-item {{
            position: absolute; bottom: 50px; width: 80px; height: 80px;
            background-image: url('{trash_b64}'); background-size: contain; background-repeat: no-repeat;
            background-position: center; transition: all 1s ease-in-out;
            left: -100px;
        }}

        .conveyor-item.processing {{
            left: calc(50% - 40px); bottom: 40%;
        }}

        .conveyor-item.converted {{
            background-image: url('{energy_b64}'); left: calc(50% - 40px); bottom: 40%;
            transform: scale(1.2); filter: drop-shadow(0 0 20px #38BDF8);
        }}

        .conveyor-item.stored {{
            left: calc(50% - 40px); bottom: 40%; transform: scale(0); opacity: 0;
        }}

        .laser {{
            position: absolute; top: 35%; left: 50%; width: 4px; height: 0;
            background: #EF4444; box-shadow: 0 0 10px #EF4444; z-index: 20;
            transform-origin: top center; transition: height 0.3s;
        }}
        .laser.fire {{ height: 100px; }}

        .alert-overlay {{
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.85); z-index: 100;
            display: flex; justify-content: center; align-items: center;
            opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
        }}
        .alert-overlay.active {{ opacity: 1; pointer-events: all; }}
        .alert-box {{ background: #1E293B; padding: 3rem; border-radius: 2rem; text-align: center; border: 2px solid #38BDF8; }}

        @media (max-width: 900px) {{
            .layout-container {{ grid-template-columns: 1fr; }}
            .right-col {{ height: 400px; }}
        }}
    </style>
</head>
<body>
    <div id="loading-screen">
        <div class="spinner"></div>
        <h2 style="font-size: 2rem;">جاري التحميل...</h2>
    </div>

    <div class="layout-container">
        <div class="left-col">
            <div class="header" id="game-header" style="display: none;">
                <h1 class="game-title">مصنع إعادة التدوير ♻️</h1>
                <div class="stats">
                    <div class="stat-box lives" id="lives-display">❤️ 3</div>
                    <div class="stat-box timer">⏱️ <span id="timer">30.00</span></div>
                </div>
            </div>

            <button class="start-btn" id="start-btn" onclick="startGame()">تشغيل المصنع!</button>

            <div class="question-box" id="question-box">
                <div class="question-text" id="question-text"></div>
                <div class="options-grid" id="options-grid"></div>
            </div>
        </div>

        <div class="right-col" id="game-scene" style="display: none;">
            <div class="factory-container" id="factory-container">
                <div class="energy-meter"><div class="energy-fill" id="energy-fill"></div></div>
                <div class="machine-core" id="machine-core"></div>
                <div class="laser" id="laser"></div>
                <div class="conveyor-item" id="item"></div>
            </div>
        </div>
    </div>

    <div class="alert-overlay" id="alert-overlay">
        <div class="alert-box">
            <div id="alert-icon" style="font-size: 5rem; margin-bottom: 1rem;"></div>
            <h2 id="alert-title" style="color: white; font-size: 2.5rem; margin-bottom: 1rem;"></h2>
            <p id="alert-message" style="color: #94A3B8; font-size: 1.5rem; margin-bottom: 2rem;"></p>
            <button class="answer-btn" id="alert-btn" style="background: #38BDF8; border: none; color: #0F172A; width: 100%; justify-content: center;" onclick="nextQuestion()"></button>
        </div>
    </div>

    <script>
        let audioCtx;
        function initAudio() {{
            try {{
                if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                if (audioCtx.state === 'suspended') audioCtx.resume();
            }} catch(e) {{}}
        }}

        function playTone(freq1, freq2, type, duration, vol=0.3) {{
            if (!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq1, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(freq2, audioCtx.currentTime + duration);
            gain.gain.setValueAtTime(vol, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        }}

        function playLaser() {{ playTone(1200, 400, 'sawtooth', 0.3, 0.4); }}
        function playPowerUp() {{ playTone(400, 1600, 'sine', 0.6, 0.3); }}

        function playHit() {{ playTone(150, 50, 'sawtooth', 0.5, 0.5); }}
        function playWrong() {{ playTone(250, 100, 'square', 0.5, 0.5); }}
        function playGameOver() {{ playTone(150, 50, 'square', 1.0, 0.4); }}
        function playWin() {{
            if (!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(400, audioCtx.currentTime);
            osc.frequency.linearRampToValueAtTime(800, audioCtx.currentTime + 1);
            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.5);
            gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 3);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 3);
        }}

        window.onload = () => {{
            document.getElementById('loading-screen').style.opacity = '0';
            setTimeout(() => document.getElementById('loading-screen').style.display = 'none', 500);
        }};

        const questions = [
            {{ q: "The beach .......... was a great success; we collected 50 bags of rubbish.", options: ["cleanup", "party", "sleep", "swim"], correct: 0 }},
            {{ q: "He is a .......... who works to protect animals without getting paid.", options: ["volunteer", "boss", "king", "pilot"], correct: 0 }},
            {{ q: "We need to .......... water to help the environment.", options: ["save", "waste", "pollute", "drink"], correct: 0 }},
            {{ q: "The government started a new .......... to plant a million trees.", options: ["initiative", "game", "movie", "song"], correct: 0 }},
            {{ q: "We should all take .......... for keeping our city clean.", options: ["responsibility", "books", "money", "cars"], correct: 0 }},
            {{ q: "Our school organized a campaign to .......... awareness about recycling.", options: ["raise", "hide", "drop", "eat"], correct: 0 }},
            {{ q: "Eco-friendly products don't .......... the planet.", options: ["harm", "help", "clean", "wash"], correct: 0 }},
            {{ q: "They use a special machine to .......... dirty water.", options: ["filter", "make", "break", "paint"], correct: 0 }},
            {{ q: "It's important to .......... the natural habitats of wild animals.", options: ["protect", "destroy", "burn", "sell"], correct: 0 }},
            {{ q: "Global warming is a serious .......... that we must face.", options: ["problem", "joke", "game", "sport"], correct: 0 }}
        ];

        let currentIndex = 0;
        let lives = 3;
        let timerInterval;
        let timeRemaining = 30.00;
        let isWaitingForInput = true;

        function animateRecycling() {{
            const item = document.getElementById('item');
            const laser = document.getElementById('laser');
            const core = document.getElementById('machine-core');
            const fill = document.getElementById('energy-fill');

            // 1. Move to center
            item.className = 'conveyor-item processing';
            
            setTimeout(() => {{
                // 2. Fire laser
                laser.classList.add('fire');
                playLaser();
                
                setTimeout(() => {{
                    // 3. Convert to energy cube
                    laser.classList.remove('fire');
                    item.className = 'conveyor-item converted';
                    playPowerUp();
                    
                    setTimeout(() => {{
                        // 4. Store and update meter
                        item.className = 'conveyor-item stored';
                        core.classList.add('active');
                        fill.style.height = `${{((currentIndex) / questions.length) * 100}}%`;
                        
                        setTimeout(() => {{
                            core.classList.remove('active');
                            if(currentIndex < questions.length) {{
                                showAlert(true, "إجابة صحيحة! تم تحويل المخلفات لطاقة ⚡");
                            }} else {{
                                document.body.classList.add('complete');
                                showWinScreen();
                            }}
                        }}, 500);
                        
                    }}, 800);
                }}, 300);
            }}, 1000);
        }}

        function startGame() {{
            initAudio();
            document.getElementById('start-btn').style.display = 'none';
            document.getElementById('game-header').style.display = 'flex';
            document.getElementById('game-scene').style.display = 'flex';
            document.getElementById('question-box').style.display = 'block';
            renderQuestion();
        }}

        function renderQuestion() {{
            if (currentIndex >= questions.length || lives <= 0) {{
                if(lives > 0) showWinScreen();
                else showGameOver();
                return;
            }}

            isWaitingForInput = true;
            timeRemaining = 30.00;
            
            // Reset item position
            document.getElementById('item').className = 'conveyor-item';
            
            document.getElementById('lives-display').innerHTML = '❤️ ' + lives;
            const q = questions[currentIndex];
            document.getElementById('question-text').innerHTML = `<span style="color: #38BDF8;">Q${{currentIndex + 1}}:</span> ${{q.q}}`;
            
            const optsBox = document.getElementById('options-grid');
            optsBox.innerHTML = '';
            const letters = ['A', 'B', 'C', 'D'];
            q.options.forEach((opt, idx) => {{
                optsBox.innerHTML += `
                    <button class="answer-btn" onclick="selectOption(${{idx}})">
                        <span style="background: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 0.5rem;">${{letters[idx]}}</span>
                        ${{opt}}
                    </button>`;
            }});

            clearInterval(timerInterval);
            timerInterval = setInterval(updateTimer, 10);
        }}

        function updateTimer() {{
            if (!isWaitingForInput) return;
            timeRemaining -= 0.01;
            const timerEl = document.getElementById('timer');
            if (timeRemaining <= 0) {{
                timeRemaining = 0;
                timerEl.innerText = "0.00";
                playWrong();
                handleFail("انتهى الوقت! ⚠️ توقف الحزام الناقل!");
            }} else {{
                timerEl.innerText = timeRemaining.toFixed(2);
            }}
        }}

        function handleFail(msg) {{
            isWaitingForInput = false;
            clearInterval(timerInterval);
            lives--;
            document.getElementById('lives-display').innerHTML = '❤️ ' + lives;
            
            if (lives <= 0) playGameOver();
            showAlert(false, msg);
        }}

        function selectOption(idx) {{
            if (!isWaitingForInput) return;
            isWaitingForInput = false;
            clearInterval(timerInterval);
            initAudio();

            const btns = document.querySelectorAll('.answer-btn');
            const correctIdx = questions[currentIndex].correct;

            if (idx === correctIdx) {{
                btns[idx].classList.add('correct');
                currentIndex++;
                animateRecycling();
                // We show alert inside animateRecycling to sync with animation
            }} else {{
                btns[idx].classList.add('wrong');
                btns[correctIdx].classList.add('correct');
                playHit();
                setTimeout(() => handleFail("إجابة خاطئة! ❌ لم نتمكن من إعادة التدوير!"), 1000);
            }}
        }}

        function showAlert(isSuccess, message) {{
            const overlay = document.getElementById('alert-overlay');
            const icon = document.getElementById('alert-icon');
            const title = document.getElementById('alert-title');
            const msg = document.getElementById('alert-message');
            const btn = document.getElementById('alert-btn');

            if (isSuccess) {{
                icon.innerText = '✨'; title.innerText = 'رائع!'; title.style.color = '#10B981';
            }} else {{
                icon.innerText = '⚠️'; title.innerText = 'احترس!'; title.style.color = '#EF4444';
            }}
            msg.innerText = message;
            btn.innerText = lives <= 0 ? "أعد المحاولة 🔄" : "التالي ⏩";
            overlay.classList.add('active');
        }}

        function nextQuestion() {{
            document.getElementById('alert-overlay').classList.remove('active');
            if (lives <= 0) {{ 
                currentIndex = 0; lives = 3; 
                document.getElementById('energy-fill').style.height = '0%';
                document.body.classList.remove('complete');
            }}
            renderQuestion();
        }}

        function showWinScreen() {{
            const qBox = document.getElementById('question-box');
            qBox.innerHTML = `
                <div style="font-size: 6rem; text-align:center; margin-bottom: 1rem;">♻️✨</div>
                <div class="question-text" style="color: white; text-align:center;">تهانينا! خزان الطاقة ممتلئ وأضأت المدينة بأكملها! 🎉</div>
                <button class="start-btn" style="width: 100%;" onclick="location.reload()">العب مرة أخرى 🔄</button>
            `;
            playWin();
        }}

        function showGameOver() {{
            const qBox = document.getElementById('question-box');
            qBox.innerHTML = `
                <div style="font-size: 6rem; text-align:center; margin-bottom: 1rem;">⚙️</div>
                <div class="question-text" style="color: white; text-align:center;">للأسف، تعطل المصنع ولم نتمكن من توليد الطاقة.</div>
                <button class="start-btn" style="width: 100%;" onclick="location.reload()">العب مرة أخرى 🔄</button>
            `;
        }}
    </script>
</body>
</html>
"""

with open(os.path.join(target_dir, "unit6_game_lesson5.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print("Game 5 for Unit 6 generated successfully.")
