// let student1= "Aman";
// let student2= "Rohan";
// let student3= "shubham";

// let student = ["Aman","Shubham","Rohan"]

let cars=["audi","xuv","mitsubishi","bmw","mercedes"];
console.log(cars);
console.log(cars.push('ferrari'));
console.log(cars.pop());
console.log(cars.unshift('mahindra'));
console.log(cars.shift());

//ARRAY METHODS
//indexOf method
let primary = ["red","yellow","blue"];
console.log(primary.indexOf("red"));//it will give 0
console.log(primary.indexOf("green"));//it will give -1 as it is not present in the array
//array.includes("...");
console.log(primary.includes("red"))//output is in the true or false form

//concate in the array(concate means it basically joins the 2 arrays)
let pri = ["shubham","rohan","ram"];
let sec = ["shubh","fahh","praskash"]
console.log(pri.concat(sec));
//reverse an array method
console.log(pri.reverse());

// slice(it brings you the copy of the portion of the array)
let colors=["red","yellow","orange","blue","pink","white"];
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));//it prints the values from the back, like -2 is ["pink","white"]
console.log(colors.slice());//it prints the hole array

//splice(it removes/replaces /adds the elements in place)
//splice(start,deleteCount,item0.....itemN)
let sp = ["samarth","sangram","shahid","shubham"];
console.log(sp.splice(0,1));//it will delete the name at the index 0
let spl = ["samarth","sangram","shahid","shubham"];
console.log(spl.splice(2));//it will print the names after the given index and including that index as well
let spli = ["samarth","sangram","shahid","shubham"];
console.log(spli.splice(0,1,"anjali","vaishnavi","piyusha"));
//splice basically delete the told element and then returns that element in the form of an separate array

let car = ["bmw","xuv","maruti","suzuki","mcb"];
console.log(car.sort());

let months=["january","july","march","august"];
console.log(months.splice(0,2,"july","june",));

let lang= ["c","c++","html","javascript","python ","java","c#","sql"];
console.log(lang.reverse().indexOf("javascript"));

//ARRAY REFERENCE:
//here itsays that the one array is not equal to the other 
//[1]==[1]-> this will return false as well as [1]===[1]
// the name of the array is the reference variable which knows the address of the particular element
//thatswhy  when we try to equate the [1]==[1] tehn it shows false

let arr =["a","b","c"];
let arrCopy= arr;
arrCopy = arr //therefore now the arrCopy will be equal to the arr
console.log(arrCopy);
console.log(arrCopy.push("d"));

//CONSTANT ARRAY
//when we write the const in front of "a"like ex: const a=5 then here a is constant
//similarly the if we write the const in front of any array then it will become a constant array

//NESTED ARRAYS(also called as multidimentional array)
let num =[[2,4],[3,6],[4,8]];
console.log(num)
//if we want to access any number from the nested array then 9{ arrayName[row][col]}
//row means the number of the array in the nested array like[2,4]has index 0 in nested array
//and col means the index in the most inner array or the nested array like [2,4]

let game = [["x",null,"0"],[null,"x",null],["0",null,"x"]]