var Branch = function(baseX, baseY, length, prevTheta, thetaSpread, thickness){
  this.baseX = baseX;
  this.baseY = baseY;
  var r = Math.random();
  this.length = length * (0.75 + r * 0.15);
  this.thickness = r * thickness;
  this.theta = (Math.random() - 0.5) * thetaSpread + prevTheta;
  this.endX = ( - this.length * Math.sin((this.theta / (Math.PI / 180)))) + this.baseX;
  this.endY = ( this.length * Math.cos((this.theta / (Math.PI / 180)))) + this.baseY;
  this.slope = (this.endY-this.endX)/this.endX-this.baseX;
  if (this.length > 3){
    var numSubbranches = 2;
    this.subbranches = [];
    for (var i = 0; i < numSubbranches; i++){
      this.subbranches.push(new Branch(this.endX, this.endY, this.length, this.theta, 120));
    }
  }
}

Branch.prototype.draw = function(c, p){
  p.stroke(c);
  p.strokeWeight(this.thickness);
  p.line(this.baseX, this.baseY, this.endX, this.endY);
  p.line(this.baseX, p.height-this.baseY, this.endX, p.height-this.endY);
  if(!this.subbranches){return;}
  else{
    for (var i = 0; i < this.subbranches.length; i++){
      this.subbranches[i].draw(c, p);
    }
  }
}
