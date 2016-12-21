document.addEventListener("DOMContentLoaded", function(event) {
    window.setInterval(function(){
            var dots = document.querySelector(".ellipsis").innerHTML.split("").length;
            dots = (dots + 1)%4;
            var ellipsis = "";
            for (var i = 0; i < dots; i++){
                ellipsis += ".";
            }
            document.querySelector(".ellipsis").innerText = ellipsis;
            console.log(ellipsis);
    }, 500);

  var treesP5 = new p5(treeSketch, "treesCanvas");
});
