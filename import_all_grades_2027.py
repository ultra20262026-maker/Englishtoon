import os
import shutil
import json
import re

base_scratch = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\GAMES 2027"
project_root = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon"
games_root = os.path.join(project_root, "games")

grades_config = [
    {
        "id": "primary-1",
        "name": "Primary 1",
        "source_folder": "grade 1 تم",
        "type": "p1"
    },
    {
        "id": "primary-2",
        "name": "Primary 2",
        "source_folder": "prim 2 تم",
        "type": "unit_dirs"
    },
    {
        "id": "primary-3",
        "name": "Primary 3",
        "source_folder": "prim 3 تم",
        "type": "unit_dirs"
    },
    {
        "id": "primary-4",
        "name": "Primary 4",
        "source_folder": "prim 4 Standalone تم",
        "type": "unit_dirs"
    },
    {
        "id": "primary-5",
        "name": "Primary 5",
        "source_folder": "prim 5 Standaloneتم",
        "type": "unit_dirs"
    },
    {
        "id": "primary-6",
        "name": "Primary 6",
        "source_folder": "prim 6 Standalone  تم",
        "type": "unit_dirs"
    },
    {
        "id": "prep-1",
        "name": "Prep 1",
        "source_folder": "Prep 1 تم",
        "type": "unit_dirs"
    },
    {
        "id": "prep-2",
        "name": "Prep 2",
        "source_folder": "2ع",
        "type": "prep2"
    }
]

data_js_path = os.path.join(project_root, "js", "data.js")
with open(data_js_path, "r", encoding="utf-8") as f:
    data_content = f.read()

games_map_match = re.search(r'const GAMES_MAP\s*=\s*(\{[\s\S]*?\});', data_content)
all_games_map = {}
if games_map_match:
    try:
        all_games_map = json.loads(games_map_match.group(1))
    except Exception as e:
        pass

total_copied = 0
log_lines = []

for gc in grades_config:
    grade_id = gc["id"]
    source_dir = os.path.join(base_scratch, gc["source_folder"])
    target_dir = os.path.join(games_root, grade_id)
    
    log_lines.append(f"\n==========================================")
    log_lines.append(f"Processing {gc['name']} ({grade_id})...")
    log_lines.append(f"From: {source_dir}")
    log_lines.append(f"To: {target_dir}")
    
    if os.path.exists(target_dir):
        shutil.rmtree(target_dir)
    os.makedirs(target_dir, exist_ok=True)
    for u in range(1, 7):
        os.makedirs(os.path.join(target_dir, f"unit{u}"), exist_ok=True)
        
    all_games_map[grade_id] = {str(u): [] for u in range(1, 7)}
    
    if gc["type"] == "p1":
        for u in range(1, 7):
            src_unit_dir = os.path.join(source_dir, f"unit {u}")
            if not os.path.exists(src_unit_dir):
                src_unit_dir = os.path.join(source_dir, f"unit{u}")
            
            dest_unit_dir = os.path.join(target_dir, f"unit{u}")
            
            if os.path.exists(src_unit_dir):
                for f_name in sorted(os.listdir(src_unit_dir)):
                    src_file = os.path.join(src_unit_dir, f_name)
                    dest_file = os.path.join(dest_unit_dir, f_name)
                    
                    if os.path.isfile(src_file):
                        shutil.copy2(src_file, dest_file)
                        total_copied += 1
                        if f_name.endswith('.html') and f_name != 'index.html':
                            game_name = f_name.replace('.html', '').replace('_', ' ')
                            all_games_map[grade_id][str(u)].append({
                                "name": game_name,
                                "file": f_name
                            })
                            
    elif gc["type"] == "unit_dirs":
        for u in range(1, 7):
            possible_names = [f"Unit {u}", f"unit {u}", f"Unit{u}", f"unit{u}"]
            src_unit_dir = None
            for pname in possible_names:
                candidate = os.path.join(source_dir, pname)
                if os.path.exists(candidate):
                    src_unit_dir = candidate
                    break
                    
            dest_unit_dir = os.path.join(target_dir, f"unit{u}")
            
            if src_unit_dir and os.path.exists(src_unit_dir):
                for f_name in sorted(os.listdir(src_unit_dir)):
                    src_file = os.path.join(src_unit_dir, f_name)
                    dest_file = os.path.join(dest_unit_dir, f_name)
                    
                    if os.path.isfile(src_file):
                        shutil.copy2(src_file, dest_file)
                        total_copied += 1
                        if f_name.endswith('.html') and f_name != 'index.html':
                            game_name = f_name.replace('.html', '')
                            all_games_map[grade_id][str(u)].append({
                                "name": game_name,
                                "file": f_name
                            })
                    elif os.path.isdir(src_file):
                        shutil.copytree(src_file, dest_file, dirs_exist_ok=True)

    elif gc["type"] == "prep2":
        u1_src = os.path.join(source_dir, "Prep2_ActionGames_Unit1", "Unit1")
        if os.path.exists(u1_src):
            dest_unit1 = os.path.join(target_dir, "unit1")
            for f_name in sorted(os.listdir(u1_src)):
                if f_name.endswith('.html'):
                    shutil.copy2(os.path.join(u1_src, f_name), os.path.join(dest_unit1, f_name))
                    total_copied += 1
                    all_games_map[grade_id]["1"].append({
                        "name": f_name.replace('.html', ''),
                        "file": f_name
                    })
                    
        for u in range(2, 7):
            src_u_folder = os.path.join(source_dir, f"Prep2_ActionGames_Unit{u}")
            dest_u_dir = os.path.join(target_dir, f"unit{u}")
            
            if os.path.exists(src_u_folder):
                for item in os.listdir(src_u_folder):
                    src_item = os.path.join(src_u_folder, item)
                    dest_item = os.path.join(dest_u_dir, item)
                    
                    if os.path.isfile(src_item):
                        shutil.copy2(src_item, dest_item)
                        total_copied += 1
                        if item.endswith('.html') and item != 'index.html':
                            all_games_map[grade_id][str(u)].append({
                                "name": item.replace('.html', ''),
                                "file": item
                            })
                    elif os.path.isdir(src_item):
                        shutil.copytree(src_item, dest_item, dirs_exist_ok=True)
                        
    log_lines.append(f"Summary for {gc['name']}:")
    for u in range(1, 7):
        log_lines.append(f"  - Unit {u}: {len(all_games_map[grade_id][str(u)])} games")

