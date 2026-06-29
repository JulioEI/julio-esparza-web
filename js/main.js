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

import { PROFILE, PAPERS, SKILLS, TIMELINE, AWARDS, TALKS, PROJECTS } from './data.js';
import {
  renderHero,
  renderAbout,
  renderPaper,
  renderSkills,
  renderTimelineItem,
  renderAward,
  renderTalk,
  renderProjectCard,
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

  // ── Projects ──────────────────────────────────────────────
  const projectsGrid = $('#projects-grid');
  PROJECTS.forEach(project => projectsGrid.appendChild(renderProjectCard(project)));

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
  initProjectOverlay();
}

function initProjectOverlay() {
  const overlay  = $('#project-overlay');
  const closeBtn = overlay.querySelector('.project-overlay__close');

  const els = {
    category: overlay.querySelector('.project-overlay__category'),
    year:     overlay.querySelector('.project-overlay__year'),
    title:    overlay.querySelector('.project-overlay__title'),
    tagline:  overlay.querySelector('.project-overlay__tagline'),
    body:     overlay.querySelector('.project-overlay__body'),
    tags:     overlay.querySelector('.project-overlay__tags'),
    links:    overlay.querySelector('.project-overlay__links'),
  };

  function open(project) {
    els.category.textContent = project.category;
    els.year.textContent     = project.year;
    els.title.textContent    = project.title;
    els.tagline.textContent  = project.tagline;

    els.body.innerHTML = '';
    project.body.forEach(item => {
      if (typeof item === 'string') {
        const p = document.createElement('p');
        p.textContent = item;
        els.body.appendChild(p);
      } else {
        const h = document.createElement('h3');
        h.textContent = item.heading;
        const p = document.createElement('p');
        p.textContent = item.text;
        els.body.append(h, p);
      }
    });

    els.tags.innerHTML = '';
    (project.tags || []).forEach(tag => {
      const span = document.createElement('span');
      span.className   = 'project-overlay__tag';
      span.textContent = tag;
      els.tags.appendChild(span);
    });

    els.links.innerHTML = '';
    (project.links || []).forEach(({ label, href }) => {
      const a = document.createElement('a');
      a.className   = 'project-overlay__link';
      a.href        = href;
      a.textContent = label;
      a.target      = '_blank';
      a.rel         = 'noopener';
      els.links.appendChild(a);
    });

    overlay.classList.add('is-open');
    overlay.scrollTop            = 0;
    document.body.style.overflow = 'hidden';
    history.pushState(null, '', `#project-${project.id}`);
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    history.pushState(null, '', location.pathname + location.search);
  }

  document.querySelector('.projects-grid').addEventListener('click', e => {
    const card = e.target.closest('.project-card');
    if (!card) return;
    const project = PROJECTS.find(p => p.id === card.dataset.id);
    if (project) open(project);
  });

  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
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
