var canv;
var changeA = Math.PI/6;  
function windowResized() {
    resizeCanvas(window.innerWidth*7/8, window.innerHeight*7/8);
  }
  function setup() {
    canv= createCanvas(window.innerWidth *7/8 ,window.innerHeight*7/8);
    background(54, 69, 79);
  }
  function draw (){
    translate(width/2,height);
    stroke ('red');
    var distance = height*1/3;
    strokeWeight(3);
    line(0, height, 0, -distance);
    translate(0,-distance);
    rotate(Math.PI/3)
    recurse (distance*3/5, changeA, 5)
  }

  //rewrite
  function recurse(distance, angle, iterations){
    if (iterations >0){
      stroke ('pink');
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
  /*
    function recurse(distance, angle, iterations){
    if (iterations >0){
      stroke ('pink');
      push();
      
      rotate(angle);
      var change = createVector(distance.x, distance.y);
      change = change.mult(.67);
      line (0,0,change.x, change.y);
      translate (change.x,change.y);
      recurse (change, angle, iterations-1);
      pop ();
      push();
      rotate(-angle);
      distance = distance.mult(.67)      
      line (0,0,distance.x, distance.y);
      translate (distance.x,distance.y);
      recurse (distance, -angle, iterations-1);
      pop ();
      console.log ('worked');
    }
    else{
      console.log("done");
    }
  }*/