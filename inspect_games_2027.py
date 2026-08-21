import os

base_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\GAMES 2027"
out_file = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games_2027_report.txt"

lines = []
for item in sorted(os.listdir(base_dir)):
    item_path = os.path.join(base_dir, item)
    if os.path.isdir(item_path):
        lines.append(f"\n[Grade Folder]: {item}")
        for root, dirs, files in os.walk(item_path):
            rel_path = os.path.relpath(root, item_path)
            html_files = [f for f in files if f.endswith('.html')]
            other_files = [f for f in files if not f.endswith('.html')]
            if html_files or other_files or not dirs:
                depth = rel_path.count(os.sep)
                indent = "  " * (depth + 1)
                lines.append(f"{indent}- Subfolder: {rel_path if rel_path != '.' else '[Root]'} | HTML: {len(html_files)} | Other: {len(other_files)}")
                if len(html_files) <= 6 and html_files:
                    lines.append(f"{indent}  Files: {', '.join(html_files)}")
                elif html_files:
                    lines.append(f"{indent}  Files: {', '.join(html_files[:4])} ... (+{len(html_files)-4} more)")

with open(out_file, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print("Report written to games_2027_report.txt")
