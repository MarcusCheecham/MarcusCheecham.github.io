// Bouncing Box
// Marcus Cheecham
// March 11th 2025

let x = 200;
let y = 300;
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  speed = random(3,8);
}

function draw() {
  posCalc();
  background(80);
  rect(x, y, 250, 75);
}

function posCalc() {
  // Adds speed to x, y position

  x+= speed;
  y+= speed;
  
  // Inverts the speed to go left, then right ONCE it hits a wall

  if (y >= height-75 || y <= 0) {
    speed = speed * -1;
  }
  if (x >= width-250 || x <= 0) {
    speed = speed * -1;
  }
}