# Portfolio Site — Build Brief

**Read this entire file before writing any code. Do not add features, sections, pages, or styling choices not listed here. Ask before deviating.**

---

## Stack

- **Framework**: Astro (static output)
- **Styling**: Plain CSS (no Tailwind, no UI libraries)
- **JS**: Vanilla only, no frameworks
- **Deploy target**: GitHub Pages (static export) — also must work served locally via `astro preview` or `npx serve dist/`

---

## Pages

One single-page site. All sections on `index.astro`, navigable via anchor links.

Sections in order:
1. Hero (backdrop + name + subtitle)
2. About
3. Projects
4. Skills
5. Contact

---

## Backdrop

The backdrop is a full-viewport canvas animation. The code is in `vinyl_backdrop_v2.html` (provided separately — copy the `<canvas>` element, CSS, and `<script>` block into the Astro layout). It must:

- Render behind all content
- Be `position: fixed`, `z-index: 0`
- Degrade gracefully on mobile: if `window.innerWidth < 768`, reduce to a single centered channel (drop the R channel) and halve the amplitude
- Not block pointer events on content above it

---

## Content

### Hero
- Name: **[HASSAN'S FULL NAME]** — he will fill this in
- Subtitle: `Computer Engineering · Embedded · FPGA · Neurotech`
- No tagline, no CTA button, no scroll indicator

### About
Short paragraph. He will write the copy. Placeholder: `[ABOUT TEXT]`. Do not generate filler copy.

### Projects

Driven entirely by `/src/data/projects.json`. The component reads this file and renders each entry. Adding a new project in the future = editing only this JSON file.

Schema:
```json
[
  {
    "title": "Fader",
    "status": "ongoing",
    "year": 2024,
    "tags": ["hardware", "embedded", "audio"],
    "description": "[DESCRIPTION]",
    "link": null
  }
]
```

Initial entries (he will fill descriptions):
- Fader — ongoing — tags: hardware, embedded, audio
- Soft-core CPU (VHDL) — complete — tags: FPGA, VHDL, computer architecture
- VHDL project 2 — ongoing — tags: FPGA, VHDL
- Maze Generator — complete — tags: software, algorithms
- Static Site Generator — complete — tags: software, tools

Layout: horizontal list items, not cards. Each entry: title, year, status badge (ongoing/complete), tags, description. Simple, readable.

### Skills

He will provide the list. Placeholder: `[SKILLS LIST]`. Render as a flat inline list, not a grid of boxes.

### Contact

- Email displayed as `[username] at [domain]` in plain text
- One button: **Copy email** — assembles the address in JS at click time, copies to clipboard. No `mailto:`. No anchor with `href="mailto:"`.
- Actual address stored split in a JS variable, not in HTML source:
  ```js
  const e = ['username', 'domain.com'].join('@');
  ```
- No contact form. No other links except GitHub (icon, top nav or footer).

---

## Navigation

Minimal fixed top bar:
- Left: initials or short name (links to `#hero`)
- Right: anchor links — About · Projects · Skills · Contact
- Transparent background, no blur, no border. Disappears into the backdrop.
- On mobile: collapse to a hamburger that reveals a full-screen overlay menu

---

## Typography & Color

Match the backdrop aesthetic. Palette:
- Background: `#060402`
- Primary text: `rgba(215, 160, 65, 0.88)` (amber)
- Muted text: `rgba(195, 135, 40, 0.42)`
- Accent/rule: `rgba(210, 155, 60, 0.38)`
- No white. No pure black text.

Font: `DM Mono` (Google Fonts, weights 300 and 400 only). Already loaded in the backdrop.

---

## Mobile

- Backdrop: single centered channel, reduced amplitude (see Backdrop section)
- Nav: hamburger menu
- Projects: stack vertically
- Everything else: reflows naturally
- No separate mobile stylesheet — use media queries inline

---

## What NOT to do

- No animations on page elements (scroll reveals, fade-ins, etc.) — the backdrop is the animation
- No dark/light mode toggle
- No blog, no RSS
- No resume link or PDF
- No social links beyond GitHub
- No Google Analytics or any tracking
- No extra npm packages beyond Astro core
- Do not generate placeholder copy — leave `[PLACEHOLDER]` tokens for him to fill
- Do not add sections not listed above
- Do not ask clarifying questions mid-build — make the most conservative, minimal choice and note it in a comment

---

## File structure

```
/
├── public/
│   └── favicon.svg          (simple, minimal)
├── src/
│   ├── data/
│   │   └── projects.json
│   ├── components/
│   │   ├── Backdrop.astro   (canvas + script)
│   │   ├── Nav.astro
│   │   ├── Projects.astro   (reads projects.json)
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── Base.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
└── package.json
```

---

## Done means

- `npm run build` exits cleanly
- `npx serve dist/` serves the site locally with backdrop running and all sections visible
- Projects render from JSON
- Copy email button works
- Mobile layout doesn't break at 375px width
