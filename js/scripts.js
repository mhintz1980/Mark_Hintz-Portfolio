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
      line2: "Automated Logic.",
    },
    bio: "Bridging the gap between SolidWorks design and high-efficiency production through AI-driven custom tooling.",
    about:
      "Mechanical designer and modern toolmaker with experience in diesel-powered industrial pump systems, sound-attenuated enclosures, firearms and related accessories, and the design/development of planetary reduction gearboxes that power industrial tooling. I work at the intersection of hardware and software: designing real-world equipment in SolidWorks, supporting machine shops, fabrication, and assembly—while building AI-powered tools that reduce friction in engineering, documentation, and troubleshooting. I'm especially interested in roles that value practical, field-ready design plus smarter internal tools and workflows.",
    location: "Jacksonville, FL",
    email: "markworks.dev@gmail.com",
    phone: "(904) 862-1945",
    linkedin: "https://linkedin.com/in/mark-hintz-builds",
    footerCTA: "Come on. Let's build something cool together.",
    copyright: `© ${new Date().getFullYear()} Mark Hintz. All rights reserved.`,
  },

  // NAVIGATION
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
  ],

  // HERO ACTIONS
  heroActions: [
    {
      label: "View resume",
      href: "assets/images/Mark_Hintz-Mechanical_Designer-1.webp",
      target: "_blank",
    },
    { label: "Email me", href: "mailto:markworks.dev@gmail.com" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/mark-hintz-builds",
      target: "_blank",
    },
  ],

  // PROJECTS
  projects: [
    {
      title: "PumpTracker (Production Scheduling + Capacity Planning)",
      category: "Internal tool • React/TypeScript • Firebase/Supabase",
      image: "assets/images/js_image_1.png",
      gallery: [
        "assets/images/js_image_2.png",
        "assets/images/js_image_3.png",
        "assets/images/js_image_4.png",
        "assets/images/js_image_5.png",
      ],
    },
    {
      title: "Pump Package Design System (Skids, Enclosures, Mounts, Lifting)",
      category: "Mechanical design • SolidWorks • DFM/DFA",
      image: "assets/images/js_image_6.png",
      gallery: [
        "assets/images/js_image_7.webp",
        "assets/images/js_image_8.jpg",
        "assets/images/js_image_9.png",
        "assets/images/js_image_10.png",
      ],
    },
    {
      title: "Industrial Torque Wrench",
      category:
        "Mechanical design • Planetary gearboxes • Precision assemblies",
      image: "assets/images/Totque_family.webp",
      gallery: [
        "assets/images/js_image_12.png",
        "assets/images/js_image_13.jpg",
        "assets/images/js_image_14.jpg",
        "assets/images/js_image_15.jpg",
        "assets/images/js_image_16.png",
        "assets/images/js_image_17.png",
      ],
    },
    {
      title: "Renderings & Visualizations",
      category: "PhotoView 360 • SolidWorks Visualize • Product renders",
      image: "assets/images/js_image_18.webp",
      gallery: [
        "assets/images/js_image_19.webp",
        "assets/images/js_image_20.jpg",
        "assets/images/js_image_21.jpg",
        "assets/images/Totque_family.webp",
        "assets/images/js_image_23.jpg",
        "assets/images/js_image_24.jpg",
        "assets/images/js_image_25.jpg",
        "assets/images/AR15-HG-LVOA.webp",
        "assets/images/bolt-group-trio.webp",
        "assets/images/J3DualSpeed.webp",
      ],
    },
  ],

  // SERVICES
  services: [
    {
      title: "Mechanical design that survives the shop floor",
      description:
        "SolidWorks assemblies: sheet metal weldments, engine mounts, industrial torque wrenches, lifting structures, and production-ready drawings that reduce rework, confusion, and tribal-knowledge dependency.",
      tags: ["SolidWorks", "Sheet metal", "GD&T", "DFM/DFA"],
    },
    {
      title: "Manufacturing documentation + release hygiene",
      description:
        "BOMs, fabrication drawings, DXFs/flat patterns, revision control, naming/part-number systems, and the boring-but-critical stuff that keeps production from face-planting.",
      tags: ["BOMs", "PDM", "ASME prints", "DXF/CNC prep"],
    },
    {
      title: "Internal tools + automation (practical, not science-fair)",
      description:
        "Lightweight apps and automations that connect the dots between engineering, scheduling, purchasing, and production—so the team can see bottlenecks before they become late shipments.",
      tags: ["React/TypeScript", "SQL", "Firebase/Supabase", "AI workflows"],
    },
  ],

  // CASE STUDIES
  caseStudies: [
    {
      title:
        "Reliability Engineering: Extending Asset Lifecycle from 3 to 5 Years",
      description:
        "Solving the 'grinding paste' failure mode with tribopolymer materials and predictive IoT monitoring",
      image: "assets/images/js_image_26.png",
    },
    {
      title: "Designing the Future of Practice: A Capabilities Deck",
      description:
        "Comprehensive portfolio demonstrating mechanical design expertise, DFM principles, and process optimization",
      image: "assets/images/js_image_27.png",
    },
    {
      title:
        "Strategic Engineering Hire for Power Tee's Jacksonville Expansion",
      description:
        "20+ years of mechanical design excellence and AI-driven production innovation - a strategic fit for scaling operations",
      image: "assets/images/js_image_28.png",
    },
  ],

  // TESTIMONIALS
  testimonials: [
    {
      text: "Mark is the only designer I know who models a gearbox, then actually builds it and tests it on the torque guns himself. And while he doesn't program the twin turret mill-turn centers, he designs parts that account for the toolpaths and setups we need. He understands the machining strategy before he even draws the first line.",
      author: "Kevin B.",
      role: "Head CNC Programmer, STS",
    },
    {
      text: "Mark understands that a tight tolerance on a print costs money. Because he's inspected these parts himself, he applies GD&T that strictly controls the critical geometry but leaves the rest open for speed. He balances precision with production.",
      author: "Lisa Fullem",
      role: "Quality Assurance Lead, STS",
    },
    {
      text: "It's rare to find a designer who understands the constraints of a 5-axis mill and the realities of the assembly line. Mark designs parts that are easy to machine and foolproof to assemble. He's run the machines, built the gearboxes, and tested the product. That experience is visible in every drawing he releases.",
      author: "Darrin Phipps",
      role: "President, Black Creek Precision",
    },
  ],

  // FIXED CTA BUTTONS
  ctaButtons: [
    {
      label: "View resume",
      href: "assets/images/js_image_29.png",
      primary: true,
    },
    {
      label: "View LinkedIn",
      href: "https://linkedin.com/in/mark-hintz-builds",
      primary: false,
      target: "_blank",
    },
  ],

  // FOOTER CREDITS
  footerCredits: [
    "Designed + built by Mark Hintz",
    "SolidWorks brain, JavaScript hands",
  ],
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
  "Planetary Gearboxes",
];

