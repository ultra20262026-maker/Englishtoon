const VALID_USERS = [
    { username: 'student1', password: '123' },
    { username: 'student2', password: '456' },
    { username: 'admin', password: 'admin' }
];

const GRADES_DATA = [
    { id: 'primary-1', name: 'الصف الأول الابتدائي', image: 'images/3d-icons/englishtoon-grade-primary-1-3d.jpg' },
    { id: 'primary-2', name: 'الصف الثاني الابتدائي', image: 'images/3d-icons/englishtoon-grade-primary-2-3d.jpg' },
    { id: 'primary-3', name: 'الصف الثالث الابتدائي', image: 'images/3d-icons/englishtoon-grade-primary-3-3d.jpg' },
    { id: 'primary-4', name: 'الصف الرابع الابتدائي', image: 'images/3d-icons/englishtoon-grade-primary-4-3d.jpg' },
    { id: 'primary-5', name: 'الصف الخامس الابتدائي', image: 'images/3d-icons/englishtoon-grade-primary-5-3d.jpg' },
    { id: 'primary-6', name: 'الصف السادس الابتدائي', image: 'images/3d-icons/englishtoon-grade-primary-6-3d.jpg' },
    { id: 'prep-1', name: 'الصف الأول الإعدادي', image: 'images/3d-icons/englishtoon-grade-prep-1-3d.jpg' },
    { id: 'prep-2', name: 'الصف الثاني الإعدادي', image: 'images/3d-icons/englishtoon-grade-prep-2-3d.jpg' },
    { id: 'prep-3', name: 'الصف الثالث الإعدادي', image: 'images/3d-icons/englishtoon-grade-prep-3-3d.jpg' }
];

const UNITS_PER_GRADE = 6;

function getGamePath(gradeId, unitNumber) {
    return "games/${gradeId}/unit${unitNumber}/index.html";
}

