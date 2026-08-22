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

const GAMES_MAP = {
  "prep-3": {
    "1": [
      {
        "name": "L1 cannon Beyond My Looks",
        "file": "L1_cannon_Beyond_My_Looks.html"
      },
      {
        "name": "L2 arrow Self Discovery",
        "file": "L2_arrow_Self_Discovery.html"
      },
      {
        "name": "L3 fishing The Mirror Moment",
        "file": "L3_fishing_The_Mirror_Moment.html"
      },
      {
        "name": "L4 spaceship Practice  Skills",
        "file": "L4_spaceship_Practice__Skills.html"
      },
      {
        "name": "L5 shuriken Lets Talk",
        "file": "L5_shuriken_Lets_Talk.html"
      },
      {
        "name": "L6 bowling Practice  Skills",
        "file": "L6_bowling_Practice__Skills.html"
      }
    ],
    "2": [
      {
        "name": "L1 soccer Stay Connected",
        "file": "L1_soccer_Stay_Connected.html"
      },
      {
        "name": "L2 basketball Challenges and Solutions",
        "file": "L2_basketball_Challenges_and_Solutions.html"
      },
      {
        "name": "L3 boomerang The Silent Dinner",
        "file": "L3_boomerang_The_Silent_Dinner.html"
      },
      {
        "name": "L4 spider Practice  Skills",
        "file": "L4_spider_Practice__Skills.html"
      },
      {
        "name": "L5 helicopter Practice  Skills",
        "file": "L5_helicopter_Practice__Skills.html"
      },
      {
        "name": "L6 lightning Practice  Skills",
        "file": "L6_lightning_Practice__Skills.html"
      }
    ],
    "3": [
      {
        "name": "L1 volcano AI",
        "file": "L1_volcano_AI.html"
      },
      {
        "name": "L2 tank A I Technology",
        "file": "L2_tank_A_I_Technology.html"
      },
      {
        "name": "L3 train Robot Teacher",
        "file": "L3_train_Robot_Teacher.html"
      },
      {
        "name": "L4 lasso Practice  Skills",
        "file": "L4_lasso_Practice__Skills.html"
      },
      {
        "name": "L5 wand Smart Robots",
        "file": "L5_wand_Smart_Robots.html"
      },
      {
        "name": "L6 billiard Practice  Skills",
        "file": "L6_billiard_Practice__Skills.html"
      }
    ],
    "4": [
      {
        "name": "L1 ufo Screen Time",
        "file": "L1_ufo_Screen_Time.html"
      },
      {
        "name": "L2 trapdoor Egypts Smart Future",
        "file": "L2_trapdoor_Egypts_Smart_Future.html"
      },
      {
        "name": "L3 racecar Balancing Screen Time",
        "file": "L3_racecar_Balancing_Screen_Time.html"
      },
      {
        "name": "L4 water Story Time",
        "file": "L4_water_Story_Time.html"
      },
      {
        "name": "L5 dart Lets Talk",
        "file": "L5_dart_Lets_Talk.html"
      },
      {
        "name": "L6 slingshot Practice  Skills",
        "file": "L6_slingshot_Practice__Skills.html"
      }
    ],
    "5": [
      {
        "name": "L1 whack Think like a Designer",
        "file": "L1_whack_Think_like_a_Designer.html"
      },
      {
        "name": "L2 balloon Dream It Build It",
        "file": "L2_balloon_Dream_It_Build_It.html"
      },
      {
        "name": "L3 boxing See through Their Eyes",
        "file": "L3_boxing_See_through_Their_Eyes.html"
      },
      {
        "name": "L4 paperplane Story Time",
        "file": "L4_paperplane_Story_Time.html"
      },
      {
        "name": "L5 goldminer Lets Talk",
        "file": "L5_goldminer_Lets_Talk.html"
      },
      {
        "name": "L6 magnet Practice  Skills",
        "file": "L6_magnet_Practice__Skills.html"
      }
    ],
    "6": [
      {
        "name": "L1 catapult The Power of Stories",
        "file": "L1_catapult_The_Power_of_Stories.html"
      },
      {
        "name": "L2 pingpong The story That Helped Me",
        "file": "L2_pingpong_The_story_That_Helped_Me.html"
      },
      {
        "name": "L3 diver Elements of a Story",
        "file": "L3_diver_Elements_of_a_Story.html"
      },
      {
        "name": "L4 parachute Story Time",
        "file": "L4_parachute_Story_Time.html"
      },
      {
        "name": "L5 karate Lets Talk",
        "file": "L5_karate_Lets_Talk.html"
      },
      {
        "name": "L6 potion My Own Story",
        "file": "L6_potion_My_Own_Story.html"
      }
    ]
  },
  "prep-1": {
    "1": [
      {
        "name": "Lesson 1 - Fruit Slicer",
        "file": "Lesson 1 - Fruit Slicer.html"
      },
      {
        "name": "Lesson 2 - Whack-A-Mole",
        "file": "Lesson 2 - Whack-A-Mole.html"
      },
      {
        "name": "Lesson 3 - Safe Cracker",
        "file": "Lesson 3 - Safe Cracker.html"
      },
      {
        "name": "Lesson 4 - Code Breaker",
        "file": "Lesson 4 - Code Breaker.html"
      },
      {
        "name": "Lesson 5 - Jigsaw Puzzle",
        "file": "Lesson 5 - Jigsaw Puzzle.html"
      },
      {
        "name": "Lesson 6 - Court Judge",
        "file": "Lesson 6 - Court Judge.html"
      }
    ],
    "2": [
      {
        "name": "Lesson 1 - Dungeon Doors",
        "file": "Lesson 1 - Dungeon Doors.html"
      },
      {
        "name": "Lesson 2 - Magic Hat",
        "file": "Lesson 2 - Magic Hat.html"
      },
      {
        "name": "Lesson 3 - Piano Maestro",
        "file": "Lesson 3 - Piano Maestro.html"
      },
      {
        "name": "Lesson 4 - Space Invaders",
        "file": "Lesson 4 - Space Invaders.html"
      },
      {
        "name": "Lesson 5 - Asteroid Defender",
        "file": "Lesson 5 - Asteroid Defender.html"
      },
      {
        "name": "Lesson 6 - Archery Target",
        "file": "Lesson 6 - Archery Target.html"
      }
    ],
    "3": [
      {
        "name": "Lesson 1 - Ghost Hunter",
        "file": "Lesson 1 - Ghost Hunter.html"
      },
      {
        "name": "Lesson 2 - UFO Abduction",
        "file": "Lesson 2 - UFO Abduction.html"
      },
      {
        "name": "Lesson 3 - Cowboy Duel",
        "file": "Lesson 3 - Cowboy Duel.html"
      },
      {
        "name": "Lesson 4 - Firefighter",
        "file": "Lesson 4 - Firefighter.html"
      },
      {
        "name": "Lesson 5 - Basketball Hoop",
        "file": "Lesson 5 - Basketball Hoop.html"
      },
      {
        "name": "Lesson 6 - Billiard Pool",
        "file": "Lesson 6 - Billiard Pool.html"
      }
    ],
    "4": [
      {
        "name": "Lesson 1 - Burger Chef",
        "file": "Lesson 1 - Burger Chef.html"
      },
      {
        "name": "Lesson 2 - Potion Brewer",
        "file": "Lesson 2 - Potion Brewer.html"
      },
      {
        "name": "Lesson 3 - Meteor Shower",
        "file": "Lesson 3 - Meteor Shower.html"
      },
      {
        "name": "Lesson 4 - Fishing Pro",
        "file": "Lesson 4 - Fishing Pro.html"
      },
      {
        "name": "Lesson 5 - Crane Claw",
        "file": "Lesson 5 - Crane Claw.html"
      },
      {
        "name": "Lesson 6 - Jungle Swing",
        "file": "Lesson 6 - Jungle Swing.html"
      }
    ],
    "5": [
      {
        "name": "Lesson 1 - Factory Assembly",
        "file": "Lesson 1 - Factory Assembly.html"
      },
      {
        "name": "Lesson 2 - Snowboard",
        "file": "Lesson 2 - Snowboard.html"
      },
      {
        "name": "Lesson 3 - Hot Air Balloon",
        "file": "Lesson 3 - Hot Air Balloon.html"
      },
      {
        "name": "Lesson 4 - Car Racing",
        "file": "Lesson 4 - Car Racing.html"
      },
      {
        "name": "Lesson 5 - Minecart Tracks",
        "file": "Lesson 5 - Minecart Tracks.html"
      },
      {
        "name": "Lesson 6 - Submarine Dive",
        "file": "Lesson 6 - Submarine Dive.html"
      }
    ],
    "6": [
      {
        "name": "Lesson 1 - Space Moon Lander",
        "file": "Lesson 1 - Space Moon Lander.html"
      },
      {
        "name": "Lesson 2 - Frogger Crossing",
        "file": "Lesson 2 - Frogger Crossing.html"
      },
      {
        "name": "Lesson 3 - Traffic Cop",
        "file": "Lesson 3 - Traffic Cop.html"
      },
      {
        "name": "Lesson 4 - Bowling Alley",
        "file": "Lesson 4 - Bowling Alley.html"
      },
      {
        "name": "Lesson 5 - Hurdle Race",
        "file": "Lesson 5 - Hurdle Race.html"
      },
      {
        "name": "Lesson 6 - Pyramid Explorer",
        "file": "Lesson 6 - Pyramid Explorer.html"
      }
    ]
  },
  "primary-1": {
  "1": [
    {
      "name": "Game 1 - Super Cannon",
      "file": "game_1.html"
    },
    {
      "name": "Game 2 - Toon Bowling",
      "file": "game_2.html"
    },
    {
      "name": "Game 3 - Meteor Hunter",
      "file": "game_3.html"
    },
    {
      "name": "Game 4 - Penalty Kick",
      "file": "game_4.html"
    },
    {
      "name": "Game 5 - Word Ninja",
      "file": "game_5.html"
    },
    {
      "name": "Game 6 - Firefighter",
      "file": "game_6.html"
    },
    {
      "name": "Game 7 - Super Jump",
      "file": "game_7.html"
    },
    {
      "name": "Game 8 - Sky Race",
      "file": "game_8.html"
    },
    {
      "name": "Game 9 - Butterfly Catcher",
      "file": "game_9.html"
    },
    {
      "name": "Game 10 - Adventure Flashlight",
      "file": "game_10.html"
    },
    {
      "name": "Game 11 - Letter Maze",
      "file": "game_11.html"
    },
    {
      "name": "Game 12 - Hot Air Balloon",
      "file": "game_12.html"
    },
    {
      "name": "Game 13 - Speech Bot",
      "file": "game_13.html"
    },
    {
      "name": "Game 14 - Magic Piano",
      "file": "game_14.html"
    },
    {
      "name": "Game 15 - Word Tower",
      "file": "game_15.html"
    },
    {
      "name": "Game 16 - Train Express",
      "file": "game_16.html"
    },
    {
      "name": "Game 17 - Shadow Match",
      "file": "game_17.html"
    },
    {
      "name": "Game 18 - Magic Hat",
      "file": "game_18.html"
    },
    {
      "name": "Game 19 - Robot Repair",
      "file": "game_19.html"
    },
    {
      "name": "Game 20 - Treasure Map",
      "file": "game_20.html"
    },
    {
      "name": "Game 21 - Family Tree",
      "file": "game_21.html"
    },
    {
      "name": "Game 22 - Toon Chef",
      "file": "game_22.html"
    },
    {
      "name": "Game 23 - Bubble Pop",
      "file": "game_23.html"
    },
    {
      "name": "Game 24 - Hungry Fish",
      "file": "game_24.html"
    }
  ],
  "2": [
    {
      "name": "Game 1 - Super Cannon",
      "file": "game_1.html"
    },
    {
      "name": "Game 2 - Toon Bowling",
      "file": "game_2.html"
    },
    {
      "name": "Game 3 - Meteor Hunter",
      "file": "game_3.html"
    },
    {
      "name": "Game 4 - Penalty Kick",
      "file": "game_4.html"
    },
    {
      "name": "Game 5 - Word Ninja",
      "file": "game_5.html"
    },
    {
      "name": "Game 6 - Firefighter",
      "file": "game_6.html"
    },
    {
      "name": "Game 7 - Super Jump",
      "file": "game_7.html"
    },
    {
      "name": "Game 8 - Sky Race",
      "file": "game_8.html"
    },
    {
      "name": "Game 9 - Butterfly Catcher",
      "file": "game_9.html"
    },
    {
      "name": "Game 10 - Adventure Flashlight",
      "file": "game_10.html"
    },
    {
      "name": "Game 11 - Letter Maze",
      "file": "game_11.html"
    },
    {
      "name": "Game 12 - Hot Air Balloon",
      "file": "game_12.html"
    },
    {
      "name": "Game 13 - Speech Bot",
      "file": "game_13.html"
    },
    {
      "name": "Game 14 - Magic Piano",
      "file": "game_14.html"
    },
    {
      "name": "Game 15 - Word Tower",
      "file": "game_15.html"
    },
    {
      "name": "Game 16 - Train Express",
      "file": "game_16.html"
    },
    {
      "name": "Game 17 - Shadow Match",
      "file": "game_17.html"
    },
    {
      "name": "Game 18 - Magic Hat",
      "file": "game_18.html"
    },
    {
      "name": "Game 19 - Robot Repair",
      "file": "game_19.html"
    },
    {
      "name": "Game 20 - Treasure Map",
      "file": "game_20.html"
    },
    {
      "name": "Game 21 - Family Tree",
      "file": "game_21.html"
    },
    {
      "name": "Game 22 - Toon Chef",
      "file": "game_22.html"
    },
    {
      "name": "Game 23 - Bubble Pop",
      "file": "game_23.html"
    },
    {
      "name": "Game 24 - Hungry Fish",
      "file": "game_24.html"
    }
  ],
  "3": [
    {
      "name": "Game 1 - Super Cannon",
      "file": "game_1.html"
    },
    {
      "name": "Game 2 - Toon Bowling",
      "file": "game_2.html"
    },
    {
      "name": "Game 3 - Meteor Hunter",
      "file": "game_3.html"
    },
    {
      "name": "Game 4 - Penalty Kick",
      "file": "game_4.html"
    },
    {
      "name": "Game 5 - Word Ninja",
      "file": "game_5.html"
    },
    {
      "name": "Game 6 - Firefighter",
      "file": "game_6.html"
    },
    {
      "name": "Game 7 - Super Jump",
      "file": "game_7.html"
    },
    {
      "name": "Game 8 - Sky Race",
      "file": "game_8.html"
    },
    {
      "name": "Game 9 - Butterfly Catcher",
      "file": "game_9.html"
    },
    {
      "name": "Game 10 - Adventure Flashlight",
      "file": "game_10.html"
    },
    {
      "name": "Game 11 - Letter Maze",
      "file": "game_11.html"
    },
    {
      "name": "Game 12 - Hot Air Balloon",
      "file": "game_12.html"
    },
    {
      "name": "Game 13 - Speech Bot",
      "file": "game_13.html"
    },
    {
      "name": "Game 14 - Magic Piano",
      "file": "game_14.html"
    },
    {
      "name": "Game 15 - Word Tower",
      "file": "game_15.html"
    },
    {
      "name": "Game 16 - Train Express",
      "file": "game_16.html"
    },
    {
      "name": "Game 17 - Shadow Match",
      "file": "game_17.html"
    },
    {
      "name": "Game 18 - Magic Hat",
      "file": "game_18.html"
    },
    {
      "name": "Game 19 - Robot Repair",
      "file": "game_19.html"
    },
    {
      "name": "Game 20 - Treasure Map",
      "file": "game_20.html"
    },
    {
      "name": "Game 21 - Family Tree",
      "file": "game_21.html"
    },
    {
      "name": "Game 22 - Toon Chef",
      "file": "game_22.html"
    },
    {
      "name": "Game 23 - Bubble Pop",
      "file": "game_23.html"
    },
    {
      "name": "Game 24 - Hungry Fish",
      "file": "game_24.html"
    }
  ],
  "4": [
    {
      "name": "Game 1 - Super Cannon",
      "file": "game_1.html"
    },
    {
      "name": "Game 2 - Toon Bowling",
      "file": "game_2.html"
    },
    {
      "name": "Game 3 - Meteor Hunter",
      "file": "game_3.html"
    },
    {
      "name": "Game 4 - Penalty Kick",
      "file": "game_4.html"
    },
    {
      "name": "Game 5 - Word Ninja",
      "file": "game_5.html"
    },
    {
      "name": "Game 6 - Firefighter",
      "file": "game_6.html"
    },
    {
      "name": "Game 7 - Super Jump",
      "file": "game_7.html"
    },
    {
      "name": "Game 8 - Sky Race",
      "file": "game_8.html"
    },
    {
      "name": "Game 9 - Butterfly Catcher",
      "file": "game_9.html"
    },
    {
      "name": "Game 10 - Adventure Flashlight",
      "file": "game_10.html"
    },
    {
      "name": "Game 11 - Letter Maze",
      "file": "game_11.html"
    },
    {
      "name": "Game 12 - Hot Air Balloon",
      "file": "game_12.html"
    },
    {
      "name": "Game 13 - Speech Bot",
      "file": "game_13.html"
    },
    {
      "name": "Game 14 - Magic Piano",
      "file": "game_14.html"
    },
    {
      "name": "Game 15 - Word Tower",
      "file": "game_15.html"
    },
    {
      "name": "Game 16 - Train Express",
      "file": "game_16.html"
    },
    {
      "name": "Game 17 - Shadow Match",
      "file": "game_17.html"
    },
    {
      "name": "Game 18 - Magic Hat",
      "file": "game_18.html"
    },
    {
      "name": "Game 19 - Robot Repair",
      "file": "game_19.html"
    },
    {
      "name": "Game 20 - Treasure Map",
      "file": "game_20.html"
    },
    {
      "name": "Game 21 - Family Tree",
      "file": "game_21.html"
    },
    {
      "name": "Game 22 - Toon Chef",
      "file": "game_22.html"
    },
    {
      "name": "Game 23 - Bubble Pop",
      "file": "game_23.html"
    },
    {
      "name": "Game 24 - Hungry Fish",
      "file": "game_24.html"
    }
  ],
  "5": [
    {
      "name": "Game 1 - Super Cannon",
      "file": "game_1.html"
    },
    {
      "name": "Game 2 - Toon Bowling",
      "file": "game_2.html"
    },
    {
      "name": "Game 3 - Meteor Hunter",
      "file": "game_3.html"
    },
    {
      "name": "Game 4 - Penalty Kick",
      "file": "game_4.html"
    },
    {
      "name": "Game 5 - Word Ninja",
      "file": "game_5.html"
    },
    {
      "name": "Game 6 - Firefighter",
      "file": "game_6.html"
    },
    {
      "name": "Game 7 - Super Jump",
      "file": "game_7.html"
    },
    {
      "name": "Game 8 - Sky Race",
      "file": "game_8.html"
    },
    {
      "name": "Game 9 - Butterfly Catcher",
      "file": "game_9.html"
    },
    {
      "name": "Game 10 - Adventure Flashlight",
      "file": "game_10.html"
    },
    {
      "name": "Game 11 - Letter Maze",
      "file": "game_11.html"
    },
    {
      "name": "Game 12 - Hot Air Balloon",
      "file": "game_12.html"
    },
    {
      "name": "Game 13 - Speech Bot",
      "file": "game_13.html"
    },
    {
      "name": "Game 14 - Magic Piano",
      "file": "game_14.html"
    },
    {
      "name": "Game 15 - Word Tower",
      "file": "game_15.html"
    },
    {
      "name": "Game 16 - Train Express",
      "file": "game_16.html"
    },
    {
      "name": "Game 17 - Shadow Match",
      "file": "game_17.html"
    },
    {
      "name": "Game 18 - Magic Hat",
      "file": "game_18.html"
    },
    {
      "name": "Game 19 - Robot Repair",
      "file": "game_19.html"
    },
    {
      "name": "Game 20 - Treasure Map",
      "file": "game_20.html"
    },
    {
      "name": "Game 21 - Family Tree",
      "file": "game_21.html"
    },
    {
      "name": "Game 22 - Toon Chef",
      "file": "game_22.html"
    },
    {
      "name": "Game 23 - Bubble Pop",
      "file": "game_23.html"
    },
    {
      "name": "Game 24 - Hungry Fish",
      "file": "game_24.html"
    }
  ],
  "6": [
    {
      "name": "Game 1 - Super Cannon",
      "file": "game_1.html"
    },
    {
      "name": "Game 2 - Toon Bowling",
      "file": "game_2.html"
    },
    {
      "name": "Game 3 - Meteor Hunter",
      "file": "game_3.html"
    },
    {
      "name": "Game 4 - Penalty Kick",
      "file": "game_4.html"
    },
    {
      "name": "Game 5 - Word Ninja",
      "file": "game_5.html"
    },
    {
      "name": "Game 6 - Firefighter",
      "file": "game_6.html"
    },
    {
      "name": "Game 7 - Super Jump",
      "file": "game_7.html"
    },
    {
      "name": "Game 8 - Sky Race",
      "file": "game_8.html"
    },
    {
      "name": "Game 9 - Butterfly Catcher",
      "file": "game_9.html"
    },
    {
      "name": "Game 10 - Adventure Flashlight",
      "file": "game_10.html"
    },
    {
      "name": "Game 11 - Letter Maze",
      "file": "game_11.html"
    },
    {
      "name": "Game 12 - Hot Air Balloon",
      "file": "game_12.html"
    },
    {
      "name": "Game 13 - Speech Bot",
      "file": "game_13.html"
    },
    {
      "name": "Game 14 - Magic Piano",
      "file": "game_14.html"
    },
    {
      "name": "Game 15 - Word Tower",
      "file": "game_15.html"
    },
    {
      "name": "Game 16 - Train Express",
      "file": "game_16.html"
    },
    {
      "name": "Game 17 - Shadow Match",
      "file": "game_17.html"
    },
    {
      "name": "Game 18 - Magic Hat",
      "file": "game_18.html"
    },
    {
      "name": "Game 19 - Robot Repair",
      "file": "game_19.html"
    },
    {
      "name": "Game 20 - Treasure Map",
      "file": "game_20.html"
    },
    {
      "name": "Game 21 - Family Tree",
      "file": "game_21.html"
    },
    {
      "name": "Game 22 - Toon Chef",
      "file": "game_22.html"
    },
    {
      "name": "Game 23 - Bubble Pop",
      "file": "game_23.html"
    },
    {
      "name": "Game 24 - Hungry Fish",
      "file": "game_24.html"
    }
  ]
  },
  "primary-2": {
    "1": [
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "2": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "3": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "4": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "5": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "6": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ]
  },
  "primary-3": {
    "1": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "2": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "3": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "4": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "5": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "6": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ]
  },
  "primary-4": {
    "1": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "2": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "3": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "4": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "5": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "6": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ]
  },
  "primary-5": {
    "1": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "2": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "3": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "4": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "5": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "6": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ]
  },
  "primary-6": {
    "1": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "2": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "3": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "4": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "5": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ],
    "6": [
      {
        "name": "Lesson 1 - Archery Quiz",
        "file": "Lesson 1 - Archery Quiz.html"
      },
      {
        "name": "Lesson 2 - Space Blaster",
        "file": "Lesson 2 - Space Blaster.html"
      },
      {
        "name": "Lesson 3 - Bubble Pop",
        "file": "Lesson 3 - Bubble Pop.html"
      },
      {
        "name": "Lesson 4 - Word Snake",
        "file": "Lesson 4 - Word Snake.html"
      }
    ]
  },
  "prep-2": {
    "1": [
      {
        "name": "Lesson1_CannonBlast",
        "file": "Lesson1_CannonBlast.html"
      },
      {
        "name": "Lesson2_BowArrow",
        "file": "Lesson2_BowArrow.html"
      },
      {
        "name": "Lesson3_SpaceShooter",
        "file": "Lesson3_SpaceShooter.html"
      },
      {
        "name": "Lesson4_Fishing",
        "file": "Lesson4_Fishing.html"
      },
      {
        "name": "Lesson5_BubblePopper",
        "file": "Lesson5_BubblePopper.html"
      },
      {
        "name": "Lesson6_WhackMole",
        "file": "Lesson6_WhackMole.html"
      }
    ],
    "2": [
      {
        "name": "Lesson1_NinjaSlash",
        "file": "Lesson1_NinjaSlash.html"
      },
      {
        "name": "Lesson2_ZombieDefense",
        "file": "Lesson2_ZombieDefense.html"
      },
      {
        "name": "Lesson3_Basketball",
        "file": "Lesson3_Basketball.html"
      },
      {
        "name": "Lesson4_Minecart",
        "file": "Lesson4_Minecart.html"
      },
      {
        "name": "Lesson5_Darts",
        "file": "Lesson5_Darts.html"
      },
      {
        "name": "Lesson6_UFO",
        "file": "Lesson6_UFO.html"
      }
    ],
    "3": [
      {
        "name": "Lesson1_Bowling",
        "file": "Lesson1_Bowling.html"
      },
      {
        "name": "Lesson2_Pirate",
        "file": "Lesson2_Pirate.html"
      },
      {
        "name": "Lesson3_Frog",
        "file": "Lesson3_Frog.html"
      },
      {
        "name": "Lesson4_Meteor",
        "file": "Lesson4_Meteor.html"
      },
      {
        "name": "Lesson5_Slingshot",
        "file": "Lesson5_Slingshot.html"
      },
      {
        "name": "Lesson6_Soccer",
        "file": "Lesson6_Soccer.html"
      }
    ],
    "4": [
      {
        "name": "Lesson1_Submarine",
        "file": "Lesson1_Submarine.html"
      },
      {
        "name": "Lesson2_Helicopter",
        "file": "Lesson2_Helicopter.html"
      },
      {
        "name": "Lesson3_Ghost",
        "file": "Lesson3_Ghost.html"
      },
      {
        "name": "Lesson4_Tank",
        "file": "Lesson4_Tank.html"
      },
      {
        "name": "Lesson5_Spider",
        "file": "Lesson5_Spider.html"
      },
      {
        "name": "Lesson6_Golf",
        "file": "Lesson6_Golf.html"
      }
    ],
    "5": [
      {
        "name": "Lesson1_Trapdoor",
        "file": "Lesson1_Trapdoor.html"
      },
      {
        "name": "Lesson2_Train",
        "file": "Lesson2_Train.html"
      },
      {
        "name": "Lesson3_Cowboy",
        "file": "Lesson3_Cowboy.html"
      },
      {
        "name": "Lesson4_Farm",
        "file": "Lesson4_Farm.html"
      },
      {
        "name": "Lesson5_Reveal",
        "file": "Lesson5_Reveal.html"
      },
      {
        "name": "Lesson6_Pool",
        "file": "Lesson6_Pool.html"
      }
    ],
    "6": [
      {
        "name": "Lesson1_UFO",
        "file": "Lesson1_UFO.html"
      },
      {
        "name": "Lesson2_Race",
        "file": "Lesson2_Race.html"
      },
      {
        "name": "Lesson3_Shuriken",
        "file": "Lesson3_Shuriken.html"
      },
      {
        "name": "Lesson4_Volcano",
        "file": "Lesson4_Volcano.html"
      },
      {
        "name": "Lesson5_Boomerang",
        "file": "Lesson5_Boomerang.html"
      },
      {
        "name": "Lesson6_Lightning",
        "file": "Lesson6_Lightning.html"
      }
    ]
  },
  "primary-2": {
    "1": [
      {
        "name": "L1 cannon Classroom Greetings",
        "file": "L1_cannon_Classroom_Greetings.html"
      },
      {
        "name": "L2 arrow Around the Classroom",
        "file": "L2_arrow_Around_the_Classroom.html"
      },
      {
        "name": "L3 fishing Our Classroom Objects",
        "file": "L3_fishing_Our_Classroom_Objects.html"
      },
      {
        "name": "L4 spaceship Lets Write Together",
        "file": "L4_spaceship_Lets_Write_Together.html"
      }
    ],
    "2": [
      {
        "name": "L1 shuriken Colors and Shapes",
        "file": "L1_shuriken_Colors_and_Shapes.html"
      },
      {
        "name": "L2 bowling Colors and Shapes Around Us",
        "file": "L2_bowling_Colors_and_Shapes_Around_Us.html"
      },
      {
        "name": "L3 soccer Numbers and Counting",
        "file": "L3_soccer_Numbers_and_Counting.html"
      },
      {
        "name": "L4 basketball Lets Count Together",
        "file": "L4_basketball_Lets_Count_Together.html"
      }
    ],
    "3": [
      {
        "name": "L1 boomerang Classroom Actions",
        "file": "L1_boomerang_Classroom_Actions.html"
      },
      {
        "name": "L2 spider Lets Talk about Class Routin",
        "file": "L2_spider_Lets_Talk_about_Class_Routin.html"
      },
      {
        "name": "L3 helicopter All About Our Classroom",
        "file": "L3_helicopter_All_About_Our_Classroom.html"
      },
      {
        "name": "L4 lightning Writing About Our Class",
        "file": "L4_lightning_Writing_About_Our_Class.html"
      }
    ],
    "4": [
      {
        "name": "L1 volcano My Family",
        "file": "L1_volcano_My_Family.html"
      },
      {
        "name": "L2 tank All About Me",
        "file": "L2_tank_All_About_Me.html"
      },
      {
        "name": "L3 train My Life at Home",
        "file": "L3_train_My_Life_at_Home.html"
      },
      {
        "name": "L4 lasso Me and My Family",
        "file": "L4_lasso_Me_and_My_Family.html"
      }
    ],
    "5": [
      {
        "name": "L1 wand Inside My Home",
        "file": "L1_wand_Inside_My_Home.html"
      },
      {
        "name": "L2 billiard Whats in My Home",
        "file": "L2_billiard_Whats_in_My_Home.html"
      },
      {
        "name": "L3 ufo My Favorite Room",
        "file": "L3_ufo_My_Favorite_Room.html"
      },
      {
        "name": "L4 trapdoor Actions at Home",
        "file": "L4_trapdoor_Actions_at_Home.html"
      }
    ],
    "6": [
      {
        "name": "L1 racecar My Home",
        "file": "L1_racecar_My_Home.html"
      },
      {
        "name": "L2 water Lets Talk About Our Home",
        "file": "L2_water_Lets_Talk_About_Our_Home.html"
      },
      {
        "name": "L3 dart Where Things Are in My Home",
        "file": "L3_dart_Where_Things_Are_in_My_Home.html"
      },
      {
        "name": "L4 slingshot I Can Read and Write About M",
        "file": "L4_slingshot_I_Can_Read_and_Write_About_M.html"
      }
    ]
  }
};;


