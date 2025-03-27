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
  angleMode(DEGREES);
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
  let xPos = width/2;
  let yPos = height/2;

  push();
  translate(-width*0.05, -height*0.04);

  // CAR

  // fill(110);
  // rect(x*1.01, y*0.98, width*0.020, height*0.095);
  // rect(x*1.15, y*0.98, width*0.020, height*0.095);
  // fill(random(255), random(255), random(255)); // RANDOM COLOUR
  // rect(x, y, width*0.1, height*0.075);

  // // Westbound

  // fill(200, 200, 0);
  // rect(x, y, width*0.008, height*0.020, 0, 0, 10, 0);
  // rect(x, y*1.108, width*0.008, height*0.020, 0, 10, 0, 0);


  // // Eastbound

  // fill(200, 200, 0);
  // rect(x*1.184, y, width*0.008, height*0.020, 0, 0, 0, 10);
  // rect(x*1.184, y*1.108, width*0.008, height*0.020, 10, 0, 0, 0);


  // TRUCK

  // Westbound

  // Body
  fill("grey");
  rect(xPos*1.075, yPos*1.0515, width*0.02, height*0.025);
  fill(255, 255, 255);
  rect(xPos*1.0925, yPos, width*0.09, height*0.080);
  rect(xPos, yPos, width*0.04, height*0.080, 10, 0, 0, 10);

  // Backlights
  fill(200, 0, 0);
  rect(xPos*1.2525, yPos, width*0.01, height*0.010, 0, 0, 0, 10);
  rect(xPos*1.2525, yPos*1.14, width*0.01, height*0.010, 10, 0, 0, 0);

  // Headlights
  fill(200, 200, 0);
  rect(xPos, yPos, width*0.005, height*0.02, 0, 0, 10, 0);
  rect(xPos, yPos*1.12, width*0.005, height*0.02, 0, 10, 0, 0);


  // Eastbound

  // Body
  // fill("grey");
  // rect(xPos*1.180, yPos*1.0515, width*0.02, height*0.025);
  // fill(255, 255, 255);
  // rect(xPos, yPos, width*0.09, height*0.080);
  // rect(xPos*1.190, yPos, width*0.04, height*0.080, 0, 10, 10, 0);

  // Headlights
  // fill(200, 200, 0);
  // rect(xPos*1.26, yPos, width*0.005, height*0.02, 0, 10, 0, 0);
  // rect(xPos*1.26, yPos*1.12, width*0.005, height*0.02, 0, 0, 10, 0);

  // Backlights
  // fill(200, 0, 0);
  // rect(xPos, yPos, width*0.008, height*0.01, 0, 0, 10, 0);
  // rect(xPos, yPos*1.14, width*0.008, height*0.01, 0, 10, 0, 0);


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

    switch(vehicleTypesAmount) {
    case 1: // First vehicle = Car
      push();
      translate(-width*0.05, -height*0.04);
      // Body
      fill(110);
      rect(this.xPos*1.01, this.yPos*0.98, width*0.020, height*0.095);
      rect(this.xPos*1.15, this.yPos*0.98, width*0.020, height*0.095);
      fill(this.colour); // RANDOM COLOUR
      rect(this.xPos, this.yPos, width*0.1, height*0.075);
    
      if (this.direction === 1) { // Headlights and rear lights
        // Eastbound

        // Rearlights
        fill(200, 0, 0);
        rect(this.xPos, this.yPos, width*0.008, height*0.020, 0, 0, 10, 0);
        rect(this.xPos, this.yPos*1.108, width*0.008, height*0.020, 0, 10, 0, 0);
        
        // Headlights
        fill(200, 200, 0);
        rect(this.xPos*1.184, this.yPos, width*0.008, height*0.020, 0, 0, 0, 10);
        rect(this.xPos*1.184, this.yPos*1.108, width*0.008, height*0.020, 10, 0, 0, 0);
      } else {
        // Westbound
        
        // Rearlights
        fill(200, 200, 0);
        rect(this.xPos, this.yPos, width*0.008, height*0.020, 0, 0, 10, 0);
        rect(this.xPos, this.yPos*1.108, width*0.008, height*0.020, 0, 10, 0, 0);
        
        // Headlights
        fill(200, 0, 0);
        rect(this.xPos*1.184, this.yPos, width*0.008, height*0.020, 0, 0, 0, 10);
        rect(this.xPos*1.184, this.yPos*1.108, width*0.008, height*0.020, 10, 0, 0, 0);
      }
      pop();
      break;

    case 2: //second vehicle = Truck

      break;
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

    if(int(random(100)) === 100) { // 1% chance of activating (0 - 99) with each int being a chance
      this.speedUp();
    }
    if(int(random(100)) === 100) {
      this.speedDown();
    }
    if(int(random(100)) === 100) {
      this.changeColor();
    }

    this.display();
  }
}
