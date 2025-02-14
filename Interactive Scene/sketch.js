// Interactive Scene
// Marcus Cheecham
// Febuary 11th, 2025
//
// And interactive scene that allows your to use both mouse and keyboard inputs to change and interact with the screen
let count = 0;
let sunX;
let sunY;
let mouse2X;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  sunX = width*0.93;
  sunY = height*0.15;
  mouse2X = mouseX;
}

function draw() {
  background(89, 211, 255);
  //sun
  fill(255, 255, 0);
  triangle(width*0.85, height*0.15, width*0.90);
  circle(sunX, sunY, 100);


  // Sky / Clouds
  noStroke();
  fill(255);
  rotate(50.5);
  ellipse(width*0.11, height*0.04, width*0.10, height*0.10);
  rotate(-101);
  ellipse(width*0.08, height*0.15, width*0.10, height*0.10);
  rotate(50.5);
  ellipse(width*0.10, height*0.10, width*0.11, height*0.10);



  // Ground
  stroke(1);
  fill(0, 200, 0);
  ellipse(width*0.65, height*0.85, width*0.90, height*0.70);
  fill(0, 230, 0);
  ellipse(width*0.25, height, width*0.90, height*0.70);
  fill(0, 255, 0);
  ellipse(width*0.75, height*1.15, width*0.90, height*0.70);



  //--- DEV VIEW ----
  // Suncurve
  

  // Pos/Frame
  fill(0, 0, 0);
  textSize(20);
  if (mouseX > width/2) {
    mouse2X = mouseX - 110;
  } else {
    mouse2X = mouseX;
  }
  text(frameCount + " [" + mouseX + ":" + mouseY + "]", mouse2X, mouseY);

  if (frameCount >= 60) {
    frameCount = 0;
  }

}

function keyPressed() {
  // Sun up
  // background(89, 211, 255);
  // sunX = width*0.93;
  // sunY = height*0.15;
  
  // Sun setting
  // sunX = width*0.93;
  // sunY = height*0.15;

  // Sun gone
  // sunX = width;
  // sunY = height;

}

// function particalSystem() {
//   let snow = [];
//   let snowPos = [];
//   for (count <= 1; count++) {
//     fill(0, 0, 255)
//     snow.push(circle(random(0, width), 0, 10));
//   }
//   fill(255, 0, 0);
//   rect(0, 0, width, 10);
// }
