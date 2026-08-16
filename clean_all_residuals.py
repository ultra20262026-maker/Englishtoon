import os
import re
import json

# 1. Clean dashboard.html
with open('dashboard.html', 'r', encoding='utf-8') as f:
    dash = f.read()

# Replace any broken direct game links in dashboard
dash = re.sub(r"window\.location\.href=['\"]games/primary-1/[^'\"]+['\"]", "window.location.href='grade.html?id=primary-1'", dash)
with open('dashboard.html', 'w', encoding='utf-8') as f:
    f.write(dash)
print("Cleaned dashboard.html links.")

# 2. Clean sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

# Remove all /games/primary-1/ lines from urlsToCache
sw_lines = sw.splitlines()
new_sw_lines = []
for line in sw_lines:
    if '/games/primary-1/' in line:
        continue
    new_sw_lines.append(line)

new_sw = "\n".join(new_sw_lines)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(new_sw)
print("Cleaned sw.js cache urls.")

# 3. Clean games_map.json
with open('games_map.json', 'r', encoding='utf-8') as f:
    gm = json.load(f)

gm["primary-1"] = {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}

with open('games_map.json', 'w', encoding='utf-8') as f:
    json.dump(gm, f, ensure_ascii=False, indent=2)
print("Cleaned games_map.json.")
