// 1. Definimos la tupla para el estudiante
type Estudiante = [string, number, boolean, ...number[]]; 
// Definimos un tipo "Estudiante" que es una tupla con:
// - El nombre del estudiante (string)
// - La edad del estudiante (number)
// - Si el estudiante está activo o no (boolean)
// - Un número indefinido de calificaciones (array de números)


// 2. Creamos una lista de estudiantes
let estudiantes: Estudiante[] = []; 
// Inicializamos un arreglo de estudiantes, donde cada elemento será de tipo "Estudiante".


// 3. Función para añadir un nuevo estudiante
function agregarEstudiante(nombre: string, edad: number, activo: boolean, ...calificaciones: number[]) {
    // La función toma el nombre, edad, estado de actividad y un número indefinido de calificaciones como parámetros.
    
    const nuevoEstudiante: Estudiante = [nombre, edad, activo, ...calificaciones];
    // Creamos una nueva tupla de tipo "Estudiante" que contiene el nombre, edad, estado de actividad y las calificaciones pasadas como parámetros.

    estudiantes.push(nuevoEstudiante);
    // Añadimos este nuevo estudiante a la lista de estudiantes.

    console.log(`Estudiante ${nombre} añadido con éxito.`);
    // Imprimimos un mensaje indicando que el estudiante ha sido añadido correctamente.
}


// 4. Función para modificar la información de un estudiante
function modificarEstudiante(indice: number, nombre?: string, edad?: number, activo?: boolean) {
    // La función recibe el índice del estudiante a modificar y parámetros opcionales para modificar su nombre, edad y estado activo.

    if (estudiantes[indice]) {
        // Verificamos si existe un estudiante en el índice dado.

        if (nombre !== undefined) estudiantes[indice][0] = nombre;
        // Si el nombre fue proporcionado (no es undefined), se actualiza el nombre del estudiante en la posición 0 de la tupla.

        if (edad !== undefined) estudiantes[indice][1] = edad;
        // Si la edad fue proporcionada (no es undefined), se actualiza la edad en la posición 1 de la tupla.

        if (activo !== undefined) estudiantes[indice][2] = activo;
        // Si el estado activo fue proporcionado, se actualiza en la posición 2 de la tupla.

        console.log(`Estudiante en índice ${indice} modificado con éxito.`);
        // Imprimimos un mensaje indicando que la modificación fue exitosa.
    } else {
        console.log("Estudiante no encontrado.");
        // Si no hay un estudiante en el índice proporcionado, imprimimos un mensaje de error.
    }
}


// 5. Función para mostrar la lista de estudiantes
function mostrarEstudiantes() {
    console.log("Lista de Estudiantes:");
    // Imprimimos un encabezado indicando que se mostrará la lista de estudiantes.

    estudiantes.forEach((estudiante, indice) => {
        // Recorremos la lista de estudiantes con forEach, accediendo a cada estudiante y su índice.

        const [nombre, edad, activo, ...calificaciones] = estudiante;
        // Desestructuramos la tupla del estudiante para obtener sus elementos: nombre, edad, activo, y las calificaciones (resto de los elementos).

        console.log(`${indice}: Nombre: ${nombre}, Edad: ${edad}, Activo: ${activo ? "Sí" : "No"}, Calificaciones: ${calificaciones.join(", ")}`);
        // Imprimimos la información de cada estudiante en el formato: índice, nombre, edad, si está activo o no, y sus calificaciones.
    });
}


// 6. Función para obtener el promedio de calificaciones de un estudiante
function obtenerPromedioCalificaciones(indice: number): number | null {
    // La función toma un índice como parámetro y devuelve el promedio de calificaciones o null si no encuentra al estudiante.

    const estudiante = estudiantes[indice];
    // Buscamos el estudiante en el índice dado.

    if (estudiante) {
        // Si el estudiante existe:

        const calificaciones = estudiante.slice(3) as number[];
        // Usamos slice(3) para obtener las calificaciones a partir del tercer elemento de la tupla. Forzamos a que sea un array de números.
        
        const total = calificaciones.reduce((sum, calificacion) => sum + (typeof calificacion === 'number' ? calificacion : 0), 0);
        // Calculamos el total de las calificaciones usando reduce. Sumamos solo los elementos que sean números válidos.

        return total / calificaciones.length;
        // Devolvemos el promedio dividiendo el total de calificaciones entre la cantidad de calificaciones.
    }

    console.log("Estudiante no encontrado.");
    // Si no encontramos al estudiante, mostramos un mensaje de error.

    return null;
    // Devolvemos null en caso de que no se haya encontrado al estudiante.
}


// 7. Añadimos algunos estudiantes
agregarEstudiante("María", 22, true, 8, 9, 10);
// Añadimos a María, de 22 años, activa, con calificaciones 8, 9 y 10.

agregarEstudiante("Pedro", 21, false, 7, 6, 8);
// Añadimos a Pedro, de 21 años, no activo, con calificaciones 7, 6 y 8.


// 8. Mostramos la lista de estudiantes
mostrarEstudiantes();
// Mostramos la lista completa de estudiantes, con sus respectivas calificaciones.


// 9. Modificamos un estudiante
modificarEstudiante(1, "Pedro Pérez", 22, true);
// Modificamos el estudiante en el índice 1 (Pedro), actualizando su nombre a "Pedro Pérez", su edad a 22 años y su estado a activo (true).


// 10. Mostramos la lista de estudiantes nuevamente
mostrarEstudiantes();
// Volvemos a mostrar la lista para verificar los cambios.


// 11. Obtenemos el promedio de calificaciones de un estudiante
const promedioMaria = obtenerPromedioCalificaciones(0);
// Calculamos el promedio de las calificaciones de María (índice 0).

if (promedioMaria !== null) {
    console.log(`Promedio de calificaciones de María: ${promedioMaria}`);
    // Si el promedio no es null, mostramos el promedio de calificaciones de María.
}





