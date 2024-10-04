// Definición de la clase 'Empleado'
export class Empleado {
    // Atributos de la clase 'Empleado'
    nombre: string;             // Nombre del empleado
    cargo: string;              // Cargo que desempeña el empleado
    salarioMensual: number;     // Salario mensual del empleado
    habilidades: string[];      // Lista de habilidades del empleado

    // Constructor que inicializa los atributos nombre, cargo y salarioMensual
    // Además, inicializa el array habilidades como un array vacío
    constructor(nombre: string, cargo: string, salarioMensual: number) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salarioMensual = salarioMensual;
        this.habilidades = [];  // Inicializa habilidades como un array vacío
    }

    // Método que permite agregar una habilidad al array de habilidades del empleado
    agregarHabilidad(habilidad: string): void {
        this.habilidades.push(habilidad);  // Agrega la habilidad al array habilidades
    }

    // Método que calcula y retorna el salario anual del empleado
    obtenerSalarioAnual(): number {
        return this.salarioMensual * 12;  // Multiplica el salario mensual por 12 para obtener el anual
    }

    // Método para mostrar la información del empleado en la consola
    mostrarInformacion(): void {
        // Imprime el nombre, cargo y salario anual del empleado
        console.log(`Empleado: ${this.nombre}, Cargo: ${this.cargo}, Salario Anual: $${this.obtenerSalarioAnual()}`);
        // Imprime las habilidades del empleado separadas por comas
        console.log(`Habilidades: ${this.habilidades.join(", ")}`);
    }
}

