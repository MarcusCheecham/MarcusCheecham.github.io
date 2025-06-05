// SierpinskiSquare - Fractals
// Marcus Cheecham
// April 17th, 2025

let size = 100;

function setup() {
  createCanvas(600, 600);
  background(0);
  // SierpinskiSquare(width/2-size/2, height/2-size/2, size);
  rectMode(CENTER);
  fill(255);
  SierpinskiSquare(width/2, height/2, size, 600);
}

// function draw() {}

function SierpinskiSquare(x, y, size, gridSize) {
  if (size >= 10) { // BASE CASE
    // console.log("Print square");
    square(x, y, size); // PLACES SQUARES
    // console.log("Cords:", x, y);
    let Xi = x;
    let Yi = y;
    // console.log(Xi, Yi);
    // x -= Xi; y -= Yi;
    for(let y = Yi - gridSize/3; y <= Yi + gridSize/3; y += gridSize/3) { // Y CORD SYSTEM
      // console.log("Yi is equal to:", Yi, y);
      for(let x = Xi - gridSize/3; x <= Xi + gridSize/3; x += gridSize/3) { // X CORD SYSTEM
        // console.log("Xi is equal to:", Xi, x);

        if ((x !== Xi) || (y !== Yi)) { // To stop of unnecessary rendering by not placing a square in the center
          console.log("Size is:", size, x, y); // logs for help
          SierpinskiSquare(x, y, size - size*0.50, gridSize/3);
        } else {
          // console.log("Skip square!!");
          // console.log("Skiped cords", Xi, Yi, "  Compare Cords:", x, y);
        }

      }
    }
  } else {
    // console.log("TOO SMALL");
    return false; // STOP FUNC
  }
}
