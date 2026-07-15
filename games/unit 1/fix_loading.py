import os
import glob

folder_path = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\العاب 1 ع\UNIT 1 PREP 1"

html_files = glob.glob(os.path.join(folder_path, "game_lesson*.html"))

for filepath in html_files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Remove initAudio() from startGame()
    content = content.replace("function startGame() {\n            initAudio();", "function startGame() {")
    content = content.replace("startGame() {\n            initAudio();", "startGame() {")

    # To be absolutely safe with AudioContext, wrap initAudio in try/catch just in case
    # it's already defined as:
    # function initAudio() {
    #     if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    #     if (audioCtx.state === 'suspended') audioCtx.resume();
    # }
    
    safe_audio = """function initAudio() {
            try {
                if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                if (audioCtx.state === 'suspended') audioCtx.resume();
            } catch (e) {
                console.warn("Audio init failed", e);
            }
        }"""
    
    content = content.replace("""function initAudio() {
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (audioCtx.state === 'suspended') audioCtx.resume();
        }""", safe_audio)

    # Let's also add a proper Start Game button instead of auto-starting,
    # to avoid the timer running before they are ready, and to ensure audio works.
    # But for now, just fixing the crash is the most direct solution.
    # We will replace the auto-start call:
    # // Start
    # startGame();
    # with a button injection in the center of the screen, or just leave it auto-starting but fixed.
    # Given the user complained about "Loading...", auto-start fixing is enough.
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Fixed initAudio in startGame across all files.")
