// console.log("Hello World!");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}

function getHumanChoice() {
  let choice = prompt("What would you like to play (rock, paper, or scissors)?");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It is a tie! You selected: ${humanChoice} & Computer selected: ${computerChoice}`);
    computerScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log(`You selected: ${humanChoice} & Computer selected: ${computerChoice} --> Computer Wins!`);
    computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log(`You selected: ${humanChoice} & Computer selected: ${computerChoice} --> Computer Wins!`);
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log(`You selected: ${humanChoice} & Computer selected: ${computerChoice} --> Computer Wins!`);
    computerScore += 1;
  } else {
    console.log(`You selected: ${humanChoice} & Computer selected: ${computerChoice} --> The Human Race Wins! Congrats!`);
    humanScore++;
  }
}

playRound(getHumanChoice(), getComputerChoice());

//need to fix increment error; not holding value as anticipated.
console.log(`Human Score:${humanScore} Computer Score:${computerScore}`);
