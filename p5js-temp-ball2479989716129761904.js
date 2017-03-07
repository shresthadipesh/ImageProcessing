function Ball(x,y){
  this.x = x;
  this.y = y;
  this.r = random(255);
  this.g = random(255);
  this.show = function(){
    fill(this.r,this.g,this.g);
       ellipse(this.x,this.y,5,5);
  }
}