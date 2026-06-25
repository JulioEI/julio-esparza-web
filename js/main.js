/**
 * main.js — Application entry point.
 *
 * Responsibilities:
 *   1. Query DOM mount points
 *   2. Hydrate each section from data.js via render.js
 *   3. Initialise canvas animation
 *   4. Boot lightweight UI behaviours (nav scroll, etc.)
 *
 * Nothing here knows about CSS class names or data shape —
 * those concerns live in render.js and data.js respectively.
 */

import { PROFILE, PAPERS, SKILLS, TIMELINE, AWARDS } from './data.js';
import {
  renderHero,
  renderAbout,
  renderPaper,
  renderSkills,
  renderTimelineItem,
  renderAward,
} from './render.js';
import { initGegoCanvas } from './gego-canvas.js';
import { initNavScroll }  from './nav-scroll.js';
import { initScrollFx }   from './scroll-fx.js';

/** Safely query a required element; throws clearly if missing. */
function $(selector, context = document) {
  const el = context.querySelector(selector);
  if (!el) throw new Error(`mount point not found: "${selector}"`);
  return el;
}

/** Append a DocumentFragment or Element into a container. */
function mount(container, content) {
  container.appendChild(content);
}

function hydrateSections() {
  // ── Hero ──────────────────────────────────────────────────
  mount($('#hero-content'),   renderHero(PROFILE));

  // ── About ─────────────────────────────────────────────────
  mount($('#about-content'),  renderAbout(PROFILE.about));

  // ── Research ──────────────────────────────────────────────
  const papersList = $('#papers-list');
  PAPERS.forEach(paper => papersList.appendChild(renderPaper(paper)));

  // ── Skills ────────────────────────────────────────────────
  mount($('#skills-content'), renderSkills(SKILLS));

  // ── Timeline ──────────────────────────────────────────────
  const timelineList = $('#timeline-list');
  TIMELINE.forEach(item => timelineList.appendChild(renderTimelineItem(item)));

  // ── Awards ────────────────────────────────────────────────
  const awardsGrid = $('#awards-grid');
  AWARDS.forEach(award => awardsGrid.appendChild(renderAward(award)));

  // ── Contact ───────────────────────────────────────────────
  $('#contact-lead').textContent = PROFILE.contactText;
  $('#contact-sub').textContent  = PROFILE.location;

  const contactLinks = $('#contact-links');
  const linkDefs = [
    { text: 'Email',         href: PROFILE.links.email   },
    { text: 'LinkedIn',      href: PROFILE.links.linkedin },
    { text: 'GitHub',        href: PROFILE.links.github   },
    { text: 'Google Scholar',href: PROFILE.links.scholar  },
  ];
  linkDefs.forEach(({ text, href }) => {
    const a = document.createElement('a');
    a.className   = 'contact__link';
    a.href        = href;
    a.textContent = text;
    if (!href.startsWith('mailto')) {
      a.target = '_blank';
      a.rel    = 'noopener';
    }
    contactLinks.appendChild(a);
  });

  // ── Footer ────────────────────────────────────────────────
  const year = new Date().getFullYear();
  $('#footer-credit').textContent = `${PROFILE.name} · ${year}`;
}

function init() {
  hydrateSections();
  const canvas = $('#gego-canvas');
  initGegoCanvas(canvas);
  initScrollFx(canvas);
  initNavScroll($('.site-nav'));
}

// Run after DOM is parsed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
