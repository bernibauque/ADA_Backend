// Importa la clase 'Empleado' desde el archivo 'empleado.ts'
import { Empleado } from './empleado';

// Crea un array de empleados, cada uno es una instancia de la clase 'Empleado'
const empleados: Empleado[] = [
    new Empleado("Luis", "Desarrollador", 5000),  // Crea un empleado llamado Luis con salario mensual de 5000
    new Empleado("Ana", "Diseñadora", 4500),      // Crea una empleada llamada Ana con salario mensual de 4500
    new Empleado("Carlos", "Gerente", 6000)       // Crea un empleado llamado Carlos con salario mensual de 6000
];

// Agregar habilidades a los empleados
// A Luis se le agregan dos habilidades: 'JavaScript' y 'TypeScript'
empleados[0].agregarHabilidad("JavaScript");
empleados[0].agregarHabilidad("TypeScript");

// A Ana se le agregan dos habilidades: 'Photoshop' y 'Illustrator'
empleados[1].agregarHabilidad("Photoshop");
empleados[1].agregarHabilidad("Illustrator");

// A Carlos se le agrega una habilidad: 'Gestión de proyectos'
empleados[2].agregarHabilidad("Gestión de proyectos");

// Función que muestra la información de empleados cuyo salario anual es mayor a 50,000
function mostrarEmpleadosSalarioAlto(empleados: Empleado[]): void {
    // Recorre el array de empleados
    empleados.forEach(empleado => {
        // Si el salario anual del empleado es mayor a 50,000, muestra su información
        if (empleado.obtenerSalarioAnual() > 50000) {
            empleado.mostrarInformacion();  // Llama al método 'mostrarInformacion' del empleado
        }
    });
}

// Llama a la función 'mostrarEmpleadosSalarioAlto' con el array de empleados
mostrarEmpleadosSalarioAlto(empleados);

