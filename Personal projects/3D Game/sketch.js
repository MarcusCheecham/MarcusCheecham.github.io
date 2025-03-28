// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let player;
let playerX = 0;  let playerY = -100; let playerZ = 0;
let camList = [];
let turningDegree = 0;
let speed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  player = createCamera();
  player.setPosition(playerX, playerY, playerZ);
  perspective(2 * atan(height / 2 / 500), width / height, 0.01 * 800, 10 * 800);
  linePerspective(false);
  
}

function draw() {
  debugMode();

  background(220);

  cameraControls();

  translate(0, -100, -100);
  fill(0, 255, 0);
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
      turningDegree = 358;
    } else if (turningDegree >= 361) {
      turningDegree = 2;
    }

    if (keyIsDown(UP_ARROW) === true) {
      player.tilt(-2);
    }
    if (keyIsDown(DOWN_ARROW) === true) {
      player.tilt(2);
    }

    if ((keyIsDown(87) && (keyIsDown(65) || keyIsDown(68))) || (keyIsDown(83) && (keyIsDown(68) || keyIsDown(65)))) {

      if (keyIsDown(87) === true) { // W

        playerX += sin(turningDegree) * speed/1.5;
  
        playerZ -= cos(turningDegree) * speed/1.5;
      }
      if (keyIsDown(83) === true) { // S
  
        playerX -= sin(turningDegree) * speed/1.5;
  
        playerZ += cos(turningDegree) * speed/1.5;
      }
      if (keyIsDown(65) === true) { // A

        playerX -= cos(turningDegree) * speed/1.5;
  
        playerZ -= sin(turningDegree) * speed/1.5;
        
      }
      if (keyIsDown(68) === true) { // D
  
        playerX += cos(turningDegree) * speed/1.5;
  
        playerZ += sin(turningDegree) * speed/1.5;
  
      }

    } else {

    if (keyIsDown(87) === true) { // W

      playerX += sin(turningDegree) * speed;

      playerZ -= cos(turningDegree) * speed;
    }
    if (keyIsDown(83) === true) { // S

      playerX -= sin(turningDegree) * speed;

      playerZ += cos(turningDegree) * speed;

    }
    if (keyIsDown(65) === true) { // A

      playerX -= cos(turningDegree) * speed;

      playerZ -= sin(turningDegree) * speed;
      
    }
    if (keyIsDown(68) === true) { // D

      playerX += cos(turningDegree) * speed;

      playerZ += sin(turningDegree) * speed;

    }

    }

    player.setPosition(playerX, playerY, playerZ);

  }
}