// Importamos Express, un framework de Node.js para crear aplicaciones web y APIs fácilmente.
const express = require("express");

// Importamos la función connectDB desde el archivo database.js para conectar con MongoDB.
const connectDB = require("./database");

// Importamos dotenv para poder leer las variables de entorno desde un archivo .env.
require("dotenv").config();

// Importamos las rutas de usuarios desde el archivo userRoutes.js dentro de la carpeta routes.
const userRoutes = require("./routes/userRoutes");

// Creamos una instancia de Express, que será nuestra aplicación web.
const app = express();

// Definimos el puerto en el que correrá el servidor. Si no hay una variable de entorno con el puerto, usará 3000 por defecto.
const PORT = process.env.PORT || 3000;

// Llamamos a la función connectDB() para conectar nuestra aplicación a la base de datos MongoDB.
connectDB();

// Middleware de Express para permitir que la aplicación procese datos en formato JSON en las solicitudes.
app.use(express.json());

// Definimos una ruta de prueba en la raíz ("/") que responde con un mensaje cuando un usuario accede a la API.
app.get("/", (req, res) => {
    res.send("API funcionando ✅");
});

// Montamos las rutas de usuarios en la ruta "/api/usuarios". 
// Esto significa que todas las rutas definidas en userRoutes.js estarán accesibles desde "/api/usuarios".
app.use("/api/usuarios", userRoutes);

// Iniciamos el servidor y hacemos que escuche en el puerto definido anteriormente. 
// Cuando el servidor arranque, imprimirá un mensaje en la consola con la URL donde está corriendo.
app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}`);
});



