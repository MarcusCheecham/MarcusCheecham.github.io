// CSS Centering and 3D
// Marcus Cheecham
// April 15th, 2025

let angle = 5;

function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  orbitControl();
  background(220);
  angle = map(mouseX, 0, width, -120, 120);
  for (let i = 0; i < 360; i+=45) {
    push();
    rotateY(i);
    drawBox(100);
    pop();
  }
  
}

function drawBox(size) {
  if (size > 3) {
    rotateZ(angle);
    translate(size*1.5, 0);
    box(size);

    drawBox(size*0.8);
  }
  
}