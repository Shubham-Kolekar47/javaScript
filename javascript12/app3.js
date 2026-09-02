let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random" //url not working
btn.addEventListener("click", async() => {
    let link = await getImg();
    // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});

async function getImg(){
    try{
        let res = await axios.get(url2)
        console.log(res.data.message);
    } catch(e){
        console.log("error - :", e)
        return "/";
    }
}




// let btn = document.querySelector("button");
// btn.addEventListener("click", async() => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result")
//     p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res = await axios.get(url)
//         return res.data.fact;
//     } catch(e){
//         console.log("error - :", e)
//         return "No fact found";
//     }
// }

// async function getFacts(){
//     try{
//         let res = await axios.get(url)
//         console.log(res.data.fact);
//     } catch(e){
//         console.log("error - :", e)
//     }
// }

// async function getFacts(){
//     try{
//         let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//     } catch(e){
//         console.log("error - :", e)
//     }

//     console.log("bye bye")
// }