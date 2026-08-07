import json
import os
import shutil

games_dir = r'C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games'

with open('games_map.json', 'r', encoding='utf-8-sig') as f:
    data = json.load(f)

for grade, units in data.items():
    if 'new_games_7_8' in units:
        dest_folder = os.path.join(games_dir, grade, 'new_games_7_8')
        os.makedirs(dest_folder, exist_ok=True)
        
        for game in units['new_games_7_8']:
            filename = game['file']
            
            # If it already has the prefix, skip
            if filename.startswith('new_games_7_8/'):
                continue
                
            # Find where this file currently is in the grade folder
            found = False
            for root, dirs, files in os.walk(os.path.join(games_dir, grade)):
                if 'new_games_7_8' in root:
                    continue
                if filename in files:
                    src_path = os.path.join(root, filename)
                    dest_path = os.path.join(dest_folder, filename)
                    # Move the file
                    shutil.move(src_path, dest_path)
                    found = True
                    break
            
            # Update the JSON entry
            game['file'] = f"new_games_7_8/{filename}"

with open('games_map.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Moved files and updated games_map.json")
