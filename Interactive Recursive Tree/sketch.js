var canv;
var changeA = Math.PI*2/3;
var changeC = true;
var changeP = true;
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
  col= color(255,204,0);
  red = createSlider(0, 255, 255, 1)
  red.position(0, height*8/10);
  green = createSlider(0, 255, 204, 1)
  green.position(0, height*9/10);
  blue = createSlider(0, 255, 0, 1)
  blue.position(0, height);
  
}

  function draw (){
    background(54, 69, 79);
    if (changeC){
      changeCol();
    }
    translate(width/2,height);
    stroke (col);
    var distance = height*1/3;
    strokeWeight(3);
    line(0, height, 0, -distance);
    translate(0,-distance);
    rotate(Math.PI/2 - changeA);//fixed critical math error
    recurse (distance*3/5, changeA, 6);
    
  }

  function recurse(distance, angle, iterations){
    if (iterations >0){
      stroke (col);
      push();
      var change = createVector(-distance*Math.cos(angle+changeA), -distance*Math.sin(angle+changeA));
      line (0,0,change.x, change.y);
      translate (change.x,change.y);
      recurse (distance*3/5, angle+changeA, iterations-1);
      pop ();
      push();
      var change = createVector(-distance*Math.cos(angle-changeA), -distance*Math.sin(angle-changeA));     
      line (0,0,change.x, change.y);
      translate (change.x,change.y);
      recurse (distance*3/5, angle-changeA, iterations-1);
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
  //proof of concept
}