var canv;
var changeA = Math.PI*2/3;
var changeC = true;
var changeP = true;
var flickR = false;
var red;
var green ;
var blue;
var col;

function windowResized() {
    resizeCanvas(window.innerWidth*7/8, window.innerHeight*7/8);
  }

function setup() {
  canv= createCanvas(window.innerWidth *7/8 ,window.innerHeight*7/8);
  background(54, 69, 79);
  frameRate(30);
  col= color(255,204,0);
  red = createSlider(0, 255, 255, 1)
  red.position(0, height*8/10);
  green = createSlider(0, 255, 204, 1)
  green.position(0, height*9/10);
  blue = createSlider(0, 255, 0, 1)
  blue.position(0, height);
  
  button = createButton('Flicker');
  button.position(0, height*7/10);
  button.size(width/20,height/20);
  button.style("font-size", "width/20");
  button.style("background", "rgb(54, 69, 79)");
  button.style("color", "#fffaf0")
  button.mousePressed(flick);

}

  function draw (){
    background(54, 69, 79);
    textSize(36);
    fill('red');
    text('red', 0, height*8/10-60);
    fill('green'); 
    text('green', 0, height*9/10-60);
    fill('blue'); 
    text('blue', 0, height-60);
    
    if (changeC){
      changeCol();
    }
    translate(width/2,height);
    stroke (col);
    var distance = height*1/3;
    line(0, height, 0, -distance);
    translate(0,-distance);
    rotate(Math.PI/2 - changeA);//fixed critical math error
    recurse (distance*2/3, changeA, 6, 5);    
  }

  function recurse(distance, angle, iterations, weight){
    if (iterations >0){
      if (flickR){
        stroke (color((red.value()+(10-iterations)*5*Math.random())%255,(green.value()+(10-iterations)*5*Math.random())%255,(blue.value()+(10-iterations)*5*Math.random())%255));
        strokeWeight(iterations * Math.random());
      }
      else{
        stroke (color((red.value()+(8-iterations)*3)%255,(green.value()+(8-iterations)*-3)%255,(blue.value()+(8-iterations)*3)%255));
        strokeWeight(weight);
      }
      push();
      var change = createVector(-distance*Math.cos(angle+changeA), -distance*Math.sin(angle+changeA));
      line (0,0,change.x, change.y);
      translate (change.x,change.y);
      recurse (distance*2/3, angle+changeA, iterations-1, weight-.55);
      pop ();
      push();
      var change = createVector(-distance*Math.cos(angle-changeA), -distance*Math.sin(angle-changeA));     
      line (0,0,change.x, change.y);
      translate (change.x,change.y);
      recurse (distance*2/3, angle-changeA, iterations-1, weight-.55);
      pop ();
    }
  }

function changeCol(){
  col = color (red.value(), green.value(), blue.value());
}

function mouseDragged() {
  if (changeP){
    if (mouseX>width/2){
      changeA += .01;
    }
    else{
      changeA -= .01;
    }  
  }
}
function flick (){
  if (flickR){
    flickR= false;
  }
  else{
    flickR = true;
  }
}