class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //Make the car beep.
    honk() {
        return "Beep.";
    }
    //Give a string definition of the vehicle.
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        // Add properties for super.
        super(make, model, year);
        // Properties specific to Car.
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        // Add properties for super.
        super(make, model, year);
        // Properties specific to Car.
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle) {
        if (vehicle instanceof Vehicle && this.vehicles.length < this.capacity) {
            this.vehicles.push(vehicle);
        }
        else if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        else {
            return "Sorry, we're full."
        }
        
    }
}