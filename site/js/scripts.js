

// ============================================
// EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// ============================================

const portfolioData = {
  // PERSONAL INFO
  personal: {
    name: "Mark Hintz",
    superHeader: "// MECHANICAL SYSTEMS & AUTOMATION",
    title: {
      line1: "Engineering Precision.",
      line2: "Automated Logic."
    },
    bio: "Bridging the gap between SolidWorks design and high-efficiency production through AI-driven custom tooling.",
    about:
      "Mechanical designer and modern toolmaker with experience in diesel-powered industrial pump systems, sound-attenuated enclosures, firearms and related accessories, and the design/development of planetary reduction gearboxes that power industrial tooling. I work at the intersection of hardware and software: designing real-world equipment in SolidWorks, supporting machine shops, fabrication, and assembly—while building AI-powered tools that reduce friction in engineering, documentation, and troubleshooting. I'm especially interested in roles that value practical, field-ready design plus smarter internal tools and workflows.",
    location: "Jacksonville, FL",
    email: "markworks.dev@gmail.com",
    phone: "(904) 862-1945",
    linkedin: "https://linkedin.com/in/mark-hintz-builds",
    footerCTA: "Come on. Let's build something cool together.",
    copyright: `© ${new Date().getFullYear()} Mark Hintz. All rights reserved.`
  },

  // NAVIGATION
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" }
  ],

  // HERO ACTIONS
  heroActions: [
    { label: "View resume", href: "assets/images/profile.webp", target: "_blank" },
    { label: "Email me", href: "mailto:markworks.dev@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/mark-hintz-builds", target: "_blank" }
  ],

  // PROJECTS
  projects: [
    {
      title: "PumpTracker (Production Scheduling + Capacity Planning)",
      category: "Internal tool • React/TypeScript • Firebase/Supabase",
      image: "assets/images/pumptracker-hero.png",
      gallery: [
        "assets/images/pumptracker-01.png",
        "assets/images/pumptracker-02.png",
        "assets/images/pumptracker-03.png",
        "assets/images/pumptracker-04.png"
      ]
    },
    {
      title: "Pump Package Design System (Skids, Enclosures, Mounts, Lifting)",
      category: "Mechanical design • SolidWorks • DFM/DFA",
      image: "assets/images/pump-package-hero.png",
      gallery: [
        "assets/images/pump-package-01.webp",
        "assets/images/pump-package-02.jpg",
        "assets/images/pump-package-03.png",
        "assets/images/pump-package-04.png"
      ]
    },
    {
      title: "Industrial Torque Wrench",
      category: "Mechanical design • Planetary gearboxes • Precision assemblies",
      image: "assets/images/torque-wrench-hero.webp",
      gallery: [
        "assets/images/torque-wrench-01.png",
        "assets/images/torque-wrench-02.jpg",
        "assets/images/torque-wrench-03.jpg",
        "assets/images/torque-wrench-04.jpg",
        "assets/images/torque-wrench-05.png",
        "assets/images/torque-wrench-06.png"
      ]
    },
    {
      title: "Renderings & Visualizations",
      category: "PhotoView 360 • SolidWorks Visualize • Product renders",
      image: "assets/images/renderings-hero.webp",
      gallery: [
        "assets/images/rendering-01.webp",
        "assets/images/rendering-02.jpg",
        "assets/images/rendering-03.jpg",
        "assets/images/rendering-04.webp",
        "assets/images/rendering-05.jpg",
        "assets/images/rendering-06.jpg",
        "assets/images/rendering-07.jpg",
        "assets/images/rendering-08.webp",
        "assets/images/rendering-09.webp",
        "assets/images/rendering-10.webp"
      ]
    }
  ],

  // SERVICES
  services: [
    {
      title: "Mechanical design that survives the shop floor",
      description:
        "SolidWorks assemblies: sheet metal weldments, engine mounts, industrial torque wrenches, lifting structures, and production-ready drawings that reduce rework, confusion, and tribal-knowledge dependency.",
      tags: ["SolidWorks", "Sheet metal", "GD&T", "DFM/DFA"]
    },
    {
      title: "Manufacturing documentation + release hygiene",
      description:
        "BOMs, fabrication drawings, DXFs/flat patterns, revision control, naming/part-number systems, and the boring-but-critical stuff that keeps production from face-planting.",
      tags: ["BOMs", "PDM", "ASME prints", "DXF/CNC prep"]
    },
    {
      title: "Internal tools + automation (practical, not science-fair)",
      description:
        "Lightweight apps and automations that connect the dots between engineering, scheduling, purchasing, and production—so the team can see bottlenecks before they become late shipments.",
      tags: ["React/TypeScript", "SQL", "Firebase/Supabase", "AI workflows"]
    }
  ],

  // CASE STUDIES
  caseStudies: [
    {
      title: "Reliability Engineering: Extending Asset Lifecycle from 3 to 5 Years",
      description: "Solving the 'grinding paste' failure mode with tribopolymer materials and predictive IoT monitoring",
      image: "assets/images/case-study-asset-lifecycle.png"
    },
    {
      title: "Designing the Future of Practice: A Capabilities Deck",
      description: "Comprehensive portfolio demonstrating mechanical design expertise, DFM principles, and process optimization",
      image: "assets/images/case-study-capabilities-deck.png"
    },
    {
      title: "Strategic Engineering Hire for Power Tee's Jacksonville Expansion",
      description: "20+ years of mechanical design excellence and AI-driven production innovation - a strategic fit for scaling operations",
      image: "assets/images/case-study-power-tee.png"
    }
  ],

  // TESTIMONIALS
  testimonials: [
    {
      text:
        "Mark is the only designer I know who models a gearbox, then actually builds it and tests it on the torque guns himself. And while he doesn't program the twin turret mill-turn centers, he designs parts that account for the toolpaths and setups we need. He understands the machining strategy before he even draws the first line.",
      author: "Kevin B.",
      role: "Head CNC Programmer, STS"
    },
    {
      text:
        "Mark understands that a tight tolerance on a print costs money. Because he's inspected these parts himself, he applies GD&T that strictly controls the critical geometry but leaves the rest open for speed. He balances precision with production.",
      author: "Lisa Fullem",
      role: "Quality Assurance Lead, STS"
    },
    {
      text:
        "It's rare to find a designer who understands the constraints of a 5-axis mill and the realities of the assembly line. Mark designs parts that are easy to machine and foolproof to assemble. He's run the machines, built the gearboxes, and tested the product. That experience is visible in every drawing he releases.",
      author: "Darrin Phipps",
      role: "President, Black Creek Precision"
    }
  ],

  // FIXED CTA BUTTONS
  ctaButtons: [
    { label: "View resume", href: "assets/images/resume-preview.png", primary: true },
    { label: "View LinkedIn", href: "https://linkedin.com/in/mark-hintz-builds", primary: false, target: "_blank" }
  ],

  // FOOTER CREDITS
  footerCredits: [
    "Designed + built by Mark Hintz",
    "SolidWorks brain, JavaScript hands"
  ]
};

