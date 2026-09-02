console.log("hello world");
let a =10;
let b = 80;
console.log("sum is :", a+b);
let penPrice = 10;
let bookPrice=50;
// let output ="the total Price is :" + (penPrice + bookPrice);
let output = `the total price : ${penPrice + bookPrice } rupee`;
console.log(output);
//arithmatic operators
let c=10;
let d= 5;
console.log( c+d );
console.log( c-d );
console.log( c*d );
console.log( c/d );
console.log( c**d );
console.log( c%d );
console.log(a++);
console.log(++a);
let e=6;
let f=3;
f=e;
console.log(f);
// let age=18;
// console.log(age>18)
console.log("before my if statement ")
let age =17;
if(age>=18){
    console.log("you can vote")
}
else{
    console.log("you cannot vote")
}
console.log("before my if statement ")
let firstName="shubham";
// console.log(`you are ${firstName}`)
if(firstName = "shubham"){
    console.log(`welcome ${firstName}`)
}

let sig = "red";
if(sig == "red"){
    console.log("stop the car")
}
if(sig =="yellow"){
    console.log("start the car")
}
if(sig =="green"){
    console.log("you can go")
}

let ages=20;
if(ages>=18){
    console.log("he is an adult")
}
else if(ages<18){
    "he is a child"
}

let mark =90;
if(mark>=90){
    console.log("grade A")
}
else if((mark<90)&&(mark>=70)){
    console.log("grade B")
}
else if((mark<70)&&(mark>=50)){
    console.log("grade C")
}

let color = "white";
if(color== "red"){
    console.log("stop !")
}
else if(color == "yellow"){
    console.log("start!")
}
else if(color == "green"){
    console.log("go!")
}
else{
    console.log("the traffic light is broken")
}

let size="XL"
if( size == "S"){
    console.log("price is 50rs")
}
else if( size == "M"){
    console.log("price is 100rs")
}
else if( size == "L"){
    console.log("price is 200rs")
}
else{
    console.log("price is 250 rs")
}

let marks = 46;
if(marks >= 33){
    console.log("Pass!")
    if(marks > 80){
        console.log("outstanding")
    }
    else{
        console.log("Grade A")
    }
}
else{
    console.log("better luck next time")
}

//logical operator
let m=90;
if((m>=33)&&(m>=80)){
    console.log("Pass");
    console.log("A+");
}

let x=90;
if((x>=33)||(x>=80)){
    console.log("Pass");
    console.log("A+");
}

let y=90;
if(!(marks>=33)){
    console.log("Pass");
    console.log("A+");
}

let name = "apple";
if((name[0]=="a") && (name.length>3)){
    console.log("it is a good string")
}
else{
    console.log("it is not a good string")
}

//truthy and falsy
if(true){
    console.log("it is true value")
}
else{
    console.log("it is false value")
}

if(0){
    console.log("it is true value")
}
else{
    console.log("it is false value")
}
if(""){
    console.log("it is true value")
}
else{
    console.log("it is false value")
}
if(" "){
    console.log("it is true value")
}
else{
    console.log("it is false value")
}

let colour="red";
switch(colour){
    case "red":
        console.log("stop!");
        break;
    case "yellow":
        console.log("star the car!");
        break;
    case "green":
        console.log("go!");
        break;
    default:
        console.log("broken light")    
}

let day = 6;
switch(day){
    case 1:
        console.log("its monday")
        break;
    case 2:
        console.log("its tuesday")
        break;
    case 3:
        console.log("its wednesday")
        break;
    case 4:
        console.log("its thursday")
        break;
    case 5:
        console.log("its friday")
        break;
    case 6:
        console.log("its saturday")
        break;
    case 7:
        console.log("its sunday")
        break;
    default:
        console.log("wrong day!")
}

//Alert and Prompt

//alerts
// alert("Something is wrong!");
console.log("This is a simple log");
console.error("This is a simple error message");
console.warn("This is a simple warning message")

//prompts
// prompt("enter your name :");
// let g= prompt("enter your name :");
// console.log(g);

// let fName= prompt("enter your first name :");
// let lName= prompt("enter your last name: ");
// console.log("Welcome" ,fName ,lName,"!");

let fName= prompt("enter your first name:");
let lName= prompt("enter your last name: ");
let msg = "Welcome" + fName + lName+ "!";
alert(msg);