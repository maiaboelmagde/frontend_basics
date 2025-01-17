const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const numRectangles = 12;
const rectWidth = 120;
const rectHeight =40; 
const radius = 80;
const angleIncrement = (Math.PI * 2) / numRectangles; 
let rectCounter = 0;

ctx.fillStyle = "rgba(84, 151, 239, 0.8)";

function drawRectangles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  console.log("drawRectangles");
  for (let i = 0; i < rectCounter; i++) {
    const angle = angleIncrement * i;
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);

    ctx.fillRect(radius - rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
    ctx.restore();
  }

  rectCounter++;

  if (rectCounter >= numRectangles) {
    setTimeout(reverseDrawRectangles, 500);
    return;
  }

  setTimeout(drawRectangles, 500);
}


function reverseDrawRectangles() {  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  console.log("reverseDrawRectangles");
  for (let i = 0; i < rectCounter; i++) {
    const angle = angleIncrement * i;
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);

    ctx.fillRect(radius - rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
    ctx.restore();
  }

  rectCounter--;

  if (rectCounter < 0) {
    setTimeout(drawRectangles, 500);
    return;
  }

  setTimeout(reverseDrawRectangles, 500);
}

drawRectangles();