// Initialize particles.js
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#6366f1" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#6366f1",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            },
            retina_detect: true
        });

        // Preloader
        window.addEventListener('load', function() {
            const preloader = document.querySelector('.preloader');
            setTimeout(function() {
                preloader.classList.add('hidden');
            }, 1500);
        });

        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile nav when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Active navigation link on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });

            // Header scroll effect
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Scroll progress bar
            const scrollProgress = document.querySelector('.scroll-progress');
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            scrollProgress.style.width = scrolled + '%';

            // Show/hide floating buttons
            const backToTopButton = document.querySelector('.back-to-top');
            const floatingBtn = document.querySelector('.floating-btn');
            
            if (window.pageYOffset > 500) {
                backToTopButton.classList.add('active');
                floatingBtn.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
                floatingBtn.classList.remove('active');
            }
        });
        
        // Back to top button
        const backToTopButton = document.querySelector('.back-to-top');
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Project filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Form validation
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                if (name && email && message) {
                    // Show success notification
                    showNotification('Message sent successfully!', 'success');
                    contactForm.reset();
                } else {
                    showNotification('Please fill all fields', 'error');
                }
            });
        }
        
        // Animate elements on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.skill-category, .experience-item, .project-card, .leadership-item, .testimonial, .contact-info-item, .contact-form, .timeline-item');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('visible');
                    
                    // Animate skill bars
                    if (element.classList.contains('skill-category')) {
                        animateSkillBars();
                    }
                }
            });
        };
        
        // Animate skill bars
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        }
        
        // Set initial state for animated elements
        document.querySelectorAll('.skill-category, .experience-item, .project-card, .leadership-item, .testimonial, .contact-info-item, .contact-form, .timeline-item').forEach(element => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        // Trigger once on load
        window.addEventListener('load', animateOnScroll);
        
        // Add floating icons animation
        const floatingIcons = document.querySelectorAll('.floating-icon');
        
        floatingIcons.forEach(icon => {
            // Random initial position and animation
            const randomX = (Math.random() - 0.5) * 40;
            const randomY = (Math.random() - 0.5) * 40;
            const randomDelay = Math.random() * 5;
            const randomDuration = 10 + Math.random() * 10;
            
            icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
            icon.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;
        });
        
        // Add keyframes for floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% { transform: translate(0, 0) rotate(0deg); }
                50% { transform: translate(10px, 10px) rotate(5deg); }
                100% { transform: translate(-10px, -10px) rotate(-5deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Theme toggle functionality
        const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            
            if (document.body.classList.contains('light-theme')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
        
        // Notification function
        function showNotification(message, type) {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <span>${message}</span>
                <button onclick="this.parentElement.remove()">&times;</button>
            `;
            
            document.body.appendChild(notification);
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 5000);
        }

        // Download Resume functionality
        const downloadBtn = document.getElementById('downloadResume');
        const floatingDownloadBtn = document.querySelector('.floating-btn');
        
        function downloadResume() {
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = '#'; // Replace with actual resume URL
            link.download = 'Rohan_Kumar_Jha_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show success notification
            showNotification('Resume downloaded successfully!', 'success');
        }
        
        downloadBtn.addEventListener('click', downloadResume);
        floatingDownloadBtn.addEventListener('click', downloadResume);

        // Custom cursor
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        document.addEventListener('mousemove', (e) => {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
            
            cursorOutline.style.left = `${e.clientX}px`;
            cursorOutline.style.top = `${e.clientY}px`;
        });

        // Interactive cursor on clickable elements
        const clickableElements = document.querySelectorAll('a, button, .project-card, .skill-category, .experience-item');
        
        clickableElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.border = '1px solid var(--primary)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.border = '2px solid var(--primary)';
            });
        });

        // Wave animation
        const waveElements = document.querySelectorAll('.wave');
        waveElements.forEach(element => {
            element.addEventListener('click', () => {
                element.style.animation = 'none';
                setTimeout(() => {
                    element.style.animation = 'wave-animation 2.5s infinite';
                }, 10);
            });
        });

        // Confetti animation
        function createConfetti() {
            const confettiContainer = document.createElement('div');
            confettiContainer.className = 'confetti';
            
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-piece';
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.animationDelay = `${Math.random() * 5}s`;
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                confettiContainer.appendChild(confetti);
            }
            
            document.body.appendChild(confettiContainer);
            
            setTimeout(() => {
                confettiContainer.remove();
            }, 5000);
        }

        // Add light theme styles
        const lightThemeStyles = document.createElement('style');
        lightThemeStyles.textContent = `
            .light-theme {
                --darker: #e5e7eb;
                --dark: #f9fafb;
                --light: #1f2937;
                --gray: #4b5563;
            }
            
            .light-theme .hero,
            .light-theme .about,
            .light-theme .experience,
            .light-theme .leadership {
                background: #f9fafb;
            }
            
            .light-theme .education-skills,
            .light-theme .projects,
            .light-theme .testimonials {
                background: #e5e7eb;
            }
            
            .light-theme .contact {
                background: linear-gradient(to bottom, #f9fafb, #e5e7eb);
            }
            
            .light-theme footer {
                background: #e5e7eb;
                color: #1f2937;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            .light-theme header {
                background-color: rgba(249, 250, 251, 0.95);
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            .light-theme .nav-links a {
                color: #4b5563;
            }
            
            .light-theme .nav-links a:hover,
            .light-theme .nav-links a.active {
                color: #1f2937;
            }
            
            .light-theme .stat-box,
            .light-theme .timeline-content,
            .light-theme .skill-category,
            .light-theme .experience-item,
            .light-theme .project-card,
            .light-theme .leadership-item,
            .light-theme .testimonial,
            .light-theme .contact-form {
                background: rgba(0, 0, 0, 0.05);
            }
            
            .light-theme .stat-box:hover,
            .light-theme .timeline-content:hover,
            .light-theme .skill-category:hover,
            .light-theme .experience-item:hover,
            .light-theme .project-card:hover,
            .light-theme .leadership-item:hover,
            .light-theme .testimonial:hover {
                background: rgba(0, 0, 0, 0.1);
            }
            
            .light-theme .social-links a {
                background: rgba(0, 0, 0, 0.08);
                color: #1f2937;
            }
            
            .light-theme .form-group input,
            .light-theme .form-group textarea {
                background: rgba(0, 0, 0, 0.08);
                border: 1px solid rgba(0, 0, 0, 0.1);
                color: #1f2937;
            }
            
            .light-theme .form-group input:focus,
            .light-theme .form-group textarea:focus {
                border-color: var(--primary);
                background: rgba(0, 0, 0, 0.12);
            }
            
            .light-theme .filter-btn {
                background: rgba(0, 0, 0, 0.05);
                color: #4b5563;
            }

            .light-theme .skill-bar {
                background: rgba(0, 0, 0, 0.1);
            }
        `;
        document.head.appendChild(lightThemeStyles);