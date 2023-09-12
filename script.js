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
  start: "top 40%",
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
