let elem;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight)
  background(0,220,220)
  elem= createElement('h2', 'I AM A CIRCLE')
  elem.position(150, 170)
  elem.style('color', 'yellow')

}

function draw() {
  // put drawing code here
  
  fill("purple")
  noStroke()
  circle(windowWidth/2,windowHeight/2,400)
  fill("orange")
 rect(windowWidth/2, windowHeight/2, 200)

}