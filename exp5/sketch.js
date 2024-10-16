function setup() {
  createCanvas(600, 800); // Create a canvas
  textSize(20); 
  frameRate(1);
}

function draw() {

  background(220); // Set a background color
  for (let i = 0; i <= width; i += 20) { 
    line(i, 0, i, height); 
  }

  //hide();
  //seek();
  stc("Moving WOrds around");



}

function hide(){
  fill('black');
  //H
  rect(50,50,20,500);
  rect(100,50,20,500);
  rect(50,300,50,50);
  // for(let i=0;i<230;i+=50){
  //   rect(50,560+i,20,20);
  //   //rect(425,590,100,20);
  // }
  // for(let i=0;i<230;i+=50){
  //   rect(100,560+i,20,20);
  //   //rect(425,590,100,20);
  // }


  //I
  rect(175,50,20,500);
  // for(let i=0;i<230;i+=50){
  //   rect(175,560+i,20,20);
  //   //rect(425,590,100,20);
  // }

  //D
  rect(250,50,20,500);
  rect(250,50,100,50);
  rect(250,500,100,50);
  rect(350,50,20,500);
  for (let i = 0; i <= 500; i += 3) { 
    line(250, i+50, 350,i+50); 
  }

  // for(let i=0;i<230;i+=50){
  //   rect(250,560+i,120,20);
  //   //rect(425,590,100,20);
  // }



  //E
  rect(425,50,20,500);
  rect(425,300,100,50);
  rect(425,50,100,50);
  rect(425,500,100,50);
  // for(let i=0;i<230;i+=30){
  //   rect(425,560+i,100,20);
  //   //rect(425,590,100,20);
  // }

}
function stc(sentence){
  let words = []; 
  words = sentence.split(" "); 

  let randx = random(-30,30);
  let randy =random(-20,20);
  let randstart = random(10,80);
  let x = randstart;
  let y = 50;
  
  for (let i = 0; i < words.length; i++) {
  text(words[i],x,y);
  x+=30+randx;
  y+=65+randy;
  // x+=30;
  // y+=65;
  // text(words[1],300,100);
  // text(words[2],300,150);
  // text(words[3],300,200);
  // text(words[4],300,250);
  // text(words[5],300,300);
  // text(words[6],300,350);
  // text(words[7],300,400);
  // text(words[8],300,450);
  // text(words[9],300,500);
  // text(words[10],300,550);
  // text(words[11],300,750);
  }
}
function drawDiagonalRectangle(x, y, w, h, angle) {
  push(); // Save the current transformation state
  translate(x, y); // Move the origin to (x, y)
  rotate(radians(angle)); // Rotate by the specified angle

  // Draw a rectangle with the current rotation
  beginShape();
  vertex(0, 0);        // Top-left corner
  vertex(w, 0);        // Top-right corner
  vertex(w, h);        // Bottom-right corner
  vertex(0, h);        // Bottom-left corner
  endShape(CLOSE);     // Close the shape

  pop(); // Restore the transformation state
}