/*This version has a colored version with reddish colors*/
let rows = 40;  
let cols = 40; 
let mwidth;
let mheight;

// Sentences to be placed on the canvas
let strings = [
  "What's that? Over there.",
  "Looks really freaky.",
  "Damn, that thing has a freaking huge head.",
  "Here is the first game.",
  "You will be playing Red Light, Green Light.",
  "You are allowed to move forward when 'it' shouts out, 'Green Light,'",
  "stop when 'it' shouts, 'Red Light.'",
  "If your movement is detected afterward, you will be eliminated.",
  "Red Light, Green Light?",
  "The thing we did as kids in the playground?",
  "Let me repeat the rule.",
  "I think that's what she said.",
  "Red Light, Green Light?",
  "Is this a joke?",
  "You're allowed to move…",
  "Do you think they're serious?",
  "…when 'it' shouts out, 'Green Light.'",
  "Well then, bet on the first one there?",
  "Stop when 'it' shouts, 'Red Light.'",
  "If your movement is detected afterward, you will be eliminated.",
  "A million won.",
  "Deal?",
  "Goddamn it.",
  "You're on!",
  "Those players who cross the finish line",
  "without being eliminated within the five-minute playtime",
  "will pass this round.",
  "With that, let the game begin.",
  "Green Light.",
  "Red Light.",
  "Whoa.",
  "Player 324. Eliminated.",
  "Dumbass got caught.",
  "That bang.",
  "Did you hear that?"
];
let positions = []; // Array to store random positions for each string to be randomized once

function setup() {
  createCanvas(600, 800);
  // Calculate grid size
  mwidth = width / cols;
  mheight = height / rows;

  // Randomize x positions for each string once, and assign fixed y positions
  let y = 50; // Initial y-position
  for (let i = 0; i < strings.length; i++) {
    let x = random(width / 4, width - width / 4); // Random x-position with margin
    positions.push({ x, y }); 
    y += 50; // Increment y-position by fixed spacing of 50
  }
  noCursor();

}


function draw() {
  background(191,4,38);

  push();
  let stretchFactor = map(mouseX,0,width,1,20,true);

  let alpha = map(mouseX, 0, width, 255, 0,true);
  //stroke(0, 0, 0, alpha);
  stroke(64,2,7);
  strokeWeight(3);

  // HIDE
  letterH(1, 1, 7, 25-stretchFactor, mwidth, mheight);
  letterI(10, 1, 7, 25-stretchFactor, mwidth, mheight);
  letterD(21, 1, 7, 25-stretchFactor, mwidth, mheight);
  letterE(32, 1, 7, 25-stretchFactor, mwidth, mheight);
  pop();


  push();
  stroke(64,2,7); // Light grey color for the grid lines
  let stW = map(mouseX,0,width,1,15,true);
  strokeWeight(stW);
  drawGrid(cols, rows, mwidth, mheight);
  pop();

  let seekStretchFactor = map(mouseX,0,width,0,26,true);

  //SEEK RECTANGLE
  // push();
  // noStroke();
  // alpha = map(mouseY, 0, height, 100, 255,true);
  // fill(0,alpha);
  // // seekRect(1, 27, 38, 12*stretchFactor, mwidth, mheight);
  // seekRect(1, 27 - seekStretchFactor, 38, 12 +seekStretchFactor, mwidth, mheight);
  // pop();

  //SEEK
  push();
  let seekstrokeW = map(mouseX,0,width,1,8,true);
  strokeWeight(seekstrokeW);
  alpha = map(mouseY, 0, width, 100, 255,true);
  //stroke(255,alpha);
  stroke(242,5,48,alpha);
  letterS(2, 28- seekStretchFactor, 7, 10+seekStretchFactor, mwidth, mheight);
  letterE(12, 28- seekStretchFactor, 7, 10+seekStretchFactor, mwidth, mheight);
  letterE(22, 28- seekStretchFactor, 7, 10+seekStretchFactor, mwidth, mheight);
  letterK(30, 28- seekStretchFactor, 7, 10+seekStretchFactor, mwidth, mheight);
  pop();

  displayRandomStrings(strings, positions);



}
function drawGrid(cols, rows, mwidth, mheight) {

  for (let i = 0; i <= cols; i++) {
    // Draw vertical grid lines
    line(i * mwidth, 0, i * mwidth, height);
  }

  // for (let j = 0; j <= rows; j++) {
  //   // Draw horizontal grid lines
  //   line(0, j * mheight, width, j * mheight);
  // }
}
function letterH(gridX, gridY, gridW, gridH, mwidth, mheight) {
  let x = gridX * mwidth;
  let y = gridY * mheight;
  let w = gridW * mwidth;
  let h = gridH * mheight;

  // Left vertical line of "H"
  for (var i = 0; i <= w / 3; i += w / 20) {

    line(x + i, y, x + i, y + h);
  }

  // Right vertical line of "H"
  for (var i = 0; i <= w / 3; i += w / 20) {


    line(x + w - i, y, x + w - i, y + h);
  }

  // Middle horizontal line of "H"
  for (var i = 0; i <= h / 8; i += h / 80) {
    line(x, y + h / 2 + i, x + w, y + h / 2 + i);
  }
}
function letterI(gridX, gridY, gridW, gridH, mwidth, mheight) {
  let x = gridX * mwidth;
  let y = gridY * mheight;
  let w = gridW * mwidth;
  let h = gridH * mheight;

  // Vertical main line of "I"
  for (var i = 0; i <= w / 3; i += w / 20) {
    line(x + w / 2 + i, y, x + w / 2 + i, y + h);
  }
}
function letterD(gridX, gridY, gridW, gridH, mwidth, mheight) {
  let x = gridX * mwidth;
  let y = gridY * mheight;
  let w = gridW * mwidth;
  let h = gridH * mheight;

  // Draw the left vertical line of "D"
  //stroke(0);
  //strokeWeight(5);
  // line(x, y, x, y + h);

  // // Draw the top and bottom horizontal lines
  // line(x, y, x + w / 2, y); // Top line
  // line(x, y + h, x + w / 2, y + h); // Bottom line

  // Draw the curve of "D" using many short horizontal lines
  for (let i = 0; i <= h; i += h / 80) {
    line(x, y + i, x + w / 2 + (w / 2) * Math.sin((i / h) * Math.PI), y + i);
  }
}

