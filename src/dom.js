function showSelectionScreen() {
  const welcomeScreenContainer = document.getElementById(
    "welcomeScreenContainer"
  );
  welcomeScreenContainer.classList.add("hidden");
  const selectScreenContainer = document.getElementById(
    "selectScreenContainer"
  );
  selectScreenContainer.classList.remove("hidden");
}

function showSelectBoard() {
  const selectBoard = document.getElementById("selectBoard");
  for (let i = 0; i < 100; i++) {
    let square = document.createElement("div");
    square.classList.add("selectSquare");
    square.classList.add("droppable");
    square.setAttribute("set-id", i);
    selectBoard.appendChild(square);
  }
}

function showGameBoard() {
  const selectScreenContainer = document.getElementById(
    "selectScreenContainer"
  );
  selectScreenContainer.classList.add("hidden");
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.classList.remove("hidden");
}

function createGameBoard(player, board) {
  for (let i = 0; i < player.gameBoard.board.length; i++) {
    let gameSquare = document.createElement("div");
    gameSquare.classList.add("gameSquare");
    gameSquare.classList.add(player.playerName);
    gameSquare.setAttribute("data-id", i);
    board.appendChild(gameSquare);
  }
}

function addPlayerName(player, playerName) {
  if (playerName != "") {
    player.textContent = playerName;
  } else {
    player.textContent = "Anonymous Challenger";
  }
}

function newGame() {
  location.reload();
}

function showGameOver(currentPlayer) {
  const gameOverContainer = document.getElementById("gameOverContainer");
  let displayWinnerText = document.getElementById("gameWinnerText");
  displayWinnerText.innerText = `The game is over. ${currentPlayer} has won!`;
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.classList.add("hidden");
  gameOverContainer.classList.remove("hidden");
  const newGameButton = document.getElementById("startNewGameButton");
  newGameButton.onclick = newGame;
}

function showMessage(message) {
  const messageContainer = document.getElementById("message");
  messageContainer.textContent = message;
}

export {
  createGameBoard,
  showSelectionScreen,
  showSelectBoard,
  showGameBoard,
  addPlayerName,
  newGame,
  showGameOver,
  showMessage,
};
