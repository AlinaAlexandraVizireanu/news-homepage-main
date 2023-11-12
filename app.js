const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navList = document.querySelector(".navList");
const articleImg = document.querySelector(".img_article");

document.addEventListener("DOMContentLoaded", () => {
  function updateImageSrc() {
    let windowWidth = window.innerWidth;

    if (windowWidth <= 600) {
      articleImg.src = "./assets/images/image-web-3-mobile.jpg";
    } else {
      articleImg.src = "./assets/images/image-web-3-desktop.jpg";
    }
  }
  // Initial call to set the image source on page load
  updateImageSrc();
  // Update image source on window resize
  window.addEventListener("resize", updateImageSrc);
});

hamburgerMenu.addEventListener("click", () => {
  navList.classList.toggle("visible");
  document.body.classList.toggle("overlay");
  if (navList.classList.contains("visible")) {
    hamburgerMenu.src = "./assets/images/icon-menu-close.svg";
  } else {
    hamburgerMenu.src = "./assets/images/icon-menu.svg";
  }
});
