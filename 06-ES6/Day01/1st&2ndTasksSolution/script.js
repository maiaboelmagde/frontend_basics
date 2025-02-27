let arr = [1, 2, 7, 99, 4, 3, 2, 60];

let arr2 = [...arr].sort((a,b)=>a-b);
console.log(`Ascending : [ ${arr2.join(", ")} ]`);

let arr3 = [...arr].sort((a,b)=>b-a);
console.log(`Descending : [ ${arr3.join(", ")} ]`);


//-----------------------------------------

let arr4 = [...arr].filter((a,b)=> a>50);
console.log(`Larger 50 : [ ${arr4.join(", ")} ]`);

//-------------------------
let maxNum = Math.max(...arr);
let minNum = Math.min(...arr);

console.log(`Max Number is ${maxNum}, and Min number is ${minNum}`);

//----------------------------------
console.log("The Second Question .........");
//-------------------------
function Operation(operation, ...numbers){
    if(operation == "sum"){
        return{
            operation : "sum",
            inputNumbers : numbers,
            result: numbers.reduce((a, b)=>a + b, 0)
        };
    }else if(operation == "subtract"){

        return{
            operation : "subtract",
            inputNumbers : numbers,
            result:  numbers.reduce((a, b)=>a - b, 0)
        };
        
    }else if(operation == "multiply"){
        return{
            operation : "multiply",
            inputNumbers : numbers,
            result:  numbers.reduce((a, b)=>a * b, 1)
        };
    }else if(operation == "divide"){
        return{
            operation : "divide",
            inputNumbers : numbers,
            result:  numbers.reduce((a, b)=>a / b, 1)
        };    
    }else{
        return {
            error : "Invalid operation !!!!!"
        }
    }
}

const result = Operation("sum", 3, 1, 6, 3);
console.log(`Result of ${result.operation} operation for ${result.inputNumbers.join(", ")} is ${result.result}.`);

//---------------------------------




