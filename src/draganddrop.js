const draggableShips = Array.from(document.getElementsByClassName('draggable')) 

function activateDrop(event) {
    event.preventDefault();
}

function showHoverColor(event) {
    event.target.style.backgroundColor = 'aqua'
}

function removeHoverColor(event){
    event.target.style.backgroundColor = null
}

function drag(e) {
    e.dataTransfer.setData('text', e.target.getAttribute('id'))
}

function drop(e){
    e.preventDefault();
    let data = e.dataTransfer.getData('text')
    let target = e.target
    removeHoverColor(e)
   target.appendChild(document.querySelector(`[id="${data}"]`))
}


let allowDrag = function() {
    draggableShips.forEach(ship => {
    ship.addEventListener('dragstart', drag)
})
}

let allowDrop = function() {
    const selectBoxes = Array.from(document.getElementsByClassName('droppable'))
    selectBoxes.forEach(box => {
    box.addEventListener('dragover', activateDrop)
    box.addEventListener('dragover', showHoverColor)
    box.addEventListener('dragleave', removeHoverColor)
    box.addEventListener('drop', drop)
})
}

function getPositions(){
    const selectBoxes = Array.from(document.getElementsByClassName('droppable'))
    let boxesWithShips = selectBoxes.filter(box => {
        if (box.hasChildNodes()) {
            return box
        }
    })
    let boxID = boxesWithShips.map(box => box.getAttribute('set-id'))
    let shipID = boxesWithShips.map(box => box.firstChild.id)
    return {boxID, shipID}
}

function checkPositions() {
    const selectBoxes = Array.from(document.getElementsByClassName('droppable'))
    selectBoxes.forEach(box => {
        box.addEventListener('drop', function() {
            let check = getPositions()
            if (check.boxID.length == 5){
                const beginButton = document.getElementById("beginButton");
                beginButton.classList.remove('hidden')
            } 
        })
})
}

function createShipCoordinates(ship, box) {
    box = Number(box)
    if (ship == 'carrier') {
        let coordinates = [box, box+1, box+2, box+3, box+4]
        return coordinates
    }
    if (ship == 'battleship') {
    let coordinates = [box, box+1, box+2, box+3]
        return coordinates
    }
    if (ship == 'cruiser' || ship == 'submarine') {
        let coordinates = [box, box+1, box+2]
            return coordinates
    }
    if (ship == 'destroyer') {
            let coordinates = [box, box+1]
                return coordinates
    }
}

function createShips(boxes, ships) {
    let shipOne = createShipCoordinates(ships[0], boxes[0])
    let shipTwo = createShipCoordinates(ships[1], boxes[1])
    let shipThree = createShipCoordinates(ships[2], boxes[2])
    let shipFour = createShipCoordinates(ships[3], boxes[3])
    let shipFive = createShipCoordinates(ships[4], boxes[4])
    return {shipOne, shipTwo, shipThree, shipFour, shipFive}
}

export {allowDrag, allowDrop, getPositions, checkPositions, createShips}