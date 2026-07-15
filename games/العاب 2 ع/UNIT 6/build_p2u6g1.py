import os
import glob
import base64

def get_latest_image(prefix, folder):
    files = glob.glob(os.path.join(folder, f"{prefix}_*.png"))
    files.sort(key=os.path.getmtime, reverse=True)
    return files[0] if files else None

brain_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\brain\7ca242fe-3ebe-4bf7-abe1-8b6a786ebadf"
target_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\العاب 2 ع\UNIT 6"

bg_path = get_latest_image("earth_space_bg", brain_dir)
earth_path = get_latest_image("earth_prop", brain_dir)
meteorite_path = get_latest_image("meteorite_prop", brain_dir)

def file_to_b64(path):
    if not path or not os.path.exists(path): return ""
    with open(path, "rb") as f:
        return "data:image/png;base64," + base64.b64encode(f.read()).decode('utf-8')

bg_b64 = file_to_b64(bg_path)
earth_b64 = file_to_b64(earth_path)
meteorite_b64 = file_to_b64(meteorite_path)

html_content = f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الدرس الأول - حماية الأرض</title>
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
            border-top-color: #3B82F6; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 20px;
        }}
        @keyframes spin {{ 100% {{ transform: rotate(360deg); }} }}

        .layout-container {{
            position: relative; z-index: 10; width: 100%; max-width: 1200px;
            display: grid; grid-template-columns: 1fr 400px; gap: 2rem; padding: 0 2rem;
        }}

        .left-col {{ display: flex; flex-direction: column; gap: 2rem; }}

        .right-col {{
            background: rgba(15, 23, 42, 0.5); border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 1rem;
            height: 80vh; position: relative; box-shadow: inset 0 0 40px rgba(59, 130, 246, 0.1);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            padding: 20px; overflow: hidden; backdrop-filter: blur(5px);
        }}

        .header {{
            display: flex; justify-content: space-between; align-items: center;
            background: rgba(15, 23, 42, 0.85); padding: 1rem 2rem; border-radius: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);
        }}

        .game-title {{ font-size: 2.2rem; font-weight: 900; color: #3B82F6; margin: 0; text-shadow: 0 0 10px rgba(59,130,246,0.5); }}
        .stats {{ display: flex; gap: 1rem; }}
        .stat-box {{ background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; border: 1px solid rgba(255, 255, 255, 0.2); }}
        .timer {{ color: #F87171; min-width: 80px; text-align: center; }}
        .lives {{ color: #FCA5A5; }}

        .question-box {{
            background: rgba(15, 23, 42, 0.85); border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 1.5rem;
            padding: 2.5rem; backdrop-filter: blur(10px); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); display: none;
        }}

        .question-text {{ font-size: 2rem; font-weight: 700; margin-bottom: 2rem; direction: ltr; }}
        .options-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }}
        .answer-btn {{
            background: rgba(255, 255, 255, 0.05); border: 2px solid rgba(59, 130, 246, 0.4); color: #FFFFFF;
            padding: 1.2rem; font-size: 1.3rem; font-weight: 700; border-radius: 1rem; cursor: pointer; transition: all 0.3s ease; text-align: left; direction: ltr;
        }}
        .answer-btn:hover {{ background: rgba(59, 130, 246, 0.2); border-color: #60A5FA; transform: translateY(-3px); }}
        .answer-btn.correct {{ background: rgba(16, 185, 129, 0.2); border-color: #10B981; }}
        .answer-btn.wrong {{ background: rgba(239, 68, 68, 0.2); border-color: #EF4444; }}

        .start-btn {{
            background: #3B82F6; border: none; color: #FFFFFF; padding: 1.5rem 3rem; font-size: 2rem; font-weight: 900;
            border-radius: 1rem; cursor: pointer; margin-top: 3rem; align-self: center; box-shadow: 0 10px 20px rgba(59,130,246,0.4);
        }}

        /* Earth Scene */
        .scene-container {{
            position: relative; width: 300px; height: 300px;
            display: flex; justify-content: center; align-items: center;
        }}

        .earth {{
            width: 200px; height: 200px; background-image: url('{earth_b64}');
            background-size: contain; background-repeat: no-repeat; background-position: center;
            z-index: 5; animation: spin-earth 60s linear infinite;
        }}

        @keyframes spin-earth {{
            100% {{ transform: rotate(360deg); }}
        }}

        .shield {{
            position: absolute; width: 250px; height: 250px; border-radius: 50%;
            border: 4px dashed rgba(59, 130, 246, 0.2); z-index: 6;
            transition: all 0.5s ease; pointer-events: none;
        }}

        .meteor {{
            position: absolute; width: 60px; height: 60px; background-image: url('{meteorite_b64}');
            background-size: contain; background-repeat: no-repeat; background-position: center;
            top: -100px; right: -100px; opacity: 0; z-index: 10;
        }}

        .meteor.attack {{
            animation: meteor-strike 1s forwards cubic-bezier(0.25, 1, 0.5, 1);
        }}

        @keyframes meteor-strike {{
            0% {{ top: -100px; right: -100px; opacity: 1; transform: scale(1); }}
            80% {{ top: 120px; right: 120px; opacity: 1; transform: scale(0.8); }}
            100% {{ top: 120px; right: 120px; opacity: 0; transform: scale(1.5); filter: blur(5px) brightness(2); }}
        }}

        .meteor.hit-earth {{
            animation: meteor-crash 1s forwards ease-in;
        }}

        @keyframes meteor-crash {{
            0% {{ top: -100px; right: -100px; opacity: 1; }}
            100% {{ top: 150px; right: 150px; opacity: 0; filter: brightness(3); transform: scale(2); }}
        }}

        .scene-container.complete .shield {{
            border-style: solid; border-color: rgba(59, 130, 246, 0.8);
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.4);
            background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%);
            animation: pulse-shield 2s infinite;
        }}

        @keyframes pulse-shield {{
            0% {{ box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }}
            50% {{ box-shadow: 0 0 80px rgba(96, 165, 250, 0.8); }}
            100% {{ box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }}
        }}

        .alert-overlay {{
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.85); z-index: 100;
            display: flex; justify-content: center; align-items: center;
            opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
        }}
        .alert-overlay.active {{ opacity: 1; pointer-events: all; }}
        .alert-box {{ background: #1E293B; padding: 3rem; border-radius: 2rem; text-align: center; border: 2px solid #3B82F6; }}

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
                <h1 class="game-title">حماية الأرض 🌍</h1>
                <div class="stats">
                    <div class="stat-box lives" id="lives-display">❤️ 3</div>
                    <div class="stat-box timer">⏱️ <span id="timer">30.00</span></div>
                </div>
            </div>

            <button class="start-btn" id="start-btn" onclick="startGame()">تفعيل الدرع!</button>

            <div class="question-box" id="question-box">
                <div class="question-text" id="question-text"></div>
                <div class="options-grid" id="options-grid"></div>
            </div>
        </div>

        <div class="right-col" id="game-scene" style="display: none;">
            <div class="scene-container" id="scene-container">
                <div class="meteor" id="meteor"></div>
                <div class="shield" id="shield"></div>
                <div class="earth" id="earth"></div>
            </div>
        </div>
    </div>

    <div class="alert-overlay" id="alert-overlay">
        <div class="alert-box">
            <div id="alert-icon" style="font-size: 5rem; margin-bottom: 1rem;"></div>
            <h2 id="alert-title" style="color: white; font-size: 2.5rem; margin-bottom: 1rem;"></h2>
            <p id="alert-message" style="color: #94A3B8; font-size: 1.5rem; margin-bottom: 2rem;"></p>
            <button class="answer-btn" id="alert-btn" style="background: #3B82F6; border: none; color: #FFFFFF; width: 100%; justify-content: center;" onclick="nextQuestion()"></button>
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

        function playShield() {{
            playTone(400, 800, 'sine', 0.5, 0.3);
            setTimeout(() => playTone(800, 400, 'sine', 0.2, 0.2), 500);
        }}

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
            {{ q: "Global .......... means the Earth is getting hotter.", options: ["warming", "cooling", "freezing", "raining"], correct: 0 }},
            {{ q: "We must protect the .......... from pollution.", options: ["environment", "sun", "moon", "sky"], correct: 0 }},
            {{ q: "Smoke from factories causes air .......... .", options: ["pollution", "cleaning", "water", "trees"], correct: 0 }},
            {{ q: "Cutting down trees is bad for .......... .", options: ["nature", "cars", "books", "phones"], correct: 0 }},
            {{ q: "We should .......... plastic and glass to save the planet.", options: ["burn", "recycle", "drink", "throw"], correct: 1 }},
            {{ q: "A lot of rubbish in the sea is dangerous for sea .......... .", options: ["animals", "clouds", "stars", "cars"], correct: 0 }},
            {{ q: "Solar .......... is a clean type of energy.", options: ["energy", "water", "sand", "metal"], correct: 0 }},
            {{ q: "Planting more trees helps to .......... the air.", options: ["pollute", "clean", "damage", "burn"], correct: 1 }},
            {{ q: "We can use public .......... like buses to reduce pollution.", options: ["transport", "parks", "gardens", "schools"], correct: 0 }},
            {{ q: "If we all work together, we can .......... our planet.", options: ["save", "destroy", "sell", "break"], correct: 0 }}
        ];

        let currentIndex = 0;
        let lives = 3;
        let timerInterval;
        let timeRemaining = 30.00;
        let isWaitingForInput = true;

        function updateShield() {{
            const percentage = ((currentIndex) / questions.length);
            const shield = document.getElementById('shield');
            shield.style.borderColor = `rgba(59, 130, 246, ${{0.2 + (percentage * 0.8)}})`;
            shield.style.boxShadow = `0 0 ${{percentage * 20}}px rgba(59,130,246,${{percentage * 0.5}})`;

            const meteor = document.getElementById('meteor');
            meteor.className = 'meteor attack';

            if(currentIndex === questions.length) {{
                document.getElementById('scene-container').classList.add('complete');
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
            document.getElementById('question-text').innerHTML = `<span style="color: #3B82F6;">Q${{currentIndex + 1}}:</span> ${{q.q}}`;
            
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
                document.getElementById('meteor').className = 'meteor hit-earth';
                handleFail("انتهى الوقت! ⚠️ اصطدم النيزك!");
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
                updateShield();
                playShield();
                
                if(currentIndex < questions.length) {{
                    setTimeout(() => {{
                        showAlert(true, "إجابة صحيحة! تم تدمير الخطر وزيادة طاقة الدرع 🛡️");
                    }}, 1000);
                }} else {{
                    setTimeout(showWinScreen, 1500);
                }}
            }} else {{
                btns[idx].classList.add('wrong');
                btns[correctIdx].classList.add('correct');
                playHit();
                document.getElementById('meteor').className = 'meteor hit-earth';
                setTimeout(() => handleFail("إجابة خاطئة! ❌ انخفضت قوة الدرع!"), 1000);
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
            document.getElementById('meteor').className = 'meteor'; // reset meteor
            if (lives <= 0) {{ 
                currentIndex = 0; lives = 3; 
                document.getElementById('shield').style.borderColor = 'rgba(59, 130, 246, 0.2)';
                document.getElementById('shield').style.boxShadow = 'none';
                document.getElementById('scene-container').classList.remove('complete');
            }}
            renderQuestion();
        }}

        function showWinScreen() {{
            const qBox = document.getElementById('question-box');
            qBox.innerHTML = `
                <div style="font-size: 6rem; text-align:center; margin-bottom: 1rem;">🌍✨</div>
                <div class="question-text" style="color: white; text-align:center;">تهانينا! اكتمل درع الحماية وأنقذت الأرض! 🎉</div>
                <button class="start-btn" style="width: 100%;" onclick="location.reload()">العب مرة أخرى 🔄</button>
            `;
            playWin();
        }}

        function showGameOver() {{
            const qBox = document.getElementById('question-box');
            qBox.innerHTML = `
                <div style="font-size: 6rem; text-align:center; margin-bottom: 1rem;">💥</div>
                <div class="question-text" style="color: white; text-align:center;">للأسف، تحطم الدرع وتضررت الأرض.</div>
                <button class="start-btn" style="width: 100%;" onclick="location.reload()">العب مرة أخرى 🔄</button>
            `;
        }}
    </script>
</body>
</html>
"""

with open(os.path.join(target_dir, "unit6_game_lesson1.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print("Game 1 for Unit 6 generated successfully.")
