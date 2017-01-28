var x = 250;
var dir = 1;

function setup() {
  noStroke();
  createCanvas(500, 300);
  background(25, 100, 235);
}

function draw() {
	background(25, 100, 235);
	fill(0);
	ellipse(x, 150, 50, 50);
	x = x + dir
	
	// if (x < 25 || x > 475) {
	// 	// change directions
	// 	dir = dir * -1;
	// }
	// min
  x = min(x + 1, 475);
}