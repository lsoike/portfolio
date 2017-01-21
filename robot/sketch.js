function setup() {
 createCanvas(720, 480); // sets the width and height of the canvas to 720x480 pixels
 smooth(); // didn't see a difference when I changed it to noSmooth, but this is to ensure all geometry has smooth edges
 strokeWeight(2); // sets thickness of all the lines to 2
}

function draw() {
	
	background(205); // since the program is running on a continuos loop, each time you move the mouse it is drawing a new robot. Without having a background set, you see each previous robot that has been drawn before. Best guess, am I right?!
	translate(mouseX, mouseY);

 // Neck
 stroke (230, 183, 42); // sets the color of the neck lines
 line(266, 257, 266, 162); // length and positioning of first neck line
 line(276, 257, 276, 162); // length and positioning of second neck line
 line(286, 257, 286, 162); // length and positioning of third neck line
 
 // Antennae
 line(276, 155, 246, 112); // length and positioning of left antenna
 line(276, 155, 306, 56); // length and positioning of middle antenna
 line(276, 155, 342, 170); // length and positioning of right antenna
 
 // Body
 noStroke(); // removes the stroke for all subsequent shapes
 fill(230, 183, 42); // sets the color for the circle at the bottom of the body
 ellipse(264, 377, 66, 66); // creates the circle shape at the bottomof the body
 fill(57, 42, 90); //sets the color for the rectangle body
 rect(219, 257, 90, 120); // dimensions and positioning of the rectangle body
 fill(231, 210, 165); // sets the color for the stripe across the body
 rect(219, 274, 90, 6); // creates a rectangle shape for the stripe across the body
 
 // Head
 fill(57, 42, 90); // fills the color of the head
 ellipse(276, 155, 90, 90); // creates the shape and position of the head
 fill(96, 77, 139); // fills the largest circle on the head with color
 ellipse(288, 150, 28, 28); // creates a large circle on the head
 fill(57, 42, 90); // sets the color of the small dot
 ellipse(288, 150, 6, 6); // creates a small dot within the larger circle on the head
 fill(231, 210, 165); // sets the fill color for the next three circles on the head
 ellipse(263, 148, 10, 10); // creates a larger circle on the head to the left
 ellipse(296, 130, 8, 8); // creates a medium circle on the head towards the top
 ellipse(305, 162, 6, 6); // creates an even smaller circle on the head to the right
}

