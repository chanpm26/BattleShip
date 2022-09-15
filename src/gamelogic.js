import { playerFactory } from "./factoryFunctions";
import { showMessage } from './dom'

let playerOne = playerFactory("playerOne", "person");
playerOne.gameBoard.placeShip("carrier", 5, [1, 2, 3, 4, 5]);
playerOne.gameBoard.placeShip("battleship", 4, [40, 41, 42, 43]);
playerOne.gameBoard.placeShip("submarine", 3, [57, 58, 59]);
playerOne.gameBoard.placeShip("cruiser", 3, [27, 28, 29]);
playerOne.gameBoard.placeShip("destroyer", 2, [99, 98]);

let playerTwo = playerFactory("playerTwo", "Computer");
playerTwo.gameBoard.placeShip("carrier", 5, [81, 82, 83, 84, 85]);
playerTwo.gameBoard.placeShip("battleship", 4, [63, 64, 65, 66]);
playerTwo.gameBoard.placeShip("submarine", 3, [22, 32, 42]);
playerTwo.gameBoard.placeShip("cruiser", 3, [57, 58, 59]);
playerTwo.gameBoard.placeShip("destroyer", 2, [79, 89]);

function disableSelfClicks(currentPlayer, boardOne, boardTwo) {
  if (currentPlayer == playerOne) {
    boardOne.style.pointerEvents = "none";
    boardTwo.style.pointerEvents = "auto";
  } else if (currentPlayer == playerTwo) {
    boardTwo.style.pointerEvents = "none";
    boardOne.style.pointerEvents = "auto";
  }
}

function gameOver(opposingPlayer) {
  let report = opposingPlayer.gameBoard.report();
  if (report == "All ships have sunk!") {
    return true;
  } else {
    return false;
  }
}

function checkGameStatus(gameStatus) {
  return gameStatus;
}

let gameStatus = "";

function getRandomCoordinates(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max-min) + min)
}


function playGameHelper(currentPlayer, opposingPlayer, tile, square) {
  let attack = currentPlayer.sendAttack(opposingPlayer.gameBoard, square);
  if (attack == "notvalid") {
    showMessage('That move is not valid. Please pick another tile.');
    return 'notvalid'
  }
  if (attack.attackStatus == true) {
    tile.style.backgroundColor = "green";
    showMessage('')
  } else if (attack == false) {
    tile.style.backgroundColor = "red";
    showMessage('')
  }
  if (attack.shipStatus == true) {
    showMessage("A ship becomes feast for the fishes!");
  }
  gameStatus = gameOver(opposingPlayer);
}


function playGame(currentPlayer, boardOne, boardTwo) {
  disableSelfClicks(currentPlayer, boardOne, boardTwo);
  let coordinates = Array.from(document.getElementsByClassName("gameSquare"));
  coordinates.forEach((tile) => {
    tile.addEventListener("click", function () {
      let square = tile.getAttribute("data-id");
      if (currentPlayer == playerOne) {
        let move = playGameHelper(currentPlayer, playerTwo, tile, square);
        if (move != 'notvalid') {
        currentPlayer = playerTwo;
        disableSelfClicks(currentPlayer, boardOne, boardTwo);
        playGame(currentPlayer, boardOne, boardTwo)
        }
      }
    });
  })
  if (currentPlayer == playerTwo) {
    let randomSquare = getRandomCoordinates(0, 99)
    let randomTile = document.querySelector(`[data-id="${randomSquare}"]`)
    setTimeout(() => {
    let move = playGameHelper(currentPlayer, playerOne, randomTile, randomSquare);
    if (move != 'notvalid') {
    currentPlayer = playerOne;
    disableSelfClicks(currentPlayer, boardOne, boardTwo);
    }
  }, 700)
}}

export {
  playerOne,
  playerTwo,
  playGame,
  gameOver,
  checkGameStatus,
  gameStatus
}
