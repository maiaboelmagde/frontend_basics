function calculateArea(radius){
    return Math.PI*radius*radius;
}

var MyRadius;
do{
    MyRadius = Number(prompt("Enter the value of a circle’s radius..."));
    if(isNaN(MyRadius)) {
        alert("Invalid Number");
    }
}while(isNaN(MyRadius));
let Area = calculateArea(MyRadius);
document.write("According to radius value("+MyRadius+") The area = "+Area.toFixed(2));


let SecondValue;
do{
    SecondValue = Number(prompt("Enter another value to calculate its square root...."));
    if(isNaN(SecondValue)) {
        alert("Invalid Number");
    }
}while(isNaN(SecondValue));

alert("The  square root of "+SecondValue+" is "+Math.sqrt(SecondValue));



let angle;
do{
    angle = Number(prompt("Enter an angle to calculate its cos value..."));
    if(isNaN(angle)) {
        alert("Invalid Number");
    }
}while(isNaN(angle));

let radians = angle * (Math.PI / 180);

console.log('The cosine of '+angle +' degrees is:'+Math.acos(radians));

