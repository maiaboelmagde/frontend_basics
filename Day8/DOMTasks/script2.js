document.getElementById("header").style.textAlign='right';
document.getElementById("nav").style.listStyleType='circle';

let newDiv = document.createElement('div')
document.body.appendChild(newDiv);
newDiv.innerHTML=document.getElementById("header").innerHTML