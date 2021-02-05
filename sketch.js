const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbinImg;
var ball;
var ground;

function preload(){
  dustbinImg=loadImage("dustbin.png")
}
function setup() {
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
    ball = new PAPER(60,200,20);
    ground = new GROUND(750,400,1500,30);
    dustbin1 = new DUSTBIN (630,325,20,120);
    dustbin2 = new DUSTBIN (740, 325, 20, 120);
    dustbin3 = new DUSTBIN (686, 375, 100, 20);
    Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
    
    Engine.update(engine);
    
    ground.display();
    ball.display();
    dustbin1.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    
  drawSprites();
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}
