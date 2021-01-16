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