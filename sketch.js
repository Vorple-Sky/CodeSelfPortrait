/***********************************************************************************
  Code Self Portrait
  by Hannah Gabany

  Coded self portrait

***********************************************************************************/

// Global Variables
var gDebugMode = false;
let img; // Declare variable 'img'

function preload(){
  img1 = loadImage("cat.png")
}

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

  
 }

// Draw code goes here
function draw() {
  background(34,50,204);
  image(img1,0,0);
  fill(240, 120,0);
  noStroke();
  

  if(gDebugMode == true ){
    drawDebugInfo();
  }
  ellipse(width/2, height/2, 200, 100);
  
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
