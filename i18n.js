// i18n.js — i18n dictionary + switcher for HK stock dashboard
// Bilingual support: Chinese (zh) + English (en)
(function() {
    'use strict';

    // ====== Static UI translations ======
    const UI = {
        zh: {
            // Header
            'title': '🇭🇰 港股板塊 Trend',
            'subtitle_index': '📊 美股 Dashboard →',
            // Period buttons
            'period_3m': '3月',
            'period_6m': '6月',
            'period_1y': '1年',
            // View mode
            'view_cumulative': '累計 (Base 100)',
            'view_daily': '每日回報 %',
            // Summary section
            'label_best': '🏆 最佳',
            'label_worst': '📉 最差',
            'label_avg': '📊 平均',
            'groups_unit': '個板塊',
            // Indices section
            'index_hsi': '📈 恆生指數 (HSI)',
            'index_hsce': '📈 國企指數 (HSCEI)',
            'index_hstech': '📈 恆生科技 ETF (HSTECH proxy)',
            'period_1d': '1日',
            'period_1w': '1週',
            'period_1m': '1月',
            // Table
            'table_title': '📋 按板塊群組分類',
            'table_meta_prefix': '顯示',
            'table_meta_suffix': '個板塊',
            'col_group': '群組',
            'col_sector': '類別',
            'col_1d': '1日%',
            'col_1w': '1週%',
            'col_1m': '1月%',
            'col_tickers': '股票',
            'filter_sector': '板塊:',
            'filter_ticker': '搜尋:',
            'filter_all_sectors': '所有板塊',
            'btn_reset': '重設',
            'placeholder_ticker': '例如 0700.HK',
            'empty_msg': '沒有符合條件的板塊。',
            'stocks_count': '隻股票',
            'indices_count': '個指數',
            // Footer
            'nav_us': '📊 美股 Dashboard',
            'nav_hk_current': '🇭🇰 港股 Dashboard (目前)',
            'nav_feedback': '💬 意見/建議',
            'feedback_section_title': '💬 意見 / 建議 / 優化建議',
            'feedback_section_desc': '想見到啲咩？想優化邊度？留言話我哋知！（用 GitHub 賬號登入即可）',
            'powered_by': 'Powered by Eagle (Nigel AI)',
            // Misc
            'updated_prefix': '更新於',
            'updated_sep': '·',
            'failed_load': '⚠️ 載入失敗',
        },
        en: {
            'title': '🇭🇰 HK Stock Sector Trend',
            'subtitle_index': '📊 US Stocks Dashboard →',
            'period_3m': '3M',
            'period_6m': '6M',
            'period_1y': '1Y',
            'view_cumulative': 'Cumulative (Base 100)',
            'view_daily': 'Daily Return %',
            'label_best': '🏆 Best',
            'label_worst': '📉 Worst',
            'label_avg': '📊 Avg Group',
            'groups_unit': 'groups',
            'index_hsi': '📈 Hang Seng Index (HSI)',
            'index_hsce': '📈 HSCE (China Enterprises)',
            'index_hstech': '📈 HSTECH ETF proxy',
            'period_1d': '1D',
            'period_1w': '1W',
            'period_1m': '1M',
            'table_title': '📋 Stock Composition by Industrial Group',
            'table_meta_prefix': 'Showing',
            'table_meta_suffix': 'groups',
            'col_group': 'Group',
            'col_sector': 'Cluster',
            'col_1d': '1D %',
            'col_1w': '1W %',
            'col_1m': '1M %',
            'col_tickers': 'Tickers',
            'filter_sector': 'Sector:',
            'filter_ticker': 'Ticker:',
            'filter_all_sectors': 'All Sectors',
            'btn_reset': 'Reset',
            'placeholder_ticker': 'e.g. 0700.HK',
            'empty_msg': 'No groups match the current filters.',
            'stocks_count': 'stocks',
            'indices_count': 'indices',
            'nav_us': '📊 US Stocks Dashboard',
            'nav_hk_current': '🇭🇰 HK Stock Dashboard (current)',
            'nav_feedback': '💬 Feedback',
            'feedback_section_title': '💬 Feedback / Suggestions / Ideas',
            'feedback_section_desc': 'What would you like to see? How can we improve? Sign in with GitHub to leave a comment!',
            'powered_by': 'Powered by Eagle (Nigel AI)',
            'updated_prefix': 'Updated',
            'updated_sep': '·',
            'failed_load': '⚠️ Failed to load data',
        }
    };

    // ====== Sector (cluster) translations ======
    const SECTOR = {
        zh: {
            'Information Technology': '資訊科技',
            'Communication Services': '通訊服務',
            'Consumer Discretionary': '非必需消費',
            'Consumer Staples': '必需消費',
            'Health Care': '醫療保健',
            'Financials': '金融',
            'Energy': '能源',
            'Industrials': '工業',
            'Materials': '原材料',
            'Utilities': '公用事業',
            'Real Estate': '房地產',
            'Conglomerates': '綜合企業',
        },
        en: {
            'Information Technology': 'Information Technology',
            'Communication Services': 'Communication Services',
            'Consumer Discretionary': 'Consumer Discretionary',
            'Consumer Staples': 'Consumer Staples',
            'Health Care': 'Health Care',
            'Financials': 'Financials',
            'Energy': 'Energy',
            'Industrials': 'Industrials',
            'Materials': 'Materials',
            'Utilities': 'Utilities',
            'Real Estate': 'Real Estate',
            'Conglomerates': 'Conglomerates',
        }
    };

    // ====== Industrial Group translations (HK-specific) ======
    const GROUP = {
        zh: {
            'Internet Platforms': '互聯網平台',
            'Software SaaS': '軟件 SaaS',
            'Hardware': '硬件',
            'Semiconductors': '半導體',
            'Gaming': '遊戲',
            'Telecom Carriers': '電訊商',
            'Electric Vehicles': '電動車',
            'E-commerce Retail': '電商零售',
            'Restaurants': '餐飲',
            'Consumer Durables HK': '消費耐久品',
            'Food & Beverage': '食品飲料',
            'Pharmaceuticals': '製藥',
            'Medical Devices': '醫療器械',
            'Healthcare Services': '醫療服務',
            'Mainland Banks': '內地銀行',
            'International Banks': '國際銀行',
            'Insurance': '保險',
            'Brokerage & Exchange': '券商及交易所',
            'Mainland Property': '內房',
            'Property Management': '物業管理',
            'REITs & Rentals': 'REITs 及收租',
            'Shipping & Ports': '航運及港口',
            'Airlines': '航空',
            'Machinery': '機械',
            'Oil & Gas': '石油天然氣',
            'Gas Utilities': '燃氣',
            'Coal': '煤炭',
            'Metals & Mining': '金屬及採礦',
            'Power Utilities': '電力',
            'Water & Environment': '水務及環保',
            'Conglomerates': '綜合企業',
        },
        en: {
            'Internet Platforms': 'Internet Platforms',
            'Software SaaS': 'Software SaaS',
            'Hardware': 'Hardware',
            'Semiconductors': 'Semiconductors',
            'Gaming': 'Gaming',
            'Telecom Carriers': 'Telecom Carriers',
            'Electric Vehicles': 'Electric Vehicles',
            'E-commerce Retail': 'E-commerce Retail',
            'Restaurants': 'Restaurants',
            'Consumer Durables HK': 'Consumer Durables (HK)',
            'Food & Beverage': 'Food & Beverage',
            'Pharmaceuticals': 'Pharmaceuticals',
            'Medical Devices': 'Medical Devices',
            'Healthcare Services': 'Healthcare Services',
            'Mainland Banks': 'Mainland Banks',
            'International Banks': 'International Banks',
            'Insurance': 'Insurance',
            'Brokerage & Exchange': 'Brokerage & Exchange',
            'Mainland Property': 'Mainland Property',
            'Property Management': 'Property Management',
            'REITs & Rentals': 'REITs & Rentals',
            'Shipping & Ports': 'Shipping & Ports',
            'Airlines': 'Airlines',
            'Machinery': 'Machinery',
            'Oil & Gas': 'Oil & Gas',
            'Gas Utilities': 'Gas Utilities',
            'Coal': 'Coal',
            'Metals & Mining': 'Metals & Mining',
            'Power Utilities': 'Power Utilities',
            'Water & Environment': 'Water & Environment',
            'Conglomerates': 'Conglomerates',
        }
    };

    // ====== State ======
    let currentLang = 'zh';  // default

    function detectLang(defaultLang) {
        // 1. URL hash override: #lang=en
        if (location.hash.includes('lang=')) {
            const m = location.hash.match(/lang=([a-z]{2})/);
            if (m && (m[1] === 'zh' || m[1] === 'en')) return m[1];
        }
        // 2. localStorage
        const stored = localStorage.getItem('eagle_dashboard_lang');
        if (stored === 'zh' || stored === 'en') return stored;
        // 3. Browser language
        const bl = (navigator.language || 'zh').toLowerCase();
        if (bl.startsWith('zh')) return 'zh';
        if (bl.startsWith('en')) return 'en';
        // 4. Default
        return defaultLang || 'zh';
    }

    function setLang(lang) {
        if (lang !== 'zh' && lang !== 'en') return;
        currentLang = lang;
        localStorage.setItem('eagle_dashboard_lang', lang);
        document.documentElement.lang = (lang === 'zh') ? 'zh-TW' : 'en';
        applyTranslations();
    }

    function t(key) {
        return (UI[currentLang] && UI[currentLang][key]) || (UI.en[key]) || key;
    }

    function tGroup(name) {
        return (GROUP[currentLang] && GROUP[currentLang][name]) || name;
    }

    function tSector(name) {
        return (SECTOR[currentLang] && SECTOR[currentLang][name]) || name;
    }

    function applyTranslations() {
        // Static data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const val = t(key);
            if (val) el.textContent = val;
        });
        // data-i18n-placeholder for input
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            const val = t(key);
            if (val) el.placeholder = val;
        });
        // Notify main app to re-render (chart titles, table, summary)
        document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: currentLang } }));
    }

    // Expose API
    window.EagleI18n = {
        detect: detectLang,
        set: setLang,
        get: () => currentLang,
        t, tGroup, tSector,
        apply: applyTranslations,
        UI, SECTOR, GROUP,
    };
})();
