const ROWS = 16;
const COLS = 16;
//const 

const etchasketch = document.querySelector('#etch-a-sketch');

etchasketch.style.display = "flex";
etchasketch.style.flexWrap = "wrap";
etchasketch.style.backgroundColor = "gray";


var grids = [];
for (var i = 0; i < ROWS*COLS; i++) {
   grids[i] = document.createElement('div');
   grids[i].classList.add('grids');
   etchasketch.appendChild(grids[i]);

   grids[i].style.width = "60px";
   grids[i].style.height = "60px";
   grids[i].style.border = "thin solid black";
   grids[i].style.flex = "1 0 6%";                   // 6% makes each grid takes 1/16 of width

   grids[i].onmouseover = function() {this.style.backgroundColor = "white";};
}

