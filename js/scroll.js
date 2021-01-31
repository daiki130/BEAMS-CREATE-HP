document.addEventListener('DOMContentLoaded', (event) => {
  let windowWidth = window.innerWidth;
  if (windowWidth >= 1050) {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".shoes-container",
        start: "top top", //Animation start at this point
        end: "bottom top", //Animation end at this point
        markers: true,
        scrub: true, // アニメーションをスクロール位置にリンクさせる ※スクラバーのような動き(GreenSock公式サイト)
        pin: true 
      }
    })
    .from(".shoes-container", { opacity : 0 })
    .from(".shoes-Hcontainer", { 
      x : innerWidth * 1,
      opacity : 0
    })
    .from(".card1", {
      x : innerWidth * -1,
      opacity : 0
    })
    .from(".card2", {
      x : innerWidth * 1,
      opacity : 0 
    })
    .from(".card3", { 
      y : innerHeight * 1,
      opacity : 0 
    })
    .from(".card4", { 
      x : innerWidth * -1,
      opacity : 0 
    })
    .from(".card5", { 
      x : innerWidth * 1,
      opacity : 0  
    })
    .from(".card6", { 
      y : innerHeight * 1,
      opacity : 0  
    })  
  }
  if (windowWidth <= 1049) {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".shoes-container",
        start: "top top", //Animation start at this point
        end: "center center", //Animation end at this point
        markers: true,
        scrub: true, // アニメーションをスクロール位置にリンクさせる ※スクラバーのような動き(GreenSock公式サイト)
        pin: true 
      }
    })
    .from(".shoes-container", { opacity : 0 })
    .from(".shoes-Hcontainer", { 
      x : innerWidth * 1,
      opacity : 0
    })
    .from(".card1", {
      x : innerWidth * -1,
      opacity : 0
    })
    .from(".card2", {
      x : innerWidth * 1,
      opacity : 0 
    })
    gsap.timeline({
      scrollTrigger: {
        trigger: ".shoes-container",
        start: "700px center", //Animation start at this point
        end: "bottom bottom", //Animation end at this point
        markers: true,
        scrub: true, // アニメーションをスクロール位置にリンクさせる ※スクラバーのような動き(GreenSock公式サイト)
        pin: true 
      }
    })
    .from(".card3", { 
      y : innerHeight * 1,
      opacity : 0 
    })
    .from(".card4", { 
      x : innerWidth * -1,
      opacity : 0 
    })
    .from(".card5", { 
      x : innerWidth * 1,
      opacity : 0  
    })
    .from(".card6", { 
      y : innerHeight * 1,
      opacity : 0  
    })
  } 
});
// const cb = function (el, isIntersecting) {
//   if(isIntersecting) {
//     animate(el);
//   }
// }

// function animate(el) {
//   el.classList.toggle("inview");
// }

// class ScrollObserver {
//   constructor(els, cb, options) {
//     this.els = document.querySelectorAll(els);
//     this.cb = cb;
//     const defaltOptions = {
//       root: null, //交差判定のベースとなる要素を指定
//       rootMargin: "0px", //画面の内側、下から300px監視対象の範囲
//       threshold: 0, //SectionTopTitleの下辺が500px内に入りきった時
//       once: true //監視停止の判定に用いる
//     };
//     this.options = Object.assign(defaltOptions, options)//defaltOptionsとoptionsの設定をマージ　optionsで渡された設定が優先される
//     this.once = this.options.once;
//     this._init();
//   }
//   _init() {
//     const callback = function(entries, observer) {
//       entries.forEach(entry => {
//         if(entry.isIntersecting) { //監視対象のDOMが画面上に入ってきた時イベント
//           this.cb(entry.target, true);
//           if(this.once) {
//             observer.unobserve(entry.target); //監視の停止 entry.target = SectionTopTitleのこと
//           }
//         } else {
//           this.cb(entry.target, false);
//         }
//       });
//     }
//     this.io = new IntersectionObserver(callback.bind(this), this.options);
//     this.io.POLL_INTERVAL = 100;
//     this.els.forEach(el => this.io.observe(el)); //監視対象のDOMを登録
//   }
//   destroy() {
//     this.io.disconnect();
//   }
// }

// const so = new ScrollObserver(".card", cb);