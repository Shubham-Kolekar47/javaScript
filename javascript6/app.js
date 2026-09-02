const student ={
    name : "shubham",
    age : 20,
    eng : 97,
    math : 98,
    sci : 96,
    getAvg() {
        console.log(this);//this ka matlab hai student object in this getAvg
       let avg = ( this.eng + this.math + this.sci)/3;
       console.log(avg);//this keyword refers to an object that is executing the current piece of code
       console.log(`${name} got = ${avg}`);
    }
}

function getAvg() {
    console.log(this);
}

//try catch statements:
//the try statement allows you to define a block of code t0o be tested for error while it is being exec.
//the catch statement allows you to define a block of code to be executed.if an error occurs in try block

console.log("hello");
console.log("hello");
//let a =5;
try {
    console.log(a);
} catch(err) {
    console.log(" a is not defined");
    console.log(err)
}
console.log("hello2");
console.log("hello2");

//ARROW FUNCTION :arrow functions are used as a variable or as a call back in a function
//syntax:
//const func = (arg1,arg2,....) => {function defination}
const sum = (a,b) => {
    console.log(a+b);
}

let cube = (n) => {
    return n*n*n;
}

const pow = (a,b) => {
    return a**b;
}

//implict return means aut9omatic return it happens in the arrow fn when their is only one work done.
//syntax: const func(arg1,arg2,...) => (value),here for the value we use parenthesis not the curly braces
const mul = (a,b) => (
    a*b
)
//single line function
const sum1 = (a,b) => (a+b);

//setTimeout :
//syntax:setTimeout(function,timeout) here the time out is in miliseconds so for 1second we write 1000

console.log("hello there");

setTimeout( ()=>{
    console.log("apna college");},4000);

    console.log("welcome to ")

//SET INTERVAL:the set interval is also a type of time function 
//syntax: setInterval( function,timeout
// let id = setInterval( ()=>{
//     console.log("apna college")
// },2000);

// let id2 = setInterval( ()=>{
//     console.log("Shubham")
// },2000);

const stud ={
    name:"shubham",
    age: 34,
    prop : this,
    getName : function(){
        console.log(this);
        return this.name;
    },
    getAge: ()=> {
        console.log(this);//for the arrow function it doesn't have its own scope it has its parent scope -->windows
        return this.age;//thats why when we run it by stud.getAge the it gives undefined
    },
    getInfo1: function(){
        setTimeout( ()=> {
            console.log(this);//student
        },2000)
    },
    getInfo2: function(){
        setTimeout( function() {
            console.log(this);//windows
        },2000)
    },
};

const square = (n) => (n*n);
console.log(square(4));

let hello = setInterval( ()=>{
        console.log("hello world");
    },2000);

    setTimeout( ()=>{
        clearInterval(hello);
    },10000);

