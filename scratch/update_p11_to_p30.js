const fs = require('fs');

const p11_to_30 = {
    11: {
        pageImg: "images/books/p1/11.jpg",
        title: "Unit 2: Lesson 1 — In the Garden",
        inputs: [
            { id: "p11_a1_1", top: "33.5%", left: "31.0%", width: "14.5%", height: "2.3%", answer: "sky", placeholder: "..." },
            { id: "p11_a1_2", top: "40.2%", left: "36.0%", width: "14.5%", height: "2.3%", answer: "tree", placeholder: "..." },
            { id: "p11_a1_3", top: "46.8%", left: "37.0%", width: "14.5%", height: "2.3%", answer: "green", placeholder: "..." },
            { id: "p11_a1_4", top: "53.4%", left: "34.0%", width: "14.5%", height: "2.3%", answer: "bird", placeholder: "..." },
            { id: "p11_a2_1", top: "70.4%", left: "16.5%", width: "9.8%", height: "2.3%", answer: "butterfly", placeholder: "..." },
            { id: "p11_a2_2", top: "70.4%", left: "38.5%", width: "9.8%", height: "2.3%", answer: "flower", placeholder: "..." },
            { id: "p11_a2_3", top: "70.4%", left: "59.8%", width: "9.8%", height: "2.3%", answer: "grass", placeholder: "..." },
            { id: "p11_a2_4", top: "70.4%", left: "81.8%", width: "9.8%", height: "2.3%", answer: "sky", placeholder: "..." },
            { id: "p11_hw_1", top: "84.5%", left: "31.5%", width: "50.0%", height: "2.5%", answer: "The grass is green.", placeholder: "The..." },
            { id: "p11_hw_2", top: "88.2%", left: "31.5%", width: "50.0%", height: "2.5%", answer: "This is a butterfly.", placeholder: "This..." },
            { id: "p11_hw_3", top: "91.8%", left: "31.5%", width: "50.0%", height: "2.5%", answer: "I can see a tree.", placeholder: "I..." }
        ]
    },
    12: {
        pageImg: "images/books/p1/12.jpg",
        title: "Unit 2: Lesson 2 — Phonics (S)",
        inputs: [
            { id: "p12_a1_1", top: "36.8%", left: "12.5%", width: "4.2%", height: "2.4%", answer: "s", placeholder: "?" },
            { id: "p12_a1_2", top: "36.8%", left: "30.2%", width: "4.2%", height: "2.4%", answer: "s", placeholder: "?" },
            { id: "p12_a1_3", top: "36.8%", left: "47.8%", width: "4.2%", height: "2.4%", answer: "s", placeholder: "?" },
            { id: "p12_a1_4", top: "36.8%", left: "65.5%", width: "4.2%", height: "2.4%", answer: "s", placeholder: "?" },
            { id: "p12_a1_5", top: "36.8%", left: "83.2%", width: "4.2%", height: "2.4%", answer: "s", placeholder: "?" },
            { id: "p12_a2_1", top: "52.8%", left: "29.5%", width: "11.2%", height: "2.3%", answer: "spider", placeholder: "..." },
            { id: "p12_a2_2", top: "52.8%", left: "72.0%", width: "11.2%", height: "2.3%", answer: "snake", placeholder: "..." },
            { id: "p12_a2_3", top: "66.8%", left: "29.5%", width: "11.2%", height: "2.3%", answer: "spoon", placeholder: "..." },
            { id: "p12_a2_4", top: "66.8%", left: "72.0%", width: "11.2%", height: "2.3%", answer: "sun", placeholder: "..." },
            { id: "p12_hw_1", top: "89.5%", left: "14.2%", width: "10.0%", height: "2.3%", answer: "sun", placeholder: "..." },
            { id: "p12_hw_2", top: "89.5%", left: "31.2%", width: "10.0%", height: "2.3%", answer: "spider", placeholder: "..." },
            { id: "p12_hw_3", top: "89.5%", left: "48.2%", width: "10.0%", height: "2.3%", answer: "spoon", placeholder: "..." },
            { id: "p12_hw_4", top: "89.5%", left: "65.2%", width: "10.0%", height: "2.3%", answer: "snake", placeholder: "..." },
            { id: "p12_hw_5", top: "89.5%", left: "82.2%", width: "10.0%", height: "2.3%", answer: "star", placeholder: "..." }
        ]
    },
    13: {
        pageImg: "images/books/p1/13.jpg",
        title: "Weekly Assessment (A) & (B)",
        inputs: [
            { id: "p13_a1_1", top: "33.5%", left: "20.2%", width: "11.0%", height: "2.4%", answer: "sun", placeholder: "..." },
            { id: "p13_a1_2", top: "33.5%", left: "47.0%", width: "11.0%", height: "2.4%", answer: "spoon", placeholder: "..." },
            { id: "p13_a1_3", top: "33.5%", left: "71.0%", width: "11.0%", height: "2.4%", answer: "spider", placeholder: "..." },
            { id: "p13_a2_1", top: "42.2%", left: "16.5%", width: "11.0%", height: "2.4%", answer: "grass", placeholder: "..." },
            { id: "p13_a2_2", top: "46.8%", left: "19.5%", width: "14.5%", height: "2.4%", answer: "flower", placeholder: "..." },
            { id: "p13_b1_1", top: "78.2%", left: "20.2%", width: "11.0%", height: "2.4%", answer: "star", placeholder: "..." },
            { id: "p13_b1_2", top: "78.2%", left: "47.0%", width: "11.0%", height: "2.4%", answer: "snake", placeholder: "..." },
            { id: "p13_b1_3", top: "78.2%", left: "71.0%", width: "11.0%", height: "2.4%", answer: "sky", placeholder: "..." },
            { id: "p13_b2_1", top: "86.8%", left: "21.5%", width: "13.0%", height: "2.4%", answer: "butterfly", placeholder: "..." },
            { id: "p13_b2_2", top: "91.2%", left: "19.5%", width: "13.0%", height: "2.4%", answer: "tree", placeholder: "..." }
        ]
    },
    14: {
        pageImg: "images/books/p1/14.jpg",
        title: "Weekly Assessment (C)",
        inputs: [
            { id: "p14_c1_1", top: "33.5%", left: "22.5%", width: "11.0%", height: "2.4%", answer: "flower", placeholder: "..." },
            { id: "p14_c1_2", top: "33.5%", left: "48.0%", width: "11.0%", height: "2.4%", answer: "bird", placeholder: "..." },
            { id: "p14_c1_3", top: "33.5%", left: "73.0%", width: "11.0%", height: "2.4%", answer: "tree", placeholder: "..." },
            { id: "p14_c2_1", top: "42.8%", left: "19.5%", width: "13.0%", height: "2.4%", answer: "spoon", placeholder: "..." },
            { id: "p14_c2_2", top: "48.5%", left: "24.5%", width: "13.0%", height: "2.4%", answer: "sky", placeholder: "..." }
        ]
    },
    15: {
        pageImg: "images/books/p1/15.jpg",
        title: "Lesson 3 — Shapes and Colors",
        inputs: [
            { id: "p15_a1_1", top: "36.8%", left: "11.2%", width: "12.0%", height: "2.4%", answer: "triangle", placeholder: "..." },
            { id: "p15_a1_2", top: "36.8%", left: "33.2%", width: "12.0%", height: "2.4%", answer: "square", placeholder: "..." },
            { id: "p15_a1_3", top: "36.8%", left: "55.2%", width: "12.0%", height: "2.4%", answer: "rectangle", placeholder: "..." },
            { id: "p15_a1_4", top: "36.8%", left: "76.5%", width: "12.0%", height: "2.4%", answer: "circle", placeholder: "..." },
            { id: "p15_a2_1", top: "57.2%", left: "19.2%", width: "11.0%", height: "2.4%", answer: "circle", placeholder: "..." },
            { id: "p15_a2_2", top: "57.2%", left: "49.5%", width: "11.0%", height: "2.4%", answer: "yellow", placeholder: "..." },
            { id: "p15_a2_3", top: "57.2%", left: "77.2%", width: "11.0%", height: "2.4%", answer: "square", placeholder: "..." },
            { id: "p15_hw_1", top: "75.0%", left: "35.5%", width: "48.0%", height: "2.5%", answer: "The square is blue.", placeholder: "The..." },
            { id: "p15_hw_2", top: "79.5%", left: "35.5%", width: "48.0%", height: "2.5%", answer: "The sun is yellow.", placeholder: "The..." },
            { id: "p15_hw_3", top: "84.0%", left: "35.5%", width: "48.0%", height: "2.5%", answer: "The grass is green.", placeholder: "The..." }
        ]
    },
    16: {
        pageImg: "images/books/p1/16.jpg",
        title: "Lesson 4 — Phonics (A)",
        inputs: [
            { id: "p16_a1_1", top: "30.2%", left: "26.5%", width: "10.5%", height: "2.3%", answer: "apple", placeholder: "..." },
            { id: "p16_a1_2", top: "30.2%", left: "75.5%", width: "10.5%", height: "2.3%", answer: "axe", placeholder: "..." },
            { id: "p16_a1_3", top: "37.5%", left: "26.5%", width: "10.5%", height: "2.3%", answer: "ant", placeholder: "..." },
            { id: "p16_a1_4", top: "37.5%", left: "75.5%", width: "10.5%", height: "2.3%", answer: "arrow", placeholder: "..." },
            { id: "p16_a2_1", top: "48.0%", left: "39.5%", width: "12.0%", height: "2.3%", answer: "ant", placeholder: "..." },
            { id: "p16_a2_2", top: "54.2%", left: "41.5%", width: "12.0%", height: "2.3%", answer: "arrow", placeholder: "..." },
            { id: "p16_a2_3", top: "60.5%", left: "41.5%", width: "12.0%", height: "2.3%", answer: "apple", placeholder: "..." },
            { id: "p16_a2_4", top: "66.8%", left: "39.5%", width: "12.0%", height: "2.3%", answer: "axe", placeholder: "..." },
            { id: "p16_hw_1", top: "91.2%", left: "11.5%", width: "10.5%", height: "2.3%", answer: "apple", placeholder: "..." },
            { id: "p16_hw_2", top: "91.2%", left: "35.5%", width: "10.5%", height: "2.3%", answer: "axe", placeholder: "..." },
            { id: "p16_hw_3", top: "91.2%", left: "59.0%", width: "10.5%", height: "2.3%", answer: "ant", placeholder: "..." },
            { id: "p16_hw_4", top: "91.2%", left: "82.5%", width: "10.5%", height: "2.3%", answer: "arrow", placeholder: "..." }
        ]
    },
    17: {
        pageImg: "images/books/p1/17.jpg",
        title: "Weekly Assessment (A) & (B)",
        inputs: [
            { id: "p17_a1_1", top: "33.5%", left: "11.2%", width: "11.0%", height: "2.4%", answer: "circle", placeholder: "..." },
            { id: "p17_a1_2", top: "33.5%", left: "44.0%", width: "11.0%", height: "2.4%", answer: "axe", placeholder: "..." },
            { id: "p17_a1_3", top: "33.5%", left: "76.5%", width: "11.0%", height: "2.4%", answer: "ant", placeholder: "..." },
            { id: "p17_a2_1", top: "43.5%", left: "19.5%", width: "12.0%", height: "2.4%", answer: "triangle", placeholder: "..." },
            { id: "p17_a2_2", top: "48.0%", left: "24.5%", width: "12.0%", height: "2.4%", answer: "blue", placeholder: "..." },
            { id: "p17_b1_1", top: "78.2%", left: "11.2%", width: "11.0%", height: "2.4%", answer: "square", placeholder: "..." },
            { id: "p17_b1_2", top: "78.2%", left: "44.0%", width: "11.0%", height: "2.4%", answer: "apple", placeholder: "..." },
            { id: "p17_b1_3", top: "78.2%", left: "76.5%", width: "11.0%", height: "2.4%", answer: "arrow", placeholder: "..." },
            { id: "p17_b2_1", top: "88.0%", left: "19.5%", width: "12.0%", height: "2.4%", answer: "circle", placeholder: "..." },
            { id: "p17_b2_2", top: "93.0%", left: "25.5%", width: "12.0%", height: "2.4%", answer: "yellow", placeholder: "..." }
        ]
    },
    18: {
        pageImg: "images/books/p1/18.jpg",
        title: "Weekly Assessment (C)",
        inputs: [
            { id: "p18_c1_1", top: "32.5%", left: "13.5%", width: "11.0%", height: "2.4%", answer: "axe", placeholder: "..." },
            { id: "p18_c1_2", top: "32.5%", left: "46.0%", width: "11.0%", height: "2.4%", answer: "apple", placeholder: "..." },
            { id: "p18_c1_3", top: "32.5%", left: "78.2%", width: "11.0%", height: "2.4%", answer: "triangle", placeholder: "..." },
            { id: "p18_c2_1", top: "41.5%", left: "19.5%", width: "12.0%", height: "2.4%", answer: "rectangle", placeholder: "..." },
            { id: "p18_c2_2", top: "46.0%", left: "23.5%", width: "12.0%", height: "2.4%", answer: "red", placeholder: "..." }
        ]
    },
    19: {
        pageImg: "images/books/p1/19.jpg",
        title: "Unit 3: Lesson 1 — Who's in My Family?",
        inputs: [
            { id: "p19_a1_1", top: "35.0%", left: "18.5%", width: "11.5%", height: "2.3%", answer: "brother", placeholder: "..." },
            { id: "p19_a1_2", top: "35.0%", left: "47.8%", width: "11.5%", height: "2.3%", answer: "grandfather", placeholder: "..." },
            { id: "p19_a1_3", top: "35.0%", left: "77.8%", width: "11.5%", height: "2.3%", answer: "sister", placeholder: "..." },
            { id: "p19_a1_4", top: "51.8%", left: "27.2%", width: "11.5%", height: "2.3%", answer: "father", placeholder: "..." },
            { id: "p19_a1_5", top: "51.8%", left: "60.5%", width: "11.5%", height: "2.3%", answer: "mother", placeholder: "..." },
            { id: "p19_a2_1", top: "74.2%", left: "22.0%", width: "42.0%", height: "2.4%", answer: "father", placeholder: "..." },
            { id: "p19_a2_2", top: "80.2%", left: "19.5%", width: "44.0%", height: "2.4%", answer: "brothers", placeholder: "..." },
            { id: "p19_a2_3", top: "85.8%", left: "22.0%", width: "42.0%", height: "2.4%", answer: "grandmother", placeholder: "..." },
            { id: "p19_a2_4", top: "91.5%", left: "19.5%", width: "44.0%", height: "2.4%", answer: "sisters", placeholder: "..." }
        ]
    },
    20: {
        pageImg: "images/books/p1/20.jpg",
        title: "Unit 3: Lesson 1 — Homework Activity",
        inputs: [
            { id: "p20_hw_1", top: "16.5%", left: "26.5%", width: "38.0%", height: "2.5%", answer: "This is my father.", placeholder: "This..." },
            { id: "p20_hw_2", top: "20.6%", left: "34.5%", width: "30.0%", height: "2.5%", answer: "This is my grandmother.", placeholder: "This..." },
            { id: "p20_hw_3", top: "24.5%", left: "29.5%", width: "35.0%", height: "2.5%", answer: "I have 2 sisters.", placeholder: "I..." }
        ]
    },
    21: {
        pageImg: "images/books/p1/21.jpg",
        title: "Lesson 2 — Phonics (N & P)",
        inputs: [
            { id: "p21_a1_1", top: "38.8%", left: "9.5%", width: "10.5%", height: "2.3%", answer: "nurse", placeholder: "..." },
            { id: "p21_a1_2", top: "38.8%", left: "27.5%", width: "10.5%", height: "2.3%", answer: "net", placeholder: "..." },
            { id: "p21_a1_3", top: "38.8%", left: "45.2%", width: "10.5%", height: "2.3%", answer: "panda", placeholder: "..." },
            { id: "p21_a1_4", top: "38.8%", left: "63.2%", width: "10.5%", height: "2.3%", answer: "parrot", placeholder: "..." },
            { id: "p21_a1_5", top: "38.8%", left: "80.5%", width: "10.5%", height: "2.3%", answer: "pencil", placeholder: "..." },
            { id: "p21_a2_1", top: "49.2%", left: "33.5%", width: "12.0%", height: "2.3%", answer: "pizza", placeholder: "..." },
            { id: "p21_a2_2", top: "54.0%", left: "34.5%", width: "12.0%", height: "2.3%", answer: "nose", placeholder: "..." },
            { id: "p21_a2_3", top: "58.8%", left: "35.5%", width: "12.0%", height: "2.3%", answer: "pin", placeholder: "..." },
            { id: "p21_a2_4", top: "63.5%", left: "37.5%", width: "12.0%", height: "2.3%", answer: "nut", placeholder: "..." },
            { id: "p21_a2_5", top: "68.2%", left: "34.5%", width: "12.0%", height: "2.3%", answer: "neck", placeholder: "..." },
            { id: "p21_hw_1", top: "91.5%", left: "12.5%", width: "10.5%", height: "2.3%", answer: "nut", placeholder: "..." },
            { id: "p21_hw_2", top: "91.5%", left: "33.5%", width: "10.5%", height: "2.3%", answer: "neck", placeholder: "..." },
            { id: "p21_hw_3", top: "91.5%", left: "55.5%", width: "10.5%", height: "2.3%", answer: "nose", placeholder: "..." },
            { id: "p21_hw_4", top: "91.5%", left: "77.5%", width: "10.5%", height: "2.3%", answer: "pizza", placeholder: "..." }
        ]
    },
    22: {
        pageImg: "images/books/p1/22.jpg",
        title: "Weekly Assessment (A) & (B)",
        inputs: [
            { id: "p22_a1_1", top: "31.8%", left: "21.0%", width: "11.0%", height: "2.4%", answer: "father", placeholder: "..." },
            { id: "p22_a1_2", top: "31.8%", left: "49.5%", width: "11.0%", height: "2.4%", answer: "pizza", placeholder: "..." },
            { id: "p22_a1_3", top: "31.8%", left: "77.5%", width: "11.0%", height: "2.4%", answer: "nurse", placeholder: "..." },
            { id: "p22_a2_1", top: "41.8%", left: "26.5%", width: "38.0%", height: "2.5%", answer: "Who is this?", placeholder: "Who..." },
            { id: "p22_a2_2", top: "45.8%", left: "32.5%", width: "32.0%", height: "2.5%", answer: "They are parents.", placeholder: "They..." },
            { id: "p22_b1_1", top: "77.0%", left: "21.0%", width: "11.0%", height: "2.4%", answer: "pencil", placeholder: "..." },
            { id: "p22_b1_2", top: "77.0%", left: "50.5%", width: "11.0%", height: "2.4%", answer: "grandfather", placeholder: "..." },
            { id: "p22_b1_3", top: "77.0%", left: "78.5%", width: "11.0%", height: "2.4%", answer: "nose", placeholder: "..." },
            { id: "p22_b2_1", top: "86.8%", left: "33.5%", width: "35.0%", height: "2.5%", answer: "I have 1 brother.", placeholder: "I..." },
            { id: "p22_b2_2", top: "90.5%", left: "34.5%", width: "34.0%", height: "2.5%", answer: "This is my father.", placeholder: "This..." }
        ]
    },
    23: {
        pageImg: "images/books/p1/23.jpg",
        title: "Weekly Assessment (C)",
        inputs: [
            { id: "p23_c1_1", top: "32.8%", left: "17.5%", width: "11.0%", height: "2.4%", answer: "sisters", placeholder: "..." },
            { id: "p23_c1_2", top: "32.8%", left: "48.0%", width: "11.0%", height: "2.4%", answer: "parrot", placeholder: "..." },
            { id: "p23_c1_3", top: "32.8%", left: "75.5%", width: "11.0%", height: "2.4%", answer: "neck", placeholder: "..." },
            { id: "p23_c2_1", top: "43.8%", left: "29.5%", width: "35.0%", height: "2.5%", answer: "I have 2 sisters.", placeholder: "I..." },
            { id: "p23_c2_2", top: "47.8%", left: "39.5%", width: "30.0%", height: "2.5%", answer: "This is my grandfather.", placeholder: "This..." }
        ]
    },
    24: {
        pageImg: "images/books/p1/24.jpg",
        title: "Monthly Revision",
        inputs: [
            { id: "p24_a1", top: "19.8%", left: "24.5%", width: "4.2%", height: "2.4%", answer: "e", placeholder: "?" },
            { id: "p24_a2", top: "24.8%", left: "24.5%", width: "4.2%", height: "2.4%", answer: "d", placeholder: "?" },
            { id: "p24_a3", top: "29.8%", left: "28.5%", width: "4.2%", height: "2.4%", answer: "a", placeholder: "?" },
            { id: "p24_a4", top: "34.8%", left: "25.5%", width: "4.2%", height: "2.4%", answer: "b", placeholder: "?" },
            { id: "p24_a5", top: "39.8%", left: "36.5%", width: "4.2%", height: "2.4%", answer: "c", placeholder: "?" },
            { id: "p24_b1", top: "62.8%", left: "18.5%", width: "11.5%", height: "2.3%", answer: "grandmother", placeholder: "..." },
            { id: "p24_b2", top: "62.8%", left: "46.8%", width: "11.5%", height: "2.3%", answer: "teacher", placeholder: "..." },
            { id: "p24_b3", top: "62.8%", left: "71.8%", width: "11.5%", height: "2.3%", answer: "flower", placeholder: "..." },
            { id: "p24_b4", top: "76.8%", left: "18.5%", width: "11.5%", height: "2.3%", answer: "parrot", placeholder: "..." },
            { id: "p24_b5", top: "76.8%", left: "46.8%", width: "11.5%", height: "2.3%", answer: "mother", placeholder: "..." },
            { id: "p24_b6", top: "76.8%", left: "71.8%", width: "11.5%", height: "2.3%", answer: "triangle", placeholder: "..." },
            { id: "p24_b7", top: "90.8%", left: "18.5%", width: "11.5%", height: "2.3%", answer: "bird", placeholder: "..." },
            { id: "p24_b8", top: "90.8%", left: "46.8%", width: "11.5%", height: "2.3%", answer: "butterfly", placeholder: "..." },
            { id: "p24_b9", top: "90.8%", left: "71.8%", width: "11.5%", height: "2.3%", answer: "hello", placeholder: "..." }
        ]
    },
    25: {
        pageImg: "images/books/p1/25.jpg",
        title: "Monthly Revision — Missing Sound & Complete",
        inputs: [
            { id: "p25_c1", top: "16.5%", left: "16.5%", width: "4.2%", height: "2.3%", answer: "p", placeholder: "?" },
            { id: "p25_c2", top: "16.5%", left: "44.5%", width: "4.2%", height: "2.3%", answer: "n", placeholder: "?" },
            { id: "p25_c3", top: "16.5%", left: "73.0%", width: "4.2%", height: "2.3%", answer: "a", placeholder: "?" },
            { id: "p25_c4", top: "25.5%", left: "16.5%", width: "4.2%", height: "2.3%", answer: "a", placeholder: "?" },
            { id: "p25_c5", top: "25.5%", left: "45.5%", width: "4.2%", height: "2.3%", answer: "a", placeholder: "?" },
            { id: "p25_c6", top: "25.5%", left: "73.0%", width: "4.2%", height: "2.3%", answer: "a", placeholder: "?" },
            { id: "p25_c7", top: "34.8%", left: "16.5%", width: "4.2%", height: "2.3%", answer: "s", placeholder: "?" },
            { id: "p25_c8", top: "34.8%", left: "44.5%", width: "4.2%", height: "2.3%", answer: "s", placeholder: "?" },
            { id: "p25_c9", top: "34.8%", left: "73.0%", width: "4.2%", height: "2.3%", answer: "t", placeholder: "?" },
            { id: "p25_c10", top: "44.0%", left: "16.5%", width: "4.2%", height: "2.3%", answer: "p", placeholder: "?" },
            { id: "p25_c11", top: "44.0%", left: "45.5%", width: "4.2%", height: "2.3%", answer: "s", placeholder: "?" },
            { id: "p25_c12", top: "44.0%", left: "73.0%", width: "4.2%", height: "2.3%", answer: "n", placeholder: "?" },
            { id: "p25_c13", top: "53.0%", left: "17.5%", width: "4.2%", height: "2.3%", answer: "s", placeholder: "?" },
            { id: "p25_c14", top: "53.0%", left: "44.5%", width: "4.2%", height: "2.3%", answer: "s", placeholder: "?" },
            { id: "p25_c15", top: "53.0%", left: "74.0%", width: "4.2%", height: "2.3%", answer: "i", placeholder: "?" },
            { id: "p25_c16", top: "62.2%", left: "17.5%", width: "4.2%", height: "2.3%", answer: "i", placeholder: "?" },
            { id: "p25_c17", top: "62.2%", left: "45.5%", width: "4.2%", height: "2.3%", answer: "i", placeholder: "?" },
            { id: "p25_c18", top: "62.2%", left: "71.5%", width: "4.2%", height: "2.3%", answer: "i", placeholder: "?" },
            { id: "p25_d1", top: "72.0%", left: "22.5%", width: "13.0%", height: "2.3%", answer: "tiger", placeholder: "..." },
            { id: "p25_d2", top: "76.5%", left: "24.5%", width: "13.0%", height: "2.3%", answer: "board", placeholder: "..." },
            { id: "p25_d3", top: "81.0%", left: "18.5%", width: "13.0%", height: "2.3%", answer: "sky", placeholder: "..." },
            { id: "p25_d4", top: "85.5%", left: "22.5%", width: "13.0%", height: "2.3%", answer: "mother", placeholder: "..." },
            { id: "p25_d5", top: "90.0%", left: "21.0%", width: "13.0%", height: "2.3%", answer: "parrot", placeholder: "..." }
        ]
    },
    26: {
        pageImg: "images/books/p1/26.jpg",
        title: "Monthly Revision — Look & Write",
        inputs: [
            { id: "p26_d6", top: "8.5%", left: "23.5%", width: "13.0%", height: "2.3%", answer: "father", placeholder: "..." },
            { id: "p26_d7", top: "13.5%", left: "19.5%", width: "13.0%", height: "2.3%", answer: "flower", placeholder: "..." },
            { id: "p26_d8", top: "18.5%", left: "24.5%", width: "13.0%", height: "2.3%", answer: "bag", placeholder: "..." },
            { id: "p26_d9", top: "23.2%", left: "30.5%", width: "13.0%", height: "2.3%", answer: "red", placeholder: "..." },
            { id: "p26_d10", top: "28.0%", left: "23.5%", width: "13.0%", height: "2.3%", answer: "teacher", placeholder: "..." },
            { id: "p26_e1", top: "45.8%", left: "15.5%", width: "12.0%", height: "2.3%", answer: "table", placeholder: "..." },
            { id: "p26_e2", top: "45.8%", left: "43.5%", width: "12.0%", height: "2.3%", answer: "net", placeholder: "..." },
            { id: "p26_e3", top: "45.8%", left: "71.5%", width: "12.0%", height: "2.3%", answer: "square", placeholder: "..." },
            { id: "p26_e4", top: "56.5%", left: "15.5%", width: "12.0%", height: "2.3%", answer: "book", placeholder: "..." },
            { id: "p26_e5", top: "56.5%", left: "43.5%", width: "12.0%", height: "2.3%", answer: "chair", placeholder: "..." },
            { id: "p26_e6", top: "56.5%", left: "71.5%", width: "12.0%", height: "2.3%", answer: "sisters", placeholder: "..." },
            { id: "p26_e7", top: "67.5%", left: "15.5%", width: "12.0%", height: "2.3%", answer: "grandfather", placeholder: "..." },
            { id: "p26_e8", top: "67.5%", left: "43.5%", width: "12.0%", height: "2.3%", answer: "desk", placeholder: "..." },
            { id: "p26_e9", top: "67.5%", left: "71.5%", width: "12.0%", height: "2.3%", answer: "rectangle", placeholder: "..." },
            { id: "p26_e10", top: "78.5%", left: "16.5%", width: "12.0%", height: "2.3%", answer: "play", placeholder: "..." },
            { id: "p26_e11", top: "78.5%", left: "43.5%", width: "12.0%", height: "2.3%", answer: "grass", placeholder: "..." },
            { id: "p26_e12", top: "78.5%", left: "71.5%", width: "12.0%", height: "2.3%", answer: "butterfly", placeholder: "..." },
            { id: "p26_f1", top: "89.0%", left: "35.5%", width: "48.0%", height: "2.5%", answer: "Open your books.", placeholder: "Open..." },
            { id: "p26_f2", top: "92.8%", left: "35.5%", width: "48.0%", height: "2.5%", answer: "The flower is red.", placeholder: "The..." }
        ]
    },
    27: {
        pageImg: "images/books/p1/27.jpg",
        title: "Monthly Revision — Reorder Sentences",
        inputs: [
            { id: "p27_f3", top: "7.2%", left: "28.5%", width: "55.0%", height: "2.5%", answer: "This is a bird.", placeholder: "This..." },
            { id: "p27_f4", top: "11.2%", left: "32.5%", width: "51.0%", height: "2.5%", answer: "I can see the sky.", placeholder: "I..." },
            { id: "p27_f5", top: "15.2%", left: "30.5%", width: "53.0%", height: "2.5%", answer: "The sky is blue.", placeholder: "The..." },
            { id: "p27_f6", top: "19.2%", left: "32.5%", width: "51.0%", height: "2.5%", answer: "The sun is yellow.", placeholder: "The..." },
            { id: "p27_f7", top: "23.2%", left: "31.5%", width: "52.0%", height: "2.5%", answer: "This is a square.", placeholder: "This..." },
            { id: "p27_f8", top: "27.2%", left: "40.5%", width: "43.0%", height: "2.5%", answer: "The triangle is yellow.", placeholder: "The..." },
            { id: "p27_f9", top: "31.2%", left: "29.5%", width: "54.0%", height: "2.5%", answer: "This is a circle.", placeholder: "This..." },
            { id: "p27_f10", top: "35.2%", left: "32.5%", width: "51.0%", height: "2.5%", answer: "I can see a tree.", placeholder: "I..." }
        ]
    },
    28: {
        pageImg: "images/books/p1/28.jpg",
        title: "Lesson 3 — Numbers from 1 to 5",
        inputs: [
            { id: "p28_a1_1", top: "27.5%", left: "29.5%", width: "4.2%", height: "2.3%", answer: "b", placeholder: "?" },
            { id: "p28_a1_2", top: "31.2%", left: "29.5%", width: "4.2%", height: "2.3%", answer: "a", placeholder: "?" },
            { id: "p28_a1_3", top: "35.5%", left: "29.5%", width: "4.2%", height: "2.3%", answer: "d", placeholder: "?" },
            { id: "p28_a1_4", top: "39.8%", left: "29.5%", width: "4.2%", height: "2.3%", answer: "c", placeholder: "?" },
            { id: "p28_a2_1", top: "52.0%", left: "21.0%", width: "10.0%", height: "2.3%", answer: "2", placeholder: "..." },
            { id: "p28_a2_2", top: "59.5%", left: "21.0%", width: "10.0%", height: "2.3%", answer: "4", placeholder: "..." },
            { id: "p28_a2_3", top: "66.8%", left: "21.0%", width: "10.0%", height: "2.3%", answer: "3", placeholder: "..." },
            { id: "p28_hw_1", top: "81.0%", left: "21.0%", width: "10.0%", height: "2.3%", answer: "4", placeholder: "..." },
            { id: "p28_hw_2", top: "85.0%", left: "22.0%", width: "10.0%", height: "2.3%", answer: "4", placeholder: "..." },
            { id: "p28_hw_3", top: "89.0%", left: "21.0%", width: "10.0%", height: "2.3%", answer: "2", placeholder: "..." },
            { id: "p28_hw_4", top: "92.8%", left: "19.5%", width: "10.0%", height: "2.3%", answer: "1", placeholder: "..." }
        ]
    },
    29: {
        pageImg: "images/books/p1/29.jpg",
        title: "Lesson 4 — Phonics (H & D)",
        inputs: [
            { id: "p29_a1_1", top: "30.2%", left: "29.5%", width: "10.5%", height: "2.3%", answer: "hat", placeholder: "..." },
            { id: "p29_a1_2", top: "30.2%", left: "72.5%", width: "10.5%", height: "2.3%", answer: "dog", placeholder: "..." },
            { id: "p29_a1_3", top: "39.5%", left: "29.5%", width: "10.5%", height: "2.3%", answer: "horse", placeholder: "..." },
            { id: "p29_a1_4", top: "39.5%", left: "72.5%", width: "10.5%", height: "2.3%", answer: "duck", placeholder: "..." },
            { id: "p29_a2_1", top: "57.2%", left: "19.5%", width: "12.0%", height: "2.3%", answer: "house", placeholder: "..." },
            { id: "p29_a2_2", top: "57.2%", left: "50.5%", width: "12.0%", height: "2.3%", answer: "door", placeholder: "..." },
            { id: "p29_a2_3", top: "57.2%", left: "78.5%", width: "11.0%", height: "2.3%", answer: "hair", placeholder: "..." },
            { id: "p29_a2_4", top: "70.0%", left: "29.5%", width: "12.0%", height: "2.3%", answer: "drum", placeholder: "..." },
            { id: "p29_a2_5", top: "70.0%", left: "68.5%", width: "12.0%", height: "2.3%", answer: "hands", placeholder: "..." },
            { id: "p29_hw_1", top: "91.5%", left: "10.5%", width: "10.5%", height: "2.3%", answer: "doll", placeholder: "..." },
            { id: "p29_hw_2", top: "91.5%", left: "28.5%", width: "10.5%", height: "2.3%", answer: "horse", placeholder: "..." },
            { id: "p29_hw_3", top: "91.5%", left: "45.5%", width: "10.5%", height: "2.3%", answer: "hat", placeholder: "..." },
            { id: "p29_hw_4", top: "91.5%", left: "63.0%", width: "10.5%", height: "2.3%", answer: "door", placeholder: "..." },
            { id: "p29_hw_5", top: "91.5%", left: "80.5%", width: "10.5%", height: "2.3%", answer: "hands", placeholder: "..." }
        ]
    },
    30: {
        pageImg: "images/books/p1/30.jpg",
        title: "Weekly Assessment (A) & (B)",
        inputs: [
            { id: "p30_a1_1", top: "28.5%", left: "23.5%", width: "11.0%", height: "2.3%", answer: "hat", placeholder: "..." },
            { id: "p30_a1_2", top: "28.5%", left: "50.0%", width: "11.0%", height: "2.3%", answer: "door", placeholder: "..." },
            { id: "p30_a1_3", top: "28.5%", left: "81.5%", width: "11.0%", height: "2.3%", answer: "hands", placeholder: "..." },
            { id: "p30_a2_1", top: "38.5%", left: "40.5%", width: "15.0%", height: "2.3%", answer: "1", placeholder: "..." },
            { id: "p30_a2_2", top: "45.0%", left: "40.5%", width: "10.0%", height: "2.3%", answer: "3", placeholder: "..." },
            { id: "p30_b1_1", top: "73.5%", left: "24.5%", width: "11.0%", height: "2.3%", answer: "duck", placeholder: "..." },
            { id: "p30_b1_2", top: "73.5%", left: "52.8%", width: "11.0%", height: "2.3%", answer: "house", placeholder: "..." },
            { id: "p30_b1_3", top: "73.5%", left: "82.5%", width: "11.0%", height: "2.3%", answer: "dog", placeholder: "..." },
            { id: "p30_b2_1", top: "83.2%", left: "41.5%", width: "9.0%", height: "2.3%", answer: "2", placeholder: "..." },
            { id: "p30_b2_2", top: "89.5%", left: "41.5%", width: "9.0%", height: "2.3%", answer: "4", placeholder: "..." }
        ]
    }
};

let dbPath = 'C:/Users/Mr Mahmoud Elziadi/Documents/GitHub/Englishtoon/js/p1_book_data.js';
let content = fs.readFileSync(dbPath, 'utf8');

// Parse existing DB object using eval context safely
let dbObj = eval(content.replace('const P1_OVERLAY_DATABASE = ', '').replace(/;$/, ''));

// Merge 11 to 30
Object.assign(dbObj, p11_to_30);

let newContent = `/**
 * English Toon — Primary 1 Book Overlay Database (Pages 1 to 72)
 * قاعدة بيانات شاملة ومستجيبة لكل الـ 72 صفحة لكتاب الصف الأول الابتدائي
 */

const P1_OVERLAY_DATABASE = ${JSON.stringify(dbObj, null, 4)};
`;

fs.writeFileSync(dbPath, newContent, 'utf8');
console.log('Successfully updated pages 11 through 30 in p1_book_data.js!');
