/**
 * nav-scroll.js — Lightweight nav behaviour.
 *
 * Features:
 *   - Adds `is-scrolled` class to nav once page scrolls past threshold
 *     (used for optional shadow / background tweak in CSS)
 *   - Highlights the active section link using IntersectionObserver
 *     (no scroll event polling — performant)
 */

const SCROLL_THRESHOLD = 40; // px before nav changes state
const ACTIVE_CLASS     = 'is-active';
const SCROLLED_CLASS   = 'is-scrolled';

/**
 * @param {HTMLElement} nav
 */
export function initNavScroll(nav) {
  // ── Scrolled state ──────────────────────────────────────
  const onScroll = () => {
    nav.classList.toggle(SCROLLED_CLASS, window.scrollY > SCROLL_THRESHOLD);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on init

  // ── Active section highlighting ─────────────────────────
  const links = /** @type {NodeListOf<HTMLAnchorElement>} */ (
    nav.querySelectorAll('.nav__links a[href^="#"]')
  );

  if (!links.length || !('IntersectionObserver' in window)) return;

  const sectionIds = Array.from(links).map(a => a.getAttribute('href').slice(1));
  const sections   = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const linkMap = new Map(
    Array.from(links).map(a => [a.getAttribute('href').slice(1), a])
  );

  let currentId = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (currentId) linkMap.get(currentId)?.classList.remove(ACTIVE_CLASS);
          currentId = entry.target.id;
          linkMap.get(currentId)?.classList.add(ACTIVE_CLASS);
        }
      });
    },
    { rootMargin: '-30% 0px -60% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}
