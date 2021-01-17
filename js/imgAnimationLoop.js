document.addEventListener('DOMContentLoaded', (event) => {

  let windowWidth = document.body.clientWidth;
  if(windowWidth <= 500) {
    const banner = document.getElementsByClassName("banner")[0];
    const blocks = document.getElementsByClassName("blocks");
    
    for (var i = 1; i < 600; i++) {
      banner.innerHTML += "<div class='blocks'></div>"; 
      blocks[i].style.animationDelay = `${i * 0.05}s`;
    }
  }
});