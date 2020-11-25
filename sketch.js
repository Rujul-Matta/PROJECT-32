const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine = Engine;
var bodies = Bodies;
var body = Body;
var world = World;


var backgroundImg = backgroundImg;
var IMG_3;

var score =0 ;

function preload(){
  IMG = loadImage("background.jpg");
}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground_1 = new Ground(400,395,800,10);
  ground_2 = new Ground(425,325,200,10);
  ground_3 = new Ground(700,175,175,10);

  ball_1 = new ball(150,200,50,50);
  rope = new Rope(ball_1.body, {x: 150, y: 200});

  x1 = 350;
  y1 = 300;
  // LEVEL 1 [1st stand]
  block_1 = new Block(x1, y1);
  block_2 = new Block(x1+25, y1);
  block_3 = new Block(x1+50, y1);
  block_4 = new Block(x1+75, y1);
  block_5 = new Block(x1+100, y1);
  block_6 = new Block(x1+125, y1);
  block_7 = new Block(x1+150, y1);

  // LEVEL 2 [1st stand]
  block_8 = new Block(x1+25, y1-45);
  block_9 = new Block(x1+50, y1-45);
  block_10 = new Block(x1+75, y1-45);
  block_11 = new Block(x1+100, y1-45);
  block_12 = new Block(x1+125, y1-45);

  // LEVEL 3 [1st stand]
  block_13 = new Block(x1+50, y1-90);
  block_14 = new Block(x1+75, y1-90);
  block_15 = new Block(x1+100, y1-90);
  
  // LEVEL 4 [1st Stand]
  block_16 = new Block(x1+75, y1-135);

  // LEVEL 1 [2nd Stand]
  x2 = 650;
  y2 = 145;
  block_17 = new Block(x2, y2);
  block_18 = new Block(x2 + 25, y2);
  block_19 = new Block(x2 + 50, y2);
  block_20 = new Block(x2 + 75, y2);
  block_21 = new Block(x2 + 100, y2);

  // LEVEL 2 [2nd Stand]
  block_22 = new Block(x2 + 25, y2 - 45);
  block_23 = new Block(x2 + 50, y2 - 45);
  block_24 = new Block(x2 + 75, y2 - 45);

  // LEVEL 3 [2nd Stand]
  block_25 = new Block(x2 +50, y2 - 90);


}

function draw() {
  if(IMG_3)
 background(IMG_3);

 Engine.update(engine);

 fill(rgb(1,30,74))
 ground_1.display();
 ground_2.display();
 ground_3.display();

 fill("lightblue"); // LEVEL 1 [1st & 2nd Stand]
 stroke(0);
 strokeWeight(5)
  block_1.display();
  block_2.display();
  block_3.display();
  block_4.display();
  block_5.display();
  block_6.display();
  block_7.display();

  block_17.display();
  block_18.display();
  block_19.display();
  block_20.display();
  block_21.display();

  fill("pink");
  //LEVEL 2 [1st stand]
  block_8.display();
  block_9.display();
  block_10.display();
  block_11.display();
  block_12.display();

  // LEVEL 3 [2nd Stand]
  block_25.display();

  fill("cyan");
  // LEVEL 2 [1st Stand]
  block_13.display();
  block_14.display();
  block_15.display();
  // LEVEL 3 [2nd Stand]
  block_22.display();
  block_23.display();
  block_24.display();

  fill("grey");
  block_16.display();

  block_1.score();
  block_2.score();
  block_3.score();
  block_4.score();
  block_5.score();
  block_6.score();
  block_7.score();
  block_8.score();
  block_9.score();
  block_10.score();
  block_11.score();
  block_12.score();
  block_13.score();
  block_14.score();
  block_15.score();
  block_16.score();
  block_17.score();
  block_18.score();
  block_19.score();
  block_20.score();
  block_21.score();
  block_22.score();
  block_23.score();
  block_24.score();
  block_25.score();

  ball_1.display();
  rope.display();

  // if(IMG_3){  
    fill(220)
    textSize(35);
    text("Score = " + score, 75,75);
  // }

 


  getTime();
} 
async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var date_timeJSON = await response.json();
  var time = date_timeJSON.datetime;

  var newData = time.slice(11 , 13);

  console.log(date_timeJSON);
  console.log("time = " + time);
  console.log("Hour = " + newData);

  if(newData >= 19 && newData >= 06){ 
      backgroundImg = "background.jpg";
  }
  else {
      backgroundImg = "background2.jpg"
  }

  IMG_3 = loadImage(backgroundImg);
}
function mouseDragged(){
  Matter.Body.setPosition(ball_1.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(ball_1.body)
  }
}
