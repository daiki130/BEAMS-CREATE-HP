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

const cb = function (el, isIntersecting) {
  if(isIntersecting) {
    animate(el);
  }
}

function animate(el) {
  el.classList.toggle("inview");
}

class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    this.cb = cb;
    const defaltOptions = {
      root: null, //交差判定のベースとなる要素を指定
      rootMargin: "0px", //画面の内側、下から300px監視対象の範囲
      threshold: 0, //SectionTopTitleの下辺が500px内に入りきった時
    };
    this.options = Object.assign(defaltOptions, options)//defaltOptionsとoptionsの設定をマージ　optionsで渡された設定が優先される
    this._init();
  }
  _init() {
    const callback = function(entries, observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting) { //監視対象のDOMが画面上に入ってきた時イベント
          this.cb(entry.target, true);
          observer.unobserve(entry.target); //監視の停止 entry.target = SectionTopTitleのこと
        } else {
          this.cb(entry.target, false);
        }
      });
    }
    const io = new IntersectionObserver(callback.bind(this), this.options);
    this.els.forEach(el => io.observe(el)); //監視対象のDOMを登録
  }
}

new ScrollObserver(".card", cb);