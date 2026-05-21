/**
 * Andi Italia - Interactive Features
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Elements ---
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section, footer');
    const scrollTopBtn = document.getElementById('scroll-to-top');
    
    // --- Sticky Header & Scroll Top ---
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Controllo iniziale

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Menu Mobile (Apertura / Chiusura e Blocco Scroll della pagina) ---
    const toggleMobileMenu = () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    hamburger.addEventListener('click', toggleMobileMenu);

    // Chiusura automatica del menu cliccando un link di navigazione
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // --- Scrollspy (Evidenziazione automatica voce attiva nel menu) ---
    const scrollspy = () => {
        const scrollPosition = window.scrollY + 140;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', scrollspy);
    scrollspy();
});