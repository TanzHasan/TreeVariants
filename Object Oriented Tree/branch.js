 //mutated tree 
 /*
function treeNode (begin, angle, distance, col){
  this.begin = begin;
  this.end = p5.Vector.add(begin, distance);
  this.left;
  this.right;
  this.next = false;
  this.newB = function(){
    var d2 = p5.Vector.add(distance, (0,0));
    d2.rotate(-angle);
    d2.mult(0.67);
    this.next = true;
    this.left = new treeNode(this.end, angle, d2, col);
    this.right = new treeNode(this.end, -angle, d2.rotate(angle*2), col);
  };
  this.show = function () {
    stroke (col);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  };

}*/
//Below is standard Tree
  
    function treeNode (begin, angle, distance, col){
    this.begin = begin;
    this.end = p5.Vector.add(begin, distance);
    this.left;
    this.right;
    this.next = false;
    this.newB = function(){
      this.next = true;
      this.newL();
      this.newR ();
    };
    this.show = function () {
      stroke (col);
      line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    };
    this.newL = function(){
      var d2 = p5.Vector.add(distance, (0,0));
      d2.mult(0.67);
      d2.rotate(-angle)
      this.left = new treeNode(this.end, angle, d2, col);
    }
    this.newR = function(){
      var d2 = p5.Vector.add(distance, (0,0));
      d2.mult(0.67);
      d2.rotate(angle);
      this.right = new treeNode(this.end, angle, d2, col);
    }
  }