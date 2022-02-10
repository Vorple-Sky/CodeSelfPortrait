/***********************************************************************************
  Code Self Portrait
  by Hannah Gabany

  Coded self portrait

***********************************************************************************/

// Global Variables
var gDebugMode = false;
let img; // Declare variable 'img'

function preload(){
  img1 = loadImage("Depression.png")
}

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
  image(img1,0,0, 1000, 800);//reference image
  noStroke();
  
  if(gDebugMode == true ){
    drawDebugInfo();
  }

  //series of functions to draw portrait
  drawHair();
  drawHead();

  
}

//to toogle on and off coordinates for vertex placement
function keyTyped(){
  if(key === ' '){
    gDebugMode = !gDebugMode;
  }
}

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

//hair shape
function drawHair(){
  push();
  stroke(0);
  strokeWeight(2);
  strokeJoin(ROUND);
  fill(96,70,59);
  beginShape();
  vertex();
}
