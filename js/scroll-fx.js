/**
 * scroll-fx.js — Scroll-driven scale + fade for the Gego background canvas.
 *
 * Effect: over the first 1.5 viewport-heights of scroll, the canvas grows
 * from scale(1) to scale(1.5) and fades from opacity 1 to opacity 0.35,
 * then holds. This gives the impression the network expands into the
 * background as the reader moves into the content sections.
 *
 * Respects prefers-reduced-motion: no transform applied, opacity unchanged.
 *
 * @param {HTMLCanvasElement} canvas
 */
export function initScrollFx(canvas) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const MAX_PROGRESS  = 1;        // clamped 0 → 1
  const SCROLL_RANGE  = window.innerHeight * 1.5;
  const SCALE_START   = 1.0;
  const SCALE_END     = 1.5;
  const OPACITY_START = 1.0;
  const OPACITY_END   = 0.35;

  let rafScheduled = false;

  const update = () => {
    rafScheduled = false;
    const progress = Math.min(window.scrollY / SCROLL_RANGE, MAX_PROGRESS);
    const scale    = SCALE_START   + progress * (SCALE_END   - SCALE_START);
    const opacity  = OPACITY_START + progress * (OPACITY_END - OPACITY_START);

    canvas.style.transform = `scale(${scale})`;
    canvas.style.opacity   = opacity;
  };

  const onScroll = () => {
    if (!rafScheduled) {
      rafScheduled = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  update(); // apply initial state
}
