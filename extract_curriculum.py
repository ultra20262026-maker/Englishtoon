import re

with open('js/p1_book_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

pages = re.findall(r'(\d+):\s*\{\s*pageImg:\s*"([^"]+)",\s*title:\s*"([^"]+)"', content)

answers_by_page = {}
current_page = None

for line in content.splitlines():
    m_page = re.match(r'^\s*(\d+):\s*\{', line)
    if m_page:
        current_page = int(m_page.group(1))
        answers_by_page[current_page] = []
    
    m_ans = re.search(r'answer:\s*"([^"]+)"', line)
    if m_ans and current_page is not None:
        ans = m_ans.group(1)
        if ans != '__free__':
            answers_by_page[current_page].append(ans)

with open('p1_curriculum_breakdown.txt', 'w', encoding='utf-8') as out:
    out.write(f"Total mapped pages in P1: {len(pages)}\n\n")
    for p_num, img, title in pages:
        p_int = int(p_num)
        ans_list = answers_by_page.get(p_int, [])
        ans_str = ", ".join(ans_list[:12])
        if len(ans_list) > 12:
            ans_str += f"... (+{len(ans_list)-12} more)"
        out.write(f"Page {p_int:02d}: {title}\n")
        if ans_list:
            out.write(f"   Answers/Vocab: {ans_str}\n")
        out.write("\n")

print("Wrote curriculum to p1_curriculum_breakdown.txt")
