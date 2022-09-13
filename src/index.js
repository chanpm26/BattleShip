const shipFactory = (
  length,
  coordinates = [],
  whereHit = [],
  sunkStatus = false
) => {
  const hit = (number) => {
    coordinates.forEach((coordinate) => {
      if (coordinate[0] == number[0] && coordinate[1] == number[1]) {
        whereHit.push(coordinates.indexOf(coordinate));
      }
    });
  };
  const isSunk = function () {
    if (length == whereHit.length) {
      this.sunkStatus = true;
      return this;
    }
    this.sunkStatus = false;
    return this;
  };
  return { length, coordinates, whereHit, sunkStatus, hit, isSunk };
};

let newShip = shipFactory(5, [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
]);
newShip.hit([1, 1]);
newShip.hit([1, 2]);
newShip.hit([1, 3]);
newShip.hit([1, 4]);
newShip.hit([1, 5]);
newShip.isSunk();

//gameBoard is 7x7

const gameBoardFactory = () => {
  let listOfShips = [];
  let missedAttacks = [];
  const placeShip = function (length, coordinates) {
    let newShip = shipFactory(length, coordinates);
    listOfShips.push(newShip);
    return listOfShips;
  };
  const receiveAttack = function(number) {
    let checkAttack = [];
    listOfShips.map((ship) => {
      ship.coordinates.map((coordinate) => {
        if (coordinate[0] == number[0] && coordinate[1] == number[1]) {
          ship.hit(number);
          checkAttack.push("true");
          return checkAttack;
        }
        return checkAttack;
      });
      return checkAttack;
    });
    if (!checkAttack.includes("true")) {
      missedAttacks.push(number);
      return false
    } else {
      return true;
    }
  };
  const report = function () {
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

  return { listOfShips, missedAttacks, placeShip, receiveAttack, report };
};

let newGameBoard = gameBoardFactory();
newGameBoard.placeShip(5, [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
]);

export { newShip, newGameBoard };
