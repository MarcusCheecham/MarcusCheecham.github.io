// Round Racers
// Marcus Cheecham
// March 17th, 2025

let racer;
let racers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let autoHeight = height/5; autoHeight <= height; autoHeight+=height/5) {
    racer = new RoundRacers(autoHeight, "Red");
    racers.push(racer);
  }


}

class RoundRacers {
  constructor(yPosition, colour) {
    this.xPos = 0;
    this.yPos = yPosition;
    this.xSpeed = random(3, 15);
    this.colour = colour;
  }

  move() {
    if(this.xPos >= width) {
      this.xPos = 0;
    }
    this.xPos += this.xSpeed;
  }

  display() {
    fill(this.colour);
    circle(this.xPos, this.yPos, width*0.01+height*0.01);
  }

}

function draw() {
  background(0);
  for (let i = 0; i < 3; i++) {
    racers[i].move();
    racers[i].display();
  }
}


