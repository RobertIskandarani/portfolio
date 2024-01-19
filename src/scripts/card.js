const $ = (selector) => document.querySelector(selector);
const cardContainer = $("#card-container");
const ticket = $("#ticket");

const { width, height } = cardContainer.getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

cardContainer.addEventListener("mousemove", (event) => {
  const { offsetX, offsetY } = event;

  const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
  const rotationY = ((offsetY - halfHeight) / halfHeight) * 10;

  ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});

cardContainer.addEventListener("mouseleave", () => {
  ticket.style.transform = "rotateX(0) rotateY(0)";
});
