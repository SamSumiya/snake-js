
import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake
} from './snake.js'


// Setup the game loop so that I can update the status 

let lastRenderTime = 0


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
}

function draw() {
  drawSnake()
}

window.requestAnimationFrame(main);


