import json
import os

# Complete 6 Units Master Prompt and Game Bank Generator
# 6 Units x 4 Lessons x 3 Games = 72 Games (1,080 Questions and 3D Pixar Prompts)

units_config = [
    {
        "unit": 1,
        "title": "Welcome to My School",
        "theme": "🏰 عالم القلعة والمدرسة السحرية",
        "bg_prompt": "3D cute Pixar style fairy-tale school playground landscape, soft green grassy hills, sunny blue sky, 16:9 game background, 8k.",
        "lessons": [
            {
                "lesson": 1,
                "title": "Greetings & Introductions",
                "vocab": ["Miss Mona", "Hany", "Youssef", "Hana", "Amira", "Busy Bee", "Hello", "Goodbye", "Play", "Friends", "Teacher", "Handshake", "School", "Classroom", "Welcome"]
            },
            {
                "lesson": 2,
                "title": "Phonics (T & B)",
                "vocab": ["Tree", "Tiger", "Bag", "Book", "Tomato", "Bee", "Table", "Bus", "Teacher", "Blue", "Play", "Ink", "Insect", "Ill", "Hello"]
            },
            {
                "lesson": 3,
                "title": "Around My Classroom",
                "vocab": ["Pencil", "Ruler", "Chair", "Board", "Desk", "Pen", "Stand up", "Sit down", "Open bag", "Close book", "Open book", "Close bag", "Friends", "Say Hello", "Goodbye"]
            },
            {
                "lesson": 4,
                "title": "Phonics (I /ɪ/)",
                "vocab": ["Ink", "Insect", "Ill", "In box", "Iguana", "Tree", "Tiger", "Bag", "Book", "Table", "Bus", "Tomato", "Bee", "Teacher", "Blue"]
            }
        ]
    },
    {
        "unit": 2,
        "title": "The Garden of Colors and Shapes",
        "theme": "🌸 عالم الحديقة والملاعب والألوان",
        "bg_prompt": "3D cute Pixar style colorful fantasy garden with giant blooming flowers, rainbow sky, green rolling grass, 16:9 game background, 8k.",
        "lessons": [
            {
                "lesson": 1,
                "title": "Nature in the Garden",
                "vocab": ["Tree", "Grass", "Flower", "Bird", "Butterfly", "Sky", "Sun", "Green leaf", "Blue sky", "Yellow sun", "Red rose", "Caterpillar", "Ladybug", "Water drop", "Rainbow"]
            },
            {
                "lesson": 2,
                "title": "Phonics (S /s/)",
                "vocab": ["Sun", "Spoon", "Spider", "Snake", "Star", "Sky", "Strawberry", "Socks", "Sand", "Sailboat", "Scissors", "Smile", "Snowman", "Soap", "Submarine"]
            },
            {
                "lesson": 3,
                "title": "Shapes & Colors",
                "vocab": ["Circle", "Square", "Triangle", "Rectangle", "Red paint", "Blue paint", "Yellow paint", "Green paint", "Orange paint", "Black paint", "Pink heart", "Star shape", "Diamond shape", "Oval shape", "Cube block"]
            },
            {
                "lesson": 4,
                "title": "Phonics (A /æ/)",
                "vocab": ["Apple", "Ant", "Axe", "Arrow", "Alligator", "Airplane", "Anchor", "Avocado", "Astronaut", "Acorn", "Arm", "Album", "Ambulance", "Almond", "Animals"]
            }
        ]
    },
    {
        "unit": 3,
        "title": "I Love My Family",
        "theme": "👨‍👩‍👧‍👦 عالم شجرة العائلة وجزيرة الأرقام",
        "bg_prompt": "3D cute Pixar style cozy family living room and sunny treehouse island, warm golden sunlight, 16:9 game background, 8k.",
        "lessons": [
            {
                "lesson": 1,
                "title": "Family Members",
                "vocab": ["Father", "Mother", "Brother", "Sister", "Grandfather", "Grandmother", "Parents", "Baby", "Uncle", "Aunt", "Cousin", "Family photo", "Home house", "Love heart", "Hug"]
            },
            {
                "lesson": 2,
                "title": "Phonics (N & P)",
                "vocab": ["Nose", "Neck", "Nut", "Net", "Nurse", "Nest", "Nail", "Pencil", "Pen", "Parrot", "Panda", "Pizza", "Pin", "Popcorn", "Pear"]
            },
            {
                "lesson": 3,
                "title": "Numbers 1 to 5",
                "vocab": ["One apple", "Two books", "Three pencils", "Four cars", "Five stars", "Number 1 block", "Number 2 block", "Number 3 block", "Number 4 block", "Number 5 block", "Finger counting", "Dice", "Abacus", "Coins", "Balloons"]
            },
            {
                "lesson": 4,
                "title": "Phonics (H & D)",
                "vocab": ["Hat", "Horse", "House", "Hand", "Hair", "Heart", "Helicopter", "Dog", "Duck", "Door", "Drum", "Doll", "Dinosaur", "Donut", "Doctor"]
            }
        ]
    },
    {
        "unit": 4,
        "title": "My Body and My Senses",
        "theme": "👁️ عالم مدينة المستقبل ومختبر الحواس",
        "bg_prompt": "3D cute Pixar style futuristic neon friendly playground and robot science lab, floating pastel holograms, 16:9 game background, 8k.",
        "lessons": [
            {
                "lesson": 1,
                "title": "Body Parts & Cleanliness",
                "vocab": ["Eye", "Ear", "Nose", "Mouth", "Hand", "Face", "Teeth", "Hair", "Feet", "Soap wash", "Toothbrush", "Towel", "Comb brush", "Clean smile", "Mirror"]
            },
            {
                "lesson": 2,
                "title": "Phonics (C & O)",
                "vocab": ["Cat", "Car", "Candle", "Cake", "Cap", "Cup", "Camel", "Orange", "Olive", "Oil bottle", "Octopus", "Ostrich", "Onion", "Otter", "Oven"]
            },
            {
                "lesson": 3,
                "title": "Numbers 6 to 10",
                "vocab": ["Six candles", "Seven balloons", "Eight balls", "Nine apples", "Ten stars", "Number 6 block", "Number 7 block", "Number 8 block", "Number 9 block", "Number 10 block", "Birthday cake", "Party hat", "Gift box", "Confetti", "Ribbon"]
            },
            {
                "lesson": 4,
                "title": "Phonics (E & L)",
                "vocab": ["Egg", "Elephant", "Exit sign", "Envelope", "Engine", "Elf", "Elbow", "Lemon", "Lion", "Leg", "Lamp", "Leaf", "Lollipop", "Ladder", "Lock"]
            }
        ]
    },
    {
        "unit": 5,
        "title": "On the Farm",
        "theme": "🚜 عالم المزرعة السحرية والحيوانات",
        "bg_prompt": "3D cute Pixar style sunny country farm, red wooden barn, green pastures, windmill, fluffy clouds, 16:9 game background, 8k.",
        "lessons": [
            {
                "lesson": 1,
                "title": "Farm Animals",
                "vocab": ["Sheep", "Cow", "Donkey", "Duck", "Hen", "Goat", "Horse", "Rooster", "Chicks", "Barn", "Tractor", "Hay bale", "Fence", "Milk pail", "Farm egg"]
            },
            {
                "lesson": 2,
                "title": "Phonics (F & M)",
                "vocab": ["Frog", "Fish", "Flag", "Flower", "Father", "Fox", "Feather", "Monkey", "Moon", "Mouth", "Milk", "Mango", "Mouse", "Mushroom", "Magnet"]
            },
            {
                "lesson": 3,
                "title": "Food from the Farm",
                "vocab": ["Water glass", "Tea cup", "Milk bottle", "Bread loaf", "Salad bowl", "Chicken meal", "Rice bowl", "Fruit basket", "Cheese", "Butter", "Honey jar", "Tomato", "Carrot", "Egg", "Apple"]
            },
            {
                "lesson": 4,
                "title": "Phonics (G & R)",
                "vocab": ["Goat", "Girl", "Garden", "Guitar", "Grass", "Grapes", "Gift", "Rabbit", "Red paint", "Ring", "Ruler", "Robot", "Rocket", "Rainbow", "Rose"]
            }
        ]
    },
    {
        "unit": 6,
        "title": "Animals Around Me & Music",
        "theme": "🦁 سفاري الموسيقى والغابة الذهبية",
        "bg_prompt": "3D cute Pixar style musical jungle stage with floating neon musical notes, golden stage lights, tropical palm trees, 16:9 game background, 8k.",
        "lessons": [
            {
                "lesson": 1,
                "title": "Wild Animals & Zoo",
                "vocab": ["Lion", "Elephant", "Camel", "Zebra", "Giraffe", "Monkey", "Tiger", "Hippo", "Kangaroo", "Penguin", "Zoo gate", "Jungle tree", "Animal safari car", "Binoculars", "Camera"]
            },
            {
                "lesson": 2,
                "title": "Musical Instruments",
                "vocab": ["Acoustic guitar", "Grand piano", "Marching drum", "Silver flute", "Triangle instrument", "Violin", "Trumpet", "Tambourine", "Microphone", "Headphones", "Musical notes", "Music speaker", "Stage spotlight", "Drumsticks", "Piano keys"]
            },
            {
                "lesson": 3,
                "title": "Phonics (W, Y, Z)",
                "vocab": ["Watch", "Water", "Window", "Whale", "Windmill", "Yogurt", "Yo-yo", "Yellow", "Yacht", "Yak", "Zoo", "Zebra", "Zipper", "Zero", "Zigzag"]
            },
            {
                "lesson": 4,
                "title": "Grand Review & Champions Cup",
                "vocab": ["Golden Cup Trophy", "Winner Medal", "Graduation Cap", "Stars Confetti", "Champion Belt", "Magic Certificate", "Winner Podium", "Firework Rockets", "Crown", "Diamond Key", "Golden Castle", "Level Badge", "Super Student", "Smart Mascot Bee", "Victory Flag"]
            }
        ]
    }
]

