import os
import re

games_dir = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games"

def get_html_files(directory):
    html_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))
    return html_files

files = get_html_files(games_dir)
print(f"Fixing Arabic text in {len(files)} files...")

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        print(f"Skipping {file} due to encoding error")
        continue

    original_content = content

    # 1. Fix guard script alert (mojibake)
    content = re.sub(r"alert\('O1O.*?U<\.'\);", "alert('عذراً لا يمكنك الدخول للعبة مباشرة. يرجى تسجيل الدخول أولاً.');", content)

    # 2. Fix Score and Lives
    content = re.sub(r'<div>\?+:\s*<span id="score"', '<div>النقاط: <span id="score"', content)
    content = re.sub(r'<div>\?+:\s*<span id="lives"', '<div>القلوب: <span id="lives"', content)

    # 3. Fix Game Over Screen
    content = re.sub(r'(<h1[^>]*>)\?+ \?+!(</h1>)', r'\1انتهت اللعبة!\2', content)
    content = re.sub(r'(<p[^>]*>)\?+:\s*<span id="final-score"', r'\1النقاط: <span id="final-score"', content)

    # 4. Fix Buttons
    content = re.sub(r'(onclick="startGame\(\)"[^>]*>)\?+!*(</button>)', r'\1إبدأ اللعب\2', content)
    content = re.sub(r'(onclick="startGame\(\)"[^>]*>)\?+ \?+ \?+(</button>)', r'\1إلعب مرة أخرى\2', content)

    # 5. Fix Start Screen Title
    content = re.sub(r'(id="start-screen"[^>]*>[\s\S]*?<h1[^>]*>)\?+.*?(</h1>)', r'\1مرحباً بك في اللعبة\2', content)

    # 6. Fix Start Screen Subtitle
    content = re.sub(r'(id="start-screen"[^>]*>[\s\S]*?<p[^>]*>)\?+.*?(</p>)', r'\1اضغط على زر إبدأ اللعب لتبدأ المغامرة!\2', content)

    if content != original_content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

print("Fix complete!")
