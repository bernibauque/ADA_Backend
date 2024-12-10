const express = require("express");
const { z } = require("zod"); // Importamos Zod para validación

const app = express();
app.use(express.json()); // Middleware para interpretar JSON

// Definimos un esquema con Zod para validar datos de tareas
const taskSchema = z.object({
  title: z.string(), // Campo `title` obligatorio de tipo string
  completed: z.boolean().default(false), // Campo `completed` opcional, por defecto es false
});

// Creamos un arreglo temporal para almacenar las tareas
const tasks = [
  { title: "Aprender Node.js", completed: false },
  { title: "Practicar Zod", completed: true },
];

// Configuramos un endpoint POST para agregar nuevas tareas
app.post("/tasks", (req, res) => {
  try {
    // Validamos los datos de la tarea con el esquema
    const newTask = taskSchema.parse(req.body);

    // Si la validación es exitosa, agregamos la nueva tarea al arreglo
    tasks.push(newTask);

    // Respondemos con un código 201 (Creado) y los datos de la nueva tarea
    res.status(201).json({ message: "Tarea agregada", task: newTask });
  } catch (error) {
    // Si la validación falla, respondemos con un error 400 y el mensaje del problema
    res.status(400).json({ message: error.errors[0].message });
  }
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
