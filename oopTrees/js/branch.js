var Branch = function(baseX, baseY, length, prevTheta, thetaSpread, thickness){
  this.baseX = baseX;
  this.baseY = baseY;
  var r = Math.random();
  length *= (0.75 + r * 0.15);
  this.thickness *= 0.75 + Math.random() * 0.15;
  var theta = (Math.random() - 0.5) * thetaSpread + prevTheta;
  this.endX = ( - length * Math.sin((theta / (Math.PI / 180)))) + this.baseX;
  this.endY = ( length * Math.cos((theta / (Math.PI / 180)))) + this.baseY;
  var slope = (this.endY-this.endX)/this.endX-this.baseX;
  if (length > 3.5 ){
    var numSubbranches = 2;
    this.subbranches = [];
    for (var i = 0; i < numSubbranches; i++){
        this.subbranches.push(new Branch(this.endX, this.endY, length, theta, 120, this.thickness));
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
