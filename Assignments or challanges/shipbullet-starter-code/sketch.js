// OOP Pair Programming Starter Code
// Marcus Cheecham (SOLO)
// March 20th, 2025


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship
    this.xPos = x;  this.yPos = y;
    this.img = theImage;
    this.bullets = [];
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here

    if (keyIsDown(87) === true) {
      this.yPos-= 5;
    }
    if (keyIsDown(83) === true) {
      this.yPos+= 5;
    }

    if (keyIsDown(65) === true) {
      this.xPos-= 5;
    }
    if (keyIsDown(68) === true) {
      this.xPos+= 5;
    }

    if (this.xPos > width) {
      this.xPos = 0;
    }
    if (this.xPos < 0) {
      this.xPos = width;a
    }

    // if doing extra for experts, show bullet(s)

    for (let bullet of bullets) {
      bullet.update();
      bullet.display();
    }
  }

  display() {
    // show the ship
    image(this.img, this.xPos, this.yPos, this.img.width/2, this.img.height/2);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
    
    if (keyIsDown(32) === true) {
      this.bullets.push(new Bullet(this.xPos, this.yPos, bulletImage));
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, theImage) {
    // define the variables needed for the bullet here
    this.xPos = x;  this.yPos = y;
    this.img = theImage;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    this.yPos+= 5;
    this.isOnScreen();
  }

  display() {
    // show the bullet
    image(this.img, this.xPos, this.yPos);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    if (this.xPos >= width || this.xPos <= 0 || this.yPos >= height || this.yPos <= 0) {
      bullets.pop();
    }
  }

  hitTarget() {
    // Checks if target has been hit
  }
}

