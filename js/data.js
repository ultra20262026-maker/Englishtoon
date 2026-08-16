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

const GAMES_MAP = {"prep-3": {"1": [{"name": "L1 cannon Beyond My Looks", "file": "L1_cannon_Beyond_My_Looks.html"}, {"name": "L2 arrow Self Discovery", "file": "L2_arrow_Self_Discovery.html"}, {"name": "L3 fishing The Mirror Moment", "file": "L3_fishing_The_Mirror_Moment.html"}, {"name": "L4 spaceship Practice  Skills", "file": "L4_spaceship_Practice__Skills.html"}, {"name": "L5 shuriken Lets Talk", "file": "L5_shuriken_Lets_Talk.html"}, {"name": "L6 bowling Practice  Skills", "file": "L6_bowling_Practice__Skills.html"}], "2": [{"name": "L1 soccer Stay Connected", "file": "L1_soccer_Stay_Connected.html"}, {"name": "L2 basketball Challenges and Solutions", "file": "L2_basketball_Challenges_and_Solutions.html"}, {"name": "L3 boomerang The Silent Dinner", "file": "L3_boomerang_The_Silent_Dinner.html"}, {"name": "L4 spider Practice  Skills", "file": "L4_spider_Practice__Skills.html"}, {"name": "L5 helicopter Practice  Skills", "file": "L5_helicopter_Practice__Skills.html"}, {"name": "L6 lightning Practice  Skills", "file": "L6_lightning_Practice__Skills.html"}], "3": [{"name": "L1 volcano AI", "file": "L1_volcano_AI.html"}, {"name": "L2 tank A I Technology", "file": "L2_tank_A_I_Technology.html"}, {"name": "L3 train Robot Teacher", "file": "L3_train_Robot_Teacher.html"}, {"name": "L4 lasso Practice  Skills", "file": "L4_lasso_Practice__Skills.html"}, {"name": "L5 wand Smart Robots", "file": "L5_wand_Smart_Robots.html"}, {"name": "L6 billiard Practice  Skills", "file": "L6_billiard_Practice__Skills.html"}], "4": [{"name": "L1 ufo Screen Time", "file": "L1_ufo_Screen_Time.html"}, {"name": "L2 trapdoor Egypts Smart Future", "file": "L2_trapdoor_Egypts_Smart_Future.html"}, {"name": "L3 racecar Balancing Screen Time", "file": "L3_racecar_Balancing_Screen_Time.html"}, {"name": "L4 water Story Time", "file": "L4_water_Story_Time.html"}, {"name": "L5 dart Lets Talk", "file": "L5_dart_Lets_Talk.html"}, {"name": "L6 slingshot Practice  Skills", "file": "L6_slingshot_Practice__Skills.html"}], "5": [{"name": "L1 whack Think like a Designer", "file": "L1_whack_Think_like_a_Designer.html"}, {"name": "L2 balloon Dream It Build It", "file": "L2_balloon_Dream_It_Build_It.html"}, {"name": "L3 boxing See through Their Eyes", "file": "L3_boxing_See_through_Their_Eyes.html"}, {"name": "L4 paperplane Story Time", "file": "L4_paperplane_Story_Time.html"}, {"name": "L5 goldminer Lets Talk", "file": "L5_goldminer_Lets_Talk.html"}, {"name": "L6 magnet Practice  Skills", "file": "L6_magnet_Practice__Skills.html"}], "6": [{"name": "L1 catapult The Power of Stories", "file": "L1_catapult_The_Power_of_Stories.html"}, {"name": "L2 pingpong The story That Helped Me", "file": "L2_pingpong_The_story_That_Helped_Me.html"}, {"name": "L3 diver Elements of a Story", "file": "L3_diver_Elements_of_a_Story.html"}, {"name": "L4 parachute Story Time", "file": "L4_parachute_Story_Time.html"}, {"name": "L5 karate Lets Talk", "file": "L5_karate_Lets_Talk.html"}, {"name": "L6 potion My Own Story", "file": "L6_potion_My_Own_Story.html"}]}, "prep-1": {"1": [{"name": "Lesson 1 - Fruit Slicer", "file": "Lesson 1 - Fruit Slicer.html"}, {"name": "Lesson 2 - Whack-A-Mole", "file": "Lesson 2 - Whack-A-Mole.html"}, {"name": "Lesson 3 - Safe Cracker", "file": "Lesson 3 - Safe Cracker.html"}, {"name": "Lesson 4 - Code Breaker", "file": "Lesson 4 - Code Breaker.html"}, {"name": "Lesson 5 - Jigsaw Puzzle", "file": "Lesson 5 - Jigsaw Puzzle.html"}, {"name": "Lesson 6 - Court Judge", "file": "Lesson 6 - Court Judge.html"}], "2": [{"name": "Lesson 1 - Dungeon Doors", "file": "Lesson 1 - Dungeon Doors.html"}, {"name": "Lesson 2 - Magic Hat", "file": "Lesson 2 - Magic Hat.html"}, {"name": "Lesson 3 - Piano Maestro", "file": "Lesson 3 - Piano Maestro.html"}, {"name": "Lesson 4 - Space Invaders", "file": "Lesson 4 - Space Invaders.html"}, {"name": "Lesson 5 - Asteroid Defender", "file": "Lesson 5 - Asteroid Defender.html"}, {"name": "Lesson 6 - Archery Target", "file": "Lesson 6 - Archery Target.html"}], "3": [{"name": "Lesson 1 - Ghost Hunter", "file": "Lesson 1 - Ghost Hunter.html"}, {"name": "Lesson 2 - UFO Abduction", "file": "Lesson 2 - UFO Abduction.html"}, {"name": "Lesson 3 - Cowboy Duel", "file": "Lesson 3 - Cowboy Duel.html"}, {"name": "Lesson 4 - Firefighter", "file": "Lesson 4 - Firefighter.html"}, {"name": "Lesson 5 - Basketball Hoop", "file": "Lesson 5 - Basketball Hoop.html"}, {"name": "Lesson 6 - Billiard Pool", "file": "Lesson 6 - Billiard Pool.html"}], "4": [{"name": "Lesson 1 - Burger Chef", "file": "Lesson 1 - Burger Chef.html"}, {"name": "Lesson 2 - Potion Brewer", "file": "Lesson 2 - Potion Brewer.html"}, {"name": "Lesson 3 - Meteor Shower", "file": "Lesson 3 - Meteor Shower.html"}, {"name": "Lesson 4 - Fishing Pro", "file": "Lesson 4 - Fishing Pro.html"}, {"name": "Lesson 5 - Crane Claw", "file": "Lesson 5 - Crane Claw.html"}, {"name": "Lesson 6 - Jungle Swing", "file": "Lesson 6 - Jungle Swing.html"}], "5": [{"name": "Lesson 1 - Factory Assembly", "file": "Lesson 1 - Factory Assembly.html"}, {"name": "Lesson 2 - Snowboard", "file": "Lesson 2 - Snowboard.html"}, {"name": "Lesson 3 - Hot Air Balloon", "file": "Lesson 3 - Hot Air Balloon.html"}, {"name": "Lesson 4 - Car Racing", "file": "Lesson 4 - Car Racing.html"}, {"name": "Lesson 5 - Minecart Tracks", "file": "Lesson 5 - Minecart Tracks.html"}, {"name": "Lesson 6 - Submarine Dive", "file": "Lesson 6 - Submarine Dive.html"}], "6": [{"name": "Lesson 1 - Space Moon Lander", "file": "Lesson 1 - Space Moon Lander.html"}, {"name": "Lesson 2 - Frogger Crossing", "file": "Lesson 2 - Frogger Crossing.html"}, {"name": "Lesson 3 - Traffic Cop", "file": "Lesson 3 - Traffic Cop.html"}, {"name": "Lesson 4 - Bowling Alley", "file": "Lesson 4 - Bowling Alley.html"}, {"name": "Lesson 5 - Hurdle Race", "file": "Lesson 5 - Hurdle Race.html"}, {"name": "Lesson 6 - Pyramid Explorer", "file": "Lesson 6 - Pyramid Explorer.html"}]}, "primary-1": {"1": [{"name": "مدفع الكلمات والحروف 💣", "file": "G1_cannon.html"}, {"name": "صائد الأسماك السحري 🎣", "file": "G1_fishing.html"}, {"name": "فرقعة البالونات السريعة 🎈", "file": "G3_balloon.html"}, {"name": "سفينة الفضاء والدفاع النيزكي 🚀", "file": "G4_spaceship.html"}, {"name": "رمي السهام والنيشان 🏹", "file": "G5_archery.html"}], "2": [{"name": "مدفع الكلمات والحروف 💣", "file": "G1_cannon.html"}, {"name": "صائد الأسماك السحري 🎣", "file": "G1_fishing.html"}, {"name": "فرقعة البالونات السريعة 🎈", "file": "G3_balloon.html"}, {"name": "سفينة الفضاء والدفاع النيزكي 🚀", "file": "G4_spaceship.html"}, {"name": "رمي السهام والنيشان 🏹", "file": "G5_archery.html"}], "3": [{"name": "مدفع الكلمات والحروف 💣", "file": "G1_cannon.html"}, {"name": "صائد الأسماك السحري 🎣", "file": "G1_fishing.html"}, {"name": "فرقعة البالونات السريعة 🎈", "file": "G3_balloon.html"}, {"name": "سفينة الفضاء والدفاع النيزكي 🚀", "file": "G4_spaceship.html"}, {"name": "رمي السهام والنيشان 🏹", "file": "G5_archery.html"}], "4": [{"name": "مدفع الكلمات والحروف 💣", "file": "G1_cannon.html"}, {"name": "صائد الأسماك السحري 🎣", "file": "G1_fishing.html"}, {"name": "فرقعة البالونات السريعة 🎈", "file": "G3_balloon.html"}, {"name": "سفينة الفضاء والدفاع النيزكي 🚀", "file": "G4_spaceship.html"}, {"name": "رمي السهام والنيشان 🏹", "file": "G5_archery.html"}], "5": [{"name": "مدفع الكلمات والحروف 💣", "file": "G1_cannon.html"}, {"name": "صائد الأسماك السحري 🎣", "file": "G1_fishing.html"}, {"name": "فرقعة البالونات السريعة 🎈", "file": "G3_balloon.html"}, {"name": "سفينة الفضاء والدفاع النيزكي 🚀", "file": "G4_spaceship.html"}, {"name": "رمي السهام والنيشان 🏹", "file": "G5_archery.html"}], "6": [{"name": "مدفع الكلمات والحروف 💣", "file": "G1_cannon.html"}, {"name": "صائد الأسماك السحري 🎣", "file": "G1_fishing.html"}, {"name": "فرقعة البالونات السريعة 🎈", "file": "G3_balloon.html"}, {"name": "سفينة الفضاء والدفاع النيزكي 🚀", "file": "G4_spaceship.html"}, {"name": "رمي السهام والنيشان 🏹", "file": "G5_archery.html"}]}, "primary-3": {"1": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "2": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "3": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "4": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "5": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "6": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}]}, "primary-4": {"1": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "2": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "3": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "4": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "5": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "6": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}]}, "primary-5": {"1": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "2": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "3": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "4": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "5": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "6": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}]}, "primary-6": {"1": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "2": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "3": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "4": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "5": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}], "6": [{"name": "Lesson 1 - Archery Quiz", "file": "Lesson 1 - Archery Quiz.html"}, {"name": "Lesson 2 - Space Blaster", "file": "Lesson 2 - Space Blaster.html"}, {"name": "Lesson 3 - Bubble Pop", "file": "Lesson 3 - Bubble Pop.html"}, {"name": "Lesson 4 - Word Snake", "file": "Lesson 4 - Word Snake.html"}]}, "prep-2": {"1": [{"name": "Lesson1_CannonBlast", "file": "Lesson1_CannonBlast.html"}, {"name": "Lesson2_BowArrow", "file": "Lesson2_BowArrow.html"}, {"name": "Lesson3_SpaceShooter", "file": "Lesson3_SpaceShooter.html"}, {"name": "Lesson4_Fishing", "file": "Lesson4_Fishing.html"}, {"name": "Lesson5_BubblePopper", "file": "Lesson5_BubblePopper.html"}, {"name": "Lesson6_WhackMole", "file": "Lesson6_WhackMole.html"}], "2": [{"name": "Lesson1_NinjaSlash", "file": "Lesson1_NinjaSlash.html"}, {"name": "Lesson2_ZombieDefense", "file": "Lesson2_ZombieDefense.html"}, {"name": "Lesson3_Basketball", "file": "Lesson3_Basketball.html"}, {"name": "Lesson4_Minecart", "file": "Lesson4_Minecart.html"}, {"name": "Lesson5_Darts", "file": "Lesson5_Darts.html"}, {"name": "Lesson6_UFO", "file": "Lesson6_UFO.html"}], "3": [{"name": "Lesson1_Bowling", "file": "Lesson1_Bowling.html"}, {"name": "Lesson2_Pirate", "file": "Lesson2_Pirate.html"}, {"name": "Lesson3_Frog", "file": "Lesson3_Frog.html"}, {"name": "Lesson4_Meteor", "file": "Lesson4_Meteor.html"}, {"name": "Lesson5_Slingshot", "file": "Lesson5_Slingshot.html"}, {"name": "Lesson6_Soccer", "file": "Lesson6_Soccer.html"}], "4": [{"name": "Lesson1_Submarine", "file": "Lesson1_Submarine.html"}, {"name": "Lesson2_Helicopter", "file": "Lesson2_Helicopter.html"}, {"name": "Lesson3_Ghost", "file": "Lesson3_Ghost.html"}, {"name": "Lesson4_Tank", "file": "Lesson4_Tank.html"}, {"name": "Lesson5_Spider", "file": "Lesson5_Spider.html"}, {"name": "Lesson6_Golf", "file": "Lesson6_Golf.html"}], "5": [{"name": "Lesson1_Trapdoor", "file": "Lesson1_Trapdoor.html"}, {"name": "Lesson2_Train", "file": "Lesson2_Train.html"}, {"name": "Lesson3_Cowboy", "file": "Lesson3_Cowboy.html"}, {"name": "Lesson4_Farm", "file": "Lesson4_Farm.html"}, {"name": "Lesson5_Reveal", "file": "Lesson5_Reveal.html"}, {"name": "Lesson6_Pool", "file": "Lesson6_Pool.html"}], "6": [{"name": "Lesson1_UFO", "file": "Lesson1_UFO.html"}, {"name": "Lesson2_Race", "file": "Lesson2_Race.html"}, {"name": "Lesson3_Shuriken", "file": "Lesson3_Shuriken.html"}, {"name": "Lesson4_Volcano", "file": "Lesson4_Volcano.html"}, {"name": "Lesson5_Boomerang", "file": "Lesson5_Boomerang.html"}, {"name": "Lesson6_Lightning", "file": "Lesson6_Lightning.html"}]}, "primary-2": {"1": [{"name": "L1 cannon Classroom Greetings", "file": "L1_cannon_Classroom_Greetings.html"}, {"name": "L2 arrow Around the Classroom", "file": "L2_arrow_Around_the_Classroom.html"}, {"name": "L3 fishing Our Classroom Objects", "file": "L3_fishing_Our_Classroom_Objects.html"}, {"name": "L4 spaceship Lets Write Together", "file": "L4_spaceship_Lets_Write_Together.html"}], "2": [{"name": "L1 shuriken Colors and Shapes", "file": "L1_shuriken_Colors_and_Shapes.html"}, {"name": "L2 bowling Colors and Shapes Around Us", "file": "L2_bowling_Colors_and_Shapes_Around_Us.html"}, {"name": "L3 soccer Numbers and Counting", "file": "L3_soccer_Numbers_and_Counting.html"}, {"name": "L4 basketball Lets Count Together", "file": "L4_basketball_Lets_Count_Together.html"}], "3": [{"name": "L1 boomerang Classroom Actions", "file": "L1_boomerang_Classroom_Actions.html"}, {"name": "L2 spider Lets Talk about Class Routin", "file": "L2_spider_Lets_Talk_about_Class_Routin.html"}, {"name": "L3 helicopter All About Our Classroom", "file": "L3_helicopter_All_About_Our_Classroom.html"}, {"name": "L4 lightning Writing About Our Class", "file": "L4_lightning_Writing_About_Our_Class.html"}], "4": [{"name": "L1 volcano My Family", "file": "L1_volcano_My_Family.html"}, {"name": "L2 tank All About Me", "file": "L2_tank_All_About_Me.html"}, {"name": "L3 train My Life at Home", "file": "L3_train_My_Life_at_Home.html"}, {"name": "L4 lasso Me and My Family", "file": "L4_lasso_Me_and_My_Family.html"}], "5": [{"name": "L1 wand Inside My Home", "file": "L1_wand_Inside_My_Home.html"}, {"name": "L2 billiard Whats in My Home", "file": "L2_billiard_Whats_in_My_Home.html"}, {"name": "L3 ufo My Favorite Room", "file": "L3_ufo_My_Favorite_Room.html"}, {"name": "L4 trapdoor Actions at Home", "file": "L4_trapdoor_Actions_at_Home.html"}], "6": [{"name": "L1 racecar My Home", "file": "L1_racecar_My_Home.html"}, {"name": "L2 water Lets Talk About Our Home", "file": "L2_water_Lets_Talk_About_Our_Home.html"}, {"name": "L3 dart Where Things Are in My Home", "file": "L3_dart_Where_Things_Are_in_My_Home.html"}, {"name": "L4 slingshot I Can Read and Write About M", "file": "L4_slingshot_I_Can_Read_and_Write_About_M.html"}]}};


