/* eslint-disable brace-style */
/* eslint-disable indent */

// 2D Array Basics DEMO
// Marcus Cheecham
// April 2nd, 2025
// Working with 2D Arrays, Visualizations

let grid = [];

let squareSize = 100;
const NUM_ROWS = 3; const NUM_COLS = 5;
let crossMode = true;

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);

  randomizeGrid();
  
}

function randomizeGrid() {
  for (let y = 0; y < NUM_ROWS; y++) {
    let holder = []; // Holds colums that has been repeated for the amount of NUMS_COLS
    for (let x = 0; x < NUM_COLS; x++) {
      if (random(10) > 4 ) { // 50/50 chance creating either a black or white square
        holder.push(0); // Black Colum
      } else {
        holder.push(255); // White Colum
      }
    }
    grid.push(holder); // Pushes finished row onto grid.
  }
  if (winCondition() && grid[1][1] === 0) { // fail safe to ensure you don't automatically win
    console.log("Fail safe activated! BLACKOUT");
    grid[1][1] = 255;
  } else if (winCondition()) {
    console.log("Fail safe activated! WHITEOUT");
    grid[1][1] = 0;
  }
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

function keyPressed() {
  if (keyIsDown(32)) { // Flips from cross to square and back
    crossMode = !crossMode;
  }
}

function overlay() {
  let xPos = getCurrentX(); // Declaring xPos
  let yPos = getCurrentY(); // Declaring yPos
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      fill(0, 0, 0, 0); // Resets the colour

      if (xPos === x && yPos === y) { // Displays a square on mousePos
        fill(100, 200, 100, 100);
        square(x*squareSize, y*squareSize, squareSize);
      }
      if (!keyIsDown(16)) { // Ensures the SHIFT key isn't down
        if (crossMode) {  // For cross, placing transparent green squares.
          if (yPos > 0) {square(xPos*squareSize, (yPos-1)*squareSize, squareSize);}
          if (yPos < NUM_ROWS - 1) {square(xPos*squareSize, (yPos+1)*squareSize, squareSize);}
          if (xPos > 0) {square((xPos-1)*squareSize, yPos*squareSize, squareSize);}
          if (xPos < NUM_COLS - 1) {square((xPos+1)*squareSize, yPos*squareSize, squareSize);}
        } else { // For square overlay
          if (y > 1) {square(xPos*squareSize, (yPos-1)*squareSize, squareSize);}
          if (y < NUM_ROWS - 1) {square(xPos*squareSize, (yPos+1)*squareSize, squareSize);}
          if (x > 2) {square((xPos-1)*squareSize, yPos*squareSize, squareSize);}
          if (x < NUM_COLS - 2) {square((xPos+1)*squareSize, yPos*squareSize, squareSize);}
          if (x < NUM_COLS - 2 && y < NUM_ROWS - 1) {square((xPos+1)*squareSize, (yPos+1)*squareSize, squareSize);}
          else if (x > 2 && y > 1) {square((xPos-1)*squareSize, (yPos-1)*squareSize, squareSize);}
          else if (x < NUM_COLS - 2 && y > 1) {square((xPos+1)*squareSize, (yPos-1)*squareSize, squareSize);}
          else {square((xPos-1)*squareSize, (yPos+1)*squareSize, squareSize);}
        }
      }
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

function flip(x, y) {
  // take a tile and invert its value

  if (grid[y][x] === 0) {grid[y][x] = 255;}
  else {grid[y][x] = 0;}
}

function mousePressed() {
  // flip current tile to a random greyscale value
  // only fo something if mouseX/mouseY are on the canvas

  let x = getCurrentX();
  let y = getCurrentY();

  // always: flip the "Current" tile
  flip(x, y);

  // sometimes: (depending on position) flip the neighbours

  
  if (!keyIsDown(16)) { // Ensures the SHIFT key isn't down
    if (crossMode) { // For cross flipping
      if (y > 0) {flip(x, y-1);}
      if (y < NUM_ROWS - 1) {flip(x, y+1);}
      if (x > 0) {flip(x-1, y);}
      if (x < NUM_COLS - 1) {flip(x+1, y);}
    } else { // for Square flipping
      if (y > 1) {flip(x, y-1);}
      if (y < NUM_ROWS - 1) {flip(x, y+1);}
      if (x > 2) {flip(x-1, y);}
      if (x < NUM_COLS - 2) {flip(x+1, y);}
      if (x < NUM_COLS - 2 && y < NUM_ROWS - 1) {flip(x+1, y+1);}
      else if (x > 2 && y > 1) {flip(x-1, y-1);}
      else if (x < NUM_COLS - 2 && y > 1) {flip(x+1, y-1);}
      else {flip(x-1, y+1);}
    }
  }
}

function winCondition() {
  // Uses Arrow functions inorder to quickly check if every suqare is black or white.

  return grid.every(row => row.every(item => item === 255)) || grid.every(row => row.every(item => item === 0));

  /*  Deeper explination below on how it works:
  
    // The every() method checks if all array values pass a test.  -w3schools  (Source: https://www.w3schools.com/js/js_array_iteration.asp#mark_every).

    Example:

        ---- 1D Arrays ----
      let array = [18, 20, 13, 80];
      function overTen(value) {
        return value > 10;
      }
      array.every(overTen); // OUTPUTS TRUE

    This is how it looks to the system:

      18 > 10; // OUTPUTS TRUE
      20 > 10; // OUTPUTS TRUE
      13 > 10; // OUTPUTS TRUE
      80 > 10; // OUTPUTS TRUE
      // Returns: true


    // This becomes complicated when it comes to 2D arrays since it checks the arrays inside the array
    // to see if they pass the check instead of the int themselves.

    Example:

        ---- 2D Arrays ----
      let array = [[18, 20, 13, 80], [50, 23, 85, 53]];
      function overTen(value) {
        return value > 10;
      }
      array.every(overTen); // OUTPUTS FALSE


    This is how it would look like to the system:

      [18, 20, 13, 80] > 10; // OUTPUTS FALSE
      [50, 23, 85, 53] > 10; // OUTPUTS FALSE
      // Returns: false

    // In order to truly check each individual array inside the array.
    // We could use multiple NAMED functions but this is weird using multiple NAMED functions since this makes multiple NAMED functions for one simple function
    // I wanted to see what I could do to shorten it down.

    This is how it would practically look like with multiple NAMED functions:

      function funcOne(row) {
        return  row;
      }

      function funcTwo(item) {
        return  item;
      }

      function winningCondition(value) {
        return value === 255;
      }

      grid.every(funcOne.every(funcTwo.every(winningCondition)));


    // So, how could we use array.every() to the best to our ability and without having to make multiple NAMED functions?
    // We use Arrow Functions! "=>" This thing.
    // Arrow functions were introduced in 2015 and became fully supported in 2016.
    // Arrow functions allow you to quickly make functions and simplify functions.

    Example:

      const name = "Marcus";

        ---- Default Functions ----
      function greeting(name) {
        return "Hello", name;
      }
        // OUTPUTS "Hello Marcus"

        ---- Arrow Functions ----
      greeting = (name) => "Hello", name; 
        // OUTPUTS "Hello Marcus"
    
    // After the arrow, it automatically returns a value UNLESS in curly brackets → {} Then is would need a statement like any other function.

    Example:

      greeting = (name) => {return "Hello", name;}
        // OUTPUTS "Hello Marcus"

    OR remove the normal brackets:

      greeting = name => "Hello", name;

    
    // You could also do this and gain the same output but it does not have a variable name linked with it. (This is very usefull in some cases!)

      name => "Hello", name;
        // OUTPUTS "Hello Marcus"

    // A great example would be for this type of arrow function writing is... (example from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

      const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
      console.log(materials.map((material) => material.length));

      // Expected output: Array [8, 6, 7, 9]


    // This will print out the number of letters in the string from the array.
    // This is because the word "material" on the LEFT of the arrow is a parameter to the map() method which looks for a parameter inside of a function aka the Arrow Function
    // (Keep note of the "s" at the end of the name "material" and "materials")
    // "material" is now identified as the item inside the array itself and not the total array like "materials".
    // With this we can do even more stuff like: (More examples from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

      // Easy array filtering, mapping, etc.
      const arr = [5, 6, 13, 0, 1, 18, 23];

      const sum = arr.reduce((a, b) => a + b);
      // 66

      const even = arr.filter((v) => v % 2 === 0);
      // [6, 0, 18]

      const double = arr.map((v) => v * 2);
      // [10, 12, 26, 0, 2, 36, 46]

    // But now, how do we do this for our every() method?

    Like this:

    grid.every(row => row.every(item => item === 255));

    // But you may ask, Why do you need "row" and "item"? how is it changing to check each int??
    // lets make a hypothetical situation where we need everything to equal 0
    // The reason why we need to create "row" and "item" is because of this:

      grid.every(grid === 0)); // CODE VIEW

      [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]] === 0; // SYSTEM VIEW
      // BOTH IS FALSE

    // since that didn't work, lets use only "row" then and see if that would work.

      grid.every(row => row === 0); // CODE VIEW

      [0, 0, 0, 0, 0] === 0; // SYSTEM VIEW
      // BOTH IS ALSO FALSE

    // What about now if we include "item"?

      grid.every(row => row.every(item => item === 0)); // CODE VIEW

      0 === 0; // SYSTEM VIEW
    
    // This is because we need a variable for the number to be stored to be used to compaire with the test.
    // If not, we would be compairing an entire array to a single int, bool, or string. Which does not work.

    // Now you may ask, how is it changing to check each int??
    // well the every() method already loops through arrays to see if it is equal to the test you put it through by looking at the size of the array.

    It basically looks like this:

      function every(func) {
        for (let param of grid) {
          if (!func(param)) {
            return false;
          } else if (grid[param] === grid[grid.length - 1] ;) {
            return true;
          }
        }
      }

    // With this, we can take advantage and it'll act like a double.
    
    Instead of having to do:

      for (let row of grid) {
        for (let item of row) {
          if (item != 0) {
            return false;
          } else if (grid[item] === grid[grid.length - 1] ;) {
            return true;
          }
        }
      }

    we can just do this...

      grid.every(row => row.every(item => item === 0));

    // the every() Method acts like a FOR loop without having to write several lines to make a FOR loop
    // and the Arrow Functions are used to be a short and easy NAMELESS function for the every() Method without having to make extra space for more functions with NAMES
  */
}

function draw() {
  // interpet the information in the 2D array, and draw a grid of colors on the screen to reflect it.
  renderGrid();
  overlay();

  if (winCondition()) { // Displays winning message
    fill(255, 0, 255);
    textSize(width/4);
    text("You Win!", 0, height/1.55);
  }
}
