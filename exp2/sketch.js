function setup() {
  createCanvas(600, 800);
  frameRate(2);
}

function draw() {
  noCursor();
  background(0, 0, 128);

  push();
  stroke('gray');
  //line(0,0,400,400)
  for (var i = 0; i <= width; i += 10) {
    line(0 + i, 0, 0 + i, height);

  }
  pop();

  fill('black');
  letterL();

}

function letterL() {
  for (var i = 0; i <= 200; i += 10) {
    let weight = map(i, 0, 500, 1, 10); // Maps the value of i to a range of stroke weights
    strokeWeight(weight);

    // Map mouseX to a transparency value between 0 and 255
    let alpha = map(mouseX, 0, width, 0, 255);
    stroke(0, 0, 0, alpha); // Set stroke color with transparency

    // Vertical Main Line
    line(50 + i, 50, 50 + i, 750);

    line(170 + i, 50, 170 + i, 650);
  }

  for (var i = 0; i <= 100; i += 10) {
    let weight = map(i, 0, 500, 1, 10); // Maps the value of i to a range of stroke weights
    strokeWeight(weight);

    // Map mouseX to a transparency value between 0 and 255
    let alpha = map(mouseX, 0, width, 0, 255);
    stroke(0, 0, 0, alpha); // Set stroke color with transparency

    // Horizontal Bottom Line of L
    line(50, 650 + i, 550, 650 + i);
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myCanvas', 'png'); // Save the canvas as a PNG file
  }
}