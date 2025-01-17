function addNumbers(...numbers) {
    if (numbers.length === 0) {
        throw new Error("The function requires at least one number as input.");
    }

    var sum =0;
    for (let num in numbers) {
        if (typeof numbers[num] !== "number") {
            throw new Error("All parameters must be of type 'number'.");
        }else{
            sum+=numbers[num];
        }
    }

    return sum ;
}


try {
    console.log(addNumbers(1, 2, 3, 4));  
    console.log(addNumbers(5));
    console.log(addNumbers());
    console.log(addNumbers(1, "two", 3));
} catch (error) {
    console.error(error.message);
}
