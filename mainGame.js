
import { SNAKE_SPEED } from './snake'


// Setup the game loop so that I can update the status 

let lastRenderTime = 0


function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime; 

  update() 
  draw() 
}

window.requestAnimationFrame(main);


function update() {

}

function draw() {}