// Terrain Generation
// Marcus Cheecham
// March 10th 2025

let rectWidth = 1;
let mySeed;
let noiseStart = 1;
let noiseSpeed = 0.01;
let noiseTime;
let tallestPoint;
let flagX;
let smallestPoint;

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
    fill(150);
    rect(x, height, x2, y2);

    if (y2 >= smallestPoint) {
      smallestPoint = y2;
    }

    if (y2 <= tallestPoint) {
      tallestPoint = y2; flagX = x;
    }

    noiseTime += noiseSpeed;
  }

  placeFlag(flagX, tallestPoint);

  rectMode(CORNER);
  averageHeight();
}

function placeFlag(x, y) {
  fill(255);
  circle(x, y, 50);
}

function averageHeight() {
  fill(0, 255, 0);
  stroke(1);
  line(0, (smallestPoint + tallestPoint)/2, width, (smallestPoint + tallestPoint)/2);
}

function keyReleased() {
  if (keyCode === 37 && rectWidth > 1) {
    rectWidth--;
  }

  if (keyCode === 39 && rectWidth < width) {
    rectWidth++;
  }
}

