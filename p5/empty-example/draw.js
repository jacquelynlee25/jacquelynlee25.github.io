function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

}

function draw() {

	if(mouseIsPressed){
	stroke(66, 244, 244);
	line(mouseY, mouseX, 600, 400);
} else{
		stroke(255, 45, 45);
	line(mouseX, mouseY, 800, 400);
}}
