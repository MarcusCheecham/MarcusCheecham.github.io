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
    eastbound.push(new Vehicle(round(random(0, vehicleTypesAmount)), 0, random(height*0.55, height*0.715), [round(random(255)), round(random(255)), round(random(255))], 1, random(15)));
  }
  for(let i = 0; i < 20; i++) {
    westbound.push(new Vehicle(round(random(0, vehicleTypesAmount)), width, random(height*0.30, height*0.45), [round(random(255)), round(random(255)), round(random(255))], -1, random(15)));
  }
}

function draw() {
  background(25, 75, 10);
  drawRoad();
  // vehicleDisplayTest();
  for (let car of eastbound) {
    car.action();
    // car.changeColour();
  }
  for (let car of westbound) {
    car.action();
  }
}

function mousePressed() {
  if (mouseButton === LEFT && !keyIsDown(SHIFT)) {
    eastbound.push(new Vehicle(round(random(0, vehicleTypesAmount)), 0, random(height*0.55, height*0.715), [round(random(255)), round(random(255)), round(random(255))], 1, random(15)));
  } else if (mouseButton === LEFT && keyIsDown(SHIFT)) {
    westbound.push(new Vehicle(round(random(0, vehicleTypesAmount)), width, random(height*0.30, height*0.45), [round(random(255)), round(random(255)), round(random(255))], -1, random(15)));
  }
}

