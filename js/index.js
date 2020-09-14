let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navLeft = document.querySelector('.nav-list');
let navRight = document.querySelector('.right-nav');
let firstLine = document.getElementById("line1");
let secondLine = document.getElementById("line2");
let thirdLine = document.getElementById("line3");

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav');
    navLeft.classList.toggle('visibility');
    navRight.classList.toggle('visibility');
    firstLine.classList.toggle("first-line");
    secondLine.classList.toggle("hidden");
    thirdLine.classList.toggle("third-line");
})
