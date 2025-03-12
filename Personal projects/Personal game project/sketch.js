// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowHeight + 100, windowHeight);
}

function draw() {
  background(220);

  gameGrid();

}

function gameGrid() {
  for (let x = width/7; x < width; x+= width/7) {
    line(x, 0, x, height);
  }
  for (let y = height/7; y < height; y+= height/7) {
    line(0, y, width, y);
  }
}