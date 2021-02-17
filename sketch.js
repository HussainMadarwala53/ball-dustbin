
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;	

var paper,dustbin,ground;
var world, engine;



function setup() {
	createCanvas(2000, 1000);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,690,width,20);

	paper = new Paper(200,150,70);

	dustbin= new Dustbin(1200,400);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();

  paper.display();

  dustbin.display();
  

  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {

	  Matter.Body.applyForce(paper.body, paper.body.position,{x:150,y:-250});
	}
}

