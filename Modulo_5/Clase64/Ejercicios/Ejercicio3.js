// Importamos el módulo express para crear el servidor
const express = require("express");

// Inicializamos una aplicación de Express
const app = express();

// Middleware para permitir que el servidor interprete solicitudes con cuerpo JSON
app.use(express.json());

// Creamos un arreglo temporal para almacenar usuarios
const users = [
  { id: 1, name: "Usuario A" },
  { id: 2, name: "Usuario B" },
];

// Configuramos un endpoint PATCH para actualizar el nombre de un usuario
app.patch("/users/:id", (req, res) => {
  const { id } = req.params; // Obtenemos el ID del usuario desde la ruta
  const { name } = req.body; // Obtenemos el nuevo nombre del usuario desde el cuerpo de la solicitud

  // Buscamos el usuario por su ID
  const user = users.find((user) => user.id === parseInt(id));

  // Si el usuario no existe, respondemos con un error 404
  if (!user) return res.status(404).send("Usuario no encontrado");

  // Si existe, actualizamos el nombre
  user.name = name;

  // Respondemos con el usuario actualizado
  res.json(user);
});

// Configuramos un endpoint DELETE para eliminar un usuario por su ID
app.delete("/users/:id", (req, res) => {
  const { id } = req.params; // Obtenemos el ID del usuario desde la ruta

  // Encontramos el índice del usuario a eliminar
  const index = users.findIndex((user) => user.id === parseInt(id));

  // Si el usuario no se encuentra, respondemos con un error 404
  if (index === -1) return res.status(404).send("Usuario no encontrado");

  // Eliminamos el usuario del arreglo
  users.splice(index, 1);

  // Respondemos con un mensaje de éxito
  res.send("Usuario eliminado");
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