const GAMES_MAP = {"prep-3": {"1": [{"name": "L1 cannon Beyond My Looks", "file": "L1_cannon_Beyond_My_Looks.html"}, {"name": "L2 arrow Self Discovery", "file": "L2_arrow_Self_Discovery.html"}, {"name": "L3 fishing The Mirror Moment", "file": "L3_fishing_The_Mirror_Moment.html"}, {"name": "L4 spaceship Practice  Skills", "file": "L4_spaceship_Practice__Skills.html"}, {"name": "L5 shuriken Lets Talk", "file": "L5_shuriken_Lets_Talk.html"}, {"name": "L6 bowling Practice  Skills", "file": "L6_bowling_Practice__Skills.html"}], "2": [{"name": "L1 soccer Stay Connected", "file": "L1_soccer_Stay_Connected.html"}, {"name": "L2 basketball Challenges and Solutions", "file": "L2_basketball_Challenges_and_Solutions.html"}, {"name": "L3 boomerang The Silent Dinner", "file": "L3_boomerang_The_Silent_Dinner.html"}, {"name": "L4 spider Practice  Skills", "file": "L4_spider_Practice__Skills.html"}, {"name": "L5 helicopter Practice  Skills", "file": "L5_helicopter_Practice__Skills.html"}, {"name": "L6 lightning Practice  Skills", "file": "L6_lightning_Practice__Skills.html"}], "3": [{"name": "L1 volcano AI", "file": "L1_volcano_AI.html"}, {"name": "L2 tank A I Technology", "file": "L2_tank_A_I_Technology.html"}, {"name": "L3 train Robot Teacher", "file": "L3_train_Robot_Teacher.html"}, {"name": "L4 lasso Practice  Skills", "file": "L4_lasso_Practice__Skills.html"}, {"name": "L5 wand Smart Robots", "file": "L5_wand_Smart_Robots.html"}, {"name": "L6 billiard Practice  Skills", "file": "L6_billiard_Practice__Skills.html"}], "4": [{"name": "L1 ufo Screen Time", "file": "L1_ufo_Screen_Time.html"}, {"name": "L2 trapdoor Egypts Smart Future", "file": "L2_trapdoor_Egypts_Smart_Future.html"}, {"name": "L3 racecar Balancing Screen Time", "file": "L3_racecar_Balancing_Screen_Time.html"}, {"name": "L4 water Story Time", "file": "L4_water_Story_Time.html"}, {"name": "L5 dart Lets Talk", "file": "L5_dart_Lets_Talk.html"}, {"name": "L6 slingshot Practice  Skills", "file": "L6_slingshot_Practice__Skills.html"}], "5": [{"name": "L1 whack Think like a Designer", "file": "L1_whack_Think_like_a_Designer.html"}, {"name": "L2 balloon Dream It Build It", "file": "L2_balloon_Dream_It_Build_It.html"}, {"name": "L3 boxing See through Their Eyes", "file": "L3_boxing_See_through_Their_Eyes.html"}, {"name": "L4 paperplane Story Time", "file": "L4_paperplane_Story_Time.html"}, {"name": "L5 goldminer Lets Talk", "file": "L5_goldminer_Lets_Talk.html"}, {"name": "L6 magnet Practice  Skills", "file": "L6_magnet_Practice__Skills.html"}], "6": [{"name": "L1 catapult The Power of Stories", "file": "L1_catapult_The_Power_of_Stories.html"}, {"name": "L2 pingpong The story That Helped Me", "file": "L2_pingpong_The_story_That_Helped_Me.html"}, {"name": "L3 diver Elements of a Story", "file": "L3_diver_Elements_of_a_Story.html"}, {"name": "L4 parachute Story Time", "file": "L4_parachute_Story_Time.html"}, {"name": "L5 karate Lets Talk", "file": "L5_karate_Lets_Talk.html"}, {"name": "L6 potion My Own Story", "file": "L6_potion_My_Own_Story.html"}]}, "prep-1": {"1": [{"name": "Lesson 1 - Fruit Slicer", "file": "Lesson 1 - Fruit Slicer.html"}, {"name": "Lesson 2 - Whack-A-Mole", "file": "Lesson 2 - Whack-A-Mole.html"}, {"name": "Lesson 3 - Safe Cracker", "file": "Lesson 3 - Safe Cracker.html"}, {"name": "Lesson 4 - Code Breaker", "file": "Lesson 4 - Code Breaker.html"}, {"name": "Lesson 5 - Jigsaw Puzzle", "file": "Lesson 5 - Jigsaw Puzzle.html"}, {"name": "Lesson 6 - Court Judge", "file": "Lesson 6 - Court Judge.html"}], "2": [{"name": "Lesson 1 - Dungeon Doors", "file": "Lesson 1 - Dungeon Doors.html"}, {"name": "Lesson 2 - Magic Hat", "file": "Lesson 2 - Magic Hat.html"}, {"name": "Lesson 3 - Piano Maestro", "file": "Lesson 3 - Piano Maestro.html"}, {"name": "Lesson 4 - Space Invaders", "file": "Lesson 4 - Space Invaders.html"}, {"name": "Lesson 5 - Asteroid Defender", "file": "Lesson 5 - Asteroid Defender.html"}, {"name": "Lesson 6 - Archery Target", "file": "Lesson 6 - Archery Target.html"}], "3": [{"name": "Lesson 1 - Ghost Hunter", "file": "Lesson 1 - Ghost Hunter.html"}, {"name": "Lesson 2 - UFO Abduction", "file": "Lesson 2 - UFO Abduction.html"}, {"name": "Lesson 3 - Cowboy Duel", "file": "Lesson 3 - Cowboy Duel.html"}, {"name": "Lesson 4 - Firefighter", "file": "Lesson 4 - Firefighter.html"}, {"name": "Lesson 5 - Basketball Hoop", "file": "Lesson 5 - Basketball Hoop.html"}, {"name": "Lesson 6 - Billiard Pool", "file": "Lesson 6 - Billiard Pool.html"}], "4": [{"name": "Lesson 1 - Burger Chef", "file": "Lesson 1 - Burger Chef.html"}, {"name": "Lesson 2 - Potion Brewer", "file": "Lesson 2 - Potion Brewer.html"}, {"name": "Lesson 3 - Meteor Shower", "file": "Lesson 3 - Meteor Shower.html"}, {"name": "Lesson 4 - Fishing Pro", "file": "Lesson 4 - Fishing Pro.html"}, {"name": "Lesson 5 - Crane Claw", "file": "Lesson 5 - Crane Claw.html"}, {"name": "Lesson 6 - Jungle Swing", "file": "Lesson 6 - Jungle Swing.html"}], "5": [{"name": "Lesson 1 - Factory Assembly", "file": "Lesson 1 - Factory Assembly.html"}, {"name": "Lesson 2 - Snowboard", "file": "Lesson 2 - Snowboard.html"}, {"name": "Lesson 3 - Hot Air Balloon", "file": "Lesson 3 - Hot Air Balloon.html"}, {"name": "Lesson 4 - Car Racing", "file": "Lesson 4 - Car Racing.html"}, {"name": "Lesson 5 - Minecart Tracks", "file": "Lesson 5 - Minecart Tracks.html"}, {"name": "Lesson 6 - Submarine Dive", "file": "Lesson 6 - Submarine Dive.html"}], "6": [{"name": "Lesson 1 - Space Moon Lander", "file": "Lesson 1 - Space Moon Lander.html"}, {"name": "Lesson 2 - Frogger Crossing", "file": "Lesson 2 - Frogger Crossing.html"}, {"name": "Lesson 3 - Traffic Cop", "file": "Lesson 3 - Traffic Cop.html"}, {"name": "Lesson 4 - Bowling Alley", "file": "Lesson 4 - Bowling Alley.html"}, {"name": "Lesson 5 - Hurdle Race", "file": "Lesson 5 - Hurdle Race.html"}, {"name": "Lesson 6 - Pyramid Explorer", "file": "Lesson 6 - Pyramid Explorer.html"}]}, "primary-1": {"1": [{"name": "احمي القلعة", "file": "احمي القلعة.html"}, {"name": "التهجئة الذكية", "file": "التهجئة الذكية.html"}, {"name": "السباق الثلاثي", "file": "السباق الثلاثي.html"}, {"name": "المبارزة المزدوجة", "file": "المبارزة المزدوجة.html"}, {"name": "تحدي الاستماع", "file": "تحدي الاستماع.html"}, {"name": "تحدي السرعه", "file": "تحدي السرعه.html"}, {"name": "خمن واكسب", "file": "خمن واكسب.html"}, {"name": "رتب واكسب", "file": "رتب واكسب.html"}, {"name": "سقوط الصور", "file": "سقوط الصور.html"}, {"name": "شد الحبل المعرفي", "file": "شد الحبل المعرفي.html"}, {"name": "شد الحبل", "file": "شد الحبل.html"}, {"name": "صائد الكلمات", "file": "صائد الكلمات.html"}, {"name": "عجلة الحظ", "file": "عجلة الحظ.html"}, {"name": "غزو الفضاء", "file": "غزو الفضاء.html"}, {"name": "كشاف الظلام", "file": "كشاف الظلام.html"}, {"name": "لعبة الذاكرة", "file": "لعبة الذاكرة.html"}], "2": [{"name": "القفز على الصخور", "file": "القفز على الصخور.html"}, {"name": "بطاقات الذاكرة", "file": "بطاقات الذاكرة.html"}, {"name": "بناء البرج", "file": "بناء البرج.html"}, {"name": "بناء الجمل", "file": "بناء الجمل.html"}, {"name": "تطابق الظل", "file": "تطابق الظل.html"}, {"name": "توصيل الجمل", "file": "توصيل الجمل.html"}, {"name": "توصيل الكلمات", "file": "توصيل الكلمات.html"}, {"name": "حارس المرمى", "file": "حارس المرمى.html"}, {"name": "سؤال وجواب", "file": "سؤال وجواب.html"}, {"name": "سقوط الكلمات", "file": "سقوط الكلمات.html"}, {"name": "صيد الكلمات", "file": "صيد الكلمات.html"}, {"name": "قطار الكلمات", "file": "قطار الكلمات.html"}, {"name": "لوحة التلوين", "file": "لوحة التلوين.html"}, {"name": "مدفع الكلمات", "file": "مدفع الكلمات.html"}], "3": [{"name": "10 الاستماع والاختيار", "file": "10_الاستماع_والاختيار.html"}, {"name": "11 بناء الجمل", "file": "11_بناء_الجمل.html"}, {"name": "12 بناء البرج", "file": "12_بناء_البرج.html"}, {"name": "13 سباق السيارات", "file": "13_سباق_السيارات.html"}, {"name": "14 القطار السريع", "file": "14_القطار_السريع.html"}, {"name": "15 صائد الفراشات", "file": "15_صائد_الفراشات.html"}, {"name": "16 كرة السلة", "file": "16_كرة_السلة.html"}, {"name": "17 البالون الطائر", "file": "17_البالون_الطائر.html"}, {"name": "18 توصيل الظل", "file": "18_توصيل_الظل.html"}, {"name": "19 صيد البط", "file": "19_صيد_البط.html"}, {"name": "1 صيد الكلمات", "file": "1_صيد_الكلمات.html"}, {"name": "20 السمكة الجائعة", "file": "20_السمكة_الجائعة.html"}, {"name": "2 البطاقات التعليمية", "file": "2_البطاقات_التعليمية.html"}, {"name": "3 توصيل الكلمات", "file": "3_توصيل_الكلمات.html"}, {"name": "4 سؤال وجواب", "file": "4_سؤال_وجواب.html"}, {"name": "6 فرقعة الفقاعات", "file": "6_فرقعة_الفقاعات.html"}, {"name": "7 الحرف المفقود", "file": "7_الحرف_المفقود.html"}, {"name": "8 تصنيف الكلمات", "file": "8_تصنيف_الكلمات.html"}, {"name": "9 ذاكرة البطاقات", "file": "9_ذاكرة_البطاقات.html"}], "4": [{"name": "10 تلوين الكلمات", "file": "10_تلوين_الكلمات.html"}, {"name": "11 مطابقة الظل", "file": "11_مطابقة_الظل.html"}, {"name": "12 صندوق المفاجآت", "file": "12_صندوق_المفاجآت.html"}, {"name": "13 قطار الكلمات", "file": "13_قطار_الكلمات.html"}, {"name": "14 الذاكرة الخفية", "file": "14_الذاكرة_الخفية.html"}, {"name": "15 بالونات الكلمات", "file": "15_بالونات_الكلمات.html"}, {"name": "16 لعبة الغميضة", "file": "16_لعبة_الغميضة.html"}, {"name": "17 طائرة الكلمات", "file": "17_طائرة_الكلمات.html"}, {"name": "18 متاهة الحروف", "file": "18_متاهة_الحروف.html"}, {"name": "19 عجلة الحظ", "file": "19_عجلة_الحظ.html"}, {"name": "1 طبيب العيون", "file": "1_طبيب_العيون.html"}, {"name": "20 صياد الكنوز", "file": "20_صياد_الكنوز.html"}, {"name": "21 الميزان السحري", "file": "21_الميزان_السحري.html"}, {"name": "22 توصيل البطاقات", "file": "22_توصيل_البطاقات.html"}, {"name": "23 لغز الكلمات", "file": "23_لغز_الكلمات.html"}, {"name": "24 سباق السيارات", "file": "24_سباق_السيارات.html"}, {"name": "2 حديقة الحيوان", "file": "2_حديقة_الحيوان.html"}, {"name": "3 تحدي الحواس الخمس", "file": "3_تحدي_الحواس_الخمس.html"}, {"name": "4 روبوت الكلمات", "file": "4_روبوت_الكلمات.html"}, {"name": "5 مطبخ الملك", "file": "5_مطبخ_الملك.html"}, {"name": "6 بناء الجسم", "file": "6_بناء_الجسم.html"}, {"name": "7 سباق الصواريخ", "file": "7_سباق_الصواريخ.html"}, {"name": "8 لعبة الساحر", "file": "8_لعبة_الساحر.html"}, {"name": "9 صيد الأسماك", "file": "9_صيد_الأسماك.html"}], "5": [{"name": "10 قفزة الضفدع", "file": "10_قفزة_الضفدع.html"}, {"name": "11 الغواصة", "file": "11_الغواصة.html"}, {"name": "12 سفينة الفضاء", "file": "12_سفينة_الفضاء.html"}, {"name": "13 تجميع الروبوت", "file": "13_تجميع_الروبوت.html"}, {"name": "14 سباق التزلج", "file": "14_سباق_التزلج.html"}, {"name": "15 مزرعة العد", "file": "15_مزرعة_العد.html"}, {"name": "16 صندوق الكنز", "file": "16_صندوق_الكنز.html"}, {"name": "17 الغيمة الماطرة", "file": "17_الغيمة_الماطرة.html"}, {"name": "18 السلحفاة السريعة", "file": "18_السلحفاة_السريعة.html"}, {"name": "19 البالونات الطائرة", "file": "19_البالونات_الطائرة.html"}, {"name": "1 صائد الفقاعات", "file": "1_صائد_الفقاعات.html"}, {"name": "20 مصنع الحلوى", "file": "20_مصنع_الحلوى.html"}, {"name": "21 إطعام الديناصور", "file": "21_إطعام_الديناصور.html"}, {"name": "22 وصفة الساحرة", "file": "22_وصفة_الساحرة.html"}, {"name": "23 الجسر المتحرك", "file": "23_الجسر_المتحرك.html"}, {"name": "24 سباق السيارات", "file": "24_سباق_السيارات.html"}, {"name": "25 كعكة عيد الميلاد", "file": "25_كعكة_عيد_الميلاد.html"}, {"name": "2 القفز فوق المنصات", "file": "2_القفز_فوق_المنصات.html"}, {"name": "3 السلة السحرية", "file": "3_السلة_السحرية.html"}, {"name": "4 قطف الثمار", "file": "4_قطف_الثمار.html"}, {"name": "5 ترتيب القطار", "file": "5_ترتيب_القطار.html"}, {"name": "6 النينجا", "file": "6_النينجا.html"}, {"name": "7 بائع الآيس كريم", "file": "7_بائع_الآيس_كريم.html"}, {"name": "8 تسلق الشجرة", "file": "8_تسلق_الشجرة.html"}, {"name": "9 إطعام الحيوانات", "file": "9_إطعام_الحيوانات.html"}], "6": [{"name": "10 صيد السمك", "file": "10_صيد_السمك.html"}, {"name": "11 خزانة الملابس", "file": "11_خزانة_الملابس.html"}, {"name": "12 مطعم الحروف", "file": "12_مطعم_الحروف.html"}, {"name": "14 البولينج", "file": "14_البولينج.html"}, {"name": "15 الرماية", "file": "15_الرماية.html"}, {"name": "16 فقاعات الصابون", "file": "16_فقاعات_الصابون.html"}, {"name": "17 السائق المحترف", "file": "17_السائق_المحترف.html"}, {"name": "18 النحلة العاملة", "file": "18_النحلة_العاملة.html"}, {"name": "19 بناء البرج", "file": "19_بناء_البرج.html"}, {"name": "1 إنقاذ الحيوانات", "file": "1_إنقاذ_الحيوانات.html"}, {"name": "20 متاهة الجبنة", "file": "20_متاهة_الجبنة.html"}, {"name": "21 القفز بالمظلة", "file": "21_القفز_بالمظلة.html"}, {"name": "23 قطار الحروف", "file": "23_قطار_الحروف.html"}, {"name": "24 الحصالة", "file": "24_الحصالة.html"}, {"name": "25 صانع الشطائر", "file": "25_صانع_الشطائر.html"}, {"name": "2 حديقة الحيوان", "file": "2_حديقة_الحيوان.html"}, {"name": "3 التزلج على الجليد", "file": "3_التزلج_على_الجليد.html"}, {"name": "4 رمي السهام", "file": "4_رمي_السهام.html"}, {"name": "5 كشف المصباح", "file": "5_كشف_المصباح.html"}, {"name": "7 مصنع العصائر", "file": "7_مصنع_العصائر.html"}, {"name": "8 رحلة المنطاد", "file": "8_رحلة_المنطاد.html"}, {"name": "9 سباق الخيل", "file": "9_سباق_الخيل.html"}]}, "primary-3": {"1": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "2": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "3": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "4": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "5": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "6": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}]}, "primary-4": {"1": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "2": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "3": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "4": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "5": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "6": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}]}, "primary-5": {"1": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "2": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "3": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "4": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "5": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "6": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}]}, "primary-6": {"1": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "2": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "3": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "4": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "5": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "6": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}]}, "prep-2": {"1": [{"name": "Lesson1_CannonBlast", "file": "Lesson1_CannonBlast.html"}, {"name": "Lesson2_BowArrow", "file": "Lesson2_BowArrow.html"}, {"name": "Lesson3_SpaceShooter", "file": "Lesson3_SpaceShooter.html"}, {"name": "Lesson4_Fishing", "file": "Lesson4_Fishing.html"}, {"name": "Lesson5_BubblePopper", "file": "Lesson5_BubblePopper.html"}, {"name": "Lesson6_WhackMole", "file": "Lesson6_WhackMole.html"}], "2": [{"name": "Lesson1_NinjaSlash", "file": "Lesson1_NinjaSlash.html"}, {"name": "Lesson2_ZombieDefense", "file": "Lesson2_ZombieDefense.html"}, {"name": "Lesson3_Basketball", "file": "Lesson3_Basketball.html"}, {"name": "Lesson4_Minecart", "file": "Lesson4_Minecart.html"}, {"name": "Lesson5_Darts", "file": "Lesson5_Darts.html"}, {"name": "Lesson6_UFO", "file": "Lesson6_UFO.html"}], "3": [{"name": "Lesson1_Bowling", "file": "Lesson1_Bowling.html"}, {"name": "Lesson2_Pirate", "file": "Lesson2_Pirate.html"}, {"name": "Lesson3_Frog", "file": "Lesson3_Frog.html"}, {"name": "Lesson4_Meteor", "file": "Lesson4_Meteor.html"}, {"name": "Lesson5_Slingshot", "file": "Lesson5_Slingshot.html"}, {"name": "Lesson6_Soccer", "file": "Lesson6_Soccer.html"}], "4": [{"name": "Lesson1_Submarine", "file": "Lesson1_Submarine.html"}, {"name": "Lesson2_Helicopter", "file": "Lesson2_Helicopter.html"}, {"name": "Lesson3_Ghost", "file": "Lesson3_Ghost.html"}, {"name": "Lesson4_Tank", "file": "Lesson4_Tank.html"}, {"name": "Lesson5_Spider", "file": "Lesson5_Spider.html"}, {"name": "Lesson6_Golf", "file": "Lesson6_Golf.html"}], "5": [{"name": "Lesson1_Trapdoor", "file": "Lesson1_Trapdoor.html"}, {"name": "Lesson2_Train", "file": "Lesson2_Train.html"}, {"name": "Lesson3_Cowboy", "file": "Lesson3_Cowboy.html"}, {"name": "Lesson4_Farm", "file": "Lesson4_Farm.html"}, {"name": "Lesson5_Reveal", "file": "Lesson5_Reveal.html"}, {"name": "Lesson6_Pool", "file": "Lesson6_Pool.html"}], "6": [{"name": "Lesson1_UFO", "file": "Lesson1_UFO.html"}, {"name": "Lesson2_Race", "file": "Lesson2_Race.html"}, {"name": "Lesson3_Shuriken", "file": "Lesson3_Shuriken.html"}, {"name": "Lesson4_Volcano", "file": "Lesson4_Volcano.html"}, {"name": "Lesson5_Boomerang", "file": "Lesson5_Boomerang.html"}, {"name": "Lesson6_Lightning", "file": "Lesson6_Lightning.html"}]}, "primary-2": {"1": [{"name": "الدرس الاول - لعبة رمي السهام", "file": "الدرس الاول - لعبة رمي السهام.html"}, {"name": "الدرس الثالث - لعبة فرقعة الفقاعات", "file": "الدرس الثالث - لعبة فرقعة الفقاعات.html"}, {"name": "الدرس الثاني - لعبة سفن الفضاء", "file": "الدرس الثاني - لعبة سفن الفضاء.html"}, {"name": "الدرس الرابع - لعبة الثعبان", "file": "الدرس الرابع - لعبة الثعبان.html"}], "2": [{"name": "الدرس الاول - لعبة البالونات", "file": "الدرس الاول - لعبة البالونات.html"}, {"name": "الدرس الثالث - لعبة ضرب الخلد", "file": "الدرس الثالث - لعبة ضرب الخلد.html"}, {"name": "الدرس الثاني - لعبة صيد الاسماك", "file": "الدرس الثاني - لعبة صيد الاسماك.html"}, {"name": "الدرس الثاني - لعبة صيد السمك", "file": "الدرس الثاني - لعبة صيد السمك.html"}, {"name": "الدرس الرابع - لعبة سباق السيارات", "file": "الدرس الرابع - لعبة سباق السيارات.html"}], "3": [{"name": "الدرس الاول - لعبة القفز", "file": "الدرس الاول - لعبة القفز.html"}, {"name": "الدرس الاول - لعبة قفز الكواكب", "file": "الدرس الاول - لعبة قفز الكواكب.html"}, {"name": "الدرس الثالث - لعبة فك الشفرة", "file": "الدرس الثالث - لعبة فك الشفرة.html"}, {"name": "الدرس الثاني - لعبة تكسير الثلج", "file": "الدرس الثاني - لعبة تكسير الثلج.html"}, {"name": "الدرس الرابع - لعبة الجري", "file": "الدرس الرابع - لعبة الجري.html"}, {"name": "الدرس الرابع - لعبة الركض السريع", "file": "الدرس الرابع - لعبة الركض السريع.html"}], "4": [{"name": "الدرس الاول - لعبة معركة الزعيم", "file": "الدرس الاول - لعبة معركة الزعيم.html"}, {"name": "الدرس الثالث - لعبة المتاهة", "file": "الدرس الثالث - لعبة المتاهة.html"}, {"name": "الدرس الثاني - لعبة قنابل الالوان", "file": "الدرس الثاني - لعبة قنابل الالوان.html"}, {"name": "الدرس الثاني - لعبة قنبلة الالوان", "file": "الدرس الثاني - لعبة قنبلة الالوان.html"}, {"name": "الدرس الرابع - لعبة العجلة الدوارة", "file": "الدرس الرابع - لعبة العجلة الدوارة.html"}], "5": [{"name": "الدرس الاول - لعبة تطابق الظلال", "file": "الدرس الاول - لعبة تطابق الظلال.html"}, {"name": "الدرس الاول - لعبة مطابقة الظل", "file": "الدرس الاول - لعبة مطابقة الظل.html"}, {"name": "الدرس الثالث - لعبة البرق السريعة", "file": "الدرس الثالث - لعبة البرق السريعة.html"}, {"name": "الدرس الثالث - لعبة البرق", "file": "الدرس الثالث - لعبة البرق.html"}, {"name": "الدرس الثاني - لعبة الترتيب", "file": "الدرس الثاني - لعبة الترتيب.html"}, {"name": "الدرس الثاني - لعبة تجميع الكلمات", "file": "الدرس الثاني - لعبة تجميع الكلمات.html"}, {"name": "الدرس الرابع - لعبة الهروب من الحمم", "file": "الدرس الرابع - لعبة الهروب من الحمم.html"}], "6": [{"name": "الدرس الاول - لعبة القناص", "file": "الدرس الاول - لعبة القناص.html"}, {"name": "الدرس الثالث - لعبة تشكيل الكلمات", "file": "الدرس الثالث - لعبة تشكيل الكلمات.html"}, {"name": "الدرس الثالث - لعبة مصنع الكلمات", "file": "الدرس الثالث - لعبة مصنع الكلمات.html"}, {"name": "الدرس الثاني - لعبة انفجار السديم", "file": "الدرس الثاني - لعبة انفجار السديم.html"}, {"name": "الدرس الرابع - لعبة صيد الكلمات", "file": "الدرس الرابع - لعبة صيد الكلمات.html"}]}};


