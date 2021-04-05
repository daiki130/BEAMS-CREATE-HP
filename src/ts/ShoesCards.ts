export const ShoesCard = () => {
  const cardListContainer = document.querySelector(
    ".card-list-container"
  )! as HTMLHeadElement;
  const sizes: string[] = [
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
  const sneakerImgs: string[] = [
    "./img/Yeezy Boost 350 V2 Sand Taupe.png",
    "./img/NIKE Blazer Mid 77 Vintage1.png",
    "./img/New Balance CM996 BG.png",
    "./img/Jordan 1 Retro High Shinedown Attention Attention PE.png",
    "./img/Converse Chuck Taylor All-Star 70s Hi Obsidian.png",
    "./img/Dr Martens 1460 8-eye boots in black.png",
  ];
  const title = [
    "Yeezy Boost 350 V2 Sand Taupe",
    "NIKE Blazer Mid 77 Vintage",
    "New Balance CM996 BG",
    "Jordan 1 Retro High Shinedown Attention Attention PE",
    "Converse Chuck Taylor All-Star 70s Hi Obsidian",
    "Dr Martens 1460 8-eye boots in black",
  ];

  class ShoesCards {
    article: HTMLElement;
    header: HTMLHeadElement;
    h2: HTMLElement;
    cardMain: HTMLDivElement;
    cardDetail: HTMLDivElement;
    sneaker: HTMLDivElement;
    sneakerImg: HTMLImageElement;
    purchaseTag: HTMLDivElement;
    purchaseButton: HTMLButtonElement;
    shoesSizes: HTMLDivElement;
    sizesButton: HTMLButtonElement;

    constructor() {
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
    TitleSetting(title: string) {
      this.h2.textContent = title;
    }
    // シューズ画像を設定
    ShoesImgSetting(Img: string) {
      this.sneakerImg.setAttribute("src", Img);
    }
    // シューズのサイズボタン作成
    private sizeButtonCreate() {
      sizes.forEach((size, i) => {
        this.sizesButton = document.createElement("button");
        this.sizesButton.classList.add("sizesButton");
        this.sizesButton.textContent = size;
        this.shoesSizes.appendChild(this.sizesButton);
      });
    }
    // 要素の追加
    private addElement() {
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
    }
  }

  // インスタンスの生成
  const ShoesCard1 = new ShoesCards();
  const ShoesCard2 = new ShoesCards();
  const ShoesCard3 = new ShoesCards();
  const ShoesCard4 = new ShoesCards();
  const ShoesCard5 = new ShoesCards();
  const ShoesCard6 = new ShoesCards();

  const ShoesCardsLists = [
    ShoesCard1,
    ShoesCard2,
    ShoesCard3,
    ShoesCard4,
    ShoesCard5,
    ShoesCard6,
  ];

  // タイトルの設定・シューズ画像の設定・各々のクラス設定
  ShoesCardsLists.forEach((ShoesCard, i) => {
    ShoesCard.TitleSetting(title[i]);
    ShoesCard.ShoesImgSetting(sneakerImgs[i]);
    if (ShoesCard === ShoesCardsLists[0]) {
      ShoesCard.article.classList.add("card1");
    } else if (ShoesCard === ShoesCardsLists[1]) {
      ShoesCard.article.classList.add("card2");
    } else if (ShoesCard === ShoesCardsLists[2]) {
      ShoesCard.article.classList.add("card3");
    } else if (ShoesCard === ShoesCardsLists[3]) {
      ShoesCard.article.classList.add("card4");
    } else if (ShoesCard === ShoesCardsLists[4]) {
      ShoesCard.article.classList.add("card5");
    } else if (ShoesCard === ShoesCardsLists[5]) {
      ShoesCard.article.classList.add("card6");
    }
  });
};
