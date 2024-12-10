const taskModel = require('../models/taskModel'); // Importamos el modelo

// Función para manejar la solicitud de "Obtener todas las tareas"
const getTasks = (req, res) => {
    const tasks = taskModel.getAllTasks(); // Llama al modelo para obtener las tareas
    res.json(tasks); // Envía las tareas como respuesta en formato JSON
};

// Función para manejar la solicitud de "Crear una nueva tarea"
const createTask = (req, res) => {
    const newTask = { id: Date.now(), ...req.body, completed: false }; // Creamos una nueva tarea con un ID único
    taskModel.addTask(newTask); // Llama al modelo para agregar la tarea
    res.status(201).json(newTask); // Responde con la nueva tarea creada
};

// Función para manejar la solicitud de "Actualizar una tarea existente"
const updateTask = (req, res) => {
    const { id } = req.params; // Obtenemos el ID de la tarea desde los parámetros de la URL
    const updatedTask = req.body; // Obtenemos los datos actualizados del cuerpo de la solicitud
    taskModel.updateTask(Number(id), updatedTask); // Llama al modelo para actualizar la tarea
    res.json({ message: "Tarea actualizada con éxito." }); // Envía un mensaje de éxito
};

// Función para manejar la solicitud de "Eliminar una tarea"
const deleteTask = (req, res) => {
    const { id } = req.params; // Obtenemos el ID de la tarea desde los parámetros de la URL
    taskModel.deleteTask(Number(id)); // Llama al modelo para eliminar la tarea
    res.json({ message: "Tarea eliminada con éxito." }); // Envía un mensaje de éxito
};

// Exportamos las funciones del controlador para que puedan ser usadas en las rutas
module.exports = { getTasks, createTask, updateTask, deleteTask };
