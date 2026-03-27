# Portfolio Design Spec — Mark Hintz
**GAN-Harness Planner Output | v1.0 | 2026-03-27**

---

## 1. Identity Anchor

**For manufacturing companies and engineering teams who need someone who's actually touched the machine — this portfolio must feel like a precision instrument: every element intentional, every tolerance specified, nothing wasted.**

The viewer should feel the difference between a guy who learned SolidWorks from YouTube and someone who's stood next to a 7-axis mill-turn at 3am, inspected the result with a CMM, and then built the software to prevent it from happening again.

---

## 2. Visual Design Language

### Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| `background` | `#080A0E` | Page base — deep forge black, cool undertone (not pure black) |
| `surface` | `#0F1318` | Cards, panels, nav — dark steel panel |
| `surface-raised` | `#161B23` | Hover states, active cards — lifted steel |
| `accent-primary` | `#E07B39` | Primary CTA, highlights — heat treatment amber/machining orange |
| `accent-secondary` | `#3EC9C9` | Secondary accent — CMM display teal, inspection marks |
| `accent-dim` | `#1A3A3A` | Teal backgrounds, subtle fills |
| `text-primary` | `#EEE9E1` | Body text — warm white, like drafting paper |
| `text-muted` | `#5C6878` | Labels, secondary text — machined aluminum gray |
| `text-bright` | `#FFFFFF` | Hero titles only |
| `grid-line` | `rgba(99, 120, 150, 0.07)` | Column lines — barely-visible blueprint grid |
| `border` | `rgba(99, 120, 150, 0.15)` | Card borders, dividers |
| `border-active` | `rgba(224, 123, 57, 0.4)` | Hovered/active borders |

**Rationale:** Abandons the generic purple/indigo AI-slop aesthetic entirely. The amber/orange reads as heat treatment, machining sparks, and the warm glow of a hot shop floor. The teal reads as CMM visualization, digital measurement, inspection callouts. Together they signal: physical precision + digital intelligence. This combination is rare — almost no one else in the engineering freelance space owns it.

**Kill immediately:** `#4c1d95` purple, `#312e81` indigo, `#be185d` pink. These scream "AI-generated tech startup," not "precision engineering."

### Font Stack

**Primary Heading:** `Rajdhani` (Google Fonts, weights 500/600/700)
- Why: Originally designed for technical/engineering display use. Narrow, precise stems. Letters feel like they were CNC-machined. Has a slightly military/industrial character that Inter completely lacks. Looks like it belongs on a tolerancing sheet header.
- Load: `family=Rajdhani:wght@500;600;700`

**Secondary / Body:** `DM Mono` for alternate technical labels (lightweight alternative to JetBrains Mono for smaller callouts)
- Actually: Keep `JetBrains Mono` for all monospace/technical elements. It's already loaded, it's excellent.

**Body Text:** A clean, readable neutral. Use system font stack for body paragraphs to preserve performance:
```css
font-family: -apple-system, 'Segoe UI', system-ui, sans-serif;
```
Or add `Barlow` (Google Fonts) as body — wide, legible, slightly industrial. Max 2 total added fonts.

**Final font plan:**
```css
--font-heading: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif;
--font-body: 'Barlow', -apple-system, system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Cascadia Code', monospace;
```

Add to Google Fonts link:
```
family=Rajdhani:wght@500;600;700&family=Barlow:wght@400;500;600&display=swap
```
(Remove Inter completely.)

### Motion Philosophy

**Five governing principles — violate none of them:**

1. **Reveal, Don't Flash.** Elements enter once, cleanly. No loops, no bouncing, no attention-seeking repeats. A machined part doesn't wiggle — it arrives.

2. **Motion Has Direction.** Content always moves from a specific origin: text reveals upward (like a tolerance dimension emerging from a drawing), images fade in with a subtle scale from 0.97→1.0. Direction = intention.

3. **Hover is a Conversation.** Every interactive element responds to hover in a way that feels mechanical — a physical engagement, not a glow. Cards lift with a precise Y-transform. Borders track from a corner. Buttons feel like they click.

4. **Ambient Motion is Slow.** Background elements (grid, glow blobs if kept) move at geological timescales. The viewer should feel like the environment breathes, not twitches. Target: 20s+ cycles, subtle.

