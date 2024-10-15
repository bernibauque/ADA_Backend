// Sistema de gestion de transporte 
// Queremos definir vehiculos que se mueven de diferentes formas

// Usaremos la clase abstracta vehiculo para definir comportamiento general de todos los vehiculos
// crearemos la interfaz electrico para los vehiculos que sean electricos

//Definimos la interfaz
interface Electrico {
    cargaBateria(): void;
}

// clase abstracta para todos los vehiculos
export abstract class Vehiculo {
    constructor(protected tipo: string) {}

    abstract moverse(): void;

    describir(): void {
        console.log(`Este es un vehiculo tipo ${this.tipo}`);
    }
}

// Clase concreta que extiende la clase abstracta e implemnta la interfaz
class AutoElectrico extends Vehiculo implements Electrico {
    constructor() {
        super("Auto electrico");
    }

    moverse(): void {
        console.log('El auto electrico se mueve silenciosamente');
    }

    cargaBateria(): void {
        console.log('Cargando la bateria del auto...');
    }
}

const tesla = new AutoElectrico();
tesla.describir();
tesla.moverse();
tesla.cargaBateria();