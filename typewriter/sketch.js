// Created by Layne Soike
// Last edited: 2/9/17
// a program to make it look like you're typing on a typewriter

// preloads the image of the typewriter
function preload() {
  typewriter = loadImage("typewriter.png");
}

function setup() {
  createCanvas(800, 500); // creates the canvas size
  textSize(55); // sets the text size to 55
  textFont("Special Elite"); // changes the font to Special Elite (a Google font that looks like a typewriter)
}

function draw() {
  image(typewriter, 0, 0); // places an image of a typewriter at the bottom of the canvas
}

// every time a key is pressed, that letter appears on the canvas
// every letter you press erases the previous letter and shows the new one in it's place
function keyTyped() {
  background(255);
  text(key, 395, 140);
}