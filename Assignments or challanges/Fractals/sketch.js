// Project Title
// Marcus Cheecham
// April 17th, 2025



function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  SierpinskiSquare(300, 300, 50);
}

function SierpinskiSquare(x, y, size) {
  
  if (size >= 10) {
    let Xi = x/2;
    let Yi = y/2;
    size -= 10;
    // x -= Xi; y -= Yi;
    for(y = Yi; y >= Yi*3; y += Yi) {
      for(x = Xi; x >= Xi*3; x += Xi) {
        // if (y != )
        fill(255);
        square(x, y, size);
        SierpinskiSquare(x, y, size - 10);
      }
    }
  }
}
