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

// Play round each time selection made and at end checks to see if game is won
function playRound(event) {
  // disable input buttons while round is played
  inputButtons.forEach(button => button.classList.replace("styled", "greyout"));
  inputButtons.forEach(button => button.removeEventListener("click", playRound));
  // get player and computer selections
  let playerSelection = event.target.textContent.toLowerCase()
  





  // if either score === 5 alert(winner) and run endGame (which switches back "position")
  // else leave state as is, but set display back to make selection
  // and update round counter (nextRound function)
}


// switch from "start game position" to "play round position"
function startGame() {
  // deactivate "Start New Game" button
  startButton.classList.replace("styled", "greyout");
  startButton.removeEventListener("click", startGame);
  // switch to play round position
  roundCounter.textContent = currentRound;
  displayValue.textContent = "Make your Selection";
  inputButtons.forEach(button => button.classList.replace("greyout", "styled"));
  // a round will be played with each click, until game end conditions are met
  inputButtons.forEach(button => button.addEventListener("click", playRound));
}

const roundCounter = document.querySelector(".current-round");
const inputButtons = document.querySelectorAll(".pick-button");
const displayValue = document.querySelector(".display-content");
const startButton = document.querySelector(".game-button");
startButton.addEventListener("click", startGame);