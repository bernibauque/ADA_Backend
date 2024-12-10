const express = require('express'); // Importamos Express
const app = express(); // Creamos una instancia de Express
const taskRoutes = require('./routes/taskRoutes'); // Importamos las rutas de tareas

// Middleware para manejar datos en formato JSON en las solicitudes
app.use(express.json());

// Montamos las rutas bajo el prefijo "/api"
app.use('/api', taskRoutes);

// Iniciamos el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/api/tasks`);
    // Mensaje cuando el servidor está listo
});



