import os
import shutil
from PIL import Image

src_dir = r"C:\Users\Mr Mahmoud Elziadi\Downloads\images"
dest_assets = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\images\games\p1"
dest_worlds = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\images\worlds"

os.makedirs(dest_assets, exist_ok=True)
os.makedirs(dest_worlds, exist_ok=True)

# List all files
files = os.listdir(src_dir)
print(f"Found {len(files)} files in Downloads/images:")
for f in files:
    print(f" - {f}")

# 1. Process World Banners & Trophy
world_mappings = {
    "Knight": "unit1_world.jpg",
    "Cartoon_bear": "unit2_world.jpg",
    "clownfish": "unit3_world.jpg",
    "Astronaut": "unit4_world.jpg",
    "dinosaur": "unit5_world.jpg",
    "Toy_racecar": "unit6_world.jpg",
    "Golden_champion": "grand_trophy.jpg"
}

for f in files:
    full_path = os.path.join(src_dir, f)
    for key, target_name in world_mappings.items():
        if key.lower() in f.lower():
            target_path = os.path.join(dest_worlds, target_name)
            shutil.copy2(full_path, target_path)
            print(f"Copied World/Trophy Asset: {f} -> {target_name}")

# 2. Inspect Sprite Sheets
sprite_sheets = [f for f in sorted(files) if any(k in f.lower() for k in ["sprite", "grid"])]
print(f"\nFound {len(sprite_sheets)} Sprite Sheets to slice:")
for idx, s in enumerate(sprite_sheets, 1):
    img_path = os.path.join(src_dir, s)
    with Image.open(img_path) as img:
        print(f" Sheet {idx}: {s} (Dimensions: {img.size})")