log_lines.append(f"\nTotal files copied: {total_copied}")

# Update js/data.js
games_map_json_str = json.dumps(all_games_map, ensure_ascii=False)
data_content = re.sub(
    r'const GAMES_MAP\s*=\s*\{[\s\S]*?\};',
    f'const GAMES_MAP = {games_map_json_str};',
    data_content
)

empty_grammar = {gc["id"]: {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []} for gc in grades_config}
empty_grammar["prep-3"] = {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}
data_content = re.sub(
    r'const GRAMMAR_GAMES_MAP\s*=\s*\{[\s\S]*?\};',
    f'const GRAMMAR_GAMES_MAP = {json.dumps(empty_grammar, ensure_ascii=False)};',
    data_content
)

with open(data_js_path, "w", encoding="utf-8") as f:
    f.write(data_content)
log_lines.append("Updated js/data.js successfully.")

games_map_file = os.path.join(project_root, "games_map.json")
with open(games_map_file, "w", encoding="utf-8") as f:
    json.dump(all_games_map, f, ensure_ascii=False, indent=2)
log_lines.append("Updated games_map.json successfully.")

auth_js_path = os.path.join(project_root, "js", "auth.js")
with open(auth_js_path, "r", encoding="utf-8") as f:
    auth_content = f.read()

auth_content = re.sub(
    r'const CURRENT_APP_VERSION\s*=\s*"[^"]+";',
    'const CURRENT_APP_VERSION = "202701_GAMES_ALL_GRADES_V1";',
    auth_content
)
with open(auth_js_path, "w", encoding="utf-8") as f:
    f.write(auth_content)

sw_js_path = os.path.join(project_root, "sw.js")
with open(sw_js_path, "r", encoding="utf-8") as f:
    sw_content = f.read()

sw_content = re.sub(
    r"const CACHE_NAME\s*=\s*'[^']+';",
    "const CACHE_NAME = 'englishtoon-cache-v202701_GAMES_ALL_GRADES_V1';",
    sw_content
)
with open(sw_js_path, "w", encoding="utf-8") as f:
    f.write(sw_content)

count = 0
for root, dirs, files in os.walk(project_root):
    if '.git' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    c = f.read()
                
                c2 = re.sub(r'src=[\"\']([^\"\']*js/auth\.js)(?:\?v=[a-zA-Z0-9_]+)?[\"\']', r'src="\1?v=202701"', c)
                c2 = re.sub(r'src=[\"\']([^\"\']*js/data\.js)(?:\?v=[a-zA-Z0-9_]+)?[\"\']', r'src="\1?v=202701"', c2)
                
                if c2 != c:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(c2)
                    count += 1
            except Exception as e:
                pass

log_lines.append(f"Updated {count} HTML files with ?v=202701 cache busters.")

with open(os.path.join(project_root, "import_log.txt"), "w", encoding="utf-8") as f:
    f.write("\n".join(log_lines))

print("=== IMPORT FINISHED SUCCESSFULLY ===")
