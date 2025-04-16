// Square fractal
// Marcus Cheecham
// April 15th, 2025



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  randomSeed(1);
  background(220);
  squareFractal(width/2, height/2, height/2);
}

function squareFractal(x, y, sideL) {
  fill(random(255), random(255), random(255), 100);
  noStroke();
  square(x, y, sideL);

  if(sideL > 5) {
    squareFractal(x-sideL/2, y-sideL/2, sideL/2);
    squareFractal(x-sideL/2, y+sideL/2, sideL/2);
    squareFractal(x+sideL/2, y-sideL/2, sideL/2);
    squareFractal(x+sideL/2, y+sideL/2, sideL/2);
  }
}
