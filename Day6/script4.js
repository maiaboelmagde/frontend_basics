var images= Array.from(document.getElementsByTagName('img'));
var idx = 0,last_idx=0;
var interval;
function setInitial() {
    idx=0;
    for (let index in images) {
            images[index].src="assets/marbels/marble1.jpg";
            images[index].style="padding-top:40px;";
    }
    startAnimation();
}

function startAnimation(){
    interval = setInterval(()=>{
        images[last_idx].src = 'assets/marbels/marble1.jpg';
        images[last_idx].style='padding-top: 30px;';
        images[idx].src='assets/marbels/marble3.jpg';
        images[idx].style='padding-top: 0px;';
        last_idx=idx;
        idx++;
        if(idx>=5) idx=0;
    },1000);
}

function  stopAnimation(){
    clearInterval(interval);
}

setInitial(0);
images.forEach(imge => {
    imge.addEventListener('mouseenter', stopAnimation);
    imge.addEventListener('mouseleave', setInitial);
  });

