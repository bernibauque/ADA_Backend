// Definimos una clase abstracta 
export abstract class Vehiculo {
    // Constructor
    constructor(protected velocidad: number) {}

    // Metodo abstracto (debe ser implementado por las subclases)
    abstract acelerar(): void;

    // Metodo concreto que describe el vehiculo y muestra su velocidad actual
    describir(): void {
        console.log(`Este vehiculo va a ${this.velocidad} km/h`);
    }
}

// Definimos la clase Moto que extiende de la clase vehiculo
class Moto extends Vehiculo {
    // Implementamos el metodo acelerar 
    acelerar(): void {
        // Incrementamos la velocidad de la moto por 10 km/h
        this.velocidad += 10;
        console.log(`la moto acelera a ${this.velocidad} km/h`);
    }
}

// Creacion de una instancia de la clase moto con una velocidad inicial 20 km/h
const moto = new Moto(20);
// llamamos al metodo acelerar, que aumnetara la velocidad y mostrara el mensaje
moto.acelerar();
// llamamos al metodo describir que nos muestra la velocidad actual de la moto
moto.describir();