/**
 * English Toon — Primary 1 Book Exercise Database
 * الصفحات من 1 إلى 10 كاملة ومطابقة 100% لصفحات الكتاب
 */

const P1_EXERCISES_DATABASE = {

    // ══════════════════════════════════════════
    // PAGE 1 — Cover Page / غلاف الكتاب
    // ══════════════════════════════════════════
    1: {
        unit: "Primary (1) First Term",
        lesson: "English Language — Performance Tasks & Assessments",
        sections: [
            {
                title: "🎒 بيانات الطالب / Student Information",
                activities: [
                    {
                        label: "Please fill in your details / اكتب بياناتك:",
                        type: "freewrite",
                        items: [
                            { prompt: "Name / الاسم: …………………………………………", answer: "__free__" },
                            { prompt: "Class / الفصل: …………………………………………", answer: "__free__" },
                            { prompt: "School / المدرسة: ………………………………………", answer: "__free__" }
                        ]
                    }
                ]
            }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 2 — Introduction / المقدمة
    // ══════════════════════════════════════════
    2: {
        unit: "Introduction",
        lesson: "Book Introduction — مقدمة الكتاب الوزاري",
        sections: [
            {
                title: "📖 Introduction Summary",
                activities: [
                    {
                        label: "Welcome to Primary 1 English Performance Tasks & Assessments!",
                        type: "freewrite",
                        items: [
                            { prompt: "This interactive book helps you practice all lessons, assessments, and tasks with instant grading! Enjoy learning English! ✨", answer: "__free__" }
                        ]
                    }
                ]
            }
        ]
    },

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
                            { scrambled: "ypla",    answer: "play",    emoji: "⚽", speech: "play" },
                            { scrambled: "fenrsid", answer: "friends", emoji: "👫", speech: "friends" },
                            { scrambled: "elhol",   answer: "hello",   emoji: "👋", speech: "hello" }
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
                            { word: "1. ...omato",  answer: "T", speech: "Tomato",  emoji: "🍅" },
                            { word: "2. ....eacher",answer: "T", speech: "Teacher", emoji: "👩‍🏫" },
                            { word: "3. ......iger", answer: "T", speech: "Tiger",   emoji: "🐯" },
                            { word: "4. ..........ree", answer: "T", speech: "Tree", emoji: "🌳" },
                            { word: "5. ......able",  answer: "T", speech: "Table",  emoji: "🪑" }
                        ]
                    },
                    {
                        label: "Activity 2 — Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "tcheear", answer: "teacher", emoji: "👩‍🏫", speech: "teacher" },
                            { scrambled: "aetlb",   answer: "table",   emoji: "🪑", speech: "table"   },
                            { scrambled: "erte",    answer: "tree",    emoji: "🌳", speech: "tree"    },
                            { scrambled: "ietrg",   answer: "tiger",   emoji: "🐯", speech: "tiger"   },
                            { scrambled: "totoma",  answer: "tomato",  emoji: "🍅", speech: "tomato"  }
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
                            { answer: "tiger",   emoji: "🐯", speech: "Tiger"   },
                            { answer: "tree",    emoji: "🌳", speech: "Tree"    },
                            { answer: "table",   emoji: "🪑", speech: "Table"   },
                            { answer: "tomato",  emoji: "🍅", speech: "Tomato"  },
                            { answer: "teacher", emoji: "👩‍🏫", speech: "Teacher" }
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
                            { word: "1. ......able",  answer: "T", speech: "Table",  emoji: "🪑" },
                            { word: "2. ..omato",     answer: "T", speech: "Tomato", emoji: "🍅" }
                        ]
                    },
                    {
                        label: "B. Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "gtrei", answer: "tiger", emoji: "🐯", speech: "tiger" },
                            { scrambled: "apyl",  answer: "play",  emoji: "⚽", speech: "play"  },
                            { scrambled: "etre",  answer: "tree",  emoji: "🌳", speech: "tree"  }
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
                            { word: "1. ......ree",  answer: "T", speech: "Tree",  emoji: "🌳" },
                            { word: "2. ......iger", answer: "T", speech: "Tiger", emoji: "🐯" }
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
                            { scrambled: "cerhate", answer: "teacher", emoji: "👩‍🏫", speech: "teacher" },
                            { scrambled: "lyap",    answer: "play",    emoji: "⚽", speech: "play"    },
                            { scrambled: "tomaot",  answer: "tomato",  emoji: "🍅", speech: "tomato"  }
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
                            { word: "1. ...eacher", answer: "T", speech: "Teacher", emoji: "👩‍🏫" },
                            { word: "2. ......ello", answer: "H", speech: "Hello",   emoji: "👋"   }
                        ]
                    },
                    {
                        label: "B. Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "rdfsnei", answer: "friends", emoji: "👫", speech: "friends" },
                            { scrambled: "elhol",   answer: "hello",   emoji: "👋", speech: "hello"   },
                            { scrambled: "abetl",   answer: "table",   emoji: "🪑", speech: "table"   }
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
                            { label: "1. book  –  pencil",  emoji: "📚", options: ["book","pencil"],  answer: "book",   speech: "book"   },
                            { label: "2. chair  –  bag",    emoji: "🎒", options: ["chair","bag"],    answer: "bag",    speech: "bag"    },
                            { label: "3. desk  –  pencil",  emoji: "✏️", options: ["desk","pencil"],  answer: "pencil", speech: "pencil" },
                            { label: "4. board  –  bag",    emoji: "🪑", options: ["board","bag"],    answer: "board",  speech: "board"  }
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
                            { answer: "book",   emoji: "📚", speech: "Book"   },
                            { answer: "bag",    emoji: "🎒", speech: "Bag"    },
                            { answer: "pencil", emoji: "✏️", speech: "Pencil" },
                            { answer: "board",  emoji: "🪑", speech: "Board"  },
                            { answer: "chair",  emoji: "🪑", speech: "Chair"  },
                            { answer: "desk",   emoji: "🗂️", speech: "Desk"   }
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
                            { word: "1. ..........nk",   answer: "I", speech: "Ink",    emoji: "🖊️" },
                            { word: "2. ..........ll",    answer: "I", speech: "Ill",    emoji: "🤒" },
                            { word: "3. ......nsect",    answer: "I", speech: "Insect", emoji: "🐞" },
                            { word: "4. ......n",         answer: "I", speech: "In",     emoji: "📦" }
                        ]
                    },
                    {
                        label: "Activity 2 — Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "nki",    answer: "ink",    emoji: "🖊️", speech: "ink"    },
                            { scrambled: "lil",    answer: "ill",    emoji: "🤒", speech: "ill"    },
                            { scrambled: "nestic", answer: "insect", emoji: "🐞", speech: "insect" },
                            { scrambled: "ni",     answer: "in",     emoji: "📦", speech: "in"     }
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
                            { answer: "ink",    emoji: "🖊️", speech: "Ink"    },
                            { answer: "ill",    emoji: "🤒", speech: "Ill"    },
                            { answer: "insect", emoji: "🐞", speech: "Insect" },
                            { answer: "in",     emoji: "📦", speech: "In"     }
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
                            { scrambled: "kesd", answer: "desk", emoji: "🗂️", speech: "desk" },
                            { scrambled: "kobo", answer: "book", emoji: "📚", speech: "book" },
                            { scrambled: "agb",  answer: "bag",  emoji: "🎒", speech: "bag"  }
                        ]
                    },
                    {
                        label: "B. Look and write:",
                        type: "look_write",
                        items: [
                            { answer: "ink",    emoji: "🖊️", speech: "Ink"    },
                            { answer: "insect", emoji: "🐞", speech: "Insect" }
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
                            { scrambled: "ircah",    answer: "chair",    emoji: "🪑", speech: "chair" },
                            { scrambled: "eclpni",   answer: "pencil",   emoji: "✏️", speech: "pencil" },
                            { scrambled: "tsi wnod", answer: "sit down", emoji: "🧑‍🎓", speech: "sit down" }
                        ]
                    },
                    {
                        label: "B. Look and write:",
                        type: "look_write",
                        items: [
                            { answer: "ill", emoji: "🤒", speech: "Ill" },
                            { answer: "in",  emoji: "📦", speech: "In"  }
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
                            { scrambled: "odrab",    answer: "board",    emoji: "🪑", speech: "board" },
                            { scrambled: "tadsn pu", answer: "stand up", emoji: "🧍", speech: "stand up" },
                            { scrambled: "nestic",   answer: "insect",   emoji: "🐞", speech: "insect" }
                        ]
                    },
                    {
                        label: "B. Look and write:",
                        type: "look_write",
                        items: [
                            { answer: "ill",    emoji: "🤒", speech: "Ill" },
                            { answer: "insect", emoji: "🐞", speech: "Insect" }
                        ]
                    }
                ]
            }
        ]
    }
};
