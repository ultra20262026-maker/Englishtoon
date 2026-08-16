import os
from PIL import Image

src_dir = r"C:\Users\Mr Mahmoud Elziadi\Downloads\images"
dest_dir = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\images\games\p1"
os.makedirs(dest_dir, exist_ok=True)

# List of vocabulary names in order for each of the 10 sheets
sheet_vocab_lists = [
    # Sheet 1: Unit 1 Characters & School
    ["miss_mona", "hany", "youssef", "hana", "amira", "busy_bee", "bag", "book", "pencil", "ruler", "chair", "board", "desk", "pen", "handshake", "book_closed"],
    # Sheet 2: Unit 1 Phonics T, B, I
    ["tree", "tiger", "tomato", "table", "bus", "blue_splash", "bee", "play_ball", "ink", "insect", "ill_boy", "in_box", "stand_up", "sit_down", "open_bag", "close_bag"],
    # Sheet 3: Unit 2 Nature, Phonics S, A
    ["flower", "bird", "butterfly", "grass", "sky", "sun", "spider", "snake", "spoon", "star", "apple", "ant", "axe", "arrow", "alligator", "rainbow"],
    # Sheet 4: Unit 2 Shapes & Colors
    ["circle", "square", "triangle", "rectangle", "red_paint", "blue_paint", "yellow_paint", "green_paint", "orange_paint", "black_paint", "heart", "star_shape", "diamond", "caterpillar", "beads", "palette"],
    # Sheet 5: Unit 3 Family & Phonics N, P
    ["father", "mother", "brother", "sister", "grandfather", "grandmother", "baby", "nose", "neck", "nut", "net", "nurse", "parrot", "panda", "pizza", "pin"],
    # Sheet 6: Unit 3 Numbers 1-5, H, D
    ["num1", "num2", "num3", "num4", "num5", "hat", "horse", "house", "hand", "hair", "dog", "duck", "door", "drum", "doll", "dinosaur"],
    # Sheet 7: Unit 4 Body, Numbers 6-10, C, O
    ["eye", "ear", "mouth", "face", "hands_clean", "soap", "toothbrush", "cake", "num6", "num7", "num8", "num9", "num10", "cat", "car", "orange"],
    # Sheet 8: Unit 4 & 5 Phonics E, L & Farm
    ["egg", "elephant", "exit", "lemon", "lion", "leg", "lamp", "leaf", "sheep", "cow", "donkey", "hen", "goat", "rooster", "barn", "tractor"],
    # Sheet 9: Unit 5 Food & Phonics F, M, G, R
    ["water", "tea", "milk", "bread", "salad", "frog", "fish", "flag", "monkey", "moon", "grapes", "rabbit", "ring", "carrot", "cheese", "honey"],
    # Sheet 10: Unit 6 Music, Animals & Trophy
    ["guitar", "piano", "drum_music", "flute", "triangle_inst", "watch", "window", "yogurt", "yoyo", "zoo_gate", "giraffe", "camel", "zebra", "trophy_cup", "medal", "treasure_chest"]
]

sprite_sheets = sorted([f for f in os.listdir(src_dir) if any(k in f.lower() for k in ["sprite", "grid"])])

print(f"Slicing {len(sprite_sheets)} sprite sheets into {dest_dir}...")

total_icons = 0
for s_idx, sheet_name in enumerate(sprite_sheets):
    sheet_path = os.path.join(src_dir, sheet_name)
    names = sheet_vocab_lists[s_idx] if s_idx < len(sheet_vocab_lists) else [f"sheet_{s_idx+1}_item_{i+1}" for i in range(16)]
    
    with Image.open(sheet_path).convert("RGBA") as img:
        w, h = img.size
        cols, rows = 4, 4
        cell_w, cell_h = w / cols, h / rows
        
        item_idx = 0
        for r in range(rows):
            for c in range(cols):
                # crop with slight margin to remove outer borders
                margin = int(cell_w * 0.04) # 4% margin
                box = (
                    int(c * cell_w + margin),
                    int(r * cell_h + margin),
                    int((c + 1) * cell_w - margin),
                    int((r + 1) * cell_h - margin)
                )
                cropped = img.crop(box)
                
                name = names[item_idx] if item_idx < len(names) else f"icon_{total_icons+1}"
                out_filename = f"{name}.png"
                out_path = os.path.join(dest_dir, out_filename)
                
                cropped.save(out_path, "PNG")
                total_icons += 1
                item_idx += 1

print(f"\n🎉 Successfully sliced and generated {total_icons} high-res 3D icons in {dest_dir}!")
