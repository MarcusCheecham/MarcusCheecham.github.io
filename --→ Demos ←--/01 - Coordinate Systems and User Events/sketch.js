// Coordinate system and User Events
// Marcus Cheecham
// Febuary 6th, 2025
// Not Run-to-Completion, but interactive programs...


function setup() {
  // runs, ONCE, at the very beginning
  createCanvas(500, 500);
}

function draw() {
  // draw LOOP, repeats forever till program ends
  // - target of 60 fps per second
  // A new image is drawn at tge bottom of the loop
  background(220);

  twoCircles();
  circleSpread(50);
  // Secret calculated delay()
  //Screen updates at end of loop
}

function circleSpread(size) {
  // Creates a circle at all four corners of the canvas
  // And one at the center of the canvas
  fill(255, 150, 150)
  circle(0, 0, size); // Top left
  circle(width, 0, size); // Top Right
  circle(0, height, size); // Bottom Right
  circle(width, height, size); //Bottom Left
  circle((width/2), (height/2), size); //Center
}

function twoCircles() {
  // Draws two circles, one at a fixed location
  // and one at the mouse location
  fill(0, 255, 0); // Inside colour
  stroke(0, 0, 255); // Outline of object
  strokeWeight(5); // Size of outline
  circle(250, 250, 50);

  noStroke(); // Turns off outline
  fill(255, 0, 0); // red Fill
  circle(mouseX, mouseY, 30);
}
