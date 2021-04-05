"use strict";
var cards = document.querySelectorAll(".card");
var Cursor = document.querySelector(".cursor");
var body = document.querySelector("body");
function AnimateIn(e) {
    Cursor.style.display = "none";
    body.style.cursor = "pointer";
    var cardHeaderTitle = e.querySelector(".card-header-Title");
    var shoesImg = e.querySelector(".shoes-img");
    var sizesButtons = e.querySelector(".sizes");
    var purchaseButton = e.querySelector(".purchaseButton");
    //Popout
    cardHeaderTitle.style.transform = "translateZ(50px)";
    shoesImg.style.transform = "translate3D(0px, -25px, 40px) rotateZ(-45deg)";
    sizesButtons.style.transform = "translateZ(30px)";
    purchaseButton.style.transform = "translateZ(20px)";
}
function AnimateOut(e) {
    Cursor.style.display = "block";
    body.style.cursor = "none";
    var cardHeaderTitle = e.querySelector(".card-header-Title");
    var shoesImg = e.querySelector(".shoes-img");
    var sizesButtons = e.querySelector(".sizes");
    var purchaseButton = e.querySelector(".purchaseButton");
    //Popback
    cardHeaderTitle.style.transform = "translateZ(0px)";
    shoesImg.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizesButtons.style.transform = "translateZ(0px)";
    purchaseButton.style.transform = "translateZ(0px)";
}
cards.forEach(function (card) {
    //Animate In
    card.addEventListener("mouseenter", function (e) {
        AnimateIn(card);
    });
    //Animate Out
    card.addEventListener("mouseleave", function (e) {
        AnimateOut(card);
    });
    //Animate In smartphone
    card.addEventListener("ontouchmove", function (e) {
        AnimateIn(card);
    });
    //Animate Out smartphone
    card.addEventListener("ontouchend", function (e) {
        AnimateOut(card);
    });
});
// sneakerのsizeをクリックするとボタンの色が変化するイベント
var sizesButtons = document.querySelectorAll(".sizesButton");
sizesButtons.forEach(function (sizesButton) {
    sizesButton.addEventListener("click", function () {
        sizesButton.classList.toggle("active");
    });
});
