const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext('2d');

myCanvas.width = 300;
myCanvas.height = 600;
myCanvas.style.border = 'solid 5px red';
myCanvas.style.borderRadius = '9%';



ctx.font = "3em Miltonian Tattoo";
ctx.fillText("A", 20, 80);

ctx.fillText("A", 228, 550);

ctx.moveTo(100,650)