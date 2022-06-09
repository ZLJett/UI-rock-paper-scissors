// testing dif in branches 

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

function howWon(result) {
  let howMessage = "";
  switch (true) {
    case (result === "rock"):
      howMessage = "Rock beats Scissors!";
      break;
    case (result === "paper"):
      howMessage = "Paper beats Rock!";
      break;
    case (result === "scissors"):
      howMessage = "Scissors beats Paper!";
      break;
  }
  return howMessage;
}

function determineWinner(playerScore, computerScore) {
  let winner = "";
  let gameMessage = "";
  // determine winner
  switch (true) {
    case (playerScore > computerScore):
      winner = "player";
      break;
    case (computerScore > playerScore):
      winner = "computer";
      break;
    default:
      winner = "tie";
  }
  // make winner message
  if (winner === "tie") {
    let numToWord = {
      "1": "once",
      "2": "twice"
    }
    gameMessage = "The game was a tie! You both won " + numToWord[playerScore.toString()];
  } else {
    gameMessage = "The " + winner + " wins: Player: " + playerScore + ", Computer: " + computerScore;
  }
  let gameResult = [gameMessage, winner];
  return gameResult;
}

function gameInput() {
  let tries = 0;
  // Ask up to three times for the player's selection
  while (tries <= 3) {
    let playerInput = prompt("Enter either rock, paper, or scissors:", "rock");
    let playerSelection = playerInput.toLowerCase().trim();
    // Check if player entered valid selection and return any valid selection
    switch (playerSelection) {
      case "rock":
        return "rock";
        break;
      case "paper":
        return "paper";
        break;
      case "scissors":
        return "scissors";
        break;
      //easter egg
      case "bob":
        console.log("Hello Bob!");
        break;
    }
    // If no valid selection tell player and let them know number of remaining tries
    switch (true) {
      case (tries === 0):
        console.log("Your entry is invalid. Please try again");
        break;
      case (tries === 1):
        console.log("Your entry is invalid. You have two more tries");
        break;
      case (tries === 2):
        console.log("Your entry is invalid. You have one more try remaining");
        break;
    }
    tries += 1;
  }
  // If after three tries no valid entry send invalid as response to game function
  return "invalid";
}

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let currentRound = 1;
  // play five rounds
  for (let i = 0; i < 5; i++) {
    console.log("** Round: " + currentRound.toString() + " **");
    let playerSelection = gameInput();
    if (playerSelection === "invalid") {
      return "Too many invalid entries!";
    }
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log("The computer chose: " + capitalizeFirst(computerSelection));
    if (roundResult === "player win") {
      let howMessage = howWon(playerSelection);
      console.log("You Won! " + howMessage);
      playerScore += 1;
    } else if (roundResult === "computer win") {
      let howMessage = howWon(computerSelection);
      console.log("You lost! " + howMessage);
      computerScore += 1;
    } else {
      console.log("Tie! You both chose " + capitalizeFirst(playerSelection));
    }
    currentRound += 1;
  }
  // determine winner
  let winner = determineWinner(playerScore, computerScore);
  return winner;
}

function gameControlInput(numGames) {
  let tries = 0;
  let playerInput = "";
  // Ask up to three times for the player's selection
  while (tries <= 3) {
    if (numGames === 0) {
      playerInput = prompt("Would you like to play a game of Rock-Paper-Scissors?", "no");
    } else {
      playerInput = prompt("Would you like to play another game of Rock-Paper-Scissors?", "no");
    }
    let playerSelection = playerInput.toLowerCase().trim();
    // Check if player entered valid selection and return any valid selection
    switch (playerSelection) {
      case "yes":
        return "yes";
        break;
      case "no":
        return "no";
        break;
    }
    // If no valid selection tell player and let them know number of remaining tries
    switch (true) {
      case (tries === 0):
        console.log("Your entry is invalid. Please try again");
        break;
      case (tries === 1):
        console.log("Your entry is invalid. You have two more tries");
        break;
      case (tries === 2):
        console.log("Your entry is invalid. You have one more try remaining");
        break;
    }
    tries += 1;
  }
  return "invalid";
}

function gameControl() {
  // ask if they want to play
  let numGames = 0;
  let tiesCount = 0;
  let playerWins = 0;
  let computerWins = 0;
  let answer = gameControlInput(numGames);
  if (answer === "invalid") {
    console.log("Too many invalid entries!");
  }
  if (answer === "yes") {
    let keepGoing = true;
    while (keepGoing) {
      let currentGame = (numGames + 1).toString();
      console.log("*** Game " + currentGame + " ***");
      // play a game and display result
      let gameResult = game();
      console.log("*** Game Result ***");
      console.log(gameResult[0]);
      switch (gameResult[1]) {
        case "player":
          playerWins += 1;
          break;
        case "computer":
          computerWins += 1;
          break;
        case "tie":
          tiesCount += 1;
          break;
      }
      if (numGames > 0) {
        console.log("** Results of last " + currentGame + " games: **")
        console.log("      Player wins: " + playerWins.toString() + ", Computer wins: " + computerWins.toString() + ", Ties: " + tiesCount.toString())
      }
      // ask if want to play again
      numGames += 1;
      let goAgain = gameControlInput(numGames);
      if (goAgain === "no") {
        keepGoing = false;
      } else if (goAgain === "invalid") {
        console.log("Too many invalid entries!");
        keepGoing = false;
      }
    }
  }
  // if no or they are done say goodbye
  console.log("Goodbye!");
}