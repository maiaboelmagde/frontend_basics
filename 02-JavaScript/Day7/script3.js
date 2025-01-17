let custEvent = new Event("noData");
var timer;

document.getElementById('data').addEventListener("noData",
    function (){
        alert("30 seconds passed and you has not entered any data");
    }
);

function displayTimer(){
    clearInterval(timer);

    timer = setInterval(function(){
        document.getElementById("data").dispatchEvent(custEvent);
    },3000);
}

timer = setInterval(function(){
    document.getElementById("data").dispatchEvent(custEvent);
},3000);

document.getElementById('data').addEventListener("input", displayTimer);
document.getElementById('data').addEventListener("change", displayTimer);