5. **Performance Over Drama.** All animations use `transform` and `opacity` only (GPU layer). No layout-triggering properties. Mobile gets simplified but not stripped — a static site on mobile is a failure.

### Texture / Material Language

- **Background:** Near-black with barely-perceptible grain (keep existing SVG noise at ~0.03 opacity). Feels like anodized aluminum, not velvet.
- **Cards:** `surface` + 1px `border` + subtle inner shadow on hover. The surface should feel like a panel in a control box — functional, metal, purposeful.
- **Section dividers:** Not horizontal rules. Instead: a short amber line (`accent-primary`, 2px, 40px wide) left-aligned before section titles. Like a machinist's reference datum.
- **Technical callout elements:** Small labels in `font-mono` with a `[` prefix and `]` suffix. Example: `[ SolidWorks ]`, `[ 0.001" tolerance ]`. These read like CNC program comments.
- **Grid overlay:** Keep the 12-column grid but style it as a **blueprint grid** — horizontal lines added at 8-unit intervals (very faint), vertical columns at faint blue-gray. Feels like looking at a tolerance sheet on a light table.

---

## 3. Layout Principles

### Grid System

**Reference inspiration:** ASME Y14.5 drawing sheets. Engineering drawings have a rigid outer border, title block (bottom-right anchor), revision table (top-right), and a large open field. The grid is visible but doesn't dominate.

**Implementation:**
- 12-column grid, 24px gutter, 80px horizontal padding on desktop
- **Title block anchor:** Footer treated as a drawing title block. Contact info anchored to bottom-right zone.
- **Revision column:** Right edge of several sections gets a narrow `rev` column with `font-mono` labels: part numbers, dates, version marks. These are cosmetic but reinforce the engineering doc aesthetic.
- **Horizontal datum lines:** Very faint full-width horizontal rules every ~200px scroll — like the major gridlines on graph paper. Opacity: 0.04.

### Spacing Rhythm

```
--space-base: 8px      /* 1 unit */
--space-2:   16px
--space-3:   24px
--space-4:   32px
--space-5:   40px
--space-6:   48px
--space-8:   64px
--space-10:  80px
--space-12:  96px
--space-16: 128px
--space-20: 160px
```

**Rule:** Section padding = `--space-16` (128px) top/bottom. Card gaps = `--space-4` (32px). Typography margin = `--space-3` (24px) between levels.

### Asymmetry Strategy

Break the grid intentionally in these places only:
1. **Hero title:** Second title line (`Automated Logic.`) offset 2 columns right. Creates diagonal read tension.
2. **About section:** The about text column is 7/12 wide, left-aligned. The right 5/12 holds a technical spec card (years of experience as a tolerance callout, skills as GD&T feature control frames).
3. **Services section:** Sticky heading left at column 1-3, content scrolls in columns 4-12. Already structured this way — lean into it harder.
4. **One project card:** The PumpTracker card spans full width, breaking out of the 2-column card grid. Breaks pattern = draws eye = that's the hero project.
5. **Footer CTA:** "Come on. Let's build something cool together." is set in `Rajdhani` at 80-100px, full width, breaking normal text size conventions.

### Breakpoint Behavior

```
Desktop:  1400px max-width, 80px horizontal padding
Tablet:   768-1024px, 40px horizontal padding, 8-col grid
Mobile:   <768px, 16px padding, 4-col grid (effectively 1-col for content)
```

**Mobile-first rules:**
- Navigation: Hamburger → full-screen overlay with large nav links
- Hero title: Scale `clamp(48px, 8vw, 96px)` — huge on desktop, still dramatic on phone
- Projects: Single column stack
- Services: Remove sticky behavior, stack normally
- All animations: Duration cut by 30%, complexity reduced but still present
- Touch devices: Hover states converted to tap states with CSS `@media (hover: none)`

---

## 4. Section-by-Section Strategy

### Hero

**Current state:** Title, subtitle, and 3 action buttons — functional but the bio description (`"Bridging the gap..."`) is weak copy that undersells the actual depth.

**Target state:** A first-scroll experience that communicates "precision engineer with a digital mind" in under 5 seconds — visitor immediately knows who this is, what he does, and feels the quality difference.

