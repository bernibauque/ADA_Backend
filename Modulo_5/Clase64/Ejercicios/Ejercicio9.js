// Importamos el módulo express para crear el servidor
const express = require("express");

// Inicializamos una aplicación de Express
const app = express();

// Middleware para permitir que el servidor interprete solicitudes con cuerpo JSON
app.use(express.json());

// Configuración de CORS para un dominio específico
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000", // Permitimos solicitudes solo desde este dominio
};

app.use(cors(corsOptions)); // Aplicamos las opciones de CORS a la aplicación

// Creamos un arreglo temporal para simular una base de datos
const users = [
  { id: 1, name: "Usuario A" },
  { id: 2, name: "Usuario B" },
];

// Configuramos un endpoint GET para obtener la lista de usuarios
app.get("/users", (req, res) => {
  res.json(users); // Respondemos con la lista de usuarios en formato JSON
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});

// const corsOptions = { origin: "http://localhost:3000" };:

// Configuramos las opciones de CORS para permitir solicitudes solo desde http://localhost:3000.
// Esto asegura que solo dominios específicos pueden interactuar con el servidor.

// app.use(cors(corsOptions));:

// Aplicamos las opciones de configuración CORS a la aplicación.
// Esto controla desde dónde se permiten las solicitudes HTTP al servidor.
