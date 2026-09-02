//string methods
//format: stringName.method()
//str.trim()
// let msg="  hello  ";
// console.log(msg.trim());

// let password= prompt("set your password :");
// console.log(password.trim()); 
//or
// let Password= prompt("set your Password :");
// let newPass = Password.trim();
// console.log(newPass); 

//strings are immutable, no change can be made in the string whenever we try to make changes in the 
// string the new string is created and then old string remains the same

//the string methods to make the all string into either uppercase or the lowercase 
let str="Random String";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//string methods with argument(argument is some value we pass to the method)
//format: stringName.method(arg)

//indexof
//return the first index of the occurance of some value in string.or gives -1 if not found
let msg = "ilovecoding";
console.log(msg.indexOf("love"));

//methodchaining:using one method after another.Order of execution will be left or right
//str.toUpperCase().trim()
let mess = "   Hello  ";
let newMess = mess.trim();
console.log(newMess);
newMess =newMess.toUpperCase();
console.log(newMess);

let met = "  hell  ";
console.log(met.toUpperCase().trim());

//SLICE 
//reurns the part of the original string as the new string
let sli = "Ilovecoding";
console.log(sli.slice(1,5));
console.log(sli.slice(5));//sli.slice(start) and end = the length of the given element or the word 
console.log(sli.slice(-4));//sli.slice(-num) that means the (lenght-num) and then delete that number of
// elements from the starting 

//REPLACE
//searchs a value in the string and then returns a new string with teh value replaced
console.log(sli.replace("love" , "do"));
console.log(sli.repeat(4));