// web page loads in at "start position" and thus this code works
// of the assumption of these basic facts
// 1. display box starts as "Would you like to play?"
// 2. all game info counters start at 0
// 3. all choice buttons start with greyout class

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setUpGame() {
  displayValue.textContent = "";
  startButton.classList.replace("styled", "greyout")
  startButton.removeEventListener("click", startGame);
}

function startGame() {
  let playerScore = 0;   // move!!!!!!!!!!
  let computerScore = 0;
  let currentRound = 1;
  setUpGame()
  // idea here is that this listener is now just active, and is
  // responsible for ending / removing itself and resetting everything
  inputButtons.forEach(button => button.addEventListener("click", playRound));
}



const inputButtons = document.querySelectorAll(".pick-button");
const displayValue = document.querySelector(".display-content");

// start game event switched to "play round position"
const startButton = document.querySelector(".game-button");
startButton.addEventListener("click", startGame);