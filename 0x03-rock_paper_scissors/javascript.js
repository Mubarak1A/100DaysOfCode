function getComputerChoice(){
    //funtion to get computer choice
    
    const rock = 1;
    const paper = 2;
    const scissors = 3;
    let comChoice = Math.floor(Math.random()*(3-1+1)+1); //generate random number between 1-3

    if (comChoice == rock)
        return ("ROCK");
    else if (comChoice == paper)
        return ("PAPER");
    else
        return ("SCISSORS");
}

function playRound(){
    //funtion to play a round between player and computer 
    
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("What is your choice [ROCK, PAPER or SCISSORS]:");

    computerSelection = computerSelection.toUpperCase();
    playerSelection = playerSelection.toUpperCase();
    
    if(playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS"){
        console.log("Wrong Input! You either choose ROCK PAPER or SCISSORS.");
    }
    else if(computerSelection == playerSelection){
        console.log("COMPUTER = " + computerSelection);
        console.log("YOU = " + playerSelection);
        console.log("Draw!, Both player get a point.");
        console.log("\n");
        result = "Draw";
    }
    else if((computerSelection == "ROCK" && playerSelection == "SCISSORS") || (computerSelection == "PAPER" && playerSelection == "ROCK") || (computerSelection == "SCISSORS" && playerSelection == "PAPER")){
        console.log("COMPUTER = " + computerSelection);
        console.log("YOU = " + playerSelection);
        console.log(`You Lose!, ${computerSelection} beat ${playerSelection}.`);
        console.log("\n");
        result = "Lose";
    }
    else{
        console.log("COMPUTER = " + computerSelection);
        console.log("YOU = " + playerSelection);
        console.log(`You Win!, ${playerSelection} beat ${computerSelection}.`);
        console.log("\n");
        result = "Win";        
    }

    return result;
}

let Computer = 0;
let Player = 0;
let i = 0;
let result;


for ( i = 0; i < 5; i++){

    result = playRound();

    if(result == "Win"){
        Player++;
    }
    else if(result == "Draw"){
        Player++;
        Computer++;
    }
    else{
        Computer++;
    }
}

console.log("\n");
console.log("TOTAL POINTS!");
console.log("COMPUTER TOTAL = " + Computer + " POINT(S)");
console.log("YOUR TOTAL = " + Player + " POINT(S)");

if(Player > Computer){
    console.log("Congratulations! YOU WIN.");
}
else if(Player == Computer){
    console.log("IT A DRAW! Try more next time to Win.");
}
else{
    console.log("SORRY! YOU LOSE, BETTER LUCK NEXT TIME.");
}

console.log("\n RELOAD PAGE TO PLAY AGAIN!")