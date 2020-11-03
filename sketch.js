
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
	
	roof = Bodies.rectangle(300,200,20,200)
p1=new Pendulum(200,350,40)
World.add(world,roof)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  p1.display();
  roof.display();
  drawSprites();
 
}



