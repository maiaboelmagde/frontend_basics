function acceptTwoParameters(param1, param2) {
    if (arguments.length !== 2) {
        throw new Error("This function requires exactly 2 parameters.");
    }

    console.log("Parameter 1:", param1);
    console.log("Parameter 2:", param2);

    
}


try {
    acceptTwoParameters("value1", "value2"); 
    acceptTwoParameters("onlyOne");         
    acceptTwoParameters();                  
    acceptTwoParameters(1, 2, 3);           
} catch (error) {
    console.error(error.message);
}