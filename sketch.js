//Name aliasing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld,ground,ball;


function setup() {
  createCanvas(400,400);

  //must 13 & 14
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var groundOption={
    isStatic:true,
    density:1
  }


  //Created PE bodies
  ground=Bodies.rectangle(200,380,400,10,groundOption);
  World.add(myWorld,ground);

  console.log(ground)
  
  var ballOption={
    // DEGREE OF BOUNCINESS
    restitution:1
    
  }
  ball=Bodies.circle(100,100,20,ballOption);
  World.add(myWorld,ball);

}

function draw() {
  background('black');  
  //must 40
  Engine.update(myEngine);

  //Displaying the ground
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,10);

  //displaying ball
  ellipseMode(RADIUS);
  fill("yellow");
  ellipse(ball.position.x,ball.position.y,20);
  
}