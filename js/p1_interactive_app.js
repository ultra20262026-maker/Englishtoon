// Controller with Full Word Audio Speech Pronunciation & Precise LTR Missing Dots Position
document.addEventListener('DOMContentLoaded', () => {
    // State
    let currentPageIndex = 0;
    let soundEnabled = true;
    let studentProgress = loadProgress();

    // Touch Swipe Gesture State
    let touchStartX = 0;
    let touchEndX = 0;
    let isSwiping = false;
    const minSwipeDistance = 40;

    // DOM Elements
    const pageSelect = document.getElementById('page-select');
    const btnPrevPage = document.getElementById('btn-prev-page');
    const btnNextPage = document.getElementById('btn-next-page');
    const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
    const btnCloseSidebar = document.getElementById('btn-close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarSearch = document.getElementById('sidebar-search');
    const pagesGrid = document.getElementById('pages-grid');
    const pageCard = document.getElementById('page-card');
    const totalStarsCount = document.getElementById('total-stars-count');
    const btnSoundToggle = document.getElementById('btn-sound-toggle');
    const overallProgressBar = document.getElementById('overall-progress-bar');
    const overallProgressText = document.getElementById('overall-progress-text');
    const stageContainer = document.getElementById('stage-container');

    // Bottom Action Buttons
    const btnCheckAnswers = document.getElementById('btn-check-answers');
    const btnShowAnswers = document.getElementById('btn-show-answers');
    const btnResetPage = document.getElementById('btn-reset-page');

    // Result Modal
    const resultModal = document.getElementById('result-modal');
    const btnModalNext = document.getElementById('btn-modal-next');
    const btnModalClose = document.getElementById('btn-modal-close');
    const modalScoreText = document.getElementById('modal-score-text');

    // Audio Synthesizer
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function playSound(type) {
        if (!soundEnabled) return;
        try {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            if (type === 'correct') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.15);
                gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.3);
            } else if (type === 'wrong') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(220, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(140, audioCtx.currentTime + 0.2);
                gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.25);
            } else if (type === 'page_turn') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(280, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(420, audioCtx.currentTime + 0.12);
                gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.14);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.14);
            } else if (type === 'victory') {
                const notes = [523.25, 659.25, 783.99, 1046.50];
                notes.forEach((freq, idx) => {
                    const noteOsc = audioCtx.createOscillator();
                    const noteGain = audioCtx.createGain();
                    noteOsc.connect(noteGain);
                    noteOsc.connect(audioCtx.destination);
                    noteOsc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.1);
                    noteGain.gain.setValueAtTime(0.3, audioCtx.currentTime + idx * 0.1);
                    noteGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + idx * 0.1 + 0.2);
                    noteOsc.start(audioCtx.currentTime + idx * 0.1);
                    noteOsc.stop(audioCtx.currentTime + idx * 0.1 + 0.2);
                });
            }
        } catch (e) {}
    }

    // TTS Pronunciation Engine (نطق الكلمة كاملة بصوت عالي عند الضغط على السماعة)
    window.speakWord = function(word) {
        if (!word) return;
        try {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.rate = 0.85; // Natural clear speed for Primary 1 kids
            utterance.pitch = 1.0;
            window.speechSynthesis.speak(utterance);
        } catch (e) {}
    };

    // Touch Swipe Event Listeners Disabled as Requested

    function flipToPage(targetIndex, direction) {
        if (targetIndex < 0 || targetIndex >= pagesData.length) return;
        playSound('page_turn');

        pageCard.classList.add(direction === 'next' ? 'flip-next' : 'flip-prev');

        setTimeout(() => {
            currentPageIndex = targetIndex;
            pageSelect.value = targetIndex;
            btnPrevPage.disabled = (currentPageIndex === 0);
            btnNextPage.disabled = (currentPageIndex === pagesData.length - 1);

            document.querySelectorAll('.grid-page-btn').forEach((btn, idx) => {
                btn.classList.toggle('active', idx === currentPageIndex);
            });

            renderPage(currentPageIndex);

            pageCard.classList.remove('flip-next', 'flip-prev');
            pageCard.classList.add('flip-enter');

            setTimeout(() => pageCard.classList.remove('flip-enter'), 300);
            pageCard.scrollTo({ top: 0, behavior: 'smooth' });
        }, 180);
    }

    function initNavigation() {
        pageSelect.innerHTML = '';
        pagesGrid.innerHTML = '';

        pagesData.forEach((p, idx) => {
            const opt = document.createElement('option');
            opt.value = idx;
            opt.textContent = `${p.pageNumber}: ${p.unit.split(':')[0]}`;
            pageSelect.appendChild(opt);

            const btn = document.createElement('button');
            btn.className = `grid-page-btn ${studentProgress[p.pageNumber]?.completed ? 'completed' : ''}`;
            btn.dataset.index = idx;
            btn.innerHTML = `
                <span class="num">${p.pageNumber}</span>
                ${studentProgress[p.pageNumber]?.stars ? '<i class="fa-solid fa-star badge-star" style="color:#F59E0B; font-size:10px;"></i>' : ''}
            `;
            btn.addEventListener('click', () => {
                flipToPage(idx, idx > currentPageIndex ? 'next' : 'prev');
                closeSidebarDrawer();
            });
            pagesGrid.appendChild(btn);
        });

        pageSelect.addEventListener('change', (e) => {
            const newIdx = parseInt(e.target.value);
            flipToPage(newIdx, newIdx > currentPageIndex ? 'next' : 'prev');
        });

        updateProgressStats();
    }

    function loadProgress() {
        try {
            const data = localStorage.getItem('prim1_english_progress');
            return data ? JSON.parse(data) : {};
        } catch (e) {
            return {};
        }
    }

    function saveProgress() {
        try {
            localStorage.setItem('prim1_english_progress', JSON.stringify(studentProgress));
            updateProgressStats();
        } catch (e) {}
    }

    function updateProgressStats() {
        let totalStars = 0;
        let completedCount = 0;

        pagesData.forEach(p => {
            const prog = studentProgress[p.pageNumber];
            if (prog && prog.completed) {
                completedCount++;
                totalStars += (prog.stars || 1);
            }
        });

        totalStarsCount.textContent = totalStars;
        const pct = Math.round((completedCount / 72) * 100);
        overallProgressBar.style.width = `${pct}%`;
        overallProgressText.textContent = `${pct}% (${completedCount}/72 صفحة)`;
    }

    btnPrevPage.addEventListener('click', () => flipToPage(currentPageIndex - 1, 'prev'));
    btnNextPage.addEventListener('click', () => flipToPage(currentPageIndex + 1, 'next'));

    function renderPage(index) {
        const data = pagesData[index];
        pageCard.innerHTML = '';

        if (data.type === 'cover') {
            renderCoverPage(data);
        } else if (data.type === 'intro') {
            renderIntroPage(data);
        } else {
            renderActivityPage(data);
        }
    }

    function renderCoverPage(data) {
        pageCard.innerHTML = `
            <div class="clean-cover-box">
                <div class="cover-header-brand" style="display:flex; align-items:center; justify-content:center; gap:12px; margin-bottom:12px;">
                    <img src="images/logo_icon.png" alt="English Toon Logo" style="height: 48px; width: auto; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));">
                    <span class="cover-badge-text">جمهورية مصر العربية - English Toon</span>
                </div>
                <h1 class="cover-heading">${data.title}</h1>
                <h2 class="cover-subheading">${data.subtitle}</h2>
                <div class="cover-art-wrapper" style="margin: 16px 0; text-align: center;">
                    <img src="${data.coverImg || 'assets/images/cover_2027.jpg'}" alt="Cover Art 2027" style="max-height: 280px; width: 100%; object-fit: contain; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 2px solid rgba(255,255,255,0.15);">
                </div>
                <div class="cover-fields-card">
                    ${data.fields.map(f => `
                        <div class="field-item">
                            <label>${f.label}</label>
                            <input type="text" placeholder="${f.placeholder}">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function renderIntroPage(data) {
        pageCard.innerHTML = `
            <div style="padding: 10px;">
                <h2 style="color: var(--primary); font-family: var(--font-en); font-size: 26px; margin-bottom: 14px;">${data.title} ${data.emoji || ''}</h2>
                <div style="font-size: 16px; line-height: 1.8; color: var(--text-main); background: #F8FAFC; padding: 20px; border-radius: var(--radius-md); border: 1.5px solid var(--border-color);">
                    ${data.content.replace(/\n/g, '<br>')}
                </div>
            </div>
        `;
    }

    function renderActivityPage(data) {
        let html = `
            <div class="page-lesson-header">
                <div class="lesson-meta">
                    <span class="unit-label-tag">${data.unit}</span>
                    <h2 class="lesson-main-title">${data.lesson}</h2>
                </div>
                <div class="page-number-badge">
                    <i class="fa-solid fa-file-pen"></i> صفحة ${data.pageNumber}
                </div>
            </div>
        `;

        data.activities.forEach((act, actIdx) => {
            html += `
                <div class="activity-card" data-activity-id="${act.id}">
                    <div class="activity-title-bar">
                        <span class="act-badge">تمرين ${actIdx + 1}</span>
                        <h3 class="act-text">${act.title}</h3>
                    </div>
                    ${act.wordBank ? `
                        <div class="word-bank-container">
                            <span style="font-weight:800; color:#1D4ED8; font-size:13px;">قائمة الكلمات:</span>
                            ${act.wordBank.map(w => `<span class="word-tag">${w}</span>`).join('')}
                        </div>
                    ` : ''}
                    <div class="questions-layout">
            `;

            act.items.forEach((item, itemIdx) => {
                const itemId = `q_${data.pageNumber}_${act.id}_${item.num || itemIdx}`;
                html += renderQuestionItem(act.type, item, itemId);
            });

            html += `
                    </div>
                </div>
            `;
        });

        pageCard.innerHTML = html;

        pageCard.querySelectorAll('.clean-input, .dots-input').forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('is-correct', 'is-wrong');
            });
        });
    }

    // Render Question Item with FULL WORD Pronunciation Engine
    function renderQuestionItem(type, item, itemId) {
        let fullWord = (item.answer || '').trim();
        if (type === 'missing_sound') {
            const cleanHint = (item.hint || '').replace(/^\.*|\.*$/g, '');
            fullWord = (item.answer || '') + cleanHint; // Reads 'tomato', 'teacher', 'tiger', 'tree', 'table'
        }

        const visualEmoji = `
            <div class="q-emoji-box">
                <button type="button" class="speak-btn" onclick="speakWord('${fullWord.replace(/'/g, "\\'")}')" title="استمع لنطق الكلمة كاملة: ${fullWord}">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
                <span>${item.emoji || '❓'}</span>
            </div>
        `;

        if (type === 'unscramble') {
            return `
                <div class="question-box" data-id="${itemId}" data-answer="${item.answer}">
                    <span class="q-number">${item.num}.</span>
                    ${visualEmoji}
                    <div class="scrambled-text">${item.hint}</div>
                    <input type="text" class="clean-input" id="${itemId}" placeholder="اكتب الكلمة..." autocomplete="off">
                    <div class="feedback-text"></div>
                </div>
            `;
        } else if (type === 'missing_sound') {
            const cleanHint = (item.hint || '').replace(/^\.*|\.*$/g, '');
            return `
                <div class="question-box" data-id="${itemId}" data-answer="${item.answer}">
                    <span class="q-number">${item.num}.</span>
                    ${visualEmoji}
                    <div class="inline-sentence" dir="ltr" style="text-align:center; direction:ltr;">
                        <input type="text" class="dots-input" id="${itemId}" maxlength="2" style="width: 50px;" placeholder="..." autocomplete="off"><span style="font-family: var(--font-en);">${cleanHint}</span>
                    </div>
                    <div class="feedback-text"></div>
                </div>
            `;
        } else if (type === 'look_write') {
            return `
                <div class="question-box" data-id="${itemId}" data-answer="${item.answer}">
                    <span class="q-number">${item.num}.</span>
                    ${visualEmoji}
                    <input type="text" class="clean-input" id="${itemId}" placeholder="اكتب الكلمة..." autocomplete="off">
                    <div class="feedback-text"></div>
                </div>
            `;
        } else if (type === 'fill_blank') {
            return `
                <div class="question-box" data-id="${itemId}" data-answer="${item.answer}" style="grid-column: 1 / -1; align-items: flex-start;">
                    <span class="q-number">${item.num || 1}.</span>
                    <div style="display:flex; align-items:center; gap:12px; width:100%;">
                        ${visualEmoji}
                        <div class="inline-sentence" dir="ltr" style="text-align:left; direction:ltr;">
                            ${item.prefix || ''}
                            <input type="text" class="dots-input" id="${itemId}" style="width: 140px;" placeholder="..." autocomplete="off">
                            ${item.suffix || ''}
                        </div>
                    </div>
                    <div class="feedback-text"></div>
                </div>
            `;
        } else if (type === 'reorder') {
            return `
                <div class="question-box" data-id="${itemId}" data-answer="${item.answer}" style="grid-column: 1 / -1; align-items: flex-start; text-align: right;">
                    <span class="q-number">${item.num}.</span>
                    <div style="font-family: var(--font-en); font-size: 15px; font-weight: 800; color: #1D4ED8; margin-bottom: 2px;" dir="ltr">
                        Words: [ ${item.words.join(' - ')} ]
                    </div>
                    <div class="inline-sentence" dir="ltr" style="text-align:left; direction:ltr;">
                        <input type="text" class="dots-input" id="${itemId}" style="width: 100%; text-align: left;" placeholder="Reorder words..." autocomplete="off">
                    </div>
                    <div class="feedback-text"></div>
                </div>
            `;
        } else if (type === 'circle') {
            return `
                <div class="question-box" data-id="${itemId}" data-answer="${item.answer}">
                    <span class="q-number">${item.num}.</span>
                    ${visualEmoji}
                    <div class="options-group">
                        ${item.options.map(opt => `
                            <button type="button" class="option-chip" onclick="selectCircleOption(this, '${itemId}', '${opt}')">${opt}</button>
                        `).join('')}
                    </div>
                    <input type="hidden" class="clean-input" id="${itemId}">
                    <div class="feedback-text"></div>
                </div>
            `;
        }

        return '';
    }

    window.selectCircleOption = function(btn, itemId, value) {
        const parent = btn.parentElement;
        parent.querySelectorAll('.option-chip').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        document.getElementById(itemId).value = value;
    };

    // Auto-Grading Engine (تصحح تلقائياً)
    btnCheckAnswers.addEventListener('click', () => {
        const data = pagesData[currentPageIndex];
        if (data.type === 'cover' || data.type === 'intro') {
            alert('هذه الصفحة للعرض فقط وليست صفحة تمارين.');
            return;
        }

        const items = pageCard.querySelectorAll('.question-box');
        let totalItems = items.length;
        let correctCount = 0;

        items.forEach(item => {
            const input = item.querySelector('.clean-input, .dots-input');
            const feedback = item.querySelector('.feedback-text');
            const expected = (item.dataset.answer || '').trim().toLowerCase();
            const studentVal = (input ? input.value : '').trim().toLowerCase();

            if (!expected) {
                correctCount++;
                return;
            }

            const normExpected = expected.replace(/\s+/g, ' ').replace(/[.-]/g, '');
            const normStudent = studentVal.replace(/\s+/g, ' ').replace(/[.-]/g, '');

            if (normStudent && normStudent === normExpected) {
                correctCount++;
                item.classList.remove('incorrect');
                item.classList.add('correct');
                if (input) {
                    input.classList.remove('is-wrong');
                    input.classList.add('is-correct');
                }
                feedback.className = 'feedback-text correct';
                feedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> إجابة صحيحة';
            } else {
                item.classList.remove('correct');
                item.classList.add('incorrect');
                if (input) {
                    input.classList.remove('is-correct');
                    input.classList.add('is-wrong');
                }
                feedback.className = 'feedback-msg wrong';
                feedback.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> (الإجابة: ${expected})`;
            }
        });

        const isPerfect = (correctCount === totalItems && totalItems > 0);
        studentProgress[data.pageNumber] = {
            completed: true,
            score: `${correctCount}/${totalItems}`,
            stars: isPerfect ? 3 : 1
        };

        saveProgress();

        if (isPerfect) {
            playSound('victory');
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            showResultModal(correctCount, totalItems);
        } else {
            playSound(correctCount > 0 ? 'correct' : 'wrong');
        }
    });

    btnShowAnswers.addEventListener('click', () => {
        const items = pageCard.querySelectorAll('.question-box');
        items.forEach(item => {
            const input = item.querySelector('.clean-input, .dots-input');
            const expected = item.dataset.answer;
            if (expected && input) {
                input.value = expected;
                input.classList.add('is-correct');
            }
        });
    });

    btnResetPage.addEventListener('click', () => {
        renderPage(currentPageIndex);
    });

    // Help Dropdown Toggle Handler
    const btnHelpDropdown = document.getElementById('btn-help-dropdown');
    const helpDropdownMenu = document.getElementById('help-dropdown-menu');

    if (btnHelpDropdown && helpDropdownMenu) {
        btnHelpDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            helpDropdownMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!helpDropdownMenu.contains(e.target) && e.target !== btnHelpDropdown) {
                helpDropdownMenu.classList.add('hidden');
            }
        });

        helpDropdownMenu.querySelectorAll('.help-menu-item').forEach(item => {
            item.addEventListener('click', () => {
                helpDropdownMenu.classList.add('hidden');
            });
        });
    }

    const btnSendWhatsapp = document.getElementById('btn-send-whatsapp');
    const btnModalWhatsapp = document.getElementById('btn-modal-whatsapp');

    function sendToWhatsapp() {
        const data = pagesData[currentPageIndex];
        let teacherPhone = localStorage.getItem('teacherWhatsappPhone') || '';
        
        const inputPhone = prompt('أدخل رقم واتساب المعلم/المعلمة (مثال: 01012345678 وسيتم إضافة مفتاح الدولة تلقائياً):', teacherPhone || '01');
        if (!inputPhone) return;

        let cleanPhone = inputPhone.replace(/[^\d]/g, '');
        // Automatic country code addition (Prepend 2 for Egypt if local 01xxxxxxxxx is entered)
        if (cleanPhone.startsWith('01') && cleanPhone.length === 11) {
            cleanPhone = '2' + cleanPhone; // Becomes 201012345678 (+20)
        } else if (!cleanPhone.startsWith('20') && cleanPhone.length === 10 && cleanPhone.startsWith('1')) {
            cleanPhone = '20' + cleanPhone; // Handles 1012345678 -> 201012345678
        }
        
        localStorage.setItem('teacherWhatsappPhone', cleanPhone);

        const items = pageCard.querySelectorAll('.question-box');
        let answersReport = [];
        let totalItems = items.length;
        let correctCount = 0;

        items.forEach((item, idx) => {
            const input = item.querySelector('.clean-input, .dots-input');
            const studentVal = input ? input.value.trim() : 'لم يُجب';
            const expected = (item.dataset.answer || '').trim();
            
            const normExpected = expected.toLowerCase().replace(/\s+/g, ' ').replace(/[.-]/g, '');
            const normStudent = studentVal.toLowerCase().replace(/\s+/g, ' ').replace(/[.-]/g, '');
            
            const isCorrect = normExpected && normStudent === normExpected;
            if (isCorrect) correctCount++;
            
            answersReport.push(`س${idx+1}: ${studentVal} ${isCorrect ? '✅' : '❌ (المطلوب: ' + expected + ')'}`);
        });

        const studentName = localStorage.getItem('currentUser') || 'طالب';
        const msgHeader = `*تقرير حل الطالب في الكتاب التفاعلي* 📚✨\n` +
                          `👤 *اسم الطالب:* ${studentName}\n` +
                          `📖 *الصفحة:* ${data.pageNumber} (${data.unit} - ${data.lesson || data.title})\n` +
                          `🎯 *النتيجة:* ${correctCount} من ${totalItems}\n` +
                          `-----------------------------------\n` +
                          `*تفاصيل الإجابات:*\n` +
                          answersReport.join('\n') + `\n` +
                          `-----------------------------------\n` +
                          `تم الحل عبر منصة English Toon 🚀`;

        const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msgHeader)}`;
        window.open(waUrl, '_blank');
    }

    if (btnSendWhatsapp) btnSendWhatsapp.addEventListener('click', sendToWhatsapp);
    if (btnModalWhatsapp) btnModalWhatsapp.addEventListener('click', sendToWhatsapp);

    btnModalClose.addEventListener('click', () => {
        resultModal.classList.add('hidden');
    });

    btnModalNext.addEventListener('click', () => {
        resultModal.classList.add('hidden');
        if (currentPageIndex < pagesData.length - 1) {
            flipToPage(currentPageIndex + 1, 'next');
        }
    });

    function openSidebarDrawer() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
    }

    function closeSidebarDrawer() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    }

    btnToggleSidebar.addEventListener('click', openSidebarDrawer);
    btnCloseSidebar.addEventListener('click', closeSidebarDrawer);
    sidebarOverlay.addEventListener('click', closeSidebarDrawer);

    sidebarSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.grid-page-btn').forEach(btn => {
            const pNum = btn.querySelector('.num').textContent;
            const pData = pagesData[parseInt(btn.dataset.index)];
            const match = pNum.includes(query) || pData.unit.toLowerCase().includes(query) || pData.lesson.toLowerCase().includes(query);
            btn.style.display = match ? 'flex' : 'none';
        });
    });

    btnSoundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        btnSoundToggle.classList.toggle('active', soundEnabled);
        btnSoundToggle.innerHTML = soundEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
    });

    initNavigation();
    goToPage(0);
});
