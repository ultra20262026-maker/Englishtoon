(function() {
    function restrictGrades() {
        const allowedGrade = localStorage.getItem('allowedGrade');
        const currentUser = localStorage.getItem('currentUser');
        
        if (!allowedGrade || allowedGrade === 'all' || currentUser === 'admin') {
            return;
        }

        // Force current grade to be the allowed grade
        localStorage.setItem('et_current_grade', allowedGrade);

        const map = {
            'primary-1': ['الصف الأول الابتدائي', 'Primary 1', 'p1', '?id=primary-1', 'books/p1'],
            'primary-2': ['الصف الثاني الابتدائي', 'Primary 2', 'p2', '?id=primary-2', 'books/p2'],
            'primary-3': ['الصف الثالث الابتدائي', 'Primary 3', 'p3', '?id=primary-3', 'books/p3'],
            'primary-4': ['الصف الرابع الابتدائي', 'Primary 4', 'p4', '?id=primary-4', 'books/p4'],
            'primary-5': ['الصف الخامس الابتدائي', 'Primary 5', 'p5', '?id=primary-5', 'books/p5'],
            'primary-6': ['الصف السادس الابتدائي', 'Primary 6', 'p6', '?id=primary-6', 'books/p6'],
            'prep-1':    ['الصف الأول الإعدادي', 'Preparatory 1', '1g', '?id=prep-1', 'books/1g'],
            'prep-2':    ['الصف الثاني الإعدادي', 'Preparatory 2', '2g', '?id=prep-2', 'books/2g'],
            'prep-3':    ['الصف الثالث الإعدادي', 'Preparatory 3', '3a', '?id=prep-3', 'books/3a']
        };

        const allowedStrings = map[allowedGrade] || [];
        
        // 1. Dashboard Setup Form
        const gradeSelect = document.getElementById('home-grade');
        if (gradeSelect) {
            Array.from(gradeSelect.options).forEach(opt => {
                if (opt.value && opt.value !== allowedGrade) {
                    opt.style.display = 'none';
                    opt.disabled = true;
                }
            });
            gradeSelect.value = allowedGrade;
        }

        // 2. Hide tabs and panels in games.html
        document.querySelectorAll('[data-game-grade], [data-game-panel]').forEach(el => {
            const val = el.getAttribute('data-game-grade') || el.getAttribute('data-game-panel');
            if (val && val !== allowedGrade) {
                el.style.display = 'none';
            }
        });

        // 3. Hide other elements across books, exams, dictation
        const genericCards = document.querySelectorAll('.book-card, .grade-card, .dictation-grade, .exam-grade-card');
        genericCards.forEach(card => {
            // Check if this card belongs to ANOTHER grade and NOT the allowed grade
            const htmlLower = card.innerHTML.toLowerCase();
            const text = card.textContent.trim();
            
            let belongsToOther = false;
            let belongsToAllowed = false;

            for (const [gradeKey, strings] of Object.entries(map)) {
                const isMatch = strings.some(s => htmlLower.includes(s.toLowerCase()) || text.includes(s));
                if (isMatch) {
                    if (gradeKey === allowedGrade) {
                        belongsToAllowed = true;
                    } else {
                        belongsToOther = true;
                    }
                }
            }

            if (belongsToOther && !belongsToAllowed) {
                card.style.display = 'none';
            }
        });
        
        // Also ensure the first visible tab is activated if we hid the active one
        const visibleTabs = Array.from(document.querySelectorAll('.game-grade-tab')).filter(el => el.style.display !== 'none');
        if (visibleTabs.length > 0) {
            const hasActive = visibleTabs.some(el => el.classList.contains('active'));
            if (!hasActive) {
                visibleTabs[0].click();
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', restrictGrades);
    } else {
        restrictGrades();
    }
})();
