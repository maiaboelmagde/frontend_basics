myDiv = document.getElementById("video-div");
DurationTab = document.getElementById("DurationTab");
playbtn = document.getElementById("playbtn");
stopbtn = document.getElementById("stopbtn");
leftbtn = document.getElementById("leftbtn");
prevbtn = document.getElementById("prevbtn");
nextbtn = document.getElementById("nextbtn");
rightbtn = document.getElementById("rightbtn");
speedbtn = document.getElementById("speedbtn");
speedTab = document.getElementById("speedTab");
speedTab.min = 0.5; 
speedTab.max = 2; 
speedTab.step = 0.1; 
speedTab.value = 1;
video = document.getElementsByTagName('video')[0];
volume_icon = document.getElementById('volume_icon');
VolumeTab = document.getElementById('VolumeTab');
VolumeTab.min="0"; 
VolumeTab.max="1";
VolumeTab.step="0.01";
VolumeTab.value="1"

span = document.getElementsByTagName('span')[0];

video.addEventListener('loadedmetadata', function() {
    DurationTab.max = video.duration;
});
DurationTab.min = 0;
sources = ['Assets/frozen.mp4'];
source_index = 0;
DurationTab.value=document.getElementsByTagName('video')[0].currentTime;

playbtn.addEventListener('click', function() {
    video.play();
});

stopbtn.addEventListener('click', function() {
    video.pause();
});

prevbtn.addEventListener('click',function(){
    if(source_index == 0){
        source_index = sources.length;
    }
    source_index -= 1;
    video.src = sources[source_index];
    DurationTab.max = video.duration;
});


nextbtn.addEventListener('click',function(){
    if(source_index == sources.length-1){
        source_index = -1;
    }
    source_index += 1;
    video.src = sources[source_index];
    DurationTab.max = video.duration;
});

leftbtn.addEventListener('click', function(){
    console.log(video.currentTime);
    if(video.currentTime > 10){
        video.currentTime -= 10;
    }else{
        video.currentTime = 0;
    }
});

rightbtn.addEventListener('click', function(){
    if(video.currentTime < video.duration-10){
        video.currentTime += 10;
    }else{
        video.currentTime = video.duration;
    }
});

var timeInt,hoursInt;
video.addEventListener( 'timeupdate' ,function(){
    DurationTab.value = video.currentTime;
    timeInt = parseInt(video.currentTime);
    hoursInt = parseInt(timeInt/60);
    if(timeInt/60 < 10){
        if(timeInt%60 < 10)
            span.innerText = '0'+hoursInt+':0'+timeInt%60;
        else
            span.innerText = '0'+hoursInt+':'+timeInt%60;
    }else{
    
        if(timeInt%60 < 10)
            span.innerText = hoursInt+':0'+timeInt%60;
        else
            span.innerText = hoursInt+':'+timeInt%60;
    }
    
});


DurationTab.addEventListener('input', function(event){
    video.currentTime = DurationTab.value;
});

VolumeTab.addEventListener('input',function(){
    video.volume = VolumeTab.value;
});
volume_icon.addEventListener('click',function(){
    video.muted = !video.muted;
    if (video.muted) {
        volume_icon.src = 'Assets/muted_volume.jpg';
    }else{
        volume_icon.src = 'Assets/volume_icon.png';
        if (video.volume == 0) {
            video.volume = VolumeTab.value = 0.2;
        }
    }
});

speedbtn.addEventListener('click',function(){
    if (speedTab.style.display === 'none' || speedTab.style.display === '') {
        speedTab.style.display = 'inline'; 
    } else {
        speedTab.style.display = 'none'; 
    }
});
speedTab.addEventListener('input', function(){
    video.playbackRate = speedTab.value;
});

fullscreenBtn.addEventListener('click', function() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } 
});
