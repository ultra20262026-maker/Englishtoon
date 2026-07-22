/**
 * English Toon — Primary 1 Book Exercise Database
 * أسئلة مقروءة بالظبط من كل صفحة — صور حقيقية مقطوعة من الكتاب
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
                            { scrambled: "ypla",    answer: "play",    img: "images/books/p1/items/p3_play.jpg"    },
                            { scrambled: "fenrsid", answer: "friends", img: "images/books/p1/items/p3_friends.jpg" },
                            { scrambled: "elhol",   answer: "hello",   img: "images/books/p1/items/p3_hello.jpg"   }
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
                            { word: "1. ...omato",  answer: "T", speech: "Tomato",  img: "images/books/p1/items/p4_tomato.jpg"  },
                            { word: "2. ....eacher",answer: "T", speech: "Teacher", img: "images/books/p1/items/p4_teacher.jpg" },
                            { word: "3. ......iger", answer: "T", speech: "Tiger",   img: "images/books/p1/items/p4_tiger.jpg"   },
                            { word: "4. ..........ree", answer: "T", speech: "Tree", img: "images/books/p1/items/p4_tree.jpg"   },
                            { word: "5. ......able",  answer: "T", speech: "Table",  img: "images/books/p1/items/p4_table.jpg"  }
                        ]
                    },
                    {
                        label: "Activity 2 — Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "tcheear", answer: "teacher", img: "images/books/p1/items/p4_teacher.jpg" },
                            { scrambled: "aetlb",   answer: "table",   img: "images/books/p1/items/p4_table.jpg"   },
                            { scrambled: "erte",    answer: "tree",    img: "images/books/p1/items/p4_tree.jpg"    },
                            { scrambled: "ietrg",   answer: "tiger",   img: "images/books/p1/items/p4_tiger.jpg"   },
                            { scrambled: "totoma",  answer: "tomato",  img: "images/books/p1/items/p4_tomato.jpg"  }
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
                            { answer: "tiger",   img: "images/books/p1/items/p4_hw_tiger.jpg",   speech: "Tiger"   },
                            { answer: "tree",    img: "images/books/p1/items/p4_hw_tree.jpg",    speech: "Tree"    },
                            { answer: "table",   img: "images/books/p1/items/p4_hw_table.jpg",   speech: "Table"   },
                            { answer: "tomato",  img: "images/books/p1/items/p4_hw_tomato.jpg",  speech: "Tomato"  },
                            { answer: "teacher", img: "images/books/p1/items/p4_hw_teacher.jpg", speech: "Teacher" }
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
                            { word: "1. ......able",  answer: "T", speech: "Table",  img: "images/books/p1/items/p4_table.jpg" },
                            { word: "2. ..omato",     answer: "T", speech: "Tomato", img: "images/books/p1/items/p4_tomato.jpg" }
                        ]
                    },
                    {
                        label: "B. Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "gtrei", answer: "tiger", img: "images/books/p1/items/p4_tiger.jpg" },
                            { scrambled: "apyl",  answer: "play",  img: "images/books/p1/items/p3_play.jpg"  },
                            { scrambled: "etre",  answer: "tree",  img: "images/books/p1/items/p4_tree.jpg"  }
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
                            { word: "1. ......ree",  answer: "T", speech: "Tree",  img: "images/books/p1/items/p4_tree.jpg"  },
                            { word: "2. ......iger", answer: "T", speech: "Tiger", img: "images/books/p1/items/p4_tiger.jpg" }
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
                            { scrambled: "cerhate", answer: "teacher", img: "images/books/p1/items/p4_teacher.jpg" },
                            { scrambled: "lyap",    answer: "play",    img: "images/books/p1/items/p3_play.jpg"    },
                            { scrambled: "tomaot",  answer: "tomato",  img: "images/books/p1/items/p4_tomato.jpg"  }
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
                            { word: "1. ...eacher", answer: "T", speech: "Teacher", img: "images/books/p1/items/p4_teacher.jpg" },
                            { word: "2. ......ello", answer: "H", speech: "Hello",   img: "images/books/p1/items/p3_hello.jpg"   }
                        ]
                    },
                    {
                        label: "B. Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "rdfsnei", answer: "friends", img: "images/books/p1/items/p3_friends.jpg" },
                            { scrambled: "elhol",   answer: "hello",   img: "images/books/p1/items/p3_hello.jpg"   },
                            { scrambled: "abetl",   answer: "table",   img: "images/books/p1/items/p4_table.jpg"   }
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
                            { label: "1. book  –  pencil",  img: "images/books/p1/items/p7_book.jpg",   options: ["book","pencil"],  answer: "book",   speech: "book"   },
                            { label: "2. chair  –  bag",    img: "images/books/p1/items/p7_bag.jpg",    options: ["chair","bag"],    answer: "bag",    speech: "bag"    },
                            { label: "3. desk  –  pencil",  img: "images/books/p1/items/p7_pencil.jpg", options: ["desk","pencil"],  answer: "pencil", speech: "pencil" },
                            { label: "4. board  –  bag",    img: "images/books/p1/items/p7_board.jpg",  options: ["board","bag"],    answer: "board",  speech: "board"  }
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
                            { answer: "book",   img: "images/books/p1/items/p7_hw_book.jpg",   speech: "Book"   },
                            { answer: "bag",    img: "images/books/p1/items/p7_hw_bag.jpg",    speech: "Bag"    },
                            { answer: "pencil", img: "images/books/p1/items/p7_hw_pencil.jpg", speech: "Pencil" },
                            { answer: "board",  img: "images/books/p1/items/p7_hw_board.jpg",  speech: "Board"  },
                            { answer: "chair",  img: "images/books/p1/items/p7_hw_chair.jpg",  speech: "Chair"  },
                            { answer: "desk",   img: "images/books/p1/items/p7_hw_desk.jpg",   speech: "Desk"   }
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
                            { word: "1. ..........nk",   answer: "I", speech: "Ink",    img: "images/books/p1/items/p8_ink.jpg"    },
                            { word: "2. ..........ll",    answer: "I", speech: "Ill",    img: "images/books/p1/items/p8_ill.jpg"    },
                            { word: "3. ......nsect",    answer: "I", speech: "Insect", img: "images/books/p1/items/p8_insect.jpg" },
                            { word: "4. ......n",         answer: "I", speech: "In",     img: "images/books/p1/items/p8_in.jpg"     }
                        ]
                    },
                    {
                        label: "Activity 2 — Unscramble and write:",
                        type: "unscramble",
                        items: [
                            { scrambled: "nki",    answer: "ink",    img: "images/books/p1/items/p8_ink.jpg"    },
                            { scrambled: "lil",    answer: "ill",    img: "images/books/p1/items/p8_ill.jpg"    },
                            { scrambled: "nestic", answer: "insect", img: "images/books/p1/items/p8_insect.jpg" },
                            { scrambled: "ni",     answer: "in",     img: "images/books/p1/items/p8_in.jpg"     }
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
                            { answer: "ink",    img: "images/books/p1/items/p8_hw_ink.jpg",    speech: "Ink"    },
                            { answer: "ill",    img: "images/books/p1/items/p8_hw_ill.jpg",    speech: "Ill"    },
                            { answer: "insect", img: "images/books/p1/items/p8_hw_insect.jpg", speech: "Insect" },
                            { answer: "in",     img: "images/books/p1/items/p8_hw_in.jpg",     speech: "In"     }
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
                            { scrambled: "kesd", answer: "desk", img: "images/books/p1/items/p9_desk.jpg" },
                            { scrambled: "kobo", answer: "book", img: "images/books/p1/items/p9_book.jpg" },
                            { scrambled: "agb",  answer: "bag",  img: "images/books/p1/items/p9_bag.jpg"  }
                        ]
                    },
                    {
                        label: "B. Look and write:",
                        type: "look_write",
                        items: [
                            { answer: "ink",    img: "images/books/p1/items/p9_ink.jpg",    speech: "Ink"    },
                            { answer: "insect", img: "images/books/p1/items/p9_insect.jpg", speech: "Insect" }
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
                            { scrambled: "ircah",    answer: "chair",    img: "images/books/p1/items/p9_chair.jpg"   },
                            { scrambled: "eclpni",   answer: "pencil",   img: "images/books/p1/items/p9_pencil.jpg"  },
                            { scrambled: "tsi wnod", answer: "sit down", img: "images/books/p1/items/p9_sitdown.jpg" }
                        ]
                    },
                    {
                        label: "B. Look and write:",
                        type: "look_write",
                        items: [
                            { answer: "ill", img: "images/books/p1/items/p9_ill.jpg", speech: "Ill" },
                            { answer: "in",  img: "images/books/p1/items/p9_in.jpg",  speech: "In"  }
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
                            { scrambled: "odrab",    answer: "board",    img: "images/books/p1/items/p10_board.jpg"   },
                            { scrambled: "tadsn pu", answer: "stand up", img: "images/books/p1/items/p10_standup.jpg" },
                            { scrambled: "nestic",   answer: "insect",   img: "images/books/p1/items/p10_insect.jpg"  }
                        ]
                    },
                    {
                        label: "B. Look and write:",
                        type: "look_write",
                        items: [
                            { answer: "ill",    img: "images/books/p1/items/p10_ill.jpg",     speech: "Ill"    },
                            { answer: "insect", img: "images/books/p1/items/p10_insect2.jpg", speech: "Insect" }
                        ]
                    }
                ]
            }
        ]
    }
};
