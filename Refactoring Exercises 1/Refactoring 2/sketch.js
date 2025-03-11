// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable (Done)
//  - is able to work easily with any canvas size (Done)

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255); 
  creatingLines();
  squareFill();

}

function squareFill() {
  rectMode(CORNERS);
  fill(0);

  if (mouseX < width/2 && mouseY < height/2) { // creating top left square
    rect(0, 0, width/2, height/2);
  }

  if (mouseX > width/2 && mouseY < height/2) { // Creating top right square
    rect(width, 0, width/2, height/2);
  }

  if (mouseX < width/2 && mouseY > height/2) { // Creating bottom left square
    rect(width/2, height/2, 0, height);
  }

  if (mouseX > width/2 && mouseY > height/2) { // Creating bottom right square
    rect(width, height/2, width/2, height);

  }

  rectMode(CORNER);
}

function creatingLines() {
  stroke(0);
  line(width/2, 0, width/2, height); 
  line(0, height/2, width, height/2);
  noStroke(); 
}
