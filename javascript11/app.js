//CALL STACK
//function :
// function hello(){
//     console.log("inside hello func")
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello func")
//     hello();
// }

// console.log("calling demo function")
// demo();

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two()+ one();
//     console.log(ans);
// }
// three(); 

//javascript is single threaded that means in javascript we can only do one work at a time
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);
//synchornous nature

// setTimeout(() => {
//     console.log("apna college");
// },2000);
// setTimeout(() => {
//     console.log("apna college");
// },2000);

// console.log("hello...")

// h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(() =>{
//         h1.style.color=color;
//         nextColorChange();
//     },delay)
// }

// changeColor("red",1000,() => {
//     changeColor("orange",1000,() => {
//         changeColor("green",1000,() => {
//             changeColor("yellow",1000,() => {
//                 changeColor("pink",1000);     //this is called as callback nesting or callback hell 
//             });
//         });
//     });
// })
// changeColor("red",1000);
// changeColor("orange",2000);
// changeColor("green",3000);

// setTimeout(() => {
//     h1.style.color="red"
// },1000);

// setTimeout(() => {
//     h1.style.color="orange"
// },2000);

// setTimeout(() => {
//     h1.style.color="green"
// },3000);

h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
        h1.style.color=color;
        resolve("color changed");
    },delay)
    })
}

changeColor("red",1000)
.then(() =>{
    console.log("red color was completed")
    return changeColor("orange",1000)
})
.then(() =>{
    console.log("orange color was completed")
    return changeColor("green",1000)
})
.then(() =>{
    console,log("green color was completed")
})

// changeColor("red",1000,() => {
//     changeColor("orange",1000,() => {
//         changeColor("green",1000,() => {
//             changeColor("yellow",1000,() => {
//                 changeColor("pink",1000);     //this is called as callback nesting or callback hell 
//             });
//         });
//     });
// })

