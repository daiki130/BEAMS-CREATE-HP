(() => {
  const els = document.querySelectorAll(".grid-column");
  els.forEach(el => {
    gsap.to(el, {
      color: "salmon",
      scrollTrigger: {
        trigger: ".section-containerFramework",
        start: "top 70px",
        end: "bottom 70px",
        markers: true,
        toggleActions: "play pause resume reset"
      }
    })
    gsap.to(el, {
      color: "#FFC107",
      scrollTrigger: {
        trigger: ".shoes-container",
        start: "top 70px",
        end: "bottom 70px",
        markers: true,
        toggleActions: "play pause resume reset"
      }
    })
  });

})()