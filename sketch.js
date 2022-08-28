var canvas ;
var backgroundImage , database , game,form;
var player;
var gameState, bgImg;


function preload(){
backgroundImage = loadImage("./assets/background.jpg");
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    bgImg = backgroundImage;
}
 
function draw(){
background(bgImg);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }