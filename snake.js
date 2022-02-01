import { getDirection } from "./input.js";

export const SNAKE_SPEED = 3;
export const snakeBody = [
  { x: 11, y: 11 },
]; 
let newSegments = 0; 

export function update() {
  addSegments 
  const inputDirection = getDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
      snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.style.gridRowStart = segment.y 
    snakeElement.classList.add('snake') 
    gameBoard.appendChild(snakeElement)
  })
}

export function expandSnake() {
  newSegments += amount
}

function addSegments() {
  
}


export function snakeOnFood(position) {
  return snakeBody.some((segment) => equalPosition(segment, position));
}

function equalPosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y ? true : false 
}






