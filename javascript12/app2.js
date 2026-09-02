//API:application programming interface
//api gives us data in the form of the json
//api works like the waiter where it takes the request from the user takes it to the server and then
//  brings the requested thing back to the user

//some random api's:
//https://catfacts.ninja.fact (some random cat facts)
//www.boardapi.com/api/activity(gives some randm activity for the people in bore)
//few api's have keys and payments to use them for ex: twitter has an an api which we can use for free 
// for some time but nedd to pay after sometime
//json data is not made for the humans to read it is made for the computers to read
//there is one more website that is https://dpg.ceo/api/breed/image/random which generates images but
//  when we open this site we will just see some json code cause the api doesn't return the value in 
// html or css it is in json code

//json:javascript object Notation
//www.json.org(website for the json info)
//values which can be put in the json:objects,arrays,string,numbers,"true","false","null"
//there is no such thing as the undefined in json 
//there are also many "json validators "present to check whether the json code is correct or not

//json data is always in the form of the string
//accessing json data:
//JSON.parse(data) method
//method to parse a string data into a JS object

//JSON.stringify(json)method
//to parse a JS objest data into JSON
//PARSE means changing from one data format to other
// let jsonRes='{"fact":"A group of cats is called a clowder.","length":36}';
// let validRes= JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student={
//     name:"shubham",
//     marks:95
// }

//testing API requests:
//tools:1)hoppscoth
//2)postman 

//Ajax:Asynchronous javascript and XML(even if we are saying it as ajax but it is actually Ajaj which 
// means the data is trannsofered in the format of JSON not XML)

//http verbs:for example GET,POST,DELETE etc;

//STATUS CODE:status codes are the ytpe of code which tell us the multiple things like
//200 -ok
//404 - not found
//400 -bad request
//500 -internal server error

//add information in url :
//Query string:
//http://www.google.com/search?q=harry+potter
//above given is a key value pair which is q and harrypotter respectively

//http headers are very important becoz they are used to supply additional information in request as
//  well as response
//generally we send the meta data is data adout data
//http://icanhazdadjoke.com/api it is website of the free joke
//for changing the language we do accept and applixcation/json on the hoppscoth
//we send the api request using the fetch(url) wor which is very important and before it was sent using the XML but now we use the fetch

let url = "https://catfact.ninja/fact";

fetch(url)
.then((res) => {
    console.log(res);
     return res.json() //.then((data) => {
    //     console.log(data);
    // }) //using this our data gets into readable format
})
.then((data) => {
    console.log("data1:",data.fact);
})
.then((res) => {
    return res.json()
    return fetch(url)
})
.then((data2) => {
    console.log("data2:",data2.fact)
})
.catch((err) => {
    console.log("ERROR -",err);
});