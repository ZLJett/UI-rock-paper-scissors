let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

// web page loads in at "start position" and thus this code works
// of the assumption of these basic facts
// 1. display box starts as "Would you like to play?"
// 2. all game info counters start at 0
// 3. all choice buttons start with greyout class

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

function roundWinner(playerSelection, computerSelection) {
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

function selectionPic(selection) {
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

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setComputerPic(picSrc) {
  const computerCard = document.querySelector(".computer-selection");
  computerCard.setAttribute("src", picSrc);
}

function updateScore(roundWinner) {
  if (roundWinner === "player win") {
    playerScore += 1;
    playerScoreCard.textContent = playerScore;
  } else if (roundWinner === "computer win") {
    computerScore += 1;
    computerScoreCard.textContent = computerScore;
  }
}

function gameWinner() {
  let winnerMessage = "";
  if (playerScore >= 5) {
    winnerMessage = "The player wins the game!";
  } else {
    winnerMessage = "The computer wins the game!";
  }
  return winnerMessage.toUpperCase();
}

// display game winner and switch from "play round position" to "start game position"
async function endGame() {
  // display game winner
  let winnerMessage = gameWinner();
  displayValue.textContent = winnerMessage;
  // delay so winner message sits for a little bit
  await delay(6000);
  // reset display to start game position
  displayValue.textContent = "Would you like to play?";
  // reset score and round counters and display to start game position
  playerScore = 0;
  computerScore = 0;
  currentRound = 1;
  playerScoreCard.textContent = playerScore;
  computerScoreCard.textContent = computerScore;
  roundCounter.textContent = currentRound;
  // reset selection picture boxes to empty
  setPlayerPic("");
  setComputerPic("");
  // reset start button and listener so new game can be played
  startButton.classList.replace("greyout", "styled");
  startButton.addEventListener("click", startGame);
}

function nextRound() {
  // display to play round starting position
  displayValue.textContent = "Make your Selection";
  // update round counter to next round
  currentRound += 1;
  roundCounter.textContent = currentRound;
  // reset selection picture boxes to empty
  setPlayerPic("");
  setComputerPic("");
  // reset playRound buttons and listener to continue play round loop
  inputButtons.forEach(button => button.classList.replace("greyout", "styled"));
  inputButtons.forEach(button => button.addEventListener("click", playRound));
}

// Play round each time selection made and at end checks to see if game is won
async function playRound(event) {
  // disable input buttons while round is played
  inputButtons.forEach(button => button.classList.replace("styled", "greyout"));
  inputButtons.forEach(button => button.removeEventListener("click", playRound));
  // get player and computer selections
  let playerSelection = event.target.textContent.toLowerCase();
  let computerSelection = computerPlay();
  let roundWinner = roundWinner(playerSelection, computerSelection);
  // display player selection picture then computer selection picture after delay
  let playerPic = selectionPic(playerSelection);
  let computerPic = selectionPic(computerSelection);
  setPlayerPic(playerPic);
  await delay(1500);
  setComputerPic(computerPic);
  // display winner message
  displayValue.textContent = roundWinner.toUpperCase() + "!";
  // update score counter and display
  updateScore(roundWinner);
  // TO-DO add delay before check to give some time with result before any switches

  // check if a player has won the game
  if (playerScore >= 5 || computerScore >= 5) {
    endGame()
  } else {
    nextRound()
  }
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
const playerScoreCard = document.querySelector(".player-score");
const computerScoreCard = document.querySelector(".computer-score");
const inputButtons = document.querySelectorAll(".pick-button");
const displayValue = document.querySelector(".display-content");
const startButton = document.querySelector(".game-button");
startButton.addEventListener("click", startGame);