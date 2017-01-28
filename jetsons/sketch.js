	// Layne Soike
	// Last edited: 01/27/2017
	// Moving the members of the Jetson family from four corners of the canvas to be lined up in the middle.
	
	var astro_x = 50;
	var astro_y = 40;
	var astro_dir = 2;
	
	var george_x = 50;
	var george_y = 400;
	var george_dir = 1;
	
	var elroy_x = 850;
	var elroy_y = 500;
	var elroy_dir = 1;
	
	var rosie_x = 910;
	var rosie_y = 20;
	var rosie_dir = 1;

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
	
	astro_x = astro_x + 1 // sets the direction of Astro to move to the left (adding 1 to the x position)
	astro_y = astro_y + 1 // sets the direction of Astro to move down (adding 1 to the y position)
  astro_x = min(astro_x + .85, 330) // sets the rate in which Astro moves to the left (.85), and gives a stopping position (330)
	astro_y = min(astro_y + .3, 235) // sets the rate in which Astro moves down (.3), and gives a stopping position (235)
	
	george_x = george_x + 1  // sets the direction of George and Jane to move to the left (adding 1 to the x position)
	george_y = george_y - 1 // sets the direction of George and Jane to move up (subtracting 1 from the y position)
  george_x = min(george_x + 1.3, 390) // sets the rate in which George and Jane move to the left (1.3), and gives a stopping position (390)
	george_y = max(george_y - .3, 210) // sets the rate in which George and Jane move up (.3), and gives a stopping position (210)
	
  elroy_x = elroy_x - 1  // sets the direction of Elroy and Judy to move to the right (subtracting 1 from the x position)
	elroy_y = elroy_y - 1 // sets the direction of Elroy and Judy to move up (subtracting 1 from the y position)
  elroy_x = max(elroy_x - 1.3, 510) // sets the rate in which Elroy and Judy move to the left (1.3), and gives a stopping position (510)
	elroy_y = max(elroy_y - .3, 305) // sets the rate in which Elroy and Judy move up (.3), and gives a stopping position (305)
	
	rosie_x = rosie_x - 1  // sets the direction of Rosie to move to the right (subtracting 1 from the x position)
	rosie_y = rosie_y + 1 // sets the direction of Rosie to move down (adding 1 to the y position)
  rosie_x = max(rosie_x - .85, 630) // sets the rate in which Rosie moves to the left (.85), and gives a stopping position (630)
	rosie_y = min(rosie_y + .3, 215) // sets the rate in which Rosie moves down (.3), and gives a stopping position (215)
}

function astro() {
	// Astro
	// original position x = 330, y = 235
	fill(180, 182, 176); // grey body
	rect(astro_x, astro_y, 40, 30);
	fill(255); // white snout
	rect(astro_x, astro_y + 30, 40, 25);
	fill(2, 128, 77); // green collar
	rect(astro_x, astro_y + 55, 40, 10);
	fill(180, 182, 176); // grey body
	rect(astro_x, astro_y + 65, 40, 90);
	fill(0); // black nose
	triangle(astro_x + 12, astro_y + 25, astro_x + 20, astro_y + 35, astro_x + 28, astro_y + 25);
}
	
function george() {
	// George
	// original position x = 390, y = 210
	fill(202, 92, 1); // hair
	rect(george_x, george_y, 40, 10);
	fill(248, 223, 179); // skin
	rect(george_x, george_y + 10, 40, 40);
	fill(255); // white shirt
	rect(george_x, george_y + 50, 40, 60);
	fill(2, 128, 77); // green belt
	rect(george_x, george_y + 110, 40, 10);
	fill(0, 151, 217); // blue pants
	rect(george_x, george_y + 120, 40, 35);
	fill(0); // black socks
	rect(george_x, george_y + 155, 40, 5);
	fill(255); // white shoes
	rect(george_x, george_y + 160, 40, 20);
}

