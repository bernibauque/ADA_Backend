// Importar la librería express-rate-limit para limitar el número de solicitudes
const rateLimit = require('express-rate-limit');

// Importar la librería express para crear el servidor
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar el límite de solicitudes para la ruta de inicio de sesión
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // Ventana de tiempo: 15 minutos
    max: 5, // Número máximo de solicitudes permitidas en la ventana de tiempo
    message: "Demasiados intentos de inicio de sesión, intenta más tarde." // Mensaje de error cuando se supera el límite
});

// Definir la ruta POST /login con el límite de solicitudes aplicado
app.post('/login', loginLimiter, (req, res) => {
    // Responder con un estado 401 (No autorizado) y un mensaje de error
    res.status(401).send("Credenciales incorrectas");
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => console.log("Servidor en puerto 3000"));