**Key changes:**
- Replace glow blobs (purple/indigo) with the amber/teal palette. One warm bloom, bottom-left. One cool bloom, top-right. Much subtler opacity (0.15 max).
- Super header `// MECHANICAL SYSTEMS & AUTOMATION` → style with `font-mono`, amber color, preceded by a blinking cursor `█`
- Hero title scale up: `clamp(56px, 9vw, 108px)`, letter-spacing `-0.02em`, `font-weight: 700` in Rajdhani. Two-line stagger: line 1 reveals, then line 2 at slight delay.
- Replace subtitle with a **typed technical spec block**:
  ```
  > SPEC: CAD Automation + AI Integration
  > STACK: SolidWorks · React/TS · Python
  > EXP: 15+ years precision manufacturing
  > LOC: Jacksonville, FL
  ```
  Each line typewriter-types in, 0.3s apart.
- CTA buttons: Primary = amber fill, "Let's talk work" (not "Email me"). Secondary = outlined, "See the work" (scrolls to projects).
- Remove "View resume" from hero. Resume is not the first thing a client should click.

**Moment of delight:** The hero title lines have a subtle **character scramble** on page load — each letter cycles through 2-3 random characters before settling on the correct letter (like a machine initializing). 0.6s total. Then the title sits perfectly still. Never repeats. Viewer instantly: "Oh, this is different."

---

### About / Bio

**Current state:** Wall of text. Well-written but presented like a LinkedIn summary — no visual hierarchy, no scanability.

**Target state:** Transforms a reader into a believer. A hiring manager skimming should hit 3-4 bullets that make them stop and read more.

**Key changes:**
- Split the about section: 7/12 bio text (tightened to 3 short paragraphs, not one wall), 5/12 **technical spec card**
- The spec card is styled like a GD&T feature control frame or tolerance table:
  ```
  ┌─────────────────────────────────────────┐
  │ EXP        │ 15+ YRS PRECISION MFG       │
  │ MACHINES   │ 7-AXIS MILL-TURN, CMM       │
  │ SOFTWARE   │ SOLIDWORKS · REACT · PYTHON │
  │ SPECIALTY  │ CAD AUTOMATION + AI         │
  │ STATUS     │ AVAILABLE FOR CONTRACT WORK │
  └─────────────────────────────────────────┘
  ```
  Styled with mono font, amber accent on the left column header, subtle border.
