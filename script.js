let burger = document.querySelector(".burger");
let dropdown = document.querySelector(".dropdown");
let lineOne = document.querySelector(".line-one");
let lineTwo = document.querySelector(".line-two");
let lineThree = document.querySelector(".line-three");

/*Что нужно сделать по клику: 
Линии должны стать крестом внутри burger - два span, один из которых отключаем.
добавить класс line--one - two - three к трем span - выглядит муторно.
*/

function openMenu () {
    dropdown.classList.toggle("visible");

    lineOne.classList.toggle("line-one--rotate");
    lineTwo.classList.toggle("line-two--hide");
    lineThree.classList.toggle("line-three--rotate");
    
}

burger.addEventListener("click", openMenu);