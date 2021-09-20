var canv;
var changeA = Math.PI*2/3;
var col = 'red';
var changeC = true; 
function windowResized() {
    resizeCanvas(window.innerWidth*7/8, window.innerHeight*7/8);
  }
  function setup() {
    canv= createCanvas(window.innerWidth *7/8 ,window.innerHeight*7/8);
    background(54, 69, 79);
  }
  function draw (){
    background(54, 69, 79);
    translate(width/2,height);
    stroke (col);
    var distance = height*1/3;
    strokeWeight(3);
    line(0, height, 0, -distance);
    translate(0,-distance);
    rotate(Math.PI/2 - changeA);//fixed critical math error
    recurse (distance*3/5, changeA, 5);
    
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
function changeAngle(){
  //implment soon
}
function changeCol(){
  //implement next
}

function mouseDragged() {
  changeA += .1;//proof of concept
}