# Portfolio Improvement Notepad

Track of improvements made each session. Most recent first.

---

## 2026-03-26 — Image Compression: PNG → WebP

**What:** Converted all 15 PNG images to WebP format, capping max dimension at 1200px.

**Result:**
- Total image size: **2,472KB → 1,248KB** (49.5% reduction, ~1.2MB saved)
- Notable wins: img_006 (332→161KB), img_009 (320→136KB), img_032 (346→177KB)
- Updated all image references in `js/scripts.js` and `site/js/scripts.js`

**Files changed:**
- `assets/images/img_001–img_032.webp` (15 new webp files, 15 old png files removed)
- `js/scripts.js` — all `.png"` → `.webp"`
- `site/js/scripts.js` — all `.png"` → `.webp"`

**Tool:** Python PIL (WEBP quality=82, method=6, max dim 1200px LANCZOS resize)

---

## Plan / Backlog

- [ ] Compress JPG images (img_008, img_013, img_014, img_015, img_020, img_021, img_023, img_024, img_025) — currently ~1.2MB total
- [ ] Add `loading="lazy"` to gallery images in scripts.js renderer
- [ ] Add `<meta name="description">` tag to index.html for SEO
- [ ] Minify CSS/JS for production
- [ ] Add favicon
- [ ] Review mobile responsiveness in CSS
