const shipFactory = (
  nameOfShip,
  length,
  coordinates = [],
  whereHit = [],
  sunkStatus = false
) => {
  const hit = (number) => {
    number = parseInt(number)
   if (coordinates.includes(number)) {
        whereHit.push(number);
        return true
      } else {
        return false
      }
    };
  const isSunk = function (sunkStatus) {
    if (length == whereHit.length) {
      sunkStatus = true;
      return sunkStatus;
    } else {
    sunkStatus = false;
    return sunkStatus;
  }};
  return { nameOfShip, length, coordinates, whereHit, sunkStatus, hit, isSunk };
};


//gameBoard is 10x10

const gameBoardFactory = () => {
  let board = [
    [], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], [], [], []
  ]
  let listOfShips = [];
  let missedAttacks = []
  let successfulAttacks = []
  const placeShip = function (nameOfShip, length, coordinates) {
    let newShip = shipFactory(nameOfShip, length, coordinates);
    coordinates.forEach(coordinate =>
      board[coordinate].push(newShip))
    listOfShips.push(newShip);
    return board;
  };
  const receiveAttack = function(number) {
    if (board[number] != "") {
      successfulAttacks.push(number);
      let attackStatus = board[number][0].hit(number);
      let shipStatus = board[number][0].isSunk()
      return {attackStatus, shipStatus}
    } else {      
      missedAttacks.push(number);
      return false
    } 
  };
  const report = function() {
    let checkStatus = listOfShips.map((ship) => {
      if (ship.sunkStatus == true) {
        return true;
      } else {
        return false;
      }
    });
    if (checkStatus.includes(false)) {
      return "There are still alive ships";
    } else {
      return "All ships have sunk!";
    }
  };

  return { board, listOfShips, missedAttacks, placeShip, receiveAttack, report };
};

//player Factory

function getRandomCoordinates(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max-min) + min)
}

const playerFactory = function(playerName, playerType) {
  const gameBoard = gameBoardFactory();   
    const sendAttack = function(board, coordinate) {
      let attackStatus = 'valid'
      if (board.missedAttacks.includes(coordinate)) {
          attackStatus = 'notValid'
          return attackStatus
        } else if (board.successfulAttacks != undefined && board.successfulAttacks.includes(coordinate)) {
          attackStatus = 'notValid'
          return attackStatus
       }
       if (attackStatus == 'valid') {
        let result = board.receiveAttack(coordinate)
        return result
       } else {
        alert("Your move has already been picked. Please choose another one.")
       }
    }
    return {playerName, sendAttack, gameBoard}
}

export { gameBoardFactory, playerFactory, shipFactory };
