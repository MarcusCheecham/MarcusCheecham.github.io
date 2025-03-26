// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let player;
let playerX = 0;  let playerY = -100; let playerZ = 0
let camList = [];
let turningDegree = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  player = createCamera();
  player.setPosition(playerX, playerY, playerZ);
  perspective(2 * atan(height / 2 / 800), width / height, 0.01, 5000);
  
}

function draw() {
  debugMode();

  background(220);

  cameraControls();

  translate(0, -100, -100);
  sphere(10, 10, 10);
  
}

function cameraControls() {
  if (keyIsPressed) {

    if (keyIsDown(LEFT_ARROW) === true) {
      player.pan(2);
      turningDegree -= 2;
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
      player.pan(-2);
      turningDegree += 2;
    }

    if (turningDegree <= -1) {
      turningDegree = 360 - 2;
    } else if (turningDegree >= 361) {
      turningDegree = 0 + 2;
    }

    if (keyIsDown(UP_ARROW) === true) {
      player.tilt(-2);
    }
    if (keyIsDown(DOWN_ARROW) === true) {
      player.tilt(2);
    }

    if (keyIsDown(87) === true) {

      if (turningDegree >= 0 && turningDegree <= 180) {
        playerX -= (sin(turningDegree) * cos(turningDegree + 90)) * 10;
      } else {
        playerX += (sin(turningDegree) * cos(turningDegree + 90)) * 10;
      }
  
      if (turningDegree <= 90 && turningDegree >= 270) {
        playerZ -= (sin(turningDegree) * cos(turningDegree + 90)) * 10;
      } else {
        playerZ += (sin(turningDegree) * cos(turningDegree + 90)) * 10;
      }
  

    }
    if (keyIsDown(83) === true) {
      playerZ+= 10;
    }
    if (keyIsDown(65) === true) {
      playerX -= 10;
    }
    if (keyIsDown(68) === true) {
      playerX += 10;
    }

    player.setPosition(playerX, playerY, playerZ);

  }
}
