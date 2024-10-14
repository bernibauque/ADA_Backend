// Clase base: Vehicle
class Vehicle {
    speed: number;  // Propiedad que almacena la velocidad del vehículo

    // Constructor que inicializa la propiedad 'speed'
    constructor(speed: number) {
        this.speed = speed;  // Asigna el valor de velocidad al vehículo
    }

    // Método que imprime la velocidad del vehículo al moverse
    move() {
        console.log(`El vehículo se mueve a ${this.speed} km/h.`);  // Mensaje que indica la velocidad
    }
}

// Clase derivada: Car (Coche)
// La clase Car hereda de Vehicle usando 'extends'
class Car extends Vehicle {
    model: string;  // Propiedad que almacena el modelo del coche

    // Constructor de la subclase Car
    constructor(speed: number, model: string) {
        super(speed);  // Llama al constructor de Vehicle para inicializar la velocidad
        this.model = model;  // Inicializa la nueva propiedad 'model'
    }

    // Método que imprime un mensaje indicando que el coche está tocando la bocina
    honk() {
        console.log(`${this.model} está tocando la bocina.`);  // Mensaje específico para el modelo del coche
    }
}

// Crear una instancia de Car
const myCar = new Car(120, 'Toyota');  // Crea un objeto de tipo Car con velocidad 120 y modelo 'Toyota'

// Usar los métodos de la instancia
myCar.move();   // Llama al método move() de Vehicle: "El vehículo se mueve a 120 km/h."
myCar.honk();   // Llama al método honk() de Car: "Toyota está tocando la bocina."


