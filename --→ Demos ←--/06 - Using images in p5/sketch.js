// Image Basics
// Marcus Cheecham
// Febuary 26th, 2025

// Global Variables
let LionL, lionR;
let pinImages = []; // 0-8
let currentFrame = 0;
let facing = "left"; // "left" "right"

function preload() {
  // function runs and won't end untill all file loading is complete

  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  for (let i = 0; i <= 8; i++) {
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  // frameRate(60);
}

function draw() {
  background(220);
  pinWheel();
  drawLion();
}

function drawLion() {
  // ALT + LEFTSHIFT + F  = (format) + indentation

  let sizeX = lionL.width / 2;
  let sizeY = lionL.height / 2;

  if (movedX > 0) facing = "right";
  else if (movedX < 0) facing = "left";

  if (facing === "left") image(lionL, mouseX, mouseY, sizeX, sizeY);
  else image(lionR, mouseX, mouseY, sizeX, sizeY);
}

function pinWheel() {
  image(pinImages[currentFrame], width/2, height/2);
  if (frameCount % 3 === 0) currentFrame++;
  if (currentFrame >= 9) currentFrame = 0;
}