- Add the testimonials **inline** (not as a separate section) — pull one killer quote (Darrin Phipps' quote) into the about section as a breakout quote.

**Moment of delight:** The spec card values typewriter-type in when scrolled into view — one row at a time, with a subtle left-to-right scanning animation (like a CMM probe measuring each datum). `STATUS: AVAILABLE FOR CONTRACT WORK` blinks the word "AVAILABLE" in amber.

---

### Projects

**Current state:** Card grid — works but all 4 projects receive equal visual weight; hierarchy is missing.

**Target state:** PumpTracker as hero project (tech work = premium rates) immediately followed by hardware proof. The viewer sees: "He builds software AND he designs physical things that get manufactured." That combo is the whole pitch.

**Key changes:**
- PumpTracker: Full-width card at top, horizontal layout (image left 60%, description right 40%), big. Break the grid.
- Remaining 3 projects: 3-column row below. Smaller cards. Still interactive.
- Each card: On hover, project category becomes an `[amber-colored]` label. A thin amber line animates from left edge. Image scales 1.03 with clip-path.
- Add concrete outcome lines to project descriptions. E.g., PumpTracker: `→ Replaced 3 Excel files. Real-time visibility for 8-person shop.`
- Project cards show image overlay on hover with key stats.
- Gallery lightbox already exists — keep it, style it better.

**Moment of delight:** The PumpTracker hero card has a faint **toolpath visualization** in the background — a looping SVG animation of CNC mill toolpaths (circles, contours, arcs) drawn at very low opacity in the card background. Like watching a program run. Stops on hover — the machine pauses when you look at it.

---

### Services

**Current state:** Text blocks in a sticky layout. Content is good but doesn't feel premium — reads like a Upwork profile summary.

**Target state:** Three services that feel like line items on a shop quote: specific, priced in the visitor's imagination as "worth it," with outcome language not feature language.

**Key changes:**
- Rename service titles to be outcome-focused (current titles are already close but need sharpening):
  - "Mechanical design that survives the shop floor" → keep, it's good
  - "Manufacturing documentation + release hygiene" → "Drawing packages that don't come back for revisions"  
  - "Internal tools + automation (practical, not science-fair)" → keep, "science-fair" is brilliant
- Add **premium positioning signals** (not rates, but value language):
  - After each service description, add a small callout: `→ Typical engagement: 2–6 weeks`
  - Add one "what this prevents" line: e.g., "Prevents: late-stage ECOs, rework, tribal-knowledge failure"
- Service cards: numbered `01` `02` `03` in large (`96px`), very low opacity Rajdhani — like technical drawing sheet numbers in the background.
- Tags styled as `[ tag ]` mono code blocks.
- Add a clear "Work with me" CTA at the bottom of the services section.

**Moment of delight:** As you scroll through services in the sticky layout, the large background number counts `01 → 02 → 03` with a mechanical counter flip animation (CSS perspective flip, 0.2s). Like an odometer. The number changes the instant that service enters view.

---

### Case Studies

**Current state:** 3 cards with images and titles — but the actual titles are job-application-flavored ("Strategic Engineering Hire...") not portfolio-case-study-flavored. Missed opportunity.

**Target state:** Proof artifacts. Each case study should feel like a problem→solution brief that makes a plant manager think "I have that exact problem."

**Key changes:**
- Retitle case studies as problem/solution framing:
  - "Reliability Engineering: Extending Asset Lifecycle from 3 to 5 Years" → keep, it's strong
  - "Designing the Future of Practice: A Capabilities Deck" → replace with a real project outcome
  - "Strategic Engineering Hire..." → replace entirely with something technical
- Add a **brief metadata block** to each case study card:
  ```
  Problem: Asset failing at 3yr MTBF
  Solution: Tribopolymer material + IoT monitoring
  Result: +66% lifecycle, zero unplanned downtime
  ```
- Case study cards: horizontal layout with image on left, text on right (not stacked). More editorial.
- Add a "Read case study →" link that expands the card (or links to a future sub-page).

**Moment of delight:** On hover, the case study card image transitions with a **blueprint overlay** — a very brief CSS filter animation to blue-tinted, high-contrast, then back to color. Like flipping between a technical drawing and the finished product. Lasts 0.3s. Subtle but striking.

---

### Contact

**Current state:** Footer-only — big CTA text and an email link. Completely passive. No form, no context for what kind of work to reach out about.

**Target state:** Conversion moment. The visitor has seen the work, believes the competence, and is now ready to act. Make it stupid easy to start a conversation.

**Key changes:**
- Move contact up to a full section (before the footer, after testimonials).
- Add a **project intake form** — dead simple, no backend needed (Formspree or mailto href with subject):
  - "What do you need?" (dropdown: CAD Design / Automation / AI Integration / Other)
  - "Briefly describe your project" (textarea)
  - "Best way to reach you" (email field)
  - Submit → opens mailto with pre-filled subject + body (no server needed)
- Display the phone number prominently. Shop foremen call. They don't fill forms.
- Add "Currently available" status badge (amber dot, pulsing animation).
- Footer CTA: Keep `"Come on. Let's build something cool together."` — it's perfect. Make it 96px+.

**Moment of delight:** When the contact section scrolls into view, the section background briefly shows a **coordinate dimension** animation — like a CAD drawing is measuring the bounding box of the section, with small arrows extending to dimension lines that then fade. Lasts 1.5s. Never repeats. The section title "Contact" reveals last, after the measurement animation completes.

---

## 5. Motion & Engagement Map

### Page Load Sequence (0ms → 1500ms)

```
0ms     Background settles (amber/teal blobs fade in, 600ms ease-out)
200ms   Nav bar fades in from top (translateY(-20px) → 0, opacity 0→1, 400ms)
400ms   Hero super-header types in, character by character (300ms)
600ms   Hero title LINE 1: character scramble + settle (500ms)
800ms   Hero title LINE 2: same treatment (500ms)
1000ms  Spec block lines type in, one per 150ms (600ms total)
1200ms  CTA buttons slide up from below (translateY(20px) → 0, stagger 100ms, 300ms)
```
Total: ~1.5s to full reveal. Feels fast but deliberate.

### Scroll-Reveal Behaviors

**Default reveal (all sections):**
```css
[data-reveal] {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}
```
Trigger: IntersectionObserver at 15% threshold.

**Section title reveals:** Clip-path reveal (already in place via `.reveal-mask`) — keep and ensure it fires correctly.

**Projects grid:** Cards stagger in 80ms apart. Each card starts at `opacity:0, translateY(40px)`.

**Services (sticky scroll):** As each service scrolls into the sticky panel, the content slides in from the right (`translateX(24px) → 0`). The background number flips simultaneously.

**Case studies:** Horizontal card slides in from alternate directions — first card from left, second from right, third from left. More dynamic than uniform.

**Testimonials:** Slow fade-in, no translate. Quotes deserve to just appear, not move. Adds weight.

**Ticker/Skills bar:** Already animates continuously — adjust speed to 40s for one full loop (currently feels either too fast or too slow depending on content).

### Hover States (minimum 6, actually 10)

1. **Nav links:** Amber underline expands from center outward (scaleX 0→1 from center, 200ms). Not a color change.

2. **Hero title (magnetic):** Already has `.magnetic-text-target` — implement actual magnetic effect: on mousemove near title, letters translate subtly toward cursor. Max 6px displacement. Eases back instantly on mouse leave.

3. **Project cards (default):** Card lifts `translateY(-4px)`, border color transitions to `border-active` (amber, 0.4 opacity), image scales 1.03. Duration: 200ms ease-out.

4. **PumpTracker hero card:** Toolpath SVG animation begins (idle state is frozen, hover state plays).

5. **Service cards:** The large background number gains opacity (from 0.04 → 0.08). Tags shift from muted to `accent-secondary` (teal). Left border grows from 0 to full height in `accent-primary`.

6. **Case study cards:** Blueprint overlay transition (image filter cycle: normal → high-contrast blue tint → normal, 300ms). Card border becomes amber.

7. **CTA buttons (primary/amber):** Button appears to press — `translateY(2px)` + slight shadow reduction. Feels mechanical, like a physical button actuating.

8. **Footer email link:** Letter-spacing expands subtly (`0 → 0.05em`) + amber color. Makes it feel like it's extending toward you.

9. **Testimonial cards:** Quote mark (") scales up from 1→1.2 in background, shifts slightly. Author name reveals amber underline.

10. **Fixed CTA bar:** "View resume" + "View LinkedIn" buttons swap from outlined → filled on hover with amber background.

### Ambient / Continuous Animations

- **Background blobs:** Slow morph + drift. 25s cycle, `cubic-bezier(0.4, 0, 0.2, 1)`. Very low opacity (0.12 amber, 0.10 teal).
- **Skills ticker:** Infinite scroll, 40s cycle, pauses on hover.
- **`AVAILABLE` status badge in contact section:** Pulsing amber dot. `box-shadow: 0 0 0 0 rgba(224, 123, 57, 0.4)` → `box-shadow: 0 0 0 8px transparent`. 2s infinite.
- **Hero cursor blink:** `█` character in super-header blinks at 1s interval. CSS animation only.
- **Grid overlay:** Static. No animation. The grid is a datum — it never moves.

### Mobile Fallbacks

```css
@media (prefers-reduced-motion: reduce), (max-width: 768px) {
  /* Character scramble: disabled entirely. Title just fades in. */
  /* Magnetic text: disabled. */
  /* Toolpath animation: disabled. */
  /* Blueprint hover: disabled. Replace with simple opacity transition. */
  /* All transitions: duration *= 0.7 */
  /* Sticky services: disabled. Normal scroll. */
  /* Glow blobs: single blob, lower opacity (0.08), no animation. */
}
```
Touch hover states via `:active` pseudo-class. Cards respond to tap with same visual as hover, 100ms, then 200ms back to normal.

---

## 6. Freelance Conversion Architecture

### Primary CTA Placement + Copy

| Location | Element | Copy |
|----------|---------|------|
| Hero | Button (amber fill, large) | "Let's talk work" |
| Hero | Button (outlined) | "See the work ↓" |
| After services section | Full-width strip | "Available for contract work — [Let's talk →]" |
| Fixed bottom bar | Always visible | "View resume" + "View LinkedIn" |
| Contact section | Large heading | "What are you building?" |
| Footer | Emotional close | "Come on. Let's build something cool together." |

**Remove:** "View resume" from hero. Resume is not a CTA — it's a supporting document. The CTA is conversation.

### Premium Positioning Signals

- **Nowhere list a rate.** Instead, signal value through outcome language and specificity.
- Services copy pattern: `[Problem they have] → [What Mark does] → [Result they get]`
- Under each service, add: `→ Typical engagement: [timeframe]` — this trains the client to think in project chunks, not hourly.
- The precision engineering vocabulary itself is a signal. A designer who casually drops "7-axis mill-turn," "CMM," "GD&T flatness callout," "PDM vault" is not cheap. The jargon earns the premium.
- Case studies: outcome numbers ("+66% lifecycle," "40hr/week saved") are the price anchor. The client calculates ROI before they see a rate.
- Testimonial from Darrin Phipps (Black Creek Precision president) = social proof. **Pull this to the hero section** or at minimum above the fold on second scroll.

### Trust/Credibility Elements to Add

1. **"Currently available" badge** — amber pulsing dot, top of contact section. Reduces friction (eliminates "I wonder if he's busy").
2. **Specific machine experience callout** — somewhere in About or Hero, the line "7-axis mill-turn, 5th-axis horizontals, CMM, optical comparators" should appear. Not buried in the about paragraph — surfaced in the spec card.
3. **Three named testimonials** — already have them. Ensure author names link to LinkedIn profiles (where possible) for verifiability.
4. **Outcome metrics** — add to project descriptions wherever possible. Concrete numbers are trust infrastructure.
5. **Location signal** — "Jacksonville, FL" in footer/contact. Many clients want US-based contractors. Signal it clearly.
6. **Resume link** — keep it but position it as a supporting asset, not the primary CTA. PDF download, not image.
7. **GitHub link** — if there's public code, link it. Engineers hire engineers.

### The "Hire Me" Journey

```
SCROLL 1 — HERO (0-100vh)
Who is this guy? → "Mechanical designer + CAD automation + AI integration"
Is he legit? → [character scramble title effect creates pattern interrupt]
What does he do specifically? → Typed spec block answers this
What should I do? → "Let's talk work" amber button is unmissable

SCROLL 2 — ABOUT (100-200vh)
Who is he really? → 3 tight paragraphs
Credentials? → GD&T spec table with 15+ years, machine list
What do others say? → Pulled testimonial from Darrin Phipps (company president)

SCROLL 3 — PROJECTS (200-400vh)
Has he done real work? → PumpTracker hero card + 3 hardware projects
Can I see the outcome? → Concrete result lines on each project
Does he work at my scale? → Industrial pump packages, torque wrenches = manufacturing scale

SCROLL 4 — SERVICES (400-550vh)
Does he do what I need? → Three clear services
Is this the right fit? → Outcome language, prevention language
What's next? → "Work with me" CTA at bottom

SCROLL 5 — CASE STUDIES (550-700vh)
Can he solve problems like mine? → Problem/solution brief format
What are the results? → Metrics in callout boxes

SCROLL 6 — TESTIMONIALS (700-800vh)
Should I trust him? → Three attributed quotes from named people at real companies
[CONVERSION ZONE BEGINS]

SCROLL 7 — CONTACT (800-900vh)
How do I reach him? → Form + phone + email, all visible
Is he available? → "Currently available" pulsing badge
Do I want to? → "What are you building?" — invites conversation, not application

FOOTER
Final emotional push → "Come on. Let's build something cool together."
```

---

## 7. Sprint Breakdown

### Sprint 1: Foundation Swap
**Name:** Color System + Typography Overhaul  
**Scope:** Kill the purple/indigo palette. Install amber/teal system. Swap Inter for Rajdhani + Barlow. Update all CSS variables.  
**Files to touch:**
- `site/css/styles.css` (CSS variables section, all color references)
- `site/index.html` (Google Fonts link: add Rajdhani + Barlow, remove Inter)
**Done criteria:**
- No purple, indigo, or pink anywhere in rendered page
- Headings render in Rajdhani at correct weights
- Body text renders in Barlow or system stack
- All glow blobs are amber/teal variants at correct opacity
- Contrast ratios pass WCAG AA for all text on background
**Estimated effort:** M

---

### Sprint 2: Hero Section Rebuild
**Name:** First Impression Overhaul  
**Scope:** Character scramble on load, typed spec block replacing bio text, new CTA button copy/style, hero layout refinement.  
**Files to touch:**
- `site/js/scripts.js` (hero render function, add scramble effect, add typewriter spec block)
- `site/css/styles.css` (hero section styles, CTA button styles)
**Done criteria:**
- Page load shows character scramble → settle sequence (max 1.5s total)
- Spec block types in character by character on load
- Primary CTA reads "Let's talk work", amber fill, visually dominant
- No "View resume" in hero
- Mobile: hero readable at 375px viewport, all elements visible without scroll
**Estimated effort:** M

---

### Sprint 3: About Section + Spec Card
**Name:** Credibility Infrastructure  
**Scope:** About section split layout. Technical spec card (GD&T-inspired). Typewriter reveal on scroll. Inline testimonial pull.  
**Files to touch:**
- `site/js/scripts.js` (about section render, spec card generation)
- `site/css/styles.css` (about section layout, spec-card styles)
**Done criteria:**
- About section renders in 7/12 + 5/12 split on desktop
- Spec card visible with correct data (years, machines, stack, availability)
- `AVAILABLE` text blinks in amber
- Darrin Phipps testimonial appears in about section as blockquote
- Scroll-reveal fires correctly on IntersectionObserver
**Estimated effort:** M

---

### Sprint 4: Projects Section Overhaul
**Name:** Work That Sells  
**Scope:** PumpTracker hero card (full-width). Toolpath SVG background animation on hover. Concrete outcome lines added. Card hover states.  
**Files to touch:**
- `site/js/scripts.js` (projects grid render, add outcome data to portfolioData)
- `site/css/styles.css` (hero card layout, toolpath animation)
- Create: `site/assets/toolpath.svg` (a simple SVG of CNC toolpath loops)
**Done criteria:**
- PumpTracker card spans full width, horizontal layout, visibly different from other cards
- Toolpath SVG animation visible (low opacity) on hover of PumpTracker card
- Each project card has an outcome/result line
- Card hover states: lift + amber border + image scale all work simultaneously
- Lightbox still functional
**Estimated effort:** L

---

### Sprint 5: Services + Conversion Layer
**Name:** The Sales Page  
**Scope:** Service card redesign with background number flip animation. Outcome language updates. Engagement signals. "Work with me" CTA block.  
**Files to touch:**
- `site/js/scripts.js` (services render, add engagement timeframes, add outcome lines)
- `site/css/styles.css` (service card styles, odometer number, left border animation)
**Done criteria:**
- Background numbers (01/02/03) visible at low opacity, flip on scroll trigger
- Each service has "Typical engagement: X weeks" line
- Each service has one "Prevents:" line
- Tags styled as `[ tag ]` mono blocks
- "Work with me" CTA section renders after services with amber link
**Estimated effort:** M

---

### Sprint 6: Contact Section + Full CTA Architecture
**Name:** Conversion Moment  
**Scope:** Full contact section (above footer). Simple intake form (mailto). Phone prominently displayed. Availability badge. Coordinate dimension reveal animation.  
**Files to touch:**
- `site/index.html` (add contact section before footer)
- `site/js/scripts.js` (contact section render, form handler)
- `site/css/styles.css` (contact section styles, availability badge pulse, dimension animation)
**Done criteria:**
- Contact section renders as full-page section (not just footer)
- Form submits via mailto with pre-filled subject + body
- Phone number visible and clickable (tel: href)
- "Currently available" badge with amber pulse animation visible
- Coordinate dimension animation fires on section reveal (plays once, never repeats)
- Footer CTA text is 96px+ in Rajdhani
**Estimated effort:** M

---

### Sprint 7: Polish + Performance Audit
**Name:** Craft Pass  
**Scope:** Typography hierarchy audit. Spacing consistency check. Mobile responsive pass at 375/768px. Load performance test. Reduced-motion compliance.  
**Files to touch:**
- `site/css/styles.css` (responsive breakpoints, spacing corrections)
- `site/js/scripts.js` (mobile fallbacks, reduced-motion checks)
**Done criteria:**
- Lighthouse performance score ≥ 85 on mobile
- No layout shift on load (CLS ≤ 0.1)
- All sections readable at 375px without horizontal scroll
- `prefers-reduced-motion` disables character scramble, toolpath animation, dimension animation
- Typography hierarchy: h1 > h2 > h3 > body > label all visually distinct
- All hover states work at 768px tablet (pointer device assumed)
**Estimated effort:** M

---

### Sprint 8: Case Studies + Testimonials Rebuild
**Name:** Proof Architecture  
**Scope:** Case study cards reframed as problem/solution briefs. Blueprint hover effect. Testimonials section refined. Strategic placement of Darrin Phipps quote.  
**Files to touch:**
- `site/js/scripts.js` (case study and testimonial render, add metadata to caseStudies data)
- `site/css/styles.css` (case study card horizontal layout, blueprint filter animation, testimonial styles)
**Done criteria:**
- Each case study card has Problem/Solution/Result metadata block
- Blueprint hover effect fires on case study card hover (CSS filter transition, 300ms)
- Case study layout is horizontal (image left, text right) not stacked
- Testimonials section has three cards, quote marks styled large and decorative
- All reveals fire correctly on scroll
**Estimated effort:** M

---

## 8. The Unforgettable Element

### The Tolerance Callout System

Every major project card and spec element carries **live GD&T-style tolerance callouts**.

**What it is:** When a project card, service card, or spec block enters the viewport, a brief CSS animation draws dimension lines from the corners of the element — the way a drafter adds dimensions to a part drawing. A small box appears at the end of each dimension line containing a fictional but plausible engineering callout:

```
┌─────────────────────────┐
│  ⌀ 0.001" TIR           │←── dimension line to card corner
│  ⊕ ±0.0005 TRUE POSITION│
│  ↕ 128.000 mm [REF]     │
└─────────────────────────┘
```

These appear in `font-mono`, `accent-secondary` (teal), very thin lines (1px). They animate in (opacity 0→1 + scale from dimension origin) over 400ms when the section first becomes active. They fade out on scroll-away. They never appear on mobile.

**Why it's the signature:** No other portfolio does this. It takes a convention that belongs in a drawing package and applies it to a webpage — it's Mark saying "I see the world in tolerances and I build things that way." A shop foreman sees it and immediately understands it. A design director sees it and thinks it's brilliant. Both feel like this was made for them.

**Technical implementation:** Pure CSS + JS. Each "callout zone" is a positioned `<div>` with `::before`/`::after` pseudo-elements for dimension lines. The callout values are hardcoded in JS per section. SVG dimension arrowheads via inline SVG data URI. Total JS: ~40 lines. Total CSS: ~60 lines. No library. No overhead.

**This is the thing people screenshot. This is what gets shared. This is what makes the evaluator say "Yes — finally, a portfolio that actually means something."**

---

## Appendix: Files Reference

| File | Purpose |
|------|---------|
| `portfolio-design-spec.md` | This document. Generator reads every sprint. |
| `site/index.html` | HTML structure. Add contact section. |
| `site/css/styles.css` | All styles. CSS variables at top = design tokens. |
| `site/js/scripts.js` | All render logic + data. `portfolioData` is the single source of truth. |
| `site/assets/images/` | All images already present. `img_000.webp` → resume, `img_001-005` → PumpTracker, etc. |
| `sprint-NNN-contract.md` | Generator: write this before each implementation. Evaluator approves. |
| `eval-report-NNN.md` | Evaluator output. Generator reads before each sprint. |

---

_PLANNER COMPLETE_

_This spec is a living document. Generator may annotate sections with `<!-- AMENDED: reason -->` as sprints reveal practical constraints. Evaluator may flag spec items as "passed" or "revised" in eval reports. The spec evolves with the portfolio._
