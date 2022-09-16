import {
  createGameBoard,
  showSelectionScreen,
  showSelectBoard,
  showGameBoard,
  addPlayerName,
  newGame,
} from "./dom";
import {
  playerOne,
  playerTwo,
  playGame,
} from "./gamelogic";
import { allowDrag, allowDrop, checkPositions } from "./draganddrop";

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
  showSelectBoard();
  allowDrag();
  allowDrop();
  checkPositions();
});

beginButton.addEventListener("click", function () {
  showGameBoard();
  addPlayerName(playerOneName, playerName);
  createGameBoard(playerOne, boardOne);
  createGameBoard(playerTwo, boardTwo);
})

beginButton.addEventListener("click", function () {
  playGame(currentPlayer, boardOne, boardTwo);
});


newGameButton.onclick = newGame;
