import re

with open("exams-grades-view.html", "r", encoding="utf-8") as f:
    text = f.read()

text = re.sub(r"const unitIcons = \[.*?\];", "const unitIcons = ['🚀', '🧩', '🏆', '🎯', '💡', '🌟'];", text)
text = re.sub(r"const unitTitles = \[.*?\];", "const unitTitles = ['الوحدة الأولى', 'الوحدة الثانية', 'الوحدة الثالثة', 'الوحدة الرابعة', 'الوحدة الخامسة', 'الوحدة السادسة'];", text)

with open("exams-grades-view.html", "w", encoding="utf-8") as f:
    f.write(text)
print("Fixed icons!")
