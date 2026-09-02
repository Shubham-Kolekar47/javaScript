//ARRAY METHODS:
//forEach method:arr.forEach(some functions defination or name);
let arr=[1,2,3,4,5];
arr.forEach(function(el){
    console.log(el);
});

arr.forEach((el) =>{
    console.log(el);
});

// let print = function(el){
//     console.log(el);
// };

// arr.forEach(print);

//map method in array:
let array = [ 
    {
        name:"shubham",
        marks: 98
    },
    {
        name:"shubh",
        marks: 97.4
    },
    {
        name:"rohan",
        marks:97
    }];

    let gpa = array.map((el) => {
    return el.marks / 10;
    })

    // array.forEach((student) =>{
    //     console.log(student.marks);
    // });

    // let num = [1,2,3,4];

    // let double = num.map((el) =>{
    //     return el*2;
    // })

//FILTER METHOD IN ARRAY:
let numbers =[2,3,4,5,6,23,43,8,9,83,31];
let x = numbers.filter((el) => (el % 2 == 0));

//every method of array:it returns true if every method in array given is truefor some functions,else 
// it returns false
//arr.every(some function defination or name);
let c=[1,2,3,4,5];
c.every((el) => (el%2 == 0));//the every returns true only then when it holds true for the every element 
//in the array

//some method in array it is same a sthat of the every function or meyhod it also gives us the values as
//  true or false  

//reduce method in the array:reduces the array to a single value
//syntax:arr.reduce(reducer function with 2 variablesfor (accumulator,elements))
// let r=[1,2,3,4];

// let finVal= r.reduce((res,el) => res+el);
// console.log(finVal);

let r=[1,2,3,4];

let finVal= r.reduce((res,el) => {
    console.log(res);
    return res+el;
});
console.log(finVal);

let f=[3,4,5,2,6,9,45,8];
let max=-1;
for(let i=0;i<f.length;i++){
    if(max < f[i]){
        max = f[i];
    }
}
console.log(max);

let maxi = f.reduce((maxi,el) => {
    if(maxi<el){
        return el;
    }else{
        return maxi;
    }
});
console.log(maxi);

let nu = [10,20,20,55];
let fa=nu.every((num)=>(num%10 == 0));
console.log(fa);

let min=nu.reduce((min,el) => {
    if(min< el){
        return min;
    }else{
        return el;
    }
});
console.log(min);

//DEFAULT PARAMETER:giving a default value to the argument
//syntax: function func(a,b=3){
// do something
//}
function summ(a,b=3){
    return a+b;
}
console.log(summ(5));

//SPREAD:expands an iteratable into multiple values
//syntax:function func(...arr){
// do something}
//ex:
console.log("apnacollege");
//a p n a c o l l e g e :output
//spread in array literals 
let arra = [1,2,3,4,5];
let newArray =[...arra];
console.log(newArray);

let char = [..."hello"];
console.log(char);
//output:['h','e','l','l','o']

let odd=[1,3,5,7,9];
let even = [2,4,6,8,10];
let j =[...odd, ...even];

//SPREAD :in object literals
const data = {
    email:"shubhamkolekar216@gmail.com",
    password: "shubham"
}

const dataCopy = { ...data , id:"abc"};

let ar =[1,2,3,4,5];
let obj1 = {...ar};

//REST:the concept of the rest is exactly opposite of the concept of the spread 
//it allows a function to take an indefinitenumbers of arguments and bundle them into an array

function summing(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us:",args[i])
    }
}
    
function minimum(){
    console.log(arguments);
    console.log(arguments.length);
    arguments.push(1);
}

    function mim(...args){
    return args.reduce((min,el) => {
    if(min< el){
        return min;
    }else{
        return el;
    }
});
}

//destructuring:storing values of array in multiple variables

let names=["tony","bruce","steve","peter","qwd","q22e","abc"];
let [winner,runnerup,secondRunnerup,...others] = names;
// console.log(winner,runnerup);

//Destructuring for the objects:

const stu={
    name:"shubham",
    age:20,
    class:9,
    subject:["maths","science","sst","hindi"],
    username:"shubham@123",
    password:"abcd"

}
// let {username,password} = stu;
// let {username: user,password } = stu;
let {username: user,password } = stu;
