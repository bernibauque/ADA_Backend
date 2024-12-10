const express = require('express');
const router = express.Router(); // Creamos un enrutador de Express
const taskController = require('../controllers/taskController'); // Importamos el controlador

// Ruta para obtener todas las tareas (GET)
router.get('/tasks', taskController.getTasks);

// Ruta para crear una nueva tarea (POST)
router.post('/tasks', taskController.createTask);

// Ruta para actualizar una tarea existente (PUT)
router.put('/tasks/:id', taskController.updateTask); // ":id" indica un parámetro dinámico en la URL

// Ruta para eliminar una tarea (DELETE)
router.delete('/tasks/:id', taskController.deleteTask);

// Exportamos las rutas para que puedan ser usadas en el servidor principal
module.exports = router;