// ============================================
// WORD CYCLE DATA (Hero Subtitle Enhancement)
// ============================================
const wordCycleData = [
  "AI-driven custom tooling",
  "Production-ready designs",
  "Engineering precision",
];

// ============================================
// LUCID PORTFOLIO TEMPLATE - SCRIPT
// ============================================

// ============================================
// LENIS SMOOTH SCROLL (PREMIUM)
// ============================================
function initializeLenis() {
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.2,
      direction: "vertical",
      gestureDirection: "vertical",
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

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
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
  const targets = document.querySelectorAll(".magnetic-text-target");

  targets.forEach((target, targetIndex) => {
    const text = target.textContent;
    if (!text) return;

    target.textContent = "";
    target.classList.add("magnetic-text");

    // Split into words, then characters
    const words = text.split(" ");

    let charIndex = 0;
    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "word";

      [...word].forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.className = "char";
        charSpan.textContent = char;
        // Calculate delay: base delay + target offset + char offset
        const delay = 0.3 + targetIndex * 0.15 + charIndex * 0.035;
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
  const layers = document.querySelectorAll(".parallax-layer");
  if (layers.length === 0) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener("mousemove", (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    mouseX = (e.clientX - centerX) / centerX;
    mouseY = (e.clientY - centerY) / centerY;
  });

  function animate() {
    // Smooth interpolation
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    layers.forEach((layer) => {
      const speed =
        parseFloat(
          getComputedStyle(layer).getPropertyValue("--parallax-speed")
        ) || 0.03;
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
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    const text = link.textContent;
    link.textContent = "";
    link.classList.add("rolling-text");

    [...text].forEach((char, i) => {
      const wrapper = document.createElement("span");
      wrapper.className = "char-wrapper";
      wrapper.setAttribute("data-char", char === " " ? "\u00A0" : char);
      wrapper.textContent = char === " " ? "\u00A0" : char;
      wrapper.style.transitionDelay = `${i * 0.02}s`;
      link.appendChild(wrapper);
    });
  });

  console.log("Rolling text hover initialized");
}

// ============================================
// 4. TYPED.JS TYPEWRITER EFFECT
// Dynamic typewriter with looping phrases
// ============================================
function initTypedEffect() {
  const subtitle = document.getElementById("hero-subtitle");
  if (!subtitle || typeof Typed === "undefined") {
    console.warn("Typed.js not loaded or subtitle element not found");
    return;
  }

  const staticPart =
    "Bridging the gap between SolidWorks design and high-efficiency production through ";

  // Create container with static part and typed span
  subtitle.innerHTML = `${staticPart}<span id="typed-text" class="typed-text"></span>`;

  // Initialize Typed.js
  const typed = new Typed("#typed-text", {
    strings: wordCycleData,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    autoInsertCss: true,
  });

  console.log("Typed.js typewriter initialized");
}

// ============================================
// 5. INFINITE MARQUEE TICKER
// Scrolling skills/keywords strip
// ============================================
function initSkillsTicker() {
  const track = document.getElementById("ticker-track");
  if (!track) return;

  // Create ticker content (duplicate for seamless loop)
  const createTickerContent = () => {
    return skillsTickerData
      .map((skill) => `<span class="ticker-item">${skill}</span>`)
      .join("");
  };

  // We need at least 2 copies for seamless loop
  track.innerHTML = createTickerContent() + createTickerContent();

  console.log("Skills ticker initialized");
}

// Wait for DOM and data to be ready
document.addEventListener("DOMContentLoaded", function () {
  initializePortfolio();
  setupInteractions();
  setupAnimations();
  initializeLenis();
  setupTiltEffect();

  // Enhanced animations
  // initMagneticText(); // Disabled - using simple bottom-up reveal instead
  initParallaxFloating();
  initRollingText();
  initTypedEffect();
  initSkillsTicker();
  initHorizontalScroll(); // NEW
  initTestimonialsHorizontalScroll(); // Testimonials Pin
  initNavCollapse(); // Nav collapse logic

  // Trigger hero title animations
  setTimeout(() => {
    document.getElementById("title-line-1")?.classList.add("animate");
    document.getElementById("title-line-2")?.classList.add("animate");
  }, 300);
});

// ============================================
// INITIALIZE PORTFOLIO WITH DATA
// ============================================
function initializePortfolio() {
  // Page title
  document.getElementById("page-title").textContent =
    portfolioData.personal.name;

  // Navigation
  const navLogo = document.getElementById("nav-logo");
  navLogo.textContent = portfolioData.personal.name;

  const navLinks = document.getElementById("nav-links");
  portfolioData.navigation.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.className = "nav-link";
    a.textContent = link.label;
    navLinks.appendChild(a);
  });

  // Hero section - Super header and two-line title
  const superHeader = document.getElementById("hero-super-header");
  const line1 = document.getElementById("title-line-1");
  const line2 = document.getElementById("title-line-2");

  // Super header
  if (portfolioData.personal.superHeader) {
    superHeader.textContent = portfolioData.personal.superHeader;
  }

  // Check if title is an object (new format) or string (old format)
  if (
    typeof portfolioData.personal.title === "object" &&
    portfolioData.personal.title.line1
  ) {
    line1.textContent = portfolioData.personal.title.line1;
    line2.textContent = portfolioData.personal.title.line2;

    // Trigger animations
    setTimeout(() => {
      superHeader.classList.add("animate");
      line1.classList.add("animate");
      line2.classList.add("animate");
    }, 100);
  } else {
    // Fallback for old string format
    line1.textContent = portfolioData.personal.title || "Title Line 1";
    line2.textContent = "Title Line 2";
  }

  document.getElementById("hero-subtitle").textContent =
    portfolioData.personal.bio;

  const heroActions = document.getElementById("hero-actions");
  portfolioData.heroActions.forEach((action) => {
    const dot = document.createElement("div");
    dot.className = "hero-dot";
    heroActions.appendChild(dot);

    const a = document.createElement("a");
    a.href = action.href;
    a.className = "hero-link";
    a.textContent = action.label;
    if (action.target) a.target = action.target;
    heroActions.appendChild(a);
  });

  // About section
  const aboutText = document.getElementById("about-text");
  if (aboutText && portfolioData.personal.about) {
    aboutText.textContent = portfolioData.personal.about;
  }

  // Horizontal Projects Rendering
  const projectsWrapper = document.getElementById(
    "projects-horizontal-wrapper"
  );
  // Clean container
  projectsWrapper.innerHTML = "";

  portfolioData.projects.forEach((project, index) => {
    // Create Section
    const section = document.createElement("div");
    section.className = "project-scroll-section";

    // Pin Container
    const pinContainer = document.createElement("div");
    pinContainer.className = "project-pin-container";

    // Images Track
    const track = document.createElement("div");
    track.className = "project-images-track";

    // Collect all images (Cover + Gallery)
    const allImages = [project.image, ...(project.gallery || [])];
    // Filter duplicates if any
    const uniqueImages = [...new Set(allImages)];

    uniqueImages.forEach((imgSrc) => {
      const card = document.createElement("div");
      card.className = "project-card-horiz";

      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = project.title;
      // Lightbox capability
      img.style.cursor = "pointer";
      img.addEventListener("click", () =>
        openLightbox(uniqueImages, project.title)
      );

      card.appendChild(img);
      track.appendChild(card);
    });

    pinContainer.appendChild(track);

    // Title Container REMOVED

    section.appendChild(pinContainer);
    projectsWrapper.appendChild(section);
  });

  // Services
  const servicesContent = document.getElementById("services-content");
  portfolioData.services.forEach((service) => {
    const item = document.createElement("div");
    item.className = "service-item";

    const tags = service.tags
      .map((tag) => `<span class="service-tag">${tag}</span>`)
      .join("");

    item.innerHTML = `
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <div class="service-tags">${tags}</div>
        `;
    servicesContent.appendChild(item);
  });

  // Case Studies
  const caseStudiesGrid = document.getElementById("case-studies-grid");
  portfolioData.caseStudies.forEach((study) => {
    const card = document.createElement("a");
    card.className = "case-study-card";
    card.href = study.link;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.innerHTML = `
            <div class="case-study-image-container">
                <img src="${study.image}" alt="${study.title}" class="case-study-image" onerror="this.style.display='none'">
            </div>
            <div class="case-study-info">
                <h3 class="case-study-title">${study.title}</h3>
                <p class="case-study-description">${study.description}</p>
                <span class="case-study-cta">View Case Study</span>
            </div>
        `;
    caseStudiesGrid.appendChild(card);
  });

  // Testimonials - Populate horizontal scroll track
  const testimonialsTrack = document.getElementById(
    "testimonials-scroll-track"
  );
  if (testimonialsTrack) {
    portfolioData.testimonials.forEach((testimonial) => {
      const card = document.createElement("div");
      card.className = "testimonial-card-horiz"; // New class
      card.innerHTML = `
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <div class="testimonial-avatar"></div>
                    <div>
                        <div class="testimonial-name">${testimonial.author}</div>
                        <div class="testimonial-role">${testimonial.role}</div>
                    </div>
                </div>
            `;
      testimonialsTrack.appendChild(card);
    });
  }

  // Footer
  document.getElementById("footer-cta").textContent =
    portfolioData.personal.footerCTA;

  const footerEmail = document.getElementById("footer-email");
  footerEmail.href = `mailto:${portfolioData.personal.email}`;
  footerEmail.textContent = portfolioData.personal.email;

  document.getElementById("footer-copyright").textContent =
    portfolioData.personal.copyright;

  const footerCredits = document.getElementById("footer-credits");
  portfolioData.footerCredits.forEach((credit) => {
    const span = document.createElement("span");
    span.textContent = credit;
    footerCredits.appendChild(span);
  });

  // Fixed CTA buttons
  const fixedCTA = document.getElementById("fixed-cta");
  portfolioData.ctaButtons.forEach((button) => {
    const a = document.createElement("a");
    a.href = button.href;
    a.className = button.primary
      ? "cta-button"
      : "cta-button cta-button-secondary";
    a.textContent = button.label;
    if (button.download) a.download = "";
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
    rootMargin: "0px 0px -50px 0px",
  };

  const maskObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        maskObserver.unobserve(entry.target); // Run once
      }
    });
  }, maskObserverOptions);

  document.querySelectorAll(".reveal-mask").forEach((mask) => {
    maskObserver.observe(mask);
  });

  // Observer for Standard Fades (fallback/secondary elements)
  const fadeObserverOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, fadeObserverOptions);

  // Animate content wrappers that aren't masked (e.g., subtitles, buttons)
  document
    .querySelectorAll(
      ".hero-subtitle, .hero-actions, .about-text, .service-item, .case-study-card, .testimonial-card"
    )
    .forEach((el, index) => {
      // Only if not already handled by another animation class
      if (!el.classList.contains("animate")) {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        if (el.classList.contains("service-item"))
          el.style.transitionDelay = (index % 2) * 0.1 + "s";
        fadeObserver.observe(el);
      }
    });
}

