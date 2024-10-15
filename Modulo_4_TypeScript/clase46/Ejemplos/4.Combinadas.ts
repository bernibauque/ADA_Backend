// Ejemplo Práctico Combinando Clases Abstractas e Interfaces
// Imaginemos un sistema de gestión de transporte donde queremos definir vehículos que se mueven de diferentes maneras.

// Usaremos una clase abstracta Vehiculo para definir el comportamiento general de todos los vehículos.
// Crearemos una interfaz Electrico para los vehículos que pueden cargarse eléctricamente

// Interfaz para vehículos eléctricos
interface Electrico {
    cargarBateria(): void;
  }
  
  // Clase abstracta para todos los vehículos
  export abstract class Vehiculo {
    constructor(protected tipo: string) {}
  
    abstract moverse(): void;
  
    describir(): void {
      console.log(`Este es un vehículo tipo: ${this.tipo}`);
    }
  }
  
  // Clase concreta que extiende la clase abstracta e implementa la interfaz
  class AutoElectrico extends Vehiculo implements Electrico {
    constructor() {
      super("Auto Eléctrico");
    }
  
    moverse(): void {
      console.log("El auto eléctrico se mueve silenciosamente.");
    }
  
    cargarBateria(): void {
      console.log("Cargando la batería del auto...");
    }
  }
  
  const tesla = new AutoElectrico();
  tesla.describir();         // Output: Este es un vehículo tipo: Auto Eléctrico
  tesla.moverse();            // Output: El auto eléctrico se mueve silenciosamente.
  tesla.cargarBateria();      // Output: Cargando la batería del auto...
  


  