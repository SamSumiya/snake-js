
import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,  
} from './snake.js'

import {
  draw as drawFood,
  update as updateFood
} from './food.js';

// Setup the game loop so that I can update the status 

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
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
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

window.requestAnimationFrame(main);


