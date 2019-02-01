const btn = document.querySelector('#reset');
const etchasketch = document.querySelector('#etch-a-sketch');

function askSize() {
   var size;

   do {
      size = parseInt(prompt("Enter a number"), 10);
   } while(isNaN(size) || size < 1);

   return size;
}

function createSketchPad(size) {
   etchasketch.style.display = "flex";
   etchasketch.style.flexWrap = "wrap";
   etchasketch.style.backgroundColor = "gray";
   etchasketch.style.

   var grids = [];
   for (var i = 0; i < size*size; i++) {
      grids[i] = document.createElement('div');
      grids[i].classList.add('grids');
      etchasketch.appendChild(grids[i]);

      grids[i].style.height = "60px";
      grids[i].style.border = "thin solid black";

      var percent = 100/size - 0.25;
      grids[i].style.flex = "1 0" + percent.toString() + "%";

      grids[i].onmouseover = function() {this.style.backgroundColor = "white";};
   }
}

function clearSketchPad() {
   etchasketch.innerHTML = "";
}

btn.onclick = function () {
   clearSketchPad();
   var size = askSize();
   createSketchPad(size);
};

