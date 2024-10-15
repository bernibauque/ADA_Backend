// Definición de una clase abstracta llamada Vehiculo
export abstract class Vehiculo {
    // Constructor que recibe una velocidad y la marca como protegida, accesible en subclases
    constructor(protected velocidad: number) {}
  
    // Método abstracto que debe ser implementado por las subclases
    abstract acelerar(): void;
  
    // Método concreto que describe el vehículo y muestra su velocidad actual
    describir(): void {
      console.log(`Este vehículo va a ${this.velocidad} km/h.`);
    }
  }
  
  // Definición de la clase Moto que extiende de la clase abstracta Vehiculo
  class Moto extends Vehiculo {
    // Implementación del método acelerar específico para Moto
    acelerar(): void {
      // Incrementa la velocidad de la moto en 10 km/h
      this.velocidad += 10;
      // Muestra un mensaje con la nueva velocidad
      console.log(`La moto acelera a ${this.velocidad} km/h.`);
    }
  }
  
  // Creación de una instancia de la clase Moto con una velocidad inicial de 20 km/h
  const moto = new Moto(20);
  // Llama al método acelerar, que aumentará la velocidad y mostrará el mensaje
  moto.acelerar();   // Output: La moto acelera a 30 km/h.
  // Llama al método describir, que mostrará la velocidad actual de la moto
  moto.describir();  // Output: Este vehículo va a 30 km/h.
  


  