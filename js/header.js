document.addEventListener('DOMContentLoaded', (event) => {
  const hero = document.querySelector(".hero");
  const slider = document.querySelector(".slider");
  const logo = document.querySelector("#logo");
  const hamburger = document.querySelector(".hamburger");
  const headline = document.querySelector(".headline");
  const body = document.querySelector("body");

  const tl = new TimelineMax();

  tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
    .fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
    .fromTo(slider,1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
    .fromTo(logo, 0.5, {opacity: "0", x: 30}, {opacity: "1", x: 0, ease: Power2.easeInOut}, "-=0.5")
    .fromTo(hamburger, 0.5, {opacity: "0", x: 30}, {opacity: "1", x: 0, ease: Power2.easeInOut}, "-=0.5")
    .fromTo(headline, 0.5, {opacity: "0", x: 30}, {opacity: "1", x: 0, ease: Power2.easeInOut}, "-=0.5")

  let ptionsObject = {
    top: window.innerHeight,  //垂直方向
    left: 0, //水平方向
    behavior: 'smooth' //目的の位置までスムーズスクロールする
  };

  // スクロールイベント
  const tm = TweenMax.to(body, 6, {
    delay: -3,
    ease: Power1.easeOut,
    onComplete: function() {
      scrollBy(ptionsObject)
    },
  })
});