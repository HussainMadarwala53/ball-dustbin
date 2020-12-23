
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;	

var paper,dustbin,ground;
var world, engine;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,690,width,20);

	paper = new Paper(200,320,70);

	dustbin= new Dustbin(1200,670);

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
  background(0);
  
  ground.display();

  paper.display();

  dustbin.display();
  

  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {

	  Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
	}
}

