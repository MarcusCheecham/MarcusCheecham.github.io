// Drawing with single loops
// Marcus Cheecham
// Febuary 24th, 2025



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  gradientBackground();
  circleLine();

  //Screen gets updated here
}


function gradientBackground() {
  // Create a gradient to use as a background
  let h = 30;

  // use a loop to draw a vertical stack of rectangles
  for(let y = 0; y < height; y+= h) {
    noStroke();
    let mappedY = map(y, 0, height, 0, 255);
    let reversedY = map(y, 0, height, 255, 0);
    fill(mappedY, reversedY, mouseX/3);
    rect(0, y, width, h);
  }
}

function circleLine() {
  // use a loop (for or a while) to draw a line of circles side by side
  let d = 40; // Diameter of a circle
  let y = height/2; // Places the circle at the center of the screen
  let xStart = 0;
  let xEnd = mouseX;

  // Use a loop to do the drawing
  // Results in a single image NO ANIMATION
  for(let x = xStart; x <= xEnd; x+= d) {
    circle(x, y, d);
  }
}