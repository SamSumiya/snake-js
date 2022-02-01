
import {
  snakeOnFood,
  expandSnake
} from './snake.js';

import {
  randomGridPosition
} from './grid.js'

let foodPosition = setRandNewFoodPosition();
const EXPANSION_RATE = 1

export function update() { 
  if (snakeOnFood(foodPosition)) {
    expandSnake(EXPANSION_RATE)
    foodPosition = setRandNewFoodPosition()
  } 
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = foodPosition.x
  foodElement.style.gridColumnStart = foodPosition.y; 
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function setRandNewFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || snakeOnFood(newFoodPosition)) {
    newFoodPosition = randomGridPosition(); 
  }
  return newFoodPosition
}

