// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let playerX = 0;  let playerY = -100; let playerZ = 0

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  player = createCamera();
  player.setPosition(playerX, playerY, playerZ)
}

function draw() {
  debugMode();
  background(220);
  cameraControls();


}

function cameraControls() {
  if (keyIsDown(LEFT_ARROW) === true) {
    player.pan(-1)
  }
}
