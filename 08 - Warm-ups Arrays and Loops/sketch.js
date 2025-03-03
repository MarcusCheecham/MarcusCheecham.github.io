// Warm up Arrays and Loops
// Marcus Cheecham
// March 03, 2025
//
// Warp up exercises:
// 1. Summing an Array
// 2. Drawing with Loops practices

let a = [22, 11, 5, 5, 90, 80, 70, 60];
//       0   1   2  3  4   5   6   7
// a.length() is 8

function setup() {
  createCanvas(400, 400);
  background(200);
  // TASK 1:  Add up all the values in out array and display the total in the console
  arrayAdditionIndex(a);
  arrayAdditionItem(a);
  textAlign(CENTER, CENTER);
  circleX();
}

function draw() {
  
}

function arrayAdditionIndex(x) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    result += x[i];
  }
  console.log(result);
  return result;
}

function arrayAdditionItem(x) {
  let result = 0;
  for (let currentNumber of x) {
    result += currentNumber;
  }
  console.log(result);
}

function circleX() {
  let pos1, pos2 = width, size = 15;
  for (pos1 = 0; pos1 <= width; pos1+= width/10) {
    circle(pos1, pos1, size);
    circle(pos2, pos1, size);
    pos2 -= width/10;
  }

}