// 要素の取得
const cursor = document.querySelector(".cursor")! as HTMLElement;
const footer = document.querySelector("footer")! as HTMLElement;
const footerR = document.querySelector(".footerR")! as HTMLElement;
const mobileMenuBtn = document.querySelector(
  ".mobile-menu__btn"
)! as HTMLButtonElement;
const gridColumns: NodeListOf<HTMLElement> = document.querySelectorAll(
  ".grid-column"
);

// gridColumnホバー時のcursorイベント
gridColumns.forEach((gridColumn) => {
  gridColumn.addEventListener("mouseover", () => {
    cursor.classList.add("link-grow");
  });
  gridColumn.addEventListener("mouseleave", () => {
    cursor.classList.remove("link-grow");
  });
});

// フッターイベント時、実行する関数
function footerMouseoverEvent() {
  cursor.style.display = "none";
  cursor.classList.add("cursorStyle");
}
function footerMouseoutEvent() {
  cursor.style.display = "block";
  cursor.classList.remove("cursorStyle");
}

// フッターホバー時のcursorイベント
footer.addEventListener("mouseover", () => {
  footerMouseoverEvent();
});
footer.addEventListener("mouseout", () => {
  footerMouseoutEvent();
});
footerR.addEventListener("mouseover", () => {
  footerMouseoverEvent();
});
footerR.addEventListener("mouseout", () => {
  footerMouseoutEvent();
});

// ハンバーガーメニューホバー時のcursorイベント
mobileMenuBtn.addEventListener("mouseover", () => {
  cursor.style.display = "none";
});
mobileMenuBtn.addEventListener("mouseout", () => {
  cursor.style.display = "block";
});
