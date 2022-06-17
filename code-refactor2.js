let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

// web page loads in at "start position" and thus this code works
// of the assumption of these basic facts
// 1. display box starts as "Would you like to play?"
// 2. all game info counters start at 0
// 3. all choice buttons start with greyout class

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function playRound (event) {



  // if either score === 5 alert(winner) and run endGame
  // else leave state as is, but set display back to make selection
  // and update round counter (nextRound function)
}

function setUpGame() {


}

function startGame() {
  roundCounter.textContent = currentRound;
  displayValue.textContent = "Make your Selection";
  startButton.classList.replace("styled", "greyout")
  startButton.removeEventListener("click", startGame);
  inputButtons.forEach(button => button.classList.replace("greyout", "styled"));
  inputButtons.forEach(button => button.addEventListener("click", playRound));
}


const roundCounter = document.querySelector(".current-round");
const inputButtons = document.querySelectorAll(".pick-button");
const displayValue = document.querySelector(".display-content");

// start game event switched to "play round position"
const startButton = document.querySelector(".game-button");
startButton.addEventListener("click", startGame);