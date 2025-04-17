// Project Title
// Marcus Cheecham
// April 17th, 2025



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(degrees);
}

function draw() {
  background(220);
  orbitControl();
  colorMode(RGB, 255);
  specularColor(100, 100, 100);
  specularMaterial(150, 150, 150);

  noStroke();
  colorMode(HSB, 100);
  directionalLight(50, 100, 100, -1, 1, 0);
  directionalLight(100, 0, 100, 1, -1, 0);

  pentagonTorus(0, 0, 30);
  sphere(5, 10, 10);
}

function pentagonTorus(x, y, size) {
  if (size >= 25) {

    translate(x, y);
    torus(size, 15, 3, 3);
    sphere(5, 10, 10);
    rotateZ(90);
    pentagonTorus(x + 50, y+50, size-5);

  }
}
