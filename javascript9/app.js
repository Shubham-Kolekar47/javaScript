//DOM EVENTS:
//events are signalsthat something has occured 
//onclick(when a an element is clicked)
//onmouseenter(when mouse enters an elemeent
let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function(){
//     console.log("button was clicked");
// }

// btn.onclick = function(){
//     alert("button was clicked");
//}

// function sayHello (){
//     alert("hello");
// }
// btn.onclick= sayHello;

let btns = document.querySelectorAll("button");
for (btn of btns){
    btn.onclick = sayHello;//we dont give parenthesis over here cause it will mean that we are executing
    // the function right here
}
function sayHello (){
    alert("hello");
}
btn.onclick= sayHello;

// let btns1 = document.querySelectorAll("button");
// for (btn of btns1){
//     btn.onclick = sayHello;
//     btn.onmouseenter= function(){
//         console.log("you entered a button");
//     }
//     }
// function sayHello (){
//     alert("hello");
// }
// btn.onclick= sayHello;

//event listener
//addEventListener
//element.addEventListener(event,callback)
let btns2 = document.querySelectorAll("button");
for (btn of btns2){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
    }
function sayHello (){
    alert("hello");
}

function sayName (){
    alert("apna college");
}