// ============================================
// SKILLS TICKER DATA
// ============================================
const skillsTickerData = [
    "SolidWorks",
    "GD&T",
    "DFM/DFA",
    "Photo-Realistic Renderings",
    "Sheet Metal Design",
    "Weldments",
    "React/TypeScript",
    "AI Workflows",
    "Production Scheduling",
    "CNC Programming Support",
    "ASME Prints",
    "Planetary Gearboxes"
];

// ============================================
// WORD CYCLE DATA (Hero Subtitle Enhancement)
// ============================================
const wordCycleData = [
    "AI-driven custom tooling",
    "Production-ready designs",
    "Engineering precision"
];

// ============================================
// LUCID PORTFOLIO TEMPLATE - SCRIPT
// ============================================

// ============================================
// LENIS SMOOTH SCROLL (PREMIUM)
// ============================================
function initializeLenis() {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    lenis.scrollTo(target);
                }
            });
        });
        
        console.log("Lenis initialized");
    } else {
        console.warn("Lenis not loaded, falling back to CSS smooth scroll");
    }
}

// ============================================
// 1. MAGNETIC TEXT REVEAL
// Character-by-character spring entrance
// ============================================
function initMagneticText() {
    const targets = document.querySelectorAll('.magnetic-text-target');
    
    targets.forEach((target, targetIndex) => {
        const text = target.textContent;
        if (!text) return;
        
        target.textContent = '';
        target.classList.add('magnetic-text');
        
        // Split into words, then characters
        const words = text.split(' ');
        
        let charIndex = 0;
        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word';
            
            [...word].forEach(char => {
                const charSpan = document.createElement('span');
                charSpan.className = 'char';
                charSpan.textContent = char;
                // Calculate delay: base delay + target offset + char offset
                const delay = 0.3 + (targetIndex * 0.15) + (charIndex * 0.035);
                charSpan.style.animationDelay = `${delay}s`;
                wordSpan.appendChild(charSpan);
                charIndex++;
            });
            
            target.appendChild(wordSpan);
        });
    });
    
    console.log("Magnetic text initialized");
}

