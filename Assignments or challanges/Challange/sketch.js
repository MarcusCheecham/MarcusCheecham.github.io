// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let i = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 255);

  i = 1;
  drawTopHalf();
  drawRightHalf();
  drawBottomHalf();
  drawLeftHalf();
}

function drawTopHalf() {

  for (let x = width*0.05; x <= width; x+= width*0.05) {
    switch(i) {

    case 1:
      fill(255, 0, 0);
      break;

    case 2:
      fill(0, 255, 0,);
      break;

    case 3:
      fill(0, 0, 255);
      i = 0;
      break;
    }
    triangle(x - width*0.05, 0, x, 0, mouseX, mouseY);
    i++;
  }
  for (x = 0; x <= width; x+= width*0.05) {
    fill(255);
    circle(x - width*0.05, 0, width*0.007 + height*0.007);
  }
}

function drawRightHalf() {
  for (let y = height*0.10; y <= height; y+= height*0.10) {
    switch(i) {

    case 1:
      fill(255, 0, 0);
      break;
  
    case 2:
      fill(0, 255, 0,);
      break;
  
    case 3:
      fill(0, 0, 255);
      i = 0;
      break;
    }
    triangle(width, y - height*0.10, width, y, mouseX, mouseY);
    i++;
  }
  for (y = 0; y <= height; y+= height*0.10) {
    fill(255);
    circle(width, y, width*0.007 + height*0.007);
  }
}

function drawBottomHalf() {
  for (let x = width*0.95; x >= 0; x-= width*0.05) {
    switch(i) {

    case 1:
      fill(255, 0, 0);
      break;
  
    case 2:
      fill(0, 255, 0,);
      break;
  
    case 3:
      fill(0, 0, 255);
      i = 0;
      break;
    }
    triangle(x + width*0.05, height, x, height, mouseX, mouseY);
    i++;
  }
  for (x = width; x >= 0; x-= width*0.05) {
    fill(255);
    circle(x + width*0.05, height, width*0.007 + height*0.007);
  }
}

function drawLeftHalf() {
  for (let y = height*0.90; y >= 0; y-= height*0.10) {
    switch(i) {

    case 1:
      fill(255, 0, 0);
      break;
  
    case 2:
      fill(0, 255, 0,);
      break;
  
    case 3:
      fill(0, 0, 255);
      i = 0;
      break;
    }
    triangle(0, y + height*0.10, 0, y, mouseX, mouseY);
    i++;
  }
  for (y = height; y>= 0; y-= height*0.10) {
    fill(255);
    circle(0, y, width*0.007 + height*0.007);
  }
}
