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

**Next:** Sprint 2 — Hero Section Rebuild
