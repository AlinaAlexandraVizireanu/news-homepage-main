const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navList = document.querySelector(".navList");

hamburgerMenu.addEventListener("click", () => {
  console.dir(hamburgerMenu);

  navList.classList.toggle("visible");

  if (navList.classList.contains("visible")) {
    hamburgerMenu.src = "./assets/images/icon-menu-close.svg";
  } else {
    hamburgerMenu.src = "./assets/images/icon-menu.svg";
  }
});
