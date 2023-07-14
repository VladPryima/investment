let burger = document.querySelector(".burger");
let dropdown = document.querySelector(".dropdown");
let lineOne = document.querySelector(".line-one");
let lineTwo = document.querySelector(".line-two");
let lineThree = document.querySelector(".line-three");


function openMenu () {
    dropdown.classList.toggle("visible");

    lineOne.classList.toggle("line-one--rotate");
    lineTwo.classList.toggle("line-two--hide");
    lineThree.classList.toggle("line-three--rotate");   
}

burger.addEventListener("click", openMenu);


//If screen width > 768px - remove classes from burger and dropdown
function checkSreenWidth () {
    if (window.innerWidth > 768) {
        dropdown.classList.remove("visible");

        lineOne.classList.remove("line-one--rotate");
        lineTwo.classList.remove("line-two--hide");
        lineThree.classList.remove("line-three--rotate");
    } 
}
window.addEventListener("resize", checkSreenWidth);