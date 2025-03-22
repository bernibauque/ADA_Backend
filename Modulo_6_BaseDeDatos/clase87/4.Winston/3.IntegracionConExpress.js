// Importa el módulo 'express' para crear un servidor web
const express = require("express");
// Crea una instancia de la aplicación Express
const app = express();

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Ruta GET para la raíz del servidor
app.get("/", (req, res) => {
    res.send("Bienvenido a la API");
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    // Registra el error usando el logger (pero falta definir `logger`)
    logger.error(`Error: ${err.message}`);
    // Devuelve una respuesta de error 500 (Error interno del servidor)
    res.status(500).json({ error: "Error interno del servidor" });
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => logger.info("Servidor corriendo en el puerto 3000"));