// ============================================
// HORIZONTAL SCROLL LOGIC
// ============================================
// ============================================
// HORIZONTAL SCROLL LOGIC
// ============================================
function initHorizontalScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const projectsSection = document.querySelector(".projects-horiz-section");
  const introMask = document.querySelector(".projects-intro-mask");
  const maskText = document.querySelector(".projects-mask-text");
  const horizWrapper = document.getElementById("projects-horizontal-wrapper");
  const edges = document.querySelectorAll(".fade-edge-left, .fade-edge-right");
  const bgOverlay = document.querySelector(".bg-black-overlay");

  // Calculate move functionality
  // Center is (0, 0) relative to the flex container
  // We want to arrive at Top-Left.
  const xToCorner = -(window.innerWidth / 2) + 80; // Margin left
  const yToCorner = -(window.innerHeight / 2) + 60; // Margin top

  // 1. INTRO TIMELINE (Pinning the Mask)
  // ------------------------------------------------
  // 1. INTRO TIMELINE (Pinning the Mask)
  // ------------------------------------------------
  // Movie Credits Style: Text starts at bottom, scrolls up and off-screen.
  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: projectsSection,
      start: "top top",
      end: "+=1200",
      pin: introMask,
      scrub: 0.5,
      anticipatePin: 1,
    },
  });

  // Initial Setup: Text starts low
  gsap.set(maskText, {
    y: window.innerHeight * 0.2, // Start high up (close to About) to remove gap
    scale: 1,
    x: 0,
  });

  introTl
    // Phase 1: Scroll UP and OUT
    .to(maskText, {
      y: -window.innerHeight * 1.5, // Fly out top completely
      ease: "none", // Linear scroll feels more like credits
      duration: 3,
    })
    // Overlay fade (Darker background) - Happens early
    .to(bgOverlay, { opacity: 1, duration: 1.5 }, 0)
    // Reveal Projects - Overlap almost completely.
    // Start appearing almost immediately as text starts moving.
    .to(
      [horizWrapper, edges],
      { autoAlpha: 1, duration: 1.5 },
      "<0.2" // Start 0.2s into the text scroll (immediate overlap)
    );

  // 4. Per-Project Scroll (Titles Removed)
  // ------------------------------------------------
  const sections = document.querySelectorAll(".project-scroll-section");
  sections.forEach((section, i) => {
    // Title elements removed - Logic stripped
    const track = section.querySelector(".project-images-track");

    // Timeline for this section's pin
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=2000", // Distance to scroll through images
        pin: true,
        scrub: 0.5,
      },
    });

    // Horizontal Scroll Calculation
    // We want to scroll the track to the left to reveal images
    const scrollDist = track.scrollWidth - window.innerWidth + 100;

    tl.to(track, {
      x: -scrollDist,
      ease: "none",
    });
    // Removed Title Animation blocks
  });
  // Handle Text Cleanup (Fade out when leaving section)
  ScrollTrigger.create({
    trigger: projectsSection,
    start: "bottom center",
    onEnter: () => gsap.to(maskText, { opacity: 0 }),
    onLeaveBack: () => gsap.to(maskText, { opacity: 1, color: "transparent" }), // Restore mask
  });

  // Refresh for images
  const images = document.querySelectorAll(".project-card-horiz img");
  let loadedCount = 0;
  const checkRefresh = () => {
    loadedCount++;
    if (loadedCount >= images.length) {
      ScrollTrigger.refresh();
    }
  };
  if (images.length > 0) {
    images.forEach((img) => {
      if (img.complete) {
        checkRefresh();
      } else {
        img.addEventListener("load", checkRefresh);
        img.addEventListener("error", checkRefresh);
      }
    });
  }

  console.log("Cinematic Horizontal scroll initialized");
}

