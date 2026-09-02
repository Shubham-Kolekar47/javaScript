 for(let i=4;i<=40;i=i+4){
    console.log(i)
}
//userinput
// let n = prompt("enter your number");
// n= parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

for(let i=1;i<=3;i++){
    console.log("outer loop:",i)
    for(let j=1;j<=3;j++){
        console.log(j)
    }
}

//WHILE LOOP
//SYNTAX:
//WHILE(CONDITION){
//   do something
//}ex:
let i =1;
while(i<=5){
    console.log(i);
    i++;
}

let j =5;
while(j>=1){
    console.log(j);
    j--;
}

//Example:game of guessing the movie
// const favMovie = "sanam re";

// let guess = prompt("Guess the movie");

// while((guess!=favMovie)&&(guess!="quit")){
//     guess = prompt("wrong guess. Please try again");
// }
// if(guess==favMovie){
//     console.log("congrats!")
// }

//BREAK KEYWORD
let k=1;
while(k<=5){
    if(k==3){
        break;
    }
    console.log(k);
    k++;
}

//ex:
// const favMovie = "sanam re";

// let guess = prompt("Guess the movie");

// while((guess!=favMovie)){
//     if(guess=="quit"){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("wrong guess. Please try again");
// }
// if(guess==favMovie){
//     console.log("congrats!")
// }

let fruits=["mango","banana","litchi","papaya","custardapple","orange"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);

}

let fruit=["mango","banana","litchi","papaya","custardapple","orange"];
for(let i=0;i<fruit.length;i=i+2){
    console.log(i,fruit[i]);

}

let frui=["mango","banana","litchi","papaya","custardapple","orange"];
for(let i=frui.length-1;i>=0;i--){
    console.log(i,frui[i]);

}

let heroes = [["Ironman","captainamerica","hulk"],["superman","wonderwomen","aquaman"]];

for(let i=0;i<heroes.length;i++){
    console.log("list:",i);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}


let hero = [["Ironman","captainamerica","hulk"],["superman","wonderwomen","aquaman"]];
for (let i=0;i<hero.length;i++){
    console.log(i,hero[i])
}

let her = [["Ironman","captainamerica","hulk"],["superman","wonderwomen","aquaman"]];

for(let i=0;i<her.length;i++){
    console.log(i,her[i]);
    for(let j=0;j<her[i].length;j++){
        console.log(her[i][j]);
    }
}

//for-of-loop,it does not work on the internet explorer but works on safari,chrome etc browsers
//for(element of collecction){
// do something
//}
let fru =["apple","mango","orange","litchi","papaya"];
for(fr of fru){
    console.log(fr);
}
for(char of "apnacollege"){
    console.log(char)
}

//Nested for of loop
let arr=[["Ironman","captainamerica","hulk"],["superman","wonderwomen","aquaman"]];
for(h of arr){
    console.log("superheroes of :",h)
    for(k of h){
        console.log(k)
    }
}