const GRAMMAR_GAMES_MAP = {"primary-1": {"1": [{"name": "صائد الشخصيات والتحيات", "file": "../../p1-game-player.html?game=u1_l1_g1"}, {"name": "قطار الحروف والتهجئة الذكية", "file": "../../p1-game-player.html?game=u1_l1_g2"}, {"name": "مبارزة المحادثة والقواعد", "file": "../../p1-game-player.html?game=u1_l1_g3"}], "2": [{"name": "صائد كائنات الحديقة والألوان", "file": "../../p1-game-player.html?game=u2_l1_g1"}, {"name": "مدفع فرقعة الأشكال الهندسية", "file": "../../p1-game-player.html?game=u2_l1_g2"}, {"name": "تحدي نينجا صوتيات S و A", "file": "../../p1-game-player.html?game=u2_l1_g3"}], "3": [{"name": "صائد أفراد العائلة السعيدة", "file": "../../p1-game-player.html?game=u3_l1_g1"}, {"name": "سباق عد الأرقام من 1 إلى 5", "file": "../../p1-game-player.html?game=u3_l1_g2"}, {"name": "فرقعة صوتيات N, P, H, D", "file": "../../p1-game-player.html?game=u3_l1_g3"}], "4": [{"name": "صائد أجزاء الجسم والنظافة", "file": "../../p1-game-player.html?game=u4_l1_g1"}, {"name": "كعكة عيد الميلاد والأرقام 6-10", "file": "../../p1-game-player.html?game=u4_l1_g2"}, {"name": "فرقعة صوتيات C, O, E, L", "file": "../../p1-game-player.html?game=u4_l1_g3"}], "5": [{"name": "صائد حيوانات المزرعة اللطيفة", "file": "../../p1-game-player.html?game=u5_l1_g1"}, {"name": "مطبخ الملك والأطعمة الصحية", "file": "../../p1-game-player.html?game=u5_l1_g2"}, {"name": "فرقعة صوتيات F, M, G, R", "file": "../../p1-game-player.html?game=u5_l1_g3"}], "6": [{"name": "سفاري الحيوانات والآلات الموسيقية", "file": "../../p1-game-player.html?game=u6_l1_g1"}, {"name": "فرقعة صوتيات W, Y, Z", "file": "../../p1-game-player.html?game=u6_l1_g2"}, {"name": "تحدي الأبطال النهائي والكأس الذهبي 🏆", "file": "../../p1-game-player.html?game=u6_l1_g3"}]}, "primary-2": {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}, "primary-3": {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}, "primary-4": {"1": [{"name": "Fishing Game 🎣", "file": "lesson1-fishing.html"}, {"name": "Balloons Pop 🎈", "file": "lesson2-balloons.html"}, {"name": "Planets Game 🪐", "file": "lesson3-planets.html"}, {"name": "Archery 🏹", "file": "lesson5-archery.html"}], "2": [{"name": "Balloons Pop 🎈", "file": "u2-lesson1-balloons.html"}, {"name": "Planets Game 🪐", "file": "u2-lesson2-planets.html"}, {"name": "Archery 🏹", "file": "u2-lesson3-archery.html"}, {"name": "Fishing Game 🎣", "file": "u2-lesson4-fishing.html"}], "3": [{"name": "Fishing Game 🎣", "file": "u3-lesson1-fishing.html"}, {"name": "Balloons Pop 🎈", "file": "u3-lesson2-balloons.html"}, {"name": "Planets Game 🪐", "file": "u3-lesson3-planets.html"}, {"name": "Archery 🏹", "file": "u3-lesson4-archery.html"}], "4": [{"name": "Fishing Game 🎣", "file": "u4-lesson1-fishing.html"}, {"name": "Balloons Pop 🎈", "file": "u4-lesson2-balloons.html"}, {"name": "Planets Game 🪐", "file": "u4-lesson3-planets.html"}, {"name": "Archery 🏹", "file": "u4-lesson4-archery.html"}], "5": [{"name": "Fishing Game 🎣", "file": "u5-lesson1-fishing.html"}, {"name": "Balloons Pop 🎈", "file": "u5-lesson2-balloons.html"}, {"name": "Planets Game 🪐", "file": "u5-lesson3-planets.html"}, {"name": "Archery 🏹", "file": "u5-lesson4-archery.html"}], "6": []}, "primary-5": {"1": [{"name": "Grammar Claw 🦞", "file": "g5-u1-grammar-claw.html"}, {"name": "Grammar Race 🏎️", "file": "g5-u1-grammar-race.html"}, {"name": "Lesson1 Wheel 🎡", "file": "g5-u1-lesson1-wheel.html"}, {"name": "Lesson2 Rope 🪢", "file": "g5-u1-lesson2-rope.html"}, {"name": "Lesson3 Bank 🏦", "file": "g5-u1-lesson3-bank.html"}, {"name": "Jump 🦘", "file": "jump-u1l1.html"}, {"name": "Jump 🦘", "file": "jump-u1l2.html"}, {"name": "Jump 🦘", "file": "jump-u1l3.html"}, {"name": "Jump 🦘", "file": "jump-u1l4.html"}, {"name": "Jump 🦘", "file": "jump-u1l5.html"}], "2": [{"name": "Grammar Race 🏎️", "file": "g5-u2-grammar-race.html"}, {"name": "Lesson1 Wheel 🎡", "file": "g5-u2-lesson1-wheel.html"}, {"name": "Lesson3 Claw 🦞", "file": "g5-u2-lesson3-claw.html"}, {"name": "Jump 🦘", "file": "jump-u2l1.html"}, {"name": "Jump 🦘", "file": "jump-u2l2.html"}, {"name": "Jump 🦘", "file": "jump-u2l3.html"}, {"name": "Jump 🦘", "file": "jump-u2l4.html"}, {"name": "Jump 🦘", "file": "jump-u2l5.html"}], "3": [{"name": "Grammar Rope 🪢", "file": "g5-u3-grammar-rope.html"}, {"name": "Lesson1 Bank 🏦", "file": "g5-u3-lesson1-bank.html"}, {"name": "Story Wheel 🎡", "file": "g5-u3-story-wheel.html"}, {"name": "Jump 🦘", "file": "jump-u3l1.html"}, {"name": "Jump 🦘", "file": "jump-u3l2.html"}, {"name": "Jump 🦘", "file": "jump-u3l3.html"}, {"name": "Jump 🦘", "file": "jump-u3l4.html"}, {"name": "Jump 🦘", "file": "jump-u3l5.html"}], "4": [{"name": "Capital Race 1 🏎️", "file": "g5-u4-capital-race-1.html"}, {"name": "Grammar Claw 🦞", "file": "g5-u4-grammar-claw.html"}, {"name": "Lesson1 Rope 1 🪢", "file": "g5-u4-lesson1-rope-1.html"}, {"name": "Jump 🦘", "file": "jump-u4l1.html"}, {"name": "Jump 🦘", "file": "jump-u4l2.html"}, {"name": "Jump 🦘", "file": "jump-u4l3.html"}, {"name": "Jump 🦘", "file": "jump-u4l4.html"}, {"name": "Jump 🦘", "file": "jump-u4l5.html"}], "5": [{"name": "Story Wheel 🎡", "file": "g5-u3-story-wheel.html"}, {"name": "Digger Bank 🏦", "file": "g5-u5-digger-bank.html"}, {"name": "Grammar Wheel 🎡", "file": "g5-u5-grammar-wheel.html"}, {"name": "Lesson1 Claw 🦞", "file": "g5-u5-lesson1-claw.html"}, {"name": "Jump 🦘", "file": "jump-u5l1.html"}, {"name": "Jump 🦘", "file": "jump-u5l2.html"}, {"name": "Jump 🦘", "file": "jump-u5l3.html"}, {"name": "Jump 🦘", "file": "jump-u5l4.html"}, {"name": "Jump 🦘", "file": "jump-u5l5.html"}], "6": []}, "primary-6": {"1": [{"name": "game1_escape_room", "file": "game1_escape_room.html"}, {"name": "game2_treasure_hunt", "file": "game2_treasure_hunt.html"}, {"name": "game3_millionaire", "file": "game3_millionaire.html"}, {"name": "game4_memory_match", "file": "game4_memory_match.html"}, {"name": "game5_wheel_of_fortune", "file": "game5_wheel_of_fortune.html"}], "2": [{"name": "game1_escape_room", "file": "game1_escape_room.html"}, {"name": "game2_treasure_hunt", "file": "game2_treasure_hunt.html"}, {"name": "game3_millionaire", "file": "game3_millionaire.html"}, {"name": "game4_memory_match", "file": "game4_memory_match.html"}, {"name": "game5_wheel_of_fortune", "file": "game5_wheel_of_fortune.html"}], "3": [{"name": "game1_escape_room", "file": "game1_escape_room.html"}, {"name": "game2_treasure_hunt", "file": "game2_treasure_hunt.html"}, {"name": "game3_millionaire", "file": "game3_millionaire.html"}, {"name": "game4_memory_match", "file": "game4_memory_match.html"}, {"name": "game5_wheel_of_fortune", "file": "game5_wheel_of_fortune.html"}], "4": [{"name": "game1_escape_room", "file": "game1_escape_room.html"}, {"name": "game2_treasure_hunt", "file": "game2_treasure_hunt.html"}, {"name": "game3_millionaire", "file": "game3_millionaire.html"}, {"name": "game4_memory_match", "file": "game4_memory_match.html"}, {"name": "game5_wheel_of_fortune", "file": "game5_wheel_of_fortune.html"}], "5": [{"name": "game1_escape_room", "file": "game1_escape_room.html"}, {"name": "game2_treasure_hunt", "file": "game2_treasure_hunt.html"}, {"name": "game3_millionaire", "file": "game3_millionaire.html"}, {"name": "game4_memory_match", "file": "game4_memory_match.html"}, {"name": "game5_wheel_of_fortune", "file": "game5_wheel_of_fortune.html"}], "6": []}, "prep-1": {"1": [{"name": "Game1_WheelOfFortune", "file": "Game1_WheelOfFortune.html"}, {"name": "Game2_BuildTheSentence", "file": "Game2_BuildTheSentence.html"}, {"name": "Game3_Millionaire", "file": "Game3_Millionaire.html"}, {"name": "Game4_WordSearch", "file": "Game4_WordSearch.html"}, {"name": "Game5_EscapeRoom", "file": "Game5_EscapeRoom.html"}], "2": [{"name": "Game1_MemoryMatch", "file": "Game1_MemoryMatch.html"}, {"name": "Game2_Jeopardy", "file": "Game2_Jeopardy.html"}, {"name": "Game3_Crossword", "file": "Game3_Crossword.html"}, {"name": "Game4_BalloonPop", "file": "Game4_BalloonPop.html"}, {"name": "Game5_RaceToTheTop", "file": "Game5_RaceToTheTop.html"}], "3": [{"name": "Game1_Hangman", "file": "Game1_Hangman.html"}, {"name": "Game2_TreasureHunt", "file": "Game2_TreasureHunt.html"}, {"name": "Game3_TimeChallenge", "file": "Game3_TimeChallenge.html"}, {"name": "Game4_CardFlip", "file": "Game4_CardFlip.html"}, {"name": "Game5_MysteryBoxes", "file": "Game5_MysteryBoxes.html"}], "4": [{"name": "Game1_MazeAdventure", "file": "Game1_MazeAdventure.html"}, {"name": "Game2_DetectiveMystery", "file": "Game2_DetectiveMystery.html"}, {"name": "Game3_SpinAndSolve", "file": "Game3_SpinAndSolve.html"}, {"name": "Game4_WhackAMole", "file": "Game4_WhackAMole.html"}, {"name": "Game5_SortingChallenge", "file": "Game5_SortingChallenge.html"}], "5": [{"name": "Game1_SpaceAdventure", "file": "Game1_SpaceAdventure.html"}, {"name": "Game2_TreasureMap", "file": "Game2_TreasureMap.html"}, {"name": "Game3_PlatformAdventure", "file": "Game3_PlatformAdventure.html"}, {"name": "Game4_BossBattleQuiz", "file": "Game4_BossBattleQuiz.html"}, {"name": "Game5_HiddenObjects", "file": "Game5_HiddenObjects.html"}], "6": [{"name": "Game1_PuzzleAdventure", "file": "Game1_PuzzleAdventure.html"}, {"name": "Game2_Labyrinth", "file": "Game2_Labyrinth.html"}, {"name": "Game3_MissionImpossible", "file": "Game3_MissionImpossible.html"}, {"name": "Game4_PirateIsland", "file": "Game4_PirateIsland.html"}, {"name": "Game5_RuleSimon", "file": "Game5_RuleSimon.html"}]}, "prep-2": {"1": [{"name": "Game1_WhackAMole", "file": "Game1_WhackAMole.html"}, {"name": "Game2_MatchingChallenge", "file": "Game2_MatchingChallenge.html"}, {"name": "Game3_SpaceAdventure", "file": "Game3_SpaceAdventure.html"}, {"name": "Game4_Hangman", "file": "Game4_Hangman.html"}, {"name": "Game5_MysteryBoxes", "file": "Game5_MysteryBoxes.html"}], "2": [{"name": "Game1_GrammarQuiz", "file": "Game1_GrammarQuiz.html"}, {"name": "Game2_DetectiveMystery", "file": "Game2_DetectiveMystery.html"}, {"name": "Game3_WordSearch", "file": "Game3_WordSearch.html"}, {"name": "Game4_PuzzleAdventure", "file": "Game4_PuzzleAdventure.html"}, {"name": "Game5_Labyrinth", "file": "Game5_Labyrinth.html"}], "3": [{"name": "Game1_BossBattleQuiz", "file": "Game1_BossBattleQuiz.html"}, {"name": "Game2_TreasureMap", "file": "Game2_TreasureMap.html"}, {"name": "Game3_BalloonPop", "file": "Game3_BalloonPop.html"}, {"name": "Game4_CardFlip", "file": "Game4_CardFlip.html"}, {"name": "Game5_Crossword", "file": "Game5_Crossword.html"}], "4": [{"name": "Game1_SpinAndSolve", "file": "Game1_SpinAndSolve.html"}, {"name": "Game2_MissionImpossible", "file": "Game2_MissionImpossible.html"}, {"name": "Game3_RuleSimon", "file": "Game3_RuleSimon.html"}, {"name": "Game4_PlatformAdventure", "file": "Game4_PlatformAdventure.html"}, {"name": "Game5_HiddenObjects", "file": "Game5_HiddenObjects.html"}], "5": [{"name": "Game1_TreasureMap", "file": "Game1_TreasureMap.html"}, {"name": "Game2_Crossword", "file": "Game2_Crossword.html"}, {"name": "Game3_MemoryMatch", "file": "Game3_MemoryMatch.html"}, {"name": "Game4_EscapeRoom", "file": "Game4_EscapeRoom.html"}, {"name": "Game5_RoadTripQuiz", "file": "Game5_RoadTripQuiz.html"}], "6": [{"name": "Game1_WheelOfFortune", "file": "Game1_WheelOfFortune.html"}, {"name": "Game2_Millionaire", "file": "Game2_Millionaire.html"}, {"name": "Game3_Jeopardy", "file": "Game3_Jeopardy.html"}, {"name": "Game4_BoardGame", "file": "Game4_BoardGame.html"}, {"name": "Game5_BuildTheSentence", "file": "Game5_BuildTheSentence.html"}]}, "prep-3": {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}};







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
