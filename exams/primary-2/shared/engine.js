/* ==========================================================
   محرك الامتحان المشترك - يستخدمه كل ملفات الدروس
   لازم يكون فيه متغير اسمه QUIZ معرف قبل استدعاء الملف ده
   ========================================================== */

(function () {
  "use strict";

  const root = document.getElementById("quiz-root");
  if (!root || typeof QUIZ === "undefined") return;

  let studentName = "";
  let lastResults = [];

  // ---------- أدوات مساعدة للتصحيح ----------
  function normalize(str) {
    return (str || "")
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[.,!?؟،]+$/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function acceptedAnswers(q) {
    return Array.isArray(q.answer) ? q.answer : [q.answer];
  }

  function isCorrect(q, given) {
    const norm = normalize(given);
    if (!norm) return false;
    return acceptedAnswers(q).some((a) => normalize(a) === norm);
  }

  function firstAnswer(q) {
    return acceptedAnswers(q)[0];
  }

  function esc(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  // ---------- شاشة البداية ----------
  function renderStart() {
    root.innerHTML = `
      <div class="card">
        <h2>👋 قبل ما نبدأ</h2>
        <p>اكتب اسمك الأول:</p>
        <input type="text" id="studentNameInput" class="text-input" placeholder="اسمك هنا..." />
        <button class="btn btn-primary" id="startBtn">ابدأ الامتحان 🚀</button>
      </div>
    `;
    document.getElementById("startBtn").onclick = function () {
      const val = document.getElementById("studentNameInput").value.trim();
      if (!val) {
        alert("من فضلك اكتب اسمك الأول 🙂");
        return;
      }
      studentName = val;
      renderQuiz();
      window.scrollTo(0, 0);
    };
    // يسمح بالضغط على Enter
    document.getElementById("studentNameInput").addEventListener("keydown", function (e) {
      if (e.key === "Enter") document.getElementById("startBtn").click();
    });
  }

  // ---------- شاشة الأسئلة ----------
  function renderQuiz() {
    let html = `<div class="card">
      <h2>مرحبا يا ${esc(studentName)} 🌟</h2>
      <p>جاوب على كل الأسئلة الآتية وبعدين اضغط "سلم الإجابات":</p>
      <form id="quizForm">`;

    QUIZ.questions.forEach(function (q, i) {
      html += `<div class="question">
        <div class="q-number">سؤال ${i + 1} من ${QUIZ.questions.length}</div>`;

      if (q.emoji) {
        html += `<div class="q-emoji">${q.emoji}</div>`;
      }

      html += `<div class="q-text" dir="ltr">${esc(q.q)}</div>`;

      if (q.type === "mcq") {
        q.options.forEach(function (opt, oi) {
          html += `<label class="option">
            <input type="radio" name="q${i}" value="${esc(opt)}" />
            <span dir="ltr">${esc(opt)}</span>
          </label>`;
        });
      } else if (q.type === "unscramble") {
        html += `<div class="scrambled" dir="ltr">${esc(q.letters)}</div>
          <input type="text" class="text-input" dir="ltr" name="q${i}" placeholder="اكتب الكلمة الصح" />`;
      } else if (q.type === "reorder") {
        html += `<div class="word-bank" dir="ltr">${q.words
          .map(function (w) {
            return `<span class="word-chip">${esc(w)}</span>`;
          })
          .join(" ")}</div>
          <input type="text" class="text-input" dir="ltr" name="q${i}" placeholder="اكتب الجملة كاملة وبالترتيب الصح" />`;
      } else {
        // fill
        html += `<input type="text" class="text-input" dir="ltr" name="q${i}" placeholder="اكتب إجابتك هنا" />`;
      }

      html += `</div>`;
    });

    html += `<button type="submit" class="btn btn-primary">سلم الإجابات ✅</button>
      </form>
    </div>`;

    root.innerHTML = html;

    document.getElementById("quizForm").addEventListener("submit", function (e) {
      e.preventDefault();
      gradeQuiz();
      window.scrollTo(0, 0);
    });
  }

  // ---------- التصحيح ----------
  function gradeQuiz() {
    const form = document.getElementById("quizForm");
    let score = 0;

    lastResults = QUIZ.questions.map(function (q, i) {
      let given = "";
      if (q.type === "mcq") {
        const checked = form.querySelector('input[name="q' + i + '"]:checked');
        given = checked ? checked.value : "";
      } else {
        const inp = form.querySelector('input[name="q' + i + '"]');
        given = inp ? inp.value : "";
      }
      const correct = isCorrect(q, given);
      if (correct) score++;
      return { q: q, given: given, correct: correct };
    });

    renderResults(score, QUIZ.questions.length);
  }

  // ---------- عرض النتيجة ----------
  function renderResults(score, total) {
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    let emoji = "💪";
    if (pct === 100) emoji = "🏆";
    else if (pct >= 80) emoji = "🌟";
    else if (pct >= 50) emoji = "👍";

    let html = `<div class="card result-card">
      <h2>${emoji} النتيجة: ${score} من ${total}</h2>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="details">`;

    lastResults.forEach(function (r, i) {
      html += `<div class="result-item ${r.correct ? "correct" : "wrong"}">
        <div class="result-icon">${r.correct ? "✅" : "❌"}</div>
        <div class="result-text">
          <div class="q-text" dir="ltr">${i + 1}. ${esc(r.q.q)}</div>
          <div dir="ltr">إجابتك: <b>${esc(r.given || "—")}</b></div>
          ${
            !r.correct
              ? `<div dir="ltr">الإجابة الصح: <b>${esc(firstAnswer(r.q))}</b></div>`
              : ""
          }
        </div>
      </div>`;
    });

    html += `</div>

      <div class="whatsapp-box">
        <h3>📱 ابعت النتيجة لمعلمك على واتساب</h3>
        <p>اكتب رقم موبايلك (مصر 🇪🇬):</p>
        <div class="phone-row">
          <span class="country-code">+20</span>
          <input type="tel" id="phoneInput" class="text-input" placeholder="1xxxxxxxxx" />
        </div>
        <button class="btn btn-whatsapp" id="sendWaBtn">ابعت النتيجة على واتساب 📲</button>
      </div>

      <button class="btn btn-secondary" id="retryBtn">إعادة المحاولة 🔄</button>
    </div>`;

    root.innerHTML = html;

    document.getElementById("sendWaBtn").onclick = function () {
      sendWhatsApp(score, total);
    };
    document.getElementById("retryBtn").onclick = function () {
      renderStart();
    };
  }

  // ---------- إرسال واتساب ----------
  function sendWhatsApp(score, total) {
    const phoneInput = document.getElementById("phoneInput");
    const phoneRaw = phoneInput.value.trim().replace(/[^0-9]/g, "");

    if (!phoneRaw || phoneRaw.length < 9) {
      alert("من فضلك اكتب رقم موبايل مصري صحيح 📱 (مثال: 1012345678)");
      return;
    }

    // شيل أي صفر في الأول لو الطالب كتبه بالغلط
    const localNumber = phoneRaw.replace(/^0+/, "");
    const fullPhone = "20" + localNumber;

    let msg = "📚 *نتيجة امتحان إلكتروني*\n";
    msg += "----------------------------\n";
    msg += "👤 الاسم: " + studentName + "\n";
    msg += "📱 رقم الطالب: +" + fullPhone + "\n";
    msg += "📘 الوحدة: " + QUIZ.unitNameAr + " (" + QUIZ.unitName + ")\n";
    msg += "📖 الدرس: " + QUIZ.lessonNameAr + " (" + QUIZ.lessonName + ")\n";
    msg += "🏆 النتيجة: " + score + " من " + total + "\n";
    msg += "----------------------------\n";
    msg += "تفاصيل الإجابات:\n";

    lastResults.forEach(function (r, i) {
      msg += (i + 1) + ". " + (r.correct ? "✅" : "❌") + " " + r.q.q;
      msg += " | إجابة الطالب: " + (r.given || "—");
      if (!r.correct) {
        msg += " | الإجابة الصح: " + firstAnswer(r.q);
      }
      msg += "\n";
    });

    const teacherNumber =
      typeof CONFIG !== "undefined" && CONFIG.TEACHER_WHATSAPP_NUMBER
        ? CONFIG.TEACHER_WHATSAPP_NUMBER
        : "";

    if (!teacherNumber) {
      alert("لازم تحط رقم واتساب المعلم في ملف shared/config.js الأول");
      return;
    }

    const url = "https://wa.me/" + teacherNumber + "?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  }

  // ---------- ابدأ ----------
  renderStart();
})();
