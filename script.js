document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('#nav-links li a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Initialize Reveal on Scroll
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealConfig = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // stop observing after reveal if you want it to stay
                // revealObserver.unobserve(entry.target);
            }
        });
    }, revealConfig);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Link Swiper
    const swiper = new Swiper('.work-slider', {
        slidesPerView: 1.1,
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        allowTouchMove: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 1.7,
                spaceBetween: 50,
            },
        },
    });
});
