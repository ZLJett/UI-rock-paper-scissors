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
    // get player input
    inputButtons.forEach(button => button.addEventListener("click", event => {
      playerSelection = event.textContent;
// TODO: ADD GREYOUT ONCE CAPTURE HAPPENS
      console.log(playerSelection);
    }, { once: true }));

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