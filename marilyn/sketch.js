function setup() {
  createCanvas(600, 600); // width and heighth of the canvas
  background(0, 205, 188); // sets the background color to turquoise
  
  noStroke(); // makes sure that shapes do not have a stroke
  

  // Hair behind head
  fill(0); // sets the fill color to black
  ellipse(410, 400, 120, 180); // shape to show shadowed hair behind head on right
  ellipse(440, 420, 100, 50); // shape to show shadowed hair behind head on right
  ellipse(380, 500, 100, 50); // shape to show shadowed hair behind head on right
  fill(254, 227, 74); // sets fill color to yellow
  ellipse(180, 405, 150, 210); // shape to show hair behind head on the left
  
  // Neck
  fill(0); // sets fill color to black
  rect(175, 450, 200, 300); // base shape of neck
  fill(249, 189, 215); // sets fill color to skin color
  triangle(175, 600, 175, 560, 215, 600); // triangle shape to show the contrast of shadow on neck - left side
	triangle(300, 600, 375, 525, 375, 600);// triangle shape to show the contrast of shadow on neck - right side
  
	// Head
 	ellipse(270, 300, 325, 490); // shape of the head
	fill(0); // sets fill color to black
	ellipse(400, 415, 70, 100); // creates the shape to show shadowed cheekbone

	// Earrings
	fill(4, 151, 143); // sets fill color to dark turquoise
	ellipse(115, 395, 30, 50); // creates shape for left earring
	ellipse(430, 410, 40, 60); // creates shape for right earring
	
	// Hair in front of head
	fill(254, 227, 74); // sets fill color to yellow
	ellipse(90, 340, 65, 100); // shape used to create hair 
	ellipse(85, 240, 100, 150); // shape used to create hair
	ellipse(125, 125, 160, 160); // shape used to create hair
	ellipse(260, 80, 270, 140); // shape used to create hair
	triangle(150, 100, 260, 175, 425, 100); // shape used to create widows peak
	ellipse(425, 150, 125, 175); // shape used to create hair
	ellipse(465, 280, 100, 140); // shape used to create hair
	ellipse(458, 360, 75, 85); // shape used to create hair
	
	// Head over the hair
	fill(249, 189, 215); // sets fill color to skin color
	ellipse(210, 165, 130, 70); // shape used to create the widows peak - left side
	ellipse(335, 160, 140, 90); // shape used to create the widows peak - right side
	
	// Eyebrows
	strokeWeight(6); // sets the stroke weight for the lines that make the eyebrows
	stroke(0); // color of the stroke for the eyebrows
	line(145, 270, 170, 240); // upstroke of left eyebrow
	strokeWeight(8); // weight of downstroke of left eyebrow
	line(170, 240, 225, 260); // downstroke of left eyebrow
	line(310, 260, 375, 240); // upstroke of the right eyebrow
	strokeWeight(6); // weitht of the downstroke of right eyebrow
	line(375, 240, 400, 270); //downstroke of the right eyebrow
	
	// Eyeshadow
	noFill(); // makes sure the ellipse that creates the arc does not have a fill 
	strokeWeight(30); // sets a thick stroke weight to the arcs that create the eyeshadow
	stroke(137, 205, 224); // sets the color of the stroke to turquoise
	arc(185, 325, 90, 80, 180, 200); // position and angle of arc used to form the left eyeshadow
	arc(350, 325, 90, 80, 180, 200); // position and angle of arc used to form the right eyeshadow

	// Eyes
	fill(255); // sets the fill color to white
	noStroke(); // removes the stroke of all subsequent shapes
	ellipse(185, 310, 45, 20); // creates a shape for the white part of the left eye
	ellipse(350, 310, 45, 20); // creates a shape for the white part of the right eye
	fill(0); // sets fill color to black
	ellipse(185, 310, 20, 20); // creates circle shape for the black part of left eye
	ellipse(350, 310, 20, 20); // creates circle shape for the black part of right eye
	noFill(); // makes sure the ellipse that creates the arc does not have a fill
	strokeWeight(4); // sets the stroke weight of the arc for they eyes
	stroke(0); // sets the color of the stroke to black
	arc(185, 345, 120, 90, 180, 200); // position and angle of arc of left eye
	arc(350, 345, 120, 90, 180, 200); // position and angle of arc of right eye
	
	// Nose
	fill(0); // sets fill color to black
	noStroke(); // removes stroke from all subsequent shapes
	ellipse(235, 395, 22, 15); // creates the round shape of the left part of nose
	ellipse(260, 400, 45, 15); // creates the round shape of the middle part of nose
	ellipse(285, 395, 20, 15); // creates the round shape of the right part of nose
	
	// Beautymark
	ellipse(330, 420, 7, 7); // creates a dot for the beauty mark
	
	// Mouth
	fill(255); // sets the fill color to white
	ellipse(250, 450, 80, 30); // creates a shape to form the white teeth behind lips
	noFill(); // makes sure the ellipse that creates the arc does not have a fill
	strokeWeight(20); // sets a thick stroke weight for the arcs that form the lips
	stroke(179, 13, 27); // sets stroke color to red
	arc(235, 475, 80, 80, 180, 200); // position and angle of arc of upper left lip
	arc(283, 475, 80, 80, 180, 200); // position and angle of arc of upper right lip
	strokeWeight(25); // sets a thicker stroke weight for bottom lip
	arc(257, 445, 90, 60, 0, 160); // position and angle of arc for bottom lip

	// Coat
	noStroke(); // removes the stroke for the shape that makes her coat
	fill(1, 148, 140); // sets fill color to dark turquoise
	ellipse(400, 600, 80, 225); // shape that creates her coat
}
