function playGame() {


}


function startGame(event) {
  const displayValue = document.querySelector(".display-content");
  displayValue.textContent = "";
  startButton.classList.replace("styled", "greyout")
  startButton.removeEventListener("click", startGame);
  let gameResult = playGame();

  console.log("StartGame End")
}


const startButton = document.querySelector(".game-button");
startButton.addEventListener("click", startGame);