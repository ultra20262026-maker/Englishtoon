/**
 * English Toon — Primary 1 Book Overlay Coordinates Database (Pages 1 to 10)
 * مربعات مدخلات دقيقة جداً فوق النقط فقط (مربع الحرف الأول يغطي النقط فقط ويبقي الكلمة واضحة)
 */

const P1_OVERLAY_DATABASE = {

    // ══════════════════════════════════════════
    // PAGE 1 — Cover / بيانات الطالب
    // ══════════════════════════════════════════
    1: {
        pageImg: "images/books/p1/1.jpg",
        title: "Primary (1) First Term — Cover Page",
        inputs: [
            { id: "p1_name",   top: "84.2%", left: "26.0%", width: "52.0%", height: "2.8%", answer: "__free__", placeholder: "اكتب اسمك هنا..." },
            { id: "p1_class",  top: "87.8%", left: "26.0%", width: "52.0%", height: "2.8%", answer: "__free__", placeholder: "اكتب فصلك..." },
            { id: "p1_school", top: "91.4%", left: "26.0%", width: "52.0%", height: "2.8%", answer: "__free__", placeholder: "اكتب مدرستك..." }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 2 — Introduction / المقدمة
    // ══════════════════════════════════════════
    2: {
        pageImg: "images/books/p1/2.jpg",
        title: "Book Introduction — المقدمة",
        inputs: []
    },

    // ══════════════════════════════════════════
    // PAGE 3 — Unit 1 / Lesson 1 / Greetings
    // ══════════════════════════════════════════
    3: {
        pageImg: "images/books/p1/3.jpg",
        title: "Unit 1: Welcome to My School — Lesson 1 (Greetings)",
        inputs: [
            // Activity 1: Unscramble (play, friends, hello)
            { id: "p3_1", top: "37.5%", left: "20.2%", width: "11.2%", height: "2.5%", answer: "play",    placeholder: "..." },
            { id: "p3_2", top: "37.5%", left: "49.5%", width: "11.2%", height: "2.5%", answer: "friends", placeholder: "..." },
            { id: "p3_3", top: "37.5%", left: "78.5%", width: "11.2%", height: "2.5%", answer: "hello",   placeholder: "..." },

            // Activity 2: Reorder Sentences
            { id: "p3_4", top: "60.6%", left: "30.5%", width: "48.0%", height: "2.6%", answer: "What's your name?", placeholder: "What's..." },
            { id: "p3_5", top: "64.2%", left: "30.5%", width: "48.0%", height: "2.6%", answer: "My name is Hana.",  placeholder: "My..." },

            // Homework: Freewrite Name
            { id: "p3_hw", top: "81.4%", left: "39.5%", width: "35.0%", height: "2.8%", answer: "__free__", placeholder: "اكتب اسمك..." }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 4 — Unit 1 / Lesson 2 / Phonics (T)
    // ══════════════════════════════════════════
    4: {
        pageImg: "images/books/p1/4.jpg",
        title: "Unit 1: Welcome to My School — Lesson 2 (Phonics)",
        inputs: [
            // Activity 1: Write missing first letter ONLY over dots! (keeps rest of word visible on page)
            { id: "p4_a1_1", top: "36.2%", left: "12.2%", width: "4.2%", height: "2.4%", answer: "t", placeholder: "?" },
            { id: "p4_a1_2", top: "36.2%", left: "29.2%", width: "4.2%", height: "2.4%", answer: "t", placeholder: "?" },
            { id: "p4_a1_3", top: "36.2%", left: "47.2%", width: "4.2%", height: "2.4%", answer: "t", placeholder: "?" },
            { id: "p4_a1_4", top: "36.2%", left: "64.2%", width: "4.2%", height: "2.4%", answer: "t", placeholder: "?" },
            { id: "p4_a1_5", top: "36.2%", left: "82.2%", width: "4.2%", height: "2.4%", answer: "t", placeholder: "?" },

            // Activity 2: Unscramble and write
            { id: "p4_a2_1", top: "52.0%", left: "23.5%", width: "11.2%", height: "2.3%", answer: "teacher", placeholder: "..." },
            { id: "p4_a2_2", top: "52.0%", left: "52.0%", width: "11.2%", height: "2.3%", answer: "table",   placeholder: "..." },
            { id: "p4_a2_3", top: "52.0%", left: "80.5%", width: "11.2%", height: "2.3%", answer: "tree",    placeholder: "..." },
            { id: "p4_a2_4", top: "63.0%", left: "36.5%", width: "11.2%", height: "2.3%", answer: "tiger",   placeholder: "..." },
            { id: "p4_a2_5", top: "63.0%", left: "65.5%", width: "11.2%", height: "2.3%", answer: "tomato",  placeholder: "..." },

            // Homework Activity: Look and Write
            { id: "p4_hw_1", top: "91.6%", left: "11.2%", width: "10.5%", height: "2.3%", answer: "tiger",   placeholder: "..." },
            { id: "p4_hw_2", top: "91.6%", left: "29.5%", width: "10.5%", height: "2.3%", answer: "tree",    placeholder: "..." },
            { id: "p4_hw_3", top: "91.6%", left: "47.8%", width: "10.5%", height: "2.3%", answer: "table",   placeholder: "..." },
            { id: "p4_hw_4", top: "91.6%", left: "66.0%", width: "10.5%", height: "2.3%", answer: "tomato",  placeholder: "..." },
            { id: "p4_hw_5", top: "91.6%", left: "84.2%", width: "10.5%", height: "2.3%", answer: "teacher", placeholder: "..." }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 5 — Weekly Assessment (A) & (B)
    // ══════════════════════════════════════════
    5: {
        pageImg: "images/books/p1/5.jpg",
        title: "Weekly Assessment (A) & (B)",
        inputs: [
            // Assessment A - First letter ONLY over dots
            { id: "p5_a1_1", top: "33.5%", left: "27.5%", width: "4.2%", height: "2.4%", answer: "t", placeholder: "?" },
            { id: "p5_a1_2", top: "33.5%", left: "63.2%", width: "4.2%", height: "2.4%", answer: "t", placeholder: "?" },

            // Assessment A - Unscramble
            { id: "p5_a2_1", top: "48.8%", left: "19.5%", width: "11.0%", height: "2.4%", answer: "tiger", placeholder: "..." },
            { id: "p5_a2_2", top: "48.8%", left: "49.0%", width: "11.0%", height: "2.4%", answer: "play",  placeholder: "..." },
            { id: "p5_a2_3", top: "48.8%", left: "78.2%", width: "11.0%", height: "2.4%", answer: "tree",  placeholder: "..." },

            // Assessment B - First letter ONLY over dots
            { id: "p5_b1_1", top: "91.2%", left: "27.5%", width: "4.2%", height: "2.4%", answer: "t", placeholder: "?" },
            { id: "p5_b1_2", top: "91.2%", left: "63.2%", width: "4.2%", height: "2.4%", answer: "t", placeholder: "?" }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 6 — Weekly Assessment (B cont.) & (C)
    // ══════════════════════════════════════════
    6: {
        pageImg: "images/books/p1/6.jpg",
        title: "Weekly Assessment (B cont.) & (C)",
        inputs: [
            // Assessment B cont. - Unscramble
            { id: "p6_b2_1", top: "15.8%", left: "19.5%", width: "11.0%", height: "2.4%", answer: "teacher", placeholder: "..." },
            { id: "p6_b2_2", top: "15.8%", left: "49.0%", width: "11.0%", height: "2.4%", answer: "play",    placeholder: "..." },
            { id: "p6_b2_3", top: "15.8%", left: "78.2%", width: "11.0%", height: "2.4%", answer: "tomato",  placeholder: "..." },

            // Assessment C - First letter ONLY over dots
            { id: "p6_c1_1", top: "62.2%", left: "25.2%", width: "4.2%", height: "2.4%", answer: "t", placeholder: "?" },
            { id: "p6_c1_2", top: "62.2%", left: "65.5%", width: "4.2%", height: "2.4%", answer: "h", placeholder: "?" },

            // Assessment C - Unscramble
            { id: "p6_c2_1", top: "77.5%", left: "19.5%", width: "11.0%", height: "2.4%", answer: "friends", placeholder: "..." },
            { id: "p6_c2_2", top: "77.5%", left: "49.0%", width: "11.0%", height: "2.4%", answer: "hello",   placeholder: "..." },
            { id: "p6_c2_3", top: "77.5%", left: "78.2%", width: "11.0%", height: "2.4%", answer: "table",   placeholder: "..." }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 7 — Lesson 3 / Around my Classroom
    // ══════════════════════════════════════════
    7: {
        pageImg: "images/books/p1/7.jpg",
        title: "Lesson 3 — Around my Classroom",
        inputs: [
            // Activity 1: Circle correct word
            { id: "p7_a1_1", top: "37.2%", left: "8.5%",  width: "18.0%", height: "2.5%", answer: "book",   placeholder: "book/pencil" },
            { id: "p7_a1_2", top: "37.2%", left: "29.2%", width: "18.0%", height: "2.5%", answer: "bag",    placeholder: "chair/bag" },
            { id: "p7_a1_3", top: "37.2%", left: "50.5%", width: "18.0%", height: "2.5%", answer: "pencil", placeholder: "desk/pencil" },
            { id: "p7_a1_4", top: "37.2%", left: "71.2%", width: "18.0%", height: "2.5%", answer: "board",  placeholder: "board/bag" },

            // Activity 2: Complete sentences
            { id: "p7_a2_1", top: "51.0%", left: "14.0%", width: "11.0%", height: "2.4%", answer: "down",  placeholder: "..." },
            { id: "p7_a2_2", top: "59.8%", left: "18.0%", width: "11.0%", height: "2.4%", answer: "up",    placeholder: "..." },
            { id: "p7_a2_3", top: "67.5%", left: "24.0%", width: "14.0%", height: "2.4%", answer: "books", placeholder: "..." },

            // Homework: Look and write 6 words
            { id: "p7_hw_1", top: "91.5%", left: "7.0%",  width: "11.0%", height: "2.4%", answer: "book",   placeholder: "..." },
            { id: "p7_hw_2", top: "91.5%", left: "21.5%", width: "11.0%", height: "2.4%", answer: "bag",    placeholder: "..." },
            { id: "p7_hw_3", top: "91.5%", left: "36.0%", width: "11.0%", height: "2.4%", answer: "pencil", placeholder: "..." },
            { id: "p7_hw_4", top: "91.5%", left: "50.5%", width: "11.0%", height: "2.4%", answer: "board",  placeholder: "..." },
            { id: "p7_hw_5", top: "91.5%", left: "65.0%", width: "11.0%", height: "2.4%", answer: "chair",  placeholder: "..." },
            { id: "p7_hw_6", top: "91.5%", left: "79.5%", width: "11.0%", height: "2.4%", answer: "desk",   placeholder: "..." }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 8 — Lesson 4 / Phonics (I)
    // ══════════════════════════════════════════
    8: {
        pageImg: "images/books/p1/8.jpg",
        title: "Lesson 4 — Phonics",
        inputs: [
            // Activity 1: Write first letter ONLY over dots (I)
            { id: "p8_a1_1", top: "39.8%", left: "11.2%", width: "4.2%", height: "2.4%", answer: "i", placeholder: "?" },
            { id: "p8_a1_2", top: "39.8%", left: "32.5%", width: "4.2%", height: "2.4%", answer: "i", placeholder: "?" },
            { id: "p8_a1_3", top: "39.8%", left: "54.2%", width: "4.2%", height: "2.4%", answer: "i", placeholder: "?" },
            { id: "p8_a1_4", top: "39.8%", left: "75.2%", width: "4.2%", height: "2.4%", answer: "i", placeholder: "?" },

            // Activity 2: Unscramble and write
            { id: "p8_a2_1", top: "62.2%", left: "12.0%", width: "13.0%", height: "2.4%", answer: "ink",    placeholder: "..." },
            { id: "p8_a2_2", top: "62.2%", left: "33.5%", width: "13.0%", height: "2.4%", answer: "ill",    placeholder: "..." },
            { id: "p8_a2_3", top: "62.2%", left: "55.2%", width: "13.0%", height: "2.4%", answer: "insect", placeholder: "..." },
            { id: "p8_a2_4", top: "62.2%", left: "76.5%", width: "13.0%", height: "2.4%", answer: "in",     placeholder: "..." },

            // Homework: Look and write
            { id: "p8_hw_1", top: "89.2%", left: "12.0%", width: "13.0%", height: "2.4%", answer: "ink",    placeholder: "..." },
            { id: "p8_hw_2", top: "89.2%", left: "33.5%", width: "13.0%", height: "2.4%", answer: "ill",    placeholder: "..." },
            { id: "p8_hw_3", top: "89.2%", left: "55.2%", width: "13.0%", height: "2.4%", answer: "insect", placeholder: "..." },
            { id: "p8_hw_4", top: "89.2%", left: "76.5%", width: "13.0%", height: "2.4%", answer: "in",     placeholder: "..." }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 9 — Weekly Assessment (A) & (B)
    // ══════════════════════════════════════════
    9: {
        pageImg: "images/books/p1/9.jpg",
        title: "Weekly Assessment (A) & (B)",
        inputs: [
            // Assessment A - Unscramble
            { id: "p9_a1_1", top: "26.6%", left: "20.5%", width: "10.0%", height: "2.4%", answer: "desk", placeholder: "..." },
            { id: "p9_a1_2", top: "26.6%", left: "50.0%", width: "10.0%", height: "2.4%", answer: "book", placeholder: "..." },
            { id: "p9_a1_3", top: "26.6%", left: "79.5%", width: "10.0%", height: "2.4%", answer: "bag",  placeholder: "..." },

            // Assessment A - Look and write
            { id: "p9_a2_1", top: "44.6%", left: "23.5%", width: "11.0%", height: "2.4%", answer: "ink",    placeholder: "..." },
            { id: "p9_a2_2", top: "44.6%", left: "61.5%", width: "11.0%", height: "2.4%", answer: "insect", placeholder: "..." },

            // Assessment B - Unscramble
            { id: "p9_b1_1", top: "72.0%", left: "19.5%", width: "10.0%", height: "2.4%", answer: "chair",    placeholder: "..." },
            { id: "p9_b1_2", top: "72.0%", left: "47.5%", width: "10.0%", height: "2.4%", answer: "pencil",   placeholder: "..." },
            { id: "p9_b1_3", top: "72.0%", left: "79.5%", width: "11.0%", height: "2.4%", answer: "sit down", placeholder: "..." },

            // Assessment B - Look and write
            { id: "p9_b2_1", top: "91.0%", left: "23.5%", width: "11.0%", height: "2.4%", answer: "ill", placeholder: "..." },
            { id: "p9_b2_2", top: "91.0%", left: "61.5%", width: "11.0%", height: "2.4%", answer: "in",  placeholder: "..." }
        ]
    },

    // ══════════════════════════════════════════
    // PAGE 10 — Weekly Assessment (C)
    // ══════════════════════════════════════════
    10: {
        pageImg: "images/books/p1/10.jpg",
        title: "Weekly Assessment (C)",
        inputs: [
            // Assessment C - Unscramble
            { id: "p10_c1_1", top: "28.8%", left: "20.0%", width: "10.0%", height: "2.4%", answer: "board",    placeholder: "..." },
            { id: "p10_c1_2", top: "28.8%", left: "47.5%", width: "11.0%", height: "2.4%", answer: "stand up", placeholder: "..." },
            { id: "p10_c1_3", top: "28.8%", left: "81.5%", width: "10.0%", height: "2.4%", answer: "insect",   placeholder: "..." },

            // Assessment C - Look and write
            { id: "p10_c2_1", top: "52.4%", left: "25.0%", width: "11.0%", height: "2.4%", answer: "ill",    placeholder: "..." },
            { id: "p10_c2_2", top: "52.4%", left: "63.0%", width: "11.0%", height: "2.4%", answer: "insect", placeholder: "..." }
        ]
    }
};