// ============================================
// NAV COLLAPSE TRIGGER
// ============================================
function initNavCollapse() {
  const nav = document.querySelector(".floating-nav");
  const projectsSection = document.getElementById("projects");
  const hamburger = document.getElementById("nav-hamburger");

  if (!nav || !projectsSection) return;

  ScrollTrigger.create({
    trigger: projectsSection,
    start: "top 100px", // When projects nears top
    onEnter: () => nav.classList.add("collapsed"),
    onLeaveBack: () => nav.classList.remove("collapsed"),
  });

  // Optional: Hamburger click re-expands?
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("collapsed");
    });
  }
}

// ============================================
// TESTIMONIALS HORIZONTAL SCROLL
// ============================================
function initTestimonialsHorizontalScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.getElementById("testimonials-section");
  const track = document.getElementById("testimonials-scroll-track");
  const wrapper = document.getElementById("testimonials-horiz-wrapper");

  if (!section || !track) return;

  // Calculate scroll amount
  // Width of track
  // We want to scroll 1 full cycle.
  // "Fit one full card and a partial card on screen" -> Handled by CSS sizing (60vw width).

  const scrollAmount = track.scrollWidth - window.innerWidth + 200; // Buffer

  gsap.to(track, {
    x: -scrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=2000", // Pinned distance
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    },
  });
}

