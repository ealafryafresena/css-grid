const menu = document.querySelector(".grid-menu");
const menuBtn = document.querySelector(".grid-header-menu-btn");

let showMenu = false;

menuBtn.addEventListener("click", toogleMenu);

function toogleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    showMenu = false;
  }
}
