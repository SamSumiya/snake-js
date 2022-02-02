
import {
  onSnake,
  expandSnake
} from './snake.js';

import {
  randomGridPosition
} from './grid.js'

let foodPosition = setRandNewFoodPosition();
const EXPANSION_RATE = 5

export function update() { 
  if (onSnake(foodPosition)) {
    expandSnake(EXPANSION_RATE)
    foodPosition = setRandNewFoodPosition()
  } 
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = foodPosition.y; 
  foodElement.style.gridColumnStart = foodPosition.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function setRandNewFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null ||  onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition(); 
  }
  return newFoodPosition
}

