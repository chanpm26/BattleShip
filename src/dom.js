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
    square.classList.add('selectSquare');
    square.classList.add('droppable');
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
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.classList.add("hidden");
  const gameOverContainer = document.getElementById("gameOverContainer");
  gameOverContainer.classList.remove('hidden')
  let displayWinnerText = document.createElement("h1");
  displayWinnerText.innerText = `The game is over. ${currentPlayer} has won!`;
  gameOverContainer.appendChild(displayWinnerText);
  const newGameButton = document.createElement("button");
  newGameButton.textContent = "Start New Game";
  newGameButton.classList.add("newgame");
  newGameButton.onclick = newGame;
  gameOverContainer.appendChild(newGameButton);
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
