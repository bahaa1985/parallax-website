gsap.registerPlugin(ScrollTrigger);

const containers = document.querySelectorAll(".div-container");

const text_elem = document.querySelectorAll(".text");

for (let i = 0; i < text_elem.length; i++) {
  gsap.to(text_elem[i], {
    scrollTrigger: {
      trigger: containers[i],
      start: "top 20%",
      toggleActions: "play reset play reset"
    },
    filter: "blur(0)",
    duration: 0.6,
    display: "block",
    yoyo: "true"
  });
}
