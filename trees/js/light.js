var Light = function(x,y){
  this.x = x;
  this.y = y;
  this.on =  false;
}

Light.prototype.draw = function(p){
  p.noStroke();
  for (var i = 0; i < p.height/40; i++){
      p.fill(p.color(200, 200, 180, (i+1) * 255/(p.height/80)));
      p.ellipse(this.x, p.height/2 - this.y, p.height/80 - i);
      p.ellipse(this.x, p.height/2 + this.y, p.height/80 - i);
  }
}
