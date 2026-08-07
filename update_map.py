import json
import re

with open('games_map.json', 'r', encoding='utf-8-sig') as f:
    data = json.load(f)

for grade, units in data.items():
    new_games_unit = []
    
    # Iterate over existing units to find and remove new games
    for unit_id in list(units.keys()):
        if unit_id == 'new_games_7_8':
            continue
            
        filtered_unit = []
        for game in units[unit_id]:
            # If it starts with G and a number, e.g., G1_fishing.html or G24_slingshot.html
            if re.match(r'^G\d+_', game['file']):
                if game not in new_games_unit:
                    new_games_unit.append(game)
            else:
                filtered_unit.append(game)
        
        units[unit_id] = filtered_unit
    
    if new_games_unit:
        units['new_games_7_8'] = new_games_unit

with open('games_map.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated games_map.json")
