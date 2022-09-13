gsap.registerPlugin(ScrollTrigger);

const containers = document.querySelectorAll(".section-container");
const text_elem = document.querySelectorAll(".section-header");


for (let i = 0; i < text_elem.length; i++) {
  gsap.to(text_elem[i], {
    scrollTrigger: {
      trigger: containers[i+1],
      start: "top 90%",
      toggleActions: "play reset play reset"
    },
    filter: "blur(0)",
    duration: 0.6,
    display: "block",
    yoyo: "true"
  });
}

const content_div=document.querySelectorAll(".content-div")
const div_beaches=document.querySelectorAll(".div-beach")

gsap.to('.div-beach',{
  scrollTrigger:{
    trigger:'.div-beach',    
    markers:true,scrub:false,
    toggleActions: "play pause resume reset" 
  },scale:1,opacity:1,stagger:0.125,yoyo:'true'})