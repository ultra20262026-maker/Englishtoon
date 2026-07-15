import os
import glob
import base64

def get_latest_image(prefix, folder):
    files = glob.glob(os.path.join(folder, f"{prefix}_*.png"))
    files.sort(key=os.path.getmtime, reverse=True)
    return files[0] if files else None

brain_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\brain\7ca242fe-3ebe-4bf7-abe1-8b6a786ebadf"
target_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\العاب 2 ع\UNIT 2"

bg_path = get_latest_image("unit2_dashboard_bg", brain_dir)

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
    <title>ألعاب الوحدة الثانية - الصف الثاني الإعدادي</title>
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
            flex-direction: column;
            align-items: center;
            padding: 4rem 2rem;
            position: relative;
        }}

        body::before {{
            content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(2, 6, 23, 0.75); z-index: 1; backdrop-filter: blur(5px);
        }}

        .content-wrapper {{
            position: relative; z-index: 10; width: 100%; max-width: 1200px;
        }}

        .header {{
            text-align: center; margin-bottom: 4rem;
        }}

        .title {{
            font-size: 4rem; font-weight: 900; color: #10B981; margin-bottom: 1rem;
            text-shadow: 0 0 20px rgba(16,185,129,0.5); letter-spacing: 2px;
        }}

        .subtitle {{
            font-size: 1.5rem; color: #94A3B8; font-weight: 700;
        }}

        .games-grid {{
            display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;
        }}

        .game-card {{
            background: rgba(15, 23, 42, 0.6); border: 2px solid rgba(16, 185, 129, 0.3);
            border-radius: 1.5rem; padding: 2rem; text-align: center;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-decoration: none; color: white; display: flex; flex-direction: column; gap: 1rem;
            backdrop-filter: blur(10px); position: relative; overflow: hidden;
        }}

        .game-card::before {{
            content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(45deg, transparent, rgba(16,185,129,0.1), transparent);
            transform: translateX(-100%); transition: transform 0.6s ease;
        }}

        .game-card:hover {{
            transform: translateY(-10px); border-color: #10B981;
            box-shadow: 0 15px 30px rgba(0,0,0,0.5), 0 0 20px rgba(16,185,129,0.3);
        }}

        .game-card:hover::before {{ transform: translateX(100%); }}

        .game-icon {{ font-size: 4rem; filter: drop-shadow(0 0 10px rgba(16,185,129,0.5)); transition: transform 0.3s ease; }}
        .game-card:hover .game-icon {{ transform: scale(1.1); }}

        .game-name {{ font-size: 1.8rem; font-weight: 900; color: #10B981; }}
        .game-desc {{ font-size: 1.1rem; color: #CBD5E1; line-height: 1.6; }}

        .back-btn {{
            position: absolute; top: 2rem; left: 2rem; z-index: 100;
            background: rgba(15, 23, 42, 0.8); border: 2px solid #3B82F6; color: white;
            padding: 0.8rem 1.5rem; border-radius: 1rem; text-decoration: none;
            font-weight: 700; font-size: 1.2rem; transition: all 0.3s ease;
            display: flex; align-items: center; gap: 0.5rem; backdrop-filter: blur(5px);
        }}
        .back-btn:hover {{ background: #3B82F6; box-shadow: 0 0 15px rgba(59,130,246,0.5); transform: translateX(-5px); }}

    </style>
</head>
<body>
    <a href="../final_dashboard_prep2.html" class="back-btn">⬅️ العودة للرئيسية</a>

    <div class="content-wrapper">
        <div class="header">
            <h1 class="title">الوحدة الثانية: My Digital Footprint</h1>
            <p class="subtitle">اختر الدرس وابدأ التحدي السيبراني!</p>
        </div>

        <div class="games-grid">
            <a href="unit2_game_lesson1.html" class="game-card">
                <div class="game-icon">👣</div>
                <h2 class="game-name">متتبع البصمة</h2>
                <p class="game-desc">درس 1: اكتشف البصمات الرقمية وتتبع أثر البيانات على الإنترنت لتأمينها.</p>
            </a>

            <a href="unit2_game_lesson2.html" class="game-card">
                <div class="game-icon">🔐</div>
                <h2 class="game-name">خزنة البيانات</h2>
                <p class="game-desc">درس 2: أجب بشكل صحيح لتخمين الرقم السري وإغلاق الخزنة بأمان تام.</p>
            </a>

            <a href="unit2_game_lesson3.html" class="game-card">
                <div class="game-icon">🛡️</div>
                <h2 class="game-name">درع الخصوصية</h2>
                <p class="game-desc">درس 3: ميز بين المعلومات العامة والخاصة لتبني درع حماية هولوجرامي منيع.</p>
            </a>

            <a href="unit2_game_lesson4.html" class="game-card">
                <div class="game-icon">🎣</div>
                <h2 class="game-name">متاهة الاحتيال</h2>
                <p class="game-desc">درس 4: اغوص في أعماق الإنترنت وتجنب صنارات الاحتيال الإلكتروني والفيروسات.</p>
            </a>

            <a href="unit2_game_lesson5_6.html" class="game-card">
                <div class="game-icon">🕵️‍♂️</div>
                <h2 class="game-name">المحقق الرقمي</h2>
                <p class="game-desc">درس 5 و 6: استخدم الماسح الضوئي للبحث عن الأدلة واكتشاف مرتكبي الجرائم الرقمية.</p>
            </a>

            <a href="unit2_game_lesson6.html" class="game-card" style="border-color: #F59E0B;">
                <div class="game-icon">🔥</div>
                <h2 class="game-name" style="color: #F59E0B;">جدار الحماية الناري</h2>
                <p class="game-desc">المراجعة النهائية: ابنِ الجدار الناري طوبة بطوبة لصد الهجوم الفيروسي على النظام.</p>
            </a>
        </div>
    </div>
</body>
</html>
"""

with open(os.path.join(target_dir, "unit2_dashboard.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print("Unit 2 Dashboard generated successfully.")
