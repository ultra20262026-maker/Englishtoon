import os
import glob
import base64

def get_latest_image(prefix, folder):
    files = glob.glob(os.path.join(folder, f"{prefix}_*.png"))
    files.sort(key=os.path.getmtime, reverse=True)
    return files[0] if files else None

brain_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\brain\7ca242fe-3ebe-4bf7-abe1-8b6a786ebadf"
target_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\العاب 2 ع\UNIT 5"

thumbnails = {
    'g1': get_latest_image("rocket_launch_bg", brain_dir),
    'g2': get_latest_image("scientist_lab_bg", brain_dir),
    'g3': get_latest_image("future_city_bg", brain_dir),
    'g4': get_latest_image("robot_factory_bg", brain_dir),
    'g5': get_latest_image("moon_surface_bg", brain_dir),
    'g6': get_latest_image("hologram_map_bg", brain_dir),
}

def file_to_b64(path):
    if not path or not os.path.exists(path): return ""
    with open(path, "rb") as f:
        return "data:image/png;base64," + base64.b64encode(f.read()).decode('utf-8')

bg_path = get_latest_image("rocket_launch_bg", brain_dir)
bg_b64 = file_to_b64(bg_path)

html_content = f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الوحدة الخامسة - Helping you, helping me</title>
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
            position: relative;
            padding: 4rem 2rem;
        }}

        body::before {{
            content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(15, 23, 42, 0.7); z-index: 1; backdrop-filter: blur(10px);
        }}

        .container {{
            position: relative; z-index: 10; width: 100%; max-width: 1200px;
        }}

        .header {{
            text-align: center; margin-bottom: 4rem;
        }}

        .unit-title {{
            font-size: 4rem; font-weight: 900; color: #38BDF8;
            text-shadow: 0 0 20px rgba(56,189,248,0.5); margin-bottom: 1rem;
            direction: ltr; display: inline-block;
        }}
        
        .unit-subtitle {{
            font-size: 2rem; color: #E2E8F0; font-weight: 700;
        }}

        .games-grid {{
            display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;
        }}

        .game-card {{
            background: rgba(30, 41, 59, 0.7);
            border: 2px solid rgba(56, 189, 248, 0.3);
            border-radius: 1.5rem; overflow: hidden;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-decoration: none; color: white;
            display: flex; flex-direction: column;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            backdrop-filter: blur(5px);
        }}

        .game-card:hover {{
            transform: translateY(-10px) scale(1.02);
            border-color: #38BDF8;
            box-shadow: 0 20px 40px rgba(56,189,248,0.3);
        }}

        .game-thumb {{
            width: 100%; height: 200px; background-size: cover; background-position: center;
            border-bottom: 2px solid rgba(56, 189, 248, 0.2);
            position: relative;
        }}

        .game-info {{
            padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;
        }}

        .lesson-num {{
            color: #38BDF8; font-weight: 900; font-size: 1.2rem; margin-bottom: 0.5rem;
        }}

        .game-name {{
            font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem;
        }}

        .play-btn {{
            background: rgba(56, 189, 248, 0.2); color: #38BDF8; border: 2px solid #38BDF8;
            padding: 0.8rem; text-align: center; border-radius: 1rem; font-weight: 900; font-size: 1.2rem;
            transition: all 0.3s ease; margin-top: 1rem;
        }}

        .game-card:hover .play-btn {{
            background: #38BDF8; color: #0F172A;
        }}

        .back-btn {{
            position: absolute; top: 2rem; right: 2rem; z-index: 20;
            background: rgba(255,255,255,0.1); color: white; text-decoration: none;
            padding: 1rem 2rem; border-radius: 1rem; font-weight: bold; font-size: 1.2rem;
            border: 1px solid rgba(255,255,255,0.2); transition: all 0.3s;
        }}
        .back-btn:hover {{ background: rgba(255,255,255,0.2); }}

        @media (max-width: 768px) {{
            .unit-title {{ font-size: 3rem; }}
            .games-grid {{ grid-template-columns: 1fr; }}
            .back-btn {{ top: 1rem; right: 1rem; padding: 0.8rem 1.5rem; font-size: 1rem; }}
        }}
    </style>
</head>
<body>
    <a href="../final_dashboard_prep2.html" class="back-btn">العودة للرئيسية ↩️</a>

    <div class="container">
        <div class="header">
            <h1 class="unit-title">Unit 5: Helping you, helping me</h1>
            <p class="unit-subtitle">مرحلة التقدم التكنولوجي والعلوم</p>
        </div>

        <div class="games-grid">
            <a href="unit5_game_lesson1.html" class="game-card">
                <div class="game-thumb" style="background-image: url('{file_to_b64(thumbnails['g1'])}');"></div>
                <div class="game-info">
                    <div>
                        <div class="lesson-num">الدرس الأول</div>
                        <div class="game-name">إطلاق الصاروخ 🚀</div>
                    </div>
                    <div class="play-btn">ابدأ اللعب ▶️</div>
                </div>
            </a>

            <a href="unit5_game_lesson2.html" class="game-card">
                <div class="game-thumb" style="background-image: url('{file_to_b64(thumbnails['g2'])}');"></div>
                <div class="game-info">
                    <div>
                        <div class="lesson-num">الدرس الثاني</div>
                        <div class="game-name">مختبر العالم 🧪</div>
                    </div>
                    <div class="play-btn">ابدأ اللعب ▶️</div>
                </div>
            </a>

            <a href="unit5_game_lesson3.html" class="game-card">
                <div class="game-thumb" style="background-image: url('{file_to_b64(thumbnails['g3'])}');"></div>
                <div class="game-info">
                    <div>
                        <div class="lesson-num">الدرس الثالث</div>
                        <div class="game-name">بناء ناطحة السحاب 🏗️</div>
                    </div>
                    <div class="play-btn">ابدأ اللعب ▶️</div>
                </div>
            </a>

            <a href="unit5_game_lesson4.html" class="game-card">
                <div class="game-thumb" style="background-image: url('{file_to_b64(thumbnails['g4'])}');"></div>
                <div class="game-info">
                    <div>
                        <div class="lesson-num">الدرس الرابع</div>
                        <div class="game-name">مصنع الروبوتات 🤖</div>
                    </div>
                    <div class="play-btn">ابدأ اللعب ▶️</div>
                </div>
            </a>

            <a href="unit5_game_lesson5.html" class="game-card">
                <div class="game-thumb" style="background-image: url('{file_to_b64(thumbnails['g5'])}');"></div>
                <div class="game-info">
                    <div>
                        <div class="lesson-num">الدرس الخامس</div>
                        <div class="game-name">الهبوط على القمر 🌕</div>
                    </div>
                    <div class="play-btn">ابدأ اللعب ▶️</div>
                </div>
            </a>

            <a href="unit5_game_lesson6.html" class="game-card">
                <div class="game-thumb" style="background-image: url('{file_to_b64(thumbnails['g6'])}');"></div>
                <div class="game-info">
                    <div>
                        <div class="lesson-num">الدرس السادس</div>
                        <div class="game-name">الخريطة الهولوغرامية 🗺️</div>
                    </div>
                    <div class="play-btn">ابدأ اللعب ▶️</div>
                </div>
            </a>
        </div>
    </div>
</body>
</html>
"""

with open(os.path.join(target_dir, "unit5_dashboard.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print("Unit 5 Dashboard generated successfully.")
