// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSpacing = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noStroke();
  renderGrid();
}

function roundedDist(x1, y1, x2, y2) {
  // take two coordinate points and return the distance
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a) + sq(b));

  return round(c);
}

function renderGrid() {
  // use nested loop to fraw objects in a grid arrangement
  for (let x = 0; x < width; x+= gridSpacing) {
    for (let y = 0; y < height; y+= gridSpacing) {
      let d = roundedDist(x, y, mouseX, mouseY);
      // set fill value proxy to mouse
      let alpha = map(d, 0, 150, 255, 0);

      if (d >= 150) {
        noFill();
      } else {
        if (d < 100) {
          fill(50, 100, 150, alpha);
        } else {
          fill(255, alpha);
        }
      }
  
      circle(x, y, gridSpacing);
  
      textAlign(CENTER, CENTER);
      text(d, x, y);
      
    }
  }
}
