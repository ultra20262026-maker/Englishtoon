with open('exams-grade.html', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace(
    "const unitIcons = ['dYOY', 'dYs?', 'dYOS', 's', 'dY\'', 'dY?+'];",
    "const unitIcons = ['🚀', '🧩', '🏆', '🎯', '💡', '🌟'];"
)
c = c.replace(
    "const unitTitles = ['?????? ??????', '?????? ???????', '?????? ???????', '?????? ???????', '?????? ???????', '?????? ???????'];",
    "const unitTitles = ['الوحدة الأولى', 'الوحدة الثانية', 'الوحدة الثالثة', 'الوحدة الرابعة', 'الوحدة الخامسة', 'الوحدة السادسة'];"
)
c = c.replace(
    "<span class=\"text-white/70 text-sm font-bold block mb-1\">??????</span>",
    "<span class=\"text-white/70 text-sm font-bold block mb-1\">الوحدة</span>"
)
c = c.replace(
    "<span>???? ??????????</span>",
    "<span>ابدأ الامتحان</span>"
)

old_logic = "const tile = document.createElement('a');"
new_logic = """let unitHasExams = false;
                if (typeof EXAMS_MAP !== 'undefined' && EXAMS_MAP[gradeId] && EXAMS_MAP[gradeId][i] && EXAMS_MAP[gradeId][i].length > 0) {
                    unitHasExams = true;
                }
                const tile = document.createElement(unitHasExams ? 'a' : 'div');"""
c = c.replace(old_logic, new_logic)

c = c.replace("tile.className = 'unit-tile';", "tile.className = unitHasExams ? 'unit-tile' : 'unit-tile opacity-75 grayscale cursor-not-allowed';")

c = c.replace("tile.href = `exams-unit.html?grade=${gradeId}&unit=${i}`;", "if (unitHasExams) { tile.href = `exams-unit.html?grade=${gradeId}&unit=${i}`; } else { tile.onclick = () => alert('امتحانات هذه الوحدة قريباً إن شاء الله!'); }")

c = c.replace('<div class="unit-tile-hover-bar">', '<div class="unit-tile-hover-bar">\n                        ${!unitHasExams ? \'<span class="text-yellow-300 font-bold ml-2">قريباً ⏳</span>\' : \'\'}')

with open('exams-grade.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Updated exams-grade.html via script')
