

const foodPosition = {
  x: 1, 
  y: 15
}

export function update() { }


export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridColumnStart = foodPosition.x
  foodElement.style.gridRowStart = foodPosition.y
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}