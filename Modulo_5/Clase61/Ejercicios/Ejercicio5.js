const express = require("express");
const { z } = require("zod"); // Importamos Zod para validación

const app = express();
app.use(express.json()); // Middleware para permitir interpretar JSON

// Definimos un esquema de Zod para validar datos de usuarios
const userSchema = z.object({
  id: z.number(), // Campo `id` de tipo número
  name: z.string(), // Campo `name` de tipo string
});

// Creación de un arreglo temporal para almacenar usuarios
const users = [
  { id: 1, name: "Usuario A" },
  { id: 2, name: "Usuario B" },
];

// Configuramos un endpoint POST para agregar nuevos usuarios
app.post("/users", (req, res) => {
  try {
    // Validamos los datos recibidos con Zod
    const newUser = userSchema.parse(req.body);

    // Si la validación es exitosa, agregamos el nuevo usuario a la base de datos temporal
    users.push(newUser);

    // Respondemos con un código de estado 201 (Creado) y el usuario recién agregado
    res.status(201).json({ message: "Usuario agregado", user: newUser });
  } catch (error) {
    // Si la validación falla, respondemos con un error 400 y el mensaje del problema
    res.status(400).json({ message: error.errors[0].message });
  }
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
