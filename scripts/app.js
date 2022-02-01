const slide = document.getElementById("slide");
const menuBtn = document.getElementById("open");
const menuBtn1= document.getElementById("close");
const parents = document.querySelectorAll('.git__flexbox-div');
const links = document.querySelectorAll('.grid__link');

links.forEach(link => {
    link.addEventListener('mouseover', ()=>
    {
        let parent = findParent(link);
        parent.style.background = 'black';
        parent.style.color = '#fffb'
    });
    link.addEventListener('mouseout', ()=>
    {
        let parent = findParent(link);
        parent.style.background = '#fffb';
        parent.style.color = 'black'
    })
});
menuBtn.addEventListener("click", () => {slide.classList.toggle("show")});
menuBtn1.addEventListener("click", () => {slide.classList.toggle("show")});

const findParent = (a) => {
    let parent = a.closest('.git__flexbox-div');
    return parent
};

ScrollReveal().reveal('.git__flexbox-div' , {delay:120});
