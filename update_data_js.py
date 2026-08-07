import re

with open('js/data.js', 'r', encoding='utf-8-sig') as f:
    content = f.read()

# We need to insert { id: 'new_games_7_8', title: 'ألعاب جديدة 7/8/2026' }, at the beginning of each units array.
# The units array looks like:
# units: [
#     { id: '1', title: 'الوحدة الأولى' },

new_item = "\n        { id: 'new_games_7_8', title: 'ألعاب جديدة 7/8/2026' },"
content = re.sub(r'units:\s*\[', r'units: [' + new_item, content)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated js/data.js")
