function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setUpGame() {
  displayValue.textContent = "";
  startButton.classList.replace("styled", "greyout")
  startButton.removeEventListener("click", startGame);
}

function setUpRound() {
  const roundCounter = document.querySelector(".current-round");
  roundCounter.textContent = currentRound;
  displayValue.textContent = "Make your Selection";                                     // move
  inputButtons.forEach(button => button.classList.replace("greyout", "styled"));
}

function getPlayerSelection() {
  let playerSelection = "";
  inputButtons.forEach(button => button.addEventListener("click", event => {
    playerSelection = event.textContent.toLowerCase();
    inputButtons.forEach(button => button.classList.replace("styled", "greyout"));
  }, { once: true }));
  return playerSelection;
}

async function playGame(event) {
  let playerScore = 0;
  let computerScore = 0;
  let currentRound = 1;
  setUpGame()
  while (playerScore < 5 && computerScore < 5) {
    setUpRound()
    let playerSelection = getPlayerSelection()


  }
  console.log("Game End")
}

const inputButtons = document.querySelectorAll(".pick-button");
const displayValue = document.querySelector(".display-content");
const startButton = document.querySelector(".game-button");
startButton.addEventListener("click", playGame);