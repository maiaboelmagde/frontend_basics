let arr = [1, 2, 3, 4, 5, 3, 2];
let mySet = new Set(arr);
console.log(mySet);
console.log(`3 exists in the Set? ${mySet.has(3)}`);
mySet.delete(2);
console.log(mySet);

let newArray = Array.from(mySet);
console.log(newArray);

console.log("Set values:")
mySet.forEach((value) => {
    console.log(value);
});
  
console.log("Set values:")
for (let value of mySet) {
    console.log(value);
}

//----------------------------------------------------

let myMap = new Map();
myMap.set("Alice", 85);
myMap.set("Bob", 90);
myMap.set(	"Charlie", 78);

console.log(`Bob's score : ${myMap.get("Bob")}`);
myMap.set("Charlie",88);
console.log(`Charlie's score : ${myMap.get("Charlie")}`);
console.log(`"David" exists in the Map ?? ${myMap.has("David")}`);

console.log("Map values:")
myMap.forEach(value=>{
    console.log(value);
});

console.log("Map values:")
for (const element of myMap) {
    console.log(element);
}
//--------------------------------------------
let populationMap = new Map([
    ["USA", 331],
    ["India", 1380],
    ["China", 1441]
]);
console.log(populationMap);

let populationObj = Object.fromEntries(populationMap);
console.log(populationObj);

let newMap = new Map(Object.entries(populationObj));
console.log(newMap);

let countrySet = new Set(populationMap.keys());
console.log(countrySet);

let countryArray = Array.from(countrySet);
console.log(countryArray);

//-------------------------------------------
class Employee{
    constructor(id, salary, department){
        this.id = id;
        this.salary = salary;
        this.department = department;
    }

    getDetails(){
        return `employee with ${this.id} id , in department ${this.department} , and his salary = ${this.salary}`;
    }

}

class Manager extends Employee{ 
    constructor(id, salary, department,teamSize){
        super(id, salary, department);
        this.teamSize = teamSize;
    }

    getDetails(){
        return `${super.getDetails()} , teamSize = ${this.teamSize} `;
    }
}

let myManager = new Manager( 1, 5000,  "Engineering",  10);
console.log(myManager.getDetails());

myManager.id = 22;
console.log(myManager.getDetails());

//----------------------------------------------------

class Temperature{
    _celsius;
    
    constructor(c){
        if(c < -273.15)
            throw new Error("Temperature can't be below absolute zero (-273.15°C).");
        this._celsius = c;
    }
    get celsius(){
        return this._celsius;
    }

    set celsius(val){
        if(val < -273.15)
            throw new Error("Temperature can't be below absolute zero (-273.15°C).");
        this._celsius = val;
    }
}

let temp = new Temperature(25);
console.log(`Initial temperature: ${temp.celsius}°C`);

console.log(`Current temperature: ${temp.celsius}°C`);

temp.celsius = 30;
console.log(`Updated temperature: ${temp.celsius}°C`);

try {
    temp.celsius = -300;
} catch (error) {
    console.error(error.message);
}


//------------------------------------------

class MathUtils{
    static PI = 3.14;
    
    static calculateCircumference(radius){
        return 2 * MathUtils.PI * radius;
    }
}

console.log(` value of calculateCircumference (redius = 3), result = ${MathUtils.calculateCircumference(3)}`);
console.log(` value of calculateCircumference (redius = 2), result = ${MathUtils.calculateCircumference(2)}`);
