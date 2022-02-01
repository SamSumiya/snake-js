import { getDirection } from "./input.js";

export const SNAKE_SPEED = 3;
export const snakeBody = [
  { x: 11, y: 11 },
]; 
let newSegments = 0; 

export function update() {
  addSegments()
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

export function expandSnake(amount) {
  newSegments += amount
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    const len = snakeBody.length
    snakeBody.push(snakeBody[len - 1])
  }
  resetSegements() 
}

function resetSegements() {
  newSegments = 0; 
  return newSegments 
}

export function snakeOnFood(position) {
  return snakeBody.some((segment) => {
    console.log(segment, position);
    return equalPositions(segment, position) 
  })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.y && pos1.y === pos2.x;
}






