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
const DEFAULT = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  player = createCamera();
  player.setPosition(playerX, playerY, playerZ);
  perspective(2 * atan(height / 2 / 500), width / height, 0.01 * 800, 10 * 100);
  linePerspective(false);

  camList.push(new Cam(0, -100, -100, DEFAULT, false));
  camList.push(new Cam(-100, -100, 0, DEFAULT, false));
  camList.push(new Cam(0, -100, 100, DEFAULT, false));
  camList.push(new Cam(100, -100, 0, DEFAULT, false));
}

function draw() {
  debugMode();

  background(220);

  for (let i of camList) {
    i.active();
  }

  gui();

  cameraControls();

  // push();
  // line(playerX, playerY, playerZ, player.centerX, player.centerY, player.centerZ);
  // pop();
  // push();
  // translate(0, -50, -100);
  // fill(0, 255, 0);
  // sphere(2, 4, 4);
  // pop();

  // push();
  // translate(0, -100, -50);
  // fill(200);
  // plane(100, 100);
  // pop();
  
}

class Cam {
  constructor(x, y, z, type, controlled) {
    this.x = x; this.y = y; this.z = z;
    // this.lookX = lookX; this.lookY = lookY; this.lookZ = lookZ;
    this.type = type;
    this.controlled = controlled;
  }

  ping() {

  }

  ability() {

  }

  display() {
    push();
    translate(this.x, this.y, this.z);
    fill(random(255), 0, random(255));
    sphere(2, 4, 4);
    pop();
  }

  active() {
    if (this.controlled === true) {
      playerX = this.x;
      playerY = this.y;
      playerZ = this.z;
      player.setPosition(this.x, this.y, this.z);
      this.controlled = false;
    }
    this.display();
  }

}

function gui() {

}

function cameraControls() {
  // if (keyIsPressed) {    // VERY LAGGY - there are probly simpler ways to do this

  //   if (keyIsDown(LEFT_ARROW) === true) {
  //     player.pan(2);
  //     turningDegree -= 2;
  //   }
  //   if (keyIsDown(RIGHT_ARROW) === true) {
  //     player.pan(-2);
  //     turningDegree += 2;
  //   }

  //   if (turningDegree <= -1) {
  //     turningDegree = 358;
  //   } else if (turningDegree >= 361) {
  //     turningDegree = 2;
  //   }

  //   if (keyIsDown(UP_ARROW) === true) {
  //     player.tilt(-2);
  //   }
  //   if (keyIsDown(DOWN_ARROW) === true) {
  //     player.tilt(2);
  //   }
  // }

  //   if ((keyIsDown(87) && (keyIsDown(65) || keyIsDown(68))) || (keyIsDown(83) && (keyIsDown(68) || keyIsDown(65)))) {

  //     if (keyIsDown(87) === true) { // W

  //       playerX += sin(turningDegree) * speed/1.5;
  
  //       playerZ -= cos(turningDegree) * speed/1.5;
  //     }
  //     if (keyIsDown(83) === true) { // S
  
  //       playerX -= sin(turningDegree) * speed/1.5;
  
  //       playerZ += cos(turningDegree) * speed/1.5;
  //     }
  //     if (keyIsDown(65) === true) { // A

  //       playerX -= cos(turningDegree) * speed/1.5;
  
  //       playerZ -= sin(turningDegree) * speed/1.5;
        
  //     }
  //     if (keyIsDown(68) === true) { // D
  
  //       playerX += cos(turningDegree) * speed/1.5;
  
  //       playerZ += sin(turningDegree) * speed/1.5;
  
  //     }

  //   } else {

  //     if (keyIsDown(87) === true) { // W

  //       createVector(cos(turningDegree), sin(turningDegree));

  //       playerX += sin(turningDegree) * speed;

  //       playerZ -= cos(turningDegree) * speed;
  //     }
  //     if (keyIsDown(83) === true) { // S

  //       playerX -= sin(turningDegree) * speed;

  //       playerZ += cos(turningDegree) * speed;

  //     }
  //     if (keyIsDown(65) === true) { // A

  //       playerX -= cos(turningDegree) * speed;

  //       playerZ -= sin(turningDegree) * speed;
      
  //     }
  //     if (keyIsDown(68) === true) { // D

  //       playerX += cos(turningDegree) * speed;

  //       playerZ += sin(turningDegree) * speed;

  //     }

  //   }

  //   player.setPosition(playerX, playerY, playerZ);

  // }





  if (keyIsPressed) {

    if (keyIsDown(LEFT_ARROW) === true) {
      player.pan(2);
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
      player.pan(-2);
    }
    if (keyIsDown(UP_ARROW) === true) {
      player.tilt(-2);
    }
    if (keyIsDown(DOWN_ARROW) === true) {
      player.tilt(2);
    }

    if (keyIsDown(32) === true) {
      for (let i of camList) {
        if ((player.centerX < i.x + 100 && player.centerX > i.x - 100) && (player.centerY > i.y - 100 && player.centerY < i.y + 100) && player.centerZ < i.z) {
          i.controlled = true;
        }
      }
    }
  }
}