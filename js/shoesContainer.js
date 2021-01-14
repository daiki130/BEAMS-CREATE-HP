// let gridColumns = document.querySelectorAll(".grid-column");

// // gsap.registerPlugin(ScrollTrigger);

// gsap.to(".grid-column", {
//   scrollTrigger: {
//     trigger: ".grid-column",
//     start: ".card-list-container",
//     toggleActions: "play pause resume reset", //スクロールを戻したらもう一度開始させる
//     makers: true
//   },
//   color: "darksalmon",
//   duration: 3
// });

const cards = document.querySelectorAll(".card");
const Cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

function AnimateIn(e) {
  Cursor.style.display = "none";
  body.style.cursor = "pointer";
  let cardHeaderTitle = e.querySelector(".card-header-Title");
  let shoesImg = e.querySelector(".shoes-img");
  let sizesButtons = e.querySelector(".sizes");
  let purchaseButton = e.querySelector(".purchaseButton");
  //Popout
  cardHeaderTitle.style.transform = "translateZ(50px)";
  shoesImg.style.transform = "translate3D(0px, -25px, 40px) rotateZ(-45deg)";
  sizesButtons.style.transform = "translateZ(30px)";
  purchaseButton.style.transform = "translateZ(20px)";
} 
function AnimateOut(e) {
  Cursor.style.display = "block";
  body.style.cursor = "none";
  let cardHeaderTitle = e.querySelector(".card-header-Title");
  let shoesImg = e.querySelector(".shoes-img");
  let sizesButtons = e.querySelector(".sizes");
  let purchaseButton = e.querySelector(".purchaseButton");
  //Popback
  cardHeaderTitle.style.transform = "translateZ(0px)";
  shoesImg.style.transform = "translateZ(0px) rotateZ(0deg)";
  sizesButtons.style.transform = "translateZ(0px)";
  purchaseButton.style.transform = "translateZ(0px)";
} 

cards.forEach(card => {
  //Animate In 
  card.addEventListener("mouseenter", (e) => {
    AnimateIn(card);
  });
  //Animate Out
  card.addEventListener("mouseleave", (e) => {
    AnimateOut(card);
  });
  //Animate In smartphone
  card.addEventListener("ontouchmove", (e) => {
    AnimateIn(card);
  });
  //Animate Out smartphone
  card.addEventListener("ontouchend", (e) => {
    AnimateOut(card);
  });
});

// sneakerのsizeをクリックするとボタンの色が変化するイベント
const sizesButtons = document.querySelectorAll(".sizesButton");
sizesButtons.forEach(sizesButton => {
  sizesButton.addEventListener("click", () => {
    sizesButton.classList.toggle("active");
  });
});

const logo = document.querySelector("#logo");
const shoesContainer = document.querySelector(".shoes-container");
const gridColumns = document.querySelectorAll(".grid-column");

const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) { //SectionTopTitleが画面上に入ってきた時イベント
      gridColumns.forEach((gridColumn, i) => {
        gridColumn.classList.toggle(".darksalmon");
      });
      // tl.fromTo(SectionProductMain, 1, {x: "-120%", opacity: 0}, {x: "0%", opacity: 1, ease: Power2.easeInOut}, "+=2")
      //   .fromTo(ProductImgs[0], 1, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
      //   .fromTo(SectionProductImgs, 1, {x: "100%", opacity: 0}, {x: "0%", opacity: 1, ease: Power2.easeInOut}, "-=1")
      //   .fromTo(ProductImgs[1], 1.5, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
      //   .to(ProductImgs[0], 1.5, {opacity: 0, ease: Power2.easeInOut}, "-=1.5")
      //   .fromTo(ProductImgs[2], 1.5, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
      //   .to(ProductImgs[1], 1.5, {opacity: 0, ease: Power2.easeInOut}, "-=1.5")
      //   .fromTo(ProductImgs[3], 1.5, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
      //   .to(ProductImgs[2], 1.5, {opacity: 0, ease: Power2.easeInOut}, "-=1.5")
      //   .fromTo(ProductImgs[4], 1.5, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
      //   .to(ProductImgs[3], 1.5, {opacity: 0, ease: Power2.easeInOut}, "-=1.5")
      observer.unobserve(entry.target); //監視の停止 entry.target = SectionTopTitleのこと
    }
  });
}
const options = {
  root: shoesContainer, //交差判定のベース）となる要素を指定
  // rootMargin: "0px 0px 0px 0px", //画面の内側、下から300px監視対象の範囲
  threshold: 1, //SectionTopTitleの下辺が500px内に入りきった時
};
const io = new IntersectionObserver(cb, options);
io.observe(logo); //監視対象のDOMを登録