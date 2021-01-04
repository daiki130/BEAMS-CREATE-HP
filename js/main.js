const SectionTopTitle = document.querySelector(".section-Top-title");
const tl = new TimelineMax();
let SectionTopLists = [];
SectionTopLists = SectionTopTitle.querySelectorAll(".section-Top-title-list");


const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      SectionTopLists.forEach((SectionTopList, i) => {
        SectionTopList.classList.add(`boundAnimation${i}`);
      });
    } else {
      console.log("outview");
    }
  });
}
const io = new IntersectionObserver(cb);
io.observe(SectionTopTitle);