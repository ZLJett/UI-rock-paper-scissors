function startGame(event) {
  let displayValue = document.querySelector(".display-content");
  displayValue.textContent = "Test Test Test";

  console.log("StartGame End")

}


const startButton = document.querySelector(".game-button");
startButton.addEventListener("click", startGame);