function drawRoad() {
  rectMode(CORNERS);

  fill(50);
  stroke(0);
  strokeWeight(1);
  rect(0, height*0.25, width, height*0.75); // Road

  stroke(255, 255, 0);
  strokeWeight(5);
  for (let roadLine = 0; roadLine < width; roadLine+= 40) { // Roadlines
    line(roadLine, height/2, roadLine + 20, height/2);
  }

  // Resetting strokes and rectMode
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
  // rect(xPos + width*0.01, yPos - height*0.01, width*0.020, height*0.095);
  // rect(xPos + width*0.07, yPos - height*0.01, width*0.020, height*0.095);
  // fill(random(255), random(255), random(255)); // RANDOM COLOUR
  // rect(xPos, yPos, width*0.1, height*0.075);

  // Westbound

  // fill(200, 200, 0);
  // rect(xPos, yPos, width*0.008, height*0.020, 0, 0, 10, 0);
  // rect(xPos, yPos + height*0.055, width*0.008, height*0.020, 0, 10, 0, 0);
  


  // Eastbound

  // fill(200, 200, 0);
  // rect(xPos + width*0.0924, yPos, width*0.008, height*0.020, 0, 0, 0, 10);
  // rect(xPos + width*0.0924, yPos + height*0.055, width*0.008, height*0.020, 10, 0, 0, 0);
  

  // TRUCK

  // Westbound

  // Body
  // fill("grey");
  // rect(xPos + width*0.030, yPos + height*0.025, width*0.02, height*0.025);
  // fill(255, 255, 255); // RANDOM COLOUR
  // rect(xPos + width*0.04575, yPos, width*0.09, height*0.080);
  // rect(xPos, yPos, width*0.04, height*0.080, 0, 10, 10, 0);

  // // Backlights
  // fill(200, 0, 0);
  // rect(xPos + width*0.126, yPos, width*0.01, height*0.010, 0, 0, 0, 10);
  // rect(xPos + width*0.126, yPos + height*0.07, width*0.01, height*0.010, 10, 0, 0, 0);

  // // Headlights
  // fill(200, 200, 0);
  // rect(xPos, yPos, width*0.005, height*0.02, 0, 0, 10, 0);
  // rect(xPos, yPos + height*0.06, width*0.005, height*0.02, 0, 10, 0, 0);


  // Eastbound

  // Body
  fill("grey");
  rect(xPos + width*0.075, yPos + height*0.025, width*0.02, height*0.025);
  fill(255, 255, 255); // RANDOM COLOUR
  rect(xPos, yPos, width*0.09, height*0.080);
  rect(xPos + width*0.095, yPos, width*0.04, height*0.080, 0, 10, 10, 0);

  // Headlights
  fill(200, 200, 0);
  rect(xPos + width*0.13, yPos, width*0.005, height*0.02, 0, 10, 0, 0);
  rect(xPos + width*0.13, yPos + height*0.06, width*0.005, height*0.02, 0, 0, 10, 0);

  // Backlights
  fill(200, 0, 0);
  rect(xPos, yPos, width*0.008, height*0.01, 0, 0, 10, 0);
  rect(xPos, yPos + height*0.07, width*0.008, height*0.01, 0, 10, 0, 0);


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

    switch(this.vType ) {
    case 1: // First vehicle = Car
      push();
      translate(-width*0.05, -height*0.04);
      // Body
      fill(110);
      rect(this.xPos + width*0.01, this.yPos - height*0.01, width*0.020, height*0.095);
      rect(this.xPos + width*0.07, this.yPos - height*0.01, width*0.020, height*0.095);
      fill(this.colour); // RANDOM COLOUR
      rect(this.xPos, this.yPos, width*0.1, height*0.075);
    
      if (this.direc === 1) { // Headlights and rear lights
        // Eastbound

        // Headlights
        fill(200, 200, 0);
        rect(this.xPos + width*0.0924, this.yPos, width*0.008, height*0.020, 0, 0, 0, 10);
        rect(this.xPos + width*0.0924, this.yPos + height*0.055, width*0.008, height*0.020, 10, 0, 0, 0);
        
        // Rearlights
        fill(200, 0, 0);
        rect(this.xPos, this.yPos, width*0.008, height*0.020, 0, 0, 10, 0);
        rect(this.xPos, this.yPos + height*0.055, width*0.008, height*0.020, 0, 10, 0, 0);
      } else {
        // Westbound
        
        // Headlights
        fill(200, 200, 0);
        rect(this.xPos, this.yPos, width*0.008, height*0.020, 0, 0, 10, 0);
        rect(this.xPos, this.yPos + height*0.055, width*0.008, height*0.020, 0, 10, 0, 0);
        
        // Rearlights
        fill(200, 0, 0);
        rect(this.xPos + width*0.0924, this.yPos, width*0.008, height*0.020, 0, 0, 0, 10);
        rect(this.xPos + width*0.0924, this.yPos + height*0.055, width*0.008, height*0.020, 10, 0, 0, 0);
      }
      pop();
      break;

    case 2: //second vehicle = Truck

      push();
      translate(-width*0.05, -height*0.04);

      if (this.direc === 1) {

        // Eastbound

        // Body
        fill("grey");
        rect(this.xPos + width*0.075, this.yPos + height*0.025, width*0.02, height*0.025);
        fill(this.colour); // RANDOM COLOUR
        rect(this.xPos, this.yPos, width*0.09, height*0.080);
        rect(this.xPos + width*0.095, this.yPos, width*0.04, height*0.080, 0, 10, 10, 0);

        // Headlights
        fill(200, 200, 0);
        rect(this.xPos + width*0.13, this.yPos, width*0.005, height*0.02, 0, 10, 0, 0);
        rect(this.xPos + width*0.13, this.yPos + height*0.06, width*0.005, height*0.02, 0, 0, 10, 0);

        // Backlights
        fill(200, 0, 0);
        rect(this.xPos, this.yPos, width*0.008, height*0.01, 0, 0, 10, 0);
        rect(this.xPos, this.yPos + height*0.07, width*0.008, height*0.01, 0, 10, 0, 0);

      } else {

        // Westbound

        // Body
        fill("grey");
        rect(this.xPos + width*0.030, this.yPos + height*0.025, width*0.02, height*0.025);
        fill(this.colour); // RANDOM COLOUR
        rect(this.xPos + width*0.04575, this.yPos, width*0.09, height*0.080);
        rect(this.xPos, this.yPos, width*0.04, height*0.080, 0, 10, 10, 0);
      
        // Backlights
        fill(200, 0, 0);
        rect(this.xPos + width*0.126, this.yPos, width*0.01, height*0.010, 0, 0, 0, 10);
        rect(this.xPos + width*0.126, this.yPos + height*0.07, width*0.01, height*0.010, 10, 0, 0, 0);
      
        // Headlights
        fill(200, 200, 0);
        rect(this.xPos, this.yPos, width*0.005, height*0.02, 0, 0, 10, 0);
        rect(this.xPos, this.yPos + height*0.06, width*0.005, height*0.02, 0, 10, 0, 0);

      }

      pop();
      break;
    }
  }

  move() {
    if (this.direc > 0) { // Moving East
      this.xPos += this.speed;
      if (this.xPos > width) {
        this.xPos = 0;
      }
    } else { // Moving West
      this.xPos -= this.speed;
      if (this.xPos < 0) {
        this.xPos = width;
      }
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

  changeColour() {
    this.colour = [round(random(255)), round(random(255)), round(random(255))];
    
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
