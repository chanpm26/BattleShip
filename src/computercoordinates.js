function getRandomCoordinates(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function createComputerCoordinates() {
  let firstShipFirstNumber = getRandomCoordinates(0, 2).toString();
  let firstShipSecondNumber = getRandomCoordinates(0, 5).toString();
  let firstShipFirstPosition = firstShipFirstNumber + firstShipSecondNumber;
  firstShipFirstPosition = Number(firstShipFirstPosition);
  let firstShipCoordinates = [
    firstShipFirstPosition,
    firstShipFirstPosition + 1,
    firstShipFirstPosition + 2,
    firstShipFirstPosition + 3,
    firstShipFirstPosition + 4,
  ];
  let secondShipFirstNumber = getRandomCoordinates(3, 4).toString();
  let secondShipSecondNumber = getRandomCoordinates(0, 6).toString();
  let secondShipFirstPosition = secondShipFirstNumber + secondShipSecondNumber;
  secondShipFirstPosition = Number(secondShipFirstPosition);
  let secondShipCoordinates = [
    secondShipFirstPosition,
    secondShipFirstPosition + 1,
    secondShipFirstPosition + 2,
    secondShipFirstPosition + 3,
  ];
  let thirdShipFirstNumber = getRandomCoordinates(7, 8).toString();
  let thirdShipSecondNumber = getRandomCoordinates(0, 7).toString();
  let thirdShipFirstPosition = thirdShipFirstNumber + thirdShipSecondNumber;
  thirdShipFirstPosition = Number(thirdShipFirstPosition);
  let thirdShipCoordinates = [
    thirdShipFirstPosition,
    thirdShipFirstPosition + 1,
    thirdShipFirstPosition + 2,
  ];
  let fourthShipFirstNumber = "9";
  let fourthShipSecondNumber = getRandomCoordinates(0, 7).toString();
  let fourthShipFirstPosition = fourthShipFirstNumber + fourthShipSecondNumber;
  fourthShipFirstPosition = Number(fourthShipFirstPosition);
  let fourthShipCoordinates = [
    fourthShipFirstPosition,
    fourthShipFirstPosition + 1,
    fourthShipFirstPosition + 2,
  ];
  let fifthShipFirstNumber = getRandomCoordinates(5, 6).toString();
  let fifthShipSecondNumber = getRandomCoordinates(0, 7).toString();
  let fifthShipFirstPosition = fifthShipFirstNumber + fifthShipSecondNumber;
  fifthShipFirstPosition = Number(fifthShipFirstPosition);
  let fifthShipCoordinates = [
    fifthShipFirstPosition,
    fifthShipFirstPosition + 1,
  ];
  return {
    firstShipCoordinates,
    secondShipCoordinates,
    thirdShipCoordinates,
    fourthShipCoordinates,
    fifthShipCoordinates,
  };
}

export { getRandomCoordinates, createComputerCoordinates };
