do{
    var FirstNum = Number(prompt("Enter the 1st number : ", "0"));
    if(isNaN(FirstNum)) {
        alert("Invalid Number");
    }
}while(isNaN(FirstNum));
do{
    var SecondNum = Number(prompt("Enter the second number:","0"));
    if(isNaN(SecondNum)) {
        alert("Invalid Number");
    }
}while(isNaN(SecondNum));

(FirstNum >= SecondNum)?
    document.write("biggest num is "+ FirstNum)
:
    document.write("biggest num is "+ SecondNum);
