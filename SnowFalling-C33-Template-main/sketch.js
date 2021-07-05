const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


function preload(){

  imageSprite=loadImage("snow1.jpg");
boy=loadImage("snow4.webp");
snow11=loadImage("snow5.webp");
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  snow1=new Ball(400,20,0.01);
  snow1.body.visible=false;
  snow2=new Ball(100,20,0.01);
  snow2.body.visible=false;
 
}

function draw() {
  background(imageSprite);  
  
  image(boy ,snow1.body.position.x-70,snow1.body.position.y-70,100,100);
  image(snow11 ,snow2.body.position.x-70,snow2.body.position.y-70,100,100)
  snow1.display();
  Engine.update(engine);
  drawSprites();
}