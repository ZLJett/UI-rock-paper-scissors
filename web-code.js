function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let currentRound = 1;

  // replace with WHILE LOOP = score less than 5
  // play rounds until one player reaches 5 points 
  for (let i = 0; i < 5; i++) {
    // set up game round
    const roundCounter = document.querySelector(".current-round");
    roundCounter.textContent = currentRound;
    displayValue.textContent = "Make your Selection";

  }

}


function startGame(event) {
  displayValue.textContent = "";
  startButton.classList.replace("styled", "greyout")
  startButton.removeEventListener("click", startGame);
  let gameResult = playGame();

  console.log("StartGame End")
}

const displayValue = document.querySelector(".display-content");
const startButton = document.querySelector(".game-button");
startButton.addEventListener("click", startGame);