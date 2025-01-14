$('#right').click(function(){
    var myImg = $('#imgee');
    var source = myImg.attr('src');
    if(source != "Assets/8.jpg"){
        myImg.fadeOut(2000,function(){
            myImg.attr('src','Assets/'+ (Number(source[7])+1).toString() +'.jpg');
            myImg.fadeIn(2000);
        });
    }
});

$('#left').click(function(){
    var myImg = $('#imgee');
    var source = myImg.attr('src');
    if(source != "Assets/1.jpg"){
        myImg.fadeOut(2000,function(){
            myImg.attr('src','Assets/'+ (Number(source[7])-1).toString() +'.jpg');
            myImg.fadeIn(2000);
        });
    }
});

var aboutSec = $('#About');
var GallarySec= $('#Galary');
var item1 = $('#item1');
var item2 = $('#item2');
var item3 = $('#item3');
var ComplainSec = $('#Complain');

aboutSec.hide();
GallarySec.hide();

item1.hide();
item2.hide();
item3.hide();
ComplainSec.hide();

var aboutBut = $('#aboutBut');
var GallaryBut = $('#GallaryBut');
var ServicesBut = $('#ServicesBut');
var ComplainBut = $('#ComplainBut');

aboutBut.click(function(){
    aboutSec.toggle();
});

GallaryBut.click(function(){
    GallarySec.toggle();
});

ServicesBut.click(function(){
    item1.slideToggle(500,function(){
        item2.slideToggle(500,function(){
            item3.slideToggle(500);
        });
    });
});


////////// Complain part
var form2 = $('#form2');
var form1 = $('#form1');

form2.hide();
ComplainBut.click(function(){
    ComplainSec.toggle();
});

$('#send').click(function(){
  
    $('#com_text').text($('#complain').val());
    $('#name_text').text($('#name').val());
    $('#email_text').text($('#email').val());
    $('#phone_text').text($('#phone').val());
    form1.hide();
    form2.show();
});

$('#Backbtn').click(function(){
    form2.hide();
    form1.show();
});