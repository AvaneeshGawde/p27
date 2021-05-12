
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
	roof = new Roof (400,250,230,20)
    bob1= new Bob (320,500,40)
	bob2= new Bob (360,500,40)
	bob3= new Bob (400,500,40)
	bob4= new Bob (440,500,40)
	bob5= new Bob (480,500,40)
    
	chain1= new rope (bob1.body,roof.body,-80,0)
	chain2= new rope (bob2.body,roof.body,-40,0)
	chain3= new rope (bob3.body,roof.body,0,0)
	chain4= new rope (bob4.body,roof.body,40,0)
	chain5= new rope (bob5.body,roof.body,80,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}


