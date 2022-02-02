
import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,  
  getSnakeHead 
} from './snake.js'

import {
  draw as drawFood,
  update as updateFood
} from './food.js';

import { outsideGrid } from './grid.js';

// Setup the game loop so that I can update the status 

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
  gameOver = outsideGrid(getSnakeHead());
}

window.requestAnimationFrame(main);


