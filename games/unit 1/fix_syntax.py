import os
import glob

folder_path = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\العاب 1 ع\UNIT 1 PREP 1"

html_files = glob.glob(os.path.join(folder_path, "game_lesson*.html"))

for filepath in html_files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Fix the syntax error injected previously
    content = content.replace("function playWrong();\n                handleFail(msg) {", "function handleFail(msg) {")
    content = content.replace("function playWrong();\n                handleFail(message) {", "function handleFail(message) {")
    content = content.replace("function playWrong();\n        handleFail(msg) {", "function handleFail(msg) {")
    
    # Try generic fixing if the indentation differs
    import re
    # We want to replace "function playWrong();[\s]+handleFail(" with "function handleFail("
    content = re.sub(r'function playWrong\(\);\s*handleFail\(', r'function handleFail(', content)

    # Let's ensure playGameOver is called inside handleFail where lives <= 0 instead of playWin
    # Right now, handleFail just displays the alert. The playGameOver is supposed to happen when lives <= 0
    # Actually playWrong() is already injected at the call sites:
    # playWrong();
    # handleFail("انتهى الوقت! 💥");
    # So handleFail itself doesn't need to play sound, EXCEPT when lives <= 0, then we want playGameOver().
    # Let's add playGameOver() when lives <= 0 if not already there
    if "if (lives <= 0) {" in content and "playGameOver()" not in content:
        # In handleFail
        # if (lives <= 0) {
        #     btn.innerText = "أعد المحاولة";
        # }
        content = content.replace("if (lives <= 0) {", "if (lives <= 0) {\n                playGameOver();")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Fixed syntax error in all game files.")
