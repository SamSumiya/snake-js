



// Setup the game loop so that I can update the status 

let lastRenderTime = 0
const SNAKE_SPEED = 2

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  console.log('Render!')
  lastRenderTime = currentTime; 
  console.log(secondsSinceLastRender);

}

window.requestAnimationFrame(main);