
function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(4);
}


function draw() {
if (mouseIsPressed == true) {
		line (mouseX, mouseY, pmouseX, pmouseY);
}
}

