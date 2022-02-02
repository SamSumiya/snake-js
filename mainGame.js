
import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,  
  getSnakeHead, 
  snakeIntersection
} from './snake.js'

import {
  draw as drawFood,
  update as updateFood
} from './food.js';

import {
  outsideGrid
} from './grid.js';

let lastRenderTime = 0
let gameOver = false 
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    return alert('You lose')
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime; 
  update(); 
  draw(); 
}

window.requestAnimationFrame(main);

function update () { 
  updateSnake()
  updateFood() 
  checkDeath() 
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  console.log(outsideGrid(getSnakeHead()), snakeIntersection());
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}




