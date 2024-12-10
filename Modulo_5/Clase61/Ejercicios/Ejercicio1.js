// Importamos el módulo express para crear el servidor
const express = require("express");

// Inicializamos una aplicación de Express
const app = express();

// Middleware para permitir que el servidor interprete solicitudes con cuerpo JSON
app.use(express.json());

// Creamos un arreglo inicial que actuará como una base de datos temporal para los usuarios
const users = [
  { id: 1, name: "Ana" }, // Usuario con ID 1 y nombre "Ana"
  { id: 2, name: "Luis" }, // Usuario con ID 2 y nombre "Luis"
];

// Configuramos un endpoint GET para obtener la lista de usuarios
app.get("/users", (req, res) => {
  // Cuando alguien hace una solicitud GET a "/users", respondemos con la lista completa
  res.json(users); // Enviamos el arreglo de usuarios como respuesta en formato JSON
});

// Configuramos un endpoint POST para agregar nuevos usuarios
app.post("/users", (req, res) => {
  // Extraemos los valores "id" y "name" del cuerpo de la solicitud (req.body)
  const { id, name } = req.body;

  // Validamos que ambos campos estén presentes en el cuerpo de la solicitud
  if (!id || !name) {
    // Si falta alguno, respondemos con un error 400 y un mensaje
    return res.status(400).json({ message: "ID y Name son requeridos" });
  }

  // Si los datos son válidos, añadimos el nuevo usuario al arreglo
  users.push({ id, name });

  // Respondemos con un código de estado 201 (Creado) y un mensaje de éxito
  res.status(201).json({ message: "Usuario agregado", user: { id, name } });
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  // Mostramos un mensaje en la consola cuando el servidor esté listo
  console.log("Servidor ejecutándose en http://localhost:3000");
});
