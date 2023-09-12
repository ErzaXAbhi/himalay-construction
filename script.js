const src = [
  "images/h-solid.svg",
  "images/industry-solid (1).svg",
  "images/building-solid.svg",
  "images/pen-ruler-solid.svg",
  "images/building-columns-solid.svg",
];

ScrollTrigger.create({
  trigger: ".sections",
  pin: ".tooltip",
  start: "top 70%",
  end: "bottom 55%",
});

const sections = document.querySelectorAll(".section");

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      gsap.set(".tooltip-img", {
        attr: { src: src[index] },
      });
    },
    onEnterBack: () => {
      gsap.set(".tooltip-img", {
        attr: { src: src[index] },
      });
    },
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".content h2", {
  duration: 1,
  autoAlpha: 0,
  y: 100,
  scale: 0.5,
  scrollTrigger: {
    trigger: ".content h2",
    start: "top 60%",
    end: "bottom 40%",
    scrub: true,
  },
});
