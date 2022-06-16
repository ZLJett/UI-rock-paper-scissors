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

function playRound(playerSelection, computerSelection) {
  let resultMessage = "";
  switch (true) {
    case (playerSelection === computerSelection):
      resultMessage = "tie";
      break;
    case (playerSelection === "rock" && computerSelection === "scissors"):
      resultMessage = "player win";
      break;
    case (playerSelection === "paper" && computerSelection === "rock"):
      resultMessage = "player win";
      break;
    case (playerSelection === "scissors" && computerSelection === "paper"):
      resultMessage = "player win";
      break;
    default:
      resultMessage = "computer win";
  }
  return resultMessage;
}

function selectionPic (selection) {
  let picSrc = "";
  switch (selection) {
    case "rock":
      result = "./images/rock-usgs-unsplash.jpg";
      break;
    case "paper":
      result = "./images/paper-david-maier-unsplash.jpg";
      break;
    case "scissors":
      result = "./images/scissors-matt-artz-unsplash.jpg";
      break;
  }
  return picSrc;
}

function setPlayerPic(picSrc) {
  const playerCard = document.querySelector(".player-selection");
  playerCard.setAttribute("src", picSrc);
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
    roundCounter.textContent = currentRound;
    displayValue.textContent = "Make your Selection";
    inputButtons.forEach(button => button.classList.replace("greyout", "styled"));
    // get player selection and computer selection and display choices
    let playerSelection = "";
    inputButtons.forEach(button => button.addEventListener("click", event => {
      playerSelection = event.textContent.toLowerCase();
      inputButtons.forEach(button => button.classList.replace("styled", "greyout"));
      console.log(playerSelection);
    }, { once: true }));
    let computerSelection = computerPlay();
    // find winner of round
    let roundResult = playRound(playerSelection, computerSelection);
    // stager display of selections and round winner
    let playerPic = selectionPic(playerSelection);
    let computerPic = selectionPic(computerSelection);
    setPlayerPic(playerPic);

    // 1, display player pic
    // 2. display computer function (for delay)
    // 3. then display winner (with delay to keep next round from starting)





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