// ============================================
// 2. PARALLAX FLOATING BACKGROUND
// Mouse-reactive depth movement
// ============================================
function initParallaxFloating() {
    const layers = document.querySelectorAll('.parallax-layer');
    if (layers.length === 0) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    document.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        mouseX = (e.clientX - centerX) / centerX;
        mouseY = (e.clientY - centerY) / centerY;
    });
    
    function animate() {
        // Smooth interpolation
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;
        
        layers.forEach(layer => {
            const speed = parseFloat(getComputedStyle(layer).getPropertyValue('--parallax-speed')) || 0.03;
            const offsetX = currentX * 100 * speed;
            const offsetY = currentY * 100 * speed;
            
            layer.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    console.log("Parallax floating initialized");
}

// ============================================
// 3. ROLLING TEXT HOVER EFFECT
// Slot-machine style character roll
// ============================================
function initRollingText() {
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        const text = link.textContent;
        link.textContent = '';
        link.classList.add('rolling-text');
        
        [...text].forEach((char, i) => {
            const wrapper = document.createElement('span');
            wrapper.className = 'char-wrapper';
            wrapper.setAttribute('data-char', char === ' ' ? '\u00A0' : char);
            wrapper.textContent = char === ' ' ? '\u00A0' : char;
            wrapper.style.transitionDelay = `${i * 0.02}s`;
            link.appendChild(wrapper);
        });
    });
    
    console.log("Rolling text hover initialized");
}

// ============================================
// 4. STAGGERED WORD CYCLE
// Auto-cycling phrases with stagger effect
// ============================================
function initTextCycle() {
    const subtitle = document.getElementById('hero-subtitle');
    if (!subtitle) return;
    
    const originalText = subtitle.textContent;
    const staticPart = "Bridging the gap between SolidWorks design and high-efficiency production through ";
    
    // Create container
    subtitle.innerHTML = '';
    const staticSpan = document.createElement('span');
    staticSpan.textContent = staticPart;
    subtitle.appendChild(staticSpan);
    
    const cycleContainer = document.createElement('span');
    cycleContainer.className = 'text-cycle-container';
    subtitle.appendChild(cycleContainer);
    
    // Create word elements (includes period at the end of each phrase)
    wordCycleData.forEach((phrase, index) => {
        const wordEl = document.createElement('span');
        wordEl.className = 'text-cycle-word';
        wordEl.setAttribute('data-index', index);
        
        // Add phrase with period at the end
        const phraseWithPeriod = phrase + '.';
        [...phraseWithPeriod].forEach((char, charIndex) => {
            const charSpan = document.createElement('span');
            charSpan.className = 'cycle-char';
            charSpan.textContent = char === ' ' ? '\u00A0' : char;
            charSpan.style.animationDelay = `${charIndex * 0.02}s`;
            wordEl.appendChild(charSpan);
        });
        
        cycleContainer.appendChild(wordEl);
    });
    
    let currentIndex = 0;
    const words = cycleContainer.querySelectorAll('.text-cycle-word');
    
    function cycleWord() {
        // Remove all classes
        words.forEach(w => {
            w.classList.remove('active', 'exit');
        });
        
        // Set current as active
        words[currentIndex].classList.add('active');
        
        // Schedule exit and next
        setTimeout(() => {
            words[currentIndex].classList.add('exit');
            words[currentIndex].classList.remove('active');
            
            currentIndex = (currentIndex + 1) % words.length;
            
            setTimeout(() => {
                words[currentIndex].classList.add('active');
            }, 400);
        }, 2500);
    }
    
    // Initial activation
    words[0].classList.add('active');
    
    // Start cycling after initial delay
    setTimeout(() => {
        setInterval(cycleWord, 3500);
    }, 2500);
    
    console.log("Text cycle initialized");
}

// ============================================
// 5. INFINITE MARQUEE TICKER
// Scrolling skills/keywords strip
// ============================================
function initSkillsTicker() {
    const track = document.getElementById('ticker-track');
    if (!track) return;
    
    // Create ticker content (duplicate for seamless loop)
    const createTickerContent = () => {
        return skillsTickerData.map(skill => 
            `<span class="ticker-item">${skill}</span>`
        ).join('');
    };
    
    // We need at least 2 copies for seamless loop
    track.innerHTML = createTickerContent() + createTickerContent();
    
    console.log("Skills ticker initialized");
}

