# CLAUDE.md — Project context for Claude Code
# This file is read automatically at the start of every Claude Code session.

## Who this is for
Julio Esparza Ibáñez — computational neuroscientist and AI engineer.
Born 1997, Spanish, based in Madrid. Open to relocation.

## Goal of this project
Personal website to land roles at frontier AI/neurotech companies
(Google DeepMind, Anthropic, Neuralink). Must feel scientifically
credible and aesthetically distinctive — not a generic dev portfolio.

## Julio's background (key facts)
- PhD Cum Laude, UAM/CSIC (2021–2025). INPhINIT La Caixa Fellow (4% acceptance).
- MSc Distinction + Stella Bagrit Prize, Imperial College London (2020–2021).
- BSc Biomedical Engineering, UC3M (GPA 8.5) + year at UC Irvine (GPA 3.8).
- First-author paper in **Neuron 2025**: cell-type-specific manifold analysis of CA1.
- Co-first-author in **PLOS Computational Biology 2024**: Structure Index method.
- Currently: Data Scientist / AI Engineer at Deloitte España.
- Key invention: the **Structure Index (SI)** — a graph-based tool for
  quantifying variable organization in arbitrary-dimensional spaces.
- Research stay: Columbia University, Losonczy Lab (2023).

## Aesthetic direction
Inspired by **Gego (Gertrud Goldsmith)** — Venezuelan-German artist, known
for hanging wire sculptures (*Reticuláreas*): fine-line networks, delicate
node intersections, layered shadows, abundant negative space.

Translation to web:
- Background: near-white (#f5f4f2), not pure white — warm undertone
- Lines/nodes: near-black (rgba 26,26,26) at low opacity — no colour
- Contrast and geometry do the work, not colour
- Typograhy: Space Grotesk (display) + Inter Light (body)
- The hero canvas shows two node clusters = CA1 deep + superficial layers

## Architecture decisions (do not change without reason)
- **Zero dependencies, zero build step.** Vanilla ES modules only.
- **Data layer isolated in `js/data.js`** — all content lives there.
  To update a publication or award, only touch data.js.
- **Render functions in `js/render.js`** are pure (data → DOM element).
  No side effects, no DOM queries inside them.
- **`js/main.js`** is the only orchestrator — queries DOM, calls renders,
  boots canvas + nav scroll.
- **CSS: tokens first, components, responsive last.**
  `css/tokens.css` is the single source of truth for all design values.
  `css/responsive.css` contains ALL breakpoints — never scatter them.
- **`index.html` is a skeleton only.** No content in the HTML —
  everything is injected by JS. This keeps the data/view separation clean.

## Files to know
| File                        | Purpose                                      |
|-----------------------------|----------------------------------------------|
| `js/data.js`                | Edit this to update any site content         |
| `css/tokens.css`            | Edit this to change colours / spacing        |
| `js/gego-canvas.js`         | Hero animation — Gego-inspired node network  |
| `js/render.js`              | Pure DOM builders — one function per section |
| `js/nav-scroll.js`          | IntersectionObserver active-nav + scroll cls |
| `.github/workflows/deploy.yml` | Auto-deploy to GitHub Pages on push to main |

## How to run locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
# (ES modules require HTTP — file:// won't work)
```

## Things still TODO
- [ ] Add real email address in `js/data.js` → PROFILE.links.email
- [ ] Add real LinkedIn / GitHub / Scholar URLs in PROFILE.links
- [ ] Add profile photo to `assets/images/` and wire into hero
- [ ] Add Open Graph image (`assets/images/og.png`, 1200×630)
- [ ] Verify all paper DOIs are correct
- [ ] Add missing paper DOIs (currently `#` placeholders)
- [ ] Register domain and update CNAME
- [ ] Connect GitHub repo to GitHub Pages

## Tone / copy guidelines
- English, precise, no hype
- Let credentials speak — don't oversell
- Scientific specificity is a feature, not jargon to avoid
  (e.g. "CA1 sublayers", "neural manifolds", "Structure Index" are correct)
- Target reader: technical recruiter or research lead at a top AI lab
