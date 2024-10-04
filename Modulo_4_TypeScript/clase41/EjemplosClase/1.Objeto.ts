// Definicion de una interfaz 'Estudiante'
interface Estudiante {
    nombre: string; // Propiedad 'nombre' del tipo string
    edad: number; // Propiedad 'edad' del tipo number
    materiaFavorita: string; // Propiedad 'materiaFavorita' del tipo string
    promedio: number; // Propiedad 'promedio' del tipo number

    saludar: () => void // Metodo saludar que no devuelve valor
    obtenerDetalles: () => string // Metodo que devuelve una cadena de texto con detalles del alumno
}

// Creacion de un objeto que cumple con la interfaz 'Estudiante'
export const estudiante1: Estudiante = {
    nombre: "Mariana", // Asignacion del atributo nombre
    edad: 21,
    materiaFavorita: 'Lengua',
    promedio: 9.5,

    // Implementacion del metodo 'saludar'
    saludar: function() {
        console.log(`Hola soy ${estudiante1.nombre}, tengo ${estudiante1.edad} anios y mi materia favorita es ${estudiante1.materiaFavorita}. Mi promedio es ${estudiante1.promedio}.`);
    },

    // Implementacion del metodo 'obtenerDetalles'
    obtenerDetalles: function() {
        return `Nombre: ${estudiante1.nombre}, Edad: ${estudiante1.edad}, Materia Favorita: ${estudiante1.materiaFavorita}, Promedio: ${estudiante1.promedio}`;
    }
};

// Uso del metodo saludar:
estudiante1.saludar(); 

//Uso del metodo 'ObtenerDetalles'
const detalles = estudiante1.obtenerDetalles();
console.log(detalles);
