var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;


var ground;


var particles=[]
var plinko=[]
var divisions=[]

var divisionHeight=300

var engine,world;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;


ground = new Ground(780,480,20,20)


}


function draw() {
  background(0,0,0);
  Engine.update(engine);
  drawSprites();

  ground.display();



  for(var k=0;k<=width;k=k+80){

divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))

  }

  for(var j=40;j<=width;j=j+50){

    plinko.push( new plinko(j,75))
    
      }
      
      for(var j=15;j<=width-10;j=j+50){

        plinko.push( new plinko(j,175))
        
          }

    if(frameCount%60===0){

particles.push(new particles(random(width/2-1,width/2+10)))

    }      
      
    for(var j=0;j<particles.length;j++){

      particles[j].display();
      
        }
    
for(var k=0;k<divisions.length;k++){

    divisions[k].display();
          
      }

}