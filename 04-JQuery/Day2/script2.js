var my_img = $('img:first');
rotatebtn = $('button:first');
resetbtn = $('button:last');

my_img.css({
    hight: '200px',
    width: '200px'
});

my_img.on('rotateEve', function(){
    my_img.animate({
        rotate: '+=360deg',
        'padding-left':'+=200px',
        'padding-top':'+=200px',
        width:'+=100px',
        height: '+=100px'
    },2000);
});
my_img.on('resetRotation', function(){
    my_img.animate({
        rotate: '-=360deg',
        'padding-left':'-=200px',
        'padding-top':'-=200px',
        width: '-=100px',
        height: '-=100px'
    },2000);
});

rotatebtn.click(function(){my_img.trigger('rotateEve');});
resetbtn.click(function(){my_img.trigger('resetRotation');});


setTimeout(function(){
    my_img.trigger('rotateEve');
},1000);

setTimeout(function(){
    my_img.trigger('resetRotation');
},4000);
