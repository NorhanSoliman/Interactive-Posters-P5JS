function setup() {
  createCanvas(600, 800);
  frameRate(2);
}

function draw() {
  noCursor();
  background(247, 221, 221);

  push();
  stroke('gray');
  //line(0,0,400,400)
  for (var i = 0; i <= 700; i += 10) {
    //line(0 + i, 0, 0 + i, 700);

  }
  pop();

  fill('black');
  letterLMod();

  letterLMono();
}

function letterLMod() {
  for (var i = 0; i <= 60; i += 10) {
    let weight = map(i, 0, 500, 1, 10); // Maps the value of i to a range of stroke weights
    strokeWeight(weight);

    // Map mouseX to a transparency value that increases as mouseX increases
    let alpha = map(mouseX, 0, width, 255, 0,true);
    //stroke(0, 0, 0, alpha); // Set stroke color with increasing transparency
    //stroke(128,128,128,alpha);
    stroke(72,61,139,alpha);
    // Vertical Main Line
    line(20 + i, 150, 20 + i, 600);

    line(80 + i, 150, 80 + i, 500);
  }

  for (var i = 0; i <= 100; i += 10) {
    let weight = map(i, 0, 500, 1, 10); // Maps the value of i to a range of stroke weights
    strokeWeight(weight);

    // Map mouseX to a transparency value that increases as mouseX increases
    let alpha = map(mouseX, 0, width, 255, 0,true);
    //stroke(0, 0, 0, alpha); // Set stroke color with increasing transparency
    stroke(128,128,128,alpha);
    // Horizontal Bottom Line of L
    line(10, 500 + i, 300, 500 + i);
  }
}
function letterLMono(){
  let deltaH = map(mouseX, 0, width, 0, 70,true);
  let deltaW= map(mouseX, 0, width, 0, 90,true);
  let deltaX = map(mouseX, 0, width, 0, 230,true);

  push();
  fill(51,0,102);
  noStroke();

  rectMode(CORNERS);

  //Max width = 660
  //Left Vertical
  rect(250-deltaX,20,350+deltaH,700,20);

  //Max Height = 690 Max width = 690 
  //Lower Horizontal
  rect(250-deltaX,500,500+deltaW,700+deltaW,20);
  pop();

}
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myCanvas', 'png'); // Save the canvas as a PNG file
  }
}

