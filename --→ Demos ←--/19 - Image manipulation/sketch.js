// Project Title
// Your Name
// Date

let pilot; //p5.Image  .width  .height

function preload() {
  pilot = loadImage("assets/aviator.png");
}

function setup() {
  createCanvas(pilot.width, pilot.height);
}

function setPixelColour(pos, r, g, b) {
  // assume pos points at the RED component
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function draw() {
  image(pilot, 0, 0);
  loadPixels(); // fills the array with pixels
  setPixelColour(300, 255, 0, 0);
  background(0);

  // boostImage();

  updatePixels();
}

function drawCharacter() {
  for (let x = 0; x < width; x+=10) {
    for (let y = 0; x < height y+=10) {
      let loc = (i*pilot.width + x) * 4
      let avg = avgPixel(loc);
      if (avg > 200) { text("&", x, y); }
    }
  }
}

function avgPixel(i) {
  // i → index of the red component
  let r = pixels[i];
  let g = pixels[i+1];
  let b = pixels[i+2];
  return (r + g + b)/ 3;
}

function greyscale() {
  // a desaturaction filter 
  for (let i = 0; i < pixels.length; i += 4) {
    let avg = avgPixel(i);
    setPixelColour(i, avg, avg, avg);
  }
}

function boostImage() {
  // a brightening filter; make each pixel brighter
  let boost = map(mouseX, 0, width, -100, 100);
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i] + boost;
    let g = pixels[i+1] + boost;
    let b = pixels[i+2] + boost;
    setPixelColour(i, r, g, b);
  }
}
