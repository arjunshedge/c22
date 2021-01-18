const Engine = Matter.Engine;// name spacing
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var ground;
var ball;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

var ground_options={
 isStatic: true

}

ground=Bodies.rectangle(200,390,400,50,ground_options)
World.add(world,ground);
console.log(ground);

var ball_options={
  isStatic: false,
  restitution: 1
 
 }
ball=Bodies.circle(200,100,20,ball_options )
World.add(world,ball);
console.log(ball);


}

function draw() {
  Engine.update(engine);
  background(0);  
  rectMode(CENTER)
  rect (ground.position.x,ground.position.y,400,50)


  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}