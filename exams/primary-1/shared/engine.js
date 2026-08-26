// ============================================
// محرك الامتحان الذاتي التصحيح - يستخدم في كل الدروس
// يحتاج: META (بيانات الوحدة والدرس) و QUESTIONS (الأسئلة) معرّفين قبل استدعاء initQuiz()
// ============================================

function normalizeText(s) {
  return (s || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[.!?,'"]/g, "")
    .replace(/\s+/g, " ");
}

function isCorrect(q, userVal) {
  if (q.type === "mcq") {
    return String(userVal) === String(q.correct);
  }
  const accepted = Array.isArray(q.answer) ? q.answer : [q.answer];
  const norm = normalizeText(userVal);
  return accepted.some((a) => normalizeText(a) === norm);
}

function el(tag, attrs, html) {
  const e = document.createElement(tag);
  if (attrs) Object.keys(attrs).forEach((k) => e.setAttribute(k, attrs[k]));
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function initQuiz(META, QUESTIONS) {
  document.title = META.unitName + " - " + META.lessonName;
  const app = document.getElementById("app");

  // ---------- شاشة 1: الاسم ----------
  function renderStart() {
    app.innerHTML = "";
    const card = el("div", { class: "card" });
    card.appendChild(el("div", { class: "badge" }, META.unitName));
    card.appendChild(el("h1", {}, META.lessonName));
    card.appendChild(el("h2", { class: "sub" }, "امتحان إلكتروني ذاتي التصحيح - " + QUESTIONS.length + " سؤال"));
    card.appendChild(el("label", { class: "field-label" }, "من فضلك اكتب اسمك الأول:"));
    const nameInput = el("input", { type: "text", id: "studentName", placeholder: "اكتب اسمك هنا" });
    card.appendChild(nameInput);
    const startBtn = el("button", { class: "btn" }, "ابدأ الامتحان");
    startBtn.onclick = function () {
      const name = nameInput.value.trim();
      if (!name) {
        alert("من فضلك اكتب اسمك الأول قبل البدء");
        return;
      }
      window._studentName = name;
      renderQuiz();
    };
    card.appendChild(startBtn);
    app.appendChild(card);
  }

  // ---------- شاشة 2: الأسئلة ----------
  function renderQuiz() {
    app.innerHTML = "";
    const card = el("div", { class: "card" });
    card.appendChild(el("div", { class: "badge" }, META.unitName));
    card.appendChild(el("h1", {}, META.lessonName));
    card.appendChild(el("h2", { class: "sub" }, "أهلاً " + window._studentName + " 👋 جاوب على كل الأسئلة وبعدين اضغط تسليم"));

    QUESTIONS.forEach((q, i) => {
      const qDiv = el("div", { class: "q" });
      const title = el("div", { class: "q-title" });
      title.innerHTML = '<span class="q-num">' + (i + 1) + "</span>" + q.q;
      qDiv.appendChild(title);

      if (q.type === "mcq") {
        q.options.forEach((opt, idx) => {
          const label = el("label", { class: "opt" });
          label.innerHTML =
            '<input type="radio" name="q' + i + '" value="' + idx + '"> ' + opt;
          qDiv.appendChild(label);
        });
      } else {
        const inp = el("input", {
          type: "text",
          id: "q" + i,
          placeholder: "اكتب إجابتك هنا",
        });
        qDiv.appendChild(inp);
      }
      card.appendChild(qDiv);
    });

    const submitBtn = el("button", { class: "btn green" }, "تسليم الامتحان ✅");
    submitBtn.onclick = gradeQuiz;
    card.appendChild(submitBtn);
    app.appendChild(card);
  }

  // ---------- التصحيح ----------
  function gradeQuiz() {
    let score = 0;
    const details = [];
    QUESTIONS.forEach((q, i) => {
      let userVal = "";
      if (q.type === "mcq") {
        const checked = document.querySelector('input[name="q' + i + '"]:checked');
        userVal = checked ? checked.value : "";
      } else {
        userVal = document.getElementById("q" + i).value;
      }
      const ok = userVal !== "" && isCorrect(q, userVal);
      if (ok) score++;
      const correctDisplay =
        q.type === "mcq" ? q.options[q.correct] : Array.isArray(q.answer) ? q.answer[0] : q.answer;
      details.push({
        q: q.q,
        userVal: q.type === "mcq" ? (userVal !== "" ? q.options[userVal] : "-") : userVal || "-",
        correctDisplay: correctDisplay,
        ok: ok,
      });
    });
    renderResult(score, details);
  }

  // ---------- شاشة 3: النتيجة ----------
  function renderResult(score, details) {
    app.innerHTML = "";
    const card = el("div", { class: "card result-box" });
    card.appendChild(el("div", { class: "badge" }, META.unitName + " - " + META.lessonName));
    card.appendChild(el("h1", {}, "نتيجة " + window._studentName));
    card.appendChild(el("div", { class: "score" }, score + " / " + QUESTIONS.length));

    let msg = "";
    const pct = Math.round((score / QUESTIONS.length) * 100);
    if (pct >= 90) msg = "ممتاز! 🌟 استمر كده";
    else if (pct >= 70) msg = "جيد جدًا 👏 شد حيلك شوية كمان";
    else if (pct >= 50) msg = "لا بأس، محتاج مذاكرة أكتر شوية 💪";
    else msg = "ذاكر الدرس تاني وحاول مرة كمان 📖";
    card.appendChild(el("div", { class: "msg" }, msg));

    const reviewWrap = el("div", { class: "review" });
    details.forEach((d, i) => {
      const line = el("div");
      line.innerHTML =
        (i + 1) +
        ". " +
        d.q +
        "<br>" +
        (d.ok
          ? '<span class="ok">✔ إجابتك: ' + d.userVal + "</span>"
          : '<span class="bad">✘ إجابتك: ' +
            d.userVal +
            " | الصح: " +
            d.correctDisplay +
            "</span>");
      reviewWrap.appendChild(line);
    });
    card.appendChild(reviewWrap);

    // ---------- إرسال واتساب ----------
    const waCard = el("div", { class: "card" });
    waCard.appendChild(el("label", { class: "field-label" }, "اكتب رقم موبايلك عشان نبعت النتيجة للمدرس:"));
    const phoneRow = el("div", { class: "phone-row" });
    phoneRow.appendChild(el("div", { class: "phone-prefix" }, "+" + STUDENT_COUNTRY_CODE));
    const phoneInput = el("input", {
      type: "tel",
      id: "studentPhone",
      placeholder: "10XXXXXXXX",
    });
    phoneRow.appendChild(phoneInput);
    waCard.appendChild(phoneRow);

    const waBtn = el("button", { class: "btn wa" }, "ابعت النتيجة على واتساب 📲");
    waBtn.onclick = function () {
      const phone = phoneInput.value.trim();
      if (!phone) {
        alert("من فضلك اكتب رقم موبايلك الأول");
        return;
      }
      const fullPhone = STUDENT_COUNTRY_CODE + phone.replace(/^0+/, "");
      let text =
        "نتيجة امتحان\n" +
        "الاسم: " +
        window._studentName +
        "\n" +
        "رقم الطالب: +" +
        fullPhone +
        "\n" +
        "الوحدة: " +
        META.unitName +
        "\n" +
        "الدرس: " +
        META.lessonName +
        "\n" +
        "النتيجة: " +
        score +
        " / " +
        QUESTIONS.length +
        "\n\n";
      details.forEach((d, i) => {
        text +=
          (i + 1) +
          ". " +
          (d.ok ? "✔" : "✘") +
          " " +
          d.q +
          " -> إجابة الطالب: " +
          d.userVal +
          (d.ok ? "" : " (الصح: " + d.correctDisplay + ")") +
          "\n";
      });
      const url =
        "https://wa.me/" +
        TEACHER_WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(text);
      window.open(url, "_blank");
    };
    waCard.appendChild(waBtn);
    waCard.appendChild(
      el(
        "div",
        { class: "footer-note" },
        "هيتفتح واتساب وترسل الرسالة يدويًا للمدرس"
      )
    );
    app.appendChild(card);
    app.appendChild(waCard);
  }

  renderStart();
}
