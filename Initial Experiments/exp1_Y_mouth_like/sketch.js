function setup() {
  createCanvas(600, 800);
  //frameRate(2);
}

function draw() {
  colorMode('HSB');
  noStroke();
  background('black');

//let randH = random(100,500);
//let randW = random(200,300);
  
ellipseMode(CORNER);

let mouseW = map(mouseX,0,600,10,400,true);
ellipse(10,10,580,600);

let mouseH = map(mouseX,0,600,100,400,true);
push();

fill('black');
rectMode(CENTER);
//ellipse(100,20,200,200);
rect(300,200,mouseW,500,25);
//ellipse(80,500,50,250);
fill('white');
rect(300,650,50,270,25);

pop();


// let msOx = map(mouseX,0,1024,0,350,true);
// let msOy = map(mouseY,0,800, 0,440,true);
// push();
// //o
// fill('white');
// ellipse(200+msOx,60+msOy,100,100);
// //ellipse(180+msOx,70+msOy,50,50);
// //ellipse(220+msOx,40+msOy,50,50);
// pop();



// push();
// fill('black');
// rect(220+msOx,105+msOy,60,5,40);
// pop();



}
function keyPressed() {
  if (key === 's' || key === 'S') {  
    saveCanvas('myCanvas', 'png');   // Save the canvas as a PNG file
  }
}