const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
const draw_width = canvas.width -100;
const draw_height = canvas.height - 100;

const rectX = 200;
const rectY = 250;
const rectWidth = 200;
const rectHeight = 150;


canvas.style.border="3px black solid";
const grd = ctx.createLinearGradient(0, 0, 0, draw_height);
grd.addColorStop(0, "rgb(66, 157, 196)");
grd.addColorStop(0.3, "rgb(66, 157, 196)");
grd.addColorStop(0.6, "white");
grd.addColorStop(0.6, "rgb(56, 211, 54)"); 
grd.addColorStop(0.97, "rgb(225, 227, 225)");


ctx.fillStyle = grd;
ctx.fillRect(50, 50, draw_width, draw_height);


const gradient = ctx.createLinearGradient(0, rectY, 0, rectY + rectHeight);
gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
gradient.addColorStop(0.5, "rgba(0, 0, 0, 1)");
gradient.addColorStop(0.8, "rgba(0, 0, 0, 0.1)"); 
gradient.addColorStop(1, "rgba(0, 0, 0, 0)"); 

ctx.strokeStyle = gradient;
ctx.lineWidth = 4;
ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);