/* Call initHorizontalScroll at end of setupAnimations setup or separate */
// We need to call it.
// I'll append it to the end of setupAnimations caller in DOMContentLoaded.

// ============================================
// LIGHTBOX FUNCTIONALITY
// ============================================
let currentGallery = [];
let currentIndex = 0;

function openLightbox(gallery, title) {
  currentGallery = gallery;
  currentIndex = 0;

  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";

  updateLightboxImage();

  // Set up event listeners
  document.getElementById("lightbox-close").onclick = closeLightbox;
  document.getElementById("lightbox-prev").onclick = prevImage;
  document.getElementById("lightbox-next").onclick = nextImage;
  document.addEventListener("keydown", handleLightboxKeyboard);

  // Close on background click
  lightbox.onclick = (e) => {
    if (e.target === lightbox) closeLightbox();
  };
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
  document.removeEventListener("keydown", handleLightboxKeyboard);
}

function updateLightboxImage() {
  const img = document.getElementById("lightbox-image");
  const counter = document.getElementById("lightbox-counter");

  img.src = currentGallery[currentIndex];
  counter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;

  // Show/hide nav buttons based on gallery length
  document.getElementById("lightbox-prev").style.display =
    currentGallery.length > 1 ? "block" : "none";
  document.getElementById("lightbox-next").style.display =
    currentGallery.length > 1 ? "block" : "none";
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  updateLightboxImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  updateLightboxImage();
}

