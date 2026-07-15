import os
import glob
import base64

def get_latest_image(prefix, folder):
    files = glob.glob(os.path.join(folder, f"{prefix}_*.png"))
    files.sort(key=os.path.getmtime, reverse=True)
    return files[0] if files else None

brain_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\brain\7ca242fe-3ebe-4bf7-abe1-8b6a786ebadf"
target_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\العاب 2 ع\UNIT 5"

bg_path = get_latest_image("moon_surface_bg", brain_dir)
lander_path = get_latest_image("lunar_lander_prop", brain_dir)

def file_to_b64(path):
    if not path or not os.path.exists(path): return ""
    with open(path, "rb") as f:
        return "data:image/png;base64," + base64.b64encode(f.read()).decode('utf-8')

bg_b64 = file_to_b64(bg_path)
lander_b64 = file_to_b64(lander_path)

html_content = f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الدرس الخامس - الهبوط على القمر</title>
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
            transition: all 1s ease;
        }}

        body::before {{
            content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(15, 23, 42, 0.4); z-index: 1; backdrop-filter: blur(2px);
        }}

        #loading-screen {{
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: #0F172A; z-index: 9999;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            color: #fff; transition: opacity 0.5s ease;
        }}
        .spinner {{
            width: 60px; height: 60px; border: 6px solid rgba(255,255,255,0.2);
            border-top-color: #F8FAFC; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 20px;
        }}
        @keyframes spin {{ 100% {{ transform: rotate(360deg); }} }}

        .layout-container {{
            position: relative; z-index: 10; width: 100%; max-width: 1200px;
            display: grid; grid-template-columns: 1fr 400px; gap: 2rem; padding: 0 2rem;
        }}

        .left-col {{ display: flex; flex-direction: column; gap: 2rem; }}

        .right-col {{
            background: rgba(15, 23, 42, 0.5); border: 2px solid rgba(248, 250, 252, 0.3); border-radius: 1rem;
            height: 80vh; position: relative; box-shadow: inset 0 0 40px rgba(248, 250, 252, 0.1);
            display: flex; flex-direction: column; align-items: center; justify-content: flex-end;
            padding: 20px; overflow: hidden; backdrop-filter: blur(5px);
        }}

        .header {{
            display: flex; justify-content: space-between; align-items: center;
            background: rgba(15, 23, 42, 0.85); padding: 1rem 2rem; border-radius: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);
        }}

        .game-title {{ font-size: 2.2rem; font-weight: 900; color: #F8FAFC; margin: 0; text-shadow: 0 0 10px rgba(248,250,252,0.5); }}
        .stats {{ display: flex; gap: 1rem; }}
        .stat-box {{ background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; border: 1px solid rgba(255, 255, 255, 0.2); }}
        .timer {{ color: #F87171; min-width: 80px; text-align: center; }}
        .lives {{ color: #FCA5A5; }}

        .question-box {{
            background: rgba(15, 23, 42, 0.85); border: 2px solid rgba(248, 250, 252, 0.3); border-radius: 1.5rem;
            padding: 2.5rem; backdrop-filter: blur(10px); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); display: none;
        }}

        .question-text {{ font-size: 2rem; font-weight: 700; margin-bottom: 2rem; direction: ltr; }}
        .options-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }}
        .answer-btn {{
            background: rgba(255, 255, 255, 0.05); border: 2px solid rgba(248, 250, 252, 0.4); color: #FFFFFF;
            padding: 1.2rem; font-size: 1.3rem; font-weight: 700; border-radius: 1rem; cursor: pointer; transition: all 0.3s ease; text-align: left; direction: ltr;
        }}
        .answer-btn:hover {{ background: rgba(248, 250, 252, 0.2); border-color: #FFFFFF; transform: translateY(-3px); }}
        .answer-btn.correct {{ background: rgba(16, 185, 129, 0.2); border-color: #10B981; }}
        .answer-btn.wrong {{ background: rgba(239, 68, 68, 0.2); border-color: #EF4444; }}

        .start-btn {{
            background: #F8FAFC; border: none; color: #0F172A; padding: 1.5rem 3rem; font-size: 2rem; font-weight: 900;
            border-radius: 1rem; cursor: pointer; margin-top: 3rem; align-self: center; box-shadow: 0 10px 20px rgba(248,250,252,0.4);
        }}

        /* Lunar Lander Scene */
        .landing-pad {{
            width: 100%; height: 20px; background: rgba(255,255,255,0.1);
            border-top: 2px solid #F8FAFC; border-radius: 50% 50% 0 0;
            position: absolute; bottom: 0; box-shadow: 0 -10px 20px rgba(248,250,252,0.2);
        }}

        .lander {{
            width: 150px; height: 150px; background-image: url('{lander_b64}');
            background-size: contain; background-repeat: no-repeat; background-position: center bottom;
            position: absolute; bottom: 100%; left: 50%; margin-left: -75px;
            transition: bottom 1s cubic-bezier(0.25, 1, 0.5, 1); filter: drop-shadow(0 0 10px rgba(248,250,252,0.3));
        }}

        .thruster-flame {{
            position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%);
            width: 30px; height: 40px; background: radial-gradient(ellipse at top, #38BDF8, #818CF8, transparent);
            filter: blur(3px); opacity: 0; transition: opacity 0.3s; border-radius: 50% 50% 0 0;
        }}
        .lander.descending .thruster-flame {{ opacity: 1; animation: flicker 0.1s infinite; }}
        
        @keyframes flicker {{
            0% {{ height: 40px; opacity: 0.8; }}
            50% {{ height: 50px; opacity: 1; }}
            100% {{ height: 45px; opacity: 0.9; }}
        }}

        .distance-display {{
            position: absolute; top: 20px; right: 20px; font-family: 'Courier New', Courier, monospace;
            color: #10B981; font-size: 1.5rem; font-weight: bold; text-shadow: 0 0 5px #10B981;
        }}

        .alert-overlay {{
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.85); z-index: 100;
            display: flex; justify-content: center; align-items: center;
            opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
        }}
        .alert-overlay.active {{ opacity: 1; pointer-events: all; }}
        .alert-box {{ background: #1E293B; padding: 3rem; border-radius: 2rem; text-align: center; border: 2px solid #F8FAFC; }}

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
                <h1 class="game-title">الهبوط على القمر 🌕</h1>
                <div class="stats">
                    <div class="stat-box lives" id="lives-display">❤️ 3</div>
                    <div class="stat-box timer">⏱️ <span id="timer">30.00</span></div>
                </div>
            </div>

            <button class="start-btn" id="start-btn" onclick="startGame()">ابدأ الهبوط!</button>

            <div class="question-box" id="question-box">
                <div class="question-text" id="question-text"></div>
                <div class="options-grid" id="options-grid"></div>
            </div>
        </div>

        <div class="right-col" id="game-scene" style="display: none;">
            <div class="distance-display" id="distance">ALT: 1000m</div>
            <div class="landing-pad"></div>
            <div class="lander" id="lander">
                <div class="thruster-flame"></div>
            </div>
        </div>
    </div>

    <div class="alert-overlay" id="alert-overlay">
        <div class="alert-box">
            <div id="alert-icon" style="font-size: 5rem; margin-bottom: 1rem;"></div>
            <h2 id="alert-title" style="color: white; font-size: 2.5rem; margin-bottom: 1rem;"></h2>
            <p id="alert-message" style="color: #94A3B8; font-size: 1.5rem; margin-bottom: 2rem;"></p>
            <button class="answer-btn" id="alert-btn" style="background: #F8FAFC; border: none; color: #0F172A; width: 100%; justify-content: center;" onclick="nextQuestion()"></button>
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

        function playThruster() {{
            if (!audioCtx) return;
            const bufferSize = audioCtx.sampleRate * 1.0;
            const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
            
            const noise = audioCtx.createBufferSource();
            noise.buffer = buffer;
            const filter = audioCtx.createBiquadFilter();
            filter.type = 'lowpass'; filter.frequency.value = 500;
            const gain = audioCtx.createGain();
            gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1.0);
            
            noise.connect(filter); filter.connect(gain); gain.connect(audioCtx.destination);
            noise.start();
            playTone(200, 150, 'square', 1.0, 0.2);
        }}

        function playHit() {{ playTone(150, 50, 'sawtooth', 0.5, 0.5); }}
        function playWrong() {{ playTone(250, 100, 'square', 0.5, 0.5); }}
        function playGameOver() {{ playTone(150, 50, 'square', 1.0, 0.4); }}
        function playWin() {{
            if (!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
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
            {{ q: "Dr. Farouk El-Baz is a famous space .......... .", options: ["scientist", "pilot", "doctor", "cleaner"], correct: 0 }},
            {{ q: "He helped plan where the Apollo 11 mission should .......... on the moon.", options: ["fly", "land", "swim", "eat"], correct: 1 }},
            {{ q: "The moon is in .......... space.", options: ["inner", "outer", "inside", "down"], correct: 1 }},
            {{ q: "We can see the .......... shining in the night sky.", options: ["sun", "clouds", "moon", "birds"], correct: 2 }},
            {{ q: "Astronauts travel in a space .......... .", options: ["ship", "car", "bike", "train"], correct: 0 }},
            {{ q: "He works for a space .......... to explore new planets.", options: ["charity", "agency", "school", "hospital"], correct: 1 }},
            {{ q: "Dr. Farouk used satellites to find underground .......... in the desert.", options: ["fire", "water", "air", "space"], correct: 1 }},
            {{ q: "A .......... is an expert who studies science.", options: ["teacher", "manager", "scientist", "farmer"], correct: 2 }},
            {{ q: "It takes a lot of time to .......... for a space mission.", options: ["prepare", "destroy", "drop", "lose"], correct: 0 }},
            {{ q: "The first man to walk on the moon was Neil .......... .", options: ["El-Baz", "Armstrong", "Ahmed", "Ali"], correct: 1 }}
        ];

        let currentIndex = 0;
        let lives = 3;
        let timerInterval;
        let timeRemaining = 30.00;
        let isWaitingForInput = true;

        function updateLander() {{
            const totalDistance = 1000;
            const currentDistance = totalDistance - ((currentIndex / questions.length) * totalDistance);
            document.getElementById('distance').innerText = `ALT: ${{Math.round(currentDistance)}}m`;
            
            const bottomPercent = 100 - ((currentIndex / questions.length) * 100);
            const lander = document.getElementById('lander');
            lander.classList.add('descending');
            lander.style.bottom = `${{bottomPercent}}%`;
            
            setTimeout(() => lander.classList.remove('descending'), 1000);
            
            if(currentIndex === questions.length) {{
                lander.style.bottom = '20px'; // Rest on pad
                document.getElementById('distance').innerText = `ALT: 0m`;
                document.getElementById('distance').style.color = '#38BDF8';
            }}
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
            
            document.getElementById('lives-display').innerHTML = '❤️ ' + lives;
            const q = questions[currentIndex];
            document.getElementById('question-text').innerHTML = `<span style="color: #F8FAFC;">Q${{currentIndex + 1}}:</span> ${{q.q}}`;
            
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
                handleFail("انتهى الوقت! ⚠️ فقدنا الاتصال!");
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
                updateLander();
                playThruster();
                
                if(currentIndex < questions.length) {{
                    setTimeout(() => {{
                        showAlert(true, "إجابة صحيحة! اقتراب آمن 🛸");
                    }}, 1000);
                }} else {{
                    setTimeout(showWinScreen, 1500);
                }}
            }} else {{
                btns[idx].classList.add('wrong');
                btns[correctIdx].classList.add('correct');
                playHit();
                setTimeout(() => handleFail("إجابة خاطئة! ❌ انحراف عن المسار!"), 1000);
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
                document.getElementById('lander').style.bottom = '100%';
                document.getElementById('distance').innerText = 'ALT: 1000m';
            }}
            renderQuestion();
        }}

        function showWinScreen() {{
            const qBox = document.getElementById('question-box');
            qBox.innerHTML = `
                <div style="font-size: 6rem; text-align:center; margin-bottom: 1rem;">🌕✨</div>
                <div class="question-text" style="color: white; text-align:center;">تهانينا! هبطت المركبة بنجاح على سطح القمر! 🎉</div>
                <button class="start-btn" style="width: 100%;" onclick="location.reload()">العب مرة أخرى 🔄</button>
            `;
            playWin();
        }}

        function showGameOver() {{
            const qBox = document.getElementById('question-box');
            qBox.innerHTML = `
                <div style="font-size: 6rem; text-align:center; margin-bottom: 1rem;">💥</div>
                <div class="question-text" style="color: white; text-align:center;">للأسف، تحطمت المركبة.</div>
                <button class="start-btn" style="width: 100%;" onclick="location.reload()">العب مرة أخرى 🔄</button>
            `;
        }}
    </script>
</body>
</html>
"""

with open(os.path.join(target_dir, "unit5_game_lesson5.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print("Game 5 for Unit 5 generated successfully.")