const GRAMMAR_GAMES_MAP = {"primary-1": {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}, "primary-2": {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}, "primary-3": {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}, "primary-4": {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}, "primary-5": {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}, "primary-6": {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}, "prep-1": {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}, "prep-2": {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}, "prep-3": {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}};







const EXAMS_MAP = {
    "prep-1": {
        "1": [
            {
                "name": "Unit 1 Lesson 1 ADayinMyDigitalLesson ife",
                "file": "U1_L1_ADayinMyDigitalLife.html"
            },
            {
                "name": "Unit 1 Lesson 2 WeUnit seTechnology",
                "file": "U1_L2_WeUseTechnology.html"
            },
            {
                "name": "Unit 1 Lesson 3 DigitalDevices",
                "file": "U1_L3_DigitalDevices.html"
            },
            {
                "name": "Unit 1 Lesson 4 ReadingADigitalDay",
                "file": "U1_L4_ReadingADigitalDay.html"
            },
            {
                "name": "Unit 1 Lesson 5 AnEmailtoaFriend",
                "file": "U1_L5_AnEmailtoaFriend.html"
            },
            {
                "name": "Unit 1 Lesson 6 TeamProjectRoundtable",
                "file": "U1_L6_TeamProjectRoundtable.html"
            }
        ],
        "3": [
            {
                "name": "Unit 3 Lesson 1 AnEgyptianHero",
                "file": "U3_L1_AnEgyptianHero.html"
            },
            {
                "name": "Unit 3 Lesson 2 HeroesandRoleModels",
                "file": "U3_L2_HeroesandRoleModels.html"
            },
            {
                "name": "Unit 3 Lesson 3 AGreatEgyptianThinker",
                "file": "U3_L3_AGreatEgyptianThinker.html"
            },
            {
                "name": "Unit 3 Lesson 4 ReadingADoctorsStory",
                "file": "U3_L4_ReadingADoctorsStory.html"
            },
            {
                "name": "Unit 3 Lesson 5 AHeroWhoMadeaDifference",
                "file": "U3_L5_AHeroWhoMadeaDifference.html"
            },
            {
                "name": "Unit 3 Lesson 6 TeamProjectRoundtable",
                "file": "U3_L6_TeamProjectRoundtable.html"
            }
        ],
        "2": [
            {
                "name": "Unit 2 Lesson 1 MyLesson earningJourney",
                "file": "U2_L1_MyLearningJourney.html"
            },
            {
                "name": "Unit 2 Lesson 2 Lesson earningChallengesandSolutions",
                "file": "U2_L2_LearningChallengesandSolutions.html"
            },
            {
                "name": "Unit 2 Lesson 3 BenefitsofLesson earningTogether",
                "file": "U2_L3_BenefitsofLearningTogether.html"
            },
            {
                "name": "Unit 2 Lesson 4 ReadingWorkingasaTeam",
                "file": "U2_L4_ReadingWorkingasaTeam.html"
            },
            {
                "name": "Unit 2 Lesson 5 MyLesson earningPlan",
                "file": "U2_L5_MyLearningPlan.html"
            },
            {
                "name": "Unit 2 Lesson 6 TeamProjectRoundtable",
                "file": "U2_L6_TeamProjectRoundtable.html"
            }
        ],
        "5": [
            {
                "name": "Unit 5 Lesson 1 DiscoverYourFuture",
                "file": "U5_L1_DiscoverYourFuture.html"
            },
            {
                "name": "Unit 5 Lesson 2 AnInterviewwithaScientist",
                "file": "U5_L2_AnInterviewwithaScientist.html"
            },
            {
                "name": "Unit 5 Lesson 3 MyPlanforaFutureCareer",
                "file": "U5_L3_MyPlanforaFutureCareer.html"
            },
            {
                "name": "Unit 5 Lesson 4 ReadingAFutureEngineer",
                "file": "U5_L4_ReadingAFutureEngineer.html"
            },
            {
                "name": "Unit 5 Lesson 5 MyDreamJob",
                "file": "U5_L5_MyDreamJob.html"
            },
            {
                "name": "Unit 5 Lesson 6 TeamProjectRoundtable",
                "file": "U5_L6_TeamProjectRoundtable.html"
            }
        ],
        "4": [
            {
                "name": "Unit 4 Lesson 1 ThinkBeforeYouChoose",
                "file": "U4_L1_ThinkBeforeYouChoose.html"
            },
            {
                "name": "Unit 4 Lesson 2 DecisionsandConsequences",
                "file": "U4_L2_DecisionsandConsequences.html"
            },
            {
                "name": "Unit 4 Lesson 3 AnInterviewwithanAthlete",
                "file": "U4_L3_AnInterviewwithanAthlete.html"
            },
            {
                "name": "Unit 4 Lesson 4 ReadingAWiseDecision",
                "file": "U4_L4_ReadingAWiseDecision.html"
            },
            {
                "name": "Unit 4 Lesson 5 AskingforandGivingAdvice",
                "file": "U4_L5_AskingforandGivingAdvice.html"
            },
            {
                "name": "Unit 4 Lesson 6 TeamProjectRoundtable",
                "file": "U4_L6_TeamProjectRoundtable.html"
            }
        ],
        "6": [
            {
                "name": "Unit 6 Lesson 1 BeingaGlobalCitizen",
                "file": "U6_L1_BeingaGlobalCitizen.html"
            },
            {
                "name": "Unit 6 Lesson 2 GlobalCitizenTalk",
                "file": "U6_L2_GlobalCitizenTalk.html"
            },
            {
                "name": "Unit 6 Lesson 3 OceanCircle",
                "file": "U6_L3_OceanCircle.html"
            },
            {
                "name": "Unit 6 Lesson 4 ReadingProtectingtheOcean",
                "file": "U6_L4_ReadingProtectingtheOcean.html"
            },
            {
                "name": "Unit 6 Lesson 5 Lesson etsMakeaDifference",
                "file": "U6_L5_LetsMakeaDifference.html"
            },
            {
                "name": "Unit 6 Lesson 6 TeamProjectRoundtable",
                "file": "U6_L6_TeamProjectRoundtable.html"
            }
        ]
    },
    "prep-2": {
        "1": [
            {
                "name": "Unit 1 Lesson 1 MeetGenAlpha",
                "file": "U1_L1_MeetGenAlpha.html"
            },
            {
                "name": "Unit 1 Lesson 2 GenAlphasDigitalLesson ife",
                "file": "U1_L2_GenAlphasDigitalLife.html"
            },
            {
                "name": "Unit 1 Lesson 3 TheDigitalBridge",
                "file": "U1_L3_TheDigitalBridge.html"
            },
            {
                "name": "Unit 1 Lesson 4 ReadingTheLesson ittleInventor",
                "file": "U1_L4_ReadingTheLittleInventor.html"
            },
            {
                "name": "Unit 1 Lesson 5 Lesson essons56ExpressingIdentityOnline",
                "file": "U1_L5_Lessons56ExpressingIdentityOnline.html"
            }
        ],
        "3": [
            {
                "name": "Unit 3 Lesson 1 OvercomingChallenges",
                "file": "U3_L1_OvercomingChallenges.html"
            },
            {
                "name": "Unit 3 Lesson 2 AdviceforFacingChallenges",
                "file": "U3_L2_AdviceforFacingChallenges.html"
            },
            {
                "name": "Unit 3 Lesson 3 FacingTrafficChallenges",
                "file": "U3_L3_FacingTrafficChallenges.html"
            },
            {
                "name": "Unit 3 Lesson 4 ReadingTheLesson ittleInventorCh3",
                "file": "U3_L4_ReadingTheLittleInventorCh3.html"
            },
            {
                "name": "Unit 3 Lesson 5 Lesson essons56ThePowerofFacingChallenges",
                "file": "U3_L5_Lessons56ThePowerofFacingChallenges.html"
            }
        ],
        "2": [
            {
                "name": "Unit 2 Lesson 1 ProtectingYourPrivacyintheDigitalAge",
                "file": "U2_L1_ProtectingYourPrivacyintheDigitalAge.html"
            },
            {
                "name": "Unit 2 Lesson 2 StayingSafeOnline",
                "file": "U2_L2_StayingSafeOnline.html"
            },
            {
                "name": "Unit 2 Lesson 3 ManagingYourOnlineData",
                "file": "U2_L3_ManagingYourOnlineData.html"
            },
            {
                "name": "Unit 2 Lesson 4 ReadingTheLesson ittleInventorCh2",
                "file": "U2_L4_ReadingTheLittleInventorCh2.html"
            },
            {
                "name": "Unit 2 Lesson 5 Lesson essons56DigitalDetectives",
                "file": "U2_L5_Lessons56DigitalDetectives.html"
            }
        ],
        "5": [
            {
                "name": "Unit 5 Lesson 1 HaveYouEverExploredtheWorld",
                "file": "U5_L1_HaveYouEverExploredtheWorld.html"
            },
            {
                "name": "Unit 5 Lesson 2 ATourAroundCairo",
                "file": "U5_L2_ATourAroundCairo.html"
            },
            {
                "name": "Unit 5 Lesson 3 AroundtheWorldinFourAmazingPlaces",
                "file": "U5_L3_AroundtheWorldinFourAmazingPlaces.html"
            },
            {
                "name": "Unit 5 Lesson 4 ReadingTheHiddenIslandCh2",
                "file": "U5_L4_ReadingTheHiddenIslandCh2.html"
            },
            {
                "name": "Unit 5 Lesson 5 Lesson essons56ComeExplorewithUnit s",
                "file": "U5_L5_Lessons56ComeExplorewithUs.html"
            }
        ],
        "4": [
            {
                "name": "Unit 4 Lesson 1 AJourneyThroughArt",
                "file": "U4_L1_AJourneyThroughArt.html"
            },
            {
                "name": "Unit 4 Lesson 2 ExploringArtLesson istenUnit p",
                "file": "U4_L2_ExploringArtListenUp.html"
            },
            {
                "name": "Unit 4 Lesson 3 BiographyofanArtist",
                "file": "U4_L3_BiographyofanArtist.html"
            },
            {
                "name": "Unit 4 Lesson 4 ReadingTheHiddenIslandCh1",
                "file": "U4_L4_ReadingTheHiddenIslandCh1.html"
            },
            {
                "name": "امتحان المراجعة",
                "file": "U4_L5_Lessons56MyPerformanceReview.html"
            }
        ],
        "6": [
            {
                "name": "Unit 6 Lesson 1 TurningIdeasintoanImpact",
                "file": "U6_L1_TurningIdeasintoanImpact.html"
            },
            {
                "name": "Unit 6 Lesson 2 InspiringYoungInventors",
                "file": "U6_L2_InspiringYoungInventors.html"
            },
            {
                "name": "Unit 6 Lesson 3 AManofImpact",
                "file": "U6_L3_AManofImpact.html"
            },
            {
                "name": "Unit 6 Lesson 4 ReadingTheHiddenIslandCh3",
                "file": "U6_L4_ReadingTheHiddenIslandCh3.html"
            },
            {
                "name": "Unit 6 Lesson 5 Lesson essons56IfIWereanInventor",
                "file": "U6_L5_Lessons56IfIWereanInventor.html"
            }
        ]
    },
    "primary-5": {
        "1": [
            {
                "name": "u1 Lesson 1",
                "file": "exam-g5-u1-l1.html"
            },
            {
                "name": "u1 Lesson 2",
                "file": "exam-g5-u1-l2.html"
            },
            {
                "name": "u1 Lesson 3",
                "file": "exam-g5-u1-l3.html"
            },
            {
                "name": "u1 Lesson 4",
                "file": "exam-g5-u1-l4.html"
            },
            {
                "name": "u1 Lesson 5",
                "file": "exam-g5-u1-l5.html"
            },
            {
                "name": "امتحان المراجعة",
                "file": "exam-g5-u1-review.html"
            }
        ],
        "3": [
            {
                "name": "u3 Lesson 1",
                "file": "exam-g5-u3-l1.html"
            },
            {
                "name": "u3 Lesson 2",
                "file": "exam-g5-u3-l2.html"
            },
            {
                "name": "u3 Lesson 3",
                "file": "exam-g5-u3-l3.html"
            },
            {
                "name": "u3 Lesson 4",
                "file": "exam-g5-u3-l4.html"
            },
            {
                "name": "u3 Lesson 5",
                "file": "exam-g5-u3-l5.html"
            },
            {
                "name": "امتحان المراجعة",
                "file": "exam-g5-u3-review.html"
            }
        ],
        "2": [
            {
                "name": "u2 Lesson 1",
                "file": "exam-g5-u2-l1.html"
            },
            {
                "name": "u2 Lesson 2",
                "file": "exam-g5-u2-l2.html"
            },
            {
                "name": "u2 Lesson 3",
                "file": "exam-g5-u2-l3.html"
            },
            {
                "name": "u2 Lesson 4",
                "file": "exam-g5-u2-l4.html"
            },
            {
                "name": "u2 Lesson 5",
                "file": "exam-g5-u2-l5.html"
            },
            {
                "name": "امتحان المراجعة",
                "file": "exam-g5-u2-review.html"
            }
        ],
        "5": [
            {
                "name": "u5 Lesson 1",
                "file": "exam-g5-u5-l1.html"
            },
            {
                "name": "u5 Lesson 2",
                "file": "exam-g5-u5-l2.html"
            },
            {
                "name": "u5 Lesson 3",
                "file": "exam-g5-u5-l3.html"
            },
            {
                "name": "u5 Lesson 4",
                "file": "exam-g5-u5-l4.html"
            },
            {
                "name": "u5 Lesson 5",
                "file": "exam-g5-u5-l5.html"
            },
            {
                "name": "امتحان المراجعة",
                "file": "exam-g5-u5-review.html"
            }
        ],
        "4": [
            {
                "name": "u4 Lesson 1",
                "file": "exam-g5-u4-l1.html"
            },
            {
                "name": "u4 Lesson 2",
                "file": "exam-g5-u4-l2.html"
            },
            {
                "name": "u4 Lesson 3",
                "file": "exam-g5-u4-l3.html"
            },
            {
                "name": "u4 Lesson 4",
                "file": "exam-g5-u4-l4.html"
            },
            {
                "name": "u4 Lesson 5",
                "file": "exam-g5-u4-l5.html"
            },
            {
                "name": "امتحان المراجعة",
                "file": "exam-g5-u4-review.html"
            }
        ]
    },
    "primary-4": {
        "1": [
            {
                "name": "u1 Lesson 1",
                "file": "exam-g4-u1-l1.html"
            },
            {
                "name": "u1 Lesson 2",
                "file": "exam-g4-u1-l2.html"
            },
            {
                "name": "u1 Lesson 3",
                "file": "exam-g4-u1-l3.html"
            },
            {
                "name": "u1 Lesson 4",
                "file": "exam-g4-u1-l4.html"
            },
            {
                "name": "u1 Lesson 5",
                "file": "exam-g4-u1-l5.html"
            }
        ],
        "3": [
            {
                "name": "u3 Lesson 1",
                "file": "exam-g4-u3-l1.html"
            },
            {
                "name": "u3 Lesson 2",
                "file": "exam-g4-u3-l2.html"
            },
            {
                "name": "u3 Lesson 3",
                "file": "exam-g4-u3-l3.html"
            },
            {
                "name": "u3 Lesson 4",
                "file": "exam-g4-u3-l4.html"
            },
            {
                "name": "امتحان المراجعة",
                "file": "exam-g4-u3-review.html"
            }
        ],
        "2": [
            {
                "name": "u2 Lesson 1",
                "file": "exam-g4-u2-l1.html"
            },
            {
                "name": "u2 Lesson 2",
                "file": "exam-g4-u2-l2.html"
            },
            {
                "name": "u2 Lesson 3",
                "file": "exam-g4-u2-l3.html"
            },
            {
                "name": "u2 Lesson 4",
                "file": "exam-g4-u2-l4.html"
            },
            {
                "name": "امتحان المراجعة",
                "file": "exam-g4-u2-review.html"
            }
        ],
        "5": [
            {
                "name": "u5 Lesson 1",
                "file": "exam-g4-u5-l1.html"
            },
            {
                "name": "u5 Lesson 2",
                "file": "exam-g4-u5-l2.html"
            },
            {
                "name": "u5 Lesson 3",
                "file": "exam-g4-u5-l3.html"
            },
            {
                "name": "u5 Lesson 4",
                "file": "exam-g4-u5-l4.html"
            },
            {
                "name": "امتحان المراجعة",
                "file": "exam-g4-u5-review.html"
            }
        ],
        "4": [
            {
                "name": "u4 Lesson 1",
                "file": "exam-g4-u4-l1.html"
            },
            {
                "name": "u4 Lesson 2",
                "file": "exam-g4-u4-l2.html"
            },
            {
                "name": "u4 Lesson 3",
                "file": "exam-g4-u4-l3.html"
            },
            {
                "name": "u4 Lesson 4",
                "file": "exam-g4-u4-l4.html"
            },
            {
                "name": "امتحان المراجعة",
                "file": "exam-g4-u4-review.html"
            }
        ]
    },
    "primary-6": {
    "1": [
      { "title": "Lesson 1 - A Day in Egypt", "file": "exam_lesson1_a_day_in_egypt.html", "icon": "📖" },
      { "title": "Lesson 2 - Ras Mohamed", "file": "exam_lesson2_ras_mohamed.html", "icon": "📖" },
      { "title": "Lesson 3 - Around Egypt", "file": "exam_lesson3_around_egypt.html", "icon": "📖" },
      { "title": "Lessons 4 & 5 - A Day in My School", "file": "exam_lesson4and5_a_day_in_my_school.html", "icon": "📖" }
    ],
    "2": [
      { "title": "Lesson 1 - Caring for Plants", "file": "exam_lesson1_caring_for_plants.html", "icon": "📖" },
      { "title": "Lesson 2 - Weather", "file": "exam_lesson2_weather.html", "icon": "📖" },
      { "title": "Lesson 3 - The Nile River", "file": "exam_lesson3_nile_river.html", "icon": "📖" },
      { "title": "Lessons 4 & 5 - Wadi El Rayan", "file": "exam_lesson4and5_wadi_el_rayan.html", "icon": "📖" }
    ],
    "3": [
      { "title": "Lesson 1 - Jobs", "file": "exam_lesson1_jobs.html", "icon": "📖" },
      { "title": "Lesson 2 - Help the Community", "file": "exam_lesson2_help_community.html", "icon": "📖" },
      { "title": "Lesson 3 - The Proud Rose", "file": "exam_lesson3_proud_rose.html", "icon": "📖" },
      { "title": "Lessons 4 & 5 - An Egyptian Hero", "file": "exam_lesson4and5_egyptian_hero.html", "icon": "📖" }
    ],
    "4": [
      { "title": "Lesson 1 - Past and Present", "file": "exam_lesson1_past_present.html", "icon": "📖" },
      { "title": "Lesson 2 - Use Energy Wisely", "file": "exam_lesson2_energy_wisely.html", "icon": "📖" },
      { "title": "Lesson 3 - Gifts Under the Ground", "file": "exam_lesson3_gifts_under_ground.html", "icon": "📖" },
      { "title": "Lessons 4 & 5 - Man Made Resources", "file": "exam_lesson4and5_man_made_resources.html", "icon": "📖" }
    ],
    "5": [
      { "title": "Lesson 1 - A Trip Through Time", "file": "exam_lesson1_trip_through_time.html", "icon": "📖" },
      { "title": "Lesson 2 - A Dream Comes True", "file": "exam_lesson2_dream_comes_true.html", "icon": "📖" },
      { "title": "Lesson 3 - The Bundle of Sticks", "file": "exam_lesson3_bundle_of_sticks.html", "icon": "📖" },
      { "title": "Lessons 4 & 5 - Egypt Goes Green", "file": "exam_lesson4and5_egypt_goes_green.html", "icon": "📖" }
    ]
  }
};




