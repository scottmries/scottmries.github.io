var Tree = function(baseX, baseY, maxTrunkLength, trunkThickness){
    this.opacity = 0;
    this.trunk = new Branch(baseX, baseY, maxTrunkLength, -180, 10, trunkThickness);
}

Tree.prototype.draw = function(c, p){
    c = p.color(p.red(c), p.green(c), p.blue(c), this.opacity);
    this.trunk.draw(c,p);
    this.opacity += 255/10;
}
