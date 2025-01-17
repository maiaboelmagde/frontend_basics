const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const img = new Image();
img.src = '../Assets/memeImage.jpg';
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.font = 'bold 48px Impact';
  ctx.fillStyle = 'rgb(88, 39, 8)';
  ctx.strokeStyle = 'rgb(122, 72, 41)';
  ctx.lineWidth = 2;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  ctx.shadowColor = 'rgb(146, 91, 20)';
  ctx.shadowBlur = 5; 
  ctx.shadowOffsetX = 2; 
  ctx.shadowOffsetY = 7; 

  ctx.fillText('Me trying to get through life', canvas.width / 2, 20);
};