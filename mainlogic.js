let yourScore = 0;
let msg = document.querySelector("#spl");

let highScore = 0;
let hscore = document.querySelector("#hscore");
console.log(hscore);
console.log(hscore.innerText);

let choices = document.querySelectorAll(".yourno");
let user = document.querySelector("#score");
let compShow = document.querySelector("#null");

const compRandom = () => {
    let run = ["1","2","3","4","5","6"];
    let randIdx = Math.floor(Math.random()*6);
    return run[randIdx];
}

const out = () => {
    msg.innerText = `Ohh!! Hard Luck ,You got out on ${yourScore} , Play Again`;
    yourScore = 0;
    user.innerText = `${yourScore}`;
}

const updateScore = (userChoice) => {
    yourScore = +userChoice + yourScore;
    user.innerText = `${yourScore}`;
    if(yourScore > highScore){
        highScore = yourScore;
        hscore.innerText = `${highScore}`;
        console.log(hscore.innerText);
    }
}

const playing = (userChoice) => {
    let compChoice = compRandom();
    compShow.innerText = `${compChoice}`;
    if(userChoice == compChoice){
        out();
    }
    else{
        updateScore(userChoice);
    }
}

const commenteryUpdate = (userChoice) => {
    if(userChoice == 1){
        msg.innerText = "ohh!! , Nice single";
    }

    else if(userChoice == 2){
        msg.innerText = "ohh!! , great dobule , nice running between the wicket";
    }

    else if(userChoice == 3){
        msg.innerText = "ohh!! , just too close to a 4";
    }

    else if(userChoice == 4){
        msg.innerText = "ohh!! , great timing";
    }

    else if(userChoice == 5){
        msg.innerText = "ohh!! , oh wow 5 runs";
    }

    else if(userChoice == 6){
        msg.innerText = "ohh!! , what a shot it is";
    }
}

choices.forEach(choice => {
    choice.addEventListener("click" , () => {
        let userChoice = choice.innerText;
        commenteryUpdate(userChoice);
        playing(userChoice);
    })
}) 