// Planets and Moons
// Marcus Cheecham
// Marach 19th, 2025
//
// Storing objects IN objects, overwriting objects, basic
// Add some style (color, etc..), stars in the background
// multiple planets

let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(15);
  myPlanet.display();
}

function mousePressed() {
  // mouseClicked() → behaves differently in certain browsers
  if(keyIsPressed && keyCode === SHIFT) {
    myPlanet = new Planet(mouseX, mouseY);
  } else {
    myPlanet.createMoon();
  }
}

function keyPressed() {
  // if any key (other than SHIFT) is pressed...
  if(keyCode !== SHIFT) {
    myPlanet.relocate(mouseX, mouseY);
  }
}

class Planet {
  constructor(x, y) {
    this.x = x; this.y = y; this.s = 100;
    this.moons = [];
  }

  display() {
    // draw the planet + all the moons
    circle(this.x, this.y, this.s);

    for (let m of this.moons) {
      m.update();
    }
  }

  relocate(x, y) {
    // First, the planet:
    this.x = x; this.y = y;
    // Then, the Moons:
    for(let m of this.moons) {
      m.x = x; m.y = y;
    }

  }

  createMoon() {
    this.moons.push(new Moon(this.x, this.y));
  }
}

class Moon {
  constructor(x, y) {
    this.x = x; this.y = y; this.speed = 2;
    this.angle = 0; this.orbitRadius = 80; this.s = 25;
  }

  update() {
    // This handles all internal class function class
    this.move();
    this.display();
  }

  move() {
    this.angle += this.speed;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }
}