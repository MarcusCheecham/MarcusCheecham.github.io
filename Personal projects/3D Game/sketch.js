// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let playerX = 0;  let playerY = -100; let playerZ = 0
let camList = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  cam2 = createCamera();
  player = createCamera();
  player.setPosition(playerX, playerY, playerZ)
  cam2.setPosition(playerX - 100, playerY, playerX) 
  
}

function draw() {
  debugMode();
  background(220);
  cameraControls();
  sphere(10);
  
}

function keyPressed() {
  if (keyCode === "W") {
    playerX;
  }
}

function cameraControls() {
  if (keyIsDown(LEFT_ARROW) === true) {
    player.pan(2)
  }
  if (keyIsDown(RIGHT_ARROW) === true) {
    player.pan(-2)
  }
  if (keyIsDown(UP_ARROW) === true) {
    player.tilt(-2)
  }
  if (keyIsDown(DOWN_ARROW) === true) {
    player.tilt(2)
  }

  if (keyIsDown("W") === true) {
    playerX+= 10;
  }

}
