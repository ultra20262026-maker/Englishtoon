/* English Toon — Primary 2 Interactive Book Overlay Database */
(function () {
  const DB = {};
  const image = n => `images/books/p2/${n}.jpg`;
  const f = (id, top, left, answer, width = '15%', height = '2.45%', placeholder = '...') => ({ id, top, left, width, height, answer, placeholder });
  const add = (page, title, inputs) => { DB[page] = { pageImg: image(page), title, inputs }; };
  const row = (page, prefix, top, answers, lefts = ['12%','34%','56%','78%'], width = '15%') => answers.map((answer, i) => f(`p${page}_${prefix}_${i + 1}`, top, lefts[i] || `${12 + i * 17}%`, answer, width));
  const lines = (page, prefix, startTop, answers, left = '18%', width = '64%', gap = 6.2) => answers.map((answer, i) => f(`p${page}_${prefix}_${i + 1}`, `${startTop + i * gap}%`, left, answer, width, '2.65%'));
  const free = (page, prefix, top, left, width = '16%', placeholder = 'اكتب إجابتك') => f(`p${page}_${prefix}`, top, left, '__free__', width, '2.45%', placeholder);

  for (let page = 1; page <= 72; page++) add(page, `Primary 2 — Page ${page}`, []);

  DB[1].title = 'Primary 2 First Term — غلاف الكتاب';
  DB[1].inputs = [
    f('p2_name', '84.2%', '26%', '__free__', '52%', '2.8%', 'اكتب اسمك هنا...'),
    f('p2_class', '87.8%', '26%', '__free__', '52%', '2.8%', 'اكتب فصلك...'),
    f('p2_school', '91.4%', '26%', '__free__', '52%', '2.8%', 'اكتب مدرستك...')
  ];

  DB[4].title = 'Unit 1 — Lesson 1: Classroom Greetings';
  DB[4].inputs = [
    ...row(4, 'a1', '52.4%', ['goodbye','desk','teacher','student'], ['11%','31%','52%','74%'], '16%'),
    free(4, 'home_1', '82.0%', '31%', '14%', 'اسمك'),
    f('p4_home_2', '82.0%', '47%', 'chair', '14%'), f('p4_home_3', '85.4%', '27%', 'desk', '14%'), f('p4_home_4', '85.4%', '50%', 'teacher', '14%')
  ];

  DB[5].title = 'Unit 1 — Lesson 2: Around the Classroom';
  DB[5].inputs = [
    ...row(5, 'listen', '42.2%', ['fan','cat','hat','man'], ['12%','34%','56%','78%'], '12%'),
    ...row(5, 'circle', '70.5%', ['man','map','cap','hat'], ['10%','34%','61%','10%'], '12%'),
    f('p5_circle_5', '86.5%', '36%', 'student', '14%'), f('p5_circle_6', '86.5%', '70%', 'desk', '14%')
  ];

  DB[6].title = 'Unit 1 — Lesson 2: Phonics a';
  DB[6].inputs = [
    ...row(6, 'sound', '39%', ['a','a','a','a'], ['17%','38%','60%','80%'], '6%'),
    ...row(6, 'word', '56%', ['cat','fan','hat','man'], ['13%','35%','57%','79%'], '15%'),
    ...row(6, 'home', '89%', ['cat','fan','hat','man'], ['12%','34%','56%','78%'], '15%')
  ];

  DB[7].title = 'Weekly Assessment A and B — Unit 1';
  DB[7].inputs = [
    ...row(7, 'a', '32%', ['fan','cat'], ['30%','65%'], '16%'),
    ...row(7, 'b', '77%', ['hat','man'], ['30%','65%'], '16%'),
    ...lines(7, 'sent', 49, ['This is a fan.','I see a cat.'], '21%', '57%', 7.2)
  ];

  DB[8].title = 'Weekly Assessment C — Unit 1';
  DB[8].inputs = [
    ...row(8, 'c', '26%', ['hat','man'], ['30%','65%'], '16%'),
    ...lines(8, 'sent', 48, ['This is a hat.','I see a man.'], '21%', '57%', 7.2)
  ];

  DB[9].title = 'Unit 1 Review';
  DB[9].inputs = [
    ...row(9, 'review', '38%', ['fan','cat','hat','man'], ['12%','34%','56%','78%'], '15%'),
    ...lines(9, 'sent', 68, ['Hello. My name is Ahmed.','Goodbye, teacher.'], '21%', '57%', 7.2)
  ];

  DB[10].title = 'Unit 2 — Lesson 1: Shapes and Colors';
  DB[10].inputs = [
    ...row(10, 'words', '50%', ['circle','square','triangle'], ['20%','44%','68%'], '17%'),
    ...row(10, 'colors', '72%', ['red','blue','green'], ['20%','44%','68%'], '17%')
  ];

  DB[11].title = 'Unit 2 — Lesson 1: Shapes and Colors';
  DB[11].inputs = [
    ...row(11, 'look', '49%', ['circle','square','triangle','rectangle'], ['11%','31%','52%','74%'], '16%'),
    ...row(11, 'complete', '82%', ['red','blue','green'], ['22%','47%','72%'], '17%')
  ];

  DB[12].title = 'Unit 2 — Lesson 2: Phonics o';
  DB[12].inputs = [
    ...row(12, 'sound', '38%', ['o','o','o','o'], ['17%','38%','60%','80%'], '6%'),
    ...row(12, 'word', '56%', ['dog','fox','box','top'], ['13%','35%','57%','79%'], '15%'),
    ...row(12, 'home', '89%', ['dog','fox','box','top'], ['12%','34%','56%','78%'], '15%')
  ];

  DB[13].title = 'Unit 2 — Lesson 3: More Shapes';
  DB[13].inputs = [
    ...row(13, 'a', '48%', ['circle','triangle','square','rectangle'], ['11%','31%','52%','74%'], '16%'),
    ...lines(13, 'sent', 75, ['This is a red circle.','This is a green triangle.'], '20%', '60%', 7)
  ];

  DB[14].title = 'Unit 2 — Lesson 4: Phonics u';
  DB[14].inputs = [
    ...row(14, 'sound', '38%', ['u','u','u','u'], ['17%','38%','60%','80%'], '6%'),
    ...row(14, 'word', '56%', ['sun','cup','bun','bus'], ['13%','35%','57%','79%'], '15%'),
    ...row(14, 'home', '89%', ['sun','cup','bun','bus'], ['12%','34%','56%','78%'], '15%')
  ];

  DB[15].title = 'Unit 2 Review';
  DB[15].inputs = [
    ...row(15, 'review', '42%', ['box','bun','cup'], ['20%','44%','68%'], '17%'),
    ...row(15, 'writing', '72%', ['dog','sun','box','fox','bun','cup'], ['10%','25%','40%','55%','70%','85%'], '11%')
  ];

  DB[16].title = 'Unit 2 — Lesson 2: Shapes and Colors Around Us';
  DB[16].inputs = [
    ...row(16, 'listen', '39%', ['box','bun','cup'], ['18%','45%','72%'], '17%'),
    ...row(16, 'sound', '49%', ['o','u','o','o','u','u'], ['12%','27%','42%','57%','72%','87%'], '6%'),
    ...row(16, 'home', '80%', ['__free__','__free__','__free__','__free__'], ['13%','35%','57%','79%'], '15%')
  ];

  DB[17].title = 'Weekly Assessment A and B — Unit 2';
  DB[17].inputs = [
    ...row(17, 'look_a', '38%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%'),
    ...lines(17, 'reorder', 58, ['This is a green triangle.','I see a dog.'], '20%', '60%', 7.2),
    ...row(17, 'look_b', '88%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%')
  ];

  DB[18].title = 'Weekly Assessment C — Unit 2';
  DB[18].inputs = [
    ...lines(18, 'reorder_a', 25, ['This is a square.','I have a blue cup.'], '20%', '60%', 7.2),
    ...row(18, 'look', '58%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%'),
    ...lines(18, 'reorder_b', 76, ['This is a red circle.','I see a fox.'], '20%', '60%', 7.2)
  ];

  DB[19].title = 'Unit 2 — Lesson 3: Numbers and Counting';
  DB[19].inputs = [...row(19, 'match', '57%', ['1','5','1','4','2','3'], ['21%','21%','21%','65%','65%','65%'], '8%')];

  DB[20].title = 'Unit 2 — Lesson 3: Numbers and Counting';
  DB[20].inputs = [
    f('p20_a1','48%','31%','__free__','15%'), f('p20_a2','48%','75%','__free__','15%'),
    ...row(20, 'home', '73%', ['__free__','__free__','__free__','__free__'], ['13%','35%','57%','79%'], '15%')
  ];

  DB[21].title = 'Unit 2 — Lesson 4: Let’s Count Together';
  DB[21].inputs = [
    ...row(21, 'listen', '39%', ['cake','gate','lake'], ['20%','45%','70%'], '17%'),
    ...row(21, 'unscramble', '51%', ['grapes','cave','cake','snake'], ['11%','32%','53%','74%'], '16%'),
    ...lines(21, 'reorder', 76, ['How many pencils are there?','There is one cat.','There are four notebooks.'], '18%', '64%', 5.5)
  ];

  DB[22].title = 'Weekly Assessment A and B — Numbers';
  DB[22].inputs = [
    ...row(22, 'look_a', '39%', ['__free__','__free__'], ['30%','65%'], '20%'),
    ...row(22, 'count_a', '53%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%'),
    ...row(22, 'look_b', '75%', ['__free__','__free__'], ['30%','65%'], '20%'),
    ...row(22, 'count_b', '89%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%')
  ];

  DB[23].title = 'Weekly Assessment C — Numbers';
  DB[23].inputs = [
    ...row(23, 'look', '42%', ['__free__','__free__'], ['30%','65%'], '20%'),
    ...row(23, 'count', '60%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%')
  ];

  DB[24].title = 'Unit 3 — Lesson 1: Classroom Actions';
  DB[24].inputs = [
    ...row(24, 'look', '49%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%'),
    ...row(24, 'match', '80%', ['1','2','3','4'], ['26%','44%','62%','80%'], '8%')
  ];

  DB[25].title = 'Unit 3 — Lesson 1: Homework';
  DB[25].inputs = lines(25, 'reorder', 37, ['I clean my class.','I draw a picture.','I sing a song.','I write in my notebook.','I read my book.'], '17%', '66%', 11.1);

  DB[26].title = 'Unit 3 — Lesson 2: Class Routines';
  DB[26].inputs = row(26, 'match', '57%', ['1','2','3','4'], ['35%','50%','65%','80%'], '8%');

  DB[27].title = 'Unit 3 — Lesson 2: Class Routines';
  DB[27].inputs = [
    ...lines(27, 'choose', 44, ['Open','Raise','Draw'], '35%', '28%', 7.2),
    ...row(27, 'home', '80%', ['clap','draw a circle','open your book','sit down'], ['12%','34%','56%','78%'], '15%')
  ];

  DB[28].title = 'Weekly Assessment A and B — Unit 3';
  DB[28].inputs = [
    f('p28_a1','37%','21%','Stand','18%'), f('p28_a2','37%','66%','singing','18%'),
    ...lines(28, 'reorder_a', 53, ['I draw a circle.','Raise your hand.','Close your book.'], '18%', '64%', 6.1),
    f('p28_b1','89%','21%','Open','18%'), f('p28_b2','89%','66%','reading','18%')
  ];

  DB[29].title = 'Weekly Assessment C — Unit 3';
  DB[29].inputs = [
    ...lines(29, 'reorder_a', 31, ['I draw a picture.','Clap your hands.','Clean your desk.'], '18%', '64%', 6.1),
    f('p29_c1','67%','23%','cleaning','18%'), f('p29_c2','67%','66%','draw','18%'),
    ...lines(29, 'reorder_b', 81, ['Open your book.','Write your name.','Sing a song.'], '18%', '64%', 5.2)
  ];

  DB[30].title = 'Unit 3 — Lesson 3: All About Our Classroom';
  DB[30].inputs = [
    ...lines(30, 'choose', 38, ['draw','cleaning','write'], '31%', '38%', 6.2),
    ...row(30, 'complete', '64%', ['write','raise','play'], ['22%','47%','72%'], '17%'),
    ...row(30, 'home', '88%', ['__free__','__free__','__free__','__free__'], ['13%','35%','57%','79%'], '15%')
  ];

  DB[31].title = 'Unit 3 — Lesson 4: Phonics e';
  DB[31].inputs = [
    ...row(31, 'sound', '39%', ['e','e','e','e'], ['17%','38%','60%','80%'], '6%'),
    ...row(31, 'word', '56%', ['hen','pen','ten','bed'], ['13%','35%','57%','79%'], '15%'),
    ...row(31, 'home', '89%', ['hen','pen','ten','bed'], ['12%','34%','56%','78%'], '15%')
  ];

  DB[32].title = 'Unit 3 — Lesson 5: Phonics i';
  DB[32].inputs = [
    ...row(32, 'sound', '39%', ['i','i','i','i'], ['17%','38%','60%','80%'], '6%'),
    ...row(32, 'word', '56%', ['fig','bin','zip','tin'], ['13%','35%','57%','79%'], '15%'),
    ...row(32, 'home', '89%', ['fig','bin','zip','tin'], ['12%','34%','56%','78%'], '15%')
  ];

  DB[33].title = 'Weekly Assessment A — Unit 3';
  DB[33].inputs = [
    ...row(33, 'listen', '35%', ['hen','bin','ten','pen'], ['12%','34%','56%','78%'], '15%'),
    ...lines(33, 'reorder', 63, ['I write in my notebook.','Open your book.'], '20%', '60%', 7.2)
  ];

  DB[34].title = 'Weekly Assessment B — Unit 3';
  DB[34].inputs = [
    ...row(34, 'listen', '35%', ['fig','map'], ['30%','65%'], '16%'),
    ...lines(34, 'reorder', 63, ['Raise your hand.','Clean your desk.'], '20%', '60%', 7.2)
  ];

  DB[35].title = 'Weekly Assessment C — Unit 3';
  DB[35].inputs = [
    ...row(35, 'listen', '35%', ['cat','ten'], ['30%','65%'], '16%'),
    ...lines(35, 'reorder', 63, ['Clap your hands.','I draw a picture.'], '20%', '60%', 7.2)
  ];

  DB[36].title = 'Unit 4 — Lesson 1: My Face';
  DB[36].inputs = [
    ...row(36, 'look', '49%', ['nose','eyes','ears','mouth'], ['11%','31%','52%','74%'], '16%'),
    ...row(36, 'complete', '82%', ['eyes','nose','mouth'], ['22%','47%','72%'], '17%')
  ];

  DB[37].title = 'Unit 4 — Lesson 2: Phonics u_e';
  DB[37].inputs = [
    ...row(37, 'listen', '39%', ['nose','glue','cube','rose'], ['12%','34%','56%','78%'], '15%'),
    ...row(37, 'sound', '57%', ['u_e','u_e','u_e','u_e'], ['12%','34%','56%','78%'], '10%')
  ];

  DB[38].title = 'Unit 4 — Lesson 3: My Body';
  DB[38].inputs = [
    ...row(38, 'look', '48%', ['hands','legs','arms','feet'], ['11%','31%','52%','74%'], '16%'),
    ...row(38, 'complete', '80%', ['hands','feet','eyes'], ['22%','47%','72%'], '17%')
  ];

  DB[39].title = 'Unit 4 — Lesson 4: Phonics th';
  DB[39].inputs = [
    ...row(39, 'listen', '46%', ['teeth','thick','thunder'], ['20%','45%','70%'], '17%'),
    ...row(39, 'home', '82%', ['teeth','thick','thunder'], ['20%','45%','70%'], '17%')
  ];

  DB[40].title = 'Weekly Assessment A — Unit 4';
  DB[40].inputs = [...row(40, 'listen', '38%', ['rose','cube'], ['30%','65%'], '16%'), ...row(40, 'look', '75%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%')];
  DB[41].title = 'Weekly Assessment B — Unit 4';
  DB[41].inputs = [...row(41, 'listen', '38%', ['nose','glue'], ['30%','65%'], '16%'), ...row(41, 'look', '75%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%')];
  DB[42].title = 'Weekly Assessment C — Unit 4';
  DB[42].inputs = [...row(42, 'listen', '38%', ['cube','nose'], ['30%','65%'], '16%'), ...row(42, 'look', '75%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%')];

  DB[43].title = 'Unit 4 Review';
  DB[43].inputs = [
    ...row(43, 'review', '42%', ['nose','glue','cube','rose'], ['12%','34%','56%','78%'], '15%'),
    ...row(43, 'body', '76%', ['teeth','thick','thunder'], ['20%','45%','70%'], '17%')
  ];

  DB[44].title = 'Unit 5 — Lesson 1: My Family';
  DB[44].inputs = [
    ...row(44, 'look', '49%', ['mother','father','brother','sister'], ['11%','31%','52%','74%'], '16%'),
    ...row(44, 'complete', '82%', ['mother','father','brother'], ['22%','47%','72%'], '17%')
  ];

  DB[45].title = 'Unit 5 — Lesson 2: Big and Small';
  DB[45].inputs = [
    ...row(45, 'look', '49%', ['fat','thin','big','small'], ['11%','31%','52%','74%'], '16%'),
    ...row(45, 'complete', '82%', ['fat','thin','thick'], ['22%','47%','72%'], '17%')
  ];

  DB[46].title = 'Unit 5 — Lesson 3: Family Actions';
  DB[46].inputs = [
    ...row(46, 'choose', '43%', ['next to','are'], ['27%','65%'], '18%'),
    ...row(46, 'complete', '73%', ['help','watch','clean','cook'], ['11%','31%','52%','74%'], '16%')
  ];

  DB[47].title = 'Unit 5 — Lesson 4: At Home';
  DB[47].inputs = [
    ...row(47, 'preposition', '39%', ['on','in'], ['30%','65%'], '16%'),
    ...lines(47, 'sent', 58, ['Where is the table?','The ball is on the table.','I eat in the dining room.','Where are the flowers?'], '18%', '64%', 5.8)
  ];

  DB[48].title = 'Unit 5 — Lesson 4: At Home';
  DB[48].inputs = [
    ...row(48, 'complete', '54%', ['lamp','next to','room'], ['20%','45%','70%'], '17%'),
    ...row(48, 'home', '87%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%')
  ];

  DB[49].title = 'Weekly Assessment A and B — Home';
  DB[49].inputs = lines(49, 'reorder', 31, ['The flowers are in the garden.','There is a couch in the living room.','Where is the bed?','The lamp is on the table.'], '17%', '66%', 12.1);
  DB[50].title = 'Weekly Assessment C — Home';
  DB[50].inputs = lines(50, 'reorder', 27, ['There is a bed in the bedroom.','There is a couch in the living room.','There is a ball under the table.','There is a table in the kitchen.','The cat is in the box.'], '17%', '66%', 11.1);

  DB[51].title = 'Unit 5 — Lesson 5: Phonics th';
  DB[51].inputs = [...row(51, 'sound', '47%', ['t','t','o','h'], ['18%','38%','58%','78%'], '6%'), ...row(51, 'home', '84%', ['mother','father','brother','that'], ['12%','34%','56%','78%'], '15%')];
  DB[52].title = 'Unit 5 — Lesson 6: Phonics sh';
  DB[52].inputs = [...row(52, 'sound', '47%', ['sh','sh','sh','sh'], ['18%','38%','58%','78%'], '8%'), ...row(52, 'home', '84%', ['ship','sheep','fish','dish'], ['12%','34%','56%','78%'], '15%')];

  DB[53].title = 'Unit 5 — Lesson 4: Family Actions';
  DB[53].inputs = [
    ...row(53, 'listen', '37%', ['fat','thin','brother','thick'], ['12%','34%','56%','78%'], '15%'),
    ...lines(53, 'complete', 58, ['I help my mom.','My father watches TV.','I clean my room.','My mom cooks lunch.'], '18%', '64%', 5.8),
    ...row(53, 'phonics', '89%', ['sheep','brush','shop'], ['20%','45%','70%'], '17%')
  ];

  DB[54].title = 'Weekly Assessment A — Unit 5';
  DB[54].inputs = [...row(54, 'look', '42%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%'), ...row(54, 'phonics', '77%', ['ship','sheep','mother'], ['20%','45%','70%'], '17%')];
  DB[55].title = 'Weekly Assessment B and C — Unit 5';
  DB[55].inputs = [...row(55, 'look', '35%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%'), ...row(55, 'phonics', '78%', ['fish','dish','shop','father','brush'], ['12%','29%','46%','63%','80%'], '14%')];

  DB[56].title = 'Unit 6 — Lesson 1: Rooms at Home';
  DB[56].inputs = [
    ...row(56, 'look', '49%', ['bedroom','kitchen','bathroom','living room'], ['11%','31%','52%','74%'], '16%'),
    ...row(56, 'complete', '82%', ['bedroom','kitchen','bathroom'], ['22%','47%','72%'], '17%')
  ];

  DB[57].title = 'Unit 6 — Lesson 2: Rooms at Home';
  DB[57].inputs = [
    ...row(57, 'look', '43%', ['bedroom','dining room','bathroom'], ['20%','45%','70%'], '17%'),
    ...row(57, 'tf', '76%', ['F','T','F','T'], ['12%','34%','56%','78%'], '10%', 'ضع T أو F')
  ];

  DB[58].title = 'Weekly Assessment A and B — Unit 6';
  DB[58].inputs = lines(58, 'reorder', 25, ['Where do you brush your teeth?','I wash my hands in the bathroom.','There is a bed in the bedroom.','Where is the table?','I eat in the dining room.'], '17%', '66%', 10.7);
  DB[59].title = 'Weekly Assessment C — Unit 6';
  DB[59].inputs = lines(59, 'reorder', 23, ['The lamp is on the table.','Where do you watch TV?','It is next to the window.','That is a fridge.'], '17%', '66%', 13.0);

  DB[60].title = 'Unit 6 — Lesson 3: Around the House';
  DB[60].inputs = [
    ...row(60, 'listen', '36%', ['lamp','in','next to','under'], ['12%','34%','56%','78%'], '15%'),
    ...row(60, 'be', '58%', ['is','are','is'], ['20%','45%','70%'], '17%'),
    ...row(60, 'there', '78%', ['There are','There is','There are','There is'], ['11%','31%','52%','74%'], '16%')
  ];

  DB[61].title = 'Unit 6 — Lesson 4: My Home';
  DB[61].inputs = [
    ...row(61, 'complete', '45%', ['bed','bedroom','TV','living room'], ['11%','31%','52%','74%'], '16%'),
    ...lines(61, 'sent', 76, ['There is a table in the living room.','We cook in the kitchen.'], '20%', '60%', 7.2)
  ];

  DB[62].title = 'General Revision 2 — Part A';
  DB[62].inputs = lines(62, 'answer', 26, ['I clean the room.','My brother washes the dishes.','My sister reads a book.','My dad watches TV.','My mom cooks lunch.'], '17%', '66%', 11.0);
  DB[63].title = 'General Revision 2 — Part B';
  DB[63].inputs = lines(63, 'answer', 25, ['I eat in the dining room.','This is my family.','This is my father.','I help my mom.','The flowers are in the garden.','There is a lamp on the table.','There are two beds in the bedroom.'], '17%', '66%', 8.3);

  DB[64].title = 'Final Assessment 1 — Part A';
  DB[64].inputs = [...row(64, 'listen', '41%', ['glue','fan','ten','hat'], ['12%','34%','56%','78%'], '15%'), ...row(64, 'look', '80%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%')];
  DB[65].title = 'Final Assessment 1 — Part B';
  DB[65].inputs = [...row(65, 'listen', '41%', ['fox','chin','sun','cat'], ['12%','34%','56%','78%'], '15%'), ...row(65, 'look', '80%', ['__free__','__free__','__free__'], ['20%','45%','70%'], '18%')];

  DB[66].title = 'Final Assessment 2 — Part A';
  DB[66].inputs = [
    ...row(66, 'choose', '35%', ['cooks','green','watch','brush'], ['12%','34%','56%','78%'], '15%'),
    ...row(66, 'complete', '70%', ['windows','lamp','clean'], ['20%','45%','70%'], '17%')
  ];
  DB[67].title = 'Final Assessment 2 — Part B';
  DB[67].inputs = [
    ...row(67, 'words', '31%', ['wash','brush','cook','sing'], ['12%','34%','56%','78%'], '15%'),
    ...lines(67, 'sent', 50, ['This is a cat.','I play after school.','This is my grandmother.','My father watches TV in the living room.','I brush my teeth in the bathroom.'], '17%', '66%', 7.7),
    ...row(67, 'punct', '91%', ['This is a cat.','What\'s this?'], ['30%','65%'], '20%')
  ];
  DB[68].title = 'Final Assessment 2 — Part C';
  DB[68].inputs = [
    ...row(68, 'choose', '35%', ['bathroom','cook','play','draw'], ['12%','34%','56%','78%'], '15%'),
    ...row(68, 'complete', '70%', ['watch','cook','washes'], ['20%','45%','70%'], '17%')
  ];
  DB[69].title = 'Final Assessment 2 — Part D';
  DB[69].inputs = [
    ...row(69, 'words', '33%', ['lamp','clap','box'], ['20%','45%','70%'], '17%'),
    ...lines(69, 'sent', 57, ['Where is the table?','I eat in the dining room.'], '20%', '60%', 7.2),
    ...row(69, 'punct', '86%', ['I have a big family.','How many bags are there?'], ['30%','65%'], '20%')
  ];

  DB[70].title = 'Audioscripts — Unit 1 and Unit 2';
  DB[71].title = 'Audioscripts — Unit 4 and Unit 5';
  DB[72].title = 'Audioscripts — Unit 6 and Final Assessments';

  window.P2_OVERLAY_DATABASE = DB;
})();
