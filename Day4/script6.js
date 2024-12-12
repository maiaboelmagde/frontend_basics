function sortAsending(arr)
{
    arr.sort(function(a,b){return a-b;})
    document.write("Sorted array: " + arr.join(", "));
}
function sortDesending(arr)
{
    
    arr.sort(function(a,b){return b-a;})
    document.write("Sorted array: " + arr.join(", "));
}
var size=prompt("Array size:",0);
var arr=[];
let element;
for(var i=0;i<size;i++)
{
    element=prompt("Enter element "+i);
    while(isNaN(element))
    {
        alert("Enter valid value");
        element=prompt("Enter element "+i);
    }
    arr[i]=element;
}
do{
    var choice=prompt("Sorting :\n 1-Asending \n 2- Desending\n");
}while(choice != 1 && choice != 2);
if(choice==1)
sortAsending(arr);
else
sortDesending(arr);



