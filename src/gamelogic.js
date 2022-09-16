import { playerFactory } from "./factoryFunctions";
import { showMessage, showGameOver } from "./dom";
import { getRandomCoordinates, createComputerCoordinates } from './computercoordinates'
import { getPositions, createShips } from './draganddrop'

let playerOne = playerFactory("playerOne", "person");
let gameStatus = "";
let lastComputerMove = ''

beginButton.addEventListener('click', function(){
  let positions = getPositions()
  let ships = createShips(positions.boxID, positions.shipID)
  playerOne.gameBoard.placeShip("carrier", ships.shipOne.length, ships.shipOne);
  playerOne.gameBoard.placeShip("battleship", ships.shipTwo.length, ships.shipTwo);
  playerOne.gameBoard.placeShip("submarine", ships.shipThree.length, ships.shipThree);
  playerOne.gameBoard.placeShip("cruiser", ships.shipFour.length, ships.shipFour);
  playerOne.gameBoard.placeShip("destroyer", ships.shipFive.length, ships.shipFive);
})


let computerCoordinates = createComputerCoordinates()
let playerTwo = playerFactory("playerTwo", "Computer");
playerTwo.gameBoard.placeShip("carrier", 5, computerCoordinates.firstShipCoordinates);
playerTwo.gameBoard.placeShip("battleship", 4, computerCoordinates.secondShipCoordinates);
playerTwo.gameBoard.placeShip("submarine", 3, computerCoordinates.thirdShipCoordinates);
playerTwo.gameBoard.placeShip("cruiser", 3, computerCoordinates.fourthShipCoordinates);
playerTwo.gameBoard.placeShip("destroyer", 2, computerCoordinates.fifthShipCoordinates);


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


function playGameHelper(currentPlayer, opposingPlayer, tile, square) {
  let attack = currentPlayer.sendAttack(opposingPlayer.gameBoard, square);
  if (attack == "notvalid") {
    if (currentPlayer == playerOne) {
    showMessage("That move is not valid. Please pick another tile.");
    }
    return "notvalid";
  }
  if (attack.attackStatus == true) {
    tile.style.backgroundColor = "green";
    showMessage("");
  } else if (attack == false) {
    tile.style.backgroundColor = "red";
    showMessage("");
  }
  if (attack.shipStatus == true) {
    showMessage("A ship becomes feast for the fishes!");
  }
  gameStatus = gameOver(opposingPlayer);
  return attack
}

function playGame(currentPlayer, boardOne, boardTwo) {
  disableSelfClicks(currentPlayer, boardOne, boardTwo);
  let coordinates = Array.from(document.getElementsByClassName("gameSquare"));
  coordinates.forEach((tile) => {
    tile.addEventListener("click", function () {
      let square = tile.getAttribute("data-id");
      if (currentPlayer == playerOne) {
        let move = playGameHelper(currentPlayer, playerTwo, tile, square);
        if (move != "notvalid") {
          currentPlayer = playerTwo;
          disableSelfClicks(currentPlayer, boardOne, boardTwo);
          playGame(currentPlayer, boardOne, boardTwo);
        }
        if (checkGameStatus(gameStatus) == true) {
          if (currentPlayer == playerOne) {
            showGameOver("Computer");
          } else {
            showGameOver(playerOneName.textContent);
          }
        }
      }
    });
  });
  if (currentPlayer == playerTwo) {
    if (lastComputerMove != '') {
      let neighborSquare = lastComputerMove + 1
      let tile = document.querySelector(`[data-id="${neighborSquare}"]`)
      setTimeout(() => {
      let move = playGameHelper(currentPlayer, playerOne, tile, neighborSquare)
      while (move == 'notvalid') {
        let randomSquare = getRandomCoordinates(0, 99);
        let randomTile = document.querySelector(`[data-id="${randomSquare}"]`);
        move = playGameHelper(
          currentPlayer,
          playerOne,
          randomTile,
          randomSquare)
      }
      if (move != "notvalid") {
        currentPlayer = playerOne;
        disableSelfClicks(currentPlayer, boardOne, boardTwo);
        if (move.attackStatus == true && move.shipStatus == false) {
          lastComputerMove = neighborSquare
        } else {
          lastComputerMove = ''
        }
      }
    }, 700);
    } else {
    let randomSquare = getRandomCoordinates(0, 99);
    let randomTile = document.querySelector(`[data-id="${randomSquare}"]`);
    setTimeout(() => {
      let move = playGameHelper(
        currentPlayer,
        playerOne,
        randomTile,
        randomSquare
      );
      while (move == 'notvalid') {
        let randomSquare = getRandomCoordinates(0, 99);
        let randomTile = document.querySelector(`[data-id="${randomSquare}"]`);
        move = playGameHelper(
          currentPlayer,
          playerOne,
          randomTile,
          randomSquare)
      }
      if (move != "notvalid") {
        currentPlayer = playerOne;
        disableSelfClicks(currentPlayer, boardOne, boardTwo);
        if (move.attackStatus == true && move.shipStatus == false) {
          lastComputerMove = randomSquare
        } else {
          lastComputerMove = ''
        }
      }
    }, 700);
  }
}
}

export {
  playerOne,
  playerTwo,
  playGame,
  gameOver,
  checkGameStatus,
  gameStatus,
};
