/**
 * scroll-fx.js — Scroll-driven progress callback for canvas effects.
 *
 * Fires onProgress(p) where p is 0–1 over the first 1.5 viewport-heights.
 * The caller decides what to do with the value (scale, opacity, etc.).
 *
 * Disabled under prefers-reduced-motion.
 *
 * @param {(progress: number) => void} onProgress
 */
export function initScrollFx(onProgress) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const SCROLL_RANGE = window.innerHeight * 1.5;
  let rafScheduled = false;

  const update = () => {
    rafScheduled = false;
    onProgress(Math.min(window.scrollY / SCROLL_RANGE, 1));
  };

  const onScroll = () => {
    if (!rafScheduled) {
      rafScheduled = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  update(); // apply initial state (progress = 0)
}
