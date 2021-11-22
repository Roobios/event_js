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

let menuEl = document.getElementById('navbarHeader');
let hamburgerEl = document.querySelector('span.navbar-toggler-icon');

function menuToogle() {
    menuEl.classList.toggle("collapse");
}

if (hamburgerEl){    
    hamburgerEl.addEventListener("click", menuToogle);
}

// fonc 3

let cardEl = document.getElementsByClassName("col-md-4")[0];
let editEl = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
let textEl = document.getElementsByClassName("card-text")[0];

console.log(cardEl);
console.log(editEl);
console.log(textEl);

function changeColor(){
    textEl.style.color = "red";
}

if (editEl){
    editEl.addEventListener("click", changeColor);
}

// fonc 4

let secondCardEl = document.getElementsByClassName("col-md-4")[1];
let secondEditEl = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
let secondTextEl = document.getElementsByClassName("card-text")[1];

console.log(secondCardEl);
console.log(secondEditEl);
console.log(secondTextEl);

function secondChangeColor(){    
    if (secondTextEl.style.color === 'green'){
        secondTextEl.style.color = '' ;
    }
    else secondTextEl.style.color = "green";
}

if (secondEditEl){
    secondEditEl.addEventListener("click", secondChangeColor);
}

// fonc 5

let styleLinkEl = document.querySelector("link");
let headerEl = document.querySelector("header");
console.log(styleLinkEl);
console.log(headerEl);

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

if (headerEl){
    headerEl.addEventListener("click", doubleClic);
}
