// --- Uso de Tupla ---
// Vamos a usar una tupla para representar coordenadas de posición (X, Y) para los vehículos
type Coordenadas = [number, number];

// Función que acepta coordenadas como tupla y muestra la posición
function mostrarPosicion(posicion: Coordenadas): void {
    console.log(`Posición actual: X = ${posicion[0]}, Y = ${posicion[1]}`);
}

// --- Uso de Type (Alias) ---
// Definimos un alias para el tipo de combustible
type Combustible = "Gasolina" | "Diesel" | "Eléctrico";

// Alias para el ID de un vehículo (puede ser string o número)
type VehiculoID = string | number;

// Alias para un objeto 'Motor' que contiene información del tipo de combustible
type Motor = {
    tipoCombustible: Combustible;   // Tipo de combustible
    encendido: boolean;             // Estado del motor (encendido o apagado)
};

// --- Uso de Interfaces ---
// Definimos una interfaz 'Vehiculo' que describe las propiedades comunes de cualquier vehículo
interface Vehiculo {
    id: VehiculoID;                 // Identificador único
    posicion: Coordenadas;          // Posición actual del vehículo (usando la tupla)
    mover(nuevaPosicion: Coordenadas): void; // Método para mover el vehículo
}

// Interfaz para los vehículos que tienen motor
interface VehiculoMotorizado extends Vehiculo {
    motor: Motor;                   // Información del motor
    arrancar(): void;               // Método para arrancar el motor
}

// Clase 'Coche' que implementa la interfaz VehiculoMotorizado
export class Coche implements VehiculoMotorizado {
    id: VehiculoID;
    posicion: Coordenadas;
    motor: Motor;

    constructor(id: VehiculoID, posicion: Coordenadas, tipoCombustible: Combustible) {
        this.id = id;
        this.posicion = posicion;
        this.motor = {
            tipoCombustible,
            encendido: false
        };
    }

    // Implementamos el método de 'mover'
    mover(nuevaPosicion: Coordenadas): void {
        this.posicion = nuevaPosicion;
        console.log(`El coche se ha movido a la nueva posición.`);
        mostrarPosicion(this.posicion);
    }

    // Implementamos el método de 'arrancar'
    arrancar(): void {
        this.motor.encendido = true;
        console.log(`El coche ha arrancado con ${this.motor.tipoCombustible}.`);
    }
}

// Clase 'Bicicleta' que implementa la interfaz Vehiculo (pero no tiene motor)
class Bicicleta implements Vehiculo {
    id: VehiculoID;
    posicion: Coordenadas;

    constructor(id: VehiculoID, posicion: Coordenadas) {
        this.id = id;
        this.posicion = posicion;
    }

    // Implementamos el método de 'mover'
    mover(nuevaPosicion: Coordenadas): void {
        this.posicion = nuevaPosicion;
        console.log(`La bicicleta se ha movido a la nueva posición.`);
        mostrarPosicion(this.posicion);
    }
}

// --- Pruebas ---
// Creamos una instancia de 'Coche' con ID 1, en la posición (0, 0) y tipo de combustible "Gasolina"
let miCoche = new Coche(1, [0, 0], "Gasolina");
miCoche.arrancar();              // Salida: El coche ha arrancado con Gasolina.
miCoche.mover([10, 20]);         // Salida: El coche se ha movido a la nueva posición. Posición actual: X = 10, Y = 20

// Creamos una instancia de 'Bicicleta' con ID "B001" y posición inicial (5, 5)
let miBicicleta = new Bicicleta("B001", [5, 5]);
miBicicleta.mover([15, 25]);     // Salida: La bicicleta se ha movido a la nueva posición. Posición actual: X = 15, Y = 25
