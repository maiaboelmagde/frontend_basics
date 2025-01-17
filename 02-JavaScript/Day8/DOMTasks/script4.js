const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const moveButton = document.querySelectorAll('button')[0];
const resetButton = document.querySelectorAll('button')[1];
const container = document.querySelector('div');
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");


let animationRunning = false;
let animationIntervals = [];


function setInitialPositions() {
    const widthBoundry = parseFloat(getComputedStyle(container).width);
    const hightBoundry = parseFloat(getComputedStyle(container).height);
    
    const centerX = (widthBoundry) / 2 - img3.width / 2;
    const centerY = (hightBoundry) / 2 - img1.height / 2;

    

    img1.style.left = '10px';
    img1.style.top = `${centerY}px`;

    img2.style.left = `${widthBoundry-25}px`;
    img2.style.top = `${centerY}px`;

    img3.style.left = `${centerX}px`;
    img3.style.top = `${hightBoundry-20}px`;
}


function animateImage(image, directionX, directionY) {
    let x = parseFloat(image.style.left || 0);
    let y = parseFloat(image.style.top || 0);
    let dx = directionX;
    let dy = directionY;

    const widthBoundry = parseFloat(getComputedStyle(container).width);
    const hightBoundry = parseFloat(getComputedStyle(container).height);
    const imgWidth = parseFloat(getComputedStyle(image).width)/2;
    const imgHight = parseFloat(getComputedStyle(image).height)/2;

    
    const interval = setInterval(() => {
        if (!animationRunning) return;
        if (x + dx < 0 || x + imgWidth + dx > widthBoundry) dx = -dx;
        if (y + dy < 0 || y + imgHight + dy > hightBoundry) dy = -dy;

        x += dx;
        y += dy;

        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
        if(image.id === 'img1'){
            p1.innerText = `<img src="icon1.gif" style="left: ${image.style.left}"/>`;
        }else if(image.id === 'img2'){
            p2.innerText = `<img src="icon2.gif" style="left: ${image.style.left}"/>`;
        }
    }, 30);

    animationIntervals.push(interval);
}


moveButton.addEventListener('click', () => {
    animationRunning = !animationRunning;

    if (animationRunning) {
        moveButton.innerText="Stop";
        animationIntervals = [];
        animateImage(img1, 2, 0); 
        animateImage(img2, -2, 0); 
        animateImage(img3, 0, -2); 
    } else {
        moveButton.innerText="Move";
        animationIntervals.forEach((interval) => clearInterval(interval));
        animationIntervals = [];
    }
});


resetButton.addEventListener('click', () => {
    animationIntervals.forEach((interval) => clearInterval(interval));
    animationIntervals = [];
    animationRunning = false;
    setInitialPositions();
});


window.onload = setInitialPositions;
