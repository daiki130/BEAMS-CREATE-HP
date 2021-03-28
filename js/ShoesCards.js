"use strict";
var cardListContainer = document.querySelector(".card-list-container");
var sizes = [
    "25.0",
    "25.5",
    "26.0",
    "26.5",
    "27.0",
    "27.5",
    "28.0",
    "28.5",
    "29.0",
];
var sneakerImgs = [
    "../img/SHOES/Yeezy Boost 350 V2 Sand Taupe.png",
    "../img/SHOES/NIKE Blazer Mid 77 Vintage1.png",
    "../img/SHOES/New Balance CM996 BG.png",
    "../img/SHOES/Jordan 1 Retro High Shinedown Attention Attention PE.png",
    "../img/SHOES/Converse Chuck Taylor All-Star 70s Hi Obsidian.png",
    "../img/SHOES/Dr Martens 1460 8-eye boots in black.png",
];
var title = [
    "Yeezy Boost 350 V2 Sand Taupe",
    "NIKE Blazer Mid 77 Vintage",
    "New Balance CM996 BG",
    "Jordan 1 Retro High Shinedown Attention Attention PE",
    "Converse Chuck Taylor All-Star 70s Hi Obsidian",
    "Dr Martens 1460 8-eye boots in black",
];
var ShoesCards = /** @class */ (function () {
    function ShoesCards() {
        // 要素の作成・クラスを設定
        this.article = document.createElement("article");
        this.article.classList.add("card");
        this.header = document.createElement("header");
        this.header.classList.add("card-header");
        this.h2 = document.createElement("h2");
        this.h2.classList.add("card-header-Title");
        this.cardMain = document.createElement("div");
        this.cardMain.classList.add("card-main");
        this.cardDetail = document.createElement("div");
        this.cardDetail.classList.add("card-detail");
        this.sneaker = document.createElement("div");
        this.sneaker.classList.add("sneaker");
        this.sneakerImg = document.createElement("img");
        this.sneakerImg.classList.add("shoes-img");
        this.shoesSizes = document.createElement("div");
        this.shoesSizes.classList.add("sizes");
        this.sizesButton = document.createElement("button");
        this.sizesButton.classList.add("sizesButton");
        this.purchaseTag = document.createElement("div");
        this.purchaseTag.classList.add("purchase");
        this.purchaseButton = document.createElement("button");
        this.purchaseButton.classList.add("purchaseButton");
        this.purchaseButton.textContent = "購入";
        // プライベートメソッド呼び出し
        this.sizeButtonCreate();
        this.addElement();
    }
    // タイトルを設定
    ShoesCards.prototype.TitleSetting = function (title) {
        this.h2.textContent = title;
    };
    // シューズ画像を設定
    ShoesCards.prototype.ShoesImgSetting = function (Img) {
        this.sneakerImg.setAttribute("src", Img);
    };
    // シューズのサイズボタン作成
    ShoesCards.prototype.sizeButtonCreate = function () {
        var _this = this;
        sizes.forEach(function (size, i) {
            _this.sizesButton = document.createElement("button");
            _this.sizesButton.classList.add("sizesButton");
            _this.sizesButton.textContent = size;
            _this.shoesSizes.appendChild(_this.sizesButton);
        });
    };
    // 要素の追加
    ShoesCards.prototype.addElement = function () {
        this.header.appendChild(this.h2);
        this.sneaker.appendChild(this.sneakerImg);
        this.shoesSizes.appendChild(this.sizesButton);
        this.purchaseTag.appendChild(this.purchaseButton);
        this.cardDetail.appendChild(this.sneaker);
        this.cardDetail.appendChild(this.shoesSizes);
        this.cardMain.appendChild(this.cardDetail);
        this.cardMain.appendChild(this.purchaseTag);
        this.article.appendChild(this.header);
        this.article.appendChild(this.cardMain);
        return cardListContainer.appendChild(this.article);
    };
    return ShoesCards;
}());
// インスタンスの生成
var ShoesCard1 = new ShoesCards();
var ShoesCard2 = new ShoesCards();
var ShoesCard3 = new ShoesCards();
var ShoesCard4 = new ShoesCards();
var ShoesCard5 = new ShoesCards();
var ShoesCard6 = new ShoesCards();
var ShoesCardsLists = [
    ShoesCard1,
    ShoesCard2,
    ShoesCard3,
    ShoesCard4,
    ShoesCard5,
    ShoesCard6,
];
// タイトルの設定・シューズ画像の設定・各々のクラス設定
ShoesCardsLists.forEach(function (ShoesCard, i) {
    ShoesCard.TitleSetting(title[i]);
    ShoesCard.ShoesImgSetting(sneakerImgs[i]);
    if (ShoesCard === ShoesCardsLists[0]) {
        ShoesCard.article.classList.add("card1");
    }
    else if (ShoesCard === ShoesCardsLists[1]) {
        ShoesCard.article.classList.add("card2");
    }
    else if (ShoesCard === ShoesCardsLists[2]) {
        ShoesCard.article.classList.add("card3");
    }
    else if (ShoesCard === ShoesCardsLists[3]) {
        ShoesCard.article.classList.add("card4");
    }
    else if (ShoesCard === ShoesCardsLists[4]) {
        ShoesCard.article.classList.add("card5");
    }
    else if (ShoesCard === ShoesCardsLists[5]) {
        ShoesCard.article.classList.add("card6");
    }
});
