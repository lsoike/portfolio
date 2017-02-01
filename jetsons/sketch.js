// Layne Soike
// Last edited: 01/27/2017
// Moving the members of the Jetson family from four corners of the canvas to be lined up in the middle.

var astroX = 50;
var astroY = 40;

var georgeX = 50;
var georgeY = 400;

var elroyX = 850;
var elroyY = 500;

var rosieX = 910;
var rosieY = 20;

function setup() {
  noStroke(); // removes the stroke from all shapes
  createCanvas(1000, 600); // sets the canvas size
  background(255, 191, 169); // sets the color of the background
}

function draw() {
	background(255, 191, 169); // redraws the background over and over 

	astro(); // calls the astro function
	george(); // calls the george function
	jane(); // calls the jane function
	elroy(); // calls the elroy function
	judy(); // calls the judy function
	rosie(); // calls the rosie function
	
	astroX = astroX + 1 // sets the direction of Astro to move to the left (adding 1 to the x position)
	astroY = astroY + 1 // sets the direction of Astro to move down (adding 1 to the y position)
  astroX = min(astroX + .85, 330) // sets the rate in which Astro moves to the left (.85), and gives a stopping position (330)
	astroY = min(astroY + .3, 235) // sets the rate in which Astro moves down (.3), and gives a stopping position (235)
	
	georgeX = georgeX + 1  // sets the direction of George and Jane to move to the left (adding 1 to the x position)
	georgeY = georgeY - 1 // sets the direction of George and Jane to move up (subtracting 1 from the y position)
  georgeX = min(georgeX + 1.3, 390) // sets the rate in which George and Jane move to the left (1.3), and gives a stopping position (390)
	georgeY = max(georgeY - .3, 210) // sets the rate in which George and Jane move up (.3), and gives a stopping position (210)
	
  elroyX = elroyX - 1  // sets the direction of Elroy and Judy to move to the right (subtracting 1 from the x position)
	elroyY = elroyY - 1 // sets the direction of Elroy and Judy to move up (subtracting 1 from the y position)
  elroyX = max(elroyX - 1.3, 510) // sets the rate in which Elroy and Judy move to the left (1.3), and gives a stopping position (510)
	elroyY = max(elroyY - .3, 305) // sets the rate in which Elroy and Judy move up (.3), and gives a stopping position (305)
	
	rosieX = rosieX - 1  // sets the direction of Rosie to move to the right (subtracting 1 from the x position)
	rosieY = rosieY + 1 // sets the direction of Rosie to move down (adding 1 to the y position)
  rosieX = max(rosieX - .85, 630) // sets the rate in which Rosie moves to the left (.85), and gives a stopping position (630)
	rosieY = min(rosieY + .3, 215) // sets the rate in which Rosie moves down (.3), and gives a stopping position (215)
}

function astro() {
	// Astro
	// original position x = 330, y = 235
	fill(180, 182, 176); // grey body
	rect(astroX, astroY, 40, 30);
	fill(255); // white snout
	rect(astroX, astroY + 30, 40, 25);
	fill(2, 128, 77); // green collar
	rect(astroX, astroY + 55, 40, 10);
	fill(180, 182, 176); // grey body
	rect(astroX, astroY + 65, 40, 90);
	fill(0); // black nose
	triangle(astroX + 12, astroY + 25, astroX + 20, astroY + 35, astroX + 28, astroY + 25);
}
	
function george() {
	// George
	// original position x = 390, y = 210
	fill(202, 92, 1); // hair
	rect(georgeX, georgeY, 40, 10);
	fill(248, 223, 179); // skin
	rect(georgeX, georgeY + 10, 40, 40);
	fill(255); // white shirt
	rect(georgeX, georgeY + 50, 40, 60);
	fill(2, 128, 77); // green belt
	rect(georgeX, georgeY + 110, 40, 10);
	fill(0, 151, 217); // blue pants
	rect(georgeX, georgeY + 120, 40, 35);
	fill(0); // black socks
	rect(georgeX, georgeY + 155, 40, 5);
	fill(255); // white shoes
	rect(georgeX, georgeY + 160, 40, 20);
}

