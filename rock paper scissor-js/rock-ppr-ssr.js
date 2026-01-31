const choices = ["rock","paper","scissor"];

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
let resultDisplay = document.querySelector(".result");
let playerScoreDisplay = document.querySelector(".playerScore");
let computerScoreDisplay = document.querySelector(".computerScore");
let playerScore =0;
let computerScore =0;

function playgame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(computerChoice);
    let result ="";

    if (playerChoice === computerChoice){
        result = "IT'S a tie";
    }
    else{
        switch(playerChoice){
            case "rock":
            result=(computerChoice==="scissor")? "YOU WIN": "YOU LOSE";
            break;
            case "paper":
                result=(computerChoice==="rock")? "YOU WIN": "YOU LOSE";
            break;
            case "scissor":
                result=(computerChoice==="paper")? "YOU WIN": "YOU LOSE";
            break;
        }
    }
    player.textContent = "PLAYER: " + playerChoice;
    computer.textContent = "COMPUTER: "+ computerChoice;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");

    switch(result){
        case "YOU WIN":
        resultDisplay.classList.add("greenText");
            playerScore++;
        break;
        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            computerScore++;
        break;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

}