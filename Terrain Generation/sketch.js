// Terrain Generation
// Marcus Cheecham
// March 10th 2025

let rectWidth = 1;
let mySeed;
let noiseStart = 1;
let noiseSpeed = 0.001;
let noiseTime;
let tallestPoint;
let flagX;
let xSum;
let rectHeight;

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

    rectHeight = noise(noiseTime);
    rectHeight = round(map(rectHeight, 0, 1, height*0.15, height*0.95));

    //calculate the other corners of our rectangle
    let x2 = x +  rectWidth;
    let y2 = height - rectHeight;
    fill(150);
    rect(x, height, x2, y2);

    if (y2 <= tallestPoint) {
      tallestPoint = y2; flagX = x;
    }

    noiseTime += noiseSpeed;

    xSum += y2;
  }

  placeFlag(flagX, tallestPoint);

  rectMode(CORNER);
  averageHeight();
  xSum = 0;
}

function placeFlag(x, y) {
  fill(255);
  stroke(1);
  strokeWeight(height*0.00075+width*0.00075);
  stroke(255, 0, 0);
  // line(x, y, x, y*0.85);
  // triangle(x, y*0.85, x*1.05, y*0.90, x, y*0.95);

  line(x, y, x, rectHeight / y*50);


  // circle(x, y, height*0.025+width*0.025);
}

function averageHeight() {
  stroke(1);
  strokeWeight(height*0.003+width*0.003);
  stroke(255, 0, 0);
  line(0, xSum/(width/rectWidth), width, xSum/(width/rectWidth));
}

function keyReleased() {
  if (keyCode === 37 && rectWidth > 1) {
    rectWidth--;
  }

  if (keyCode === 39 && rectWidth < width) {
    rectWidth++;
  }
}

