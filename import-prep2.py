import os
import shutil
import json
import re

repo_dir = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon"
new_games_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\222222"
prep2_dir = os.path.join(repo_dir, "games", "prep-2")

# Create prep-2 directory
if not os.path.exists(prep2_dir):
    os.makedirs(prep2_dir)

# Mapping of source folders to destination units
unit_mapping = {
    "Prep2_ActionGames_Unit1": "unit1",
    "Prep2_ActionGames_Unit2": "unit2",
    "Prep2_ActionGames_Unit3": "unit3",
    "Prep2_ActionGames_Unit4": "unit4",
    "Prep2_ActionGames_Unit5": "unit5",
    "Prep2_ActionGames_Unit6": "unit6"
}

# 1. Copy Files
for src_folder, dest_unit in unit_mapping.items():
    src_path = os.path.join(new_games_dir, src_folder)
    dest_path = os.path.join(prep2_dir, dest_unit)
    
    if not os.path.exists(src_path):
        print(f"Warning: {src_path} not found.")
        continue
        
    if not os.path.exists(dest_path):
        os.makedirs(dest_path)
        
    # Handle Unit1 which has a nested Unit1 folder
    if src_folder == "Prep2_ActionGames_Unit1":
        actual_src_path = os.path.join(src_path, "Unit1")
    else:
        actual_src_path = src_path
        
    for item in os.listdir(actual_src_path):
        item_path = os.path.join(actual_src_path, item)
        if os.path.isfile(item_path) and item.endswith(".html") and item != "index.html":
            shutil.copy2(item_path, os.path.join(dest_path, item))
            
print("Files copied.")

# 2. Update data.js
data_js_path = os.path.join(repo_dir, "js", "data.js")
with open(data_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the existing GAMES_MAP
match = re.search(r'const GAMES_MAP = (\{.*?\});', content, re.DOTALL)
if match:
    games_map_str = match.group(1)
    games_map = json.loads(games_map_str)
else:
    print("Could not find GAMES_MAP in data.js")
    exit(1)

# Build prep-2 map
prep2_map = {}
for unit_num in range(1, 7):
    unit_str = str(unit_num)
    unit_dir = os.path.join(prep2_dir, f"unit{unit_num}")
    if os.path.exists(unit_dir):
        games_list = []
        for file in os.listdir(unit_dir):
            if file.endswith('.html') and file != "index.html":
                name = file.replace('.html', '')
                games_list.append({"name": name, "file": file})
        if games_list:
            prep2_map[unit_str] = games_list

games_map["prep-2"] = prep2_map

# Write back to data.js
new_content = content[:match.start()] + f"const GAMES_MAP = {json.dumps(games_map, ensure_ascii=False)};" + content[match.end():]

with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("data.js updated.")
