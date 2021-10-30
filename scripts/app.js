const slide = document.getElementById("slide");
const menuBtn = document.getElementById("open");
const menuBtn1= document.getElementById("close");

menuBtn.addEventListener("click", () => {slide.classList.toggle("show")});
menuBtn1.addEventListener("click", () => {slide.classList.toggle("show")});

ScrollReveal().reveal('.git__flexbox-div' , {delay:120});
