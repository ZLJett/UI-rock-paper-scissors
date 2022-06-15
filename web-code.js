function getRndInteger() {
  return Math.floor(Math.random() * (3 - 0)) + 0;
}

function computerPlay() {
  let choice = getRndInteger();
  let result = "";
  switch (choice) {
    case 0:
      result = "rock";
      break;
    case 1:
      result = "paper";
      break;
    case 2:
      result = "scissors";
      break;
  }
  return result;
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let currentRound = 1;
  // play rounds until one player reaches 5 points
  while (playerScore < 5 && computerScore < 5) {
    // set up game round
    const roundCounter = document.querySelector(".current-round");
    const inputButtons = document.querySelectorAll(".pick-button");
    let playerSelection = "";
    roundCounter.textContent = currentRound;
    displayValue.textContent = "Make your Selection";
    inputButtons.forEach(button => button.classList.replace("greyout", "styled"));
    // get player selection and computer selection
    inputButtons.forEach(button => button.addEventListener("click", event => {
      playerSelection = event.textContent.toLowerCase();
      inputButtons.forEach(button => button.classList.replace("styled", "greyout"));
      console.log(playerSelection);
    }, { once: true }));
    let computerSelection = computerPlay();



  }

}


function startGame(event) {
  displayValue.textContent = "";
  startButton.classList.replace("styled", "greyout")
  startButton.removeEventListener("click", startGame);
  // let gameResult = playGame();

  console.log("StartGame End")
}

const displayValue = document.querySelector(".display-content");
const startButton = document.querySelector(".game-button");
startButton.addEventListener("click", startGame);