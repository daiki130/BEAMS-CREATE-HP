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

cards.forEach(card => {
  card.addEventListener("mouseover", (e) => {
    Cursor.style.display = "none";
    body.style.cursor = "pointer";
  });
  //Animate In 
  card.addEventListener("mouseenter", (e) => {
    // let cardHeaderTitle = card.querySelector(".card-header-Title");
    let shoesImg = card.querySelector(".shoes-img");
    //Popout
    // cardHeaderTitle.style.transform = "translate3D(5px, -5px, 100px)";
    shoesImg.style.transform = "translate3D(0px, -20px, 100px) rotateZ(-45deg)";
  });
  card.addEventListener("mouseout", (e) => {
    Cursor.style.display = "block";
    body.style.cursor = "none";
  });
  //Animate Out
  card.addEventListener("mouseleave", (e) => {
    // let cardHeaderTitle = card.querySelector(".card-header-Title");
    let shoesImg = card.querySelector(".shoes-img");
    //Popback
    // cardHeaderTitle.style.transform = "translateZ(0px)";
    shoesImg.style.transform = "translateZ(0px) rotateZ(0deg)";
  });
});

// sneakerのsizeをクリックするとボタンの色が変化するイベント
const sizesButtons = document.querySelectorAll(".sizesButton");
sizesButtons.forEach(sizesButton => {
  sizesButton.addEventListener("click", () => {
    sizesButton.classList.toggle("active");
  });
});