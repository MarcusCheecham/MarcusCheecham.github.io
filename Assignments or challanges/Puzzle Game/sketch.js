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

function winCondition() {
  // Uses Arrow functions inorder to quickly check if every suqare is black or white.

  return grid.every(row => row.every(item => item === 255)) || grid.every(row => row.every(item => item === 0));

  // Deeper explination below:
  /*
  
    // The every() method checks if all array values pass a test.  -W3Schools.
    // This becomes complicated when it comes to 2D arrays since it checks the arrays inside the array
    // to see if they pass the check instead of the int themselves.

    Example:

        ---- 1D Arrays ----
      let array = [18, 20, 13, 80];
      function overTen(value) {
        return value > 10;
      }
      array.every(overTen); // OUTPUTS TRUE

        ---- 2D Arrays ----
      let array = [[18, 20, 13, 80], [50, 23, 85, 53]];
      function overTen(value) {
        return value > 10;
      }
      array.every(overTen); // OUTPUTS FALSE

    // In order to truly check each individual array inside the array.
    // We could use a <for loop> but this is weird using a for loop when array.every() already loops throught the entire 1D array

    This is how it would practically look like:

      function winningCondition(value) {
        return value === 255;
      }

    // So how could we use array.every() to the best to our ability?
    // We use Arrow Functions! ->  "=>" This thing
    // Arrow functions were introduced in 2015 and became fully supported in 2016.
    // Arrow functions allow you to quickly make functions and simplify functions.

    Example:

      ---- Default Functions ----
    function greeting(name) {
      return "Hello", name;
    }

      ---- Arrow Functions ----
    greeting = (name) => "Hello", name;
    
    // You could also do this and gain the same output but it does not have a variable name linked with it.

    name => "Hello", name;

    // A great example would be for this type of arrow function writing is...

    const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
    console.log(materials.map((material) => material.length));
    // Expected output: Array [8, 6, 7, 9]

    // This will print out the number of letters in the string from the array.
    // This is because the word "material" on the left of the arrow becomes a child to "materials" (Keep note of the "s" at the end of the name)
    // "material" is now identified as the item inside the array itself and not the total array.
    // With this we can do even more stuff like:

    grid.every(row => row.every(item => item === 255));

    grid = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];

    row = [1, 2, 3, 4, 5]; OR [6, 7, 8, 9, 10]; OR [11, 12, 13, 14, 15];

    item = 1 - 15;

    // But you may ask, how is it changing to check each int?
    // well array.every() already loops through arrays to see if it is equal to the test you put it through.
    // The reason why we need to create "item" and cannot just use "row" like this:

    grid.every(row => row === 255)); // ERROR
    
    // Is because we need a variable for the number to be stored to be used to compaire with the test.
    // If not, we would be compairing an entire array to a single int, bool, or string. Which does not work.

    This is how it would look like to the system:

    [1, 2, 3, 4, 5] === 255; // OUTPUTS FALSE

    // array.every() acts like a <for loop> without having to write several lines to make a <for loop>

  */
}

function flip(x, y) {
  // take a tile and invert its value

  if (grid[y][x] === 0) {grid[y][x] = 255;}
  else {grid[y][x] = 0;}
}

function draw() {
  // interpet the information in the 2D array, and draw a grid of colors on the screen to reflect it.
  renderGrid();
  
  // for (let y = grid.length; y > 0; y--) {
    // for (let x = grid.; x.length > 0; x--) {
      // console.log(y.every(winCondition));
      // }
  // }

  console.log();

// const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
// console.log(materials.map((material) => material.length));
// // Expected output: Array [8, 6, 7, 9]
// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
}
