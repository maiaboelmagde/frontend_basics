do{
    var x = Number(prompt("Enter the 1st number (x) : ", "0"));
    if(isNaN(x)) {
        alert("Invalid Number");
    }
}while(isNaN(x));
do{
    var y = Number(prompt("Enter the second number (y) :","0"));
    if(isNaN(y)) {
       alert("Invalid Number");
    }
}while(isNaN(y));
do{
    var z = Number(prompt("Enter the third number: (z) ","0"));
    if(isNaN(z)) {
        alert("Invalid Number");
    }
}while(isNaN(z));

if (x%y == 0 && x%z == 0){
    document.write(x+" is divisible by both "+y+" and "+z);
}else if(x%y == 0){
    document.write(x+" is divisible by "+y+" only");
}else if(x%z == 0){
    document.write(x+" is divisible by "+z+" only");
}else{
    document.write(x+" isn't divisible by "+y+" nor z")
}