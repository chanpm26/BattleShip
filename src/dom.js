
function showGameBoard(){
    const welcomeScreenContainer = document.getElementById('welcomeScreenContainer')
    const mainContainer = document.getElementById('main-container')
    welcomeScreenContainer.classList.add('hidden');
    mainContainer.classList.remove('hidden')
}

function createGameBoard(player, board){
    for (let i=0; i<player.gameBoard.board.length; i++) {
        let gameSquare = document.createElement('div');
        gameSquare.classList.add('gameSquare')
        gameSquare.classList.add(player.playerName)
        gameSquare.setAttribute("data-id", i);
        board.appendChild(gameSquare)
        if (player.gameBoard.board[i] != "") {
            let shipIcon = document.createElement('img')
            shipIcon.src = '/dist/ship.png'
            gameSquare.appendChild(shipIcon)
        }
    }
}

function addPlayerName(player, playerName) {
    if (playerName != "") {
    player.textContent = playerName
    } else {
        player.textContent = "Anonymous Challenger"
    }
}


export {createGameBoard, showGameBoard, addPlayerName }