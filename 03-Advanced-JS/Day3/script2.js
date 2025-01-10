var Vehicle = function(speed, color) {
    var _speed = speed;
    var _color = color;
    
    Object.defineProperty(this, "turnLeft", {
        value: function () {
            console.log("Turning left.");
        },
        writable: false,
        enumerable: false,
        configurable: false,
    });
    
    Object.defineProperty(this, "turnRight", {
        value: function () {
            console.log("Turning right.");
        },
        writable: false,
        enumerable: false,
        configurable: false,
    });
    
    Object.defineProperty(this, "start", {
        value: function () {
         console.log("Vehicle started.");
        return true;
        },
        writable: false,
        enumerable: false,
        configurable: false,
    });
    
    Object.defineProperty(this, "stop", {
        value: function () {
            console.log("Vehicle stopped.");
            return true;
        },
        writable: false,
        enumerable: false,
        configurable: false,
    });
    
    Object.defineProperty(this, "goBackward", {
        value: function (speed, accel) {
            console.log(`Going backward at speed ${speed} with acceleration ${accel}.`);
        },
        writable: false,
        enumerable: false,
        configurable: false,
    });
    
    Object.defineProperty(this, "goForward", {
        value: function (speed, accel) {
            console.log(`Going forward at speed ${speed} with acceleration ${accel}.`);
        },
        writable: false,
        enumerable: false,
        configurable: false,
    });
    
Object.defineProperty(this, "speed", {
    get: function () {
        return _speed;
    },
    set: function (value) {
        if (typeof value !== "number") {
            throw new TypeError("Speed must be a number.");
        }
        _speed = value;
    },
    enumerable: true,
    configurable: false,
    });
    
    Object.defineProperty(this, "color", {
    get: function () {
        return _color;
    },
    set: function (value) {
        if (typeof value !== "string") {
            throw new TypeError("Color must be a string.");
        }
        _color = value;
    },
    enumerable: true,
    configurable: false,
    });
}
    
Vehicle.prototype.toString = function () {
    return `Vehicle: speed=${this.speed}, color=${this.color}`;
};
    
Vehicle.prototype.valueOf = function () {
    return this.speed;
};



var MotorVehicle = function (speed, color, sizeOfEngine, licencePlate) {
    Vehicle.call(this, speed, color); 
    
    var _sizeOfEngine = sizeOfEngine;
    var _licencePlate = licencePlate;
    
    Object.defineProperty(this, "getSizeOfEngine", {
        value: function () {
            return _sizeOfEngine;
        },
        writable: false,
        enumerable: false,
        configurable: false,
    });
    
    Object.defineProperty(this, "getLicensePlate", {
        value: function () {
            return _licencePlate;
        },
        writable: false,
        enumerable: false,
        configurable: false,
    });
    
    Object.defineProperty(this, "sizeOfEngine", {
        get: function () {
            return _sizeOfEngine;
        },
        set: function (value) {
            if (typeof value !== "number") {
            throw new TypeError("Size of engine must be a number.");
            }
            _sizeOfEngine = value;
        },
        enumerable: true,
        configurable: false,
    });
    
    Object.defineProperty(this, "licencePlate", {
        get: function () {
            return _licencePlate;
        },
        set: function (value) {
            if (typeof value !== "string") {
            throw new TypeError("Licence plate must be a string.");
            }
            _licencePlate = value;
        },
        enumerable: true,
        configurable: false,
    });
}
    
MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;
    
MotorVehicle.prototype.toString = function () {
    return `MotorVehicle: speed=${this.speed}, color=${this.color}, sizeOfEngine=${this.sizeOfEngine}, licencePlate=${this.licencePlate}`;
};



var Bicycle = function(speed, color) {
    Vehicle.call(this, speed, color); 
    
    Object.defineProperty(this, "ringBell", {
        value: function () {
        console.log("Ring ring!");
        },
        writable: false,
        enumerable: false,
        configurable: false,
        });
    }
    
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;
    
Bicycle.prototype.toString = function () {
    return `Bicycle: speed=${this.speed}, color=${this.color}`;
};


function Car(speed, color, sizeOfEngine, licencePlate, numOfDoors, weight) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);
    
    var _numOfDoors = numOfDoors;
    var _weight = weight;
    
    Object.defineProperty(this, "switchOnAirCon", {
        value: function () {
        console.log("Air conditioning switched on.");
        },
        writable: false,
        enumerable: false,
        configurable: false,
    });
    
    Object.defineProperty(this, "getNumOfDoors", {
        value: function () {
        return _numOfDoors;
        },
        writable: false,
        enumerable: false,
        configurable: false,
    });
    
    Object.defineProperty(this, "numOfDoors", {
        get: function () {
            return _numOfDoors;
        },
        set: function (value) {
            if (typeof value !== "number") {
            throw new TypeError("Number of doors must be a number.");
            }
            _numOfDoors = value;
        },
        enumerable: true,
        configurable: false,
    });
    
    Object.defineProperty(this, "weight", {
        get: function () {
            return _weight;
        },
        set: function (value) {
            if (typeof value !== "number") {
            throw new TypeError("Weight must be a number.");
            }
            _weight = value;
        },
        enumerable: true,
        configurable: false,
        });
    }
    
Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;
    
Car.prototype.toString = function () {
    return `Car: speed=${this.speed}, color=${this.color}, sizeOfEngine=${this.sizeOfEngine}, licencePlate=${this.licencePlate}, numOfDoors=${this.numOfDoors}, weight=${this.weight}`;
};



function DumpTruck(speed, color, sizeOfEngine, licencePlate, loadCapacity) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate); // Call the parent constructor
    
    var _loadCapacity = loadCapacity;
    
    Object.defineProperty(this, "lowerLoad", {
        value: function () {
            console.log("Lowering load.");
        },
        writable: false,
        enumerable: false,
        configurable: false,
    });
    
    Object.defineProperty(this, "raiseLoad", {
        value: function () {
            console.log("Raising load.");
        },
        writable: false,
        enumerable: false,
        configurable: false,
    });
    
    Object.defineProperty(this, "loadCapacity", {
        get: function () {
            return _loadCapacity;
        },
        set: function (value) {
            if (typeof value !== "number") {
            throw new TypeError("Load capacity must be a number.");
            }
            _loadCapacity = value;
        },
        enumerable: true,
        configurable: false,
    });
}
    
DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;
    
DumpTruck.prototype.toString = function () {
    return `DumpTruck: speed=${this.speed}, color=${this.color}, sizeOfEngine=${this.sizeOfEngine}, licencePlate=${this.licencePlate}, loadCapacity=${this.loadCapacity}`;
};



var vehicle = new Vehicle(60, "red");
var motorVehicle = new MotorVehicle(80, "blue", 2.0, "ABC123");
var bicycle = new Bicycle(20, "green");
var car = new Car(100, "black", 1.8, "XYZ456", 4, 1500);
var dumpTruck = new DumpTruck(50, "yellow", 5.0, "DEF789", 10000);

vehicle.turnLeft(); 
motorVehicle.getSizeOfEngine(); 
bicycle.ringBell(); 
car.switchOnAirCon(); 
dumpTruck.lowerLoad(); 


console.log(vehicle.toString());
console.log(motorVehicle.toString());
console.log(bicycle.toString());
console.log(car.toString());
console.log(dumpTruck.toString());
