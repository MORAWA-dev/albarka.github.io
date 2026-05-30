# About This Website — agenticbrahim.dev

> **Purpose of this document:** Provide comprehensive context about this portfolio website so that any AI agent or model can understand the full architecture, design system, features, and conventions — and confidently make changes. This is the single source of truth for working on this codebase.

---

## Owner & Identity

- **Name:** Ibrahim Kabore (goes by "Albarka" or "Agentic Brahim")
- **Brand:** Agentic Brahim — Builder & AI Enthusiast
- **Domain:** [agenticbrahim.dev](https://agenticbrahim.dev) (custom domain via name.com DNS, hosted on GitHub Pages)
- **Email:** hello@agenticbrahim.dev (forwards to ibrakabore01@gmail.com)
- **Education:** M.Sc. Geomatics & Environment, FST Béni Mellal (Morocco)
- **Focus:** AI for African Agriculture & Mining, LLMs, RAG, Geospatial AI, Multi-Agent Systems
- **Current:** M.Sc. Graduate, seeking a PhD position (Fall 2026) — Geospatial AI & Remote Sensing

### Social Accounts

| Platform      | Username / URL                                        |
|---------------|-------------------------------------------------------|
| GitHub        | [MORAWA-dev](https://github.com/MORAWA-dev)           |
| HuggingFace   | [kimcomehome](https://huggingface.co/kimcomehome)     |
| LinkedIn      | [ibrahimkabore](https://linkedin.com/in/ibrahimkabore)|
| YouTube       | [@geomatics101k](https://youtube.com/@geomatics101k) |
| Calendly      | [ibrakabore01](https://calendly.com/ibrakabore01)     |

---

## Hosting & Deployment

- **Platform:** GitHub Pages (static site, no build step)
- **Repository:** `MORAWA-dev/albarka.github.io` on branch `main`
- **Remote:** `origin → https://github.com/MORAWA-dev/albarka.github.io.git`
- **Custom Domain:** agenticbrahim.dev (DNS configured at name.com)
- **Deployment:** Automatic on push to `main` — GitHub Pages builds from root `/`
- **No framework / build tool:** Pure HTML, CSS, vanilla JavaScript. No bundler, no npm, no static site generator.

---

## File Structure

```
albarka.github.io/
├── index.html                          # Homepage (469 lines) — main entry point
├── 404.html                            # Custom 404 error page
├── css/
│   ├── base.css                        # CSS variables, reset, typography, dark theme vars (177 lines)
│   ├── components.css                  # All UI components + responsive + dark theme overrides (1339 lines)
│   ├── terminal.css                    # Terminal Easter egg styles
│   └── confetti.css                    # Confetti particle + achievement toast styles
├── js/
│   ├── main.js                         # Core: theme toggle, typewriter, scroll-to-top, contact form, PWA (311 lines)
│   ├── i18n.js                         # EN/FR internationalization system (192 lines)
│   ├── terminal.js                     # Hidden terminal Easter egg (321 lines)
│   └── confetti.js                     # Confetti celebrations engine (314 lines)
├── pages/
│   ├── about.html                      # About me page
│   ├── projects.html                   # AI projects, HuggingFace spaces, models, datasets
│   ├── speaking.html                   # Speaking engagements + YouTube video embeds (568 lines)
│   ├── resources.html                  # AI papers, courses, tools, books
│   ├── resume.html                     # Resume page
│   ├── certificates.html               # Certifications gallery
│   ├── conferences.html                # Conference appearances
│   ├── case-study-aibrahim.html        # AIbrahim chatbot case study
│   ├── blog.html                       # Blog listing with Schema.org structured data
│   └── blog/
│       └── why-i-build-ai-for-africa.html  # First blog post with BlogPosting schema
├── assets/
│   ├── images/
│   │   ├── water.webp                  # Hero photo (WebP optimized)
│   │   ├── water.jpg                   # Hero photo (JPEG fallback)
│   │   ├── og-card.png                 # Open Graph social share card (1200×630)
│   │   └── og-generator.html           # Tool to generate OG card images
│   ├── icons/
│   │   ├── favicon.svg                 # SVG favicon
│   │   ├── icon-192.png                # PWA icon 192×192
│   │   └── icon-512.png                # PWA icon 512×512
│   ├── docs/
│   │   └── Ibrahim_Kabore_CV.pdf       # Downloadable CV
│   └── udemycertifications/            # Udemy certificate images
├── scripts/
│   └── optimize-images.sh              # WebP conversion script (uses cwebp)
├── manifest.json                       # PWA manifest
├── sw.js                               # Service worker (cache: agenticbrahim-v2)
├── feed.xml                            # RSS feed for blog
├── sitemap.xml                         # XML sitemap
├── ibrahim_kabore_resume_2026.md       # Resume in Markdown
├── README.md                           # GitHub repo README
├── todo.md                             # Development roadmap & task tracker
├── about.md                            # THIS FILE — full website context for AI agents
├── LICENSE                             # License file
├── style.css                           # Legacy/unused (from original portfolio)
├── style2.css                          # Legacy/unused (from original portfolio)
├── albarka.html                        # Legacy page (original portfolio)
├── certificates.html                   # Legacy page (root-level, replaced by pages/certificates.html)
├── conferences.html                    # Legacy page (root-level, replaced by pages/conferences.html)
└── projects.html                       # Legacy page (root-level, replaced by pages/projects.html)
```

> **Note:** `style.css`, `style2.css`, `albarka.html`, and the root-level `certificates.html`, `conferences.html`, `projects.html` are **legacy files** from the original portfolio. They are NOT used by the current site. The active pages live in `pages/` and active CSS is in `css/`.

---

## Design System

### Visual Style

The site follows a **soft neo-brutalism / editorial notebook** aesthetic:
- Cream/paper-like background with subtle horizontal line pattern (like notebook paper)
- Bold black borders on cards and UI elements
- Playful rounded shapes with pastel accent colors
- Animated floating shapes in the hero section
- Max content width of 700px (narrow, blog-like layout)
- DM Sans as the primary typeface
- Smooth page fade-in and section slide-up animations

### CSS Architecture

**Two main CSS files + two feature-specific files:**

1. **`css/base.css`** — Foundation layer:
   - Google Fonts import (DM Sans)
   - CSS custom properties (`:root` and `body.dark-theme`)
   - Reset (`*, *::before, *::after`)
   - Body styles with notebook-line background pattern
   - Page entry animation (`fadeIn`)
   - Section stagger animations (`slideUp`)
   - Container layout (max-width: 700px)
   - Link defaults
   - Section title styles
   - Accessibility utilities (`.sr-only`, `.skip-link`)

2. **`css/components.css`** — All UI components (~1339 lines):
   - Hero banner, photo, animated shapes
   - Navigation bar
   - Feature cards (with color variants: card-pink, card-yellow, card-blue, card-purple, card-green, card-orange)
   - List items
   - Metrics section
   - Timeline
   - Tech tags
   - GitHub widget
   - Testimonials grid
   - Newsletter form
   - Contact form
   - Footer
   - Chat widget (floating AIbrahim)
   - Scroll-to-top button
   - Theme toggle button
   - Language toggle button
   - Dark theme overrides (at the end)
   - Responsive breakpoints

3. **`css/terminal.css`** — Terminal Easter egg overlay
4. **`css/confetti.css`** — Confetti canvas + achievement toast notifications

### CSS Custom Properties (Theme Tokens)

```css
/* Light Theme (default) */
--bg-cream: #f5f3eb;
--bg-white: #ffffff;
--text-dark: #1a1a1a;
--text-gray: #6b6b6b;
--text-light: #999;
--accent-pink: #f4b8c5;
--accent-yellow: #f5d76e;
--accent-blue: #a8d4f0;
--accent-purple: #d4c4e8;
--accent-green: #b8e0d2;
--accent-orange: #f5d4a8;
--border-dark: #1a1a1a;
--font-main: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
--transition: 0.3s ease;
--max-width: 700px;
--radius: 16px;
--radius-lg: 24px;

/* Dark Theme (body.dark-theme) — all vars are overridden */
```

### Color Palette for Cards

Each card type uses a distinct pastel accent:
- `.card-pink` — `--accent-pink`
- `.card-yellow` — `--accent-yellow`
- `.card-blue` — `--accent-blue`
- `.card-purple` — `--accent-purple`
- `.card-green` — `--accent-green`
- `.card-orange` — `--accent-orange`

---

## JavaScript Architecture

All JavaScript is vanilla JS — no frameworks, no libraries, no bundlers.

### js/main.js (311 lines)

Core site functionality:
- **`initHeroColors()`** — Randomly assigns color palette to hero background shapes on each load
- **`initThemeToggle()`** — Dark/light mode toggle. Persists via `localStorage.setItem('theme', ...)`. Toggles `body.dark-theme` class. Button: `#theme-toggle`
- **`initTypewriter()`** — Cycles through 6 phrases in the hero section with typing/deleting animation. Target: `#typewriter`. Exposes `window.updateTypewriterPhrases()` for i18n integration
- **`initScrollTop()`** — Shows/hides scroll-to-top button. Button: `#scrollTop`
- **`initContactForm()`** — Intercepts `#contact-form` submission, sends via `fetch` to Formspree (`https://formspree.io/f/mbdgezge`), dispatches `contact-submitted` custom event for confetti
- **`showToast(message)`** — Utility to show temporary toast notifications
- **`PWA registration`** — Registers `sw.js` service worker on page load

### js/i18n.js (192 lines)

Internationalization system (English / French):
- `translations` object with `en` and `fr` keys
- All translatable UI text is stored here
- HTML elements use `data-i18n="key"` attributes
- `applyTranslations(lang)` iterates over all `[data-i18n]` elements and replaces text content (or placeholder for inputs)
- Language is persisted in `localStorage.setItem('lang', ...)`
- Updates `document.documentElement.lang` attribute
- Integrates with typewriter via `window.updateTypewriterPhrases`
- Toggle button: `#lang-toggle` (shows 🇫🇷 / 🇬🇧)

**i18n Convention:** To make any new text translatable:
1. Add `data-i18n="your.key"` to the HTML element
2. Add the key to both `en` and `fr` in the translations object in `js/i18n.js`

### js/terminal.js (321 lines)

Hidden terminal/CLI Easter egg:
- **Trigger:** Press backtick (`` ` ``) or `Ctrl+` `` ` `` to open; `Escape` to close
- Creates a full-screen terminal overlay with retro green-on-black styling
- Prompt: `agentic@brahim:~$`
- **15+ commands:** `help`, `about`, `skills`, `projects`, `contact`, `social`, `matrix`, `coffee`, `hire`, `secret`, `clear`, `exit`, `whoami`, `ls`, `pwd`, `date`, `echo`, `sudo`, `rm`, `hack`
- Command history with arrow keys (up/down)
- `matrix` command triggers a Matrix rain effect
- `hack` command plays a fake hacking animation
- `hire` command shows contact information

### js/confetti.js (314 lines)

Celebration particle system:
- **Canvas-based** confetti with physics simulation (gravity, wind, rotation)
- **Triggers:**
  - `newsletter-subscribed` custom event → celebration burst
  - `contact-submitted` custom event → celebration burst
  - Scroll to bottom of page → fountain effect
  - Any CTA button click → small pop
  - **Konami Code** (↑↑↓↓←→←→BA) → massive explosion
- **Achievement toasts:** Styled notifications for each trigger (e.g., "Newsletter Hero!", "Message Sent!")
- Automatically cleans up canvas after animation completes

---

## Features

### 1. Dark Mode
- Toggle button `#theme-toggle` (top-right, shows 🌙/☀️)
- Adds/removes `body.dark-theme` class
- All CSS variables swap to dark values
- Persisted in localStorage (`theme` key)

### 2. Typewriter Effect
- Hero section: "I build [rotating phrase]|"
- 6 phrases cycle: AI Agents for Africa, RAG Systems, Fine-tuned LLMs, Geospatial AI, Multi-Agent Workflows, Intelligent Chatbots
- Phrases update when language is toggled (FR equivalents)

### 3. Progressive Web App (PWA)
- `manifest.json` defines app name, icons, theme colors
- `sw.js` caches all critical assets for offline support
- Cache name: `agenticbrahim-v2` (increment the version number when updating cached assets)

### 4. Internationalization (EN/FR)
- Toggle: `#lang-toggle` button
- System: `data-i18n` attributes on HTML + translations in `js/i18n.js`
- Only the homepage (`index.html`) is fully translated. Subpages have navigation translations but content is English-only.

### 5. AIbrahim Chat Widget
- Floating chat button (bottom-right, 🤖 icon)
- Opens an iframe to HuggingFace Space: `https://kimcomehome-aibrahim.hf.space`
- Toggle: `#chat-toggle`, Container: `#chat-container`
- Can be minimized with `#chat-minimize`

### 6. Contact Form
- Formspree endpoint: `https://formspree.io/f/mbdgezge`
- Fields: name, email, message (all required)
- Submitted via AJAX fetch (no page reload)
- Dispatches `contact-submitted` custom event on success → triggers confetti

### 7. Newsletter
- Buttondown service (username: `albarka007`)
- Endpoint: `https://buttondown.com/api/emails/embed-subscribe/albarka007`
- Dispatches `newsletter-subscribed` custom event on submit → triggers confetti

### 8. Terminal Easter Egg
- Press `` ` `` to open a retro terminal overlay
- Full command-line interface with 15+ commands
- See js/terminal.js section above for details

### 9. Confetti Celebrations
- Canvas particle system with multiple trigger types
- Includes achievement toast notifications
- See js/confetti.js section above for details

### 10. Speaking Page with YouTube Embeds
- `pages/speaking.html` — 4 real YouTube videos from @geomatics101k channel
- Video IDs: `mh3eTbjVKDA`, `UPplcIoyzE0`, `mViwR48lNoo`, `I1SyTSDFZAg`
- Conference talk timeline with "Coming Soon" links (no URLs yet)

### 11. Blog with Schema.org
- `pages/blog.html` — Blog listing with `Blog` JSON-LD structured data
- `pages/blog/why-i-build-ai-for-africa.html` — First post with `BlogPosting` JSON-LD schema
- RSS feed at `feed.xml`

### 12. HuggingFace Space Embed
- `pages/projects.html` has a "Try It Live" section with embedded HuggingFace Space iframe
- Space URL: `https://kimcomehome-aibrahim.hf.space`

### 13. Impact Metrics
- Homepage displays: 3 ML Models, 2 HuggingFace Spaces, 5 HuggingFace Datasets, 1 M.Sc. Thesis

### 14. GitHub Activity Widget
- Contribution chart image from `https://ghchart.rshah.org/1a1a1a/MORAWA-dev`

### 15. Analytics
- Umami Cloud (privacy-friendly, GDPR-compliant)
- Script: `https://cloud.umami.is/script.js`
- Website ID: `75d57cfb-178c-4222-bdfe-05bec144c185`
- Loaded with `defer` in `<head>` — only on index.html and key pages

### 16. SEO & Social
- JSON-LD `Person` schema on homepage
- Open Graph tags (og:title, og:description, og:image, etc.)
- Twitter Card tags (summary_large_image)
- OG image: `assets/images/og-card.png` (1200×630)
- Canonical URLs
- XML sitemap at `sitemap.xml`
- RSS feed at `feed.xml`

### 17. Image Optimization
- WebP format with `<picture>` fallback to JPEG
- Conversion tool: `cwebp` (install via `brew install webp`)
- Helper script: `scripts/optimize-images.sh`
- Usage pattern:
  ```html
  <picture>
    <source srcset="assets/images/photo.webp" type="image/webp">
    <img src="assets/images/photo.jpg" alt="Description" loading="lazy">
  </picture>
  ```

### 18. Accessibility
- Skip navigation link (`.skip-link`)
- Screen reader–only text (`.sr-only`)
- Semantic HTML (`<nav>`, `<section>`, `<footer>`, `<main>`)
- ARIA labels on interactive elements
- `loading="lazy"` on non-critical images
- `loading="eager"` on hero image

---

## Navigation Structure

All pages share a consistent top navigation bar:

```
Home | About | Projects | Speaking | Resources | Blog
```

**Path conventions:**
- From `index.html`: links go to `pages/about.html`, `pages/projects.html`, etc.
- From any page in `pages/`: links go to `../index.html` (Home) and sibling pages like `about.html`, `projects.html`
- Active page gets class `.active` on its nav link

**When adding a new page:**
1. Create the HTML file in `pages/`
2. Add the navigation link to ALL existing pages (index.html + all pages/*.html)
3. Use relative paths correctly (../ from pages/ to root)
4. Include all 4 CSS files and all 4 JS files
5. Add the page to `sitemap.xml`
6. Add the page to the `sw.js` cache list (urlsToCache array)
7. If the nav text should be translatable, add a `data-i18n` key and translations in `js/i18n.js`

---

## External Services

| Service        | Purpose            | Config Location                  | Credentials/IDs                        |
|----------------|--------------------|----------------------------------|----------------------------------------|
| GitHub Pages   | Hosting            | Repo settings                    | MORAWA-dev/albarka.github.io           |
| name.com       | DNS / Domain       | name.com dashboard               | agenticbrahim.dev                      |
| Umami Cloud    | Analytics          | `<script>` in HTML `<head>`     | Website ID: `75d57cfb-178c-4222-bdfe-05bec144c185` |
| Buttondown     | Newsletter         | Form action in HTML              | Username: `albarka007`                 |
| Formspree      | Contact form       | Form action + JS fetch           | Form ID: `f/mbdgezge`                  |
| HuggingFace    | Chat widget + embeds | iframe src in HTML             | Space: `kimcomehome-aibrahim`          |
| Calendly       | Booking calls      | Link in hero                     | `ibrakabore01`                         |

---

## Common Patterns & Conventions

### Adding a New Feature Card

```html
<div class="feature-card card-blue">
  <span class="arrow">↗</span>
  <h3>Card Title</h3>
  <p>Card description text</p>
</div>
```

Available card colors: `card-pink`, `card-yellow`, `card-blue`, `card-purple`, `card-green`, `card-orange`

### Adding a List Item

```html
<a href="URL" target="_blank" class="list-item">
  <span class="item-icon" style="background: var(--accent-purple)">🎯</span>
  <div class="item-content">
    <div class="item-title">Title <span class="item-tag">Tag</span></div>
    <div class="item-desc">Description text</div>
  </div>
  <span class="item-arrow">→</span>
</a>
```

### Adding a Timeline Entry

```html
<div class="timeline-item">
  <span class="timeline-date">Date Range</span>
  <div class="timeline-content">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</div>
```

### Adding Tech Tags

```html
<div class="tech-tags">
  <span class="tech-tag ai">AI Tag</span>  <!-- .ai class for highlighted tags -->
  <span class="tech-tag">Regular Tag</span>
</div>
```

### Making Text Translatable

```html
<span data-i18n="section.newkey">English Default Text</span>
```

Then in `js/i18n.js`:
```js
en: { 'section.newkey': 'English Default Text' },
fr: { 'section.newkey': 'Texte en Français' }
```

---

## Git History & Safety

### Git Tags (Rollback Points)

| Tag             | Description                               | How to restore                          |
|-----------------|-------------------------------------------|-----------------------------------------|
| `v1.0-launch`   | End of Session 1 (16 features complete)  | `git checkout v1.0-launch`             |
| `v2.0-stable`   | Before Session 2 changes began            | `git checkout v2.0-stable`             |

### Rollback Instructions

**To preview a previous version (safe, non-destructive):**
```bash
git stash                        # Save any uncommitted changes
git checkout v2.0-stable         # View that version
# ... inspect / test ...
git checkout main                # Go back to latest
git stash pop                    # Restore your changes
```

**To fully revert to a tag (destructive — ask the user first):**
```bash
git reset --hard v2.0-stable     # Reset to that state
git push --force origin main     # Force-push (⚠️ destructive)
```

**To undo the last commit (soft):**
```bash
git revert HEAD                  # Creates a new commit undoing the last one
git push origin main
```

**To create a new safety tag before making changes:**
```bash
git tag v3.0-stable
git push origin v3.0-stable
```

### Recent Git Log (as of last session)

```
f0b6af4 fix: add Speaking link to all page navigations
c1a599b docs: comprehensive roadmap with expert recommendations
461ac3e fix: update Speaking page with correct YouTube video links
57e3af0 docs: update todo.md with Session 2 completions
39e8318 feat: add WebP image optimization
9b607ab feat: add Schema.org structured data for blog
27f88a2 feat: add HuggingFace Space embed on projects page
b1483a1 feat: add Speaking & Talks page
3e3e045 feat: add confetti celebrations
ee21de0 feat: add terminal Easter egg
18cb883 (tag: v2.0-stable) docs: update todo with completed items
754017e feat: add branded OG social card image
1020c36 feat: add 7 major improvements
d622535 feat: add testimonials section and newsletter signup
953f9b8 fix: branding & navigation consistency across all pages
7766006 Add Umami analytics tracking ID
0a8aef1 Add PWA support with manifest and service worker
fea5ac1 Add blog section with first post
c11549a Add AIbrahim case study page
c902bbe Add Resources page
```

### Commit Message Convention

Format: `type: description emoji`

Types: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `chore:`

Examples:
- `feat: add dark mode toggle 🌙`
- `fix: navigation links on speaking page 🔗`
- `docs: update todo.md with completed items 📋`

---

## Development Workflow

### Local Development
```bash
# No build step needed — just open index.html or use a local server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Image Optimization
```bash
# Convert a new image to WebP
cwebp -q 80 assets/images/photo.jpg -o assets/images/photo.webp

# Or use the helper script
bash scripts/optimize-images.sh
```

### Deployment
```bash
git add -A
git commit -m "feat: description 🎯"
git push origin main
# GitHub Pages auto-deploys within ~1 minute
```

### Before Major Changes
```bash
# Always create a safety tag first
git tag v3.0-stable
git push origin v3.0-stable
```

---

## Known Limitations & Future Work

See `todo.md` for the full development roadmap. Key items include:
- Performance: lazy-load iframes, image `srcset` for responsive, critical CSS inlining
- Content: more blog posts, additional case studies, YouTube playlist integration
- SEO: more structured data (FAQ, HowTo), better internal linking
- Accessibility: ARIA live regions for dynamic content, focus management
- Only index.html is fully translated to French — subpages have nav translations but English-only content

---

## Quick Reference for AI Agents

| Task | Where to Look |
|------|---------------|
| Change site colors | `css/base.css` `:root` variables |
| Add a new page | Create in `pages/`, update nav in ALL pages, update `sitemap.xml`, update `sw.js` |
| Add a feature card | Use `.feature-card .card-{color}` pattern in any page |
| Change hero text | `index.html` hero section + `js/i18n.js` translations |
| Add a blog post | Create in `pages/blog/`, add listing in `pages/blog.html`, add to `feed.xml` |
| Modify chat widget | iframe src in HTML, styles in `css/components.css` |
| Add a terminal command | `js/terminal.js` → `executeCommand()` switch cases |
| Add a confetti trigger | `js/confetti.js` → `setupTriggers()` method |
| Change newsletter service | Update form action in HTML (search for "buttondown") |
| Change contact form endpoint | Update Formspree URL in HTML and `js/main.js` |
| Update cached assets (PWA) | Edit `urlsToCache` array in `sw.js`, increment `CACHE_NAME` version |
| Add i18n translation | Add `data-i18n` attr to HTML + add key to both `en` and `fr` in `js/i18n.js` |
| Rollback changes | Use git tags: `git checkout v2.0-stable` (see Safety section) |
