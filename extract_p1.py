import os
import re

base_path = r'C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games\primary-1'
output_file = r'C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\p1_games_summary.txt'

game_ideas = {}

for root, dirs, files in os.walk(base_path):
    rel = os.path.relpath(root, base_path)
    for f in files:
        if f.endswith('.html') and f != 'index.html':
            filepath = os.path.join(root, f)
            name = f.replace('.html', '')
            
            # Clean name if numbered
            clean_name = re.sub(r'^\d+_', '', name)
            
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
                content = fp.read(10000)
                
            title_m = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
            title = title_m.group(1).strip() if title_m else clean_name
            
            # Look for h1, h2, instructions or descriptions
            desc_m = re.search(r'<p[^>]*class=[\'"][^\'"]*(?:desc|instruction|intro)[^\'"]*[\'"][^>]*>(.*?)</p>', content, re.IGNORECASE | re.DOTALL)
            desc = desc_m.group(1).strip() if desc_m else ""
            
            # normalize key
            key = clean_name.strip()
            
            if key not in game_ideas:
                game_ideas[key] = {
                    'title': title,
                    'file': f,
                    'units': [rel],
                    'desc': desc
                }
            else:
                if rel not in game_ideas[key]['units']:
                    game_ideas[key]['units'].append(rel)

with open(output_file, 'w', encoding='utf-8') as out:
    out.write(f"Total Unique Game Ideas: {len(game_ideas)}\n\n")
    for key, data in sorted(game_ideas.items()):
        out.write(f"Game: {key} (Title: {data['title']})\n")
        out.write(f"Found in: {', '.join(data['units'])}\n")
        out.write(f"File sample: {data['file']}\n")
        if data['desc']:
            out.write(f"Desc snippet: {data['desc']}\n")
        out.write("-" * 50 + "\n")

print(f"Extracted {len(game_ideas)} unique game ideas into {output_file}")
