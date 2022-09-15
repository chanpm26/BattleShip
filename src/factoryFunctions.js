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
      this.sunkStatus = sunkStatus
      return sunkStatus;
    } else {
    sunkStatus = false;
    this.sunkStatus = sunkStatus
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
  let missedAttacks = []
  let successfulAttacks = []
  let sunkShips = 0
  const placeShip = function (nameOfShip, length, coordinates) {
    let newShip = shipFactory(nameOfShip, length, coordinates);
    coordinates.forEach(coordinate => {
      board[coordinate].push(newShip)
    })
    }
  ;
  const receiveAttack = function(number) {
    if (board[number] != "") {
      successfulAttacks.push(number);
      let attackStatus = board[number][0].hit(number);
      let shipStatus = board[number][0].isSunk()
      if (shipStatus == true) {
        sunkShips += 1
      }
      return {attackStatus, shipStatus}
    } else {      
      missedAttacks.push(number);
      return false
    } 
  };
  const report = function() {
    let checkStatus = board.map((tile) => {
      if (tile != '') {
        tile[0].isSunk()
      if (tile[0].sunkStatus == true) {
        return true;
      } else {
        return false;
      }
    }
  });
    if (checkStatus.includes(false)) {
      return "There are still alive ships";
    } else {
      return "All ships have sunk!";
    }
  };

  return { board, sunkShips, successfulAttacks, missedAttacks, placeShip, receiveAttack, report };
};

//player Factory


const playerFactory = function(playerName, playerType) {
  const gameBoard = gameBoardFactory();   
    const sendAttack = function(board, coordinate) {
      let attackStatus = 'valid'
      if (board.missedAttacks.includes(coordinate)) {
          attackStatus = 'notValid'
        } else if (board.successfulAttacks != undefined && board.successfulAttacks.includes(coordinate)) {
          attackStatus = 'notValid'
       }
       if (attackStatus == 'valid') {
        let result = board.receiveAttack(coordinate)
        return result
       } else {
        return 'notvalid'
       }
    }
    return {playerName, sendAttack, gameBoard}
}

export { gameBoardFactory, playerFactory, shipFactory };
