// fonc 1

let footernb = document.querySelector("footer");
let x = 0;

function consolePrint() {
    x++;
    console.log(`clic numero ${x}`);
}

if (footernb) {
    footernb.addEventListener("click", consolePrint);
}

// fonc 2

let menu = document.getElementById('navbarHeader');
let hamburger = document.querySelector('span.navbar-toggler-icon');

function menuToogle() {
    menu.classList.toggle("collapse");
}

if (hamburger){    
    hamburger.addEventListener("click", menuToogle);
}

// fonc 3

let card = document.getElementsByClassName("col-md-4")[0];
let edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
let text = document.getElementsByClassName("card-text")[0];

console.log(card);
console.log(edit);
console.log(text);

function changeColor(){
    text.style.color = "red";
}

if (edit){
    edit.addEventListener("click", changeColor);
}

// fonc 4

let secondCard = document.getElementsByClassName("col-md-4")[1];
let secondEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
let secondText = document.getElementsByClassName("card-text")[1];

console.log(secondCard);
console.log(secondEdit);
console.log(secondText);

function secondChangeColor(){    
    if (secondText.style.color === 'green'){
        secondText.style.color = '' ;
    }
    else secondText.style.color = "green";
}

if (secondEdit){
    secondEdit.addEventListener("click", secondChangeColor);
}

// fonc 5

let styleLink = document.querySelector("link");
let header = document.querySelector("header");
console.log(styleLink);
console.log(header);

let index = 0;

function doubleClic() {
    if (index == 2){
        styleLinkEl.disabled = true;
    }
    else if (index == 4){
        styleLinkEl.disabled = false;
        index = 0;
    }
    index++;
}

if (header){
    header.addEventListener("click", doubleClic);
}

//fonc 6