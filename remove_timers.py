import glob, os, re

games_dir = "games"
html_files = glob.glob(os.path.join(games_dir, '**', '*.html'), recursive=True)

fixed = 0
skipped = 0

for fp in html_files:
    try:
        with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
            original = f.read()
    except:
        skipped += 1
        continue

    text = original

    # ── 1. Hide timer display elements (pill/div showing time) ──────────────
    # <div class="pill time">Time: <b id="timer">02:30</b></div>
    text = re.sub(
        r'<div[^>]*class="[^"]*(?:pill time|time pill)[^"]*"[^>]*>.*?(?:Time|Timer|Countdown|Waktu)[^<]*<b[^>]*id="timer"[^>]*>.*?</b>.*?</div>',
        '<!-- timer removed -->',
        text, flags=re.DOTALL | re.IGNORECASE
    )
    # <div class="pill">Time: <b id="timer">00:00</b></div>
    text = re.sub(
        r'<div[^>]*class="pill"[^>]*>\s*(?:Time|Timer)\s*:\s*<b[^>]*id="timer"[^>]*>.*?</b>\s*</div>',
        '<!-- timer removed -->',
        text, flags=re.DOTALL | re.IGNORECASE
    )
    # <span ...>Time: <b id="timer">
    text = re.sub(
        r'<span[^>]*>(?:Time|Timer)\s*:\s*<b[^>]*id="timer"[^>]*>.*?</b>\s*</span>',
        '',
        text, flags=re.DOTALL | re.IGNORECASE
    )
    # Generic: element with id="timer" or id="bigTimer" or id="countdown" that shows time visually
    # Make the timer elements invisible via display:none
    text = re.sub(
        r'(<(?:div|span|p)[^>]*id="(?:timer|bigTimer|timerDisplay)"[^>]*>)',
        r'\1',
        text, flags=re.IGNORECASE
    )

    # ── 2. Neutralize countdown timer that ends the game ────────────────────
    # Pattern: let timeLeft = NUMBER; ... if (timeLeft <= 0) { ... endGame() }
    # Strategy: Set timeLeft to a very large number (infinite effectively)
    
    # let _timeLeft = 60, _totalTime = 60;  →  let _timeLeft = 999999, _totalTime = 999999;
    text = re.sub(
        r'let _timeLeft\s*=\s*\d+\s*,\s*_totalTime\s*=\s*\d+;',
        'let _timeLeft = 999999, _totalTime = 999999;',
        text
    )
    # _timeLeft = _totalTime;
    # Already handled since _totalTime becomes 999999

    # let timeLeft = 60; (or 90, 30, 10, 120 etc) — countdown timers
    # Only neutralize if followed by a decrement (timeLeft-- or timeLeft -= 1)
    # We do this by setting value to 999999 to effectively disable the game-over trigger
    def neutralize_countdown(m):
        val = int(m.group(1))
        varname = m.group(0).split('=')[0].strip()
        # Only if it's a small number (actual timer), not e.g. score counters
        if val <= 3600:
            return m.group(0).replace(str(val), '999999')
        return m.group(0)

    text = re.sub(
        r'let timeLeft\s*=\s*(\d+)\s*;',
        neutralize_countdown,
        text
    )
    # timeLeft = 10; (reset inside function)
    text = re.sub(
        r'\btimeLeft\s*=\s*(\d+)\s*;',
        lambda m: f'timeLeft = 999999;' if int(m.group(1)) <= 3600 else m.group(0),
        text
    )

    # ── 3. Hide timer bar (visual progress bar that depletes) ────────────────
    # id="timerBar" → display:none
    text = re.sub(
        r'(<[^>]+id="timerBar"[^>]*)(style="[^"]*")?([^>]*>)',
        r'\1 style="display:none"\3',
        text, flags=re.IGNORECASE
    )

    # ── 4. Hide CSS countdown element ────────────────────────────────────────
    # <div id="countdown">01:30</div> or <div id="countdown" class="hidden">
    text = re.sub(
        r'<div([^>]*)id="countdown"([^>]*)>.*?</div>',
        r'<div\1id="countdown"\2 style="display:none!important"></div>',
        text, flags=re.DOTALL | re.IGNORECASE
    )

    # ── 5. Disable tick sound on low time ────────────────────────────────────
    text = re.sub(
        r"if\s*\(_timeLeft\s*<=\s*\d+\)\s*\{\s*SoundEngine\.play\('tick'\);\s*\}",
        '/* tick sound disabled */',
        text
    )
    text = re.sub(
        r"SoundEngine\.play\('tick'\);",
        '/* tick disabled */',
        text
    )

    # ── 6. Stop timer display from updating with countdown value ─────────────
    # document.getElementById('bigTimer').textContent = timeLeft;
    # → replace with nothing (keep var alive but don't show)
    text = re.sub(
        r"document\.getElementById\('bigTimer'\)\.textContent\s*=\s*timeLeft\s*;",
        '// timer display disabled',
        text
    )
    # document.getElementById('timer').textContent = timeLeft;
    text = re.sub(
        r"document\.getElementById\('timer'\)\.textContent\s*=\s*timeLeft\s*;",
        '// timer display disabled',
        text
    )
    # timerEl.textContent = `${m}:${s}`;  → keep this for word search (it's score timer, not game-over)
    # We only remove countdown ones — so leave this if it's an ascending timer (starts from 0)

    # ── 7. Hide timer display in CSS ─────────────────────────────────────────
    # Add style to hide .time-bar, #timerBar, .timer-container
    if '</style>' in text:
        hide_css = """
/* Timer elements hidden */
#timerBar, .timer-bar, .time-bar, .timer-container { display: none !important; }
#bigTimer, .big-timer { display: none !important; }
"""
        text = text.replace('</style>', hide_css + '</style>', 1)

    if text != original:
        try:
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(text)
            fixed += 1
        except Exception as e:
            skipped += 1

print(f"Fixed: {fixed} files")
print(f"Skipped: {skipped} files")
print(f"Total: {len(html_files)} files")
