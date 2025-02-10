// Drawing with shapes Project
// Marcus Cheecham
// Febuary 10th 2025

//Gloabal Variable Declarations
let boxX = 200, boxY = 100;
let playX, playY, playWID, playHIG;

function setup() {
  createCanvas(windowWidth, windowHeight);
  playWID = 100;
  playHIG = 100;
  playX = (width/2) - (playWID/2);
  playY = (height/2) - (playWID/2);
}

function draw() {
  background(220);
  drawCharacter();
  //drawBox();
}

function drawCharacter() {
  // to practice drawing shapes and understanding
  // the underlying coordinates
  noStroke();
  fill(200, 255, 100);
  rect(playX, playY, playWID, playHIG, 50, 50, 0, 0);
  fill(0, 0, 0);
  circle(playX + (playWID*0.25), playY + (playHIG*0.40), 10);
  circle(playX + (playWID*0.75), playY + (playHIG*0.40), 10);
  rect(playX + (playWID*0.40), playY + (playHIG*0.50), 20, 5, 5);
  fill(220, 220, 220);
  rect(playX + (playWID*0.10), playY + (playHIG*0.80), playWID*0.80, playHIG*0.20);
}

// function drawBox() {
//   // Draws a box on the screen
//   fill(255, 155, 55);
//   rect(boxX, boxY, 50, 30, 5, 5, 0, 0);
//   rect(boxX, boxY - 50, 30);
// }

// function keyPressed() {
//   if (key === "a") {
//     boxX = 0;
//   }
//   if (key === "b") {
//     boxY = 400;
//   }
//   if (keyCode === ESCAPE) {
//     boxX = width * 0.85; // 85% across the screen
//     boxY = height * 0.6; // 60% down the screen
//   }
// }