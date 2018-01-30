var mobileMenu = document.querySelector(".main-nav__wrapper");
var mainLogo = document.querySelector(".page-header__logo");
var menuToggle = document.querySelector(".main-nav__toggle");
var menuState = false;

var openMenu = function () {
  mobileMenu.classList.add("show-menu");
  mainLogo.classList.add("shift-logo");
  menuState = true;
}

var closeAnimate = function () {
  mobileMenu.classList.add("hide-menu");
  mainLogo.classList.add("shift-logo-back");
}

var deleteCloseAnimate = function () {
  mobileMenu.classList.remove("hide-menu");
  mainLogo.classList.remove("shift-logo-back");
}

var closeMenu = function () {
  mobileMenu.classList.remove("show-menu");
  mainLogo.classList.remove("shift-logo");
  menuState = false;
}

menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menuState == false) {
    openMenu();
  } else {
    closeAnimate();
    setTimeout (function() {
      closeMenu();
      deleteCloseAnimate();
    }, 900)
  }
  console.log(menuState);
});   