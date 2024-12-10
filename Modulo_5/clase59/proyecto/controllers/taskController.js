const taskModel = require('../models/taskModel') // Importamos el modelo

// Funcion para manejar la solicitud de "Obtener todas las tareas"
const getTasks = (req, res) => {
    const tasks = taskModel.getAllTasks(); // llamamos al modelo para obtener las tareas
    res.json(tasks) // Envia las tareas como respuesta en formato json
}

// Funcion para manejar la solicitud de "Crear una nueva tarea"
const createTask = (req, res) => {
    // Creamos una tarea con un id unico
    const newTask = { id: Date.now(), ...req.body, complited: false }
    taskModel.addTask(newTask) // llamamos al modelo para agregar la tarea
    // Responde con la tarea creada
    res.status(201).json(newTask)
}

// Funcion para actualizar una tarea
const updateTask = (req, res) => {
    // Obtenemos el id de la tarea desde los parametros de la URL
    const { id } = req.params
    // Obtenemos los datos actualizados del cuerpo de la solicitud
    const updateTask = req.body
    // Llama al modelo para actualizar la tarea
    taskModel.updateTask(Number(id), updateTask)
    // Envia un mensaje de exito
    res.json({ message: "Tarea actualizada con exito" })
}

// Funcion para manejar la solicitud de "Eliminar una tarea"
const deleteTask = (req, res) => {
    // Obtenemos el id de la tarea desde los parametros de la URL
    const { id } = req.params
    // Llama al modelo para eliminar la tarea
    taskModel.deleteTask(Number(id))
    res.json({ message: "Tarea eliminada con exito" })
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}