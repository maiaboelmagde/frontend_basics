do{
    do{
        var FirstNum = Number(prompt("Enter the start of range: ", "0"));
        if(isNaN(FirstNum)) {
            alert("Invalid Number");
        }
    }while(isNaN(FirstNum));
    do{
        var SecondNum = Number(prompt("Enter the end of range :","0"));
        if(isNaN(SecondNum)) {
            alert("Invalid Number");
        }
    }while(isNaN(SecondNum));

    if(FirstNum > SecondNum){
        alert("The start of our range bigger than end of our range !! \n please enter them correctly")
    }
}while(FirstNum > SecondNum);

var sum = 0;
document.write("Number multiple of 3: ")
for(var i = FirstNum ; i <= SecondNum; i++){
    if(i%3 == 0){
        document.write(""+i+", ");
        sum += i;
    }
}
document.write("<br>");
document.write("Number multiple of 5: ")
for(var i = FirstNum ; i <= SecondNum; i++){
    if(i%5 == 0){
        document.write(""+i+", " );
        sum += i;
    }
}
document.write("<br>");
document.write("total sum is " + sum);

