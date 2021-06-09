const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone,ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var mango11,mango12,mango13,mango14,mango15;
var mango16,mango17,mango18,mango19,mango20;
var boy,boyImg;

function preload()
{
    boyImg = loadImage("Plucking_mangoes/boy.png");
    bg = loadImage("tree11.png");
}

function setup() {
	createCanvas(1350, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,550);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	tree = new Tree(900,350,30,300);
	ground = new Ground(600,600,2000,20);

	mango1 = new Mango(800,100,15);
	mango2 = new Mango(810,150,15);
	mango3 = new Mango(812,200,14);
	mango4 = new Mango(820,250,15);
	mango5 = new Mango(800,300,14);

	mango6 = new Mango(700,260,15);
	mango7 = new Mango(750,210,15);
	mango8 = new Mango(760,300,13);
	mango9 = new Mango(700,280,15);
	mango10 = new Mango(700,220,14);

	mango11 = new Mango(870,120,15);
	mango12 = new Mango(900,150,15);
	mango13 = new Mango(860,200,16);
	mango14 = new Mango(900,250,15);
	mango15 = new Mango(910,300,15);

    mango16 = new Mango(950,250,15);
	 mango17 = new Mango(950,200,12);
	 mango18 = new Mango(1000,280,18);
	 mango19 = new Mango(1500,300,15);
     mango20 = new Mango(1000,100,15);

	stone = new Stone(150,550,15);
	boyShot = new Shot(stone.body,{x:150,y:500});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);

  background(bg);

  tree.display();

  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango8.display();
  mango10.display();

  mango11.display(); 
  mango12.display(); 
  mango13.display(); 
  mango14.display(); 
  mango15.display();
  mango16.display();  
  mango17.display();
  mango18.display();
   mango18.display(); 
   mango20.display();


  stone.display();

  boyShot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
  detectCollision(stone,mango14);
  detectCollision(stone,mango15);
  detectCollision(stone,mango16);
  detectCollision(stone,mango17);
  detectCollision(stone,mango18);
  detectCollision(stone,mango19);
  detectCollision(stone,mango20);

  stroke("green");
  fill("yellow");
  textSize(20);
  text("Project by SHIVANI UPADHYAY",1000, 580);

  stroke("blue");
  fill("pink");
  textSize(40);
  text("*MY MANGO*",500,100);

  fill("yellow");
  textSize(20);
  text("Drag the mouse to pluck the mango !!ENJOY!!",50,100);

  fill("yellow");
  textSize(20);
  text("Press space key to get 2nd chance",50,150);

  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    boyShot.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);
	}
}

