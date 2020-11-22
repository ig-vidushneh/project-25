
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1=new Box(600,640,200,100);

ground=new Ground(50,700,2000,30);
ball1=new Ball(100,680,30,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  box1.display();
  
  ground.display();
  ball1.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:32.2,y:-32.2})
	}
}


