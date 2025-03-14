// Classes and objects (Random Walkers)
// Marcus Cheecham
// March 14, 2025
//
// a first look at working with multiple objects

let singleWalker;
let walkers = [];
const NUM_WALKERS = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  singleWalker = new Walker(100, 150, "Green");
  initWalkers();
  noStroke();
}

function initWalkers() {
  // create a bunch of walker objects, put in array
  for (let i = 0; i < NUM_WALKERS; i++) {
    let c = color(random(255), random(255), random(255), 100);
    let w = new Walker(random(width), random(height), c);
    walkers.push(w);
  }
}

function draw() {
  // background(220);
  // singleWalker.display();
  // singleWalker.walk();

  // for (let currentWalker of walkers) {// loop by item
  //   currentWalker.display();
  //   currentWalker.move();
  // }

  for (let i = 0; i < walkers.length; i++) {
    let w = walkers[i];
    w.move();
    w.display();
  }

  // Ask if the current object is close to the mouse
  if (dist(w.x, w.y, mouseX, mouseY) < 30) {
    // to delete from and arbitrary point in array: splice()  
    walkers.splice(i, 1);
  } 

}

class Walker {
  // 1. Constructor 
  constructor(x, y, c) {
    this.x = x; this.y = y; this.c = c;
    this.speed = random(2, 10);
    this.size = 5;
  }

  // 2. Class methods
  display() { // Render the walker on screen
    rectMode(CENTER);
    fill(this.c);
    square(this.x, this.y, this.size);
  }

  move() {
    // equally likely chance of ↑ ↓ → ← (alt-24)
    let choice = floor(random(4)); // 0 - 3.9999

    switch(choice) {
    case 0: // LEFT
      this.x -= this.speed;
      break;
    case 1:
      this.x += this.speed;
      break;
    case 2:
      this.y -= this.speed;
      break;
    case 3:
      this.y += this.speed;
      break;
    }

  }
}
