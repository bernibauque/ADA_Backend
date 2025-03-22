const express = require("express"); // Importa el módulo express
const morgan = require("morgan"); // Importa el módulo morgan
const fs = require("fs"); // Importa el módulo fs para trabajar con archivos
const path = require("path"); // Importa el módulo path para manejar rutas

// Crea una instancia de la aplicación Express
const app = express();

// Crear un stream de escritura para el archivo access.log
const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });

// Configurar Morgan para:
// 1. Mostrar logs en la terminal (formato "dev")
// 2. Guardar logs en el archivo access.log (formato "combined")
app.use(morgan("dev")); // Muestra logs en la terminal
app.use(morgan("combined", { stream: accessLogStream })); // Guarda logs en el archivo

// Ruta de ejemplo
app.get("/", (req, res) => {
    res.send("Bienvenido a la API");
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});