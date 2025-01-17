const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

myCanvas.width = window.innerWidth - 100;
myCanvas.height = window.innerHeight - 100;

const centre = myCanvas.width/2;
const middle = myCanvas.height/2;

const circle1X = centre;
const circle1Y = middle;
const radius1 = 140;

const color1X = centre + 50;
const color1Y = middle - 30;
const colorRadius1 = 320;


const circle2X = centre;
const circle2Y = middle;
const radius2 = 100;

const color2X = centre + 80;
const color2Y = middle + 80;
const colorRadius2 = 180;


const grad = ctx.createRadialGradient(
  color1X, color1Y, 5, 
  color1X, color1Y, colorRadius1
);
grad.addColorStop(0, "white");
grad.addColorStop(0.5, "rgb(99, 139, 233)");
grad.addColorStop(0.7, "rgb(60, 106, 214)");
grad.addColorStop(1, "rgb(48, 98, 214)");

ctx.fillStyle = grad;

ctx.beginPath();
ctx.arc(circle1X, circle1Y, radius1, 0, 2 * Math.PI);
ctx.fill();


const grad2 = ctx.createRadialGradient(
    color2X, color2Y, 5, 
    color2X, color2Y, colorRadius2
  );
  grad2.addColorStop(0, "white");
  grad2.addColorStop(0.15, "rgb(180, 206, 253)");
  grad2.addColorStop(0.8, "rgb(68, 114, 221)");
  grad2.addColorStop(1, "rgb(48, 98, 214)");
  
ctx.fillStyle = grad2;
ctx.beginPath();
ctx.arc(circle2X, circle2Y, radius2, 0, 2 * Math.PI);
ctx.fill();


ctx.font = "180px Arial";
ctx.fillStyle = "white";
ctx.fillText("N", centre-59, middle+59);