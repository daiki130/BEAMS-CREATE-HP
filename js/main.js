const SectionTopTitle = document.querySelector(".section-Top-title");
const tl = new TimelineMax();
const SectionTopLists = SectionTopTitle.querySelectorAll(".section-Top-title-list");
const SectionProductMain = document.querySelectorAll(".section-product-main");
const headLine = document.querySelector(".headline");


const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) { //SectionTopTitleが画面上に入ってきた時イベント
      SectionTopLists.forEach((SectionTopList, i) => {
        SectionTopList.classList.add(`boundAnimation${i}`);
      });
      tl.fromTo(SectionProductMain, 1, {x: "-120%"}, {x: "0%", ease: Power2.easeInOut}, "+=2")
        .to(SectionProductMain, 1, {opacity: "1", ease: Power2.easeInOut}, "-=2")
      observer.unobserve(entry.target); //監視の停止 entry.target = SectionTopTitleのこと
    }
  });
}
const options = {
  root: null,
  rootMargin: "0px 0px -500px 0px", //画面の内側、下から300px監視対象の範囲
  threshold: 1, //SectionTopTitleの下辺が500px内に入りきった時
};
const io = new IntersectionObserver(cb, options);
io.observe(SectionTopTitle);