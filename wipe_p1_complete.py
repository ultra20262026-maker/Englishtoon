import os
import shutil
import json
import re

print("=== STARTING 100% CLEAN WIPE OF PRIMARY 1 ===")

# 1. Wipe games/primary-1 directory
p1_games_dir = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games\primary-1"
if os.path.exists(p1_games_dir):
    shutil.rmtree(p1_games_dir)
os.makedirs(p1_games_dir, exist_ok=True)
for i in range(1, 7):
    os.makedirs(os.path.join(p1_games_dir, f"unit{i}"), exist_ok=True)
print("1. Cleaned games/primary-1 folder.")

# 2. Update js/data.js
data_js_path = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\js\data.js"
with open(data_js_path, "r", encoding="utf-8") as f:
    data_content = f.read()

empty_dict_str = '{"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}'

# Replace GAMES_MAP["primary-1"]
data_content = re.sub(
    r'"primary-1"\s*:\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}',
    f'"primary-1": {empty_dict_str}',
    data_content,
    count=1
)

# Replace GRAMMAR_GAMES_MAP["primary-1"]
data_content = re.sub(
    r'const GRAMMAR_GAMES_MAP\s*=\s*\{"primary-1"\s*:\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}',
    f'const GRAMMAR_GAMES_MAP = {{"primary-1": {empty_dict_str}',
    data_content,
    count=1
)

with open(data_js_path, "w", encoding="utf-8") as f:
    f.write(data_content)
print("2. Reset GAMES_MAP and GRAMMAR_GAMES_MAP in js/data.js.")

# 3. Update games_map.json
gm_path = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games_map.json"
if os.path.exists(gm_path):
    with open(gm_path, "r", encoding="utf-8") as f:
        gm = json.load(f)
    gm["primary-1"] = {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}
    with open(gm_path, "w", encoding="utf-8") as f:
        json.dump(gm, f, ensure_ascii=False, indent=2)
    print("3. Reset games_map.json.")

# 4. Clean grade.html (remove any hardcoded adventure banner if desired, keep clean unit selection)
grade_html_path = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\grade.html"
with open(grade_html_path, "r", encoding="utf-8") as f:
    grade_content = f.read()

# Make sure grade.html does not inject extra banners
grade_content = re.sub(
    r'if\s*\(\s*gradeId\s*===\s*[\'"]primary-1[\'"]\s*\)\s*\{[\s\S]*?container\.appendChild\(advBanner\);\s*\}',
    '',
    grade_content
)
with open(grade_html_path, "w", encoding="utf-8") as f:
    f.write(grade_content)
print("4. Cleaned grade.html.")

# 5. Enhance unit.html empty state to show clear "جاري الإضافة قريباً"
unit_html_path = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\unit.html"
with open(unit_html_path, "r", encoding="utf-8") as f:
    unit_content = f.read()

# Ensure the empty state message is prominent and beautiful
empty_html = """container.innerHTML = `
                    <div class="col-span-full text-center py-24 bg-white/70 backdrop-blur-xl rounded-[2.5rem] border-2 border-dashed border-blue-300 shadow-xl p-8 max-w-2xl mx-auto my-8">
                        <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center text-5xl shadow-lg shadow-blue-500/30 animate-bounce">
                            🚀
                        </div>
                        <h3 class="text-3xl font-black text-slate-800 mb-3 font-ar">جاري الإضافة قريباً!</h3>
                        <p class="text-slate-600 font-bold text-lg leading-relaxed mb-6 font-ar">
                            يتم حالياً تجهيز وإضافة الألعاب التفاعلية الجديدة لهذه الوحدة. ترقبوا التحديث القادم!
                        </p>
                        <span class="inline-block bg-blue-100 text-blue-700 font-black px-5 py-2 rounded-full text-sm font-ar border border-blue-200">
                            ✨ قريباً جداً
                        </span>
                    </div>`;"""

unit_content = re.sub(
    r'if\s*\(\s*allGames\.length\s*===\s*0\s*\)\s*\{[\s\S]*?\}\s*else\s*\{',
    f'if (allGames.length === 0) {{\n                    {empty_html}\n            }} else {{',
    unit_content
)

with open(unit_html_path, "w", encoding="utf-8") as f:
    f.write(unit_content)
print("5. Updated unit.html empty state.")

# 6. Update js/auth.js version
auth_js_path = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\js\auth.js"
with open(auth_js_path, "r", encoding="utf-8") as f:
    auth_content = f.read()

auth_content = re.sub(
    r'const CURRENT_APP_VERSION\s*=\s*"[^"]+";',
    'const CURRENT_APP_VERSION = "20260816_V10000_EMPTY_P1";',
    auth_content
)
with open(auth_js_path, "w", encoding="utf-8") as f:
    f.write(auth_content)
print("6. Updated auth.js CURRENT_APP_VERSION to V10000.")

# 7. Update sw.js CACHE_NAME
sw_js_path = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\sw.js"
with open(sw_js_path, "r", encoding="utf-8") as f:
    sw_content = f.read()

sw_content = re.sub(
    r"const CACHE_NAME\s*=\s*'[^']+';",
    "const CACHE_NAME = 'englishtoon-cache-v20260816_V10000_EMPTY_P1';",
    sw_content
)
with open(sw_js_path, "w", encoding="utf-8") as f:
    f.write(sw_content)
print("7. Updated sw.js CACHE_NAME to V10000.")

# 8. Bump cache buster across all HTML files to v=10000
count = 0
for root, dirs, files in os.walk('.'):
    if '.git' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    c = f.read()
                
                c2 = re.sub(r'src=[\"\']([^\"\']*js/auth\.js)(?:\?v=[a-zA-Z0-9_]+)?[\"\']', r'src="\1?v=10000"', c)
                c2 = re.sub(r'src=[\"\']([^\"\']*js/data\.js)(?:\?v=[a-zA-Z0-9_]+)?[\"\']', r'src="\1?v=10000"', c2)
                
                if c2 != c:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(c2)
                    count += 1
            except Exception as e:
                pass

print(f"8. Updated {count} HTML files with ?v=10000 cache busters.")
print("=== WIPE SCRIPT READY ===")
