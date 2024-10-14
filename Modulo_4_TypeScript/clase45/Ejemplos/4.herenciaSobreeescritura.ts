// Clase base: Empleado
class Empleado {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;  // Inicializa el nombre del empleado
    }

    // Método que describe la actividad del empleado
    trabajar(): void {
        console.log(`${this.nombre} está trabajando.`);
    }
}

// Clase derivada: Programador
// La clase Programador hereda de Empleado usando 'extends'
class Programador extends Empleado {
    lenguaje: string;

    // Constructor de la subclase Programador
    constructor(nombre: string, lenguaje: string) {
        super(nombre);  // Llama al constructor de Empleado para inicializar el nombre
        this.lenguaje = lenguaje;  // Inicializa la nueva propiedad 'lenguaje'
    }

    // Sobrescritura del método trabajar
    trabajar(): void {
        // Llama al método de la clase base
        super.trabajar();  // Utiliza el método original de Empleado
        // Añade un comportamiento específico para Programador
        console.log(`${this.nombre} está escribiendo código en ${this.lenguaje}.`);
    }
}

// Crear una instancia de Programador
const programador1 = new Programador('Luis', 'TypeScript');

// Usar el método sobrescrito
programador1.trabajar();  // "Luis está trabajando."

// * super: En el constructor de la subclase Programador, super(nombre) se utiliza para invocar 
// el constructor de la clase base Empleado y inicializar el nombre.

// * Sobrescritura de método (trabajar()): En la subclase Programador, se sobrescribe el 
// método trabajar() de Empleado. Dentro del nuevo método, primero se llama al método original 
// de la clase base con super.trabajar(), y luego se añade un comportamiento adicional 
// específico de Programador.


