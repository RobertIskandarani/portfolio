const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const init = () => {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        const delay = Number(target.getAttribute("data-reveal-delay") ?? 0);
        if (delay > 0) {
          window.setTimeout(() => target.classList.add("is-visible"), delay);
        } else {
          target.classList.add("is-visible");
        }
        obs.unobserve(target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15,
    }
  );

  targets.forEach((el) => observer.observe(el));
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
