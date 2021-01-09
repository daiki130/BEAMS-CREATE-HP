let mouseCursor = document.querySelector(".cursor");
let gridColumns = document.querySelectorAll(".grid-column");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

gridColumns.forEach(gridColumn => {
  gridColumn.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    gridColumn.classList.remove("hovered-Link");
  });
  gridColumn.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    gridColumn.classList.add("hovered-Link");
  });
});