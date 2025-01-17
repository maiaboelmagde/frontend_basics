
let flag = true;
let timesCounter = 1;
var upperPart = document.getElementById('div1');
var lowerPart = document.getElementById('div2');

lowerPart.style.visibility = 'hidden';

let interval =setInterval(function(){
    if(flag == true){
        lowerPart.style.visibility = 'visible';
        upperPart.style.visibility = 'hidden';
        flag = false;
        timesCounter++;
    }else{
        upperPart.style.visibility = 'visible';
        lowerPart.style.visibility = 'hidden';
        flag = true;
    }
    if(timesCounter > 10){
        clearInterval(interval);
        lowerPart.style.visibility = 'hidden';
        upperPart.style.visibility = 'hidden';
        setTimeout(function(){
            upperPart.style.visibility = 'visible';
            lowerPart.style.visibility = 'visible';
        },200);
    }
},600);

