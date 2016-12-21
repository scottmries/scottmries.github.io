var treeSketch = function(p) {

    //MouseX and mouseY move the window
    //Scrolling up and down zoom in and out (window level)
    //Make branches appear along the branches, with appropriate length/thickness scaling
    //Add lights
    //Add ripple effect from audio input

    var mic;

    var trees;

    var treeColor;

    var treeImage;

    var trunkThickness = 5;

    p.setup = function() {
        var generatingP = document.querySelector(".generating");
        var canvas = document.querySelector("#treesCanvas");
        treeColor = p.color(0);
      p.createCanvas(p.windowWidth,p.windowHeight);
      trees = [];
      lights = [];
      treeImage = p.createImage(p.width * 2, p.height/2);
      p.background(p.color(50,50,60));
      for(var i = 0; i < 20; i++){
        trees.push(new Tree(p.random()*p.width, p.height/2, p.height/16, trunkThickness));
        trees[i].draw(treeColor, p);
      }
        for(var i = 0; i < 2; i++){
            lights.push(new Light(p.random()*p.width, p.random()*3*p.height/16 + p.height/16));
            if(lights[i].on){
                lights[i].draw(p);
            }
        }

      // mic = p5.AudioIn();
      // audioGrab.getSources(function(sourceList) {
      //   //print out the array of available sources
      //   console.log(sourceList);
      //   //set the source to the first item in the inputSources array
      //   audioGrab.setSource(0);
      // });
      // mic.start();
      generatingP.classList.add("transparent");
    //   canvas.classList.remove("hidden");
      canvas.classList.remove("transparent");
    }

    p.draw = function() {
        p.noLoop();
        // p.background(p.color(50,50,60));
      // micLevel = mic.getLevel();
    }

    p.windowResized = function() {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

    p.mouseWheel = function(event){
      // print(event.delta);
    }
}
