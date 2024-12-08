do{
    var LinesNum = Number(prompt("Enter the number of lines ", "0"));
    if(isNaN(LinesNum)) {
        alert("Invalid Number");
    }
}while(isNaN(LinesNum));

for(var i =1;i<=LinesNum;i++){
    for(var j=0;j<i;j++){
        document.write("*");
    }
    document.write("<br>");
}