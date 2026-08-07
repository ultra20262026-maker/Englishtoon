import re

files = ['dashboard.html', 'games.html', 'exams.html', 'books.html', 'admin.html']

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Replace hero banners
        content = re.sub(r'images/hero_banner_new\.jpg', 'images/hero_banner_light.jpg', content)
        content = re.sub(r'images/hero_banner_fallback\.jpg', 'images/hero_banner_light.jpg', content)
        content = re.sub(r'images/dashboard_bg_.*\.\w+', 'images/hero_banner_light.jpg', content)

        # Replace category icons
        content = re.sub(r'images/game_icon_1_.*\.jpg', 'images/icon_games_3d.jpg', content)
        content = re.sub(r'images/game_icon_2_.*\.jpg', 'images/icon_books_3d.jpg', content)
        content = re.sub(r'images/game_icon_3_.*\.jpg', 'images/icon_exams_3d.jpg', content)
        content = re.sub(r'images/exam_card_icon_.*\.jpg', 'images/icon_admin_3d.jpg', content)

        # Update cache version in sw.js registration if present
        content = re.sub(r'v20260807_V2000', 'v20260807_LIGHT_V1', content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
            
    except Exception as e:
        print(f"Error processing {file}: {e}")

# Update sw.js cache name
with open('sw.js', 'r', encoding='utf-8') as f:
    sw_content = f.read()
sw_content = re.sub(r'const CACHE_NAME = .*;', "const CACHE_NAME = 'englishtoon-cache-v20260807_LIGHT_V1';", sw_content)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw_content)

print("Updated HTML files and sw.js cache name.")
