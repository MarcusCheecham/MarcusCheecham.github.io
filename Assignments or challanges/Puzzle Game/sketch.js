/* eslint-disable brace-style */
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

  grid = [[0, 255, 255, 0, 255],
          [0, 255, 255, 0, 255],
          [255, 0, 0, 255, 0]];
  
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
  // flip current tile to a random greyscale value
  // only fo something if mouseX/mouseY are on the canvas

  let x = getCurrentX();
  let y = getCurrentY();

  // always: flip the "Current" tile
  flip(x, y);

  // sometimes: (depending on position) flip the neighbours

  if (!keyIsDown(16)) {
    if (y > 0) {flip(x, y-1);}
    if (y < NUM_ROWS - 1) {flip(x, y+1);}
    if (x > 0) {flip(x-1, y);}
    if (x < NUM_COLS - 1) {flip(x+1, y);}
  }
}

function winCondition(value) {
  return (value % 255) === 0;
}

function flip(x, y) {
  // take a tile and invert its value

  if (grid[y][x] === 0) {grid[y][x] = 255;}
  else {grid[y][x] = 0;}
}

function draw() {
  // interpet the information in the 2D array, and draw a grid of colors on the screen to reflect it.
  renderGrid();
  
  for (let y of grid) {
    for (let x of grid) {
      console.log(y.x.every(winCondition));
    }
  }
}
