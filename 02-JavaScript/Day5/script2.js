function dispVal(obj, key) {
    
    if (!obj || typeof obj !== "object" || !key || !obj.hasOwnProperty(key)) {
        return "Invalid input or key not found.";
    }

    const value = obj[key];

    return key === "age" ? value+"years old" : value;
}


const obj = { nm: "ali", age: 10 };
document.write(dispVal(obj, "age")+"<br>");
document.write(dispVal(obj, "nm"));
