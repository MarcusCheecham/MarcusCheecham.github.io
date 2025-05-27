// Map and text files
// JS split and spread syntax
// Marcus Cheecham
// May 26th, 2025
let textfile;

function preload() {
  textfile = loadStrings("Assets/info.txt");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  processText();
}

function draw() {
  background(220);
}

function processText() {
  print("SPLIT INTO WORDS");
  let splitWords = textfile[0].split("");
  print(splitWords);

  print("SPLIT INTO CHARECTERS");
  let splitChar = textfile[1].split("");
  print(splitChar);
}
