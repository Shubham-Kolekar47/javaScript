//LOOPS
//used to iterate a piece of code
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

//for loop syntax
// for(initialization,condition,updation){
//do something
//}
for(let i=1;i<=5;i++){
    console.log(i)
}
//printing the odd numbers from 1 t 15
for(let i=1;i<=15;i=i+2){
    console.log(i)
}
 for(let i=15;i>=1;i=i-2){
    console.log(i)
 }

 for(let i=2;i<=10;i=i+2){
    console.log(i)
}

for(let i=10;i>=2;i=i-2){
    console.log(i)
 }
//examples of the infinte loops
 for(let i=1;i>=0;i++){

 }
 for( let i=1;i<=1;i--){

 }
 for(let i=1; ;i++){

 }
 for(let i=4;i<=40;i=i+4){
    console.log(i)
}
//userinput
let n = prompt("enter your number");
n= parseInt(n);
for(let i=n;i<=n*10;i=i+n){
    console.log(i);
}

