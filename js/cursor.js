let mouseCursor = document.querySelector(".cursor");
let gridColumns = document.querySelectorAll(".grid-column");
let footer = document.querySelector("footer");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

gridColumns.forEach(gridColumn => {
  gridColumn.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    gridColumn.classList.add("hovered-Link");
  });
  gridColumn.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    gridColumn.classList.remove("hovered-Link");
  });
});