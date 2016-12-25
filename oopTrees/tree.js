var Tree = function(baseX, baseY, maxTrunkLength, trunkThickness){
  this.trunk = new Branch(baseX, baseY, maxTrunkLength, -180, 10, trunkThickness);
}

Tree.prototype.draw = function(c, p){
  this.trunk.draw(c, p);
  console.log(this);
}
