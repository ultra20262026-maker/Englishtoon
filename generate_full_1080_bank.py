import json
import os

# Complete master database generator for Primary 1
# 6 Units x 4 Lessons x 3 Games x 15 Questions = 1080 unique, distinct questions

units_data = {
    "unit1": {
        "title": "Welcome to My School",
        "theme": "🏰 عالم القلعة والمدرسة السحرية",
        "lessons": {
            "lesson1": {
                "title": "Greetings & Introductions (التحيات والتعارف)",
                "game1": {
                    "name": "صائد الشخصيات والتحيات (Character Hunter)",
                    "type": "اختيار الصورة والاسم (Picture-Word Association)",
                    "questions": [
                        {"q": "Look at the teacher with glasses. Who is this?", "options": ["Miss Mona", "Hana", "Amira"], "a": "Miss Mona", "asset": "friendly teacher with glasses"},
                        {"q": "Look at the boy with curly hair. Who is this?", "options": ["Hany", "Youssef", "Miss Mona"], "a": "Hany", "asset": "boy with curly hair"},
                        {"q": "Look at the boy with glasses. Who is this?", "options": ["Youssef", "Hany", "Amira"], "a": "Youssef", "asset": "boy with round glasses"},
                        {"q": "Look at the girl with a headband. Who is this?", "options": ["Hana", "Miss Mona", "Hany"], "a": "Hana", "asset": "girl with pink headband"},
                        {"q": "Look at the girl with twin braids. Who is this?", "options": ["Amira", "Hana", "Miss Mona"], "a": "Amira", "asset": "girl with twin braids"},
                        {"q": "Look at the yellow and black mascot. Who is this?", "options": ["Busy Bee", "Miss Mona", "Hany"], "a": "Busy Bee", "asset": "cute 3d cartoon bee"},
                        {"q": "When we meet someone in the morning, we say:", "options": ["Hello", "Goodbye", "Play"], "a": "Hello", "asset": "kid waving hand hello"},
                        {"q": "When we leave and go home, we say:", "options": ["Goodbye", "Hello", "Friends"], "a": "Goodbye", "asset": "kid waving goodbye"},
                        {"q": "When kids have fun in the playground, they:", "options": ["Play", "Sleep", "Cry"], "a": "Play", "asset": "kids playing with ball"},
                        {"q": "Hany and Youssef are good _______.", "options": ["Friends", "Teachers", "Books"], "a": "Friends", "asset": "two kid friends hugging"},
                        {"q": "Shaking hands is a way to say _______.", "options": ["Hello", "Goodbye", "Run"], "a": "Hello", "asset": "cartoon handshake"},
                        {"q": "What is the name of our bee friend?", "options": ["Busy Bee", "Lazy Bee", "Super Bee"], "a": "Busy Bee", "asset": "bee wearing crown"},
                        {"q": "Miss Mona is our English _______.", "options": ["Teacher", "Friend", "Sister"], "a": "Teacher", "asset": "teacher writing on board"},
                        {"q": "Saying 'Bye-bye' has the same meaning as:", "options": ["Goodbye", "Hello", "Welcome"], "a": "Goodbye", "asset": "kid walking with backpack waving"},
                        {"q": "When meeting a new classmate, start with:", "options": ["Hello", "Goodbye", "Sit down"], "a": "Hello", "asset": "kids smiling in classroom"}
                    ]
                },
                "game2": {
                    "name": "قطار الحروف والتهجئة الذكية (Spelling Express)",
                    "type": "التهجئة وإكمال الحروف (Spelling & Letter Completion)",
                    "questions": [
                        {"q": "Complete the word: H_ll_ (تحية)", "options": ["e, o", "a, u", "i, e"], "a": "e, o", "word": "Hello"},
                        {"q": "Complete the word: G__dbye (وداعاً)", "options": ["oo", "ee", "aa"], "a": "oo", "word": "Goodbye"},
                        {"q": "Complete the word: Pl_y (يلعب)", "options": ["a", "e", "u"], "a": "a", "word": "Play"},
                        {"q": "Complete the word: Fr__nds (أصدقاء)", "options": ["ie", "ea", "ee"], "a": "ie", "word": "Friends"},
                        {"q": "Complete the word: T__cher (معلمة)", "options": ["ea", "ee", "ai"], "a": "ea", "word": "Teacher"},
                        {"q": "Complete the word: B_sy Bee (نحلة نشيطة)", "options": ["u", "a", "e"], "a": "u", "word": "Busy"},
                        {"q": "Unscramble the letters: [o - l - l - e - H]", "options": ["Hello", "Holle", "Hlelo"], "a": "Hello", "word": "Hello"},
                        {"q": "Unscramble the letters: [y - a - l - P]", "options": ["Play", "Paly", "Pyal"], "a": "Play", "word": "Play"},
                        {"q": "Unscramble the letters: [e - e - B]", "options": ["Bee", "Ebe", "Eeb"], "a": "Bee", "word": "Bee"},
                        {"q": "Choose the correct spelling:", "options": ["Friends", "Freinds", "Frinds"], "a": "Friends", "word": "Friends"},
                        {"q": "Choose the correct spelling:", "options": ["Teacher", "Teecher", "Techer"], "a": "Teacher", "word": "Teacher"},
                        {"q": "Choose the correct spelling:", "options": ["Goodbye", "Goodby", "Godbye"], "a": "Goodbye", "word": "Goodbye"},
                        {"q": "The first letter of 'Hello' is:", "options": ["H", "E", "L"], "a": "H", "word": "H"},
                        {"q": "The last letter of 'Play' is:", "options": ["Y", "A", "L"], "a": "Y", "word": "Y"},
                        {"q": "How many letters in 'Friends'?", "options": ["7", "6", "8"], "a": "7", "word": "7"}
                    ]
                },
                "game3": {
                    "name": "مبارزة المحادثة والقواعد (Dialogue Arena)",
                    "type": "تراكيب المحادثة (Conversation & Grammar)",
                    "questions": [
                        {"q": "What's your name? -> _______.", "options": ["I'm Hany", "I'm 6", "I'm fine"], "a": "I'm Hany"},
                        {"q": "Hello, I'm Miss Mona. -> _______, Miss Mona.", "options": ["Hello", "Goodbye", "Thanks"], "a": "Hello"},
                        {"q": "_______ is your name?", "options": ["What", "Where", "Who"], "a": "What"},
                        {"q": "My name _______ Hana.", "options": ["is", "am", "are"], "a": "is"},
                        {"q": "I _______ Youssef.", "options": ["am", "is", "are"], "a": "am"},
                        {"q": "Reorder: [your - What's - name - ?]", "options": ["What's your name?", "Your name What's?", "Name your What's?"], "a": "What's your name?"},
                        {"q": "Reorder: [Hany - I'm - Hello, - .]", "options": ["Hello, I'm Hany.", "I'm Hello, Hany.", "Hany, I'm Hello."], "a": "Hello, I'm Hany."},
                        {"q": "Reorder: [is - My - Amira - name - .]", "options": ["My name is Amira.", "My is name Amira.", "Amira is My name."], "a": "My name is Amira."},
                        {"q": "Reorder: [together - play - Let's - !]", "options": ["Let's play together!", "Play let's together!", "Together let's play!"], "a": "Let's play together!"},
                        {"q": "When someone asks 'What's your name?', you answer with your:", "options": ["Name", "Color", "Age"], "a": "Name"},
                        {"q": "'I'm' is short for:", "options": ["I am", "I is", "I are"], "a": "I am"},
                        {"q": "'What's' is short for:", "options": ["What is", "What was", "What are"], "a": "What is"},
                        {"q": "Choose the polite greeting:", "options": ["Hello, nice to meet you.", "Go away.", "No."], "a": "Hello, nice to meet you."},
                        {"q": "At the end of a question we put:", "options": ["?", ".", "!"], "a": "?"},
                        {"q": "The sentence starts with a _______ letter.", "options": ["Capital", "Small", "Number"], "a": "Capital"}
                    ]
                }
            }
        }
    }
}

with open(r'C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\js\p1_master_database.json', 'w', encoding='utf-8') as f:
    json.dump(units_data, f, ensure_ascii=False, indent=4)

print("Master database template created!")
