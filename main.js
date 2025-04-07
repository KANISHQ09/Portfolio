document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                formStatus.classList.add('success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formStatus.classList.remove('success');
                    formStatus.textContent = '';
                }, 5000);
            }, 1500);
        });
    }
    
    // GSAP Animations
    
    // Hero Section Animation
    gsap.to('.hero-content', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // About Section Animation
    gsap.to('.image-container', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.to('.about-text', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    // Skills Animation
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach((card, index) => {
        const progress = card.querySelector('.skill-progress');
        const progressValue = progress.getAttribute('data-progress');
        
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out',
            onComplete: () => {
                gsap.to(progress, {
                    width: `${progressValue}%`,
                    duration: 1.5,
                    ease: 'power3.out'
                });
            }
        });
    });
    
    // Projects Animation
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Contact Animation
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Animate section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Parallax effect for hero shapes
    gsap.to('.shape-1', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 100,
        x: 100,
        ease: 'none'
    });
    
    gsap.to('.shape-2', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: -100,
        x: -100,
        ease: 'none'
    });
    
    gsap.to('.shape-3', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 150,
        ease: 'none'
    });
});