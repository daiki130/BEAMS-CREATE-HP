"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursorEvent = void 0;
var CursorEvent = function () {
    // 要素の取得
    var cursor = document.querySelector(".cursor");
    var footer = document.querySelector("footer");
    var footerR = document.querySelector(".footerR");
    var Body = document.querySelector("body");
    var mobileMenuBtn = document.querySelector(".mobile-menu__btn");
    var gridColumns = document.querySelectorAll(".grid-column");
    var drawer = document.querySelector(".drawer");
    // gridColumnホバー時のcursorイベント
    gridColumns.forEach(function (gridColumn) {
        gridColumn.addEventListener("mouseover", function () {
            cursor.classList.add("link-grow");
            console.log("foo");
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
    // ハンバーガーメニューホバー時のcursorイベント
    mobileMenuBtn.addEventListener("mouseover", function () {
        cursor.style.display = "none";
    });
    mobileMenuBtn.addEventListener("mouseout", function () {
        cursor.style.display = "block";
    });
    // ハンバーガーメニュークリック時のcursorイベント
    mobileMenuBtn.addEventListener("click", function () {
        mobileMenuBtn.classList.toggle("menu-open");
        drawer.classList.toggle("right");
        if (drawer.className === "drawer right") {
            cursor.style.display = "none";
            Body.style.cursor = "pointer";
        }
        else {
            cursor.style.display = "block";
            Body.style.cursor = "none";
        }
    });
};
exports.CursorEvent = CursorEvent;
