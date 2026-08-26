/* =========================================================================
   محرك الامتحانات المشترك — لا تحتاج لتعديل هذا الملف
   ========================================================================= */

(function () {
  const lesson = QUIZ_DATA[LESSON_ID];
  if (!lesson) {
    document.getElementById('quiz-app').innerHTML =
      '<div class="card">تعذر تحميل بيانات الامتحان.</div>';
    return;
  }

  const app = document.getElementById('quiz-app');
  let studentName = '';
  const answers = {}; // qid -> value
  let activeQuestions = [];

  function shuffleCopy(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function prepareQuestions(source) {
    return source.map((q) => {
      if (q.type !== 'mcq') return { ...q };
      const correctText = q.options[q.correct];
      const options = shuffleCopy(q.options);
      return { ...q, options, correct: options.indexOf(correctText) };
    });
  }

  // ---------- normalization helpers ----------
  function normLoose(s) {
    return (s || '')
      .toString()
      .trim()
      .toLowerCase()
      .replace(/['".,!?؟،‘’]/g, '')
      .replace(/-/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  function normExact(s) {
    return (s || '').toString().trim().replace(/\s+/g, ' ');
  }

  function checkAnswer(q, val) {
    if (q.type === 'mcq') {
      return val !== undefined && parseInt(val) === q.correct;
    }
    if (q.type === 'order') {
      if (!val) return false;
      return q.sentences.every((s, i) => parseInt(val[i]) === s.correct);
    }
    // text
    const mode = q.mode || 'loose';
    const v = val || '';
    if (mode === 'exact') {
      return q.answers.some((a) => normExact(a) === normExact(v));
    } else if (mode === 'containsAny') {
      const nv = normLoose(v);
      if (!nv) return false;
      return q.answers.some((a) => nv.indexOf(normLoose(a)) !== -1);
    } else {
      return q.answers.some((a) => normLoose(a) === normLoose(v));
    }
  }

  function correctAnswerLabel(q) {
    if (q.type === 'mcq') return q.options[q.correct];
    if (q.type === 'order') {
      return q.sentences
        .slice()
        .sort((a, b) => a.correct - b.correct)
        .map((s) => s.text)
        .join(' → ');
    }
    return q.answers[0];
  }

  // ---------- rendering ----------
  function renderStart() {
    app.innerHTML = `
      <div class="card center">
        <div style="font-size:50px;">✏️😊</div>
        <label class="field-label" for="studentName">اكتب اسمك الأول قبل ما تبدأ الامتحان</label>
        <input type="text" id="studentName" placeholder="مثال: يوسف" autocomplete="off" />
        <div style="margin-top:18px;">
          <button class="btn block" id="startBtn">ابدأ الامتحان 🚀</button>
        </div>
      </div>
    `;
    document.getElementById('startBtn').addEventListener('click', () => {
      const val = document.getElementById('studentName').value.trim();
      if (!val) {
        document.getElementById('studentName').style.borderColor = '#FF5A5F';
        return;
      }
      studentName = val;
      renderQuiz();
    });
  }

  function optionLetter(i) {
    return ['A', 'B', 'C', 'D', 'E'][i] || i + 1;
  }

  function renderQuestion(q, idx) {
    let inner = '';
    const emoji = q.emoji ? `<div class="qemoji">${q.emoji}</div>` : '';
    inner += `<div class="qhead">
        <div class="qnum">${idx + 1}</div>
        <div>
          <div class="qinstruction">${q.instruction}</div>
          <div class="qtext eng">${q.text || ''}</div>
        </div>
      </div>${emoji}`;

    if (q.type === 'mcq') {
      inner += `<div class="options" data-qid="${q.id}">`;
      q.options.forEach((opt, i) => {
        inner += `
          <label class="option" data-i="${i}">
            <input type="radio" name="${q.id}" value="${i}" />
            <span class="eng">${optionLetter(i)}) ${opt}</span>
          </label>`;
      });
      inner += `</div>`;
    } else if (q.type === 'order') {
      inner += `<div data-qid="${q.id}">`;
      q.sentences.forEach((s, i) => {
        inner += `
          <div class="order-row">
            <select data-i="${i}">
              <option value="">#</option>
              ${q.sentences.map((_, n) => `<option value="${n + 1}">${n + 1}</option>`).join('')}
            </select>
            <span class="otext eng">${s.text}</span>
          </div>`;
      });
      inner += `</div>`;
    } else {
      inner += `
        <div>
          <input type="text" class="eng" data-qid="${q.id}" placeholder="${q.placeholder || 'اكتب إجابتك هنا'}" autocomplete="off" />
        </div>`;
    }
    return `<div class="qcard" id="qcard-${q.id}">${inner}</div>`;
  }

  function renderQuiz() {
    activeQuestions = prepareQuestions(lesson.questions);
    let html = `
      <div class="hero" style="padding:18px 22px;">
        <h1>أهلًا ${studentName} 👋</h1>
        <div class="sub eng">${lesson.lessonTitleEn}</div>
        <div class="tag">جاوب على كل الأسئلة ثم اضغط "تسليم الإجابات"</div>
      </div>
      <div class="card"><div id="questions"></div>
        <button class="btn green block" id="submitBtn">تسليم الإجابات ✅</button>
      </div>
    `;
    app.innerHTML = html;
    const qbox = document.getElementById('questions');
    qbox.innerHTML = activeQuestions.map((q, i) => renderQuestion(q, i)).join('');

    // option highlight
    qbox.querySelectorAll('.options').forEach((optWrap) => {
      optWrap.querySelectorAll('.option').forEach((lab) => {
        lab.addEventListener('click', () => {
          optWrap.querySelectorAll('.option').forEach((o) => o.classList.remove('selected'));
          lab.classList.add('selected');
        });
      });
    });

    document.getElementById('submitBtn').addEventListener('click', submitQuiz);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function collectAnswers() {
    activeQuestions.forEach((q) => {
      if (q.type === 'mcq') {
        const sel = document.querySelector(`input[name="${q.id}"]:checked`);
        answers[q.id] = sel ? sel.value : undefined;
      } else if (q.type === 'order') {
        const wrap = document.querySelector(`[data-qid="${q.id}"]`);
        const vals = [];
        wrap.querySelectorAll('select').forEach((sel) => vals.push(sel.value));
        answers[q.id] = vals;
      } else {
        const inp = document.querySelector(`input[type="text"][data-qid="${q.id}"]`);
        answers[q.id] = inp ? inp.value : '';
      }
    });
  }

  function submitQuiz() {
    collectAnswers();
    renderResults();
  }

  function renderResults() {
    let score = 0;
    const total = activeQuestions.length;
    const reviewHtml = activeQuestions
      .map((q, i) => {
        const val = answers[q.id];
        const ok = checkAnswer(q, val);
        if (ok) score++;
        let userAnsLabel = '';
        if (q.type === 'mcq') {
          userAnsLabel = val !== undefined ? q.options[val] : '(لم تتم الإجابة)';
        } else if (q.type === 'order') {
          userAnsLabel = 'ترتيبك: ' + (val || []).map((v) => v || '؟').join(' , ');
        } else {
          userAnsLabel = val && val.trim() ? val : '(لم تتم الإجابة)';
        }
        return `
        <div class="qcard ${ok ? 'result-correct' : 'result-wrong'}">
          <div class="qhead">
            <div class="qnum">${i + 1}</div>
            <div>
              <div class="qinstruction">${q.instruction}</div>
              <div class="qtext eng">${q.text || ''}</div>
            </div>
          </div>
          <div class="eng" style="font-weight:700;margin-top:6px;">${userAnsLabel}</div>
          <div class="badge ${ok ? 'ok' : 'no'}">${ok ? 'إجابة صحيحة ✔️' : 'إجابة غير صحيحة ✘'}</div>
          ${!ok ? `<div class="correct-answer">الإجابة الصحيحة: <span class="eng">${correctAnswerLabel(q)}</span></div>` : ''}
        </div>`;
      })
      .join('');

    const pct = Math.round((score / total) * 100);
    let emoji = '🙂';
    let msg = 'محاولة جيدة، ذاكر أكتر وجرب تاني!';
    if (pct === 100) {
      emoji = '🏆';
      msg = 'ممتاز! إجابات كلها صحيحة!';
    } else if (pct >= 80) {
      emoji = '🌟';
      msg = 'رائع جدًا! أداء ممتاز!';
    } else if (pct >= 60) {
      emoji = '👍';
      msg = 'كويس! استمر في المذاكرة!';
    } else if (pct >= 40) {
      emoji = '💪';
      msg = 'لا بأس، راجع الدرس وحاول مرة أخرى!';
    }

    app.innerHTML = `
      <div class="hero" style="padding:18px 22px;">
        <h1>نتيجة ${studentName} ${emoji}</h1>
        <div class="sub eng">${lesson.lessonTitleEn}</div>
      </div>
      <div class="card score-box">
        <div class="score-emoji">${emoji}</div>
        <div class="score-num">${score} / ${total}</div>
        <div class="score-msg">${msg}</div>
      </div>
      <div class="card">
        <div class="unit-title" style="margin-bottom:12px;">تصحيح الإجابات 📝</div>
        ${reviewHtml}
      </div>
      <div class="card">
        <div class="unit-title" style="margin-bottom:6px;">إرسال النتيجة لولي الأمر / المعلم 📲</div>
        <p class="small-note">اكتب رقم موبايلك ثم اضغط الزرار وهيتفتح واتساب برسالة جاهزة فيها اسمك ونتيجتك وكل إجاباتك.</p>
        <label class="field-label" for="studentPhone">رقم الموبايل</label>
        <div class="phone-row">
          <span class="phone-prefix">${TEACHER_CONFIG.studentCountryCode}</span>
          <input type="tel" id="studentPhone" placeholder="1001234567" autocomplete="off" />
        </div>
        <div style="margin-top:16px;">
          <button class="btn whatsapp block" id="sendBtn">ابعت النتيجة على واتساب 💬</button>
        </div>
        <div id="phoneError" class="small-note" style="color:#E1494E;display:none;">من فضلك اكتب رقم موبايل صحيح</div>
      </div>
      <footer class="note">تم إعداد هذا الامتحان تلقائيًا من كتاب Performance Tasks and Assessments</footer>
    `;

    document.getElementById('sendBtn').addEventListener('click', () => {
      const phoneInput = document.getElementById('studentPhone');
      const phone = phoneInput.value.trim().replace(/\D/g, '');
      if (phone.length < 8) {
        document.getElementById('phoneError').style.display = 'block';
        phoneInput.style.borderColor = '#FF5A5F';
        return;
      }
      document.getElementById('phoneError').style.display = 'none';
      sendToWhatsApp(score, total, phone);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function sendToWhatsApp(score, total, studentPhone) {
    const lines = [];
    lines.push(`📚 نتيجة امتحان إلكتروني`);
    lines.push(`الوحدة: ${lesson.unitTitleAr} - ${lesson.unitTitleEn}`);
    lines.push(`الدرس: ${lesson.lessonTitleAr} - ${lesson.lessonTitleEn}`);
    lines.push('');
    lines.push(`👤 اسم الطالب: ${studentName}`);
    lines.push(`📱 رقم الموبايل: ${TEACHER_CONFIG.studentCountryCode}${studentPhone}`);
    lines.push(`✅ النتيجة: ${score} / ${total}`);
    lines.push('');
    lines.push('———— تفاصيل الإجابات ————');
    activeQuestions.forEach((q, i) => {
      const val = answers[q.id];
      const ok = checkAnswer(q, val);
      let userAnsLabel = '';
      if (q.type === 'mcq') {
        userAnsLabel = val !== undefined ? q.options[val] : '(لم تتم الإجابة)';
      } else if (q.type === 'order') {
        userAnsLabel = (val || []).map((v) => v || '؟').join(',');
      } else {
        userAnsLabel = val && val.trim() ? val : '(لم تتم الإجابة)';
      }
      lines.push(
        `${i + 1}. ${ok ? '✔️' : '✘'} إجابة الطالب: ${userAnsLabel}${
          ok ? '' : '  |  الصحيحة: ' + correctAnswerLabel(q)
        }`
      );
    });

    const text = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${TEACHER_CONFIG.whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
  }

  renderStart();
})();
