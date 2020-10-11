const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var groundObj;
var division1,division2,division3,division4,division5,division6,division7;
var plinkos=[];
var particles=[];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
//created ground
  groundObj=new Ground(400,799,800,10);
  //created divisions
  division1=new Divisions(310,695,10,300);
  division2=new Divisions(400,695,10,300);
  division3=new Divisions(479,695,10,300);
  division4=new Divisions(220,695,10,300);
  division5=new Divisions(140,695,10,300);
  division6=new Divisions(60,695,10,300);
  division7=new Divisions(1,695,10,300);
  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);

groundObj.display();
//divisions
division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();
division7.display();
//plinko
for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75));
}

for(var j=15;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175));
}
for(var j=65;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,275));
}
for(var j=90;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,375));
}

//particles
for(var j=0; j<particles.length; j++){
  particles[j].display();
}

drawSprites();
}
