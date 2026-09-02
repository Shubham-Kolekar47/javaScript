//object literals are used to store more complex data that can be also stored in the array but object literals are more good as compared
//  to the arrays
//syntax:
let student = {
    name:"shubham",//key: value pair;
    class:"3rd year",
    rollNo:42,
    marks:96
};
  //object does not have order but there is only the same key-value pair
const student2 = {
    name:"shubham",
    class:"3rd year",
    rollNo:42,
    marks:96
};

const item ={
    price: 100,
    discount:50,
    colors: ["red","green"]
};

//object literal;
let thread={
    username:"shubahm",
    content:"gymming",
    likes:373763,
    repost:786,
    tags:["@shubhamkolekar","@gym"]

};
console.log(thread.content);
console.log(thread.tags);
console.log(thread["repost"]);

//javascript automatically converts the objectkrys into strings
//for ex:
let obj = {
    1:"a",
    2:"b",
    null: "c",
    true:"d",
    undefined:"e"
};
console.log(obj[null]);

let student3 = {
    name: "shubham",
    age: 21,
    marks: 96,
    city:"delhi"
}
console.log(student3.city="Mumbai");//used to replace a value of a paarticular key
console.log(student3.gender="male");//used to basically add a key-value pair in the object
console.log(delete student3.marks);

//object of objects
let classInfo = {
    aman:{
        rollNo:42,
        grade:"A"
    },
    shubham:{
        rollNo:43,
        grade:"A+"
    },
    Rohan:{
        rollNo:35,
        grade:"A"
    }
};
console.log(classInfo.aman);//used to access the aman key and its value from the object
console.log(classInfo.aman.grade);//used to access a particular value from the object present in the object
console.log(classInfo.aman.grade="A+");

//array of objects
const classInfo2 = [
    {
        name: "karan",
        grade:"A+",
        rollNo: 45
    },
    {
        name:"shubham",
        grade:"A+",
        rollNo:43
    },
    {
        name:"Rohan",
        grade : "A",
        rollNo: 32
    }
];
console.log(classInfo2[0]);//used to access the object using the index
console.log(classInfo2[0].name);//used to accessthe value in the object in the array
console.log(classInfo2[0].city="delhi");//used to add the key value pair

//Math objects
//there are various math objects but mostly we only use the 2 that are Math.PI and Math.E
//methods
console.log(Math.abs(-12));//used to convert any number into positive number
console.log(Math.pow(2,4));//gives power like 2 to the power of 4
console.log(Math.floor(4.54364654));//it basically reduces the point number to its smallest integer value
console.log(Math.ceil(5.965876));//it basically round off to the largest integer value
console.log(Math.random());//generates any random number

//random interger
//step1: let num=Math.random();
//step2: num = num*10;
//step3:num = Math.floor(num);
//step4: num= num+1;

//first 3 steps combined we get
// Math.floor(Math.random()*10);
//and in this case we will only get numbers from 0 to 9 but after combining 4th step
//we get Math.floor(Math.random()*10)+1;

let random = Math.floor(Math.random()*10)+1;

//generate a random number between 1 to 100
let x = Math.floor(Math.random()*100)+1;
//for the numbers between the 21 and 25
let y = Math.floor(Math.random()*100)+20;
