const $ = (selector) => document.querySelector(selector);

const isFinePointer = window.matchMedia(
  "(hover: hover) and (pointer: fine)"
).matches;
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const cardContainer = $("#card-container");
const ticket = $("#ticket");
const glare = $("#ticket-glare");

if (cardContainer && ticket && isFinePointer && !prefersReducedMotion) {
  const MAX_TILT = 8;
  let raf = 0;
  let leaveRaf = 0;

  const apply = (event) => {
    const rect = cardContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const rotationY = (px - 0.5) * 2 * MAX_TILT;
    const rotationX = -(py - 0.5) * 2 * MAX_TILT;

    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      ticket.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
      ticket.style.setProperty("--mx", `${px * 100}%`);
      ticket.style.setProperty("--my", `${py * 100}%`);
    });
  };

  cardContainer.addEventListener("mousemove", apply);

  cardContainer.addEventListener("mouseleave", () => {
    if (raf) cancelAnimationFrame(raf);
    if (leaveRaf) cancelAnimationFrame(leaveRaf);
    leaveRaf = requestAnimationFrame(() => {
      ticket.style.transition =
        "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
      ticket.style.transform = "rotateX(0deg) rotateY(0deg)";
      window.setTimeout(() => {
        ticket.style.transition = "";
      }, 600);
    });
  });
}
