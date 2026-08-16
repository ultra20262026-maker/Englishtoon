import os
import shutil
import json
import re

p1_games_dir = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games\primary-1"
js_data_path = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\js\data.js"
games_map_path = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games_map.json"

# 1. Clean games/primary-1 directory
print(f"Deleting all files in {p1_games_dir}...")
if os.path.exists(p1_games_dir):
    for item in os.listdir(p1_games_dir):
        item_path = os.path.join(p1_games_dir, item)
        if os.path.isdir(item_path):
            shutil.rmtree(item_path)
        else:
            os.remove(item_path)
    
    # Recreate clean empty unit folders
    for i in range(1, 7):
        os.makedirs(os.path.join(p1_games_dir, f"unit{i}"), exist_ok=True)
    print("Recreated clean unit1..unit6 directories for Primary 1.")

# 2. Reset GAMES_MAP in js/data.js
with open(js_data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Reset primary-1 entry in GAMES_MAP
empty_p1 = '{"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}'
pattern = r'("primary-1"\s*:\s*\{[^}]+\})'

# Also check for single quotes or nested dict
pattern_nested = r'("primary-1"\s*:\s*\{.*?\}(?=\s*,\s*"(?:primary|prep)-\d+"))'

# Let's cleanly update data.js
with open(js_data_path, "w", encoding="utf-8") as f:
    # Replace GAMES_MAP["primary-1"]
    content_updated = re.sub(
        r'"primary-1"\s*:\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}',
        f'"primary-1": {empty_p1}',
        content,
        count=1
    )
    f.write(content_updated)

print("Updated js/data.js: reset primary-1 games map.")

# 3. Reset in games_map.json if exists
if os.path.exists(games_map_path):
    try:
        with open(games_map_path, "r", encoding="utf-8") as f:
            gm = json.load(f)
        if "primary-1" in gm:
            gm["primary-1"] = {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}
            with open(games_map_path, "w", encoding="utf-8") as f:
                json.dump(gm, f, ensure_ascii=False, indent=2)
            print("Updated games_map.json.")
    except Exception as e:
        print(f"games_map.json update note: {e}")

print("All old Primary 1 games have been completely deleted!")
