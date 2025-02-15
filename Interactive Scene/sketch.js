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
  sunMovement();


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
  // Pos/Frame
  fill(0, 0, 0);
  textSize((height*0.015)+(width*0.015));
  if (mouseX > width/2) {
    mouse2X = mouseX - 95;
  } else {
    mouse2X = mouseX;
  }
  text(frameCount + " [" + mouseX + ":" + mouseY + "]", mouse2X, mouseY);

  if (frameCount >= 60) {
    frameCount = 0;
  }

}

function sunMovement() {
  fill(255, 255, 0);
  triangle(width*0.85, height*0.15, width*0.90);

  // Suncurve
  
  noFill();
  //  ctrlX ctrlY anchorX anchorY | anchorX   anchorY    ctrlX    ctrlY  
  curve(0-(width*0.15), height*2, 0, height*0.4, width, height*0.4, width, height*2);


  strokeWeight(1);
  stroke(1);
  let t = 0.5 * tan(mouseX * 0.002);
  //              x:anchor ctrl ctrl  anchor   
  let sunX = curvePoint(0-(width*0.22), 0, width, width, t);
  //              y:anchor ctrl ctrl anchor
  let sunY = curvePoint(height*2, height*0.4, height*0.4, height*2, t);
  // 0, 150
  // 395, 45
  // 797 , 150

  //width = 797
  // height = 337

  //Sun
  fill(255, 255, 0);
  triangle(width*0.85, height*0.15, width*0.90);
  circle(sunX, sunY, (width*0.05)+(height*0.05));


  // --- Moon ---

  // Mood curve

  t = 0.5 * tan(mouseX * 0.00185) + 1.5

  let moonX = curvePoint(0-(width*0.22), 0, width, width, t);
  //              y:ctrl anchor anchor ctrl
  let moonY = curvePoint(height*2, height*0.4, height*0.4, height*2, t);


  fill(200)
  circle(moonX+width*0.01, moonY + width )
  circle(moonX, moonY, (width*0.05)+(height*0.05))

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
