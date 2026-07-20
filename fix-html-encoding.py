import os

repo_dir = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon"

replacements = {
    # dashboard.html
    "Ø¨ÙˆØ§Ø¨Ø© Ø§Ù„Ø£Ù„Ø¹Ø§Ø¨ Ø§Ù„ØªØ¹Ù„ÙŠÙ…ÙŠØ© - Ù„ÙˆØ­Ø© Ø§Ù„ØªØ­ÙƒÙ…": "بوابة الألعاب التعليمية - لوحة التحكم",
    "Ø¨ÙˆØ§Ø¨Ø© Ø§Ù„Ø£Ù„Ø¹Ø§Ø¨ ðŸŽ®": "بوابة الألعاب 🎮",
    "Ø¥Ø¶Ø§Ù Ø© Ø·Ù„Ø§Ø¨ âš™ï¸ ": "إضافة طلاب ⚙️",
    "ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø®Ø±ÙˆØ¬": "تسجيل الخروج",
    "Ø£Ù‡Ù„Ø§Ù‹ØŒ ": "أهلاً، ",

    # grade.html
    "Ø£Ù„Ø¹Ø§Ø¨ Ø§Ù„ØµÙ ": "ألعاب الصف",
    "Ø¹Ø°Ø±Ø§Ù‹ØŒ ØºÙŠØ± Ù…ØµØ±Ø­ Ù„Ùƒ Ø¨Ø¯Ø®ÙˆÙ„ Ù‡Ø°Ø§ Ø§Ù„ØµÙ .": "عذراً، غير مصرح لك بدخول هذا الصف.",
    "Ø§Ù„Ø¹ÙˆØ¯Ø© Ù„Ù„Ø±Ø¦ÙŠØ³ÙŠØ©": "العودة للرئيسية",
    "Ø§Ù„ÙˆØ­Ø¯Ø©": "الوحدة",

    # unit.html
    "Ø£Ù„Ø¹Ø§Ø¨ Ø§Ù„ÙˆØ­Ø¯Ø©": "ألعاب الوحدة",
    "Ø¹Ø°Ø±Ø§Ù‹ØŒ ØºÙŠØ± Ù…ØµØ±Ø­ Ù„Ùƒ Ø¨Ø¯Ø®ÙˆÙ„ Ù‡Ø°Ù‡ Ø§Ù„ÙˆØ­Ø¯Ø©.": "عذراً، غير مصرح لك بدخول هذه الوحدة.",
    "Ø³ÙŠØªÙ… Ø¥Ø¶Ø§Ù Ø© Ø§Ù„Ø£Ù„Ø¹Ø§Ø¨ Ù‚Ø±ÙŠØ¨Ø§Ù‹ ðŸš€": "سيتم إضافة الألعاب قريباً 🚀",
}

for filename in ['dashboard.html', 'grade.html', 'unit.html']:
    filepath = os.path.join(repo_dir, filename)
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    for bad, good in replacements.items():
        content = content.replace(bad, good)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed {filename}")
