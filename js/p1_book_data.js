/**
 * English Toon — Primary 1 Book Exercise Database
 * أسئلة مقروءة بالظبط من كل صفحة — صور عالية الجودة مصممة للموبايل والكمبيوتر
 */

const P1_EXERCISES_DATABASE = {

    // ══════════════════════════════════════════
    // PAGE 3 — Unit 1 / Lesson 1 / Greetings
    // ══════════════════════════════════════════
    3: {
        unit: "Unit 1: Welcome to My School",
        lesson: "Lesson 1 — Greetings",
        sections: [
            {
                title: "🏫 Classroom Performance",
                activities: [
                    {
                        label: "Activity 1 — Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "ypla",    answer: "play",    img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=300&auto=format&fit=crop&q=80", speech: "play" },
                            { scrambled: "fenrsid", answer: "friends", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&auto=format&fit=crop&q=80", speech: "friends" },
                            { scrambled: "elhol",   answer: "hello",   img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80", speech: "hello" }
                        ]
                    },
                    {
                        label: "Activity 2 — Reorder the words to make sentences:",
                        type: "reorder",
                        items: [
                            { words: "your  –  What's  –  name?",   answer: "What's your name?",  hint: "What's" },
                            { words: "name  –  Hana.  –  My-  is",  answer: "My name is Hana.",   hint: "My"     }
                        ]
                    }
                ]
            },
            {
                title: "📝 Homework Activity",
                activities: [
                    {
                        label: "Read and complete about yourself:",
                        type: "freewrite",
                        items: [
                            { prompt: "My name is ……………………………………" }
                        ]
                    }
                ]
            }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 4 — Unit 1 / Lesson 2 / Phonics (T)
    // ══════════════════════════════════════════
    4: {
        unit: "Unit 1: Welcome to My School",
        lesson: "Lesson 2 — Phonics",
        sections: [
            {
                title: "🏫 Classroom Performance",
                activities: [
                    {
                        label: "Activity 1 — Write the missing sound:",
                        type: "missing_sound",
                        items: [
                            { word: "1. ...omato",  answer: "T", speech: "Tomato",  img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&auto=format&fit=crop&q=80" },
                            { word: "2. ....eacher",answer: "T", speech: "Teacher", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&auto=format&fit=crop&q=80" },
                            { word: "3. ......iger", answer: "T", speech: "Tiger",   img: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=300&auto=format&fit=crop&q=80" },
                            { word: "4. ..........ree", answer: "T", speech: "Tree", img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=300&auto=format&fit=crop&q=80" },
                            { word: "5. ......able",  answer: "T", speech: "Table",  img: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=300&auto=format&fit=crop&q=80" }
                        ]
                    },
                    {
                        label: "Activity 2 — Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "tcheear", answer: "teacher", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&auto=format&fit=crop&q=80", speech: "teacher" },
                            { scrambled: "aetlb",   answer: "table",   img: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=300&auto=format&fit=crop&q=80", speech: "table"   },
                            { scrambled: "erte",    answer: "tree",    img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=300&auto=format&fit=crop&q=80", speech: "tree"    },
                            { scrambled: "ietrg",   answer: "tiger",   img: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=300&auto=format&fit=crop&q=80", speech: "tiger"   },
                            { scrambled: "totoma",  answer: "tomato",  img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&auto=format&fit=crop&q=80", speech: "tomato"  }
                        ]
                    }
                ]
            },
            {
                title: "📝 Homework Activity",
                activities: [
                    {
                        label: "Look and Write:",
                        type: "look_write",
                        items: [
                            { answer: "tiger",   img: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=300&auto=format&fit=crop&q=80", speech: "Tiger"   },
                            { answer: "tree",    img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=300&auto=format&fit=crop&q=80", speech: "Tree"    },
                            { answer: "table",   img: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=300&auto=format&fit=crop&q=80", speech: "Table"   },
                            { answer: "tomato",  img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&auto=format&fit=crop&q=80", speech: "Tomato"  },
                            { answer: "teacher", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&auto=format&fit=crop&q=80", speech: "Teacher" }
                        ]
                    }
                ]
            }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 5 — Weekly Assessment (A) & (B)
    // ══════════════════════════════════════════
    5: {
        unit: "Unit 1: Welcome to My School",
        lesson: "Weekly Assessment (A) & (B)",
        sections: [
            {
                title: "📋 Weekly Assessment (A)",
                activities: [
                    {
                        label: "A. Write the first letter:",
                        type: "missing_sound",
                        items: [
                            { word: "1. ......able",  answer: "T", speech: "Table",  img: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=300&auto=format&fit=crop&q=80" },
                            { word: "2. ..omato",     answer: "T", speech: "Tomato", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&auto=format&fit=crop&q=80" }
                        ]
                    },
                    {
                        label: "B. Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "gtrei", answer: "tiger", img: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=300&auto=format&fit=crop&q=80", speech: "tiger" },
                            { scrambled: "apyl",  answer: "play",  img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=300&auto=format&fit=crop&q=80", speech: "play" },
                            { scrambled: "etre",  answer: "tree",  img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=300&auto=format&fit=crop&q=80", speech: "tree" }
                        ]
                    }
                ]
            },
            {
                title: "📋 Weekly Assessment (B)",
                activities: [
                    {
                        label: "A. Write the first letter:",
                        type: "missing_sound",
                        items: [
                            { word: "1. ......ree",  answer: "T", speech: "Tree",  img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=300&auto=format&fit=crop&q=80" },
                            { word: "2. ......iger", answer: "T", speech: "Tiger", img: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=300&auto=format&fit=crop&q=80" }
                        ]
                    }
                ]
            }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 6 — Weekly Assessment (B cont.) & (C)
    // ══════════════════════════════════════════
    6: {
        unit: "Unit 1: Welcome to My School",
        lesson: "Weekly Assessment (B continued) & (C)",
        sections: [
            {
                title: "📋 Weekly Assessment (B) — continued",
                activities: [
                    {
                        label: "B. Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "cerhate", answer: "teacher", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&auto=format&fit=crop&q=80", speech: "teacher" },
                            { scrambled: "lyap",    answer: "play",    img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=300&auto=format&fit=crop&q=80", speech: "play" },
                            { scrambled: "tomaot",  answer: "tomato",  img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&auto=format&fit=crop&q=80", speech: "tomato" }
                        ]
                    }
                ]
            },
            {
                title: "📋 Weekly Assessment (C)",
                activities: [
                    {
                        label: "A. Write the first letter:",
                        type: "missing_sound",
                        items: [
                            { word: "1. ...eacher", answer: "T", speech: "Teacher", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&auto=format&fit=crop&q=80" },
                            { word: "2. ......ello", answer: "H", speech: "Hello",   img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80" }
                        ]
                    },
                    {
                        label: "B. Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "rdfsnei", answer: "friends", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&auto=format&fit=crop&q=80", speech: "friends" },
                            { scrambled: "elhol",   answer: "hello",   img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80", speech: "hello" },
                            { scrambled: "abetl",   answer: "table",   img: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=300&auto=format&fit=crop&q=80", speech: "table" }
                        ]
                    }
                ]
            }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 7 — Lesson 3 / Around my Classroom
    // ══════════════════════════════════════════
    7: {
        unit: "Unit 1: Welcome to My School",
        lesson: "Lesson 3 — Around my Classroom",
        sections: [
            {
                title: "🏫 Classroom Performance",
                activities: [
                    {
                        label: "Activity 1 — Look, read, and circle the correct word:",
                        type: "mcq",
                        items: [
                            { label: "1. book  –  pencil",  img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=80",   options: ["book","pencil"],  answer: "book",   speech: "book"   },
                            { label: "2. chair  –  bag",    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&auto=format&fit=crop&q=80",    options: ["chair","bag"],    answer: "bag",    speech: "bag"    },
                            { label: "3. desk  –  pencil",  img: "https://images.unsplash.com/photo-1585336261026-875a60a1c96b?w=300&auto=format&fit=crop&q=80", options: ["desk","pencil"],  answer: "pencil", speech: "pencil" },
                            { label: "4. board  –  bag",    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&auto=format&fit=crop&q=80",  options: ["board","bag"],    answer: "board",  speech: "board"  }
                        ]
                    },
                    {
                        label: "Activity 2 — Look, read, and complete: ( books  /  up  /  down )",
                        type: "choose_from_box",
                        box: ["books","up","down"],
                        items: [
                            { prompt: "1- Sit …………", answer: "down", speech: "Sit down." },
                            { prompt: "2- Stand ………", answer: "up",   speech: "Stand up."  },
                            { prompt: "3- Open your …………", answer: "books", speech: "Open your books." }
                        ]
                    }
                ]
            },
            {
                title: "📝 Homework Activity",
                activities: [
                    {
                        label: "Look and write:",
                        type: "look_write",
                        items: [
                            { answer: "book",   img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=80",   speech: "Book"   },
                            { answer: "bag",    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&auto=format&fit=crop&q=80",    speech: "Bag"    },
                            { answer: "pencil", img: "https://images.unsplash.com/photo-1585336261026-875a60a1c96b?w=300&auto=format&fit=crop&q=80", speech: "Pencil" },
                            { answer: "board",  img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&auto=format&fit=crop&q=80",  speech: "Board"  },
                            { answer: "chair",  img: "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?w=300&auto=format&fit=crop&q=80",  speech: "Chair"  },
                            { answer: "desk",   img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&auto=format&fit=crop&q=80",   speech: "Desk"   }
                        ]
                    }
                ]
            }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 8 — Lesson 4 / Phonics (I)
    // ══════════════════════════════════════════
    8: {
        unit: "Unit 1: Welcome to My School",
        lesson: "Lesson 4 — Phonics",
        sections: [
            {
                title: "🏫 Classroom Performance",
                activities: [
                    {
                        label: "Activity 1 — Write the first letter:",
                        type: "missing_sound",
                        items: [
                            { word: "1. ..........nk",   answer: "I", speech: "Ink",    img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=300&auto=format&fit=crop&q=80" },
                            { word: "2. ..........ll",    answer: "I", speech: "Ill",    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=300&auto=format&fit=crop&q=80" },
                            { word: "3. ......nsect",    answer: "I", speech: "Insect", img: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=300&auto=format&fit=crop&q=80" },
                            { word: "4. ......n",         answer: "I", speech: "In",     img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&auto=format&fit=crop&q=80" }
                        ]
                    },
                    {
                        label: "Activity 2 — Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "nki",    answer: "ink",    img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=300&auto=format&fit=crop&q=80", speech: "ink" },
                            { scrambled: "lil",    answer: "ill",    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=300&auto=format&fit=crop&q=80", speech: "ill" },
                            { scrambled: "nestic", answer: "insect", img: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=300&auto=format&fit=crop&q=80", speech: "insect" },
                            { scrambled: "ni",     answer: "in",     img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&auto=format&fit=crop&q=80", speech: "in" }
                        ]
                    }
                ]
            },
            {
                title: "📝 Homework Activity",
                activities: [
                    {
                        label: "Look and write:",
                        type: "look_write",
                        items: [
                            { answer: "ink",    img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=300&auto=format&fit=crop&q=80",    speech: "Ink"    },
                            { answer: "ill",    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=300&auto=format&fit=crop&q=80",    speech: "Ill"    },
                            { answer: "insect", img: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=300&auto=format&fit=crop&q=80", speech: "Insect" },
                            { answer: "in",     img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&auto=format&fit=crop&q=80",     speech: "In"     }
                        ]
                    }
                ]
            }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 9 — Weekly Assessment (A) & (B)
    // ══════════════════════════════════════════
    9: {
        unit: "Unit 1: Welcome to My School",
        lesson: "Weekly Assessment (A) & (B)",
        sections: [
            {
                title: "📋 Weekly Assessment (A)",
                activities: [
                    {
                        label: "A. Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "kesd", answer: "desk", img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&auto=format&fit=crop&q=80", speech: "desk" },
                            { scrambled: "kobo", answer: "book", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=80", speech: "book" },
                            { scrambled: "agb",  answer: "bag",  img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&auto=format&fit=crop&q=80", speech: "bag" }
                        ]
                    },
                    {
                        label: "B. Look and write:",
                        type: "look_write",
                        items: [
                            { answer: "ink",    img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=300&auto=format&fit=crop&q=80",    speech: "Ink"    },
                            { answer: "insect", img: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=300&auto=format&fit=crop&q=80", speech: "Insect" }
                        ]
                    }
                ]
            },
            {
                title: "📋 Weekly Assessment (B)",
                activities: [
                    {
                        label: "A. Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "ircah",    answer: "chair",    img: "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?w=300&auto=format&fit=crop&q=80", speech: "chair" },
                            { scrambled: "eclpni",   answer: "pencil",   img: "https://images.unsplash.com/photo-1585336261026-875a60a1c96b?w=300&auto=format&fit=crop&q=80", speech: "pencil" },
                            { scrambled: "tsi wnod", answer: "sit down", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&auto=format&fit=crop&q=80", speech: "sit down" }
                        ]
                    },
                    {
                        label: "B. Look and write:",
                        type: "look_write",
                        items: [
                            { answer: "ill", img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=300&auto=format&fit=crop&q=80", speech: "Ill" },
                            { answer: "in",  img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&auto=format&fit=crop&q=80", speech: "In"  }
                        ]
                    }
                ]
            }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 10 — Weekly Assessment (C)
    // ══════════════════════════════════════════
    10: {
        unit: "Unit 1: Welcome to My School",
        lesson: "Weekly Assessment (C)",
        sections: [
            {
                title: "📋 Weekly Assessment (C)",
                activities: [
                    {
                        label: "A. Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "odrab",    answer: "board",    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&auto=format&fit=crop&q=80", speech: "board" },
                            { scrambled: "tadsn pu", answer: "stand up", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&auto=format&fit=crop&q=80", speech: "stand up" },
                            { scrambled: "nestic",   answer: "insect",   img: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=300&auto=format&fit=crop&q=80", speech: "insect" }
                        ]
                    },
                    {
                        label: "B. Look and write:",
                        type: "look_write",
                        items: [
                            { answer: "ill",    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=300&auto=format&fit=crop&q=80", speech: "Ill" },
                            { answer: "insect", img: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=300&auto=format&fit=crop&q=80", speech: "Insect" }
                        ]
                    }
                ]
            }
        ]
    }
};