function jane() {
	// Jane
	// original position x = 450, y = 240
	fill(252, 175, 2); // hair
	rect(georgeX + 60, georgeY + 30, 40, 15);
	fill(248, 223, 179); // skin
	rect(georgeX + 60, georgeY + 45, 40, 30);
	fill(188, 90, 165); //  purple dress
	rect(georgeX + 60, georgeY + 75, 40, 35);
	fill(0); // black belt
	rect(georgeX + 60, georgeY + 110, 40, 5);
	fill(188, 90, 165); // purple dress
	rect(georgeX + 60, georgeY + 115, 40, 15);
	fill(199, 182, 220); // purple tights
	rect(georgeX + 60, georgeY + 130, 40, 45);
	fill(0); // black shoes
	rect(georgeX + 60, georgeY + 175, 40, 5);
}

function elroy() {
	// Elroy
	// original position x = 510, y = 305
	fill(3, 134, 76); // green hat
	rect(elroyX, elroyY, 40, 5);
	fill(237, 198, 108); // hair
	rect(elroyX, elroyY + 5, 40, 10);
	fill(248, 223, 179); // skin
	rect(elroyX, elroyY + 15, 40, 20);
	fill(200, 86, 2); // orange collar
	rect(elroyX, elroyY + 35, 40, 10);
	fill(255); // white shirt
	rect(elroyX, elroyY + 45, 40, 5);
	fill(3, 134, 76); // green overalls
	rect(elroyX, elroyY + 50, 40, 5);
	fill(255); // white shirt
	rect(elroyX, elroyY + 55, 40, 5);
	fill(3, 134, 76); // green overalls
	rect(elroyX, elroyY + 60, 40, 25);
}
	
function judy() {
	// Judy
	// original position x = 570, y = 225
	fill(255); // hair
	rect(elroyX + 60, elroyY - 80, 40, 20);
	fill(0); // black hair tie
	rect(elroyX + 60, elroyY - 60, 40, 5);
	fill(255); // hair
	rect(elroyX + 60, elroyY - 55, 40, 15);
	fill(248, 223, 179); // skin
	rect(elroyX + 60, elroyY - 40, 40, 25);
	fill(242, 52, 92); // pink collar
	rect(elroyX + 60, elroyY - 15, 40, 10);
	fill(217, 114, 113); // dark pink shirt
	rect(elroyX + 60, elroyY - 5, 40, 20);
	fill(248, 223, 179); // skin
	rect(elroyX + 60, elroyY + 15, 40, 5);
	fill(242, 52, 92); // pink skirt
	rect(elroyX + 60, elroyY + 20, 40, 25);
	fill(217, 114, 113); // dark pink tights
	rect(elroyX + 60, elroyY + 45, 40, 30);
	fill(248, 223, 179); // skin
	rect(elroyX + 60, elroyY + 75, 40, 5);
	fill(0); // black shoes
	rect(elroyX + 60, elroyY + 80, 40, 5);
}

	
function rosie() {
	// Rosie
	// original position x = 630, y = 215
	fill(255); // white hat
	rect(rosieX, rosieY, 40, 15);
	fill(99, 191, 232); // blue head
	rect(rosieX, rosieY + 15, 40, 30);
	fill(255); // white collar
	rect(rosieX, rosieY + 45, 40, 5);
	fill(99, 191, 232); // blue body
	rect(rosieX, rosieY + 50, 40, 65);
	fill(255); // white apron
	rect(rosieX, rosieY + 115, 40, 20);
	fill(0); // black skirt
	rect(rosieX, rosieY + 135, 40, 20);
	fill(99, 191, 232); // blue legs
	rect(rosieX, rosieY + 155, 40, 15);
	fill(0); // black shoes
	rect(rosieX, rosieY + 170, 40, 5);
	fill(167, 49, 42); // red buttons
	ellipse(rosieX + 20, rosieY + 65, 10, 10);
	ellipse(rosieX + 20, rosieY + 80, 10, 10);
	ellipse(rosieX + 20, rosieY + 95, 10, 10);
}
  