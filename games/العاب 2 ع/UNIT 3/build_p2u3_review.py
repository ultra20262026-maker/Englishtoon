import os
import glob
import base64

def get_latest_image(prefix, folder):
    files = glob.glob(os.path.join(folder, f"{prefix}_*.png"))
    files.sort(key=os.path.getmtime, reverse=True)
    return files[0] if files else None

brain_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\brain\7ca242fe-3ebe-4bf7-abe1-8b6a786ebadf"
target_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\العاب 2 ع\UNIT 3"

bg_path = get_latest_image("dark_stage_bg", brain_dir)
trophy_path = get_latest_image("golden_trophy_prop", brain_dir)

def file_to_b64(path):
    if not path or not os.path.exists(path): return ""
    with open(path, "rb") as f:
        return "data:image/png;base64," + base64.b64encode(f.read()).decode('utf-8')

bg_b64 = file_to_b64(bg_path)
trophy_b64 = file_to_b64(trophy_path)

html_content = f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مراجعة الوحدة الثالثة - تحدي الكأس</title>
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
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
            padding: 2rem;
        }}

        body::before {{
            content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(15, 23, 42, 0.7); z-index: 1; backdrop-filter: blur(5px);
        }}

        .spotlight {{
            position: absolute; top: -50px; left: 50%; transform: translateX(-50%);
            width: 300px; height: 100vh;
            background: linear-gradient(180deg, rgba(234,179,8,0.3) 0%, transparent 100%);
            clip-path: polygon(20% 0, 80% 0, 100% 100%, 0% 100%);
            z-index: 2; opacity: 0; transition: opacity 2s ease;
        }}

        .main-container {{
            position: relative; z-index: 10; width: 100%; max-width: 800px;
            background: rgba(30, 41, 59, 0.85); border: 2px solid rgba(234, 179, 8, 0.3);
            border-radius: 2rem; padding: 3rem; box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            backdrop-filter: blur(10px); text-align: center;
        }}

        .trophy-container {{
            width: 200px; height: 200px; margin: 0 auto 2rem; position: relative;
            perspective: 1000px; display: none;
        }}

        .trophy {{
            width: 100%; height: 100%;
            background-image: url('{trophy_b64}'); background-size: contain; background-repeat: no-repeat;
            background-position: center;
            animation: float 3s ease-in-out infinite, glow 2s alternate infinite;
            filter: drop-shadow(0 0 20px rgba(234, 179, 8, 0.8));
        }}

        @keyframes float {{
            0%, 100% {{ transform: translateY(0) rotateY(0); }}
            50% {{ transform: translateY(-20px) rotateY(180deg); }}
        }}

        @keyframes glow {{
            0% {{ filter: drop-shadow(0 0 20px rgba(234, 179, 8, 0.5)); }}
            100% {{ filter: drop-shadow(0 0 40px rgba(234, 179, 8, 1)); }}
        }}

        .title {{ font-size: 3rem; font-weight: 900; color: #EAB308; margin-bottom: 1rem; text-shadow: 0 0 10px rgba(234,179,8,0.5); }}
        .subtitle {{ font-size: 1.5rem; color: #94A3B8; margin-bottom: 3rem; }}

        .progress-bar {{
            width: 100%; height: 20px; background: rgba(255,255,255,0.1);
            border-radius: 10px; overflow: hidden; margin-bottom: 2rem;
            border: 1px solid rgba(234,179,8,0.3);
        }}
        .progress-fill {{
            height: 100%; background: linear-gradient(90deg, #EAB308, #F59E0B);
            width: 0%; transition: width 0.5s ease; box-shadow: 0 0 10px #EAB308;
        }}

        .question-text {{ font-size: 2.5rem; font-weight: 700; margin-bottom: 2rem; direction: ltr; min-height: 80px; display: flex; align-items: center; justify-content: center; }}
        
        .options-grid {{ display: grid; grid-template-columns: 1fr; gap: 1rem; }}
        .answer-btn {{
            background: rgba(255, 255, 255, 0.05); border: 2px solid rgba(234, 179, 8, 0.4); color: #FFFFFF;
            padding: 1.5rem; font-size: 1.5rem; font-weight: 700; border-radius: 1rem; cursor: pointer; transition: all 0.3s ease; text-align: left; direction: ltr;
            display: flex; align-items: center; gap: 1rem;
        }}
        .answer-btn:hover {{ background: rgba(234, 179, 8, 0.2); border-color: #EAB308; transform: translateY(-3px); }}
        .answer-btn.correct {{ background: rgba(16, 185, 129, 0.2); border-color: #10B981; box-shadow: 0 0 20px rgba(16,185,129,0.5); }}
        .answer-btn.wrong {{ background: rgba(239, 68, 68, 0.2); border-color: #EF4444; box-shadow: 0 0 20px rgba(239,68,68,0.5); }}

        .start-btn {{
            background: #EAB308; border: none; color: #1E293B; padding: 1.5rem 4rem; font-size: 2rem; font-weight: 900;
            border-radius: 1rem; cursor: pointer; box-shadow: 0 10px 20px rgba(234,179,8,0.4); transition: transform 0.2s;
        }}
        .start-btn:hover {{ transform: scale(1.05); }}

        /* Confetti */
        .confetti {{ position: fixed; width: 10px; height: 10px; background-color: #f2d74e; animation: fall 4s linear infinite; z-index: 100; pointer-events: none; opacity: 0; }}
        @keyframes fall {{ 0% {{ opacity: 1; top: -10%; transform: translateX(0) rotate(0deg); }} 100% {{ opacity: 0; top: 110%; transform: translateX(100px) rotate(360deg); }} }}

    </style>
</head>
<body>
    <div class="spotlight" id="spotlight"></div>

    <div class="main-container" id="intro-screen">
        <h1 class="title">المراجعة النهائية - الوحدة الثالثة</h1>
        <p class="subtitle">Facing Challenges</p>
        <p style="font-size: 1.5rem; color: white; margin-bottom: 2rem;">أجب عن الأسئلة بدقة لفتح الكأس الذهبي للوحدة!</p>
        <button class="start-btn" onclick="startGame()">ابدأ التحدي النهائي</button>
    </div>

    <div class="main-container" id="quiz-screen" style="display: none;">
        <div class="progress-bar"><div class="progress-fill" id="progress"></div></div>
        <div class="question-text" id="question-text"></div>
        <div class="options-grid" id="options-grid"></div>
    </div>

    <div class="main-container" id="win-screen" style="display: none;">
        <div class="trophy-container" id="trophy-container"><div class="trophy"></div></div>
        <h1 class="title">عمل رائع!</h1>
        <p class="subtitle">لقد أتممت الوحدة الثالثة بنجاح وحصلت على كأس "Facing Challenges"!</p>
        <button class="start-btn" onclick="location.href='unit3_dashboard.html'">العودة للوحة التحكم</button>
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

        function playCorrect() {{ playTone(400, 800, 'sine', 0.5, 0.4); }}
        function playWrong() {{ playTone(300, 150, 'sawtooth', 0.5, 0.4); }}
        function playGrandWin() {{
            if (!audioCtx) return;
            const osc1 = audioCtx.createOscillator();
            const osc2 = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc1.type = 'triangle'; osc2.type = 'sine';
            osc1.frequency.setValueAtTime(300, audioCtx.currentTime);
            osc1.frequency.linearRampToValueAtTime(600, audioCtx.currentTime + 1);
            osc1.frequency.linearRampToValueAtTime(1200, audioCtx.currentTime + 2);
            
            osc2.frequency.setValueAtTime(450, audioCtx.currentTime);
            osc2.frequency.linearRampToValueAtTime(900, audioCtx.currentTime + 1);
            osc2.frequency.linearRampToValueAtTime(1800, audioCtx.currentTime + 2);
            
            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.5);
            gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 3);
            
            osc1.connect(gain); osc2.connect(gain); gain.connect(audioCtx.destination);
            osc1.start(); osc2.start();
            osc1.stop(audioCtx.currentTime + 3); osc2.stop(audioCtx.currentTime + 3);
        }}

        const questions = [
            {{ q: "Ali .......... be an astronaut when he grows up.", options: ["will", "going to", "goes", "did"], correct: 0 }},
            {{ q: "A __________ is something difficult but exciting to do.", options: ["toy", "challenge", "fear", "bed"], correct: 1 }},
            {{ q: "We are .......... to play football tomorrow.", options: ["go", "goes", "going", "will"], correct: 2 }},
            {{ q: "She didn't .......... the exam because she didn't study.", options: ["pass", "fail", "run", "eat"], correct: 0 }},
            {{ q: "What .......... you do if you win the prize?", options: ["are", "will", "do", "did"], correct: 1 }},
            {{ q: "The mountain was very high, but he .......... to the top.", options: ["sleep", "climbed", "ate", "drank"], correct: 1 }},
            {{ q: ".......... she going to visit us next week?", options: ["Are", "Am", "Is", "Will"], correct: 2 }},
            {{ q: "To .......... means to successfully deal with a problem.", options: ["overcome", "forget", "lose", "drop"], correct: 0 }},
            {{ q: "They aren't .......... to buy a new car this year.", options: ["go", "going", "will", "went"], correct: 1 }},
            {{ q: "I think it .......... snow tomorrow.", options: ["is going to", "will", "goes", "doing"], correct: 1 }}
        ];

        let currentIndex = 0;
        let isWaitingForInput = true;

        function startGame() {{
            initAudio();
            document.getElementById('intro-screen').style.display = 'none';
            document.getElementById('quiz-screen').style.display = 'block';
            renderQuestion();
        }}

        function renderQuestion() {{
            if (currentIndex >= questions.length) {{
                showWinScreen();
                return;
            }}

            isWaitingForInput = true;
            document.getElementById('progress').style.width = `${{(currentIndex / questions.length) * 100}}%`;
            
            const q = questions[currentIndex];
            document.getElementById('question-text').innerHTML = `<span style="color: #EAB308; margin-right: 15px;">${{currentIndex + 1}}.</span> ${{q.q}}`;
            
            const optsBox = document.getElementById('options-grid');
            optsBox.innerHTML = '';
            const letters = ['A', 'B', 'C', 'D'];
            q.options.forEach((opt, idx) => {{
                optsBox.innerHTML += `
                    <button class="answer-btn" onclick="selectOption(${{idx}})">
                        <span style="background: rgba(255,255,255,0.1); padding: 0.5rem 1.5rem; border-radius: 0.5rem; min-width: 60px; text-align:center;">${{letters[idx]}}</span>
                        ${{opt}}
                    </button>`;
            }});
        }}

        function selectOption(idx) {{
            if (!isWaitingForInput) return;
            isWaitingForInput = false;
            initAudio();

            const btns = document.querySelectorAll('.answer-btn');
            const correctIdx = questions[currentIndex].correct;

            if (idx === correctIdx) {{
                btns[idx].classList.add('correct');
                playCorrect();
                currentIndex++;
                setTimeout(renderQuestion, 1000);
            }} else {{
                btns[idx].classList.add('wrong');
                btns[correctIdx].classList.add('correct');
                playWrong();
                // Penalty: Reset to start
                setTimeout(() => {{
                    currentIndex = 0;
                    document.getElementById('progress').style.width = '0%';
                    renderQuestion();
                }}, 1500);
            }}
        }}

        function showWinScreen() {{
            document.getElementById('quiz-screen').style.display = 'none';
            document.getElementById('win-screen').style.display = 'block';
            document.getElementById('spotlight').style.opacity = '1';
            document.getElementById('trophy-container').style.display = 'block';
            
            playGrandWin();
            createConfetti();
        }}

        function createConfetti() {{
            const colors = ['#EAB308', '#3B82F6', '#EF4444', '#10B981', '#FFFFFF'];
            for(let i=0; i<100; i++) {{
                const conf = document.createElement('div');
                conf.className = 'confetti';
                conf.style.left = Math.random() * 100 + 'vw';
                conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                conf.style.animationDelay = Math.random() * 3 + 's';
                conf.style.animationDuration = Math.random() * 2 + 2 + 's';
                document.body.appendChild(conf);
            }}
        }}
    </script>
</body>
</html>
"""

with open(os.path.join(target_dir, "unit3_review.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print("Final Review for Unit 3 generated successfully.")
