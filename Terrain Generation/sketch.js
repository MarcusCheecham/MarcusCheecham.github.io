// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 5;
let mySeed;
let noiseStart = 0;
let noiseSpeed = 0.005;
let noiseTime;
let tallestPoint;
let flagX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySeed = random(1000);
}

function draw() {
  background(225);
  noiseTime = noiseStart;
  noiseSeed(mySeed);
  noStroke();
  fill(150);
  generateTerrain();


  noiseStart+= noiseSpeed;
}

function generateTerrain() {
  // use a loop to generate and draw several rectangles side to side to look like some 2D terrain
  rectMode(CORNERS);

  tallestPoint = Infinity;

  for (let x = 0; x < width; x += rectWidth) {
    //generate a random height.
    //change this from using random() to noise()

    let rectHeight = noise(noiseTime);
    rectHeight = round(map(rectHeight, 0, 1, height*0.15, height*0.95));

    //calculate the other corners of our rectangle
    let x2 = x +  rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);

    if (y2 < tallestPoint) {
      tallestPoint = y2; flagX = x;
    }

    placeFlag(flagX, tallestPoint);
    noiseTime += noiseSpeed;
  }
  rectMode(CORNER);
}

function placeFlag(x, y) {
  circle(x, y, 50);

}