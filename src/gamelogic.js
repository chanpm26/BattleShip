import { playerFactory } from "./factoryFunctions";

let playerOne = playerFactory("playerOne", "person")
playerOne.gameBoard.placeShip('five', 5, [1, 2, 3, 4, 5])
playerOne.gameBoard.placeShip('four', 4, [40, 41, 42, 43])
playerOne.gameBoard.placeShip('three', 3, [57, 58, 59])
playerOne.gameBoard.placeShip('two', 5, [99, 98])

let playerTwo = playerFactory("playerTwo", "Computer")
playerTwo.gameBoard.placeShip('five', 5, [81, 82, 83, 84, 85])
playerTwo.gameBoard.placeShip('four', 4, [63, 64, 65, 66])
playerTwo.gameBoard.placeShip('three', 3, [22, 32, 42])
playerTwo.gameBoard.placeShip('two', 5, [79, 89])

function disableSelfClicks(currentPlayer, boardOne, boardTwo) {
  if (currentPlayer == playerOne) {
  boardOne.style.pointerEvents = 'none'
  boardTwo.style.pointerEvents = 'auto'
} else if (currentPlayer == playerTwo) {
  boardTwo.style.pointerEvents = 'none'
  boardOne.style.pointerEvents = 'auto'
}
}

function playGame(currentPlayer, boardOne, boardTwo) {

  disableSelfClicks(currentPlayer, boardOne, boardTwo)
let coordinates = Array.from(document.getElementsByClassName("gameSquare"));
coordinates.forEach((tile) => {
    tile.addEventListener("click", function () {
      let square = tile.getAttribute("data-id");
      if (currentPlayer == playerOne) {
        let attack = playerOne.sendAttack(playerTwo.gameBoard, square);
        if (attack.attackStatus == true) {
            tile.style.backgroundColor = "green"
        } else {
            tile.style.backgroundColor = 'red'
        }
        if (attack.shipStatus == true) {
          console.log("A ship becomes feast for the fishes")
        }
        currentPlayer = playerTwo  
        disableSelfClicks(currentPlayer, boardOne, boardTwo)
      } else if (currentPlayer == playerTwo) {
        let attack = playerTwo.sendAttack(playerOne.gameBoard, square)
        if (attack.attackStatus == true) {
            tile.style.backgroundColor = "green"
        } else {
            tile.style.backgroundColor = 'red'
        }
        if (attack.shipStatus == true) {
          console.log("The waves will strip this ship to its bones...")
        }
        currentPlayer = playerOne
        disableSelfClicks(currentPlayer, boardOne, boardTwo)
      } 
    });
  });

  
}



export {playerOne, playerTwo, playGame}