# julioesparza.com

Personal academic and professional website for Julio Esparza Ibáñez —
computational neuroscientist and AI engineer.

Live at: **julioesparza.com**

---

## Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| HTML       | Semantic HTML5, no framework        |
| CSS        | Vanilla CSS with custom properties  |
| JavaScript | Vanilla ES modules, no bundler      |
| Fonts      | Google Fonts (Space Grotesk, Inter) |
| Hosting    | GitHub Pages / any static host      |

Zero dependencies. Zero build step. Open `index.html` and it works.

---

## Project structure

```
julio-esparza-web/
├── index.html              # Entry point — structural skeleton only
│
├── css/
│   ├── main.css            # ← Import this one; it @imports all others
│   ├── tokens.css          # Design tokens (colours, spacing, type scale)
│   ├── base.css            # Reset + global defaults
│   ├── nav.css             # Fixed navigation bar
│   ├── hero.css            # Full-viewport hero section
│   ├── about.css           # Bio + stats
│   ├── research.css        # Publications list
│   ├── skills.css          # Technical skills grid
│   ├── timeline.css        # Experience / education
│   ├── awards.css          # Recognition
│   ├── contact.css         # Contact section + footer
│   └── responsive.css      # All breakpoints (imported last)
│
├── js/
│   ├── main.js             # Entry point — orchestrates all modules
│   ├── data.js             # ← Edit this to update site content
│   ├── render.js           # Pure DOM-builder functions (data → HTML)
│   ├── gego-canvas.js      # Animated neural manifold background
│   └── nav-scroll.js       # Nav active-state + scroll class
│
└── assets/
    ├── fonts/              # Self-hosted fonts (optional fallback)
    └── images/             # Profile photo, OG image, etc.
```

---

## Development

No build step required. Use any static file server:

```bash
# Python (built-in)
python -m http.server 8000

# Node (npx, no install needed)
npx serve .

# VS Code — install "Live Server" extension, click "Go Live"
```

Then open `http://localhost:8000`.

> **Why a server?** ES modules (`type="module"`) require HTTP — they
> won't load from a `file://` URL in most browsers.

---

## Updating content

All text content lives in **`js/data.js`**. No HTML or CSS changes needed
to update publications, timeline entries, awards, or contact links.

| What to update              | Where               |
|-----------------------------|---------------------|
| Name, bio, statement        | `PROFILE` in data.js |
| Publications                | `PAPERS` array      |
| Skills                      | `SKILLS` array      |
| Experience / education      | `TIMELINE` array    |
| Awards                      | `AWARDS` array      |
| Contact links               | `PROFILE.links`     |
| Colours / spacing           | `css/tokens.css`    |

---

## Deployment

### GitHub Pages

1. Push to a repo named `<username>.github.io`, **or**
2. Go to **Settings → Pages → Source: main branch / root**

### Custom domain

Add a `CNAME` file at the repo root:

```
julioesparza.com
```

Then point your DNS `A` records to GitHub Pages IPs, or add a `CNAME`
record pointing to `<username>.github.io`.

---

## Adding a section

1. Add data to `js/data.js`
2. Add a render function in `js/render.js`
3. Call it in `js/main.js`
4. Add a `<section>` mount point in `index.html`
5. Add component styles in a new `css/<section>.css`
6. Import it in `css/main.css`

---

## Design references

Visual language inspired by **Gego (Gertrud Goldsmith)** — Venezuelan-German
artist known for hanging wire sculptures (*Reticuláreas*) that form delicate
geometric networks and cast layered shadows. The canvas animation renders two
node clusters mirroring the CA1 deep/superficial layer distinction from the
thesis:

> *"Cell-type-specific manifold analysis discloses independent geometric
> transformations in the hippocampal spatial code"*
> — Esparza J. et al., **Neuron** 2025

---

## License

© Julio Esparza Ibáñez. All rights reserved.
