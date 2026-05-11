document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Fade-in on scroll
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.about, .projects, .contact').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Hero entrance
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

    // Subtle parallax on hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });

    // Scroll progress bar
    const scrollProgress = document.getElementById('scrollProgress');
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const pct = (window.pageYOffset / docHeight) * 100;
                scrollProgress.style.width = pct + '%';
                ticking = false;
            });
            ticking = true;
        }
    });

    // Back-to-top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Keyboard shortcut: T to top
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
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === 't' || e.key === 'T') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            showKeyboardHint('Press <kbd>T</kbd> to go top');
        }
    });
});
