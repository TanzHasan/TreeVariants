var tree;
var canv;
var col = 'red';
let goBtn = document.getElementById("testbtn");
var angle = 0;
var bop = false;
var distort = false;
var depth = 1;

function setup() {
  canv= createCanvas(window.innerWidth*5/8 ,window.innerHeight);
  var a = createVector(width / 2, height*3/4);
  var distance = createVector (0,-window.innerHeight/4);
  tree = new treeNode(a, Math.PI/2, distance, col);
  strokeWeight(3);
}

function draw() {
  background(50);
  treeCrawl(tree);
  if (bop){
    angle=(angle+.10);
  }

}
function treeCrawl(node){
  if (distort){
    angle=(angle+.10);
    node.end.x+= 4*Math.sin(angle);
    node.end.y+= 4*Math.sin(angle);
  }
  
  node.show();
  if(node.next == true){
    if (bop){
      node.end.x+= 4*Math.sin(angle);
      node.end.y+= 4*Math.sin(angle);
      node.left.end.y -=.3*Math.sin(angle);
      node.left.end.x -=.3*Math.sin(angle);
      node.right.end.y +=.3*Math.sin(angle);
      node.right.end.x +=.3*Math.sin(angle);
    }
    treeCrawl(node.left);
    treeCrawl(node.right);
  }
} 
function nBranch(){
  depth+=1;
  console.log("button clicked");
  nbranches(tree);
}
function nbranches (current){
  if (current.next == false){
    current.newB();
  }
  else{
    console.log("reached");
    nbranches (current.left);
    nbranches (current.right);
  }
}
function cBop(){
  if (bop){
    bop = false;
  }
  else{
    bop = true;
  }
}
function newTree(){
  var count = 1;
  var a = createVector(width / 2, height*3/4);
  var distance = createVector (0,-window.innerHeight/4);
  tree = new treeNode(a, Math.random()*Math.PI*2, distance, col);
  while (count<depth){
    count+=1;
    nbranches(tree);
  }
}
function reset(){
  depth = 0;
  var a = createVector(width / 2, height*3/4);
  var distance = createVector (0,-window.innerHeight/4);
  tree = new treeNode(a, Math.random()*Math.PI*2, distance, col);
}
function cDistort(){
  if (distort){
    distort = false;
  }
  else{
    distort = true;
  }
}