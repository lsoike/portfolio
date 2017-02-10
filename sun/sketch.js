// Created by Layne Soike
// Last edited 2/10/17
// Simulates a sunset and sunrise with changing colors

var y = 100 // sets the y position
var dir = 1.5 // controls the direction of the sun's movement

var mountainDir = -.5 // controls whether the mountains are getting lighter or darker
var mountainTint = 130; // the mountains original tint

var sunDir = -.5 // controls the color of the sun from yellow to orange
var sunTint = 230; // sets the starting color of the sun

var skyDir = -1 // controls the color of the sky from blue to pinkish purple
var skyTint = 20; // sets the starting color of the sky

function setup() {
  createCanvas(800, 600); // sets the size of the canvas
}

function draw() {
  sky(skyTint); // calls the sky function passing the original skyTint
  sun(sunTint); // calls the sun function passing the original sunTint
  mountains(mountainTint); // calls the mountains function passing the original mountainsTint
  
  if (skyTint < 0) { // if the current sky tint is less than 0
    skyDir = 1.1; // sets the sky to get more purple
  } else if (skyTint > 255) { // if the current sky tint is greater than 255
    skyDir = -1.1; // sets the sky to get more blue
  }

  skyTint = skyTint + skyDir; // update the skyTint based on the value of skyDir
  
  if (sunTint < 120) { // if the current sun tint is less than 120
    sunDir = .46; // sets the sun to get more orange
  } else if (sunTint > 230) { // if the current sun tint is greater than 230
    sunDir = -.46; // sets the sun to get more yellow
  }
  
  sunTint = sunTint + sunDir; // update the sunTint based on the value of sunDir
  
  if (mountainTint < 35) { // if the current mountain tint is less than 35
    mountainDir = .4; // sets the mountains to get darker
  } else if (mountainTint > 128) { // if the current mountain tint is greater than 128
    mountainDir = -.4; // sets the mountains to get lighter
  }
  
  mountainTint = mountainTint + mountainDir; // update the mountainTint based on the value of mountainDir
}

// draws the sky, with a given skyTint
function sky(skyTint) {
  background(skyTint, 193, 250);
}

// draws the sun, with a given sunTint, and determines the movement
function sun(sunTint) {
  noStroke();
  fill (255, sunTint, 40);
  ellipse(400, y, 180, 180);
  
  y = y + dir
  if (y > 450 || y < 100) {
    dir = dir * -1
  }
}

// draws the mountains, with a given mountainTint
function mountains(mountainTint) {
  fill(mountainTint);
  quad(0, 350, 150, 225, 700, 600, 0, 600);
  quad(100, 600, 600, 150, 800, 300, 800, 600);
}