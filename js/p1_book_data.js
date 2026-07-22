/**
 * English Toon — Primary 1 Book Exercise Database
 * أسئلة مقروءة بالظبط من كل صفحة كتاب الصف الأول الابتدائي
 * Each page entry has: unit, lesson, sections[]
 * Each section has: title, type, items[]
 */

const P1_EXERCISES_DATABASE = {

    // ═══════════════════════════════════════════
    // PAGE 3 — Unit 1 / Lesson 1 / Greetings
    // ═══════════════════════════════════════════
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
                            { scrambled: "ypla",    answer: "play",    emoji: "⚽" },
                            { scrambled: "fenrsid", answer: "friends", emoji: "👫" },
                            { scrambled: "elhol",   answer: "hello",   emoji: "👋" }
                        ]
                    },
                    {
                        label: "Activity 2 — Reorder the words to make sentences:",
                        type: "reorder",
                        items: [
                            { words: "your - What's - name?",    answer: "What's your name?",  underline: "What's" },
                            { words: "name - Hana. - My- is",    answer: "My name is Hana.",   underline: "My" }
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
                            { prompt: "My name is ………………………………", answer: "" }
                        ]
                    }
                ]
            }
        ]
    },

    // ═══════════════════════════════════════════
    // PAGE 4 — Unit 1 / Lesson 2 / Phonics
    // ═══════════════════════════════════════════
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
                            { word: "...omato",  answer: "T",  speech: "Tomato",  emoji: "🍅" },
                            { word: "....eacher",answer: "T",  speech: "Teacher", emoji: "👩‍🏫" },
                            { word: "......iger", answer: "T",  speech: "Tiger",   emoji: "🐯" },
                            { word: "..........ree", answer: "T", speech: "Tree", emoji: "🌳" },
                            { word: "......able",  answer: "T",  speech: "Table",  emoji: "🪑" }
                        ]
                    },
                    {
                        label: "Activity 2 — Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "tcheear", answer: "teacher", emoji: "👩‍🏫" },
                            { scrambled: "aetlb",   answer: "table",   emoji: "🪑" },
                            { scrambled: "erte",    answer: "tree",    emoji: "🌳" },
                            { scrambled: "ietrg",   answer: "tiger",   emoji: "🐯" },
                            { scrambled: "totoma",  answer: "tomato",  emoji: "🍅" }
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
                            { speech: "Tiger",   emoji: "🐯", answer: "tiger"   },
                            { speech: "Tree",    emoji: "🌳", answer: "tree"    },
                            { speech: "Table",   emoji: "🪑", answer: "table"   },
                            { speech: "Tomato",  emoji: "🍅", answer: "tomato"  },
                            { speech: "Teacher", emoji: "👩‍🏫", answer: "teacher" }
                        ]
                    }
                ]
            }
        ]
    },

    // ═══════════════════════════════════════════
    // PAGE 5 — Weekly Assessment (A) & (B)
    // ═══════════════════════════════════════════
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
                            { word: "......able",  answer: "T", speech: "Table",  emoji: "🪑" },
                            { word: "..omato",     answer: "T", speech: "Tomato", emoji: "🍅" }
                        ]
                    },
                    {
                        label: "B. Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "gtrei", answer: "tiger", emoji: "🐯" },
                            { scrambled: "apyl",  answer: "play",  emoji: "⚽" },
                            { scrambled: "etre",  answer: "tree",  emoji: "🌳" }
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
                            { word: "......ree",  answer: "T", speech: "Tree",  emoji: "🌳" },
                            { word: "......iger", answer: "T", speech: "Tiger", emoji: "🐯" }
                        ]
                    }
                ]
            }
        ]
    },

    // ═══════════════════════════════════════════
    // PAGE 6 — Weekly Assessment (B cont.) & (C)
    // ═══════════════════════════════════════════
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
                            { scrambled: "cerhate", answer: "teacher", emoji: "👩‍🏫" },
                            { scrambled: "lyap",    answer: "play",    emoji: "⚽" },
                            { scrambled: "tomaot",  answer: "tomato",  emoji: "🍅" }
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
                            { word: "...eacher", answer: "T", speech: "Teacher", emoji: "👩‍🏫" },
                            { word: "......ello", answer: "H", speech: "Hello",   emoji: "👋" }
                        ]
                    },
                    {
                        label: "B. Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "rdfsnei", answer: "friends", emoji: "👫" },
                            { scrambled: "elhol",   answer: "hello",   emoji: "👋" },
                            { scrambled: "abetl",   answer: "table",   emoji: "🪑" }
                        ]
                    }
                ]
            }
        ]
    },

    // ═══════════════════════════════════════════
    // PAGE 7 — Lesson 3 / Around my Classroom
    // ═══════════════════════════════════════════
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
                            { label: "1. 📚 (book / pencil)", options: ["book", "pencil"], answer: "book",   speech: "book"   },
                            { label: "2. 🎒 (chair / bag)",   options: ["chair", "bag"],   answer: "bag",    speech: "bag"    },
                            { label: "3. ✏️ (desk / pencil)", options: ["desk", "pencil"], answer: "pencil", speech: "pencil" },
                            { label: "4. 🪑 (board / bag)",   options: ["board", "bag"],   answer: "board",  speech: "board"  }
                        ]
                    },
                    {
                        label: "Activity 2 — Look, read, and complete: (books / up / down)",
                        type: "choose_from_box",
                        box: ["books", "up", "down"],
                        items: [
                            { prompt: "1- Sit …………",   answer: "down", speech: "Sit down." },
                            { prompt: "2- Stand ………",  answer: "up",   speech: "Stand up."  },
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
                            { speech: "Book",   emoji: "📚", answer: "book"   },
                            { speech: "Bag",    emoji: "🎒", answer: "bag"    },
                            { speech: "Pencil", emoji: "✏️", answer: "pencil" },
                            { speech: "Board",  emoji: "🪑", answer: "board"  },
                            { speech: "Chair",  emoji: "🪑", answer: "chair"  },
                            { speech: "Desk",   emoji: "🗂️", answer: "desk"   }
                        ]
                    }
                ]
            }
        ]
    },

    // ═══════════════════════════════════════════
    // PAGE 8 — Lesson 4 / Phonics (ink, ill, insect, in)
    // ═══════════════════════════════════════════
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
                            { word: "..........nk",   answer: "I",  speech: "Ink",    emoji: "🖊️" },
                            { word: "..........ll",    answer: "I",  speech: "Ill",    emoji: "🤒" },
                            { word: "......nsect",    answer: "I",  speech: "Insect", emoji: "🐞" },
                            { word: "......n",         answer: "I",  speech: "In",     emoji: "📦" }
                        ]
                    },
                    {
                        label: "Activity 2 — Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "nki",    answer: "ink",    emoji: "🖊️" },
                            { scrambled: "lil",    answer: "ill",    emoji: "🤒" },
                            { scrambled: "nestic", answer: "insect", emoji: "🐞" },
                            { scrambled: "ni",     answer: "in",     emoji: "📦" }
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
                            { speech: "Ink",    emoji: "🖊️", answer: "ink"    },
                            { speech: "Ill",    emoji: "🤒", answer: "ill"    },
                            { speech: "Insect", emoji: "🐞", answer: "insect" },
                            { speech: "In",     emoji: "📦", answer: "in"     }
                        ]
                    }
                ]
            }
        ]
    },

    // ═══════════════════════════════════════════
    // PAGE 9 — Weekly Assessment (A) & (B)
    // ═══════════════════════════════════════════
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
                            { scrambled: "kesd", answer: "desk", emoji: "🗂️" },
                            { scrambled: "kobo", answer: "book", emoji: "📚" },
                            { scrambled: "agb",  answer: "bag",  emoji: "🎒" }
                        ]
                    },
                    {
                        label: "B. Look and write:",
                        type: "look_write",
                        items: [
                            { speech: "Ink",    emoji: "🖊️", answer: "ink"    },
                            { speech: "Insect", emoji: "🐞", answer: "insect" }
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
                            { scrambled: "ircah",    answer: "chair",   emoji: "🪑" },
                            { scrambled: "eclpni",   answer: "pencil",  emoji: "✏️" },
                            { scrambled: "tsi wnod", answer: "sit down", emoji: "🧑‍🎓" }
                        ]
                    },
                    {
                        label: "B. Look and write:",
                        type: "look_write",
                        items: [
                            { speech: "Ill", emoji: "🤒", answer: "ill" },
                            { speech: "In",  emoji: "📦", answer: "in"  }
                        ]
                    }
                ]
            }
        ]
    },

    // ═══════════════════════════════════════════
    // PAGE 10 — Weekly Assessment (C)
    // ═══════════════════════════════════════════
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
                            { scrambled: "odrab",   answer: "board",    emoji: "🪑" },
                            { scrambled: "tadsn pu",answer: "stand up", emoji: "🧍" },
                            { scrambled: "nestic",  answer: "insect",   emoji: "🐞" }
                        ]
                    },
                    {
                        label: "B. Look and write:",
                        type: "look_write",
                        items: [
                            { speech: "Ill",    emoji: "🤒", answer: "ill"    },
                            { speech: "Insect", emoji: "🐞", answer: "insect" }
                        ]
                    }
                ]
            }
        ]
    }
};
