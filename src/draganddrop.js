const draggableShips = Array.from(document.getElementsByClassName("draggable"));
let currentShip = "";

function activateDrop(event) {
  event.preventDefault();
}

function showHoverColor(event) {
  event.target.style.backgroundColor = "aqua";
}

function removeHoverColor(event) {
  event.target.style.backgroundColor = null;
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.getAttribute("id"));
  currentShip = e.target.id;
}

function getCurrentShip(currentShip) {
    return currentShip
}

function drop(e) {
  e.preventDefault();
  let data = e.dataTransfer.getData("text");
  let target = e.target;
  removeHoverColor(e);
  target.appendChild(document.querySelector(`[id="${data}"]`));
}

let allowDrag = function () {
  draggableShips.forEach((ship) => {
    ship.addEventListener("dragstart", drag);
  });
};


function getPositions() {
  const selectBoxes = Array.from(document.getElementsByClassName("droppable"));
  let boxesWithShips = selectBoxes.filter((box) => {
    if (box.hasChildNodes()) {
      return box;
    }
  });
  let boxID = boxesWithShips.map((box) => box.getAttribute("set-id"));
  let shipID = boxesWithShips.map((box) => box.firstChild.id);
  return { boxID, shipID };
}

function checkPositions() {
  const selectBoxes = Array.from(document.getElementsByClassName("droppable"));
  selectBoxes.forEach((box) => {
    box.addEventListener("drop", function () {
      let check = getPositions();
      if (check.boxID.length == 5) {
        const beginButton = document.getElementById("beginButton");
        beginButton.classList.remove("hidden");
      }
    });
  });
}

let allowDrop = function(selectBoxes) {
    if (currentShip == "carrier") {
      let allowableBoxes = selectBoxes
        .slice(0, 6)
        .concat(selectBoxes.slice(10, 16))
        .concat(selectBoxes.slice(20, 26))
        .concat(selectBoxes.slice(30, 36))
        .concat(selectBoxes.slice(40, 46))
        .concat(selectBoxes.slice(50, 56))
        .concat(selectBoxes.slice(60, 66))
        .concat(selectBoxes.slice(70, 76))
        .concat(selectBoxes.slice(80, 86))
        .concat(selectBoxes.slice(90, 96))
        allowableBoxes.forEach((box) => {
          box.addEventListener("dragover", activateDrop);
          box.addEventListener("dragover", showHoverColor);
          box.addEventListener("dragleave", removeHoverColor);
          box.addEventListener("drop", drop);
          box.addEventListener('drop', checkPositions)
        });
    } else if (currentShip == 'battleship') {
      let allowableBoxes = selectBoxes
        .slice(0, 7)
        .concat(selectBoxes.slice(10, 17))
        .concat(selectBoxes.slice(20, 27))
        .concat(selectBoxes.slice(30, 37))
        .concat(selectBoxes.slice(40, 47))
        .concat(selectBoxes.slice(50, 57))
        .concat(selectBoxes.slice(60, 67))
        .concat(selectBoxes.slice(70, 77))
        .concat(selectBoxes.slice(80, 87))
        .concat(selectBoxes.slice(90, 97))
        allowableBoxes.forEach((box) => {
          box.addEventListener("dragover", activateDrop);
          box.addEventListener("dragover", showHoverColor);
          box.addEventListener("dragleave", removeHoverColor);
          box.addEventListener("drop", drop);
          box.addEventListener('drop', checkPositions)
        });
    } else if (currentShip == 'cruiser' || currentShip == 'submarine' ) {
      let allowableBoxes = selectBoxes
        .slice(0, 8)
        .concat(selectBoxes.slice(10, 18))
        .concat(selectBoxes.slice(20, 28))
        .concat(selectBoxes.slice(30, 38))
        .concat(selectBoxes.slice(40, 48))
        .concat(selectBoxes.slice(50, 58))
        .concat(selectBoxes.slice(60, 68))
        .concat(selectBoxes.slice(70, 78))
        .concat(selectBoxes.slice(80, 88))
        .concat(selectBoxes.slice(90, 98))
        allowableBoxes.forEach((box) => {
          box.addEventListener("dragover", activateDrop);
          box.addEventListener("dragover", showHoverColor);
          box.addEventListener("dragleave", removeHoverColor);
          box.addEventListener("drop", drop);
          box.addEventListener('drop', checkPositions)
        });
    } else if (currentShip == 'destroyer') {
      let allowableBoxes = selectBoxes
        .slice(0, 9)
        .concat(selectBoxes.slice(10, 19))
        .concat(selectBoxes.slice(20, 29))
        .concat(selectBoxes.slice(30, 39))
        .concat(selectBoxes.slice(40, 49))
        .concat(selectBoxes.slice(50, 59))
        .concat(selectBoxes.slice(60, 69))
        .concat(selectBoxes.slice(70, 79))
        .concat(selectBoxes.slice(80, 89))
        .concat(selectBoxes.slice(90, 99))
        allowableBoxes.forEach((box) => {
          box.addEventListener("dragover", activateDrop);
          box.addEventListener("dragover", showHoverColor);
          box.addEventListener("dragleave", removeHoverColor);
          box.addEventListener("drop", drop);
          box.addEventListener('drop', checkPositions)
        });
    }
  };

function createShipCoordinates(ship, box) {
  box = Number(box);
  if (ship == "carrier") {
    let coordinates = [box, box + 1, box + 2, box + 3, box + 4];
    return coordinates;
  }
  if (ship == "battleship") {
    let coordinates = [box, box + 1, box + 2, box + 3];
    return coordinates;
  }
  if (ship == "cruiser" || ship == "submarine") {
    let coordinates = [box, box + 1, box + 2];
    return coordinates;
  }
  if (ship == "destroyer") {
    let coordinates = [box, box + 1];
    return coordinates;
  }
}

function createShips(boxes, ships) {
  let shipOne = createShipCoordinates(ships[0], boxes[0]);
  let shipTwo = createShipCoordinates(ships[1], boxes[1]);
  let shipThree = createShipCoordinates(ships[2], boxes[2]);
  let shipFour = createShipCoordinates(ships[3], boxes[3]);
  let shipFive = createShipCoordinates(ships[4], boxes[4]);
  return { shipOne, shipTwo, shipThree, shipFour, shipFive };
}

export { allowDrag, allowDrop, getPositions, getCurrentShip, currentShip, checkPositions, createShips };
