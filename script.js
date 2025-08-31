// console.log("Hello World!");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * 3)];
  console.log(choice);
}

function getHumanChoice() {
  let choice = prompt("What would you like to play (rock, paper, or scissors)?");
  console.log(choice);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It is a tie! You selected: ${humanChoice} & Computer selected: ${computerChoice}`);
  }
}

playRound("scissors", "scissors");
