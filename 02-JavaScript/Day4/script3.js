var sentence;
function returnTheLargest(){
    sentence =prompt("Enter your sentence ...");
    let words = sentence.split(" ");
    let largest = "";
    for(let i in words){
        if(words[i].length > largest.length){
            largest = words[i];
        }
    }

    return largest;
}

var FinalResult = returnTheLargest();
document.write("The largest word in your sentence '"+sentence+"' is '"+FinalResult+"' .");