import os
import shutil
import json
import re

repo_dir = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon"
old_games_dir = os.path.join(repo_dir, "games")
new_games_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\GAMES 2027"

# 1. Copy Games
if os.path.exists(old_games_dir):
    shutil.rmtree(old_games_dir)
os.makedirs(old_games_dir)

mapping = {
    "grade 1 تم": "primary-1",
    "prim 2 تم": "primary-2",
    "prim 3 تم": "primary-3",
    "prim 4 Standalone تم": "primary-4",
    "prim 5 Standaloneتم": "primary-5",
    "prim 6 Standalone  تم": "primary-6",
    "Prep 1 تم": "prep-1"
}

for src_name, target_name in mapping.items():
    src_path = os.path.join(new_games_dir, src_name)
    target_path = os.path.join(old_games_dir, target_name)
    if os.path.exists(src_path):
        print(f"Copying to {target_name}...")
        shutil.copytree(src_path, target_path)

# 2. Build GAMES_MAP
games_map = {}
for grade_id in os.listdir(old_games_dir):
    grade_path = os.path.join(old_games_dir, grade_id)
    if not os.path.isdir(grade_path): continue
    
    games_map[grade_id] = {}
    for unit_dir in os.listdir(grade_path):
        unit_path = os.path.join(grade_path, unit_dir)
        if not os.path.isdir(unit_path): continue
        
        # Extrac unit number (e.g. "Unit 1" or "unit 2")
        m = re.search(r'\d+', unit_dir)
        if not m: continue
        unit_num = m.group(0)
        
        # Rename unit folder to unit<num> to match routing (e.g. unit1)
        new_unit_dir = f"unit{unit_num}"
        new_unit_path = os.path.join(grade_path, new_unit_dir)
        
        if unit_dir != new_unit_dir:
            os.rename(unit_path, new_unit_path)
        else:
            new_unit_path = unit_path
            
        games_list = []
        for file in os.listdir(new_unit_path):
            if file.endswith('.html'):
                name = file.replace('.html', '')
                games_list.append({"name": name, "file": file})
                
        if games_list:
            games_map[grade_id][unit_num] = games_list

# 3. Update data.js
data_js_path = os.path.join(repo_dir, "js", "data.js")
with open(data_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace const GAMES_MAP = ...;
content = re.sub(
    r'const GAMES_MAP = .*?;',
    f'const GAMES_MAP = {json.dumps(games_map, ensure_ascii=False)};',
    content,
    flags=re.DOTALL
)

with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Games copied and data.js updated successfully!")
