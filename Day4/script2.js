var realString;
do{
realString = prompt("Enter your string");
if((realString.length == 0)){
    alert("Empty String !!!!!!!!!!!!!");
}
}while(realString.length == 0);
var caseSensitive = confirm("Press confirm if you wanna consider difference between letter cases, or cancel if not ...");

var string = realString;
if(!caseSensitive){
    string = string.toUpperCase();
}

let flag = 1;
for(var i = 0 ; i<string.length/2 && flag==1;i++){
    if(string[i] != string[string.length-i-1]){
        flag = 0;
    }
}


    if(flag){
        document.write(realString+" is <b>palindrome</b>");
    }else{
        document.write(realString+" is <b>not palindrome</b>");
    }

    if(caseSensitive){
        document.write(" ,with consider difference between letter cases.");
    }else{
        document.write(" ,Ignoring letter cases.");
    }

