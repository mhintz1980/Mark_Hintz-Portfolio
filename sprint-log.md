# Sprint Log

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
