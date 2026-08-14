import re, sys

sys.stdout.reconfigure(encoding='utf-8')

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

correct_p6 = '''"primary-6": {
    "1": [
      { "title": "Lesson 1 - A Day in Egypt", "file": "exam_lesson1_a_day_in_egypt.html", "icon": "📖" },
      { "title": "Lesson 2 - Ras Mohamed", "file": "exam_lesson2_ras_mohamed.html", "icon": "📖" },
      { "title": "Lesson 3 - Around Egypt", "file": "exam_lesson3_around_egypt.html", "icon": "📖" },
      { "title": "Lessons 4 & 5 - A Day in My School", "file": "exam_lesson4and5_a_day_in_my_school.html", "icon": "📖" }
    ],
    "2": [
      { "title": "Lesson 1 - Caring for Plants", "file": "exam_lesson1_caring_for_plants.html", "icon": "📖" },
      { "title": "Lesson 2 - Weather", "file": "exam_lesson2_weather.html", "icon": "📖" },
      { "title": "Lesson 3 - The Nile River", "file": "exam_lesson3_nile_river.html", "icon": "📖" },
      { "title": "Lessons 4 & 5 - Wadi El Rayan", "file": "exam_lesson4and5_wadi_el_rayan.html", "icon": "📖" }
    ],
    "3": [
      { "title": "Lesson 1 - Jobs", "file": "exam_lesson1_jobs.html", "icon": "📖" },
      { "title": "Lesson 2 - Help the Community", "file": "exam_lesson2_help_community.html", "icon": "📖" },
      { "title": "Lesson 3 - The Proud Rose", "file": "exam_lesson3_proud_rose.html", "icon": "📖" },
      { "title": "Lessons 4 & 5 - An Egyptian Hero", "file": "exam_lesson4and5_egyptian_hero.html", "icon": "📖" }
    ],
    "4": [
      { "title": "Lesson 1 - Past and Present", "file": "exam_lesson1_past_present.html", "icon": "📖" },
      { "title": "Lesson 2 - Use Energy Wisely", "file": "exam_lesson2_energy_wisely.html", "icon": "📖" },
      { "title": "Lesson 3 - Gifts Under the Ground", "file": "exam_lesson3_gifts_under_ground.html", "icon": "📖" },
      { "title": "Lessons 4 & 5 - Man Made Resources", "file": "exam_lesson4and5_man_made_resources.html", "icon": "📖" }
    ],
    "5": [
      { "title": "Lesson 1 - A Trip Through Time", "file": "exam_lesson1_trip_through_time.html", "icon": "📖" },
      { "title": "Lesson 2 - A Dream Comes True", "file": "exam_lesson2_dream_comes_true.html", "icon": "📖" },
      { "title": "Lesson 3 - The Bundle of Sticks", "file": "exam_lesson3_bundle_of_sticks.html", "icon": "📖" },
      { "title": "Lessons 4 & 5 - Egypt Goes Green", "file": "exam_lesson4and5_egypt_goes_green.html", "icon": "📖" }
    ]
  }'''

# Find the EXAMS_MAP object start
start_marker = 'const EXAMS_MAP = '
exams_map_start = text.find(start_marker)

# Find "primary-6": { inside EXAMS_MAP
p6_start = text.find('"primary-6": {', exams_map_start)

if p6_start != -1:
    print(f"Found 'primary-6' inside EXAMS_MAP at index {p6_start}")
    
    # Find the closing brace for primary-6
    # We will just parse the brackets
    depth = 0
    p6_end = -1
    in_p6 = False
    
    for i in range(p6_start, len(text)):
        if text[i] == '{':
            depth += 1
            in_p6 = True
        elif text[i] == '}':
            depth -= 1
            if in_p6 and depth == 0:
                p6_end = i + 1
                break
                
    if p6_end != -1:
        print(f"Replacing 'primary-6' block from {p6_start} to {p6_end}")
        new_text = text[:p6_start] + correct_p6 + text[p6_end:]
        with open('js/data.js', 'w', encoding='utf-8') as f:
            f.write(new_text)
        print("Success! data.js updated.")
    else:
        print("Error: Could not find end of 'primary-6' block.")
else:
    print("Error: Could not find 'primary-6' inside EXAMS_MAP.")
