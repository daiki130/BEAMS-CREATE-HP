"use strict";

document.addEventListener('DOMContentLoaded', function (event) {
  var windowHight = window.innerHeight;
  var header = document.querySelector(".header");
  header.style.height = windowHight + "px";
  var slider = document.querySelector(".slider");
  var logo = document.querySelector("#logo");
  var heroSection = document.querySelector(".hero-section");
  var heroImg = document.querySelector(".heroImg");
  var hero = document.querySelector(".hero");
  var headline = document.querySelector(".headline");
  var gridColumns = document.querySelectorAll(".grid-column");
  var drawerContainer = document.querySelector(".drawer-container"); // mobile-menu__btnアニメーション

  var mobileMenuBtn = document.querySelector(".mobile-menu__btn");
  mobileMenuBtn.addEventListener("click", function () {
    mobileMenuBtn.classList.toggle("menu-open");
    drawerContainer.classList.toggle("right");
  });
  var tl = new TimelineMax();
  sliderAnimation();

  function sliderAnimation() {
    tl.fromTo(hero, 1, {
      height: "0%"
    }, {
      height: "80%",
      ease: Power2.easeInOut
    }).fromTo(hero, 1.3, {
      width: "100%"
    }, {
      width: "80%",
      ease: Power2.easeInOut
    }).fromTo(slider, 1.3, {
      x: "-100%"
    }, {
      x: "0%",
      ease: Power2.easeInOut
    }, "-=1.2").fromTo(logo, 0.6, {
      opacity: "0",
      x: 30
    }, {
      opacity: "1",
      x: 0,
      ease: Power2.easeInOut
    }, "-=0.5").fromTo(headline, 0.5, {
      opacity: "0",
      x: 30
    }, {
      opacity: "1",
      x: 0,
      ease: Power2.easeInOut
    }, "-=0.5").fromTo(mobileMenuBtn, 0.5, {
      opacity: "0",
      x: 30
    }, {
      opacity: "1",
      x: 0,
      ease: Power2.easeInOut
    }, "-=0.5");
    gridColumns.forEach(function (gridColumn) {
      tl.fromTo(gridColumn, 0.5, {
        opacity: "0",
        x: 30
      }, {
        opacity: "1",
        x: 0,
        ease: Power2.easeInOut
      }, "-=0.5");
    });
    tl.to(heroSection, 0.5, {
      height: "100vh",
      top: "0%",
      bottom: "0%",
      position: "fixed",
      ease: Power2.easeInOut
    }, "+=0.5").to(hero, 0.5, {
      height: "100%",
      width: "100%",
      ease: Power2.easeInOut
    }, "-=0.5");
  }

  var SectionContainerVideo = document.querySelector(".section-container-video"); // section-containerの背景動画スピード設定

  function moveSpeed() {
    SectionContainerVideo.playbackRate = 0.5;
  }

  moveSpeed();
});