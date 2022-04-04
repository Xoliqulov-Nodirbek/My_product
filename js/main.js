let changerButton = document.querySelector(".header__button-three");
let body = document.querySelector("body");
let elBtn = document.querySelector(".header__menu");
let elHeader = document.querySelector(".header__inner");

// --> Light Mode and Dark Mode part in header.

changerButton.addEventListener("click", function(){
    body.classList.toggle("body__dark");
}) ;

// --> The opening part of the header-menu

elBtn.addEventListener("click", function(){
    elHeader.classList.toggle("header__inner-open");
});
