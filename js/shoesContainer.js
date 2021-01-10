let gridColumns = document.querySelectorAll(".grid-column");

// gsap.registerPlugin(ScrollTrigger);

gsap.to(".grid-column", {
  scrollTrigger: {
    trigger: ".grid-column",
    start: ".shoes-container 300px",
    toggleActions: "play pause resume reset", //スクロールを戻したらもう一度開始させる
    makers: true
  },
  color: "darksalmon",
  duration: 3
});
