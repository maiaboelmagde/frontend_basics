var divEle = $('div');
var runbtn = $('button:eq(0)');
var returnbtn = $('button:eq(1)');

divEle.css({
    'background-color':'red',
    'display': 'inline-block',
    'width' : '150px',
    'height':'30px',
    'color':'white',
    'border':'1px black solid'
});

runbtn.on('click', function(){
    divEle.animate({
    'background-color':'rgb(223, 157, 168)',
    width : '+=200px',
    height:'+=70px',
    'font-size':'+=70px',
    'margin-left' :'+=240px',
    'border-width':'+=5px',
    });
});

returnbtn.on('click', function(){
    divEle.animate({
    'background-color':'red',
    width : '-=200px',
    height:'-=70px',
    'font-size':'-=70px',
    'margin-left' :'-=240px',
    'border-width':'-=5px',
    });
});