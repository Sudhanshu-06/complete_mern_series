// DOM
// Document object model

// console.log(window.document);
// console.dir(document);

// Select elements by using get element by id


// const mainHeading=console.log(document.getElementById('main-heading'));
// console.log(mainHeading);

// console.dir(document.getElementById('main-heading'));


// select elements by using query selector

// const mainHeading=console.log(document.querySelector('#main-heading'));
// console.log(mainHeading);

// const header= console.log(document.querySelector('.header'));
// console.log(header);


// change text
// textContent and innerText

// const heading = document.getElementById("main-heading");
// console.log(heading.textContent)
// heading.textContent="This is something else";
// console.log(heading.textContent);
// console.log(heading.innerText)



// change the style of elements

// const mainHeading= document.querySelector("div.headline h2");
// console.log(mainHeading.style);
// mainHeading.style.color="yellow";
// mainHeading.style.backgroundColor="skyblue";
// mainHeading.style.border="2px solid blue"


// get and set attributes

// const link= document.querySelector("a");
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("href").slice(1));

// link.setAttribute("href","https://www.google.com/");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));



// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll


// let navItems = document.getElementsByTagName("a")
// console.log(navItems);
// console.log(navItems.length);

// simple for loop
// for of loop
// forEach- we can't use forEach method to iterate through HTMLCollection

// for(let i=0; i<navItems.length; i++){
//     console.log(navItems[i]);
//     const navItem= navItems[i];
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
// }



// navItems= Array.from(navItems);
// console.log(Array.isArray (navItems));

// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
    
// })


// let navItems= document.querySelectorAll("a")

// for(let i=0; i<navItems.length; i++){
//         console.log(navItems[i]);
//         const navItem= navItems[i];
//         navItem.style.backgroundColor="#fff";
//         navItem.style.color="green";
//         navItem.style.fontWeight="bold";
//     }


// for(let navItem of navItems){
//         navItem.style.backgroundColor="#fff";
//         navItem.style.color="green";
//         navItem.style.fontWeight="bold";
//     }


// navItems= Array.from(navItems);
// console.log(Array.isArray (navItems));

// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
    
// })


// console.log(navItems);



// <--innerHTML --->

const headline= document.querySelector(".headline")
console.log(headline);