// Wait for DOM and data to be ready
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    setupInteractions();
    setupAnimations();
    initializeLenis();
    setupTiltEffect();
    
    // Enhanced animations
    initMagneticText();
    initParallaxFloating();
    initRollingText();
    initTextCycle();
    initSkillsTicker();
});

// ============================================
// INITIALIZE PORTFOLIO WITH DATA
// ============================================
function initializePortfolio() {
    // Page title
    document.getElementById('page-title').textContent = portfolioData.personal.name;
    
    // Navigation
    const navLogo = document.getElementById('nav-logo');
    navLogo.textContent = portfolioData.personal.name;
    
    const navLinks = document.getElementById('nav-links');
    portfolioData.navigation.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'nav-link';
        a.textContent = link.label;
        navLinks.appendChild(a);
    });
    
    // Hero section - Super header and two-line title
    const superHeader = document.getElementById('hero-super-header');
    const line1 = document.getElementById('title-line-1');
    const line2 = document.getElementById('title-line-2');
    
    // Super header
    if (portfolioData.personal.superHeader) {
        superHeader.textContent = portfolioData.personal.superHeader;
    }
    
    // Check if title is an object (new format) or string (old format)
    if (typeof portfolioData.personal.title === 'object' && portfolioData.personal.title.line1) {
        line1.textContent = portfolioData.personal.title.line1;
        line2.textContent = portfolioData.personal.title.line2;
        
        // Trigger animations
        setTimeout(() => {
            superHeader.classList.add('animate');
            line1.classList.add('animate');
            line2.classList.add('animate');
        }, 100);
    } else {
        // Fallback for old string format
        line1.textContent = portfolioData.personal.title || 'Title Line 1';
        line2.textContent = 'Title Line 2';
    }
    
    document.getElementById('hero-subtitle').textContent = portfolioData.personal.bio;
    
    const heroActions = document.getElementById('hero-actions');
    portfolioData.heroActions.forEach(action => {
        const dot = document.createElement('div');
        dot.className = 'hero-dot';
        heroActions.appendChild(dot);
        
        const a = document.createElement('a');
        a.href = action.href;
        a.className = 'hero-link';
        a.textContent = action.label;
        if (action.target) a.target = action.target;
        heroActions.appendChild(a);
    });
    
    // About section
    const aboutText = document.getElementById('about-text');
    if (aboutText && portfolioData.personal.about) {
        aboutText.textContent = portfolioData.personal.about;
    }
    
    // Projects
    const projectsGrid = document.getElementById('projects-grid');
    portfolioData.projects.forEach((project, index) => {
        const card = document.createElement('div');
        // BENTO LOGIC: Index 0 (1st) and 2 (3rd) span full width
        const isWide = index === 0 || index === 2;
        card.className = isWide ? 'project-card span-2' : 'project-card';
        
        card.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-category">${project.category}</p>
            </div>
        `;
        if (project.gallery && project.gallery.length > 0) {
            // Has gallery - open lightbox on click
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => openLightbox(project.gallery, project.title));
        } else if (project.link && project.link !== '#') {
            // No gallery - open PDF link
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => window.open(project.link, '_blank'));
        }
        projectsGrid.appendChild(card);
    });
    
    // Services
    const servicesContent = document.getElementById('services-content');
    portfolioData.services.forEach(service => {
        const item = document.createElement('div');
        item.className = 'service-item';
        
        const tags = service.tags.map(tag => 
            `<span class="service-tag">${tag}</span>`
        ).join('');
        
        item.innerHTML = `
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <div class="service-tags">${tags}</div>
        `;
        servicesContent.appendChild(item);
    });


    
    // Case Studies
    const caseStudiesGrid = document.getElementById('case-studies-grid');
    portfolioData.caseStudies.forEach(study => {
        const card = document.createElement('a');
        card.className = 'case-study-card';
        card.href = study.link;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.innerHTML = `
            <div class="case-study-image-container">
                <img src="${study.image}" alt="${study.title}" class="case-study-image" loading="lazy" onerror="this.style.display='none'">
            </div>
            <div class="case-study-info">
                <h3 class="case-study-title">${study.title}</h3>
                <p class="case-study-description">${study.description}</p>
                <span class="case-study-cta">View Case Study</span>
            </div>
        `;
        caseStudiesGrid.appendChild(card);
    });
    
    // Testimonials
    const testimonialsGrid = document.getElementById('testimonials-grid');
    portfolioData.testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar"></div>
                <div>
                    <div class="testimonial-name">${testimonial.author}</div>
                    <div class="testimonial-role">${testimonial.role}</div>
                </div>
            </div>
        `;
        testimonialsGrid.appendChild(card);
    });
    
    // Footer
    document.getElementById('footer-cta').textContent = portfolioData.personal.footerCTA;
    
    const footerEmail = document.getElementById('footer-email');
    footerEmail.href = `mailto:${portfolioData.personal.email}`;
    footerEmail.textContent = portfolioData.personal.email;
    
    document.getElementById('footer-copyright').textContent = portfolioData.personal.copyright;
    
    const footerCredits = document.getElementById('footer-credits');
    portfolioData.footerCredits.forEach(credit => {
        const span = document.createElement('span');
        span.textContent = credit;
        footerCredits.appendChild(span);
    });
    
    // Fixed CTA buttons
    const fixedCTA = document.getElementById('fixed-cta');
    portfolioData.ctaButtons.forEach(button => {
        const a = document.createElement('a');
        a.href = button.href;
        a.className = button.primary ? 'cta-button' : 'cta-button cta-button-secondary';
        a.textContent = button.label;
        if (button.download) a.download = '';
        if (button.target) a.target = button.target;
        fixedCTA.appendChild(a);
    });
}

