// Created by Layne Soike
// Last edited 02/24/2017
// This program displays a visualization of Layne's 
// heart rate each minute of a 30 minute workout

// heart rate (bpm) by minute
// data from 02/13/2017 07:14-07:44AM; source Layne's Apple Watch

var rate = [68, 104, 135, 133, 126, 131, 149, 157, 157, 166, 162, 159, 117, 157, 150,101, 122, 156, 153, 157, 153, 157, 150, 124, 96, 104, 113, 103, 110, 110];

// preloads the image of the Apple Watch
function preload() {
  watch = loadImage("apple_watch.png");
}

function setup() {
  createCanvas(1260, 700); // sets canvas size to 1200 x 700
  textFont("Francois One"); // sets the font to the Google, Font Francois One
}

function draw() {
  background(255); // clears the background
  image(watch, 120, 100);
  drawHearts(); // draws the data points as hearts
  drawAxis(); // draws the graph axis, hashmarks and numbers
  drawLabels(); // draws the graph labels and title
  displayValues(); // calls display values, which shows values on hover

}

// draws the data points as hearts on a graph where the x-axis shows the minute of the workout
// and the y-axis showing the heart rate (bpm) during that minute
function drawHearts() {
  noStroke(); // removes the stroke as we are combining 3 shapes to make a heart
  fill(255, 0, 0); // sets the fill color to red
  for (i = 0; i < 30; i++) { // loops from 0 to 30 (minutes)
    ellipse(i * 32 + 190, 500 - rate[i], 10, 10); // draws the left hump of the heart
    ellipse(i * 32 + 198, 500 - rate[i], 10, 10); // draws the right hump of the heart
    quad(i * 32 + 187, 504 - rate[i], i * 32 + 194, 500 - rate[i], i * 32 + 201, 504 - rate[i], i * 32 + 194, 510 - rate[i]); // draws the point of the heart
  }
}

// draws the axis, hash marks and numbers for the graph
function drawAxis() {
  stroke(0); // sets the color of the lines to black
  strokeWeight(2); // sets the weight of the lines to 2
  line(160, 500, 1121, 500); // draws the line of the x-axis
  line(160, 320, 160, 500); //  draws the line of the y-axis
  for (i = 0; i < 30; i++) { // loops from 0 to 30 (minutes)
    line(i * 32 + 194, 495, i * 32 + 194, 505); // draws 30 hash marks along the x-axis
  }
  for (i = 0; i < 9; i++) { // loops from 0 to 9 (amount of hash marks to put on y-axis) 
    line(155, 480 - i * 20, 165, 480 - i * 20); // draws 9 hash marks along the y-axis
  }
  noStroke(); // removes the stroke
  textSize(11); // sets the text size to 11
  fill(0); // sets the text color to black
  for (i = 0; i < 30; i++) {  // loops from 0 to 30 (minutes)
    text(i + 1, i * 32 + 190, 525); // draws the text for the x-axis hashmarks from 1 to 30 (minutes)
  }
  for (i = 0; i < 5; i++) { // loops from 0 to 5 (amount of hash marks that have text)
    text(i * 40 + 20, 130, 483 - i * 40); // draws the text for the y-axis (20 to 180 in increments of 40)
  }
}

// draws the graph labels and title
function drawLabels() {
  textSize(14); // sets the text size to 14
  text("Heart Rate", 45, 400); // draws first line of text for the y-axis label and places it to the left
  text("(bpm)", 45, 415); // draws second line of text for the y-axis label and places it to the left under 1st line
  text("Duration of Workout (min)", 565, 570); // draws text for the x-axis label and places it underneath
  textSize(45); // sets the size of the title text to 30
  text("LAYNE'S HEART RATE", 250, 185); // draws the title text up at the top
  textSize(14); // sets the text size to 14
  text("During a 30-Minute Workout", 250, 205); // draws the subtitle text underneath the title
}

// calls display values, which shows values on hover
function displayValues() {
  strokeWeight(2); // sets the stroke weight of the hover box to 2
  stroke(0); // sets the stroke color of the hover box to black
  fill(240); // sets the fill color of the hover box to light grey
  for (i = 0; i < 30; i++) { // loops from 0 to 30 (minutes)
    if (mouseX > i * 32 + 184 && mouseX < i * 32 + 204 && mouseY > 494 - rate[i] && mouseY < 510 - rate[i]) { // determines when to show the hover box when mouse is over data point
      rect(mouseX, mouseY + 20, 107, 45); // draws the rectangle for the hover box
      noStroke(); // removes the stroke from the following text
      fill(0); // sets the text color to black
      textSize(11); // sets the text size to 14
      text("Heart rate: " + rate[i], mouseX + 10, mouseY + 40); // draws the first line of text for the hover box
      text("Min of workout: " + (i + 1), mouseX + 10, mouseY + 55); // draws the second line of text for the hover box
    }
  }
}