import os
import shutil

repo_dir = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon"
old_games_dir = os.path.join(repo_dir, "games")
new_games_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\GAMES 2027"

print("Deleting old games directory completely...")
if os.path.exists(old_games_dir):
    shutil.rmtree(old_games_dir)

print("Creating fresh games directory...")
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
    else:
        print("WARNING: Source folder not found!")

print("Games successfully migrated!")
