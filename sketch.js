/***********************************************************************************
  Code Self Portrait
  by Hannah Gabany

  Coded self portrait

***********************************************************************************/

// Global Variables
var gDebugMode = true;
var ellipseXPos = 0;
var ellipseYPos = 300;
var ellipseDist = 40;

var XSpeed =4;
var YSpeed =10;
var xPos =100;
var yPos =300;

// Setup code goes here
function setup() {
  createCanvas(1000, 800);
  console.log("Starting up code self portrait");
  rectMode(CENTER);
  ellipseMode(CENTER);
  textSize(24);
  textAlign(LEFT);

  console.log("Width = " + width);
  console.log("Height = " + height);

  // set ellipse X pos
  ellipseXPos = width/2 - 250;
  xPos = width/2;
  yPos = height/2;
 }

// Draw code goes here
function draw() {
  background(34,50,204);
  fill(225);
  noStroke();

  if(gDebugMode == ture ){
    drawDebugInfo();
  }

  drawRedEllipse(xPos,yPos,100);
  xPos += XSpeed;
  yPos += YSpeed;

  if( xPos > width || xPos < 0){
    XSpeed = -XSpeed;
  }
 
  if(yPos > height || yPos < 0){
    YSpeed = -YSpeed;
  }


  /*for( let i = 0; i < 8; i++){
    for( let j = 0; j < 10; j++){
      drawRedEllipse(60 + (i*200), 60 +(j*100), 60 +(i*15));
    }
  }*/
  
}

function keyTyped(){
  if(key === ' '){
    gDebugMode = !gDebugMode;
  }
}

function drawDebugInfo(){
  fill(225);
  text("X: " + mouseX + "  Y:" + mouseY, 20, height - 20);
}

function drawRedEllipse(x,y,w) {
  push();
  fill(255 - w,0,0);
  ellipse(x,y,w,60);
  pop();
}

function drawWhiteRect(x,y) {
  push();
  rect(x,y,60,60);
  pop();
}

function drawGreenCircle(x,y) {
  push();
  stroke(0);
  strokeWeight(3);
  fill(0,225,0);
  circle(x,y,30);
  pop();
}

function drawEllipses() {
  // Ellipse #1
  fill(0,255,0);
  ellipse(ellipseXPos,ellipseYPos,200,80);

  // Ellipse #2
  fill(0,255,0);
  ellipse(ellipseXPos,ellipseYPos+ellipseDist,200,80);
}

function drawRects() {
 // Center Rectangle
  fill(255,0,0);
  stroke(220);
  strokeWeight(3);
  rect( width/2,height/2,200,100);

  // Tall Rect
  fill(126,50,20);
  stroke(27);
  strokeWeight(2);
  rect( 100,height/2,40,400);
 }