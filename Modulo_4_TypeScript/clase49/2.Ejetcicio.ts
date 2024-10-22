// Gestión de Vehículos
// Se requiere implementar un sistema para gestionar diferentes tipos de vehículos 
// (coches, motocicletas, bicicletas). 
// Cada vehículo debe tener un identificador único, un tipo de combustible 
// (en caso de que lo use), y todos los vehículos deben poder moverse.
// Los vehículos motorizados como coches y motocicletas deben tener un método para arrancar.
// Las bicicletas solo necesitan poder moverse, ya que no usan combustible ni motor.
// Debes usar tuplas, alias (type) e interfaces para estructurar la solución.

type Coordenadas = [number, number];

// Funcion que acepta coordenadas como tupla y muestra la posicion
function mostrarPosicion(posicion: Coordenadas): void {
    console.log(`Posicion actual: X = ${posicion[0]}, Y = ${posicion[1]}`);
}

// Uso de type (Difinimos un alias para el combustuble)
type Combustible = "Gasolina" | "Diesel" | "Electrico";

// Alias par el ID de un vehiculo (string o number)
type vehiculoId = string | number;

// Alias para un objeto 'Motor' que contiene informacion del tipo de combustible
type Motor = {
    tipoCombustible: Combustible; 
    encendido: boolean;
};

// Uso de interfaces
// Definimos una interfaz vehiculo que describe las prop comunes de cualquier vehiculo
interface Vehiculo {
    id: vehiculoId; // Identificador unico
    posicion: Coordenadas; // Posicion actual del vehiculo (usando tupla)
    mover(nuevaPosicion: Coordenadas): void; // Metodo para mover el vehiculo
}

// Interfaz para vehiculos que tienen motor
interface VehiculoMotorizado extends Vehiculo {
    motor: Motor; // Informacion del motor
    arrancar(): void; // Metodo para arrancar el vehiculo
}

// Clase coche que implementa la interfaz vehiculoMotorizado
export class Coche implements VehiculoMotorizado {
    id: vehiculoId;
    posicion: Coordenadas;
    motor: Motor;

constructor(id: vehiculoId, posicion: Coordenadas, tipoCombustible: Combustible) {
    this.id = id;
    this.posicion = posicion;
    this.motor = {
        tipoCombustible,
        encendido: false
    };
}

mover(nuevaPosicion: Coordenadas): void {
    this.posicion = nuevaPosicion;
    console.log(`El coche se ha movido a la nueva posicion`);
    mostrarPosicion(this.posicion)
}

arrancar(): void {
    this.motor.encendido = true;
    console.log(`El coche ha arrancado con ${this.motor.tipoCombustible}`);
}


}
// Clase Bicicleta que implenta ela interfaz vehiculo 
class Bicicleta implements Vehiculo {
    id: vehiculoId;
    posicion: Coordenadas;

    constructor (id: vehiculoId, posicion: Coordenadas) {
        this.id = id;
        this.posicion = posicion;
    }

    // Implementamos el metodo mover
    mover(nuevaPosicion: Coordenadas): void {
        this.posicion = nuevaPosicion;
        console.log(`La bicicleta se ha movido a la nueva posicion`);
        mostrarPosicion(this.posicion)
    }
}

// creamos la instancia coche que id 1, posicion 0 y 0 y combustible gasolina
let miCoche = new Coche(1, [0,0], "Gasolina")
miCoche.arrancar();
miCoche.mover([10,20])    

// creamos la instancia bicilceta que id 002, posicion 5, 5 
let miBicicleta = new Bicicleta("002", [5, 5]);
miBicicleta.mover([15,25])



