// Translation data
const translations = {
    zh: {
        'tagline': '在成长中探索，在实践中学习',
        'about-title': '关于我',
        'about-text': '在学习如何成为一名优秀的产品经理。<br><br>目前能做的：用 n8n 搭建AI自动化工作流优化业务流程，有时候能独立闭环一个完整需求。具有一定的产研结合能力。<br><br>但我很清楚，这还不够。优秀的产品经理不只是"问题解决者"，更应该是"问题定义者"——能看透需求背后的真实问题，能重新定义问题本身。我还在这条路上。',
        'skills-title': '我现在能做什么',
        'skill1-title': 'AI 自动化工作流',
        'skill1-desc': '用 n8n 搭建自动化流程，提升业务效率',
        'skill2-title': '产研结合',
        'skill2-desc': '理解技术实现，独立闭环业务需求',
        'skill3-title': '快速学习',
        'skill3-desc': '拥抱新工具和技术，持续迭代认知',
        'future-title': '我在追求什么',
        'future-text': '<strong>短期目标：</strong>从"问题解决者"成长为"问题定义者"。不仅要解决需求，更要理解需求背后的本质问题。<br><br><strong>长期愿景：</strong>深耕AI产品领域，打造真正解决用户痛点的产品。通过更多实践积累产品sense，建立系统的方法论。',
        'contact-title': '联系方式',
        'footer': '&copy; 2025 Bozheng Long'
    },
    en: {
        'tagline': 'Exploring through growth, learning through practice',
        'about-title': 'About Me',
        'about-text': 'Learning how to become an excellent product manager.<br><br>What I can do now: Build AI automation workflows with n8n to optimize business processes, and sometimes independently deliver complete requirements end-to-end. I have some product-engineering integration capabilities.<br><br>But I know it\'s not enough. Excellent product managers are not just "problem solvers," but "problem definers" — able to see through the real issues behind requirements and redefine the problems themselves. I\'m still on this journey.',
        'skills-title': 'What I Can Do',
        'skill1-title': 'AI Automation Workflows',
        'skill1-desc': 'Build automation processes with n8n to improve efficiency',
        'skill2-title': 'Product-Engineering Integration',
        'skill2-desc': 'Understand technical implementation, deliver requirements independently',
        'skill3-title': 'Fast Learning',
        'skill3-desc': 'Embrace new tools and technologies, iterate continuously',
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
});
