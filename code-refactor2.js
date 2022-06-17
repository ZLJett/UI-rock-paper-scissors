let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

// web page loads in at "start position"
// 1. display box starts as "Would you like to play?"
// 2. all game info counters start at 0
// 3. all choice buttons start with greyout class












// start game event switched to "play round position"
const startButton = document.querySelector(".game-button");
startButton.addEventListener("click", playGame);