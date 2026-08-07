import re

files = ['dashboard.html', 'games.html', 'exams.html', 'books.html', 'admin.html']

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Replace hero banners
        content = re.sub(r'images/hero_banner\.(jpg|png|webp)', 'images/hero_banner_light.jpg', content)
        content = re.sub(r'images/hero_banner_new\.(jpg|png)', 'images/hero_banner_light.jpg', content)
        content = re.sub(r'images/dashboard_bg_.*\.\w+', 'images/hero_banner_light.jpg', content)

        # Replace category icons (they might be .png or .jpg)
        content = re.sub(r'images/game_icon_1\.(png|jpg)', 'images/icon_games_3d.jpg', content)
        content = re.sub(r'images/game_icon_2\.(png|jpg)', 'images/icon_books_3d.jpg', content)
        content = re.sub(r'images/game_icon_3\.(png|jpg)', 'images/icon_exams_3d.jpg', content)
        content = re.sub(r'images/game_icon_4\.(png|jpg)', 'images/icon_admin_3d.jpg', content)
        content = re.sub(r'images/exam_card_icon_.*\.jpg', 'images/icon_admin_3d.jpg', content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
            
    except Exception as e:
        print(f"Error processing {file}: {e}")

print("Updated HTML files.")
