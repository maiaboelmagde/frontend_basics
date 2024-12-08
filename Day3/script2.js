var sum = 0;

do{
    var myNum = Number(prompt("Enter your Number : ",0));
    if(isNaN(myNum)) {
        alert("Invalid Number");
    }else{
         sum += myNum;
    }
}while(myNum != 0 && sum<100)

document.write("the sum equals : " + sum);