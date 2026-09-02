// function setToDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure(); 
//     }
// };

// setToDb("shubham", () => {
//     console.log("success: your data was saved ");
//     setToDb("hello world",()=>{
//         console.log("success2: your data is stored");
//         setToDb("roman here",() =>{
//             console.log("success3: your data is saved");
//         },() => {
//             console.log("failure3: weak connection ")    //callback Hell example
//         })
//     },() => {
//         console.log("failure2: weak connection")
//     }) 
// },() =>{
//     console.log("failure: weak connection, data was not saved")
// });

//Promises:the promise object represents the eventual comletion (or failure) of asynchronous operation and its
//  resulting value , here in promises there are 2 terms (resolve ,reject) which means (success,failure);
//promise has its own methods which are: "then()and catch()" methods, then() method is used when we get 
// success and catch() method can be used when we get failure

function setToDb(data){
    return new Promise((resolve,reject) => {
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success: data was saved");
        }else{
            reject("failure: weak connection");
        }
    })
    
};

// let request = setToDb("shubham");
// request.then(() => {
//     console.log("promise was resolved");
//     console.log(request);
// });
// request.catch(() => {
//     console.log("promise was rejected");
//     console.log(request);
// })

 //above can be also writteh as below given thing

// setToDb("shubham")
// .then(() => {
//     console.log("data1 :promise was resolved");
//     setToDb("roman")
//     .then(() =>{
//         console.log("data2 : your data is saved");
//         setToDb("rohan")
//         .then(() => {
//             console.log("data 3 :your data was saved");//this is like nested only so next;
//         })
//     })
// })
// .catch(() => {
//     console.log("promise was rejected");
// })

setToDb("shubham")
.then((result) => {
    console.log("data1 was resolved");
    console.log("result:",result)
    return setToDb("hello world")   
})
.then((result) => {
    
    console.log("data2 was resolved")
    console.log("result:",result)
    return setToDb("rohan")
})
.then((result) =>{
    console.log("data3 was resolved")
    console.log("result:",result)
})
.catch((error) => {
    console.log("error:", error)
    console.log("promise was rejected");
})

//Promises are rejected and resolved with some data
