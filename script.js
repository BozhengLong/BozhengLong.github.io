// Translation data
const translations = {
    zh: {
        'tagline': '在成长中探索，在实践中学习',
        'about-title': '关于我',
        'about-text': 'AI 产品经理，具备全栈开发能力。<br><br>我能够借助 AI 独立完成从产品设计到技术实现的完整交付，快速将想法转化为可用的产品原型。不依赖传统开发流程，直接用 AI 工具链实现端到端的产品开发。<br><br>我相信优秀的产品经理不只是"问题解决者"，更应该是"问题定义者"——能看透需求背后的真实问题，能重新定义问题本身。这是我持续追求的方向。',
        'skills-title': '核心能力',
        'skill1-title': 'AI 全栈开发',
        'skill1-desc': '借助 AI 工具链独立完成前后端开发，快速实现产品从 0 到 1',
        'skill2-title': '产品全流程交付',
        'skill2-desc': '从需求洞察、原型设计到技术实现的完整闭环，无需依赖传统开发团队',
        'skill3-title': '快速产品验证',
        'skill3-desc': '用 AI 加速开发周期，将产品想法在最短时间内转化为可用原型',
        'future-title': '我在追求什么',
        'future-text': '<strong>短期目标：</strong>从"问题解决者"成长为"问题定义者"。不仅要解决需求，更要理解需求背后的本质问题。<br><br><strong>长期愿景：</strong>深耕AI产品领域，打造真正解决用户痛点的产品。通过更多实践积累产品sense，建立系统的方法论。',
        'contact-title': '联系方式',
        'footer': '&copy; 2025 Bozheng Long'
    },
    en: {
        'tagline': 'Exploring through growth, learning through practice',
        'about-title': 'About Me',
        'about-text': 'AI Product Manager with full-stack development capabilities.<br><br>I independently deliver complete products from design to implementation using AI tools, rapidly transforming ideas into working prototypes. No traditional development process needed — I ship end-to-end with AI toolchain.<br><br>I believe excellent product managers are not just "problem solvers," but "problem definers" — able to see through the real issues behind requirements and redefine the problems themselves. This is the direction I continuously pursue.',
        'skills-title': 'Core Capabilities',
        'skill1-title': 'AI Full-Stack Development',
        'skill1-desc': 'Independently build front-end and back-end with AI toolchain, shipping products from 0 to 1',
        'skill2-title': 'End-to-End Product Delivery',
        'skill2-desc': 'Complete loop from insight to prototype to implementation, no traditional dev team needed',
        'skill3-title': 'Rapid Product Validation',
        'skill3-desc': 'Accelerate development cycles with AI, turning ideas into working prototypes in minimal time',
        'future-title': 'What I\'m Pursuing',
        'future-text': '<strong>Short-term goal:</strong> Grow from a "problem solver" to a "problem definer." Not just solving requirements, but understanding the essential problems behind them.<br><br><strong>Long-term vision:</strong> Dive deep into AI products, creating solutions that truly address user pain points. Build systematic methodologies through more practice.',
        'contact-title': 'Contact',
        'footer': '&copy; 2025 Bozheng Long'
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // Language toggle functionality
    const langToggle = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('language') || 'zh';

    // Set initial language
    setLanguage(currentLang);

    // Language toggle click event
    langToggle.addEventListener('click', function() {
        // Add switching animation
        langToggle.classList.add('switching');
        setTimeout(() => {
            langToggle.classList.remove('switching');
        }, 400);

        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        setLanguage(currentLang);
        localStorage.setItem('language', currentLang);
    });

    function setLanguage(lang) {
        // Update button text
        langToggle.textContent = lang === 'zh' ? 'EN' : '中';

        // Update all translated elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add fade-in effect to sections
    const sections = document.querySelectorAll('.about, .skills, .future, .contact');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Hero section fade in on load
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        hero.style.transition = 'opacity 1s ease, transform 1s ease';

        setTimeout(() => {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }

    // Add subtle parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });

    // Scroll Progress Bar
    const scrollProgress = document.getElementById('scrollProgress');
    let ticking = false;

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (window.pageYOffset / windowHeight) * 100;
                scrollProgress.style.width = scrolled + '%';
                ticking = false;
            });
            ticking = true;
        }
    });

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Keyboard shortcuts
    const keyboardHint = document.getElementById('keyboardHint');
    let hintTimeout;

    function showKeyboardHint(message) {
        keyboardHint.innerHTML = message;
        keyboardHint.classList.add('visible');
        clearTimeout(hintTimeout);
        hintTimeout = setTimeout(() => {
            keyboardHint.classList.remove('visible');
        }, 2000);
    }

    document.addEventListener('keydown', function(e) {
        // T key - Back to top
        if (e.key === 't' || e.key === 'T') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            showKeyboardHint('Press <kbd>T</kbd> to go top');
        }

        // L key - Toggle language
        if (e.key === 'l' || e.key === 'L') {
            e.preventDefault();
            langToggle.click();
            showKeyboardHint('Press <kbd>L</kbd> to switch language');
        }

        // ? key - Show all shortcuts
        if (e.key === '?') {
            e.preventDefault();
            const shortcuts = currentLang === 'zh'
                ? '<kbd>T</kbd> 回到顶部 · <kbd>L</kbd> 切换语言'
                : '<kbd>T</kbd> Top · <kbd>L</kbd> Language';
            showKeyboardHint(shortcuts);
        }
    });
});
