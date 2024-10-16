let player = 0; //0:x and 1:y
function setup() {
  createCanvas(600, 800); // Create a canvas
  textSize(20); 
  frameRate(1);
  angleMode(DEGREES);
}

function draw() {

  background('black'); // Set a background color
  // for (let i = 0; i <= width; i += 200) { 
  //   line(i, 0, i, height); 
  // }
  stroke('white');

  // //line(50,50,50,150);
  //  // Translate to the center of the line's rotation
  //  translate(50, 100);  // Move the origin to the middle of the line (50, 100)

  //  // Map the mouseX position to an angle (between 0 and 90 degrees)
  //  let angle = map(mouseX, 0, width, 0, 90);
 
  //  // Rotate the canvas by the mapped angle
  //  rotate(angle);
 
  //  // Draw the line
  //  line(0, -50, 0, 50);  // The line rotates around the origin (0,0) after translation

// Number of lines and spacing between them
let numLines = 5;
let lineSpacing = 60;

// Map the mouseX position to an angle (between 0 and 90 degrees)
let angle = map(mouseX, 0, width, 0, 90,true);

// Loop to draw multiple lines
for (let i = 0; i < numLines; i++) {
  // Save the current state of transformations
  push();

  // Translate to the starting point of the current line
  translate(50 + i * lineSpacing, 100);

  // Rotate the canvas by the mapped angle
  rotate(angle);

  // Draw the line (centered at the translated origin)
  line(0, -50, 0, 50);

  // Restore the original state
  pop();
}
}

