var draggableSec = $('div');
var droppablePic = $('#droppablePic');

$(function (){
    draggableSec.draggable({
        start: function(event, ui) {
            const shakeDistance = 5; 
            const shakeDuration = 100;

            function shake() {
                draggableSec.animate({ left: '+='+shakeDistance+'px' }, shakeDuration)
                          .animate({ left: '-='+ shakeDistance*2 +'px' }, shakeDuration)
                          .animate({ left: '+='+shakeDistance+'px' }, shakeDuration);
            }
            shakeInterval = setInterval(shake, shakeDuration * 4);
        },
        stop: function(event, ui) {
            clearInterval(shakeInterval);
        }
    });
    droppablePic.droppable({
        drop: function(){
            draggableSec.hide();
        }
    });
});
