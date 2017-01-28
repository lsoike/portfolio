// holds the audio input object
var mic;

// holds the current volume
var vol;


function setup() {
  createCanvas(500, 500);
  background(235, 215, 242);
  noStroke();
  
  // create an audio input
  mic = new p5.AudioIn();
  
  // start the Audio Input
  mic.start();
}

function draw() {
	background(235, 215, 242);
	// get the overall volume (between 0 and 1.0)
	vol = mic.getLevel();
	

	
	ears();
	head();
	glasses();
	nose();
	mouth();
	
}

function ears(){
	var adjustedVol = map(vol, 0, 1, 0, 150);
	
	// ears
	noStroke();
	fill(237, 192, 144);
	ellipse(100, 250, 25 + adjustedVol, 40 + adjustedVol);
	ellipse(400, 250, 25 + adjustedVol, 40 + adjustedVol);
}

function head(){
	
	//head
	noStroke();
	fill(247, 212, 175)
	ellipse(250, 250, 285, 350)
}

function glasses() {

	// glasses
	fill(239, 236, 146);
	strokeWeight(10);
	stroke(0);
	rect(150, 200, 80, 40);
	rect(270, 200, 80, 40);
	stroke(150);
	line(150, 180, 350, 180)

}

function nose() {
	
	//nose
	noStroke();
	fill(237, 192, 144);
	ellipse(250, 270, 70, 70)
}

function mouth() {
		var adjustedVol = map(vol, 0, 1, 0, 50);
		
	// mouth
	fill(150);
	ellipse(250, 375, 90, 90);
	fill(255);
	strokeWeight(5 + adjustedVol);
	stroke(255, 0, 0);
	triangle(250, 350, 230, 375, 270, 375);
}