output_md = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\P1_ALL_72_GAMES_MASTER_PROMPTS.md"

with open(output_md, "w", encoding="utf-8") as out:
    out.write("# 🏆 المكتبة الشاملة لبرومبتات الـ 72 لعبة لمنهج الصف الأول الابتدائي (Primary 1)\n\n")
    out.write("> **المواصفات القياسية:** جميع البرومبتات مصاغة بأسلوب **3D Cute Pixar / Disney Style**، مع إضاءة استوديو ناعمة وخلفية بيضاء نقية معزولة (`isolated on white background`) لسهولة القص والتركيب المباشر داخل ألعاب المنصة.\n\n")
    out.write("---\n\n")

    total_prompts = 0
    total_games = 0

    for u in units_config:
        out.write(f"## 🏰 الوحدة {u['unit']}: {u['title']} ({u['theme']})\n\n")
        out.write(f"**🖼️ برومبت خلفية بيئة الوحدة (16:9 HD):**\n```text\n{u['bg_prompt']}\n```\n\n")
        
        for les in u['lessons']:
            out.write(f"### 📍 الدرس {les['lesson']}: {les['title']}\n\n")
            
            game_names = [
                ("اللعبة 1: صائد المفردات والاستكشاف (Discovery & Matching)", "لعبة بصرية لمطابقة الصورة والكلمة"),
                ("اللعبة 2: قطار الحروف والصوتيات (Phonics & Spelling)", "لعبة تهجئة وتمييز الأصوات والحروف المفقودة"),
                ("اللعبة 3: سرعة الاستجابة والتحدي الحركي (Action & Speed Arena)", "لعبة تفاعلية سريعة لتطبيق الجمل والمحادثة")
            ]
            
            for g_idx, (g_title, g_desc) in enumerate(game_names, 1):
                total_games += 1
                out.write(f"#### 🎮 {g_title}\n")
                out.write(f"*{g_desc}*\n\n")
                out.write("| # | العنصر المستهدف | برومبت التوليد المباشر (3D Pixar Prompt) |\n")
                out.write("|---|---|---|\n")
                
                for item_idx, item_name in enumerate(les['vocab'], 1):
                    total_prompts += 1
                    prompt = f"3D cute Pixar Disney style icon of a {item_name}, vibrant glossy textures, soft studio lighting, smooth clay 3D render, isolated on pure white background, mobile game asset, ultra high quality 8k."
                    out.write(f"| {item_idx:02d} | **{item_name}** | `{prompt}` |\n")
                
                out.write("\n---\n\n")

    out.write(f"\n\n**الإجمالي العام:** تم توليد وتوثيق {total_games} لعبة تفاعلية و {total_prompts} برومبت 3D عالي الدقة يغطي كامل المنهج بنسبة 100%.\n")

print(f"Successfully generated master prompts file with {total_games} games and {total_prompts} prompts at {output_md}")
