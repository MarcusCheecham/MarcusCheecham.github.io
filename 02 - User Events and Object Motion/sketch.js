// User Events
// Marcus Cheecham
// Febuary 7th, 2025

/*Global Variable ceclarations
Define your goals here.
You can only store simple/primitive data
at this point. (no system variables) */

let tSize;
let x; //declaration only

function setup() {
  //runs once at the start
  createCanvas(windowWidth, windowHeight);
  x = width/2; // Initialization, do in setup()
  rectMode(CENTER);
}

function draw() {

  //runs over and over, target 60 FPS
  background(220);

  // ------------ Mouse ----------

  //print("Current frame: " + frameCount); //Console.log();
  fill("green"); // Fill/ stroke can use color strings
  textSize(tSize);
  text(mouseX + ", " + mouseY + " " + mouseButton, mouseX, mouseY);

  // -------- Keybored section ---------
  fill(100, 200, 100);
  square(x, 200, 100, 5);

  if (keyIsDown(LEFT_ARROW)) {
    x-= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x+= 5;
  }
  if (x < 0) { // off left edge
    x = width; // Create a around effect
  }
  if (x > width) {
    x = 0;
  }
}

function mousePressed() {
  //this is called automatically... Do NOT call it yourself.
  // This is called ONCE per MOUSE BUTTON PRESS
  tSize = random(5, 100);
}