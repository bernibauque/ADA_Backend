export class Vehicle {
    speed: number;

    constructor(speed: number) {
        this.speed = speed; 
    }

    move() {
        console.log(`El vehiculo se mueve a ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    model: string;

    constructor(speed: number, model: string) {
        super(speed)
        this.model = model
    }

    horn() {
        console.log(`${this.model} esta tocando la bocina`);
    }
}

const myCar = new Car(120, 'Toyota')

myCar.move()
myCar.horn()