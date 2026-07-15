import os
import glob
import base64

def get_latest_image(prefix, folder):
    files = glob.glob(os.path.join(folder, f"{prefix}_*.png"))
    files.sort(key=os.path.getmtime, reverse=True)
    return files[0] if files else None

brain_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\brain\7ca242fe-3ebe-4bf7-abe1-8b6a786ebadf"
target_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\العاب 2 ع\UNIT 2"

bg_path = get_latest_image("vault_bg", brain_dir)

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
    <title>الدرس الثاني - خزنة البيانات</title>
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
            background: rgba(15, 23, 42, 0.7); z-index: 1; backdrop-filter: blur(3px);
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
            padding: 20px; overflow: hidden; backdrop-filter: blur(10px);
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
        .answer-btn:hover {{ background: rgba(59, 130, 246, 0.2); border-color: #3B82F6; transform: translateY(-3px); }}
        .answer-btn.correct {{ background: rgba(16, 185, 129, 0.2); border-color: #10B981; }}
        .answer-btn.wrong {{ background: rgba(239, 68, 68, 0.2); border-color: #EF4444; }}

        .start-btn {{
            background: #3B82F6; border: none; color: #FFFFFF; padding: 1.5rem 3rem; font-size: 2rem; font-weight: 900;
            border-radius: 1rem; cursor: pointer; margin-top: 3rem; align-self: center; box-shadow: 0 10px 20px rgba(59,130,246,0.4);
        }}

        /* Vault Keypad System */
        .keypad {{
            width: 250px; background: #1E293B; border-radius: 15px; border: 4px solid #475569;
            padding: 20px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.5);
        }}

        .key-btn {{
            background: rgba(255,255,255,0.05); border: 2px solid #334155; border-radius: 10px;
            height: 60px; display: flex; justify-content: center; align-items: center;
            font-size: 1.5rem; font-weight: bold; color: #94A3B8; transition: all 0.2s ease;
        }}

        .key-btn.active {{
            background: rgba(16, 185, 129, 0.2); border-color: #10B981; color: #10B981;
            box-shadow: 0 0 15px rgba(16, 185, 129, 0.5); text-shadow: 0 0 5px #10B981;
        }}

        .display-screen {{
            grid-column: span 3; background: #0F172A; border: 2px solid #334155; border-radius: 10px;
            height: 60px; display: flex; justify-content: center; align-items: center;
            font-size: 2rem; font-family: monospace; color: #10B981; letter-spacing: 5px;
            text-shadow: 0 0 10px #10B981; margin-bottom: 10px;
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
                <h1 class="game-title">خزنة البيانات 🔐</h1>
                <div class="stats">
                    <div class="stat-box lives" id="lives-display">❤️ 3</div>
                    <div class="stat-box timer">⏱️ <span id="timer">30.00</span></div>
                </div>
            </div>

            <button class="start-btn" id="start-btn" onclick="startGame()">فتح لوحة الأرقام!</button>

            <div class="question-box" id="question-box">
                <div class="question-text" id="question-text"></div>
                <div class="options-grid" id="options-grid"></div>
            </div>
        </div>

        <div class="right-col" id="vault-section" style="display: none;">
            <div class="keypad" id="keypad">
                <div class="display-screen" id="display-screen"></div>
                <!-- Keys 1-9 generated by JS -->
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

        function playBeep() {{ playTone(1500, 1500, 'square', 0.1, 0.2); }}
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
            initKeypad();
        }};

        const questions = [
            {{ q: "You must keep your password a .......... from others.", options: ["public", "secret", "game", "name"], correct: 1 }},
            {{ q: "Don't use your .......... or birth date in your password.", options: ["school", "friend", "name", "food"], correct: 2 }},
            {{ q: "A .......... password is hard to guess.", options: ["weak", "small", "short", "strong"], correct: 3 }},
            {{ q: "Which of these is a safe password?", options: ["123456", "password", "G#7kLp!2", "111111"], correct: 2 }},
            {{ q: "If you write your password on a paper, someone might .......... it.", options: ["steal", "help", "build", "play"], correct: 0 }},
            {{ q: "You should .......... your passwords regularly to stay safe.", options: ["keep", "change", "copy", "read"], correct: 1 }},
            {{ q: "Never share your password with your .......... online.", options: ["parents", "teachers", "internet friends", "self"], correct: 2 }},
            {{ q: "To login, you need a username and a .......... .", options: ["photo", "drawing", "password", "address"], correct: 2 }},
            {{ q: "A password manager helps you .......... all your passwords safely.", options: ["store", "forget", "share", "delete"], correct: 0 }},
            {{ q: "Using the same password for all accounts is very .......... .", options: ["safe", "clever", "dangerous", "good"], correct: 2 }}
        ];

        let currentIndex = 0;
        let lives = 3;
        let timerInterval;
        let timeRemaining = 30.00;
        let isWaitingForInput = true;
        let passcode = "";

        function initKeypad() {{
            const keypad = document.getElementById('keypad');
            for(let i=1; i<=9; i++) {{
                const btn = document.createElement('div');
                btn.className = 'key-btn';
                btn.id = `key-${{i}}`;
                btn.innerText = i;
                keypad.appendChild(btn);
            }}
            const star = document.createElement('div'); star.className = 'key-btn'; star.innerText = '*'; keypad.appendChild(star);
            const zero = document.createElement('div'); zero.className = 'key-btn'; zero.innerText = '0'; keypad.appendChild(zero);
            const hash = document.createElement('div'); hash.className = 'key-btn'; hash.innerText = '#'; keypad.appendChild(hash);
        }}

        function enterDigit() {{
            const digits = "1234567890*#";
            const randomDigit = digits[Math.floor(Math.random() * digits.length)];
            passcode += "*"; // Display asterisks
            document.getElementById('display-screen').innerText = passcode;
            
            // Flash a random key
            const keys = document.querySelectorAll('.key-btn');
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            randomKey.classList.add('active');
            setTimeout(() => randomKey.classList.remove('active'), 300);
        }}

        function startGame() {{
            initAudio();
            document.getElementById('start-btn').style.display = 'none';
            document.getElementById('game-header').style.display = 'flex';
            document.getElementById('vault-section').style.display = 'flex';
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
                handleFail("انتهى الوقت! ⚠️ الخزنة في خطر!");
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
                enterDigit();
                playBeep();
                
                setTimeout(() => {{
                    showAlert(true, "إجابة صحيحة! تم إدخال رقم سري صحيح 🔐");
                }}, 800);
            }} else {{
                btns[idx].classList.add('wrong');
                btns[correctIdx].classList.add('correct');
                playWrong();
                setTimeout(() => handleFail("إجابة خاطئة! ❌ محاولة اختراق فاشلة!"), 1000);
            }}
        }}

        function showAlert(isSuccess, message) {{
            const overlay = document.getElementById('alert-overlay');
            const icon = document.getElementById('alert-icon');
            const title = document.getElementById('alert-title');
            const msg = document.getElementById('alert-message');
            const btn = document.getElementById('alert-btn');

            if (isSuccess) {{
                icon.innerText = '🔐'; title.innerText = 'رائع!'; title.style.color = '#10B981';
            }} else {{
                icon.innerText = '❌'; title.innerText = 'تحذير!'; title.style.color = '#EF4444';
            }}
            msg.innerText = message;
            btn.innerText = lives <= 0 ? "أعد المحاولة 🔄" : "التالي ⏩";
            overlay.classList.add('active');
        }}

        function nextQuestion() {{
            document.getElementById('alert-overlay').classList.remove('active');
            if (lives <= 0) {{ 
                currentIndex = 0; lives = 3; passcode = "";
                document.getElementById('display-screen').innerText = "";
            }}
            renderQuestion();
        }}

        function showGameOver() {{
            const qBox = document.getElementById('question-box');
            qBox.innerHTML = `
                <div style="font-size: 6rem; text-align:center; margin-bottom: 1rem;">🛡️✨</div>
                <div class="question-text" style="color: white; text-align:center;">تهانينا! تم تأمين الخزنة بنجاح بكلمة مرور قوية جداً! 🎉</div>
                <button class="start-btn" style="width: 100%;" onclick="location.reload()">العب مرة أخرى 🔄</button>
            `;

            document.getElementById('display-screen').innerText = "SECURED";
            document.getElementById('display-screen').style.color = "#EAB308";
            document.getElementById('display-screen').style.textShadow = "0 0 20px #EAB308";
            document.body.style.filter = 'brightness(1.5)';
            
            playWin();
        }}
    </script>
</body>
</html>
"""

with open(os.path.join(target_dir, "unit2_game_lesson2.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print("Game 2 for Unit 2 generated successfully.")
