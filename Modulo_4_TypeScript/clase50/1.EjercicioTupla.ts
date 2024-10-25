// Ejercicio: Gestión de Estudiantes
// Consigna: Crea un sistema de gestión de estudiantes que permita realizar 
// las siguientes tareas:
// Añadir un nuevo estudiante.
// Modificar la información de un estudiante existente.
// Mostrar la lista de estudiantes con sus detalles.
// Obtener el promedio de las calificaciones de un estudiante.
// Destructurar la información de un estudiante.
// Especificaciones:
// Cada estudiante debe tener un nombre, edad, estado activo, y una lista 
// de calificaciones.
// Utiliza tuplas para almacenar la información del estudiante y sus calificaciones.
// Implementa funciones para realizar las tareas mencionadas.

// 1. Definimos la tupla para el estudiante
export type Estudiante = [string, number, boolean, ...number[]]

// 2. creamos una lista de estudiantes
let estudiantes: Estudiante[] = []

// 3. Funcion para anadir nuevo estudiante
function agregarEstudiante(nombre: string, edad:number, activo: boolean, ...calificaciones: number[]) {
    const nuevoEstudiante: Estudiante = [nombre, edad, activo, ...calificaciones]
    estudiantes.push(nuevoEstudiante)
    console.log(`Estudiante: ${nombre} agregado con exito!`);
}

// 4. Funcion para modificar estudiante
function modificarEstudiante(indice: number, nombre?: string, edad?: number, activo?: boolean) {
    if (estudiantes[indice]) {
        if(nombre !== undefined) estudiantes[indice][0] = nombre
        if(edad !== undefined) estudiantes[indice][1] = edad
        if(activo !== undefined) estudiantes[indice][2] = activo
        console.log(`Estudiante en indice ${indice} modificado con exito!`);
    } else {
        console.log(`Estudiante no encontrado`);
    }
}

// 5. Funcion para mostrar la lista de estudiantes
function mostrarEstudiantes() {
    console.log("Lista de estudiantes: ");
    estudiantes.forEach((estudiante, indice) => {
        const [nombre, edad, activo, ...calificaciones] = estudiante
        console.log(`${indice}, Nombre: ${nombre}, Edad: ${edad}, Activo: ${activo? "Si" :"No"}, Calificaciones: ${calificaciones.join(" ,")}`);
    })
}

// 6.Funcion para obtener el promedio de calificaciones de estudiantes
function obtenerPromedio(indice: number): number | null {
    const estudiante = estudiantes[indice]
    if (estudiante) {
        const calificaciones = estudiante.slice(3) as number[]
        const total = calificaciones.reduce((sum, calificaciones) => sum + (typeof calificaciones === 'number' ? calificaciones : 0), 0)
        return total / calificaciones.length
    }
    console.log("Estudiante no encontrado");
    return null
}

// 7. Uso
agregarEstudiante("Pau", 24, true, 8,9, 10)
agregarEstudiante("Cami", 21, false, 7, 6, 5)
mostrarEstudiantes()
modificarEstudiante(1, "Sofi", 22, true)
mostrarEstudiantes()

const promedio = obtenerPromedio(0)
if(promedio !== null) {
    console.log(`Pormedio de calificaciones: ${promedio}`);
    
}