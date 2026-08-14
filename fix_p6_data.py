import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract the EXAMS_MAP JSON object using bracket counting
start_marker = 'const EXAMS_MAP = '
start_idx = text.find(start_marker)
if start_idx == -1:
    print("ERROR: EXAMS_MAP not found!")
    exit(1)

obj_start = text.index('{', start_idx)
depth = 0
obj_end = obj_start
for i in range(obj_start, len(text)):
    if text[i] == '{':
        depth += 1
    elif text[i] == '}':
        depth -= 1
        if depth == 0:
            obj_end = i + 1
            break

exams_json_str = text[obj_start:obj_end]
print("EXAMS_MAP extracted, length:", len(exams_json_str))

try:
    exams_map = json.loads(exams_json_str)
    print("Keys in EXAMS_MAP:", list(exams_map.keys()))
    p6 = exams_map.get('primary-6', {})
    print("primary-6 units:", list(p6.keys()))
    for u, exams in p6.items():
        print(f"  unit {u}: {len(exams)} exams")
except json.JSONDecodeError as e:
    print("JSON parse error:", e)
    # Try to find primary-6 manually
    pass

# Now replace primary-6 with correct data
correct_p6 = {
    "1": [
        {"title": "Lesson 1 - A Day in Egypt", "file": "exam_lesson1_a_day_in_egypt.html", "icon": "📖"},
        {"title": "Lesson 2 - Ras Mohamed", "file": "exam_lesson2_ras_mohamed.html", "icon": "📖"},
        {"title": "Lesson 3 - Around Egypt", "file": "exam_lesson3_around_egypt.html", "icon": "📖"},
        {"title": "Lessons 4 & 5 - A Day in My School", "file": "exam_lesson4and5_a_day_in_my_school.html", "icon": "📖"}
    ],
    "2": [
        {"title": "Lesson 1 - Caring for Plants", "file": "exam_lesson1_caring_for_plants.html", "icon": "📖"},
        {"title": "Lesson 2 - Weather", "file": "exam_lesson2_weather.html", "icon": "📖"},
        {"title": "Lesson 3 - The Nile River", "file": "exam_lesson3_nile_river.html", "icon": "📖"},
        {"title": "Lessons 4 & 5 - Wadi El Rayan", "file": "exam_lesson4and5_wadi_el_rayan.html", "icon": "📖"}
    ],
    "3": [
        {"title": "Lesson 1 - Jobs", "file": "exam_lesson1_jobs.html", "icon": "📖"},
        {"title": "Lesson 2 - Help the Community", "file": "exam_lesson2_help_community.html", "icon": "📖"},
        {"title": "Lesson 3 - The Proud Rose", "file": "exam_lesson3_proud_rose.html", "icon": "📖"},
        {"title": "Lessons 4 & 5 - An Egyptian Hero", "file": "exam_lesson4and5_egyptian_hero.html", "icon": "📖"}
    ],
    "4": [
        {"title": "Lesson 1 - Past and Present", "file": "exam_lesson1_past_present.html", "icon": "📖"},
        {"title": "Lesson 2 - Use Energy Wisely", "file": "exam_lesson2_energy_wisely.html", "icon": "📖"},
        {"title": "Lesson 3 - Gifts Under the Ground", "file": "exam_lesson3_gifts_under_ground.html", "icon": "📖"},
        {"title": "Lessons 4 & 5 - Man Made Resources", "file": "exam_lesson4and5_man_made_resources.html", "icon": "📖"}
    ],
    "5": [
        {"title": "Lesson 1 - A Trip Through Time", "file": "exam_lesson1_trip_through_time.html", "icon": "📖"},
        {"title": "Lesson 2 - A Dream Comes True", "file": "exam_lesson2_dream_comes_true.html", "icon": "📖"},
        {"title": "Lesson 3 - The Bundle of Sticks", "file": "exam_lesson3_bundle_of_sticks.html", "icon": "📖"},
        {"title": "Lessons 4 & 5 - Egypt Goes Green", "file": "exam_lesson4and5_egypt_goes_green.html", "icon": "📖"}
    ]
}

exams_map['primary-6'] = correct_p6

# Rebuild the JS file
new_json = json.dumps(exams_map, ensure_ascii=False, indent=2)
new_text = text[:obj_start] + new_json + text[obj_end:]

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("\nDone! primary-6 updated with", sum(len(v) for v in correct_p6.values()), "exams across", len(correct_p6), "units.")

# Verify
with open('js/data.js', 'r', encoding='utf-8') as f:
    verify = f.read()
idx2 = verify.find('const EXAMS_MAP = ')
ob2 = verify.index('{', idx2)
depth2 = 0
for i in range(ob2, len(verify)):
    if verify[i] == '{': depth2 += 1
    elif verify[i] == '}':
        depth2 -= 1
        if depth2 == 0:
            oe2 = i + 1
            break
em2 = json.loads(verify[ob2:oe2])
p6v = em2.get('primary-6', {})
print("Verification - primary-6 units:", list(p6v.keys()))
for u, exams in p6v.items():
    print(f"  unit {u}: {len(exams)} exams -> first: {exams[0]['file']}")