function letterE(gridX, gridY, gridW, gridH, mwidth, mheight) {
  let x = gridX * mwidth;
  let y = gridY * mheight;
  let w = gridW * mwidth;
  let h = gridH * mheight;

  // Vertical main line (left part of "E")
  for (var i = 0; i <= w / 3; i += w / 20) {
    // Draw vertical line of "E" within the grid
    line(x + i, y, x + i, y + h);
  }

  // Top horizontal line of "E"
  for (var i = 0; i <= h / 8; i += h / 80) {
    // Top horizontal line within the grid
    line(x, y + i, x + w, y + i);
  }

  // Middle horizontal line of "E"
  for (var i = 0; i <= h / 8; i += h / 80) {
    // Middle horizontal line within the grid
    line(x, y + h / 2 + i, x + w , y + h / 2 + i);
  }

  // Bottom horizontal line of "E"
  for (var i = 0; i <= h / 8; i += h / 80) {
    // Bottom horizontal line within the grid
    line(x, y + h + i - h / 8, x + w, y + h + i - h / 8);
  }
}

function seekRect(gridX, gridY, gridW, gridH, mwidth, mheight){
  // Convert grid coordinates and size to actual canvas coordinates and size
  let x = gridX * mwidth; // x-coordinate of top-left corner
  let y = gridY * mheight; // y-coordinate of top-left corner
  let w = gridW * mwidth;  // width of the rectangle in pixels
  let h = gridH * mheight; // height of the rectangle in pixels

  // Draw the rectangle using the converted values
  rect(x, y, w, h);
}
function letterS(gridX, gridY, gridW, gridH, mwidth, mheight) {
  let x = gridX * mwidth;
  let y = gridY * mheight;
  let w = gridW * mwidth;
  let h = gridH * mheight;

  // Top horizontal line of "S"
  for (var i = 0; i <= h / 10; i += h / 80) {

    line(x, y + i, x + w, y + i);
  }

  // Middle horizontal line of "S"
  for (var i = 0; i <= h / 10; i += h / 80) {
    line(x, y + h / 2 + i, x + w, y + h / 2 + i);
  }

  // Bottom horizontal line of "S"
  for (var i = 0; i <= h / 10; i += h / 80) {

    line(x, y + h + i - h / 10, x + w, y + h + i - h / 10);
  }

  // Left vertical part of "S" (top half)
  for (var i = 0; i <= w / 3; i += w / 20) {

    line(x + i, y, x + i, y + h / 2);
  }

  // Right vertical part of "S" (bottom half)
  for (var i = 0; i <= w / 3; i += w / 20) {

    line(x + w - i, y + h / 2, x + w - i, y + h);
  }
}

function letterK(gridX, gridY, gridW, gridH, mwidth, mheight) {
  let x = gridX * mwidth;
  let y = gridY * mheight;
  let w = gridW * mwidth;
  let h = gridH * mheight;

  // Top diagonal part of "K"
  for (let i = 0; i <= w; i += w / 10) {
    line(x + w / 5, y + h / 2, x + i + w / 5, y);
  }

  // Bottom diagonal part of "K"
  for (let i = 0; i <= w; i += w / 10) {
    line(x + w / 5, y + h / 2, x + i + w / 5, y + h);
  }
}

function displayRandomStrings(arr, positions) {
  let toggleMapping = false;
  for (let i = 0; i < arr.length; i++) {
    let pos = positions[i]; // Get the pre-calculated position for this string

    // Toggle between two different color mappings
    let colorValue;
    if (toggleMapping) {
      // Mapping 1: Light to Dark (start from light, move to dark as mouseX increases)
      colorValue = map(mouseX, 0, width, 255, 0); // Light to dark
    } else {
      // Mapping 2: Dark to Light (start from dark, move to light as mouseX increases)
      colorValue = map(mouseX, 0, width, 0, 255); // Dark to light
    }

    fill(colorValue,0,0); // Apply the calculated color

    // Toggle the mapping for the next sentence
    toggleMapping = !toggleMapping;

    // Set text properties
    textSize(16);
    textAlign(CENTER);

    // Display the string at the random x and fixed y position
    text(arr[i], pos.x, pos.y);
  }
}