import { newShip, newGameBoard } from './src/index'

test('ship', () => {
    expect(newShip.sunkStatus).toBe(true)
})

test('sendHit', () => {
    expect(newGameBoard.receiveAttack([1,2])).toBe(true)
})

test('sendMissedHit', () => {
    expect(newGameBoard.receiveAttack([2,2])).toBe(false)
})

test('report', () => {
    expect(newGameBoard.report()).toBe("There are still alive ships")
})
