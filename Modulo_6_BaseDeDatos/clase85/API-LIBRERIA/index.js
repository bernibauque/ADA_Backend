// Importamos la librería express, que nos permite crear un servidor web.
const express = require("express");

// Importamos la función connectDB desde el archivo './database' para conectarnos a MongoDB.
const connectDB = require("./database");

// Importamos la librería dotenv para cargar variables de entorno desde un archivo .env.
const dotenv = require("dotenv");

// Cargamos las variables de entorno definidas en el archivo .env.
dotenv.config();

// Llamamos a la función connectDB para establecer la conexión con la base de datos MongoDB.
connectDB();

// Inicializamos la aplicación Express.
const app = express();

// Configuramos la aplicación para que pueda procesar solicitudes con formato JSON.
app.use(express.json()); // Middleware para permitir JSON en las solicitudes.

// Definimos las rutas de la API:
// - Las rutas relacionadas con libros se manejarán en el archivo './routes/libros'.
app.use("/api/libros", require("./routes/libros"));

// - Las rutas relacionadas con autores se manejarán en el archivo './routes/autores'.
app.use("/api/autores", require("./routes/autores"));

// Levantamos el servidor y lo hacemos escuchar en el puerto definido en la variable de entorno PORT.
app.listen(process.env.PORT, () => {
    // Mostramos un mensaje en la consola indicando que el servidor está corriendo y en qué URL.
    console.log(`🚀 Servidor corriendo en http://localhost:${process.env.PORT}`);
});