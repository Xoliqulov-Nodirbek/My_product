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

// ----- > One

let textOne = document.querySelector(".question__content-text1");
let btnOne = document.querySelector(".question__content-btn1");

btnOne.addEventListener("click", function(){
    textOne.classList.toggle("question__content-text1--open")
});

// ----- > Two

let textTwo = document.querySelector(".question__content-text2");
let btnTwo = document.querySelector(".question__content-btn2");

btnTwo.addEventListener("click", function(){
    textTwo.classList.toggle("question__content-text2--open")
});

// ----- > Three

let textThree = document.querySelector(".question__content-text3");
let btnThree = document.querySelector(".question__content-btn3");

btnThree.addEventListener("click", function(){
    textThree.classList.toggle("question__content-text3--open")
});

// ----- > Four

let textFour = document.querySelector(".question__content-text4");
let btnFour = document.querySelector(".question__content-btn4");

btnFour.addEventListener("click", function(){
    textFour.classList.toggle("question__content-text4--open")
});


