import {
  createGameBoard,
  showSelectionScreen,
  showGameBoard,
  addPlayerName,
  newGame,
  showGameOver,
} from "./dom";
import {
  playerOne,
  playerTwo,
  playGame,
  checkGameStatus,
  gameStatus,
} from "./gamelogic";

const boardOne = document.getElementById("boardOne");
const boardTwo = document.getElementById("boardTwo");
const prepareButton = document.getElementById('prepareButton')
const beginButton = document.getElementById("beginButton");
const playerOneName = document.getElementById("playerOneName");
const newGameButton = document.getElementById("newGameButton");
let playerNameInput = document.getElementById("playerName");
let currentPlayer = playerOne;

let playerName = "";
playerNameInput.addEventListener("input", function () {
  playerName = playerNameInput.value;
});

prepareButton.addEventListener("click", function () {
  showSelectionScreen();
  addPlayerName(playerOneName, playerName);
  createGameBoard(playerOne, boardOne);
  createGameBoard(playerTwo, boardTwo);
});

beginButton.addEventListener("click", function () {
  showGameBoard();
})

beginButton.addEventListener("click", function () {
  playGame(currentPlayer, boardOne, boardTwo);
  let coordinates = Array.from(document.getElementsByClassName("gameSquare"));
  coordinates.forEach((tile) => {
    tile.addEventListener("click", function () {
      if (checkGameStatus(gameStatus) == true) {
        if (currentPlayer == playerOne) {
          showGameOver(playerOneName.textContent);
        } else {
          showGameOver("Computer");
        }
      }
    });
  });
});

newGameButton.onclick = newGame;
