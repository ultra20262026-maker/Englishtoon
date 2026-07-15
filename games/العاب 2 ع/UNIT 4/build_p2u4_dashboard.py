import os
import glob
import base64

def get_latest_image(prefix, folder):
    files = glob.glob(os.path.join(folder, f"{prefix}_*.png"))
    files.sort(key=os.path.getmtime, reverse=True)
    return files[0] if files else None

brain_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\brain\7ca242fe-3ebe-4bf7-abe1-8b6a786ebadf"
target_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\العاب 2 ع\UNIT 4"

bg_path = get_latest_image("prep2_main_bg", brain_dir)

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
    <title>الصف الثاني الإعدادي - الوحدة الرابعة (Into the Past)</title>
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
            flex-direction: column;
            align-items: center;
            overflow-x: hidden;
            position: relative;
            padding: 2rem;
        }}

        body::before {{
            content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(15, 23, 42, 0.7); z-index: 1; backdrop-filter: blur(10px);
        }}

        .header-container {{
            position: relative; z-index: 10; text-align: center; margin-bottom: 3rem;
            animation: slideDown 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            background: rgba(15, 23, 42, 0.6); padding: 2rem 4rem; border-radius: 2rem;
            border: 2px solid rgba(245, 158, 11, 0.3); box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            backdrop-filter: blur(10px); width: 100%; max-width: 800px;
        }}
        @keyframes slideDown {{ from {{ transform: translateY(-50px); opacity: 0; }} to {{ transform: translateY(0); opacity: 1; }} }}

        .main-title {{ font-size: 3.5rem; font-weight: 900; color: #F59E0B; margin-bottom: 0.5rem; text-shadow: 0 0 20px rgba(245, 158, 11, 0.5); }}
        .subtitle {{ font-size: 1.5rem; color: #94A3B8; font-weight: 700; }}

        .grid-container {{
            position: relative; z-index: 10; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem; width: 100%; max-width: 1200px; padding: 1rem;
        }}

        .game-card {{
            background: rgba(30, 41, 59, 0.6); border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 1.5rem; padding: 2rem; text-align: center; cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative; overflow: hidden; backdrop-filter: blur(10px);
            display: flex; flex-direction: column; justify-content: space-between; min-height: 250px;
        }}

        .game-card::before {{
            content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            transform: rotate(45deg); transition: all 0.5s ease; opacity: 0; pointer-events: none;
        }}

        .game-card:hover {{
            transform: translateY(-10px) scale(1.02);
            border-color: #F59E0B; box-shadow: 0 15px 30px rgba(245, 158, 11, 0.2);
            background: rgba(30, 41, 59, 0.8);
        }}
        .game-card:hover::before {{ opacity: 1; transform: rotate(45deg) translate(20%, 20%); }}

        .game-icon {{ font-size: 4rem; margin-bottom: 1rem; filter: drop-shadow(0 0 10px rgba(255,255,255,0.3)); transition: transform 0.3s; }}
        .game-card:hover .game-icon {{ transform: scale(1.1); filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.5)); }}
        
        .game-title {{ font-size: 1.8rem; font-weight: 800; color: #F8FAFC; margin-bottom: 0.5rem; }}
        .game-desc {{ font-size: 1rem; color: #94A3B8; font-weight: 600; line-height: 1.5; }}
        
        .play-btn {{
            margin-top: 1.5rem; background: transparent; border: 2px solid #F59E0B; color: #F59E0B;
            padding: 0.8rem 2rem; font-size: 1.2rem; font-weight: 700; border-radius: 1rem;
            transition: all 0.3s ease; text-decoration: none; display: inline-block;
        }}
        .game-card:hover .play-btn {{ background: #F59E0B; color: #0F172A; box-shadow: 0 0 15px rgba(245, 158, 11, 0.5); }}

        .review-card {{ border-color: #EAB308; background: rgba(234, 179, 8, 0.05); }}
        .review-card:hover {{ border-color: #EAB308; box-shadow: 0 15px 30px rgba(234, 179, 8, 0.2); }}
        .review-card:hover .game-icon {{ filter: drop-shadow(0 0 15px rgba(234, 179, 8, 0.5)); }}
        .review-card .play-btn {{ border-color: #EAB308; color: #EAB308; }}
        .review-card:hover .play-btn {{ background: #EAB308; color: #0F172A; box-shadow: 0 0 15px rgba(234, 179, 8, 0.5); }}

        .back-btn {{
            position: absolute; top: 2rem; right: 2rem; z-index: 20; background: rgba(15, 23, 42, 0.8);
            border: 2px solid #F87171; color: #F87171; padding: 0.8rem 1.5rem; border-radius: 1rem;
            font-size: 1.2rem; font-weight: 700; text-decoration: none; transition: all 0.3s ease; backdrop-filter: blur(5px);
        }}
        .back-btn:hover {{ background: #F87171; color: #0F172A; box-shadow: 0 0 15px rgba(248, 113, 113, 0.5); transform: translateY(-3px); }}

    </style>
</head>
<body>
    <a href="../final_dashboard_prep2.html" class="back-btn">العودة للرئيسية ↩</a>

    <div class="header-container">
        <h1 class="main-title">الوحدة الرابعة</h1>
        <p class="subtitle">Into the Past (في عمق الماضي)</p>
    </div>

    <div class="grid-container">
        <!-- Game 1 -->
        <a href="unit4_game_lesson1.html" style="text-decoration:none; color:inherit;">
            <div class="game-card">
                <div class="game-icon">🏺</div>
                <div>
                    <h2 class="game-title">الدرس الأول</h2>
                    <p class="game-desc">مقبرة الفرعون وإنارة المشاعل.</p>
                </div>
                <div class="play-btn">ابدأ اللعب</div>
            </div>
        </a>

        <!-- Game 2 -->
        <a href="unit4_game_lesson2.html" style="text-decoration:none; color:inherit;">
            <div class="game-card">
                <div class="game-icon">🗿</div>
                <div>
                    <h2 class="game-title">الدرس الثاني</h2>
                    <p class="game-desc">تحدي حارس المعبد (Must/Mustn't).</p>
                </div>
                <div class="play-btn">ابدأ اللعب</div>
            </div>
        </a>

        <!-- Game 3 -->
        <a href="unit4_game_lesson3.html" style="text-decoration:none; color:inherit;">
            <div class="game-card">
                <div class="game-icon">⏳</div>
                <div>
                    <h2 class="game-title">الدرس الثالث</h2>
                    <p class="game-desc">آلة الزمن وبوابة السفر عبر الماضي.</p>
                </div>
                <div class="play-btn">ابدأ اللعب</div>
            </div>
        </a>

        <!-- Game 4 -->
        <a href="unit4_game_lesson4.html" style="text-decoration:none; color:inherit;">
            <div class="game-card">
                <div class="game-icon">⛏️</div>
                <div>
                    <h2 class="game-title">الدرس الرابع</h2>
                    <p class="game-desc">التنقيب في الرمال واستخراج الجعران الذهبي.</p>
                </div>
                <div class="play-btn">ابدأ اللعب</div>
            </div>
        </a>

        <!-- Game 5 & 6 -->
        <a href="unit4_game_lesson5_6.html" style="text-decoration:none; color:inherit;">
            <div class="game-card">
                <div class="game-icon">📜</div>
                <div>
                    <h2 class="game-title">الدرس 5 و 6</h2>
                    <p class="game-desc">البردي السحري وكتابة التاريخ.</p>
                </div>
                <div class="play-btn">ابدأ اللعب</div>
            </div>
        </a>

        <!-- Final Review -->
        <a href="unit4_review.html" style="text-decoration:none; color:inherit;">
            <div class="game-card review-card">
                <div class="game-icon">🔺</div>
                <div>
                    <h2 class="game-title">المراجعة النهائية</h2>
                    <p class="game-desc">بناء الهرم الذهبي الساطع.</p>
                </div>
                <div class="play-btn">المراجعة الشاملة</div>
            </div>
        </a>
    </div>

    <script>
        // Simple entry animation for cards
        const cards = document.querySelectorAll('.game-card');
        cards.forEach((card, index) => {{
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            setTimeout(() => {{
                card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }}, 200 + (index * 100));
        }});
    </script>
</body>
</html>
"""

with open(os.path.join(target_dir, "unit4_dashboard.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print("Unit 4 Dashboard generated successfully.")
