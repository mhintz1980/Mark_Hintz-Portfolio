# Sprint Log

## Sprint 4: Projects Section Overhaul
**Status:** Complete
**Changes:**
- PumpTracker card promoted to `featured: true` in portfolioData — renders full-width horizontal layout on desktop (1.4fr image / 1fr content), collapses to single column on mobile
- Outcome lines added to all 4 projects in portfolioData (`outcome` field) and rendered as styled `.project-outcome` blocks with amber left border and `→` icon
- Tech stack tags added to all 4 projects (`tags` array) and rendered as `.project-tag` elements in monospace uppercase engineering spec label style
- Compelling hover states on all cards: `translateY(-4px)` lift, amber `border-color` + `box-shadow` with inner glow (replaces old purple legacy hover)
- CNC toolpath SVG animation added to featured card hover: rasterline path draws via `stroke-dashoffset` animation (`draw-toolpath` keyframe, 1.5s)
- Tolerance callout system extended to featured PumpTracker card: TR callout `FEATURES: 16 / SPRINTS: 8`, BL callout `STACK: FULL / STATUS: LIVE` — wired to existing `tolObserver` via `.tolerance-zone` class
- Staggered scroll-reveal on all project cards: `reveal-ready` class added post-render with `i * 100ms` transition delays; `revealObserver` (IntersectionObserver) adds `.visible` class on viewport entry
- Old bento `span-2` / 3D tilt pop-out logic preserved — tilt runs on mousemove, coexists with CSS hover since JS overrides transform during mouse movement
- Mobile: featured card collapses to single column, image on top; hover state is CSS-only so degrades gracefully on touch

**Self-eval:** All 8 sprint contract items satisfied. Featured card is dominant — it's the only full-width card with horizontal layout. Every card has outcome, tags, and hover states. Toolpath SVG draws on featured hover. Tolerance callouts reuse Sprint 3's existing `.tol-callout` CSS (no duplication). Stagger reveal: 0ms, 100ms, 200ms, 300ms delays per card. Mobile breakpoint at 768px collapses featured grid. Committed and pushed to gh-pages.

**Issues:** None. Clean execution.

---

## Sprint 1: Foundation Swap
**Status:** Complete
**Changes:**
- Replaced purple/indigo/pink palette with amber (#E07B39) / teal (#3EC9C9) system
- Removed Inter font, installed Rajdhani (headings) + Barlow (body)
- Updated glow blob colors, reduced opacity for premium feel (0.4 → 0.25)
- Established CSS custom property design tokens as source of truth in :root block
- Fixed project card hover glow that still referenced old purple rgba(76,29,149)

**Self-eval:** Executed cleanly with no leftover Inter references or old hex codes — grep checks confirmed zero residue. The :root token block was inserted fresh since the original CSS had no variables system at all. One extra find: the project-card hover box-shadow had an inline `rgba(76, 29, 149, 0.1)` that the spec didn't call out but I caught and swapped to amber.

**Next:** Sprint 3 — Projects Section + Bento Layout refinement

---

## Sprint 2: Hero Section Rebuild
**Status:** Complete
**Changes:**
- Added `scrambleText()` utility — rAF-driven char randomize-then-lock animation (1.2s), fires 300ms after DOMContentLoaded on both title lines
- Removed magnetic-text class conflict from title lines (scramble now owns the entrance animation)
- Injected `.hero-spec-block` after hero-actions via JS — JetBrains Mono terminal-style block with 5 spec lines
- Added `typewriterBlock()` — slides each spec line in sequentially (180ms stagger, opacity + translateX transition), triggers at 800ms
- STATUS line has `.spec-status.available` CSS class → amber color + `blink-status` keyframe (1.2s step-end infinite)
- CTA button updated: "Let's Talk Work" (amber fill, black text, uppercase, Rajdhani heading font, `hero-cta-primary` class)
- Removed "View resume" from hero actions (was first CTA link)
- Tagline/bio changed to: "I automate the work that shouldn't be manual."
- Added mobile media query for spec block at 480px (font-size 0.72rem, full-width, compact padding)

**Self-eval:** All 7 sprint contract requirements satisfied. Scramble completes ≤1.5s (1.2s duration + 300ms offset = 1.5s max). Spec block types in cleanly. Amber CTA is high contrast (black text on #E07B39). "View Resume" removed from hero. Tagline punchy and freelance-forward. Mobile overflow addressed via CSS media query. No new JS errors introduced — functions added before initializeLenis and called inside renderContent. Push succeeded to gh-pages.

**Issues:** None. Clean execution.

---

## Sprint 3: About Section + Spec Card
**Status:** Complete
**Changes:**
- About section rebuilt with two-column grid layout: bio text left (7fr) / spec card right (5fr)
- Grid collapses to single column at ≤768px mobile breakpoint
- Technical spec card implemented with 6 rows: EXPERIENCE, MACHINES, CAD, AUTOMATION, CURRENT, AVAILABILITY
- AVAILABILITY row has amber blink-status animation ("OPEN TO PROJECTS")
- Spec card styled as engineering data panel: dark surface, teal left border, JetBrains Mono, monospace labels
- Tolerance Callout System implemented — THE signature element:
  - `.tolerance-zone` class on spec card, `.tol-visible` toggled by IntersectionObserver at 30% threshold
  - Top-right callout: horizontal line extends from left + tol-box with "⌀ 0.001 TIR" / "⊕ ±0.0005 [REF]"
  - Bottom-left callout: line extends from right + tol-box with "15 YRS EXP" / "JAX, FL [LOC]"
  - Lines animate via scaleX(0→1) on entry; hidden on mobile (max-width: 899px)
  - Fades in over 400ms after 300ms delay
- Testimonial block added below bio text with amber left border and italic styling
- About content (`.about-content`) has scroll-reveal: IntersectionObserver fades in + translateY(0) on viewport entry

**Self-eval:** All 6 sprint contract requirements satisfied. Tolerance callout system wired up correctly — CSS transitions chain: line scales in, then box fades. `blink-status` keyframe was already present from Sprint 2 (hero spec block), so AVAILABILITY animation works without duplication. `about-section` max-width bumped to 1100px to accommodate the wider grid. Push succeeded to gh-pages.

**Issues:** None. Clean execution.