const GRAMMAR_GAMES_MAP = {"primary-1": {
  "1": [
    {
      "name": "Game 1 - Super Cannon",
      "file": "game_1.html"
    },
    {
      "name": "Game 2 - Toon Bowling",
      "file": "game_2.html"
    },
    {
      "name": "Game 3 - Meteor Hunter",
      "file": "game_3.html"
    },
    {
      "name": "Game 4 - Penalty Kick",
      "file": "game_4.html"
    },
    {
      "name": "Game 5 - Word Ninja",
      "file": "game_5.html"
    },
    {
      "name": "Game 6 - Firefighter",
      "file": "game_6.html"
    },
    {
      "name": "Game 7 - Super Jump",
      "file": "game_7.html"
    },
    {
      "name": "Game 8 - Sky Race",
      "file": "game_8.html"
    },
    {
      "name": "Game 9 - Butterfly Catcher",
      "file": "game_9.html"
    },
    {
      "name": "Game 10 - Adventure Flashlight",
      "file": "game_10.html"
    },
    {
      "name": "Game 11 - Letter Maze",
      "file": "game_11.html"
    },
    {
      "name": "Game 12 - Hot Air Balloon",
      "file": "game_12.html"
    },
    {
      "name": "Game 13 - Speech Bot",
      "file": "game_13.html"
    },
    {
      "name": "Game 14 - Magic Piano",
      "file": "game_14.html"
    },
    {
      "name": "Game 15 - Word Tower",
      "file": "game_15.html"
    },
    {
      "name": "Game 16 - Train Express",
      "file": "game_16.html"
    },
    {
      "name": "Game 17 - Shadow Match",
      "file": "game_17.html"
    },
    {
      "name": "Game 18 - Magic Hat",
      "file": "game_18.html"
    },
    {
      "name": "Game 19 - Robot Repair",
      "file": "game_19.html"
    },
    {
      "name": "Game 20 - Treasure Map",
      "file": "game_20.html"
    },
    {
      "name": "Game 21 - Family Tree",
      "file": "game_21.html"
    },
    {
      "name": "Game 22 - Toon Chef",
      "file": "game_22.html"
    },
    {
      "name": "Game 23 - Bubble Pop",
      "file": "game_23.html"
    },
    {
      "name": "Game 24 - Hungry Fish",
      "file": "game_24.html"
    }
  ],
  "2": [
    {
      "name": "Game 1 - Super Cannon",
      "file": "game_1.html"
    },
    {
      "name": "Game 2 - Toon Bowling",
      "file": "game_2.html"
    },
    {
      "name": "Game 3 - Meteor Hunter",
      "file": "game_3.html"
    },
    {
      "name": "Game 4 - Penalty Kick",
      "file": "game_4.html"
    },
    {
      "name": "Game 5 - Word Ninja",
      "file": "game_5.html"
    },
    {
      "name": "Game 6 - Firefighter",
      "file": "game_6.html"
    },
    {
      "name": "Game 7 - Super Jump",
      "file": "game_7.html"
    },
    {
      "name": "Game 8 - Sky Race",
      "file": "game_8.html"
    },
    {
      "name": "Game 9 - Butterfly Catcher",
      "file": "game_9.html"
    },
    {
      "name": "Game 10 - Adventure Flashlight",
      "file": "game_10.html"
    },
    {
      "name": "Game 11 - Letter Maze",
      "file": "game_11.html"
    },
    {
      "name": "Game 12 - Hot Air Balloon",
      "file": "game_12.html"
    },
    {
      "name": "Game 13 - Speech Bot",
      "file": "game_13.html"
    },
    {
      "name": "Game 14 - Magic Piano",
      "file": "game_14.html"
    },
    {
      "name": "Game 15 - Word Tower",
      "file": "game_15.html"
    },
    {
      "name": "Game 16 - Train Express",
      "file": "game_16.html"
    },
    {
      "name": "Game 17 - Shadow Match",
      "file": "game_17.html"
    },
    {
      "name": "Game 18 - Magic Hat",
      "file": "game_18.html"
    },
    {
      "name": "Game 19 - Robot Repair",
      "file": "game_19.html"
    },
    {
      "name": "Game 20 - Treasure Map",
      "file": "game_20.html"
    },
    {
      "name": "Game 21 - Family Tree",
      "file": "game_21.html"
    },
    {
      "name": "Game 22 - Toon Chef",
      "file": "game_22.html"
    },
    {
      "name": "Game 23 - Bubble Pop",
      "file": "game_23.html"
    },
    {
      "name": "Game 24 - Hungry Fish",
      "file": "game_24.html"
    }
  ],
  "3": [
    {
      "name": "Game 1 - Super Cannon",
      "file": "game_1.html"
    },
    {
      "name": "Game 2 - Toon Bowling",
      "file": "game_2.html"
    },
    {
      "name": "Game 3 - Meteor Hunter",
      "file": "game_3.html"
    },
    {
      "name": "Game 4 - Penalty Kick",
      "file": "game_4.html"
    },
    {
      "name": "Game 5 - Word Ninja",
      "file": "game_5.html"
    },
    {
      "name": "Game 6 - Firefighter",
      "file": "game_6.html"
    },
    {
      "name": "Game 7 - Super Jump",
      "file": "game_7.html"
    },
    {
      "name": "Game 8 - Sky Race",
      "file": "game_8.html"
    },
    {
      "name": "Game 9 - Butterfly Catcher",
      "file": "game_9.html"
    },
    {
      "name": "Game 10 - Adventure Flashlight",
      "file": "game_10.html"
    },
    {
      "name": "Game 11 - Letter Maze",
      "file": "game_11.html"
    },
    {
      "name": "Game 12 - Hot Air Balloon",
      "file": "game_12.html"
    },
    {
      "name": "Game 13 - Speech Bot",
      "file": "game_13.html"
    },
    {
      "name": "Game 14 - Magic Piano",
      "file": "game_14.html"
    },
    {
      "name": "Game 15 - Word Tower",
      "file": "game_15.html"
    },
    {
      "name": "Game 16 - Train Express",
      "file": "game_16.html"
    },
    {
      "name": "Game 17 - Shadow Match",
      "file": "game_17.html"
    },
    {
      "name": "Game 18 - Magic Hat",
      "file": "game_18.html"
    },
    {
      "name": "Game 19 - Robot Repair",
      "file": "game_19.html"
    },
    {
      "name": "Game 20 - Treasure Map",
      "file": "game_20.html"
    },
    {
      "name": "Game 21 - Family Tree",
      "file": "game_21.html"
    },
    {
      "name": "Game 22 - Toon Chef",
      "file": "game_22.html"
    },
    {
      "name": "Game 23 - Bubble Pop",
      "file": "game_23.html"
    },
    {
      "name": "Game 24 - Hungry Fish",
      "file": "game_24.html"
    }
  ],
  "4": [
    {
      "name": "Game 1 - Super Cannon",
      "file": "game_1.html"
    },
    {
      "name": "Game 2 - Toon Bowling",
      "file": "game_2.html"
    },
    {
      "name": "Game 3 - Meteor Hunter",
      "file": "game_3.html"
    },
    {
      "name": "Game 4 - Penalty Kick",
      "file": "game_4.html"
    },
    {
      "name": "Game 5 - Word Ninja",
      "file": "game_5.html"
    },
    {
      "name": "Game 6 - Firefighter",
      "file": "game_6.html"
    },
    {
      "name": "Game 7 - Super Jump",
      "file": "game_7.html"
    },
    {
      "name": "Game 8 - Sky Race",
      "file": "game_8.html"
    },
    {
      "name": "Game 9 - Butterfly Catcher",
      "file": "game_9.html"
    },
    {
      "name": "Game 10 - Adventure Flashlight",
      "file": "game_10.html"
    },
    {
      "name": "Game 11 - Letter Maze",
      "file": "game_11.html"
    },
    {
      "name": "Game 12 - Hot Air Balloon",
      "file": "game_12.html"
    },
    {
      "name": "Game 13 - Speech Bot",
      "file": "game_13.html"
    },
    {
      "name": "Game 14 - Magic Piano",
      "file": "game_14.html"
    },
    {
      "name": "Game 15 - Word Tower",
      "file": "game_15.html"
    },
    {
      "name": "Game 16 - Train Express",
      "file": "game_16.html"
    },
    {
      "name": "Game 17 - Shadow Match",
      "file": "game_17.html"
    },
    {
      "name": "Game 18 - Magic Hat",
      "file": "game_18.html"
    },
    {
      "name": "Game 19 - Robot Repair",
      "file": "game_19.html"
    },
    {
      "name": "Game 20 - Treasure Map",
      "file": "game_20.html"
    },
    {
      "name": "Game 21 - Family Tree",
      "file": "game_21.html"
    },
    {
      "name": "Game 22 - Toon Chef",
      "file": "game_22.html"
    },
    {
      "name": "Game 23 - Bubble Pop",
      "file": "game_23.html"
    },
    {
      "name": "Game 24 - Hungry Fish",
      "file": "game_24.html"
    }
  ],
  "5": [
    {
      "name": "Game 1 - Super Cannon",
      "file": "game_1.html"
    },
    {
      "name": "Game 2 - Toon Bowling",
      "file": "game_2.html"
    },
    {
      "name": "Game 3 - Meteor Hunter",
      "file": "game_3.html"
    },
    {
      "name": "Game 4 - Penalty Kick",
      "file": "game_4.html"
    },
    {
      "name": "Game 5 - Word Ninja",
      "file": "game_5.html"
    },
    {
      "name": "Game 6 - Firefighter",
      "file": "game_6.html"
    },
    {
      "name": "Game 7 - Super Jump",
      "file": "game_7.html"
    },
    {
      "name": "Game 8 - Sky Race",
      "file": "game_8.html"
    },
    {
      "name": "Game 9 - Butterfly Catcher",
      "file": "game_9.html"
    },
    {
      "name": "Game 10 - Adventure Flashlight",
      "file": "game_10.html"
    },
    {
      "name": "Game 11 - Letter Maze",
      "file": "game_11.html"
    },
    {
      "name": "Game 12 - Hot Air Balloon",
      "file": "game_12.html"
    },
    {
      "name": "Game 13 - Speech Bot",
      "file": "game_13.html"
    },
    {
      "name": "Game 14 - Magic Piano",
      "file": "game_14.html"
    },
    {
      "name": "Game 15 - Word Tower",
      "file": "game_15.html"
    },
    {
      "name": "Game 16 - Train Express",
      "file": "game_16.html"
    },
    {
      "name": "Game 17 - Shadow Match",
      "file": "game_17.html"
    },
    {
      "name": "Game 18 - Magic Hat",
      "file": "game_18.html"
    },
    {
      "name": "Game 19 - Robot Repair",
      "file": "game_19.html"
    },
    {
      "name": "Game 20 - Treasure Map",
      "file": "game_20.html"
    },
    {
      "name": "Game 21 - Family Tree",
      "file": "game_21.html"
    },
    {
      "name": "Game 22 - Toon Chef",
      "file": "game_22.html"
    },
    {
      "name": "Game 23 - Bubble Pop",
      "file": "game_23.html"
    },
    {
      "name": "Game 24 - Hungry Fish",
      "file": "game_24.html"
    }
  ],
  "6": [
    {
      "name": "Game 1 - Super Cannon",
      "file": "game_1.html"
    },
    {
      "name": "Game 2 - Toon Bowling",
      "file": "game_2.html"
    },
    {
      "name": "Game 3 - Meteor Hunter",
      "file": "game_3.html"
    },
    {
      "name": "Game 4 - Penalty Kick",
      "file": "game_4.html"
    },
    {
      "name": "Game 5 - Word Ninja",
      "file": "game_5.html"
    },
    {
      "name": "Game 6 - Firefighter",
      "file": "game_6.html"
    },
    {
      "name": "Game 7 - Super Jump",
      "file": "game_7.html"
    },
    {
      "name": "Game 8 - Sky Race",
      "file": "game_8.html"
    },
    {
      "name": "Game 9 - Butterfly Catcher",
      "file": "game_9.html"
    },
    {
      "name": "Game 10 - Adventure Flashlight",
      "file": "game_10.html"
    },
    {
      "name": "Game 11 - Letter Maze",
      "file": "game_11.html"
    },
    {
      "name": "Game 12 - Hot Air Balloon",
      "file": "game_12.html"
    },
    {
      "name": "Game 13 - Speech Bot",
      "file": "game_13.html"
    },
    {
      "name": "Game 14 - Magic Piano",
      "file": "game_14.html"
    },
    {
      "name": "Game 15 - Word Tower",
      "file": "game_15.html"
    },
    {
      "name": "Game 16 - Train Express",
      "file": "game_16.html"
    },
    {
      "name": "Game 17 - Shadow Match",
      "file": "game_17.html"
    },
    {
      "name": "Game 18 - Magic Hat",
      "file": "game_18.html"
    },
    {
      "name": "Game 19 - Robot Repair",
      "file": "game_19.html"
    },
    {
      "name": "Game 20 - Treasure Map",
      "file": "game_20.html"
    },
    {
      "name": "Game 21 - Family Tree",
      "file": "game_21.html"
    },
    {
      "name": "Game 22 - Toon Chef",
      "file": "game_22.html"
    },
    {
      "name": "Game 23 - Bubble Pop",
      "file": "game_23.html"
    },
    {
      "name": "Game 24 - Hungry Fish",
      "file": "game_24.html"
    }
  ]
  },
  "primary-4": {
    "1": [
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
const EXAMS_MAP = {
    "primary-4": {
        "1": [
            {
                "name": "Exam G4 U1 L1",
                "file": "exam-g4-u1-l1.html"
            },
            {
                "name": "Exam G4 U1 L2",
                "file": "exam-g4-u1-l2.html"
            },
            {
                "name": "Exam G4 U1 L3",
                "file": "exam-g4-u1-l3.html"
            },
            {
                "name": "Exam G4 U1 L4",
                "file": "exam-g4-u1-l4.html"
            },
            {
                "name": "Exam G4 U1 L5",
                "file": "exam-g4-u1-l5.html"
            }
        ],
        "2": [
            {
                "name": "Exam G4 U2 L1",
                "file": "exam-g4-u2-l1.html"
            },
            {
                "name": "Exam G4 U2 L2",
                "file": "exam-g4-u2-l2.html"
            },
            {
                "name": "Exam G4 U2 L3",
                "file": "exam-g4-u2-l3.html"
            },
            {
                "name": "Exam G4 U2 L4",
                "file": "exam-g4-u2-l4.html"
            },
            {
                "name": "Exam G4 U2 Review",
                "file": "exam-g4-u2-review.html"
            }
        ],
        "3": [
            {
                "name": "Exam G4 U3 L1",
                "file": "exam-g4-u3-l1.html"
            },
            {
                "name": "Exam G4 U3 L2",
                "file": "exam-g4-u3-l2.html"
            },
            {
                "name": "Exam G4 U3 L3",
                "file": "exam-g4-u3-l3.html"
            },
            {
                "name": "Exam G4 U3 L4",
                "file": "exam-g4-u3-l4.html"
            },
            {
                "name": "Exam G4 U3 Review",
                "file": "exam-g4-u3-review.html"
            }
        ],
        "4": [
            {
                "name": "Exam G4 U4 L1",
                "file": "exam-g4-u4-l1.html"
            },
            {
                "name": "Exam G4 U4 L2",
                "file": "exam-g4-u4-l2.html"
            },
            {
                "name": "Exam G4 U4 L3",
                "file": "exam-g4-u4-l3.html"
            },
            {
                "name": "Exam G4 U4 L4",
                "file": "exam-g4-u4-l4.html"
            },
            {
                "name": "Exam G4 U4 Review",
                "file": "exam-g4-u4-review.html"
            }
        ],
        "5": [
            {
                "name": "Exam G4 U5 L1",
                "file": "exam-g4-u5-l1.html"
            },
            {
                "name": "Exam G4 U5 L2",
                "file": "exam-g4-u5-l2.html"
            },
            {
                "name": "Exam G4 U5 L3",
                "file": "exam-g4-u5-l3.html"
            },
            {
                "name": "Exam G4 U5 L4",
                "file": "exam-g4-u5-l4.html"
            },
            {
                "name": "Exam G4 U5 Review",
                "file": "exam-g4-u5-review.html"
            }
        ]
    },
    "primary-5": {
        "1": [
            {
                "name": "Exam G5 U1 L1",
                "file": "exam-g5-u1-l1.html"
            },
            {
                "name": "Exam G5 U1 L2",
                "file": "exam-g5-u1-l2.html"
            },
            {
                "name": "Exam G5 U1 L3",
                "file": "exam-g5-u1-l3.html"
            },
            {
                "name": "Exam G5 U1 L4",
                "file": "exam-g5-u1-l4.html"
            },
            {
                "name": "Exam G5 U1 L5",
                "file": "exam-g5-u1-l5.html"
            },
            {
                "name": "Exam G5 U1 Review",
                "file": "exam-g5-u1-review.html"
            }
        ],
        "2": [
            {
                "name": "Exam G5 U2 L1",
                "file": "exam-g5-u2-l1.html"
            },
            {
                "name": "Exam G5 U2 L2",
                "file": "exam-g5-u2-l2.html"
            },
            {
                "name": "Exam G5 U2 L3",
                "file": "exam-g5-u2-l3.html"
            },
            {
                "name": "Exam G5 U2 L4",
                "file": "exam-g5-u2-l4.html"
            },
            {
                "name": "Exam G5 U2 L5",
                "file": "exam-g5-u2-l5.html"
            },
            {
                "name": "Exam G5 U2 Review",
                "file": "exam-g5-u2-review.html"
            }
        ],
        "3": [
            {
                "name": "Exam G5 U3 L1",
                "file": "exam-g5-u3-l1.html"
            },
            {
                "name": "Exam G5 U3 L2",
                "file": "exam-g5-u3-l2.html"
            },
            {
                "name": "Exam G5 U3 L3",
                "file": "exam-g5-u3-l3.html"
            },
            {
                "name": "Exam G5 U3 L4",
                "file": "exam-g5-u3-l4.html"
            },
            {
                "name": "Exam G5 U3 L5",
                "file": "exam-g5-u3-l5.html"
            },
            {
                "name": "Exam G5 U3 Review",
                "file": "exam-g5-u3-review.html"
            }
        ],
        "4": [
            {
                "name": "Exam G5 U4 L1",
                "file": "exam-g5-u4-l1.html"
            },
            {
                "name": "Exam G5 U4 L2",
                "file": "exam-g5-u4-l2.html"
            },
            {
                "name": "Exam G5 U4 L3",
                "file": "exam-g5-u4-l3.html"
            },
            {
                "name": "Exam G5 U4 L4",
                "file": "exam-g5-u4-l4.html"
            },
            {
                "name": "Exam G5 U4 L5",
                "file": "exam-g5-u4-l5.html"
            },
            {
                "name": "Exam G5 U4 Review",
                "file": "exam-g5-u4-review.html"
            }
        ],
        "5": [
            {
                "name": "Exam G5 U5 L1",
                "file": "exam-g5-u5-l1.html"
            },
            {
                "name": "Exam G5 U5 L2",
                "file": "exam-g5-u5-l2.html"
            },
            {
                "name": "Exam G5 U5 L3",
                "file": "exam-g5-u5-l3.html"
            },
            {
                "name": "Exam G5 U5 L4",
                "file": "exam-g5-u5-l4.html"
            },
            {
                "name": "Exam G5 U5 L5",
                "file": "exam-g5-u5-l5.html"
            },
            {
                "name": "Exam G5 U5 Review",
                "file": "exam-g5-u5-review.html"
            }
        ]
    },
    "primary-6": {
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
                "name": "Unit1 Lesson4And5 Quiz",
                "file": "Unit1_Lesson4and5_Quiz.html"
            },
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
                "name": "Unit1 Lesson4And5 Quiz",
                "file": "Unit1_Lesson4and5_Quiz.html"
            },
            {
                "name": "Exam Lesson1 A Day In Egypt",
                "file": "exam_lesson1_a_day_in_egypt.html"
            },
            {
                "name": "Exam Lesson2 Ras Mohamed",
                "file": "exam_lesson2_ras_mohamed.html"
            },
            {
                "name": "Exam Lesson3 Around Egypt",
                "file": "exam_lesson3_around_egypt.html"
            },
            {
                "name": "Exam Lesson4And5 A Day In My School",
                "file": "exam_lesson4and5_a_day_in_my_school.html"
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
                "name": "Unit2 Lesson4And5 Quiz",
                "file": "Unit2_Lesson4and5_Quiz.html"
            },
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
                "name": "Unit2 Lesson4And5 Quiz",
                "file": "Unit2_Lesson4and5_Quiz.html"
            },
            {
                "name": "Exam Lesson1 Caring For Plants",
                "file": "exam_lesson1_caring_for_plants.html"
            },
            {
                "name": "Exam Lesson2 Weather",
                "file": "exam_lesson2_weather.html"
            },
            {
                "name": "Exam Lesson3 Nile River",
                "file": "exam_lesson3_nile_river.html"
            },
            {
                "name": "Exam Lesson4And5 Wadi El Rayan",
                "file": "exam_lesson4and5_wadi_el_rayan.html"
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
                "name": "Unit3 Lesson4And5 Quiz",
                "file": "Unit3_Lesson4and5_Quiz.html"
            },
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
                "name": "Unit3 Lesson4And5 Quiz",
                "file": "Unit3_Lesson4and5_Quiz.html"
            },
            {
                "name": "Exam Lesson1 Jobs",
                "file": "exam_lesson1_jobs.html"
            },
            {
                "name": "Exam Lesson2 Help Community",
                "file": "exam_lesson2_help_community.html"
            },
            {
                "name": "Exam Lesson3 Proud Rose",
                "file": "exam_lesson3_proud_rose.html"
            },
            {
                "name": "Exam Lesson4And5 Egyptian Hero",
                "file": "exam_lesson4and5_egyptian_hero.html"
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
                "name": "Unit4 Lesson4And5 Quiz",
                "file": "Unit4_Lesson4and5_Quiz.html"
            },
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
                "name": "Unit4 Lesson4And5 Quiz",
                "file": "Unit4_Lesson4and5_Quiz.html"
            },
            {
                "name": "Exam Lesson1 Past Present",
                "file": "exam_lesson1_past_present.html"
            },
            {
                "name": "Exam Lesson2 Energy Wisely",
                "file": "exam_lesson2_energy_wisely.html"
            },
            {
                "name": "Exam Lesson3 Gifts Under Ground",
                "file": "exam_lesson3_gifts_under_ground.html"
            },
            {
                "name": "Exam Lesson4And5 Man Made Resources",
                "file": "exam_lesson4and5_man_made_resources.html"
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
                "name": "Unit5 Lesson4And5 Quiz",
                "file": "Unit5_Lesson4and5_Quiz.html"
            },
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
                "name": "Unit5 Lesson4And5 Quiz",
                "file": "Unit5_Lesson4and5_Quiz.html"
            },
            {
                "name": "Exam Lesson1 Trip Through Time",
                "file": "exam_lesson1_trip_through_time.html"
            },
            {
                "name": "Exam Lesson2 Dream Comes True",
                "file": "exam_lesson2_dream_comes_true.html"
            },
            {
                "name": "Exam Lesson3 Bundle Of Sticks",
                "file": "exam_lesson3_bundle_of_sticks.html"
            },
            {
                "name": "Exam Lesson4And5 Egypt Goes Green",
                "file": "exam_lesson4and5_egypt_goes_green.html"
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
            },
            {
                "name": "Unit6 Part1 Quiz",
                "file": "Unit6_Part1_Quiz.html"
            },
            {
                "name": "Unit6 Part2 Quiz",
                "file": "Unit6_Part2_Quiz.html"
            }
        ]
    },
    "prep-1": {
        "1": [
            {
                "name": "U1 L1 Adayinmydigitallife",
                "file": "U1_L1_ADayinMyDigitalLife.html"
            },
            {
                "name": "U1 L2 Weusetechnology",
                "file": "U1_L2_WeUseTechnology.html"
            },
            {
                "name": "U1 L3 Digitaldevices",
                "file": "U1_L3_DigitalDevices.html"
            },
            {
                "name": "U1 L4 Readingadigitalday",
                "file": "U1_L4_ReadingADigitalDay.html"
            },
            {
                "name": "U1 L5 Anemailtoafriend",
                "file": "U1_L5_AnEmailtoaFriend.html"
            },
            {
                "name": "U1 L6 Teamprojectroundtable",
                "file": "U1_L6_TeamProjectRoundtable.html"
            }
        ],
        "2": [
            {
                "name": "U2 L1 Mylearningjourney",
                "file": "U2_L1_MyLearningJourney.html"
            },
            {
                "name": "U2 L2 Learningchallengesandsolutions",
                "file": "U2_L2_LearningChallengesandSolutions.html"
            },
            {
                "name": "U2 L3 Benefitsoflearningtogether",
                "file": "U2_L3_BenefitsofLearningTogether.html"
            },
            {
                "name": "U2 L4 Readingworkingasateam",
                "file": "U2_L4_ReadingWorkingasaTeam.html"
            },
            {
                "name": "U2 L5 Mylearningplan",
                "file": "U2_L5_MyLearningPlan.html"
            },
            {
                "name": "U2 L6 Teamprojectroundtable",
                "file": "U2_L6_TeamProjectRoundtable.html"
            }
        ],
        "3": [
            {
                "name": "U3 L1 Anegyptianhero",
                "file": "U3_L1_AnEgyptianHero.html"
            },
            {
                "name": "U3 L2 Heroesandrolemodels",
                "file": "U3_L2_HeroesandRoleModels.html"
            },
            {
                "name": "U3 L3 Agreategyptianthinker",
                "file": "U3_L3_AGreatEgyptianThinker.html"
            },
            {
                "name": "U3 L4 Readingadoctorsstory",
                "file": "U3_L4_ReadingADoctorsStory.html"
            },
            {
                "name": "U3 L5 Aherowhomadeadifference",
                "file": "U3_L5_AHeroWhoMadeaDifference.html"
            },
            {
                "name": "U3 L6 Teamprojectroundtable",
                "file": "U3_L6_TeamProjectRoundtable.html"
            }
        ],
        "4": [
            {
                "name": "U4 L1 Thinkbeforeyouchoose",
                "file": "U4_L1_ThinkBeforeYouChoose.html"
            },
            {
                "name": "U4 L2 Decisionsandconsequences",
                "file": "U4_L2_DecisionsandConsequences.html"
            },
            {
                "name": "U4 L3 Aninterviewwithanathlete",
                "file": "U4_L3_AnInterviewwithanAthlete.html"
            },
            {
                "name": "U4 L4 Readingawisedecision",
                "file": "U4_L4_ReadingAWiseDecision.html"
            },
            {
                "name": "U4 L5 Askingforandgivingadvice",
                "file": "U4_L5_AskingforandGivingAdvice.html"
            },
            {
                "name": "U4 L6 Teamprojectroundtable",
                "file": "U4_L6_TeamProjectRoundtable.html"
            }
        ],
        "5": [
            {
                "name": "U5 L1 Discoveryourfuture",
                "file": "U5_L1_DiscoverYourFuture.html"
            },
            {
                "name": "U5 L2 Aninterviewwithascientist",
                "file": "U5_L2_AnInterviewwithaScientist.html"
            },
            {
                "name": "U5 L3 Myplanforafuturecareer",
                "file": "U5_L3_MyPlanforaFutureCareer.html"
            },
            {
                "name": "U5 L4 Readingafutureengineer",
                "file": "U5_L4_ReadingAFutureEngineer.html"
            },
            {
                "name": "U5 L5 Mydreamjob",
                "file": "U5_L5_MyDreamJob.html"
            },
            {
                "name": "U5 L6 Teamprojectroundtable",
                "file": "U5_L6_TeamProjectRoundtable.html"
            }
        ],
        "6": [
            {
                "name": "U6 L1 Beingaglobalcitizen",
                "file": "U6_L1_BeingaGlobalCitizen.html"
            },
            {
                "name": "U6 L2 Globalcitizentalk",
                "file": "U6_L2_GlobalCitizenTalk.html"
            },
            {
                "name": "U6 L3 Oceancircle",
                "file": "U6_L3_OceanCircle.html"
            },
            {
                "name": "U6 L4 Readingprotectingtheocean",
                "file": "U6_L4_ReadingProtectingtheOcean.html"
            },
            {
                "name": "U6 L5 Letsmakeadifference",
                "file": "U6_L5_LetsMakeaDifference.html"
            },
            {
                "name": "U6 L6 Teamprojectroundtable",
                "file": "U6_L6_TeamProjectRoundtable.html"
            }
        ]
    },
    "prep-2": {
        "1": [
            {
                "name": "U1 L1 Meetgenalpha",
                "file": "U1_L1_MeetGenAlpha.html"
            },
            {
                "name": "U1 L2 Genalphasdigitallife",
                "file": "U1_L2_GenAlphasDigitalLife.html"
            },
            {
                "name": "U1 L3 Thedigitalbridge",
                "file": "U1_L3_TheDigitalBridge.html"
            },
            {
                "name": "U1 L4 Readingthelittleinventor",
                "file": "U1_L4_ReadingTheLittleInventor.html"
            },
            {
                "name": "U1 L5 Lessons56Expressingidentityonline",
                "file": "U1_L5_Lessons56ExpressingIdentityOnline.html"
            }
        ],
        "2": [
            {
                "name": "U2 L1 Protectingyourprivacyinthedigitalage",
                "file": "U2_L1_ProtectingYourPrivacyintheDigitalAge.html"
            },
            {
                "name": "U2 L2 Stayingsafeonline",
                "file": "U2_L2_StayingSafeOnline.html"
            },
            {
                "name": "U2 L3 Managingyouronlinedata",
                "file": "U2_L3_ManagingYourOnlineData.html"
            },
            {
                "name": "U2 L4 Readingthelittleinventorch2",
                "file": "U2_L4_ReadingTheLittleInventorCh2.html"
            },
            {
                "name": "U2 L5 Lessons56Digitaldetectives",
                "file": "U2_L5_Lessons56DigitalDetectives.html"
            }
        ],
        "3": [
            {
                "name": "U3 L1 Overcomingchallenges",
                "file": "U3_L1_OvercomingChallenges.html"
            },
            {
                "name": "U3 L2 Adviceforfacingchallenges",
                "file": "U3_L2_AdviceforFacingChallenges.html"
            },
            {
                "name": "U3 L3 Facingtrafficchallenges",
                "file": "U3_L3_FacingTrafficChallenges.html"
            },
            {
                "name": "U3 L4 Readingthelittleinventorch3",
                "file": "U3_L4_ReadingTheLittleInventorCh3.html"
            },
            {
                "name": "U3 L5 Lessons56Thepoweroffacingchallenges",
                "file": "U3_L5_Lessons56ThePowerofFacingChallenges.html"
            }
        ],
        "4": [
            {
                "name": "U4 L1 Ajourneythroughart",
                "file": "U4_L1_AJourneyThroughArt.html"
            },
            {
                "name": "U4 L2 Exploringartlistenup",
                "file": "U4_L2_ExploringArtListenUp.html"
            },
            {
                "name": "U4 L3 Biographyofanartist",
                "file": "U4_L3_BiographyofanArtist.html"
            },
            {
                "name": "U4 L4 Readingthehiddenislandch1",
                "file": "U4_L4_ReadingTheHiddenIslandCh1.html"
            },
            {
                "name": "U4 L5 Lessons56Myperformancereview",
                "file": "U4_L5_Lessons56MyPerformanceReview.html"
            }
        ],
        "5": [
            {
                "name": "U5 L1 Haveyoueverexploredtheworld",
                "file": "U5_L1_HaveYouEverExploredtheWorld.html"
            },
            {
                "name": "U5 L2 Atouraroundcairo",
                "file": "U5_L2_ATourAroundCairo.html"
            },
            {
                "name": "U5 L3 Aroundtheworldinfouramazingplaces",
                "file": "U5_L3_AroundtheWorldinFourAmazingPlaces.html"
            },
            {
                "name": "U5 L4 Readingthehiddenislandch2",
                "file": "U5_L4_ReadingTheHiddenIslandCh2.html"
            },
            {
                "name": "U5 L5 Lessons56Comeexplorewithus",
                "file": "U5_L5_Lessons56ComeExplorewithUs.html"
            }
        ],
        "6": [
            {
                "name": "U6 L1 Turningideasintoanimpact",
                "file": "U6_L1_TurningIdeasintoanImpact.html"
            },
            {
                "name": "U6 L2 Inspiringyounginventors",
                "file": "U6_L2_InspiringYoungInventors.html"
            },
            {
                "name": "U6 L3 Amanofimpact",
                "file": "U6_L3_AManofImpact.html"
            },
            {
                "name": "U6 L4 Readingthehiddenislandch3",
                "file": "U6_L4_ReadingTheHiddenIslandCh3.html"
            },
            {
                "name": "U6 L5 Lessons56Ifiwereaninventor",
                "file": "U6_L5_Lessons56IfIWereanInventor.html"
            }
        ]
    },
    "prep-3": {
        "1": [
            {
                "name": "Lesson 1   Beyond My Looks",
                "file": "Lesson_1_-_Beyond_My_Looks.html"
            },
            {
                "name": "Lesson 2   Self Discovery",
                "file": "Lesson_2_-_Self_Discovery.html"
            },
            {
                "name": "Lesson 3   The Mirror Moment",
                "file": "Lesson_3_-_The_Mirror_Moment.html"
            },
            {
                "name": "Lesson 4   Story Time",
                "file": "Lesson_4_-_Story_Time.html"
            },
            {
                "name": "Lesson 56   Lets Talk This Is Me",
                "file": "Lesson_56_-_Lets_Talk_This_Is_Me.html"
            },
            {
                "name": "Unit 1 Review",
                "file": "Unit_1_Review.html"
            },
            {
                "name": "Lesson 1   Beyond My Looks",
                "file": "Lesson_1_-_Beyond_My_Looks.html"
            },
            {
                "name": "Lesson 2   Self Discovery",
                "file": "Lesson_2_-_Self_Discovery.html"
            },
            {
                "name": "Lesson 3   The Mirror Moment",
                "file": "Lesson_3_-_The_Mirror_Moment.html"
            },
            {
                "name": "Lesson 4   Story Time",
                "file": "Lesson_4_-_Story_Time.html"
            },
            {
                "name": "Lesson 56   Lets Talk This Is Me",
                "file": "Lesson_56_-_Lets_Talk_This_Is_Me.html"
            },
            {
                "name": "Unit 1 Review",
                "file": "Unit_1_Review.html"
            }
        ],
        "2": [
            {
                "name": "Lesson 1   Stay Connected",
                "file": "Lesson_1_-_Stay_Connected.html"
            },
            {
                "name": "Lesson 2   Communication Challenges And Solutions",
                "file": "Lesson_2_-_Communication_Challenges_and_Solutions.html"
            },
            {
                "name": "Lesson 3   The Silent Dinner",
                "file": "Lesson_3_-_The_Silent_Dinner.html"
            },
            {
                "name": "Lesson 4   Story Time",
                "file": "Lesson_4_-_Story_Time.html"
            },
            {
                "name": "Lesson 56   Lets Talk Staying Close",
                "file": "Lesson_56_-_Lets_Talk_Staying_close.html"
            },
            {
                "name": "Unit 2 Review",
                "file": "Unit_2_Review.html"
            },
            {
                "name": "Lesson 1   Stay Connected",
                "file": "Lesson_1_-_Stay_Connected.html"
            },
            {
                "name": "Lesson 2   Communication Challenges And Solutions",
                "file": "Lesson_2_-_Communication_Challenges_and_Solutions.html"
            },
            {
                "name": "Lesson 3   The Silent Dinner",
                "file": "Lesson_3_-_The_Silent_Dinner.html"
            },
            {
                "name": "Lesson 4   Story Time",
                "file": "Lesson_4_-_Story_Time.html"
            },
            {
                "name": "Lesson 56   Lets Talk Staying Close",
                "file": "Lesson_56_-_Lets_Talk_Staying_close.html"
            },
            {
                "name": "Unit 2 Review",
                "file": "Unit_2_Review.html"
            }
        ],
        "3": [
            {
                "name": "Lesson 1   Artificial Intelligence",
                "file": "Lesson_1_-_Artificial_Intelligence.html"
            },
            {
                "name": "Lesson 2   A I Technology",
                "file": "Lesson_2_-_A_I_Technology.html"
            },
            {
                "name": "Lesson 3   Robot Teacher",
                "file": "Lesson_3_-_Robot_Teacher.html"
            },
            {
                "name": "Lesson 4   Story Time",
                "file": "Lesson_4_-_Story_Time.html"
            },
            {
                "name": "Lesson 56   Lets Talk Smart Robots",
                "file": "Lesson_56_-_Lets_Talk_Smart_Robots.html"
            },
            {
                "name": "Unit 3 Review",
                "file": "Unit_3_Review.html"
            },
            {
                "name": "Lesson 1   Artificial Intelligence",
                "file": "Lesson_1_-_Artificial_Intelligence.html"
            },
            {
                "name": "Lesson 2   A I Technology",
                "file": "Lesson_2_-_A_I_Technology.html"
            },
            {
                "name": "Lesson 3   Robot Teacher",
                "file": "Lesson_3_-_Robot_Teacher.html"
            },
            {
                "name": "Lesson 4   Story Time",
                "file": "Lesson_4_-_Story_Time.html"
            },
            {
                "name": "Lesson 56   Lets Talk Smart Robots",
                "file": "Lesson_56_-_Lets_Talk_Smart_Robots.html"
            },
            {
                "name": "Unit 3 Review",
                "file": "Unit_3_Review.html"
            }
        ],
        "4": [
            {
                "name": "Lesson 1   Screen Time",
                "file": "Lesson_1_-_Screen_Time.html"
            },
            {
                "name": "Lesson 2   Egypts Smart Future",
                "file": "Lesson_2_-_Egypts_Smart_Future.html"
            },
            {
                "name": "Lesson 3   Balancing Screen Time",
                "file": "Lesson_3_-_Balancing_Screen_Time.html"
            },
            {
                "name": "Lesson 4   Story Time",
                "file": "Lesson_4_-_Story_Time.html"
            },
            {
                "name": "Lesson 5   Lets Talk",
                "file": "Lesson_5_-_Lets_Talk.html"
            },
            {
                "name": "Lesson 6   Small Change",
                "file": "Lesson_6_-_Small_Change.html"
            },
            {
                "name": "Unit 4 Review",
                "file": "Unit_4_Review.html"
            },
            {
                "name": "Lesson 1   Screen Time",
                "file": "Lesson_1_-_Screen_Time.html"
            },
            {
                "name": "Lesson 2   Egypts Smart Future",
                "file": "Lesson_2_-_Egypts_Smart_Future.html"
            },
            {
                "name": "Lesson 3   Balancing Screen Time",
                "file": "Lesson_3_-_Balancing_Screen_Time.html"
            },
            {
                "name": "Lesson 4   Story Time",
                "file": "Lesson_4_-_Story_Time.html"
            },
            {
                "name": "Lesson 5   Lets Talk",
                "file": "Lesson_5_-_Lets_Talk.html"
            },
            {
                "name": "Lesson 6   Small Change",
                "file": "Lesson_6_-_Small_Change.html"
            },
            {
                "name": "Unit 4 Review",
                "file": "Unit_4_Review.html"
            }
        ],
        "5": [
            {
                "name": "Lesson 1   Think Like A Designer",
                "file": "Lesson_1_-_Think_like_a_Designer.html"
            },
            {
                "name": "Lesson 2   Dream It Build It",
                "file": "Lesson_2_-_Dream_It_Build_It.html"
            },
            {
                "name": "Lesson 3   See Through Their Eyes",
                "file": "Lesson_3_-_See_through_Their_Eyes.html"
            },
            {
                "name": "Lesson 4   Story Time",
                "file": "Lesson_4_-_Story_Time.html"
            },
            {
                "name": "Lesson 5   Lets Talk",
                "file": "Lesson_5_-_Lets_Talk.html"
            },
            {
                "name": "Lesson 6   Try Learn And Improve",
                "file": "Lesson_6_-_Try_Learn_and_Improve.html"
            },
            {
                "name": "Unit 5 Review",
                "file": "Unit_5_Review.html"
            },
            {
                "name": "Lesson 1   Think Like A Designer",
                "file": "Lesson_1_-_Think_like_a_Designer.html"
            },
            {
                "name": "Lesson 2   Dream It Build It",
                "file": "Lesson_2_-_Dream_It_Build_It.html"
            },
            {
                "name": "Lesson 3   See Through Their Eyes",
                "file": "Lesson_3_-_See_through_Their_Eyes.html"
            },
            {
                "name": "Lesson 4   Story Time",
                "file": "Lesson_4_-_Story_Time.html"
            },
            {
                "name": "Lesson 5   Lets Talk",
                "file": "Lesson_5_-_Lets_Talk.html"
            },
            {
                "name": "Lesson 6   Try Learn And Improve",
                "file": "Lesson_6_-_Try_Learn_and_Improve.html"
            },
            {
                "name": "Unit 5 Review",
                "file": "Unit_5_Review.html"
            }
        ],
        "6": [
            {
                "name": "Lesson 1   The Power Of Stories",
                "file": "Lesson_1_-_The_Power_of_Stories.html"
            },
            {
                "name": "Lesson 2   The Story That Helped Me",
                "file": "Lesson_2_-_The_Story_That_Helped_Me.html"
            },
            {
                "name": "Lesson 3   Elements Of A Story",
                "file": "Lesson_3_-_Elements_of_a_Story.html"
            },
            {
                "name": "Lesson 4   Story Time",
                "file": "Lesson_4_-_Story_Time.html"
            },
            {
                "name": "Lesson 5   Lets Talk",
                "file": "Lesson_5_-_Lets_Talk.html"
            },
            {
                "name": "Lesson 6   My Own Story",
                "file": "Lesson_6_-_My_Own_Story.html"
            },
            {
                "name": "Unit 6 Review",
                "file": "Unit_6_Review.html"
            },
            {
                "name": "Lesson 1   The Power Of Stories",
                "file": "Lesson_1_-_The_Power_of_Stories.html"
            },
            {
                "name": "Lesson 2   The Story That Helped Me",
                "file": "Lesson_2_-_The_Story_That_Helped_Me.html"
            },
            {
                "name": "Lesson 3   Elements Of A Story",
                "file": "Lesson_3_-_Elements_of_a_Story.html"
            },
            {
                "name": "Lesson 4   Story Time",
                "file": "Lesson_4_-_Story_Time.html"
            },
            {
                "name": "Lesson 5   Lets Talk",
                "file": "Lesson_5_-_Lets_Talk.html"
            },
            {
                "name": "Lesson 6   My Own Story",
                "file": "Lesson_6_-_My_Own_Story.html"
            },
            {
                "name": "Unit 6 Review",
                "file": "Unit_6_Review.html"
            }
        ]
    }
};
