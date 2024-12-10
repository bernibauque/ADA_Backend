const express = require('express')
const router = express.Router() // Creamos un enrutador de express
const taskController = require('../controllers/taskController') // Importamos el controlador

// Ruta para obtener todas las tareas (GET)
router.get('/tasks', taskController.getTasks)

// Ruta para crear una nueva tarea (POST)
router.post('/tasks', taskController.createTask)

// Ruta para actualizar una tarea (PUT)
router.put('/tasks/:id', taskController.updateTask)

// Ruta para eliminar una tarea (DELETE)
router.delete('/tasks/:id', taskController.deleteTask)

module.exports = router;