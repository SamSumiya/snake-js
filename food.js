
import { snakeOnFood, expandSnake } from './snake.js';

let foodPosition = {
  x: 1, 
  y: 15
}
const EXPANSION_RATE = 1

export function update() { 

  if (snakeOnFood(foodPosition)) {
    expandSnake(EXPANSION_RATE)
    foodPosition = { x: 2, y: 10 };
  } 
}



export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridColumnStart = foodPosition.x
  foodElement.style.gridRowStart = foodPosition.y
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}