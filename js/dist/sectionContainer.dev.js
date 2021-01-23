"use strict";

var SectionTopTitle = document.querySelector(".section-Top-title");
var tl = new TimelineMax();
var SectionTopLists = SectionTopTitle.querySelectorAll(".section-Top-title-list");
var SectionProductMain = document.querySelector(".section-product-main");
var SectionProductImgs = document.querySelector(".section-product-imgs");
var ProductImgs = SectionProductImgs.querySelectorAll(".product-img");

function sectionAnimation() {
  tl.fromTo(SectionProductMain, 1, {
    x: "-120%",
    opacity: 0
  }, {
    x: "0%",
    opacity: 1,
    ease: Power2.easeInOut
  }, "+=2").fromTo(ProductImgs[0], 1, {
    opacity: 0
  }, {
    opacity: 1,
    ease: Power2.easeInOut
  }).fromTo(SectionProductImgs, 1, {
    x: "100%",
    opacity: 0
  }, {
    x: "0%",
    opacity: 1,
    ease: Power2.easeInOut
  }, "-=1").fromTo(ProductImgs[1], 1.5, {
    opacity: 0
  }, {
    opacity: 1,
    ease: Power2.easeInOut
  }).to(ProductImgs[0], 1.5, {
    opacity: 0,
    ease: Power2.easeInOut
  }, "-=1.5").fromTo(ProductImgs[2], 1.5, {
    opacity: 0
  }, {
    opacity: 1,
    ease: Power2.easeInOut
  }).to(ProductImgs[1], 1.5, {
    opacity: 0,
    ease: Power2.easeInOut
  }, "-=1.5").fromTo(ProductImgs[3], 1.5, {
    opacity: 0
  }, {
    opacity: 1,
    ease: Power2.easeInOut
  }).to(ProductImgs[2], 1.5, {
    opacity: 0,
    ease: Power2.easeInOut
  }, "-=1.5").fromTo(ProductImgs[4], 1.5, {
    opacity: 0
  }, {
    opacity: 1,
    ease: Power2.easeInOut
  }).to(ProductImgs[3], 1.5, {
    opacity: 0,
    ease: Power2.easeInOut
  }, "-=1.5");
}

var cb = function cb(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      //SectionTopTitleが画面上に入ってきた時イベント
      SectionTopLists.forEach(function (SectionTopList, i) {
        SectionTopList.classList.add("boundAnimation".concat(i));
      });
      sectionAnimation();
      observer.unobserve(entry.target); //監視の停止 entry.target = SectionTopTitleのこと
    }
  });
};

var options = {
  root: null,
  rootMargin: "0px 0px -300px 0px",
  //画面の内側、下から300px監視対象の範囲
  threshold: 1 //SectionTopTitleの下辺が500px内に入りきった時

};
var io = new IntersectionObserver(cb, options);
io.observe(SectionTopTitle); //監視対象のDOMを登録