function handleLightboxKeyboard(e) {
  switch (e.key) {
    case "Escape":
      closeLightbox();
      break;
    case "ArrowLeft":
      prevImage();
      break;
    case "ArrowRight":
      nextImage();
      break;
  }
}

// ============================================
// 3D TILT EFFECT
// ============================================
function setupTiltEffect() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      // Fast transition for responsive following
      card.style.transition =
        "transform 0.1s linear, background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease";
    });

    card.addEventListener("mousemove", (e) => {
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

    card.addEventListener("mouseleave", () => {
      // Slow, smooth reset
      card.style.transition =
        "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease";
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });
  });
}

// ============================================
// ADVANCED FEATURES
// ============================================

// ============================================
// GSAP SCROLL-PINNED 3D FLIP
// ============================================
function init3DFlip() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger not loaded");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const flipCard = document.querySelector(".flip-card");
  if (!flipCard) return;

  gsap.to(flipCard, {
    rotateY: 360,
    ease: "none",
    scrollTrigger: {
      trigger: ".flip-section",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      pin: ".flip-container",
      anticipatePin: 1,
    },
  });

  console.log("3D flip animation initialized");
}

// ============================================
// MATTER.JS PHYSICS BUBBLE
// ============================================
function initPhysicsBubble() {
  if (typeof Matter === "undefined") {
    console.warn("Matter.js not loaded");
    return;
  }

  const bubble = document.getElementById("physics-bubble");
  if (!bubble) return;

  const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events } =
    Matter;

  // Create engine
  const engine = Engine.create();
  engine.world.gravity.y = 0.3;

  // Get bubble position
  const rect = bubble.getBoundingClientRect();
  const anchorX = rect.left + rect.width / 2;
  const anchorY = rect.top + rect.height / 2;

  // Create physics body
  const bubbleBody = Bodies.circle(anchorX, anchorY, 40, {
    restitution: 0.8,
    friction: 0.05,
    density: 0.001,
  });

  World.add(engine.world, bubbleBody);

  // Create mouse control
  const mouse = Mouse.create(document.body);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false },
    },
  });

  World.add(engine.world, mouseConstraint);

  // Update DOM element position
  Events.on(engine, "afterUpdate", () => {
    bubble.style.left = `${bubbleBody.position.x - 40}px`;
    bubble.style.top = `${bubbleBody.position.y - 40}px`;
    bubble.style.transform = `rotate(${bubbleBody.angle}rad)`;

    // Tethering - pull back to anchor
    const dx = anchorX - bubbleBody.position.x;
    const dy = anchorY - bubbleBody.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 200) {
      Matter.Body.applyForce(bubbleBody, bubbleBody.position, {
        x: dx * 0.0001,
        y: dy * 0.0001,
      });
    }
  });

  // Run engine
  Engine.run(engine);

  console.log("Physics bubble initialized");
}

// ============================================
// MAGNETIC BUTTONS
// ============================================
function initMagneticButtons() {
  const buttons = document.querySelectorAll(".hero-link, .cta-button");

  buttons.forEach((button) => {
    // Wrap text content
    const text = button.textContent;
    button.innerHTML = `<span class="magnetic-inner">${text}</span>`;
    const inner = button.querySelector(".magnetic-inner");

    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      const maxDistance = 100;

      if (distance < maxDistance) {
        const strength = (maxDistance - distance) / maxDistance;
        const moveX = deltaX * strength * 0.3;
        const moveY = deltaY * strength * 0.3;

        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
        inner.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
      }
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translate(0, 0)";
      inner.style.transform = "translate(0, 0)";
    });
  });

  console.log("Magnetic buttons initialized");
}

// ============================================
// INITIALIZE ALL ADVANCED FEATURES
// ============================================
function initAdvancedFeatures() {
  init3DFlip();
  initMagneticButtons();
}

// Add to DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Wait a bit for libraries to load
  setTimeout(initAdvancedFeatures, 100);
});
