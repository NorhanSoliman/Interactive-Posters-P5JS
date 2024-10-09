function setup() {
  createCanvas(600, 800);
  frameRate(2);
}

function draw() {
  noCursor();
  background(224,224,224);
  fill('black');
  letterYMod();

  letterLMono();

}

function letterYMod() {
  
  for (var i = 0; i <= 200; i += 10) {
    let weight = map(i, 0, 500, 1, 10); // Maps the value of i to a range of stroke weights
    strokeWeight(weight);

    // Map mouseX to a transparency value that increases as mouseX increases
    let alpha = map(mouseX, 0, width, 150, 0,true);
    stroke(0,0,0,alpha);

    line(50 + i, 100, 200 + i, 400);
    line(350 + i, 100, 200 + i, 400);
    //stem
    line(200 + i, 400, 200 + i, 750);

  }

}
function letterLMono(){
  let deltaH = map(mouseX, 0, width, 0, 250,true);
  let deltaW= map(mouseX, 0, width, 0, 90,true);
  let deltaX = map(mouseX, 0, width, 0, 130,true);

  fill('black');
  noStroke();

  rect(10,10,150+deltaH,700);

  //lower
  rect(10,590-deltaW,450+deltaX,200+deltaW);

}
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myCanvas', 'png'); // Save the canvas as a PNG file
  }
}
