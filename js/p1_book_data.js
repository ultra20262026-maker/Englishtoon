/* ==========================================================================
   📚 BOOK 1: PRIMARY 1 ENGLISH PERFORMANCE TASKS & ASSESSMENTS (2027)
   FULL PAGE-BY-PAGE INTERACTIVE MAPPING DATA
   ========================================================================== */

const P1_BOOK_DATA = {
    id: "primary-1-english",
    title: "English Language — Performance Tasks and Assessments",
    gradeLabel: "الصف الأول الابتدائي — الترم الأول 2027",
    totalPages: 72,
    baseImagePath: "images/books/p1",
    
    pages: {
        1: {
            pageNumber: 1,
            title: "غلاف الكتاب وبيانات الطالب",
            type: "cover",
            items: [
                { type: "input", id: "p1_1_name", label: "Name", placeholder: "أكتب اسمك هنا...", top: "84.2%", left: "28%", width: "55%", height: "3.8%" },
                { type: "input", id: "p1_1_class", label: "Class", placeholder: "الفصل...", top: "88.6%", left: "28%", width: "55%", height: "3.8%" },
                { type: "input", id: "p1_1_school", label: "School", placeholder: "المدرسة...", top: "93.0%", left: "28%", width: "55%", height: "3.8%" }
            ]
        },
        2: {
            pageNumber: 2,
            title: "المقدمة والتعليمات الوزارية",
            type: "reading",
            items: []
        },
        3: {
            pageNumber: 3,
            title: "Unit 1: Welcome to My School — Lesson 1: Greetings",
            type: "exercise",
            items: [
                // Activity 1: Unscramble and write
                { type: "input", id: "p1_3_u1", label: "1. ypla", answer: "play", top: "33.5%", left: "19%", width: "23%", height: "4.8%", hint: "play" },
                { type: "input", id: "p1_3_u2", label: "2. fenrsid", answer: "friends", top: "33.5%", left: "51.5%", width: "23%", height: "4.8%", hint: "friends" },
                { type: "input", id: "p1_3_u3", label: "3. elhol", answer: "hello", top: "33.5%", left: "81%", width: "23%", height: "4.8%", hint: "hello" },
                
                // Activity 2: Reorder words to make sentences
                { type: "input", id: "p1_3_s1", label: "1. your - What's - name?", answer: "What's your name?", top: "55.8%", left: "37%", width: "55%", height: "4.5%", hint: "What's your name?" },
                { type: "input", id: "p1_3_s2", label: "2. name - Hana. - My - is", answer: "My name is Hana.", top: "62.8%", left: "37%", width: "55%", height: "4.5%", hint: "My name is Hana." },

                // Homework Activity
                { type: "input", id: "p1_3_hw", label: "My name is...", answer: "", placeholder: "أكتب اسمك الإنجليزي...", top: "79.8%", left: "38%", width: "52%", height: "4.5%" },

                // On-page Audio Pronunciation Triggers
                { type: "speak", text: "play", top: "27.5%", left: "29%" },
                { type: "speak", text: "friends", top: "27.5%", left: "61.5%" },
                { type: "speak", text: "hello", top: "27.5%", left: "91%" }
            ]
        },
        4: {
            pageNumber: 4,
            title: "Unit 1: Lesson 1 — Vocabulary & Listening",
            type: "exercise",
            items: [
                { type: "options", id: "p1_4_c1", label: "1. Picture 1", opts: ["fan", "cat"], answer: "fan", top: "34.0%", left: "20%" },
                { type: "options", id: "p1_4_c2", label: "2. Picture 2", opts: ["map", "cat"], answer: "cat", top: "34.0%", left: "52%" },
                { type: "options", id: "p1_4_c3", label: "3. Picture 3", opts: ["hat", "cat"], answer: "hat", top: "34.0%", left: "82%" },
                { type: "input", id: "p1_4_s1", label: "Sentence 1", answer: "I see a fan.", top: "58.0%", left: "35%", width: "55%", height: "4.5%" },
                { type: "input", id: "p1_4_s2", label: "Sentence 2", answer: "This is my hat.", top: "65.0%", left: "35%", width: "55%", height: "4.5%" }
            ]
        },
        5: {
            pageNumber: 5,
            title: "Unit 1: Lesson 2 — Classroom Performance",
            type: "exercise",
            items: [
                { type: "input", id: "p1_5_m1", label: "1. b_g", answer: "bag", top: "32.0%", left: "20%", width: "20%", height: "4.5%" },
                { type: "input", id: "p1_5_m2", label: "2. b_ok", answer: "book", top: "32.0%", left: "52%", width: "20%", height: "4.5%" },
                { type: "input", id: "p1_5_m3", label: "3. p_n", answer: "pen", top: "32.0%", left: "81%", width: "20%", height: "4.5%" },
                { type: "options", id: "p1_5_c1", label: "Choose item", opts: ["book", "bag"], answer: "book", top: "58.0%", left: "30%" }
            ]
        },
        6: {
            pageNumber: 6,
            title: "Weekly Assessment 1 — التقييم الأسبوعي الأول",
            type: "assessment",
            items: [
                { type: "input", id: "p1_6_q1", label: "Question 1", answer: "bag", top: "30.0%", left: "30%", width: "40%", height: "4.5%" },
                { type: "input", id: "p1_6_q2", label: "Question 2", answer: "pencil", top: "45.0%", left: "30%", width: "40%", height: "4.5%" },
                { type: "input", id: "p1_6_q3", label: "Question 3", answer: "This is a book.", top: "62.0%", left: "30%", width: "55%", height: "4.5%" }
            ]
        },
        7: {
            pageNumber: 7,
            title: "Unit 1: Lesson 3 — Phonics & Writing (Letter B)",
            type: "exercise",
            items: [
                { type: "input", id: "p1_7_p1", label: "Letter B Word 1", answer: "bus", top: "33.0%", left: "22%", width: "22%", height: "4.5%" },
                { type: "input", id: "p1_7_p2", label: "Letter B Word 2", answer: "bee", top: "33.0%", left: "52%", width: "22%", height: "4.5%" },
                { type: "input", id: "p1_7_p3", label: "Letter B Word 3", answer: "blue", top: "33.0%", left: "81%", width: "22%", height: "4.5%" }
            ]
        },
        8: {
            pageNumber: 8,
            title: "Unit 1: Lesson 4 — Life Skills & Values",
            type: "exercise",
            items: [
                { type: "options", id: "p1_8_o1", label: "Action 1", opts: ["shake hands", "play"], answer: "shake hands", top: "35.0%", left: "25%" },
                { type: "options", id: "p1_8_o2", label: "Action 2", opts: ["open book", "close book"], answer: "open book", top: "58.0%", left: "25%" }
            ]
        },
        9: {
            pageNumber: 9,
            title: "Monthly Evaluation 1 — التقييم الشهري الشامل",
            type: "assessment",
            items: [
                { type: "input", id: "p1_9_q1", label: "Question 1", answer: "hello", top: "28.0%", left: "30%", width: "45%", height: "4.5%" },
                { type: "input", id: "p1_9_q2", label: "Question 2", answer: "goodbye", top: "42.0%", left: "30%", width: "45%", height: "4.5%" },
                { type: "input", id: "p1_9_q3", label: "Question 3", answer: "Open your bag.", top: "60.0%", left: "30%", width: "55%", height: "4.5%" }
            ]
        },
        10: {
            pageNumber: 10,
            title: "Unit 2: My Family — Lesson 1",
            type: "exercise",
            items: [
                { type: "input", id: "p1_10_f1", label: "Family 1", answer: "father", top: "32.0%", left: "22%", width: "22%", height: "4.5%" },
                { type: "input", id: "p1_10_f2", label: "Family 2", answer: "mother", top: "32.0%", left: "52%", width: "22%", height: "4.5%" },
                { type: "input", id: "p1_10_f3", label: "Family 3", answer: "brother", top: "32.0%", left: "81%", width: "22%", height: "4.5%" }
            ]
        }
    }
};
