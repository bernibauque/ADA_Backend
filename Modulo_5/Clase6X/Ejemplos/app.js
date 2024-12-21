// Importamos el módulo "express" para manejar solicitudes HTTP y crear la aplicación.
const express = require("express");

// Importamos el módulo "cors" para manejar políticas de CORS (Cross-Origin Resource Sharing).
// Esto permite o restringe el acceso de recursos de un dominio a otro.
const cors = require("cors");

// Creamos una instancia de la aplicación utilizando Express.
// Esta instancia nos permitirá configurar rutas, middlewares y manejar solicitudes.
const app = express();

// Importamos las rutas definidas en el archivo "routes".
// Este archivo normalmente contiene las rutas organizadas de la aplicación.
const routes = require("./routes");

// Habilitamos CORS para todas las rutas de la aplicación.
// El middleware "cors()" configura las cabeceras necesarias para permitir solicitudes de otros dominios.
app.use(cors());

// Middleware de Express para interpretar datos en formato JSON.
// Esto convierte automáticamente el cuerpo de las solicitudes entrantes (si están en JSON) en un objeto de JavaScript.
app.use(express.json());

// Configuramos el prefijo "/api" para todas las rutas definidas en el archivo "routes".
// Esto significa que cualquier ruta registrada en "routes" estará bajo "/api".
app.use("/api", routes);
