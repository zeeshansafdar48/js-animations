const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1,0.5)", duration: 1.5 }
);
tl.fromTo(
  ".cookie",
  { x: -20, rotation: "-25deg", opacity: 0 },
  { x: 0, rotation: "0deg", opacity: 1 },
  "<50%"
);
tl.fromTo(".text", { x: 20, opacity: 0 }, { x: 0, opacity: 1 }, "<");
tl.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-20deg", repeat: -1, yoyo: true }
);
tl.fromTo("#crumbs", { y: 0 }, { y: -10, repeat: -1, yoyo: true }, "<");

const button = document.querySelector(".cookie-container button");

button.addEventListener("click", () => {
  gsap.fromTo(".cookie-container", { y: 0, opacity: 1 }, { y: 200, opacity: 0, duration: 0.75 });
});
