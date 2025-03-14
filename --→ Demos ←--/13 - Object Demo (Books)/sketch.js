// Object Demo (Books)
// Marcus Cheecham
// March 12th 2025

// 1. add two more book options (each in a var) and add to the shelf... (connected to my book)
// 2. use a loop to generate 20+ skinny books (can be all named the same if needed)

let myBook;
let bookshelf = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // make 20 books in a row
  let x = 0.3;
  let covers = ["softcover", "hardcover", "lethercover"];
  for (let i = 0; i < 20; i++) {
    let choice = int(random(3));
    bookshelf.push(new Book("A", "Mr. Booth", 789071240973), covers[choice], 515, width * x);
    x+= 0.025;
  }

  myBook = new Book("CS30 Text", "Mr. Scott", 1234567891011, "leatherbound", 515, width * 0.3);
  myBook.printOut();
}

function draw() {
  background(220); //clears the screen each frame
  for (let i = 0; i < bookshelf.length; i++) {
    bookshelf[i].display();
  }
}

// Nice to organize class at the bottom...
class Book {
  //1. constructor
  constructor(title, author, isbn, cover, pages, x) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }

  //2. class methods
  display() {
    //render our book object on the canvas
    rectMode(CENTER); textAlign(CENTER, CENTER);
    textSize(20);

    switch (this.cover) {
    case "softcover":
      fill(250, 200, 150); break;
    case "hardcover":
      fill(120, 255, 255); break;
    case "leatherbound":
      fill(150, 100, 15); break;
    }

    rect(this.x, height/2, this.pages/10, 150);
    fill(255);
    text(this.title[0], this.x, height/2 - 50);
  }

  printOut(){
    //print out the data in a nice format
    print(this.title + ", by " + this.author);
    print("Length: " + this.pages);
    print("ISBN: " + this.isbn);
  }
}