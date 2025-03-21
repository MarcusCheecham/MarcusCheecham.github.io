// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let eastbound = [];
let westbound = [];
let vehicleTypesAmount = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(random(1, vehicleTypesAmount + 1), 0, random(height*0.45, height*0.70), (random(255), random(255), random(255)), 1, random(15)));
  }
  for(let i = 0; i < 20; i++) {
    westbound.push(new Vehicle(random(1, vehicleTypesAmount + 1), width, random(height*0.45, height*0.70), (random(255), random(255), random(255)), -1, random(15)));
  }
}

function draw() {
  background(25, 75, 10);
  drawRoad();
  vehicleDisplayTest();
}

function drawRoad() {
  rectMode(CORNERS);
  fill(50);
  stroke(0);
  strokeWeight(1);
  rect(0, height*0.25, width, height*0.75);
  stroke(255, 255, 0);
  strokeWeight(5);
  for (let roadLine = 0; roadLine < width; roadLine+= 40) {
    line(roadLine, height/2, roadLine + 20, height/2);
  }
  fill(255);
  stroke(0);
  strokeWeight(1);
  rectMode(CORNER);
}

function vehicleDisplayTest() {
  let x = width/2;
  let y = height/2;

  push();
  translate(-width*0.05, -height*0.04);
  rect(x, y, width*0.1, height*0.075);
  pop();

}

class Vehicle {

  constructor(vehicleType, x, y, colour, direction, speed) {
    this.vType = vehicleType;
    this.xPos = x;  this.yPos = y;
    this.colour = colour;
    this.direc = direction;
    this.speed = speed;
  }

  display() {

    fill(this.colour);
    switch(vehicleTypesAmount) {
    case 1:

    case 2:
    }
  }

  move() {
    if (this.direc > 0) {
      this.xPos += this.speed;
    } else {
      this.xPos -= this.speed;
    }
  }

  speedUp() {
    if (this.speed < 15) {
      this.speed++;
    }
  }

  speedDown() {
    if (this.speed > 0) {
      this.speed--;
    }
  }

  changeColor() {
    this.colour = (random(255), random(255), random(255));
  }

  action() {
    this.move();

    if(random(1, 100) === 100) {
      this.speedUp();
    }
    if(random(1, 100) === 100) {
      this.speedDown();
    }
    if(random(1, 100) === 100) {
      this.changeColor();
    }

    this.display();
  }
}
