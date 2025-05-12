// Inheritance and Code Across Multiple Files
// Marcus Cheecham
// May 12, 2025

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new circleObj(random(width), random(height)));
    objects.push(new lineObj());
  }
}

function draw() {
  background(220);
  for(let o of objects) {
    o.move();
    o.display();
  }
}

//Parent class ("Super" class)
class AnimatedObject {
  constructor(x, y, ) {
    this.x = x;   this.y = y;
    this.size = 1;
  }

  move() { // Add a "wiggle" effect
    this.x += random(2, -2);
    this.y += random(2, -2);
  }

  display() {
    strokeWeight(6);
    point(this.x, this.y);
  }
}

//child class #1 - circle
class circleObj extends AnimatedObject {
  constructor(x, y) {
    super(x, y )  // call's parent class' constructor
    this.size = random(20, 40);
  }

  // no mention to move()... it will be same as parent's move()
  display() { // function override; copies over top of parent version
    if (dist(this.x, this.y, mouseX, mouseY) < this.size/2) {
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    circle(this.x, this.y, this.size);

  }
}


// child class #2 - line
class lineObj extends AnimatedObject {
  constructor() {
    super(random(width), random(height));
  }

  move() { // combo override + build on parent class version
    super.move(); // begins by running parent class move()
    this.x -= 5;
    if (this.x < 0) this.x = width;
  }

  display() {
    if (mouseIsPressed) {
      strokeWeight(12);
    } else {
      strokeWeight(2);
    }

    line(this.x, this.y, this.x + 15, this.y);
  }
}
