var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var db,b

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	db=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	engine=Engine.create();
	world=engine.world
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box1=new Box(700,600,20,120);
	box2=new Box(900,600,20,120);
	box3=new Box(800,660,200,20);

	ball = new Ball(200,500,15)	;

	b = Bodies.rectangle(800, 600, 200, 130 , {isStatic:true} );
	 World.add(world, b);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
Engine.update(engine);
rect(ground.position.x,ground.position.y,1200,10)
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  imageMode(CENTER);
  image(db,b.position.x,b.position.y,200,130)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-20})
    
  }
}



