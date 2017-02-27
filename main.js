const navImg = document.querySelector(".nav-img");
const nav = document.querySelector(".nav");
const navHomeOption = document.querySelector(".nav__home");
const navPlansOption = document.querySelector(".nav__plans");
const sectionBody = document.querySelector(".section-body");

function showNav () {
  nav.style.display = "flex";
  sectionBody.style.display = "none";
}

function hideNav () {
  nav.style.display = "none";
  sectionBody.style.display = "block";
}

navImg.addEventListener("click", showNav);
navHomeOption.addEventListener("click", hideNav);
navPlansOption.addEventListener("click", hideNav);
