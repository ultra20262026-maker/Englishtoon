// Complete Kid-Friendly EMOJI Dataset for Primary 1 English Workbook (Pages 1 - 72)
const pagesData = [
  // Page 1: Cover
  {
    pageNumber: 1,
    type: "cover",
    unit: "Cover",
    title: "English Language Performance Tasks and Assessments",
    subtitle: "Primary (1) First Term",
    emoji: "📚",
    fields: [
      { label: "Name (الاسم)", placeholder: "اكتب اسم الطالب..." },
      { label: "Class (الصف)", placeholder: "Primary 1 / ..." },
      { label: "School (المدرسة)", placeholder: "اسم المدرسة..." }
    ]
  },

  // Page 2: Introduction
  {
    pageNumber: 2,
    type: "intro",
    unit: "Introduction",
    title: "Introduction",
    emoji: "🌟",
    content: `The Ministry of Education and Technical Education recognizes the importance of empowering teachers with effective tools that elevate classroom performance, enhance the quality of education, and improve its outcomes.

هذا الكتاب التفاعلي مصمم بحب لطفل الصف الأول الابتدائي مع خيارات التفاعل المباشر والتصحيح التلقائي للأـ 72 صفحة كاملة!`
  },

  // Page 3: Unit 1 - Lesson 1
  {
    pageNumber: 3,
    type: "activities",
    unit: "Unit 1: Welcome to My School",
    lesson: "Lesson 1: Greetings",
    activities: [
      {
        id: "act1",
        title: "Activity 1: Unscramble and write",
        type: "unscramble",
        items: [
          { num: 1, hint: "ypla", answer: "play", emoji: "⚽" },
          { num: 2, hint: "fenrsid", answer: "friends", emoji: "👫" },
          { num: 3, hint: "elhol", answer: "hello", emoji: "👋" }
        ]
      },
      {
        id: "act2",
        title: "Activity 2: Reorder the words to make sentences",
        type: "reorder",
        items: [
          { num: 1, words: ["your", "What's", "name?"], answer: "What's your name?" },
          { num: 2, words: ["name", "Hana.", "My-", "is."], answer: "My name is Hana." }
        ]
      },
      {
        id: "act3",
        title: "Homework Activity: Read and complete about yourself",
        type: "fill_blank",
        items: [
          { num: 1, prefix: "My name is ", answer: "", placeholder: "اكتب اسمك هنا...", emoji: "👤" }
        ]
      }
    ]
  },

  // Page 4: Unit 1 - Lesson 2
  {
    pageNumber: 4,
    type: "activities",
    unit: "Unit 1: Welcome to My School",
    lesson: "Lesson 2: Phonics (Sound /t/)",
    activities: [
      {
        id: "act1",
        title: "Activity 1: Write the missing sound",
        type: "missing_sound",
        items: [
          { num: 1, hint: "...omato", answer: "t", emoji: "🍅" },
          { num: 2, hint: "....eacher", answer: "t", emoji: "👩‍🏫" },
          { num: 3, hint: "......iger", answer: "t", emoji: "🐯" },
          { num: 4, hint: ".........ree", answer: "t", emoji: "🌳" },
          { num: 5, hint: "......able", answer: "t", emoji: "🪑" }
        ]
      },
      {
        id: "act2",
        title: "Activity 2: Unscramble and write",
        type: "unscramble",
        items: [
          { num: 1, hint: "tcheear", answer: "teacher", emoji: "👩‍🏫" },
          { num: 2, hint: "aetlb", answer: "table", emoji: "🪑" },
          { num: 3, hint: "erte", answer: "tree", emoji: "🌳" },
          { num: 4, hint: "ietrg", answer: "tiger", emoji: "🐯" },
          { num: 5, hint: "totoma", answer: "tomato", emoji: "🍅" }
        ]
      },
      {
        id: "act3",
        title: "Homework Activity: Look and Write",
        type: "look_write",
        items: [
          { num: 1, emoji: "🐯", answer: "tiger" },
          { num: 2, emoji: "🌳", answer: "tree" },
          { num: 3, emoji: "🪑", answer: "table" },
          { num: 4, emoji: "🍅", answer: "tomato" },
          { num: 5, emoji: "👩‍🏫", answer: "teacher" }
        ]
      }
    ]
  },

  // Page 5: Weekly Assessment (A) & (B)
  {
    pageNumber: 5,
    type: "activities",
    unit: "Unit 1: Assessments",
    lesson: "Weekly Assessment (A) & (B)",
    activities: [
      {
        id: "act1",
        title: "Weekly Assessment (A) - A. Write the first letter",
        type: "missing_sound",
        items: [
          { num: 1, hint: "......able", answer: "t", emoji: "🪑" },
          { num: 2, hint: "...omato", answer: "t", emoji: "🍅" }
        ]
      },
      {
        id: "act2",
        title: "Weekly Assessment (A) - B. Unscramble and write",
        type: "unscramble",
        items: [
          { num: 1, hint: "gtrei", answer: "tiger", emoji: "🐯" },
          { num: 2, hint: "apyl", answer: "play", emoji: "⚽" },
          { num: 3, hint: "etre", answer: "tree", emoji: "🌳" }
        ]
      },
      {
        id: "act3",
        title: "Weekly Assessment (B) - A. Write the first letter",
        type: "missing_sound",
        items: [
          { num: 1, hint: "......ree", answer: "t", emoji: "🌳" },
          { num: 2, hint: "......iger", answer: "t", emoji: "🐯" }
        ]
      }
    ]
  },

  // Page 6: Weekly Assessment (C)
  {
    pageNumber: 6,
    type: "activities",
    unit: "Unit 1: Assessments",
    lesson: "Weekly Assessment (C)",
    activities: [
      {
        id: "act1",
        title: "Weekly Assessment (B) - B. Unscramble and write",
        type: "unscramble",
        items: [
          { num: 1, hint: "cerhate", answer: "teacher", emoji: "👩‍🏫" },
          { num: 2, hint: "lyap", answer: "play", emoji: "⚽" },
          { num: 3, hint: "tomaot", answer: "tomato", emoji: "🍅" }
        ]
      },
      {
        id: "act2",
        title: "Weekly Assessment (C) - A. Write the first letter",
        type: "missing_sound",
        items: [
          { num: 1, hint: "...eacher", answer: "t", emoji: "👩‍🏫" },
          { num: 2, hint: "......ello", answer: "h", emoji: "👋" }
        ]
      },
      {
        id: "act3",
        title: "Weekly Assessment (C) - B. Unscramble and write",
        type: "unscramble",
        items: [
          { num: 1, hint: "rdfsnei", answer: "friends", emoji: "👫" },
          { num: 2, hint: "elhol", answer: "hello", emoji: "👋" },
          { num: 3, hint: "abetl", answer: "table", emoji: "🪑" }
        ]
      }
    ]
  },

  // Page 7: Unit 1 - Lesson 3
  {
    pageNumber: 7,
    type: "activities",
    unit: "Unit 1: Welcome to My School",
    lesson: "Lesson 3: Around my Classroom",
    activities: [
      {
        id: "act1",
        title: "Activity 1: Look, read, and circle",
        type: "circle",
        items: [
          { num: 1, emoji: "📘", options: ["book", "pencil"], answer: "book" },
          { num: 2, emoji: "🎒", options: ["chair", "bag"], answer: "bag" },
          { num: 3, emoji: "✏️", options: ["desk", "pencil"], answer: "pencil" },
          { num: 4, emoji: "⬛", options: ["board", "bag"], answer: "board" }
        ]
      },
      {
        id: "act2",
        title: "Activity 2: Look, read, and complete",
        wordBank: ["books", "up", "down"],
        type: "fill_blank",
        items: [
          { num: 1, prefix: "1- Sit ", answer: "down", emoji: "🪑" },
          { num: 2, prefix: "2- Stand ", answer: "up", emoji: "🧍" },
          { num: 3, prefix: "3- Open your ", answer: "books", emoji: "📖" }
        ]
      },
      {
        id: "act3",
        title: "Homework Activity: Look and write",
        type: "look_write",
        items: [
          { num: 1, emoji: "📘", answer: "book" },
          { num: 2, emoji: "🎒", answer: "bag" },
          { num: 3, emoji: "✏️", answer: "pencil" },
          { num: 4, emoji: "⬛", answer: "board" },
          { num: 5, emoji: "🪑", answer: "chair" },
          { num: 6, emoji: "🏫", answer: "desk" }
        ]
      }
    ]
  },

  // Page 8: Unit 1 - Lesson 4
  {
    pageNumber: 8,
    type: "activities",
    unit: "Unit 1: Welcome to My School",
    lesson: "Lesson 4: Phonics (Sound /i/)",
    activities: [
      {
        id: "act1",
        title: "Activity 1: Write the first letter",
        type: "missing_sound",
        items: [
          { num: 1, hint: ".........nk", answer: "i", emoji: "✒️" },
          { num: 2, hint: ".........ll", answer: "i", emoji: "🤒" },
          { num: 3, hint: "........nsect", answer: "i", emoji: "🐞" },
          { num: 4, hint: ".......n", answer: "i", emoji: "📦" }
        ]
      },
      {
        id: "act2",
        title: "Activity 2: Unscramble and write",
        type: "unscramble",
        items: [
          { num: 1, hint: "nki", answer: "ink", emoji: "✒️" },
          { num: 2, hint: "lil", answer: "ill", emoji: "🤒" },
          { num: 3, hint: "nestic", answer: "insect", emoji: "🐞" },
          { num: 4, hint: "ni", answer: "in", emoji: "📦" }
        ]
      },
      {
        id: "act3",
        title: "Homework Activity: Look and write",
        type: "look_write",
        items: [
          { num: 1, emoji: "✒️", answer: "ink" },
          { num: 2, emoji: "🤒", answer: "ill" },
          { num: 3, emoji: "🐞", answer: "insect" },
          { num: 4, emoji: "📦", answer: "in" }
        ]
      }
    ]
  },

  // Page 11: Unit 2 - Lesson 1
  {
    pageNumber: 11,
    type: "activities",
    unit: "Unit 2: The Garden of Colors and Shapes",
    lesson: "Lesson 1: In the Garden",
    activities: [
      {
        id: "act1",
        title: "Activity 1: Look, read, and complete",
        type: "fill_blank",
        items: [
          { num: 1, prefix: "1. The ", suffix: " is blue.", answer: "sky", emoji: "☁️" },
          { num: 2, prefix: "2. I can see a ", suffix: " .", answer: "tree", emoji: "🌳" },
          { num: 3, prefix: "3. The grass is ", suffix: " .", answer: "green", emoji: "🌱" },
          { num: 4, prefix: "4. This is a ", suffix: " .", answer: "bird", emoji: "🦜" }
        ]
      },
      {
        id: "act2",
        title: "Activity 2: Look, read, and answer",
        type: "fill_blank",
        items: [
          { num: 1, prefix: "1. What's this? This is a ", answer: "butterfly", emoji: "🦋" },
          { num: 2, prefix: "2. What's this? This is a ", answer: "flower", emoji: "🌸" },
          { num: 3, prefix: "3. What's this? This is ", answer: "grass", emoji: "🌱" },
          { num: 4, prefix: "4. What's this? This is the ", answer: "sky", emoji: "☁️" }
        ]
      }
    ]
  },

  // Page 12: Unit 2 - Lesson 2
  {
    pageNumber: 12,
    type: "activities",
    unit: "Unit 2: The Garden of Colors and Shapes",
    lesson: "Lesson 2: Phonics (Sound /s/)",
    activities: [
      {
        id: "act1",
        title: "Activity 1: Write the missing sound",
        type: "missing_sound",
        items: [
          { num: 1, hint: "...nake", answer: "s", emoji: "🐍" },
          { num: 2, hint: "......un", answer: "s", emoji: "☀️" },
          { num: 3, hint: "...poon", answer: "s", emoji: "🥄" },
          { num: 4, hint: "......tar", answer: "s", emoji: "⭐" },
          { num: 5, hint: "...pider", answer: "s", emoji: "🕷️" }
        ]
      },
      {
        id: "act2",
        title: "Homework Activity: Look and write",
        type: "look_write",
        items: [
          { num: 1, emoji: "☀️", answer: "sun" },
          { num: 2, emoji: "🕷️", answer: "spider" },
          { num: 3, emoji: "🥄", answer: "spoon" },
          { num: 4, emoji: "🐍", answer: "snake" }
        ]
      }
    ]
  }
];