function jane() {
	// Jane
	// original position x = 450, y = 240
	fill(252, 175, 2); // hair
	rect(george_x + 60, george_y + 30, 40, 15);
	fill(248, 223, 179); // skin
	rect(george_x + 60, george_y + 45, 40, 30);
	fill(188, 90, 165); //  purple dress
	rect(george_x + 60, george_y + 75, 40, 35);
	fill(0); // black belt
	rect(george_x + 60, george_y + 110, 40, 5);
	fill(188, 90, 165); // purple dress
	rect(george_x + 60, george_y + 115, 40, 15);
	fill(199, 182, 220); // purple tights
	rect(george_x + 60, george_y + 130, 40, 45);
	fill(0); // black shoes
	rect(george_x + 60, george_y + 175, 40, 5);
}

function elroy() {
	// Elroy
	// original position x = 510, y = 305
	fill(3, 134, 76); // green hat
	rect(elroy_x, elroy_y, 40, 5);
	fill(237, 198, 108); // hair
	rect(elroy_x, elroy_y + 5, 40, 10);
	fill(248, 223, 179); // skin
	rect(elroy_x, elroy_y + 15, 40, 20);
	fill(200, 86, 2); // orange collar
	rect(elroy_x, elroy_y + 35, 40, 10);
	fill(255); // white shirt
	rect(elroy_x, elroy_y + 45, 40, 5);
	fill(3, 134, 76); // green overalls
	rect(elroy_x, elroy_y + 50, 40, 5);
	fill(255); // white shirt
	rect(elroy_x, elroy_y + 55, 40, 5);
	fill(3, 134, 76); // green overalls
	rect(elroy_x, elroy_y + 60, 40, 25);
}
	
function judy() {
	// Judy
	// original position x = 570, y = 225
	fill(255); // hair
	rect(elroy_x + 60, elroy_y - 80, 40, 20);
	fill(0); // black hair tie
	rect(elroy_x + 60, elroy_y - 60, 40, 5);
	fill(255); // hair
	rect(elroy_x + 60, elroy_y - 55, 40, 15);
	fill(248, 223, 179); // skin
	rect(elroy_x + 60, elroy_y - 40, 40, 25);
	fill(242, 52, 92); // pink collar
	rect(elroy_x + 60, elroy_y - 15, 40, 10);
	fill(217, 114, 113); // dark pink shirt
	rect(elroy_x + 60, elroy_y - 5, 40, 20);
	fill(248, 223, 179); // skin
	rect(elroy_x + 60, elroy_y + 15, 40, 5);
	fill(242, 52, 92); // pink skirt
	rect(elroy_x + 60, elroy_y + 20, 40, 25);
	fill(217, 114, 113); // dark pink tights
	rect(elroy_x + 60, elroy_y + 45, 40, 30);
	fill(248, 223, 179); // skin
	rect(elroy_x + 60, elroy_y + 75, 40, 5);
	fill(0); // black shoes
	rect(elroy_x + 60, elroy_y + 80, 40, 5);
}

	
function rosie() {
	// Rosie
	// original position x = 630, y = 215
	fill(255); // white hat
	rect(rosie_x, rosie_y, 40, 15);
	fill(99, 191, 232); // blue head
	rect(rosie_x, rosie_y + 15, 40, 30);
	fill(255); // white collar
	rect(rosie_x, rosie_y + 45, 40, 5);
	fill(99, 191, 232); // blue body
	rect(rosie_x, rosie_y + 50, 40, 65);
	fill(255); // white apron
	rect(rosie_x, rosie_y + 115, 40, 20);
	fill(0); // black skirt
	rect(rosie_x, rosie_y + 135, 40, 20);
	fill(99, 191, 232); // blue legs
	rect(rosie_x, rosie_y + 155, 40, 15);
	fill(0); // black shoes
	rect(rosie_x, rosie_y + 170, 40, 5);
	fill(167, 49, 42); // red buttons
	ellipse(rosie_x + 20, rosie_y + 65, 10, 10);
	ellipse(rosie_x + 20, rosie_y + 80, 10, 10);
	ellipse(rosie_x + 20, rosie_y + 95, 10, 10);
}
  