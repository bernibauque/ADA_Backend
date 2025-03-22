// Importa el módulo 'express' para crear un servidor web
const express = require("express");
// Importa el módulo 'morgan' para el registro de peticiones HTTP
const morgan = require("morgan");

// Crea una instancia de la aplicación Express
const app = express();

// Configura Morgan para registrar peticiones HTTP
app.use(morgan("combined")); // Usa el formato "combined" para los logs
// También puedes usar otros formatos como "dev", "short", "tiny", etc.

// Ruta GET para la raíz del servidor
app.get("/", (req, res) => {
    res.send("Bienvenido a la API");
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

