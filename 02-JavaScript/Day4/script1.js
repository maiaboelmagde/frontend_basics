var string = prompt("Enter your string");
do{
    var chars = prompt("Enter special char, you wanna count");
    if(chars.length != 1){
        alert("Enter one char as special one");
    }
}while(chars.length != 1);
var caseSensitive = confirm("Press confirm if you wanna consider difference between letter cases, or cancel if not ...");

if(!caseSensitive){
    string = string.toUpperCase();
    chars = chars.toUpperCase();
}

var count = 0;
for(var i in string){
    if(string[i] == chars) 
        count++;
}

document.write("there's "+count+" of "+chars+" in your String ...");
