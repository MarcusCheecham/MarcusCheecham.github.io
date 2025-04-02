/* eslint-disable indent */

// 2D Array Basics DEMO
// Marcus Cheecham
// April 2nd, 2025
// Working with 2D Arrays, Visualizations

let grid;

let squareSize = 100;
const NUM_ROWS = 3; const NUM_COLS = 5;

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);

  grid = [[random(255), random(255), random(255), random(255), random(255)],
          [random(255), random(255), random(255), random(255), random(255)],
          [random(255), random(255), random(255), random(255), random(255)]];
  
}

function renderGrid() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      let fillColour = grid[y][x];
      fill(fillColour);
      square(x*squareSize, y*squareSize, squareSize);

    }
  }
}

function getCurrentY() {
  //determine current row of the mouse position
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / squareSize);
}

function getCurrentX() {
  //determine current col of the mouse position
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / squareSize);
}

function mousePressed() {
  let x = getCurrentX();
  let y = getCurrentY();
  grid[y][x] = floor(random(255));
}

function draw() {
  // interpet the information in the 2D array, and draw a grid of colors on the screen to reflect it.
  renderGrid();
}
