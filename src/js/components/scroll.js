export const SCROLL = () => {
  document.addEventListener("DOMContentLoaded", (event) => {
    let windowWidth = window.innerWidth;
    if (windowWidth >= 1050) {
      gsap
        .timeline({
          ease: Linear.easeNone,
          scrollTrigger: {
            trigger: ".shoes-container",
            start: "top top", //Animation start at this point
            end: "bottom top", //Animation end at this point
            // markers: true,
            scrub: true, // アニメーションをスクロール位置にリンクさせる ※スクラバーのような動き(GreenSock公式サイト)
            pin: true,
          },
        })
        .from(".shoes-container", { opacity: 0 })
        .from(".shoes-Hcontainer", {
          x: innerWidth * 1,
          opacity: 0,
        })
        .from(".card1", {
          x: innerWidth * -1,
          opacity: 0,
        })
        .from(".card2", {
          x: innerWidth * 1,
          opacity: 0,
        })
        .from(".card3", {
          y: innerHeight * 1,
          opacity: 0,
        })
        .from(".card4", {
          x: innerWidth * -1,
          opacity: 0,
        })
        .from(".card5", {
          x: innerWidth * 1,
          opacity: 0,
        })
        .from(".card6", {
          y: innerHeight * 1,
          opacity: 0,
        });
    }
    if (windowWidth < 1050) {
      gsap
        .timeline({
          ease: Linear.easeNone,
          scrollTrigger: {
            trigger: ".shoes-container",
            start: "top center", //Animation start at this point
            end: "center bottom", //Animation end at this point
            // markers: true,
            scrub: true, // アニメーションをスクロール位置にリンクさせる ※スクラバーのような動き(GreenSock公式サイト)
            // pin: true,
          },
        })
        .from(".shoes-container", { opacity: 0 })
        .from(".shoes-Hcontainer", {
          x: innerWidth * 1,
          opacity: 0,
        })
        .from(".card1", {
          x: innerWidth * -1,
          opacity: 0,
        })
        .from(".card2", {
          x: innerWidth * 1,
          opacity: 0,
        });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".shoes-container",
            start: "600px center", //Animation start at this point
            end: "bottom bottom", //Animation end at this point
            // markers: true,
            scrub: true, // アニメーションをスクロール位置にリンクさせる ※スクラバーのような動き(GreenSock公式サイト)
            // pin: true
          },
        })
        .from(".card3", {
          y: innerHeight * 1,
          opacity: 0,
        })
        .from(".card4", {
          x: innerWidth * -1,
          opacity: 0,
        })
        .from(".card5", {
          x: innerWidth * 1,
          opacity: 0,
        })
        .from(".card6", {
          y: innerHeight * 1,
          opacity: 0,
        });
    }
  });
};
