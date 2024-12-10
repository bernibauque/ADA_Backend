// Importamos express para crear el servidor.
const express = require("express");

// Creamos una instancia de la aplicación express.
const app = express();

// Importamos el archivo de rutas de usuarios que hemos creado previamente.
const userRoutes = require("./userRoutes");

// Usamos middleware para parsear cuerpos de solicitudes JSON.
app.use(express.json());

// Usamos el router de usuarios y lo conectamos a la ruta base '/api'.
app.use("/api", userRoutes);

// Configuramos el servidor para que escuche en el puerto 3000.
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