EXAMS_MAP['primary-6'] = {
    "1": [
        {
            "name": "Unit1 Lesson1 Quiz",
            "file": "Unit1_Lesson1_Quiz.html"
        },
        {
            "name": "Unit1 Lesson2 Quiz",
            "file": "Unit1_Lesson2_Quiz.html"
        },
        {
            "name": "Unit1 Lesson3 Quiz",
            "file": "Unit1_Lesson3_Quiz.html"
        },
        {
            "name": "Unit1 Lesson4and5 Quiz",
            "file": "Unit1_Lesson4and5_Quiz.html"
        }
    ],
    "2": [
        {
            "name": "Unit2 Lesson1 Quiz",
            "file": "Unit2_Lesson1_Quiz.html"
        },
        {
            "name": "Unit2 Lesson2 Quiz",
            "file": "Unit2_Lesson2_Quiz.html"
        },
        {
            "name": "Unit2 Lesson3 Quiz",
            "file": "Unit2_Lesson3_Quiz.html"
        },
        {
            "name": "Unit2 Lesson4and5 Quiz",
            "file": "Unit2_Lesson4and5_Quiz.html"
        }
    ],
    "3": [
        {
            "name": "Unit3 Lesson1 Quiz",
            "file": "Unit3_Lesson1_Quiz.html"
        },
        {
            "name": "Unit3 Lesson2 Quiz",
            "file": "Unit3_Lesson2_Quiz.html"
        },
        {
            "name": "Unit3 Lesson3 Quiz",
            "file": "Unit3_Lesson3_Quiz.html"
        },
        {
            "name": "Unit3 Lesson4and5 Quiz",
            "file": "Unit3_Lesson4and5_Quiz.html"
        }
    ],
    "4": [
        {
            "name": "Unit4 Lesson1 Quiz",
            "file": "Unit4_Lesson1_Quiz.html"
        },
        {
            "name": "Unit4 Lesson2 Quiz",
            "file": "Unit4_Lesson2_Quiz.html"
        },
        {
            "name": "Unit4 Lesson3 Quiz",
            "file": "Unit4_Lesson3_Quiz.html"
        },
        {
            "name": "Unit4 Lesson4and5 Quiz",
            "file": "Unit4_Lesson4and5_Quiz.html"
        }
    ],
    "5": [
        {
            "name": "Unit5 Lesson1 Quiz",
            "file": "Unit5_Lesson1_Quiz.html"
        },
        {
            "name": "Unit5 Lesson2 Quiz",
            "file": "Unit5_Lesson2_Quiz.html"
        },
        {
            "name": "Unit5 Lesson3 Quiz",
            "file": "Unit5_Lesson3_Quiz.html"
        },
        {
            "name": "Unit5 Lesson4and5 Quiz",
            "file": "Unit5_Lesson4and5_Quiz.html"
        }
    ],
    "6": [
        {
            "name": "Unit6 Part1 Quiz",
            "file": "Unit6_Part1_Quiz.html"
        },
        {
            "name": "Unit6 Part2 Quiz",
            "file": "Unit6_Part2_Quiz.html"
        }
    ]
};
EXAMS_MAP['prep-3'] = {
    "1": [
        {
            "name": "Lesson 1 - Beyond My Looks",
            "file": "Lesson_1_-_Beyond_My_Looks.html"
        },
        {
            "name": "Lesson 2 - Self Discovery",
            "file": "Lesson_2_-_Self_Discovery.html"
        },
        {
            "name": "Lesson 3 - The Mirror Moment",
            "file": "Lesson_3_-_The_Mirror_Moment.html"
        },
        {
            "name": "Lesson 4 - Story Time",
            "file": "Lesson_4_-_Story_Time.html"
        },
        {
            "name": "Lesson 56 - Lets Talk This Is Me",
            "file": "Lesson_56_-_Lets_Talk_This_Is_Me.html"
        },
        {
            "name": "Unit 1 Review",
            "file": "Unit_1_Review.html"
        }
    ],
    "2": [
        {
            "name": "Lesson 1 - Stay Connected",
            "file": "Lesson_1_-_Stay_Connected.html"
        },
        {
            "name": "Lesson 2 - Communication Challenges and Solutions",
            "file": "Lesson_2_-_Communication_Challenges_and_Solutions.html"
        },
        {
            "name": "Lesson 3 - The Silent Dinner",
            "file": "Lesson_3_-_The_Silent_Dinner.html"
        },
        {
            "name": "Lesson 4 - Story Time",
            "file": "Lesson_4_-_Story_Time.html"
        },
        {
            "name": "Lesson 56 - Lets Talk Staying close",
            "file": "Lesson_56_-_Lets_Talk_Staying_close.html"
        },
        {
            "name": "Unit 2 Review",
            "file": "Unit_2_Review.html"
        }
    ],
    "3": [
        {
            "name": "Lesson 1 - Artificial Intelligence",
            "file": "Lesson_1_-_Artificial_Intelligence.html"
        },
        {
            "name": "Lesson 2 - A I Technology",
            "file": "Lesson_2_-_A_I_Technology.html"
        },
        {
            "name": "Lesson 3 - Robot Teacher",
            "file": "Lesson_3_-_Robot_Teacher.html"
        },
        {
            "name": "Lesson 4 - Story Time",
            "file": "Lesson_4_-_Story_Time.html"
        },
        {
            "name": "Lesson 56 - Lets Talk Smart Robots",
            "file": "Lesson_56_-_Lets_Talk_Smart_Robots.html"
        },
        {
            "name": "Unit 3 Review",
            "file": "Unit_3_Review.html"
        }
    ],
    "4": [
        {
            "name": "Lesson 1 - Screen Time",
            "file": "Lesson_1_-_Screen_Time.html"
        },
        {
            "name": "Lesson 2 - Egypts Smart Future",
            "file": "Lesson_2_-_Egypts_Smart_Future.html"
        },
        {
            "name": "Lesson 3 - Balancing Screen Time",
            "file": "Lesson_3_-_Balancing_Screen_Time.html"
        },
        {
            "name": "Lesson 4 - Story Time",
            "file": "Lesson_4_-_Story_Time.html"
        },
        {
            "name": "Lesson 5 - Lets Talk",
            "file": "Lesson_5_-_Lets_Talk.html"
        },
        {
            "name": "Lesson 6 - Small Change",
            "file": "Lesson_6_-_Small_Change.html"
        },
        {
            "name": "Unit 4 Review",
            "file": "Unit_4_Review.html"
        }
    ],
    "5": [
        {
            "name": "Lesson 1 - Think like a Designer",
            "file": "Lesson_1_-_Think_like_a_Designer.html"
        },
        {
            "name": "Lesson 2 - Dream It Build It",
            "file": "Lesson_2_-_Dream_It_Build_It.html"
        },
        {
            "name": "Lesson 3 - See through Their Eyes",
            "file": "Lesson_3_-_See_through_Their_Eyes.html"
        },
        {
            "name": "Lesson 4 - Story Time",
            "file": "Lesson_4_-_Story_Time.html"
        },
        {
            "name": "Lesson 5 - Lets Talk",
            "file": "Lesson_5_-_Lets_Talk.html"
        },
        {
            "name": "Lesson 6 - Try Learn and Improve",
            "file": "Lesson_6_-_Try_Learn_and_Improve.html"
        },
        {
            "name": "Unit 5 Review",
            "file": "Unit_5_Review.html"
        }
    ],
    "6": [
        {
            "name": "Lesson 1 - The Power of Stories",
            "file": "Lesson_1_-_The_Power_of_Stories.html"
        },
        {
            "name": "Lesson 2 - The Story That Helped Me",
            "file": "Lesson_2_-_The_Story_That_Helped_Me.html"
        },
        {
            "name": "Lesson 3 - Elements of a Story",
            "file": "Lesson_3_-_Elements_of_a_Story.html"
        },
        {
            "name": "Lesson 4 - Story Time",
            "file": "Lesson_4_-_Story_Time.html"
        },
        {
            "name": "Lesson 5 - Lets Talk",
            "file": "Lesson_5_-_Lets_Talk.html"
        },
        {
            "name": "Lesson 6 - My Own Story",
            "file": "Lesson_6_-_My_Own_Story.html"
        },
        {
            "name": "Unit 6 Review",
            "file": "Unit_6_Review.html"
        }
    ]
};
