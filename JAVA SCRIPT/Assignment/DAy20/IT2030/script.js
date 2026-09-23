/**
 * ==============================================================================
 * IT IN 2030 - JAVASCRIPT ENGINE
 * Clean, modern, beginner-friendly code with clear explanations for trainers & classmates!
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
     * 1. ACTIVE NAVIGATION & STICKY NAVBAR EFFECT
     * -------------------------------------------------------------------------- */
    const navbar = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Highlight current page in navbar
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Add shadow when scrolled
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('open');
            menuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking outside or on a link
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                navLinksContainer.classList.remove('open');
            }
        });
    }

    /* --------------------------------------------------------------------------
     * 2. AMBIENT CYBER PARTICLE CANVAS BACKGROUND
     * Creates a lightweight futuristic node constellation in the background.
     * -------------------------------------------------------------------------- */
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const particles = [];
        const particleCount = Math.min(Math.floor(window.innerWidth / 20), 55);

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.45;
                this.vy = (Math.random() - 0.5) * 0.45;
                this.radius = Math.random() * 1.8 + 0.8;
                this.color = Math.random() > 0.5 ? '0, 242, 254' : '168, 85, 247';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, 0.65)`;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw faint lines between close particles
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 110) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 242, 254, ${0.14 * (1 - dist / 110)})`;
                        ctx.lineWidth = 0.6;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateCanvas);
        }

        animateCanvas();

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
    }

    /* --------------------------------------------------------------------------
     * 3. PAGE 1: INTERACTIVE 2026 -> 2028 -> 2030 TIMELINE STEPPER
     * -------------------------------------------------------------------------- */
    const timelineButtons = document.querySelectorAll('.timeline-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineButtons.length && timelineItems.length) {
        timelineButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetYear = btn.getAttribute('data-year');

                // Update active button state
                timelineButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Display corresponding year panel
                timelineItems.forEach(item => {
                    if (item.getAttribute('data-year') === targetYear) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            });
        });
    }

    // "Enter the Future" Smooth Scroll Button
    const enterFutureBtn = document.getElementById('enterFutureBtn');
    if (enterFutureBtn) {
        enterFutureBtn.addEventListener('click', () => {
            const targetSection = document.getElementById('tech-pillars');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    /* --------------------------------------------------------------------------
     * 4. PAGE 2: MASTER "IT ON / IT OFF" GLOBAL INTERACTIVE SWITCH
     * Simulates what happens to modern society when IT vanishes.
     * -------------------------------------------------------------------------- */
    const itMasterSwitch = document.getElementById('itMasterSwitch');
    const globalStatusDesc = document.getElementById('globalStatusDesc');
    const onLabel = document.querySelector('.toggle-state-text.on-text');
    const offLabel = document.querySelector('.toggle-state-text.off-text');
    const sectorTags = document.querySelectorAll('.sector-tag');

    // Synthesize gentle futuristic audio click using Web Audio API
    function playCyberBeep(isOn) {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = isOn ? 'sine' : 'sawtooth';
            osc.frequency.setValueAtTime(isOn ? 880 : 220, audioCtx.currentTime); // High pitch for ON, deep buzz for OFF
            osc.frequency.exponentialRampToValueAtTime(isOn ? 1320 : 110, audioCtx.currentTime + 0.12);

            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + 0.13);
        } catch (e) {
            // Audio context not allowed until user interacts; silent fallback
        }
    }

    if (itMasterSwitch) {
        itMasterSwitch.addEventListener('change', () => {
            const isITActive = itMasterSwitch.checked;
            playCyberBeep(isITActive);

            if (isITActive) {
                // IT IS ONLINE
                document.body.classList.remove('blackout-mode');
                if (globalStatusDesc) {
                    globalStatusDesc.innerHTML = `<span style="color: var(--cyan-primary);">● DIGITAL NETWORK OPERATIONAL</span> — Cloud, AI, and digital infrastructure active across all 8 sectors.`;
                }
                sectorTags.forEach(tag => {
                    tag.textContent = 'ONLINE';
                    tag.classList.remove('tag-off');
                    tag.classList.add('tag-on');
                });
            } else {
                // IT IS OFFLINE (SIMULATED BLACKOUT)
                document.body.classList.add('blackout-mode');
                if (globalStatusDesc) {
                    globalStatusDesc.innerHTML = `<span style="color: var(--rose-offline);">⚠️ SYSTEM COLLAPSE: ANALOG ONLY</span> — No servers, no smartphones, no cloud. Society falls back to manual methods.`;
                }
                sectorTags.forEach(tag => {
                    tag.textContent = 'ANALOG FALLBACK';
                    tag.classList.remove('tag-on');
                    tag.classList.add('tag-off');
                });
            }
        });
    }

    /* --------------------------------------------------------------------------
     * 5. PAGE 3: CAREER MODE TOGGLE & ROADMAP INTERACTION
     * "IT Career Path" vs "Alternative Craft / Engineer Path"
     * -------------------------------------------------------------------------- */
    const careerToggleBtns = document.querySelectorAll('.career-toggle-btn');
    const itCareerSummary = document.getElementById('itCareerSummary');
    const altCareerSummary = document.getElementById('altCareerSummary');

    if (careerToggleBtns.length) {
        careerToggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                careerToggleBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const mode = btn.getAttribute('data-mode');
                if (mode === 'it') {
                    if (itCareerSummary) itCareerSummary.style.display = 'block';
                    if (altCareerSummary) altCareerSummary.style.display = 'none';
                } else {
                    if (itCareerSummary) itCareerSummary.style.display = 'none';
                    if (altCareerSummary) altCareerSummary.style.display = 'block';
                }
            });
        });
    }

    // Interactive Step Cards on Page 3
    const roadmapCards = document.querySelectorAll('.roadmap-card');
    roadmapCards.forEach(card => {
        card.addEventListener('click', () => {
            roadmapCards.forEach(c => c.style.borderColor = 'var(--card-border)');
            card.style.borderColor = 'var(--cyan-primary)';
            card.style.boxShadow = '0 0 25px var(--cyan-glow)';
        });
    });

    /* --------------------------------------------------------------------------
     * 6. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
     * Automatically animates cards and sections into view as the user scrolls.
     * -------------------------------------------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('active'));
    }

});