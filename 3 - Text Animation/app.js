const tl = gsap.timeline({ defaults: { duration: 0.75 } });

tl.fromTo(
  ".hero-image",
  { scale: 1.3 },
  { scale: 1, duration: 2, ease: "elastic.out(1.2,1)", borderRadius: "1rem" }
);

tl.fromTo(".cta1", { x: 100, opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta3", { x: -100, opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta2", { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta4", { x: 100, opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta6", { x: -100, opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta5", { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "<20%");

tl.fromTo(".cta-btn", { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "<20%");

const logoDom = document.querySelector(".logo");
const logoText = logoDom.textContent;

logoDom.textContent = "";

const letters = logoText.split("");

letters.forEach((letter) => {
  logoDom.innerHTML += `<span class="letter">${letter}</span>`;
});

gsap.fromTo(
  ".letter",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.5, stagger: 0.1, ease: "elastic.out(1,1)" }
);
