"use strict";
// 要素の取得
var cursor = document.querySelector(".cursor");
var footer = document.querySelector("footer");
var footerR = document.querySelector(".footerR");
var gridColumns = document.querySelectorAll(".grid-column");
// gridColumnホバー時のcursorイベント
gridColumns.forEach(function (gridColumn) {
    gridColumn.addEventListener("mouseover", function () {
        cursor.classList.add("link-grow");
    });
    gridColumn.addEventListener("mouseleave", function () {
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
footer.addEventListener("mouseover", function () {
    footerMouseoverEvent();
});
footer.addEventListener("mouseout", function () {
    footerMouseoutEvent();
});
footerR.addEventListener("mouseover", function () {
    footerMouseoverEvent();
});
footerR.addEventListener("mouseout", function () {
    footerMouseoutEvent();
});
