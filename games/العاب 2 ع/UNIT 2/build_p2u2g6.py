import os
import glob
import base64

def get_latest_image(prefix, folder):
    files = glob.glob(os.path.join(folder, f"{prefix}_*.png"))
    files.sort(key=os.path.getmtime, reverse=True)
    return files[0] if files else None

brain_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\brain\7ca242fe-3ebe-4bf7-abe1-8b6a786ebadf"
target_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\العاب 2 ع\UNIT 2"

bg_path = get_latest_image("firewall_bg", brain_dir)

def file_to_b64(path):
    if not path or not os.path.exists(path): return ""
    with open(path, "rb") as f:
        return "data:image/png;base64," + base64.b64encode(f.read()).decode('utf-8')

bg_b64 = file_to_b64(bg_path)

html_content = f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>المراجعة النهائية - جدار الحماية الناري</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap');

        * {{ box-sizing: border-box; margin: 0; padding: 0; font-family: 'Outfit', 'Cairo', sans-serif; }}

        body {{
            background-color: #020617;
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
            background: rgba(2, 6, 23, 0.7); z-index: 1; backdrop-filter: blur(2px);
        }}

        #loading-screen {{
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: #020617; z-index: 9999;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            color: #fff; transition: opacity 0.5s ease;
        }}
        .spinner {{
            width: 60px; height: 60px; border: 6px solid rgba(255,255,255,0.2);
            border-top-color: #EF4444; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 20px;
        }}
        @keyframes spin {{ 100% {{ transform: rotate(360deg); }} }}

        .layout-container {{
            position: relative; z-index: 10; width: 100%; max-width: 1200px;
            display: grid; grid-template-columns: 1fr 400px; gap: 2rem; padding: 0 2rem;
        }}

        .left-col {{ display: flex; flex-direction: column; gap: 2rem; }}

        .right-col {{
            background: rgba(15, 23, 42, 0.5); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 1rem;
            height: 80vh; position: relative; box-shadow: inset 0 0 40px rgba(239, 68, 68, 0.1);
            display: flex; flex-direction: column; align-items: center; justify-content: flex-end;
            padding: 20px; overflow: hidden; backdrop-filter: blur(10px);
        }}

        .header {{
            display: flex; justify-content: space-between; align-items: center;
            background: rgba(15, 23, 42, 0.85); padding: 1rem 2rem; border-radius: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);
        }}

        .game-title {{ font-size: 2.2rem; font-weight: 900; color: #EF4444; margin: 0; text-shadow: 0 0 10px rgba(239,68,68,0.5); }}
        .stats {{ display: flex; gap: 1rem; }}
        .stat-box {{ background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; border: 1px solid rgba(255, 255, 255, 0.2); }}
        .timer {{ color: #F87171; min-width: 80px; text-align: center; }}
        .lives {{ color: #FCA5A5; }}

        .question-box {{
            background: rgba(15, 23, 42, 0.85); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 1.5rem;
            padding: 2.5rem; backdrop-filter: blur(10px); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); display: none;
        }}

        .question-text {{ font-size: 2rem; font-weight: 700; margin-bottom: 2rem; direction: ltr; }}
        .options-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }}
        .answer-btn {{
            background: rgba(255, 255, 255, 0.05); border: 2px solid rgba(239, 68, 68, 0.4); color: #FFFFFF;
            padding: 1.2rem; font-size: 1.3rem; font-weight: 700; border-radius: 1rem; cursor: pointer; transition: all 0.3s ease; text-align: left; direction: ltr;
        }}
        .answer-btn:hover {{ background: rgba(239, 68, 68, 0.2); border-color: #EF4444; transform: translateY(-3px); }}
        .answer-btn.correct {{ background: rgba(16, 185, 129, 0.2); border-color: #10B981; }}
        .answer-btn.wrong {{ background: rgba(239, 68, 68, 0.2); border-color: #EF4444; }}

        .start-btn {{
            background: #EF4444; border: none; color: #FFFFFF; padding: 1.5rem 3rem; font-size: 2rem; font-weight: 900;
            border-radius: 1rem; cursor: pointer; margin-top: 3rem; align-self: center; box-shadow: 0 10px 20px rgba(239,68,68,0.4);
        }}

        /* Firewall System */
        .firewall-container {{
            width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: flex-end;
            align-items: center; position: relative; gap: 5px; padding-bottom: 20px;
        }}

        .firewall-row {{
            display: flex; gap: 5px; width: 100%; justify-content: center;
        }}

        .brick {{
            width: 60px; height: 30px; background: rgba(249, 115, 22, 0.2); border: 2px solid #F97316;
            border-radius: 5px; opacity: 0; transform: translateY(20px); transition: all 0.5s ease;
        }}

        .brick.active {{
            opacity: 1; transform: translateY(0); background: rgba(249, 115, 22, 0.8);
            box-shadow: 0 0 15px #F97316;
        }}

        .virus {{
            position: absolute; top: -50px; font-size: 3rem; color: #EF4444;
            filter: drop-shadow(0 0 10px #EF4444); transition: top 0.5s ease;
        }}

        .alert-overlay {{
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.85); z-index: 100;
            display: flex; justify-content: center; align-items: center;
            opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
        }}
        .alert-overlay.active {{ opacity: 1; pointer-events: all; }}
        .alert-box {{ background: #1E293B; padding: 3rem; border-radius: 2rem; text-align: center; border: 2px solid #EF4444; }}

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
                <h1 class="game-title">جدار الحماية الناري 🔥</h1>
                <div class="stats">
                    <div class="stat-box lives" id="lives-display">❤️ 3</div>
                    <div class="stat-box timer">⏱️ <span id="timer">30.00</span></div>
                </div>
            </div>

            <button class="start-btn" id="start-btn" onclick="startGame()">ابنِ الجدار!</button>

            <div class="question-box" id="question-box">
                <div class="question-text" id="question-text"></div>
                <div class="options-grid" id="options-grid"></div>
            </div>
        </div>

        <div class="right-col" id="firewall-section" style="display: none;">
            <div class="firewall-container" id="firewall">
                <!-- Bricks generated by JS -->
            </div>
            <div class="virus" id="virus">👾</div>
        </div>
    </div>

    <div class="alert-overlay" id="alert-overlay">
        <div class="alert-box">
            <div id="alert-icon" style="font-size: 5rem; margin-bottom: 1rem;"></div>
            <h2 id="alert-title" style="color: white; font-size: 2.5rem; margin-bottom: 1rem;"></h2>
            <p id="alert-message" style="color: #94A3B8; font-size: 1.5rem; margin-bottom: 2rem;"></p>
            <button class="answer-btn" id="alert-btn" style="background: #EF4444; border: none; color: #FFFFFF; width: 100%; justify-content: center;" onclick="nextQuestion()"></button>
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

        function playBrick() {{ playTone(400, 200, 'square', 0.2, 0.4); }}
        function playWrong() {{ playTone(250, 100, 'sawtooth', 0.5, 0.5); }}
        function playGameOver() {{ playTone(150, 50, 'square', 1.0, 0.4); }}
        function playWin() {{
            if (!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(400, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 1);
            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.5);
            gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 2);
        }}

        window.onload = () => {{
            document.getElementById('loading-screen').style.opacity = '0';
            setTimeout(() => document.getElementById('loading-screen').style.display = 'none', 500);
            initFirewall();
        }};

        const questions = [
            {{ q: "A digital .......... is a record of everything you do online.", options: ["handprint", "footprint", "trace", "space"], correct: 1 }},
            {{ q: "To keep your information safe, use a .......... password.", options: ["short", "weak", "strong", "public"], correct: 2 }},
            {{ q: "You should use a password .......... to save your passwords securely.", options: ["manager", "player", "builder", "reader"], correct: 0 }},
            {{ q: "A good digital .......... respects others online.", options: ["criminal", "bully", "citizen", "animal"], correct: 2 }},
            {{ q: "If someone bullies you online, you should .......... them immediately.", options: ["thank", "block", "invite", "copy"], correct: 1 }},
            {{ q: "A fake website might try to .......... your personal information.", options: ["protect", "steal", "help", "save"], correct: 1 }},
            {{ q: "Anti-virus software acts like a .......... for your computer.", options: ["virus", "game", "shield", "door"], correct: 2 }},
            {{ q: "Never share your password with .......... .", options: ["your parents", "strangers", "yourself", "your teacher"], correct: 1 }},
            {{ q: "Always .......... the sender's address before opening an email link.", options: ["ignore", "delete", "check", "send"], correct: 2 }},
            {{ q: "Using technology responsibly is part of your digital .......... .", options: ["identity", "car", "toy", "food"], correct: 0 }}
        ];

        let currentIndex = 0;
        let lives = 3;
        let timerInterval;
        let timeRemaining = 30.00;
        let isWaitingForInput = true;

        function initFirewall() {{
            const wall = document.getElementById('firewall');
            for(let i=0; i<10; i++) {{
                const row = document.createElement('div');
                row.className = 'firewall-row';
                // 3 bricks per row
                for(let j=0; j<3; j++) {{
                    const brick = document.createElement('div');
                    brick.className = 'brick';
                    brick.id = `brick-${{9-i}}-${{j}}`; // Bottom up
                    row.appendChild(brick);
                }}
                wall.appendChild(row);
            }}
        }}

        function buildLayer() {{
            for(let j=0; j<3; j++) {{
                const brick = document.getElementById(`brick-${{currentIndex-1}}-${{j}}`);
                if(brick) brick.classList.add('active');
            }}
        }}

        function dropVirus() {{
            const virus = document.getElementById('virus');
            // Drop it to hit the current top layer
            const targetTop = 80 - (currentIndex * 8); // rough percentage
            virus.style.top = `${{targetTop}}%`;
            setTimeout(() => {{
                virus.style.top = '-50px'; // bounce back
            }}, 500);
        }}

        function startGame() {{
            initAudio();
            document.getElementById('start-btn').style.display = 'none';
            document.getElementById('game-header').style.display = 'flex';
            document.getElementById('firewall-section').style.display = 'flex';
            document.getElementById('question-box').style.display = 'block';
            renderQuestion();
        }}

        function renderQuestion() {{
            if (currentIndex >= questions.length || lives <= 0) {{
                showGameOver();
                return;
            }}

            isWaitingForInput = true;
            timeRemaining = 30.00;
            
            document.getElementById('lives-display').innerHTML = '❤️ ' + lives;
            const q = questions[currentIndex];
            document.getElementById('question-text').innerHTML = `<span style="color: #EF4444;">Q${{currentIndex + 1}}:</span> ${{q.q}}`;
            
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
                dropVirus();
                handleFail("انتهى الوقت! ⚠️ هجوم فيروسي ناجح!");
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
                buildLayer();
                playBrick();
                
                setTimeout(() => {{
                    showAlert(true, "إجابة صحيحة! تم بناء طبقة نارية 🔥");
                }}, 800);
            }} else {{
                btns[idx].classList.add('wrong');
                btns[correctIdx].classList.add('correct');
                playWrong();
                dropVirus();
                setTimeout(() => handleFail("إجابة خاطئة! ❌ اختراق في الجدار!"), 1000);
            }}
        }}

        function showAlert(isSuccess, message) {{
            const overlay = document.getElementById('alert-overlay');
            const icon = document.getElementById('alert-icon');
            const title = document.getElementById('alert-title');
            const msg = document.getElementById('alert-message');
            const btn = document.getElementById('alert-btn');

            if (isSuccess) {{
                icon.innerText = '🧱'; title.innerText = 'رائع!'; title.style.color = '#10B981';
            }} else {{
                icon.innerText = '👾'; title.innerText = 'اختراق!'; title.style.color = '#EF4444';
            }}
            msg.innerText = message;
            btn.innerText = lives <= 0 ? "أعد المحاولة 🔄" : "التالي ⏩";
            overlay.classList.add('active');
        }}

        function nextQuestion() {{
            document.getElementById('alert-overlay').classList.remove('active');
            if (lives <= 0) {{ 
                currentIndex = 0; lives = 3; 
                for(let i=0; i<10; i++) {{
                    for(let j=0; j<3; j++) {{
                        const brick = document.getElementById(`brick-${{i}}-${{j}}`);
                        if(brick) brick.classList.remove('active');
                    }}
                }}
            }}
            renderQuestion();
        }}

        function showGameOver() {{
            const qBox = document.getElementById('question-box');
            qBox.innerHTML = `
                <div style="font-size: 6rem; text-align:center; margin-bottom: 1rem;">🔥✨</div>
                <div class="question-text" style="color: white; text-align:center;">اكتمل الجدار الناري! بياناتك في أمان تام! 🎉</div>
                <button class="start-btn" style="width: 100%;" onclick="location.reload()">العب مرة أخرى 🔄</button>
            `;

            document.body.style.filter = 'brightness(1.5)';
            document.getElementById('virus').style.display = 'none';
            
            playWin();
        }}
    </script>
</body>
</html>
"""

with open(os.path.join(target_dir, "unit2_game_lesson6.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print("Game 6 for Unit 2 generated successfully.")
