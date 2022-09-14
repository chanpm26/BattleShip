import { createGameBoard, showGameBoard, addPlayerName } from "./dom";
import { playerOne, playerTwo, playGame } from "./gamelogic";

const boardOne = document.getElementById("boardOne");
const boardTwo = document.getElementById("boardTwo");
const beginButton = document.getElementById("begin-button");
const playerOneName = document.getElementById("playerOneName");
let playerNameInput = document.getElementById("player-name");
let currentPlayer = playerOne;

let playerName = "";
playerNameInput.addEventListener("input", function () {
  playerName = playerNameInput.value;
});

beginButton.addEventListener("click", function () {
  showGameBoard();
  addPlayerName(playerOneName, playerName);
  createGameBoard(playerOne, boardOne);
  createGameBoard(playerTwo, boardTwo);
  playGame(currentPlayer, boardOne, boardTwo)
});


