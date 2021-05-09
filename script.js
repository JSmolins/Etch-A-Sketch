var container = document.getElementById('container');
var gridSize = prompt("Please enter grid size (per side):");

for (var i = 0; i < gridSize**2; i++) {
  var div = document.createElement('div');
  container.appendChild(div);
};

var square = document.querySelectorAll('div');
square.forEach((div) => {
  div.addEventListener("mouseover", function(e) {
    e.target.style.background = "black";
  });
  //div.addEventListener("mouseout", function(e) {
  //  e.target.style.background = "white";
  //});
});

var resetBtn = document.querySelector('button');
resetBtn.addEventListener("click", function(e) {

})
