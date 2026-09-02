//all async functions return a promise
//async function can made by writing just the async in front of the normal function then it will become 
// async function

// async function greet(){
//     abc.abc();
//     return "hello!"; //returns a promise
// }

// async function greet(){
//     throw "weak connection";
//     return "hello!";
// }

// greet()
// .then(() =>{
//     console.log("promise was resolved")
//     console,log("result was:",result)
// })
// .catch((err) => {
//     console.log("promise was rejected with err", err);
// })

// let demo = async() => {
//     return 5;
// }

function  getNum(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        let num = Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
        },1000);
    });
}

async function demo() {
    await getNum(); //await functions can only be used with the async function with out it we cannot use it
    await getNum();
    getNum();
}

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