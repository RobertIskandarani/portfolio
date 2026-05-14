const isFinePointer = window.matchMedia(
  "(hover: hover) and (pointer: fine)"
).matches;
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (isFinePointer && !prefersReducedMotion) {
  const MAX_TRANSLATE = 8;
  const STRENGTH = 0.35;

  const attach = (el) => {
    if (el.dataset.magneticBound === "1") return;
    el.dataset.magneticBound = "1";

    let raf = 0;
    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (event.clientX - cx) * STRENGTH;
      const dy = (event.clientY - cy) * STRENGTH;
      const x = Math.max(-MAX_TRANSLATE, Math.min(MAX_TRANSLATE, dx));
      const y = Math.max(-MAX_TRANSLATE, Math.min(MAX_TRANSLATE, dy));
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = "";
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
  };

  const init = () => {
    document.querySelectorAll("[data-magnetic]").forEach(attach);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}
