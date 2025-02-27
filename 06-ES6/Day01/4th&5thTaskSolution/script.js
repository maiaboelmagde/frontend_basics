let arr1 = [3, 5, 7, 9, 11];
let arr2 = [5, 7, 13, 15, 17];

let mergedArray = [...arr1, ...arr2];
let uniqueArray = [];
for (let i = 0; i < mergedArray.length; i++) {
    if (uniqueArray.indexOf(mergedArray[i]) === -1) {
        uniqueArray.push(mergedArray[i]);
    }
}
let sortedArray = uniqueArray.sort((a, b) => a - b);
console.log(sortedArray);


//---------------------------
console.log("The 5th Task Solution ...");
//------------------------------
let MyObj = {
    name : "Mai",
     age : "22",
    address : {
        city:"Tanta" ,
        street: "Street"
    },
    hobbies:["Reading", "Swimming"]
}

const { name, age, address: { city , country = "Egypt"} } = MyObj;

console.log(`${name} that is ${age} years old lives in ${city} , ${country}.`);


