export const Header = () => {
  document.addEventListener("DOMContentLoaded", (event) => {
    let windowHight = window.innerHeight;
    const header = document.querySelector(".header");
    header.style.height = windowHight + "px";
    const slider = document.querySelector(".slider");
    const logo = document.querySelector("#logo");
    const heroSection = document.querySelector(".hero-section");
    const hero = document.querySelector(".hero");
    const headline = document.querySelector(".headline");
    const gridColumns = document.querySelectorAll(".grid-column");
    const mobileMenuBtn = document.querySelector(".mobile-menu__btn");

    const tl = new TimelineMax();
    sliderAnimation();

    function sliderAnimation() {
      tl.fromTo(
        hero,
        1,
        { height: "0%" },
        { height: "80%", ease: Power2.easeInOut }
      )
        .fromTo(
          hero,
          1.3,
          { width: "100%" },
          { width: "80%", ease: Power2.easeInOut }
        )
        .fromTo(
          slider,
          1.3,
          { x: "-100%" },
          { x: "0%", ease: Power2.easeInOut },
          "-=1.2"
        )
        .fromTo(
          logo,
          0.6,
          { opacity: "0", x: 30 },
          { opacity: "1", x: 0, ease: Power2.easeInOut },
          "-=0.5"
        )
        .fromTo(
          headline,
          0.5,
          { opacity: "0", x: 30 },
          { opacity: "1", x: 0, ease: Power2.easeInOut },
          "-=0.5"
        )
        .fromTo(
          mobileMenuBtn,
          0.5,
          { opacity: "0", x: 30 },
          { opacity: "1", x: 0, ease: Power2.easeInOut },
          "-=0.5"
        );
      gridColumns.forEach((gridColumn) => {
        tl.fromTo(
          gridColumn,
          0.5,
          { opacity: "0", x: 30 },
          { opacity: "1", x: 0, ease: Power2.easeInOut },
          "-=0.5"
        );
      });
      tl.to(
        heroSection,
        0.5,
        {
          height: "100vh",
          top: "0%",
          ease: Power2.easeInOut,
        },
        "+=0.5"
      ).to(
        hero,
        0.5,
        { height: "100%", width: "100%", ease: Power2.easeInOut },
        "-=0.5"
      );
    }

    const SectionContainerVideo = document.querySelector(
      ".section-container-video"
    );

    // section-containerの背景動画スピード設定
    function moveSpeed() {
      SectionContainerVideo.playbackRate = 0.5;
    }
    moveSpeed();
  });
};
