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

import { PROFILE, PAPERS, SKILLS, TIMELINE, AWARDS, TALKS } from './data.js';
import {
  renderHero,
  renderAbout,
  renderPaper,
  renderSkills,
  renderTimelineItem,
  renderAward,
  renderTalk,
} from './render.js';
import { initGegoCanvas, setScrollProgress } from './gego-canvas.js';
import { initNavScroll }                     from './nav-scroll.js';
import { initScrollFx }                      from './scroll-fx.js';

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

  // ── Talks ─────────────────────────────────────────────────
  const talksList = $('#talks-list');
  TALKS.forEach(talk => talksList.appendChild(renderTalk(talk)));

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
  initScrollFx((progress) => {
    setScrollProgress(progress);
    canvas.style.opacity = String(Math.max(0.04, 0.35 - progress * 0.31));
    canvas.style.filter  = `blur(${(progress * 10).toFixed(1)}px)`;
  });
  initNavScroll($('.site-nav'));
  initTabs($('#awards'));
}

function initTabs(section) {
  const tabs   = section.querySelectorAll('[role="tab"]');
  const panels = section.querySelectorAll('.tab-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t   => { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => p.classList.add('tab-panel--hidden'));
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      section.querySelector('#' + tab.dataset.panel).classList.remove('tab-panel--hidden');
    });
  });
}

// Run after DOM is parsed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
