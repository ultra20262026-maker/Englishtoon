// Announcement Ticker Banner Script
(function() {
    function injectBanner() {
        if (document.getElementById('whatsapp-ticker-banner')) return;

        const banner = document.createElement('a');
        banner.id = 'whatsapp-ticker-banner';
        banner.href = 'https://wa.me/201208609509?text=' + encodeURIComponent('مرحباً، أريد الاشتراك في بوابة الألعاب التعليمية (English Toon)');
        banner.target = '_blank';
        banner.rel = 'noopener noreferrer';
        
        banner.innerHTML = `
            <div class="ticker-content">
                <span class="ticker-badge">⚠️ إعلان مهم</span>
                <span class="ticker-text">أنت الآن تستخدم النسخة المجانية، للاشتراك تواصل على الواتس التالي: <strong class="phone-num">01208609509 💬</strong></span>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            #whatsapp-ticker-banner {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                background: linear-gradient(90deg, #11998e, #38ef7d, #11998e);
                background-size: 200% 100%;
                animation: tickerBG 5s linear infinite;
                color: #ffffff;
                text-decoration: none;
                z-index: 999999;
                box-shadow: 0 4px 15px rgba(0,0,0,0.4);
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, 'Fredoka One';
                direction: rtl;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 15px;
                cursor: pointer;
                border-bottom: 2px solid rgba(255,255,255,0.4);
                transition: filter 0.2s ease;
            }
            #whatsapp-ticker-banner:hover {
                filter: brightness(1.1);
            }
            @keyframes tickerBG {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .ticker-content {
                display: flex;
                align-items: center;
                gap: 12px;
                font-size: 1.05rem;
                font-weight: 700;
                text-shadow: 0 1px 3px rgba(0,0,0,0.5);
                flex-wrap: wrap;
                justify-content: center;
                text-align: center;
            }
            .ticker-badge {
                background: #e74c3c;
                color: white;
                padding: 3px 10px;
                border-radius: 12px;
                font-size: 0.85rem;
                font-weight: 900;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                animation: pulseBadge 1.5s infinite;
            }
            @keyframes pulseBadge {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.08); }
            }
            .phone-num {
                background: rgba(0, 0, 0, 0.25);
                padding: 2px 10px;
                border-radius: 8px;
                letter-spacing: 1px;
                color: #fff;
                border: 1px solid rgba(255,255,255,0.4);
            }
            body {
                padding-top: 48px !important;
            }
            @media (max-width: 600px) {
                #whatsapp-ticker-banner {
                    padding: 8px 10px;
                }
                .ticker-content {
                    font-size: 0.85rem;
                    gap: 6px;
                }
                .ticker-badge {
                    font-size: 0.75rem;
                    padding: 2px 6px;
                }
                body {
                    padding-top: 55px !important;
                }
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(banner);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectBanner);
    } else {
        injectBanner();
    }
})();
