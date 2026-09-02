//document odject model(DOC)
//console.dir(documet)-> write this in the cosole
// and then it will give multiple documengt of the html file such as head ,body etc
//console.dir(document.all);-> will show all the documents
//console.dir(document.all[8]) -> this will print the document present at the position 8 in the console
//console.dir(document.all[8].innerText) ->this will print the text present in the innertext vaiable 

//selecting elements:getElementById
//return the element as the object or null 
//to get the object form of any element we just do as follows:
//console.dir(document.getElementsById("description"));
//getElementsByClassName:returns the elemnet as the html collection or empty collection
//document.getElementsByClassName("oldImg");
//document.getElementsByClassName("oldImg").[0]; -> for calling the particular image from the many images

let smallImage=document.getElementsByClassName("oldImg");

for (let i=0;i<smallImage.length;i++){
    console.log(smallImage[i]);
}

// let smallImage1=document.getElementsByClassName("oldImg");

// for (let i=0;i<smallImage1.length;i++){
//     smallImage1[i].src= "spiderman_img.png";
//     console.log(`value of image no ${i} is changed`);
// }

//getElementByTagName:returns the element as the html collection or an empty collection(if not found)
//document.getElementsByTagName("p");
//document.getElementsByTagName("p")[1].innerText="abc";

//QUARY SELECTORS:
//allows us to use any css selector
//document.querySelector('p'); ->selects first p element
//document.querySelector('#myId') ->selcts the first element with the id = myId
//document.querySelector('.myClass') ->selects first element iwth the class=myclass
//document.querySelectorAll("p"); -> selectss all p element

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"))
console.dir(document.querySelector("div a"))
console.dir(document.querySelectorAll("div a"))

//innertext:shows the visible text contained in a node
//textContent:shows all the full content
//innerHTML:shows the full markup

//MANUPULATINF ATTRIBUTES:
// obj.getAttribute(attr)
// obj.setAttribute(attr,val)//set attribut eis not used for the styling becoz we can have only one value
//  of class at one time

//using classList
//obj.classList
//classList.add() to add new class
//classList.remove() to remove the classes
//classList.contains() to checkif class exists
//classList.toggle() to toggle between add and remove

//let heading = document.querySelector('h1');
//heading.classList.add('green');
//heading.classList.add('underline')//here we can style becoz we have created a class named underline
//  in the style.css and sam goes for the green
//heading.classList.remove('green');
//heading.classList.contains('green');//gives answer in the true or false form

//NAVIGATION:
//parentElement->let h4 = document.querySelector('h4');
//h4.parentElement;
//h4.children;
//h4.childElementCount
//children
//previousElementSibling / nextElementSibling

//ADDING ELEMENT:
//document.createElement('p')
//appendChild(element)
//append( element)
//prepend (element)
//insertAdjacent (where,element)
//REMOVING ELEMENTS:
//removeChild(element)
//remove(element)

let para1= document.createElement("p");
para1.innerText = "hey i'm red!";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3= document.createElement("h3");
h3.innerText = "hey i'm blye h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div= document.createElement("div");
let h1 = document.createElement("h1");
let para2=document.createElement("para2");

h1.innerText = "i'm shubham kolekar";
para2.innerText = "i'm too";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);