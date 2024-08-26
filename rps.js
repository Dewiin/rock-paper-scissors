let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissor?");
  while(choice.toLowerCase()!="rock" && choice.toLowerCase()!="paper" && choice.toLowerCase()!="scissor"){
    choice = prompt("Rock, Paper, or Scissor?")
  }
  return choice.toLowerCase();
}

function getComputerChoice() {
  let choice = Math.random();
  if(choice < .33) {
    return "rock";
  }
  if(choice > .66) {
    return "scissor";
  }
  return "paper";
}

function playRound(human, computer) {
  if((human=="rock" && computer=="scissor")||(human=="paper" && computer=="rock")||
  (human=="scissor" && computer=="paper")) {
    console.log(`You win! ${human} beats ${computer}.`);
    humanScore++;
  }
  else if(human!=computer){
    console.log(`You lose! ${human} loses to ${computer}.`);
    computerScore++;
  }
  else {
    console.log(`It's a tie! You both chose ${human}.`)
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  for(let i = 0; i < 5; i++) {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    playRound(human, computer);
  }
  if(humanScore > computerScore) {
    console.log(`You won the game! You scored ${humanScore} points and the bot scored ${computerScore} points.`);
  }
  else if (computerScore > humanScore) {
    console.log(`You lost the game! You scored ${humanScore} points and the bot scored ${computerScore} points.`);
  }
  else {
    console.log(`It's a tie! You both scored ${humanScore}.`);
  }
}

playGame();
