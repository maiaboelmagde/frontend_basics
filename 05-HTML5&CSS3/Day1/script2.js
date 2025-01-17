var redTab  = document.getElementById("redTab");
var blueTab = document.getElementById("blueTab");
var greenTab = document.getElementById("greenTab");

redTab.min = blueTab.min = greenTab.min = 0;
redTab.max = blueTab.max = greenTab.max = 255;
redTab.value = blueTab.value = greenTab.value = 0;

text = document.getElementsByTagName('h1')[0];
text.style.width = '340px';

redTab.addEventListener('input',function(){
    text.style.color = 'rgb('+redTab.value+','+greenTab.value+','+blueTab.value+')';
});

blueTab.addEventListener('input',function(){
    text.style.color = 'rgb('+redTab.value+','+greenTab.value+','+blueTab.value+')';
});
greenTab.addEventListener('input',function(){
    text.style.color = 'rgb('+redTab.value+','+greenTab.value+','+blueTab.value+')';
});
