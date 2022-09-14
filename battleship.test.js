import {shipFactory, gameBoardFactory, playerFactory} from './src/factoryFunctions.js'

let newGameBoard = gameBoardFactory();
newGameBoard.placeShip("shipOne", 5, [1, 2, 3, 4, 5])

let newShip = shipFactory("shipOne", 5, [1, 2, 3, 4, 5]);
newShip.hit(1);
newShip.hit(2);
newShip.hit(3);
newShip.hit(4);
newShip.hit(5);
newShip.isSunk();

let newPlayer = playerFactory('playerOne', 'person')


test('ship', () => {
    expect(newShip.sunkStatus).toBe(true)
})

test('sendHit', () => {
    expect(newGameBoard.receiveAttack([2])).toBe(true)
})

test('sendMissedHit', () => {
    expect(newGameBoard.receiveAttack([20])).toBe(false)
})

test('report', () => {
    expect(newGameBoard.report()).toBe("There are still alive ships")
})
