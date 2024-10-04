// Definición de la interfaz 'Estudiante'
interface Estudiante {
    nombre: string;            // Propiedad 'nombre' de tipo string
    edad: number;             // Propiedad 'edad' de tipo number
    materiaFavorita: string;  // Propiedad 'materiaFavorita' de tipo string
    promedio: number;         // Propiedad 'promedio' de tipo number

    saludar: () => void;      // Método 'saludar' que no devuelve valor
    obtenerDetalles: () => string; // Método que devuelve una cadena con detalles del estudiante
}

// Creación de un objeto que cumple con la interfaz 'Estudiante'
export const estudiante1: Estudiante = {
    nombre: "Ana",                     // Asignación del atributo 'nombre'
    edad: 21,                          // Asignación del atributo 'edad'
    materiaFavorita: "Matemáticas",   // Asignación del atributo 'materiaFavorita'
    promedio: 9.5,                     // Asignación del atributo 'promedio'

    // Implementación del método 'saludar'
    saludar: function() {
        console.log(`Hola, soy ${estudiante1.nombre}, tengo ${estudiante1.edad} 
            años y mi materia favorita es ${estudiante1.materiaFavorita}.`);
    },

    // Implementación del método 'obtenerDetalles'
    obtenerDetalles: function() {
        return `Nombre: ${estudiante1.nombre}, Edad: ${estudiante1.edad}, 
        Materia Favorita: ${estudiante1.materiaFavorita}, Promedio: ${estudiante1.promedio}.`;
    }
};

// Uso del método 'saludar'
estudiante1.saludar(); // Imprime: Hola, soy Ana, tengo 21 años y mi materia favorita es Matemáticas.

// Uso del método 'obtenerDetalles'
const detalles = estudiante1.obtenerDetalles();
console.log(detalles); // Imprime: Nombre: Ana, Edad: 21, Materia Favorita: Matemáticas, Promedio: 9.5.




