//functions in javascript
//function defination tells javascript what it does
//function syntax:
//function funcName(){
//do something
//}
//ex:
function hello(){
    console.log("hello");
}
//to call afunction we need to write funcName(); like for above we write hello();

hello();

function printName(){
    console.log("apnaCollege");
}
//to call:
printName();

function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i)
    }
}
print1to5();

function isAdult(){
    let age=22;
    if(age>=18){
        console.log("you are an adult")
    }else{
        console.log("you are a minor")
    }
}
isAdult();

function rollDice(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rollDice();

//function with arguments
//value we pass to the function is an argument, we can also say them as the parameters
//syntax:function funcName(arg1,arg2,...){
//do something
//}
function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}

printInfo("shubham",20);
printInfo("Rohan")

function sum(a,b){
    console.log(a+b);
}
sum(2,4);
sum(34234,325656);

function avg(a,b,c){
    //let cal=(a+b+c)/3;
    //console.log(cal);
    console.log((a+b+c)/3);
}
avg(2,5,6);

function table(n){ 
    for(let i=n;i<=n*10;i=i+n){
        console.log(i);
    }
}
table(3);

//RETURN KEYWORD
//the return keyword is used to return the value from the function
function sum1(c,d){
    console.log("hello");
    console.log("hello");
    return c+d;
    console.log("hello2");//the statements written after the return statement do not get exicuted
    console.log("hello2");//but i guess that happens in old vs codes
}
// let s = sum1(4,5);
// console.log(s);
console.log(sum1(4,6));
console.log(sum1(sum1(2,3),6));

function isAdu(age){
    if(age>=18){
        return "Adult";
    }
    else{
        return "not Adult";
    }
    console.log("bye bye")
}
console.log(isAdu(20))

function adding(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(adding(4));

let str=["hi","bye","dai","!"]

function concate(str){
    let result;

    for(let i=0;i<str.length;i++){
        result = result + str[i];
    }
    return result;
}
// console.log(concate(str))

//SCOPE 
//it determines the accessibility of the varibles ,objects and the functions from the diff parts of code
//types of the scope
//function scope
//lexical scope
//block scope 

function calSum(a,b){
    let summing = a+b;//function scope(fundtion scopes are more specific and are greater than global)
    console.log(summing)//if function does not have the variable as the same name then it can use the
    // global scope variable
}
calSum(1,2);

//BLOCK SCOPE:the variables declared inside the {} block cannot be accessedfrom outside of the block
{
    let f =78;
}
console.log(f);//it will give error

{
    const f =78;
}
console.log(f);//it will give error

{
    var f =78;
}
console.log(f);//it will not give an error

//LEXICAL SCOPE:a variable defined outside the function can be accessibe inside another function defined
//  after the variable declaration but opposite is not possible means the variable declared in the
//  innerfunction cannot be used in the outerfun

function outerFun(){
    let v=40;
    let h=93;
    function innerFun(){//it becomes function scope 
        let r=68;
        console.log(v)
        console.log(h)

    }

    innerFun();
    console.log(r)//this will give error
}

//code:
let greet = "hello";//global scope

function changeGreet(){//function scope
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){//lexical scope
        console.log(greet);
    }
}
console.log(greet);
changeGreet();

//function Expressions
//syntax: const variable=function(arg1,arg2,...){
//do or return something 
//}
//example:
const j = function(a,b){
    return a+b;
} 
console.log(j(2,324));

//HIGH ORDER FUNCTIONS:
//-> takes one or more functions as an argument
//-> returns a function
function multipleGreet(func,count){
    for(let i=1;i<=count;i++){ //higher order function
        func();
    }
}
let greett =function(){
    console.log("hello ")
}

multipleGreet(greett, 2);
multipleGreet(function(){console.log("namaste")}, 2);//we can directly pass the value or a function 
//multipleGreet(greett(), 2);//if we pass greett like that then it will give an error 

//HIGHER ORDER FUNCTION (RETURN):
let odd = function(){
    console.log(!(n%2 == 0));
}
let even = function(){
    console.log(n%2 == 0);
}

function oddOrEvenFactory(){
    if (request == "odd"){
        let odd = function(){
    console.log(!(n%2 == 0));

    }
    return odd;
}else if( request == "even"){
    let even = function(){
    console.log(n%2 == 0);
}
return even;
}else{
    console.log("wrong request");
}
}

let request = "odd";

//METHODS :thos efunctions which are defined inside a object is called as an method
const calculator={
    num=55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}
//method(shorthand)
const calcula ={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}