// ============================================
// SETUP INTERACTIONS
// ============================================
function setupInteractions() {
    // Legacy scroll handler removed to allow CSS smooth-scroll or Lenis to handle it.
}

// ============================================
// SETUP ANIMATIONS
// ============================================
function setupAnimations() {
    // Observer for MASK REVEALS
    const maskObserverOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const maskObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                maskObserver.unobserve(entry.target); // Run once
            }
        });
    }, maskObserverOptions);
    
    document.querySelectorAll('.reveal-mask').forEach(mask => {
        maskObserver.observe(mask);
    });

    // Observer for Standard Fades (fallback/secondary elements)
    const fadeObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, fadeObserverOptions);
    
    // Animate content wrappers that aren't masked (e.g., subtitles, buttons)
    document.querySelectorAll('.hero-subtitle, .hero-actions, .about-text, .project-card, .service-item, .case-study-card, .testimonial-card').forEach((el, index) => {
        // Only if not already handled by another animation class
        if (!el.classList.contains('animate')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            if(el.classList.contains('project-card')) el.style.transitionDelay = (index % 2) * 0.1 + 's'; // Stagger grid
            fadeObserver.observe(el);
        }
    });
}

// ============================================
// LIGHTBOX FUNCTIONALITY
// ============================================
let currentGallery = [];
let currentIndex = 0;

function openLightbox(gallery, title) {
    currentGallery = gallery;
    currentIndex = 0;
    
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    updateLightboxImage();
    
    // Set up event listeners
    document.getElementById('lightbox-close').onclick = closeLightbox;
    document.getElementById('lightbox-prev').onclick = prevImage;
    document.getElementById('lightbox-next').onclick = nextImage;
    document.addEventListener('keydown', handleLightboxKeyboard);
    
    // Close on background click
    lightbox.onclick = (e) => {
        if (e.target === lightbox) closeLightbox();
    };
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleLightboxKeyboard);
}

function updateLightboxImage() {
    const img = document.getElementById('lightbox-image');
    const counter = document.getElementById('lightbox-counter');
    
    img.src = currentGallery[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
    
    // Show/hide nav buttons based on gallery length
    document.getElementById('lightbox-prev').style.display = currentGallery.length > 1 ? 'block' : 'none';
    document.getElementById('lightbox-next').style.display = currentGallery.length > 1 ? 'block' : 'none';
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    updateLightboxImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    updateLightboxImage();
}

function handleLightboxKeyboard(e) {
    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
    }
}

// ============================================
// 3D TILT EFFECT
// ============================================
function setupTiltEffect() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Fast transition for responsive following
            card.style.transition = 'transform 0.1s linear, background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease';
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate center
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Max rotation degrees
            const maxRotateX = 8; // Reduced slightly for subtlety
            const maxRotateY = 8;
            
            // Calculate rotation (inverted for feel)
            const rotateX = ((y - centerY) / centerY) * -maxRotateX;
            const rotateY = ((x - centerX) / centerX) * maxRotateY;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            // Slow, smooth reset
            card.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease';
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

    