/***********************************************************************************
  Code Self Portrait
  by Hannah Gabany

  Coded self portrait

***********************************************************************************/

// Global Variables
var gDebugMode = false;


// Setup code goes here
function setup() {
  createCanvas(1000, 735);
  console.log("Starting up code self portrait");
  rectMode(CENTER);
  ellipseMode(CENTER);
  textSize(24);
  textAlign(LEFT);
  
  console.log("Width = " + width);
  console.log("Height = " + height);

  
 }

// Draw code goes here
function draw() {
  background(132,143,165);
  noStroke();
  
  if(gDebugMode == true ){
    drawDebugInfo();
  }

  //series of functions to draw portrait
  drawNeck();
  drawHead();
  drawHair();
  drawEyes();
  drawNose();
  drawMouth();
  
  
}

//to toogle on and off coordinates for vertex placement
function keyTyped(){
  if(key === ' '){
    gDebugMode = !gDebugMode;
  }
}

//debug function
function drawDebugInfo(){
  fill(225);
  text("X: " + mouseX + "  Y:" + mouseY, 20, height - 20);
}

//head shape
function drawHead(){
  push();
  stroke(0);
  strokeWeight(2);
  strokeJoin(ROUND);
  fill(231,216,201);
  beginShape();
  vertex(354, 253);
  vertex(361, 392);
  vertex(396, 459);
  vertex(477, 500);
  vertex(565, 459);
  vertex(600, 392);
  vertex(610, 253);
  vertex(482, 210);
  vertex(354, 253);
  endShape();
  pop();
}

//neck shape
function drawNeck(){
  push();
  stroke(0);
  strokeWeight(2);
  strokeJoin(ROUND);
  fill(231,216,201);
  beginShape();
  vertex(444, 481);
  vertex(443, 548);
  vertex(477, 561);
  vertex(526, 548);
  vertex(522, 478);
  endShape();
  pop();

}

//hair shape
function drawHair(){
  push();
  stroke(0);
  strokeWeight(2);
  strokeJoin(ROUND);
  fill(96,70,59);
  beginShape();
  vertex(482, 210);
  vertex(370, 285);
  vertex(369, 392);
  vertex(396, 459);
  vertex(444, 481);
  vertex(443, 548);
  vertex(349, 548);
  vertex(349,252);
  vertex(482, 170);
  vertex(623,252);
  vertex(623, 548);
  vertex(526, 548);
  vertex(522, 478);
  vertex(563, 458);
  vertex(598,391);
  vertex(605,285);
  vertex(482, 210);
  endShape();
  pop();

}

//eye shape
function drawEyes(){
  push();
  stroke(0);
  strokeWeight(2);
  strokeJoin(ROUND);
  fill(225,225,225);
  ellipse(430,314,55,30);
  ellipse(532,314,55,30);
  fill(41,82,74);
  ellipse(430,314,30,30);
  ellipse(532,314,30,30);
  fill(0,0,0);
  ellipse(430,314,15,20);
  ellipse(532,314,15,20);
  fill(225,225,225);
  ellipse(420,310,10,5);
  ellipse(522,310,10,5);
  strokeWeight(0);
  fill(96,70,59);
  rect(425,280,50,8);
  triangle(400,276,400,284,389,290);
  rect(534,280,50,8);
  triangle(558,276,558,284,571,290);
  pop();

}

//nose shape
function drawNose(){
  push();
  stroke(0);
  strokeWeight(0.5);
  strokeJoin(ROUND);
  fill(197,175,160);
  beginShape();
  vertex(464,374);
  vertex(464,380);
  vertex(477,384);
  vertex(495,380);
  vertex(495,374);
  vertex(477,378);
  vertex(464,374);
  endShape();
  pop();

}

//mouth shape
function drawMouth(){
  push();
  stroke(0);
  strokeWeight(0.5);
  strokeJoin(ROUND);
  fill(223,146,142);
  beginShape();
  vertex(477,413);
  vertex(490, 411);
  vertex(511,416);
  vertex(490,430);
  vertex(467,430);
  vertex(447,416);
  vertex(465,411);
  vertex(477,413);
  endShape();
  line(447,416,511,416);  
  pop(); 

}