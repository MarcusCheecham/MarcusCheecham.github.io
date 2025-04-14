// Fractals Demo
// Marcus Cheecham
// April 14th 2025
// Cantor set, CircleFractal, RectangleFractal



function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(225);
  circleFractal(width/2, height/2, width);
}

function circleFractal(x, y, d) {
  noFill();
  if (d > 1) {
    circle(x, y, depth);
    //recersive Call
    circleFractal(x-d/2, y, d/2);
    circleFractal(x+d/2, y, d/2);
    circleFractal(x, y-d/2, d/2);
    circleFractal(x, y+d/2, d/2);
  }
  // Implicit base case = don't recurse if diameter is small
}

function cantor(x, y, len, depth) {
  if (depth > 1) {
    line(x, y, x+len, y);
    y += 20;
  }
}

// function reCircle(x, y, d) {
//   // recursivly draw circles as long as the (diameter >= 10);

//   circle(x, y, d);
//   if (d >= 10) { // Recursive Call
//     reCircle(x, y, d*0.9);
//   }
//   // implicit base case (if d >= 10)
// }