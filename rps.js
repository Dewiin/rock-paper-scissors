let humanScore = 0;
let computerScore = 0;

// create score
function createScore() {
  const human = document.createElement("p");
  human.classList.add("humanScore");

  const bot = document.createElement("p");
  bot.classList.add("botScore");

  const left = document.querySelector(".human");
  left.appendChild(human);

  const right = document.querySelector(".bot");
  right.appendChild(bot);
}

// update scoreboard
function updateScore() {
  const human = document.querySelector(".humanScore");
  human.textContent = humanScore;

  const bot = document.querySelector(".botScore");
  bot.textContent = computerScore;
}

// get computer choice
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
  result = document.querySelector(".result");
  if((human=="rock" && computer=="scissor")||(human=="paper" && computer=="rock")||
  (human=="scissor" && computer=="paper")) {
    console.log(`You win! ${human} beats ${computer}.`);
    result.textContent = `You win! ${human} beats ${computer}.`;
    humanScore++;
  }
  else if(human!=computer){
    console.log(`You lose! ${human} loses to ${computer}.`);
    result.textContent = `You lose! ${human} loses to ${computer}.`;
    computerScore++;
  }
  else {
    console.log(`It's a tie! You both chose ${human}.`)
    result.textContent = `It's a tie! You both chose ${human}.`;
  }
}

function restart() {
  humanScore = 0;
  computerScore = 0;
}

function playGame() {
  createScore();
  updateScore();

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let humanChoice = button.id;
      let botChoice = getComputerChoice();
      playRound(humanChoice, botChoice);
      updateScore();
      if(humanScore == 5) {
        alert("You win! You scored 5 points first!");
        restart();
        updateScore();
      }
      else if(computerScore == 5) {
        alert("You lost! The bot scored 5 points first!");
        restart();
        updateScore();
      }
    });
  });

}

playGame();