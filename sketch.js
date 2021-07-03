
function setup() {
  createCanvas(400,400);
 b1=createButton ("red")
 b1.position(50,200)
 b1.mousePressed(redc)
 b2=createButton ("green")
 b2.position(150,200)
 b2.mousePressed(greenc)

 
}

function draw() 
{
  background(30);

}

function redc(){
background(255,0,0)
}
function greenc(){
  background(0,255,0)
  }



