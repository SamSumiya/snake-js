

const foodPosition = {
  x: 15, 
  y: 15
}

export function update() { }


export function drawf(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridColumnStart = foodPosition.x
  foodElement.style.gridRowStart = foodPosition.y
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}