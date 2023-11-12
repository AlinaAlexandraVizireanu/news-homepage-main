const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navList = document.querySelector(".navList");
const body = document.querySelector("body");

hamburgerMenu.addEventListener("click", () => {
  navList.classList.toggle("visible");
  body.classList.toggle("overlay");
  if (navList.classList.contains("visible")) {
    hamburgerMenu.src = "./assets/images/icon-menu-close.svg";
  } else {
    hamburgerMenu.src = "./assets/images/icon-menu.svg";
  }
});
