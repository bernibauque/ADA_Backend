// Importamos el módulo uuid para generar identificadores únicos
const { v4: uuidv4 } = require('uuid');

// Lista de tareas inicial vacía
let tareas = [];

// Función para añadir una nueva tarea
const agregarTarea = (titulo) => {
    // Creamos una nueva tarea con un ID único y un título
    const tarea = { id: uuidv4(), titulo };
    // Añadimos la tarea a la lista de tareas
    tareas.push(tarea);
    // Devolvemos la tarea añadida
    return tarea;
};

// Función para listar todas las tareas
const listarTareas = () => {
    // Devolvemos la lista de tareas
    return tareas;
};

// Exportamos las funciones del modelo
module.exports = {
    agregarTarea,
    listarTareas
};
