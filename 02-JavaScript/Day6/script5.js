var imageSrc = [
    'assets/memory Game/1.gif',
    'assets/memory Game/2.gif',
    'assets/memory Game/3.gif',
    'assets/memory Game/4.gif',
    'assets/memory Game/5.gif',
    'assets/memory Game/6.gif',
    'assets/memory Game/1.gif',
    'assets/memory Game/2.gif',
    'assets/memory Game/3.gif',
    'assets/memory Game/4.gif',
    'assets/memory Game/5.gif',
    'assets/memory Game/6.gif',
];
var getTrue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var images= Array.from(document.getElementsByTagName('img'));

flippedCards = [];
var points = 0;

function sortRandomly(){
    imageSrc.sort(()=>Math.random()-Math.random());
}

function setSrc(){
    for(let i in imageSrc){
        images[i].src =  (getTrue[i])?imageSrc[i]:'assets/memory Game/Moon.gif';
    }
    checkCompletion();
    
}

function flip(idx){
    flippedCards.push(idx);
    console.log(flippedCards);
    images[idx].src = imageSrc[idx];
    if(flippedCards.length == 2){
        if(images[flippedCards[0]].src === images[flippedCards[1]].src){
            points++;
            getTrue[flippedCards[0]]=1;
            getTrue[flippedCards[1]]=1;
            setSrc();
        }else{
            setTimeout(setSrc,500);
        }
        flippedCards=[];
    }
}

function checkCompletion(){
    if(points >= 6){
        Congrats = document.getElementById("Completion");
        Congrats.innerHTML= "<div><h1>WIN , CONGRATULATS</h1></div>";
    }
}

sortRandomly();
for(let i in imageSrc){
    console.log(imageSrc[i]);
}
setSrc();
