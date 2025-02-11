// Interactive Scene
// Marcus Cheecham
// Febuary 11th, 2025
//
// And interactive scene that allows your to use both mouse and keyboard inputs to change and interact with the screen
let posX, posY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  posX = random(0, width);
  posY = 0;
}

function draw() {
  background(220);
  textSize(20);
  text(frameCount, mouseX, mouseY);
  for (let i = 0; i <= 2; i++) {
    particalSystem();
  }
}

function particalSystem() {
  if (posY >= height || posX >= width) {
    posX = random(0, width);
    posY = 0;
  }
  noStroke();
  fill(255, 255, 255);
  circle(posX, posY, 10);
  posY+= 2;
  posX+= 1;
}
