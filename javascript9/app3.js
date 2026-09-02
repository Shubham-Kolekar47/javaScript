// let p  = document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("parah was clicked"); 
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter" ,function(){
//     console.log("mouse inside div");
// })

//this in event listener
//when this is used in the callback of event handlerof something , it refers to that somethiong

// let btn= document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.log(this);
// })

// let btn= document.querySelector("button");
// let p= document.querySelector("p");
// let h1= document.querySelector("h1");
// let h3= document.querySelector("h3");

// btn.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// })

// p.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// })

// h1.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// })

// h3.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// })

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// }
// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);

// let btn= document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// })

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// })

// let input = document.querySelector("input");
// input.addEventListener("keydown",function(){
//     console.log("key=",event.key);
//     console.log("code=",event.code)
//     console.log("key was pressed")
// })

// input.addEventListener("keyup",function(event){
//     console.log(event)
// })

// let input = document.querySelector("input");
// input.addEventListener("keydown",function(){
//     console.log("code=",event.code);
//     if (event.code == "ArrowUp"){
//         console.log("character moves up");
//     }else if(event.code == "ArrowDown"){
//         console.log("character moves down")
//     }else if(event.code== "ArrowLeft"){
//         console.log("character moves left");
//     }else if(event.code == "ArrowRight"){
//         console.log("character moves right")
//     }

// })

// let form= document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert("form submitted")
// })

// let form= document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
    
//     let inp = document.querySelector("input")
//         // console.log(inp)
//         console.dir(inp);
//         //console.dir(inp.innerText)//inerText doesnt print the value on the console for thatwe use value
//         console.dir(inp.value);
    
// })


// let form= document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.dir(form);

//     let user =this.elements[0];
//     let pass = this.elements[1];
    
   //{ // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    // console.log(user.value);
    // console.log(pass.value);}

//     alert(`hi ${user.value} your password  is set to ${pass.value}`);
// })

//MORE EVENT:
//change event occurs when the value of the element has been changed(only works on <input>,<textarea>,
// <select> elements)

//input event: the input events fires when value of the <input>,<select> or<textarea> eelments have changed

// let form= document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
    
// });

// let user = document.querySelector("#user");

// user.addEventListener("change",function(){
//     console.log("change event");
//     console.log("final value:",this.value)
// })

// user.addEventListener("input",function(){
//     console.log("input event");
//     console.log("final value:",this.value)
// })
let inp=document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input" , function(){
    console.log(inp.value)
    p.innerText=inp.value;
})