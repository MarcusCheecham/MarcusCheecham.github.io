// Interactive Scene
// Marcus Cheecham
// Febuary 11th, 2025
//
// And interactive scene that allows your to use both mouse and keyboard inputs to change and interact with the screen
let mouse2X;
let timeValue;
let x;
let y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  mouse2X = mouseX;
  y = height/2;
  x = width/2;
}

function draw() {
  timeValue = map(mouseX, 0 + width/5, width, 155, 10, true);
  background(89 - timeValue, 211 - timeValue, 255 - timeValue);
  sunsMovement();

  // Sky / Clouds
  noStroke();
  fill(255 - timeValue);
  rotate(50.5);
  ellipse(width*0.11, height*0.04, width*0.10, height*0.10);
  rotate(-101);
  ellipse(width*0.08, height*0.15, width*0.10, height*0.10);
  rotate(50.5);
  ellipse(width*0.10, height*0.10, width*0.11, height*0.10);



  // Ground
  stroke(1);
  fill(0, 200 - timeValue, 0);
  ellipse(width*0.65, height*0.85, width*0.90, height*0.70);
  fill(0, 230 - timeValue, 0);
  ellipse(width*0.25, height, width*0.90, height*0.70);
  fill(0, 255 - timeValue, 0);
  ellipse(width*0.75, height*1.15, width*0.90, height*0.70);



  //--- DEV VIEW ----
  // Pos/Frame
  fill(0, 0, 0);
  textSize((height*0.015)+(width*0.015));
  if (mouseX > width/2) {
    mouse2X = mouseX - width*0.15;
  } else {
    mouse2X = mouseX;
  }
  text(frameCount + " [" + mouseX + ":" + mouseY + "]", mouse2X, mouseY);

  if (frameCount >= 60) {
    frameCount = 0;
  }

  player();

}

function player() {
  fill(255);
  line(x, y + height*0.10, x + width*0.02, y + height*0.15);
  line(x, y + height*0.10, x - width*0.02, y + height*0.15);
  line(x, y + height*0.05, x - width*0.03, y);
  line(x, y + height*0.05, x + width*0.03, y);
  line(x, y, x, y + height*0.10);
  circle(x, y, height*0.025 + width*0.025);;
  curve (x - width*0.01, y - height*0.01, x - width*0.005, y + height*0.01, x + width*0.005, y + height*0.01, x + width*0.01, y - height*0.01);
  fill(0);
  circle(x - width*0.005, y - height*0.005,  height*0.005 + width*0.005);
  circle(x + width*0.005, y - height*0.005,  height*0.005 + width*0.005);

  if (keyIsDown(LEFT_ARROW)) {
    x-= width*0.01;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x+= width*0.01;
  }

}

function sunsMovement() {
  fill(255, 255, 0);
  triangle(width*0.85, height*0.15, width*0.90);

  // Suncurve
  
  noFill();
  //  ctrlX ctrlY anchorX anchorY | anchorX   anchorY    ctrlX    ctrlY  
  curve(0-(width*0.15), height*2, 0, height*0.4, width, height*0.4, width, height*2);


  strokeWeight(1);
  stroke(1);
  let t = norm(mouseX, width/2, width*1.15);
  //              x:ctrl anchor anchor ctrl  
  let sunX = curvePoint(0- width*0.22, 0, width, width, t);
  //              y:ctrl anchor anchor ctrl
  let sunY = curvePoint(height*2, height*0.4, height*0.4, height*2, t);
  // 0, 150
  // 395, 45
  // 797 , 150

  //width = 797
  // height = 337

  //Sun
  fill(255, 255, 0);
  triangle(width*0.85, height*0.15, width*0.90);
  circle(sunX, sunY, width*0.05 + height*0.05);


  // --- Moon ---

  // Mood curve

  t = norm(mouseX, width/2, 0 - width*0.15);

  let moonX = curvePoint(width, width, 0, 0 - width*0.22, t);
  //              y:ctrl anchor anchor ctrl
  let moonY = curvePoint(height*2, height*0.4, height*0.4, height*2, t);


  fill(180);
  circle(moonX, moonY, width*0.05 + height*0.05);
  noStroke();
  fill(120);
  circle(moonX+(width*0.005), moonY-(height*0.02), (width*0.01)+(height*0.01));
  ellipse(moonX-(width*0.005), moonY+(height*0.02),(width*0.01)+(height*0.01), (width*0.01)+(height*0.01));

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
//     fill(0, 0, 255);
//     snow.push(circle(random(0, width), 0, 10));
//   }
//   fill(255, 0, 0);
//   rect(0, 0, width, 10);
// }
