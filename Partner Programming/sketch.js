// Partner Project
// Marcus Cheecham, Abhay Sandha
// Febuary 28th, 2025

let x = 0;
let y = 0;
let direction = 0;
let speed = 1;
let size = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  Johnson();
  console.log(size, speed, direction);

}

function Johnson() {
  square(x, y, size);

  // Size
  if (keyIsDown(68) === true && size < 50) {
    size++;
    if ( x !== 0){
      x--;
    }
    if(y !== 0){
      y--;
    }
  } 

    
  if (keyIsDown(65) === true && size > 5) {
    size--;
    if ( x !== 0){
      x++;
    }
    
    if(y !== 0){
      y++;
    }
  }
  
  // Speed
  if (keyIsDown(87) === true && speed < 30) {
    speed++;
  }
    
  if (keyIsDown(83) === true && speed > 0) {
    speed--;
  }

  // Direction
  switch(direction){
  case 0:
    x += speed ;
    if (x >= width - size){
      direction ++;
      x = width - size;
    }
    break;
      
  case 1:
    y += speed;
    if (y >= height - size){
      direction ++;
      y = height - size;
    }
    break;

  case 2:
    x -= speed;
    if (x <= 0 ){
      direction ++;
      x = 0;
    }
    break;

  case 3:
    y-= speed;
    if (y <= 0 ) {
      direction = 0;
      y = 0;
    }
    break;
  }
}

