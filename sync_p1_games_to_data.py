import json
import re

# Read adventure database
with open('js/p1_adventure_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract JSON
json_text = text.split("window.P1_ADVENTURE_DATABASE = ")[1].strip().rstrip(";")
adv_data = json.loads(json_text)

p1_games_map = {}

for w in adv_data["worlds"]:
    u_id = str(w["id"])
    p1_games_map[u_id] = []
    for l in w["lessons"]:
        for g in l["games"]:
            p1_games_map[u_id].append({
                "name": g["name"],
                "file": f"../../p1-game-player.html?game={g['id']}"
            })

# 1. Update js/data.js
with open('js/data.js', 'r', encoding='utf-8') as f:
    data_js = f.read()

p1_json_str = json.dumps(p1_games_map, ensure_ascii=False)

data_js = re.sub(
    r'"primary-1"\s*:\s*\{"1":\s*\[\],\s*"2":\s*\[\],\s*"3":\s*\[\],\s*"4":\s*\[\],\s*"5":\s*\[\],\s*"6":\s*\[\]\}',
    f'"primary-1": {p1_json_str}',
    data_js
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_js)
print("Updated js/data.js successfully.")

# 2. Update games_map.json
with open('games_map.json', 'r', encoding='utf-8') as f:
    gm = json.load(f)

gm["primary-1"] = p1_games_map
with open('games_map.json', 'w', encoding='utf-8') as f:
    json.dump(gm, f, ensure_ascii=False, indent=2)
print("Updated games_map.json successfully.")
