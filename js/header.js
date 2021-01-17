document.addEventListener('DOMContentLoaded', (event) => {
  let windowHight = window.innerHeight;
  const header = document.querySelector(".header");
  const bannerSection = document.querySelector(".bannerSection");
  header.style.height = windowHight + "px";
  bannerSection.style.height = windowHight + "px";

  const slider = document.querySelector(".slider");
  const logo = document.querySelector("#logo");
  const body = document.querySelector("body");
  const SectionContainerVideo = document.querySelector(".section-container-video");
  
  let windowWidth = document.body.clientWidth;
  if(windowWidth >= 500) {
    // const header = document.querySelector(".header");
    class Menu {
      constructor() {
        this.nav = document.createElement("nav");
        // pタグ設定
        this.p1 = document.createElement("p");
        this.p1.className = "grid-column";
        this.p2 = document.createElement("p");
        this.p2.className = "grid-column";
        this.p3 = document.createElement("p");
        this.p3.className = "grid-column";
        this.p4 = document.createElement("p");
        this.p4.className = "grid-column";
        this.p1.textContent = "FEATURES";
        this.p2.textContent = "NEWS";
        this.p3.textContent = "RANKING";
        this.p4.textContent = "PRE ORDER";
        this.Ps = [this.p1, this.p2, this.p3, this.p4];
        // sectionタグ追加
        this.section = document.createElement("section");
        this.section.className = "hero-section";
        // divタグ設定
        this.div = document.createElement("div");
        this.div.className = "hero";
        // imgタグ設定
        this.heroImg = document.createElement("img");
        this.heroImg.className = "heroImg";
        this.heroImg.src = "./img/brian-lundquist-APbQJD8wJLc-unsplash.jpg"; // 画像パス
        // h1タグ設定
        this.h1 = document.createElement("h1");
        this.h1.className = "headline";
        this.h1.textContent = "BEAMS";
        // 要素の追加
        this._appendChild();
      }
      _appendChild() {
        // this.nav.appendChild(this.logoImg);
        this.nav.appendChild(this.p1);
        this.nav.appendChild(this.p2);
        this.nav.appendChild(this.p3);
        this.nav.appendChild(this.p4);
        this.div.appendChild(this.heroImg);
        this.div.appendChild(this.h1);
        this.section.appendChild(this.div);
        header.appendChild(this.nav);
        header.appendChild(this.section);
      }
    }
    const headerHeaading = new Menu();
    const tl = new TimelineMax();

    tl.fromTo(headerHeaading.div, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
      .fromTo(headerHeaading.div, 1.3, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
      .fromTo(slider,1.3, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
      .fromTo(logo, 0.6, {opacity: "0", x: 30}, {opacity: "1", x: 0, ease: Power2.easeInOut}, "-=0.5")
      .fromTo(headerHeaading.h1, 0.1, {opacity: "0", x: 30}, {opacity: "1", x: 0, ease: Power2.easeInOut}, "-=0.5")
      headerHeaading.Ps.forEach(P => {
        tl.fromTo(P, 0.5, {opacity: "0", x: 30}, {opacity: "1", x: 0, ease: Power2.easeInOut}, "-=0.5")
      });
  }

  let ptionsObject = {
    top: window.innerHeight,  //垂直方向
    left: 0, //水平方向
    behavior: 'smooth' //目的の位置までスムーズスクロールする
  };

  // スクロールイベント
  // const tm = TweenMax.to(body, 6, {
  //   delay: -2,
  //   ease: Power1.easeOut,
  //   onComplete: function() {
  //     scrollBy(ptionsObject)
  //   },
  // })
  // TweenMax.to(body, 6, {
  //   delay: -2,
  //   ease: Power1.easeOut,
  //   onComplete: function() {
  //     scrollBy(ptionsObject)
  //   },
  // })

  // section-containerの背景動画スピード設定
  function moveSpeed() {
    SectionContainerVideo.playbackRate = 0.5;
  }
  moveSpeed();
});