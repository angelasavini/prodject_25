
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function preload(){

	paperImg = loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(200,200,30)
	
	var render = Render.create({
		element: document.body,
		engine:engine,
		options:{
			width: 1600,
			height: 700,
			wireframes: false
		}
	})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);




  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position,{x:5,y:-7} );
	}
}