// Created by Layne Soike
// Last edited: 01/31/2017
// An interactive monster that moves his eyes along with the mouse, and jumps when prompted by a mouse click.

var page = 0

var x = 250
var y = 500

var eyeDirection = 0
var eyeX = 250

var jumpValue = 1
var jumpDir = 8

function setup() {
  createCanvas(500, 800); // creates a vertical rectangle canvas
  background(240); // sets the background color to light grey
  noStroke(); // removes the stroke from any subsequent shapes
}

// when the mouse is clicked, it toggles between either eyes moving, or monster jumping
function mousePressed() {
  page = 1 - page
}

function draw() {
  background(240); // redraws the background each time
  monster(x, y); // draws the monster and sets him at the x,y position passed
  
  if (page == 0) { // sets parameters for when the page variable is 0
      if (mouseX <= 250) { // when the mouse is on the left side of the screen
        eyeX = eyeX - .5 // move the eyes to the left
        eyeX = max(eyeX - .5, 237) // sets a max so the eyes will stop and not move off the screen
      } else { // when the mouse is anywhere other than the left side (right side)
        eyeX = eyeX + .5 // move the eyes to the right
        eyeX = min(eyeX + .5, 263) // sets a min so the eyes will stop and not move off the screen
      }
  } else { // if the page variable is not equal to 0
    eyeX = 250 // sets the eyes back to the center
    y = y + jumpDir // moves the monster up or down in increments of the jumpDir variable
    if (y < 220 || y > 700) { // when the y position is either less than 220 or greater than 700
      jumpDir = jumpDir * -1 // changes the direction of the monster
    }
  }
}


// draws a monster at the x,y location passed
// this monster includes a head, arms and legs
function monster(x, y) {
  arms(x, y);
  legs(x, y);
  head(x, y);
}

// draws the arms of the monster at the x,y location
function arms(x, y) {
  // arms
  stroke(252, 111, 39); // orange
  strokeWeight(15);
  line(x - 120, y - 120, x - 170, y - 85); // left arm
  line(x - 170, y - 85, x - 160, y - 25); // left forearm
  line(x + 120, y - 120, x + 170, y - 85); // right arm
  line(x + 170, y - 85, x + 160, y - 25); // right forearm

  // hands
  strokeWeight(20);
  stroke(202, 228, 45); // green
  line(x - 160, y - 25, x - 185, y - 15); // left hand finger 1
  line(x - 160, y - 25, x - 160, y); // left hand finger 2
  line(x - 160, y - 25, x - 135, y - 15); // left hand finger 3
  line(x + 160, y - 25, x + 135, y - 15); // right hand finger 1
  line(x + 160, y - 25, x + 160, y); // right hand finger 2
  line(x + 160, y - 25, x + 185, y - 15); // right hand finger 3
}
  
// draws the legs of the monster at the x,y location
function legs(x, y) {
  // legs
  stroke(252, 111, 39); // orange
  strokeWeight(15);
  line(x - 50, y - 25, x - 50, y + 50); // left leg
  line(x + 50, y - 25, x + 50, y + 50); // right leg

  // feet
  noStroke();
  fill(0, 187, 248);
  rect(x -100, y + 40, 90, 55, 20); // left foot
  rect(x + 10, y + 40, 90, 55, 20); // right foot
  
  // toes
  fill(202, 228, 45) // green
  arc(x - 75, y + 95, 20, 25, 3.14, 0); // left toe 1
  arc(x - 55, y + 95, 20, 25, 3.14, 0); // left toe 2
  arc(x - 35, y + 95, 20, 25, 3.14, 0); // left toe 3
  arc(x + 35, y + 95, 20, 25, 3.14, 0); // right toe 1
  arc(x + 55, y + 95, 20, 25, 3.14, 0); // right toe 2
  arc(x + 75, y + 95, 20, 25, 3.14, 0); // right toe 3
}
 
// draws the head at the x,y location
// the head includes the eyes and mouth
function head(x, y) {
  // head
  noStroke();
  fill(0, 187, 248); // blue
  rect(x - 125, y - 200, 250, 180, 50); // head
  ellipse(x - 40, y - 200, 40, 40); // hair
  ellipse(x, y - 200, 40, 40); // hair
  ellipse(x + 40, y - 200, 40, 40); // hair
  fill(64, 208, 255); // light blue for spots
  ellipse(x - 70, y - 150, 70, 50);
  ellipse(x + 70, y - 75, 70, 60);
  ellipse(x - 90, y - 50, 30, 25);
  ellipse(x - 30, y - 100, 40, 30);
  ellipse(x + 80, y - 160, 40, 30);
  eyes(x, y);
  mouth(x, y);
}
 
// draws the eyes at the x,y location 
function eyes(x, y) {
  // eyes
  noStroke();
  fill(202, 228, 45); // green
  ellipse(x - 30, y - 130, 60, 60); 
  ellipse(x + 30, y - 140, 70, 70);
  fill(255); // white
  ellipse(x - 30, y - 130, 40, 40); 
  ellipse(x + 30, y - 140, 50, 50);
  fill(0); // black
  ellipse(eyeDirection + eyeX - 30, y - 133, 15, 15); // left pupil
  ellipse(eyeDirection + eyeX + 30, y - 145, 20, 20); // right pupil
}
  
// draws the mouth at the x,y location
function mouth(x, y) {
  // mouth
  fill(255, 228, 0); // yellow
  arc(x - 40, y - 68, 25, 35, 0, 3.14); // left tooth
  arc(x + 40, y - 68, 25, 35, 0, 3.14); // right tooth
  strokeWeight(8);
  stroke(0);
  line(x - 75, y - 70, x + 75, y - 70); // mouth
}
