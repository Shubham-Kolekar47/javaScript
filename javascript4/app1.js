const max = prompt("enter the maximum number :");

const random=Math.floor(Math.random()*max)+1;
// console.log(random);
let guess = prompt("guess the number:");
while(true){
    if(guess == "quit"){
        console.log("user quit!");
        break;
    }
    if(guess == random){
        console.log("you are right.congrats!! random number was:",random)
        break;
    } else if(guess < random){
        guess = prompt("hint:your number is too small,please guess again:")
    } else{
        guess = prompt("hint:your number is too large,please guess again:")
    }
    // else{
    //     guess = prompt("your guess was wrong,guess the number again:");
    // }
}