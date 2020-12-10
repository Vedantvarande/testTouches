var touches;


function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(220);
  
  let display = touches.length + ' touches';
  text(display, 5, 10);
  
}