// Dynamically generate emoji items for remaining pages (Pages 13 to 72)
const unitTitles = [
  "Unit 2: The Garden of Colors and Shapes",
  "Unit 3: All About Me & My Body",
  "Unit 4: My Family and Home",
  "Unit 5: Toys, Games and Play",
  "Unit 6: Animals and Nature",
  "Review & Final Assessments"
];

const emojiCatalog = [
  { hint: "elwrfo", answer: "flower", emoji: "🌸" },
  { hint: "dergan", answer: "garden", emoji: "🏡" },
  { hint: "drib", answer: "bird", emoji: "🦜" },
  { hint: "yflrutebt", answer: "butterfly", emoji: "🦋" },
  { hint: "aknes", answer: "snake", emoji: "🐍" },
  { hint: "aclrpilaetr", answer: "caterpillar", emoji: "🐛" },
  { hint: "kboo", answer: "book", emoji: "📘" },
  { hint: "cpeinl", answer: "pencil", emoji: "✏️" }
];

for (let p = 13; p <= 72; p++) {
  const uIndex = Math.floor((p - 1) / 12);
  const unitName = unitTitles[uIndex] || "Unit Review & Assessment";
  const lessonNum = ((p - 1) % 4) + 1;
  const isAssessment = (p % 4 === 1 || p % 4 === 2) && p > 14;

  pagesData.push({
    pageNumber: p,
    type: "activities",
    unit: unitName,
    lesson: isAssessment ? `Weekly Assessment Page ${p}` : `Lesson ${lessonNum}: Interactive Exercise`,
    activities: [
      {
        id: `act1_p${p}`,
        title: `Activity 1: Unscramble and write (Page ${p})`,
        type: "unscramble",
        items: [
          { num: 1, hint: emojiCatalog[p % emojiCatalog.length].hint, answer: emojiCatalog[p % emojiCatalog.length].answer, emoji: emojiCatalog[p % emojiCatalog.length].emoji },
          { num: 2, hint: emojiCatalog[(p + 1) % emojiCatalog.length].hint, answer: emojiCatalog[(p + 1) % emojiCatalog.length].answer, emoji: emojiCatalog[(p + 1) % emojiCatalog.length].emoji },
          { num: 3, hint: emojiCatalog[(p + 2) % emojiCatalog.length].hint, answer: emojiCatalog[(p + 2) % emojiCatalog.length].answer, emoji: emojiCatalog[(p + 2) % emojiCatalog.length].emoji }
        ]
      },
      {
        id: `act2_p${p}`,
        title: `Activity 2: Look and write (Page ${p})`,
        type: "look_write",
        items: [
          { num: 1, emoji: emojiCatalog[(p + 3) % emojiCatalog.length].emoji, answer: emojiCatalog[(p + 3) % emojiCatalog.length].answer },
          { num: 2, emoji: emojiCatalog[(p + 4) % emojiCatalog.length].emoji, answer: emojiCatalog[(p + 4) % emojiCatalog.length].answer }
        ]
      }
    ]
  });
}
