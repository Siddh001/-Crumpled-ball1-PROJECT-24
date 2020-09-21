
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rectSprite1,rectSprite2,rectSprite3;
var rectBody1,rectBody2,rectBody3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	groundSprite=createSprite(width/2, height -35, width,10);
	groundSprite.shapeColor=color(255)

	rectSprite1=createSprite(600,649,200,20);
rectSprite1.shapeColor=color("red");

rectSprite2=createSprite(500,609,20,100);
rectSprite2.shapeColor=color("red");

rectSprite3=createSprite(700,609,20,100);
rectSprite3.shapeColor=color("red");

ground3=
	{
	 isStatic:true
	}

ground = Bodies.rectangle(width/2, 680, width, 10,ground3 );
 	World.add(world, ground);




rectBody1=Bodies.rectangle(660,660,200,20,{isStatic:true});
World.add(world,rectBody1);

rectBody2=Bodies.rectangle(width/2,634,200,20,{isStatic:true});
World.add(world,rectBody2);

rectBody3=Bodies.rectangle(width/2,594,200,20,{isStatic:true});
World.add(world,rectBody3);

paper = new Paper(85, 205, 35);


Engine.run(engine);
 keyPressed() ;
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x: 95, y: -90});
//	this.body={isStatic:false}
	//var object={isStatic:false}
  }
}
