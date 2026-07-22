/**
 * English Toon — Primary 1 Assessment Book Exact Exercise Database
 * Fully mapped page by page with exact questions, answers, speech synthesis, and image references.
 */

const P1_EXERCISES_DATABASE = {
    3: {
        unit: "Unit 1: Hello!",
        lesson: "Lesson 1: Greetings (الدرس الأول - الترحيب والتعارف)",
        items: [
            { id: "p3_q1", type: "input", label: "1. 👋 ..... , I'm Hany.", answer: "Hello", speech: "Hello, I'm Hany.", hint: "الترحيب" },
            { id: "p3_q2", type: "input", label: "2. What's your ..... ?", answer: "name", speech: "What's your name?", hint: "الاسم" },
            { id: "p3_q3", type: "input", label: "3. I'm ..... .", answer: "Hana", speech: "I'm Hana.", hint: "هنا" },
            { id: "p3_q4", type: "input", label: "4. (Mona / I'm / Miss / Hello) ➡️ Reorder: .....", answer: "Hello, I'm Miss Mona", speech: "Hello, I'm Miss Mona.", hint: "ترتيب الجملة" },
            { id: "p3_q5", type: "mcq", label: "5. 🎧 اختر كلمة الوداع المناسبة عند المغادرة:", audio: "Goodbye", options: ["Hello", "Goodbye", "Play"], answer: "Goodbye" }
        ]
    },
    4: {
        unit: "Unit 1: Hello!",
        lesson: "Lesson 2: Phonics (الصوتيات والحروف - Letter B & H)",
        items: [
            { id: "p4_q1", type: "input", label: "1. 🚌 b _ s (أكمل الحرف المفقود):", answer: "u", speech: "Bus", hint: "حرف u" },
            { id: "p4_q2", type: "input", label: "2. 🎒 b a _ (أكمل الحرف المفقود):", answer: "g", speech: "Bag", hint: "حرف g" },
            { id: "p4_q3", type: "input", label: "3. 🐝 b e _ (أكمل الحرف المفقود):", answer: "e", speech: "Bee", hint: "حرف e" },
            { id: "p4_q4", type: "mcq", label: "4. اختر الكلمة المختلفة (Odd word out):", audio: "cat", options: ["Bus", "Bag", "Cat"], answer: "Cat" },
            { id: "p4_q5", type: "mcq", label: "5. اختر الكلمة المبتدئة بحرف B:", audio: "book", options: ["Book", "Hand", "Pen"], answer: "Book" }
        ]
    },
    5: {
        unit: "Unit 1: Hello!",
        lesson: "Lesson 3: Life Skills & Values (المهارات والسلوكيات)",
        items: [
            { id: "p5_q1", type: "input", label: "1. Shake ..... (مصافحة):", answer: "hands", speech: "Shake hands.", hint: "hands" },
            { id: "p5_q2", type: "input", label: "2. Let's ..... (لعب):", answer: "play", speech: "Let's play.", hint: "play" },
            { id: "p5_q3", type: "mcq", label: "3. Open your ..... (افتح كتابك):", audio: "book", options: ["bag", "book", "hand"], answer: "book" },
            { id: "p5_q4", type: "mcq", label: "4. Close your ..... (أغلق حقيبتك):", audio: "bag", options: ["bag", "book", "door"], answer: "bag" }
        ]
    },
    6: {
        unit: "Unit 1: Weekly Assessment 1",
        lesson: "التقييم الأسبوعي الأول الشامل",
        items: [
            { id: "p6_q1", type: "input", label: "1. Hello, I'm ..... Mona.", answer: "Miss", speech: "Hello, I'm Miss Mona." },
            { id: "p6_q2", type: "input", label: "2. What's ..... name?", answer: "your", speech: "What's your name?" },
            { id: "p6_q3", type: "mcq", label: "3. 🤝 عند الترحيب باليد نقول:", audio: "Shake hands", options: ["Shake hands", "Goodbye", "Open book"], answer: "Shake hands" },
            { id: "p6_q4", type: "mcq", label: "4. 🙋‍♂️ عند مغادرة الفضل نقول:", audio: "Goodbye", options: ["Hello", "Goodbye", "Play"], answer: "Goodbye" }
        ]
    },
    7: {
        unit: "Unit 2: My Family",
        lesson: "Lesson 1: Family Members (أفراد العائلة)",
        items: [
            { id: "p7_q1", type: "input", label: "1. 👨‍👩‍👧‍👦 This is my ..... (أب):", answer: "father", speech: "father" },
            { id: "p7_q2", type: "input", label: "2. This is my ..... (أم):", answer: "mother", speech: "mother" },
            { id: "p7_q3", type: "input", label: "3. This is my ..... (أخ):", answer: "brother", speech: "brother" },
            { id: "p7_q4", type: "input", label: "4. This is my ..... (أخت):", answer: "sister", speech: "sister" }
        ]
    }
};
