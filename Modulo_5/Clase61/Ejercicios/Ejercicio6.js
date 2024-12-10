// Importamos el módulo express para crear el servidor
const express = require("express");

// Inicializamos una aplicación de Express
const app = express();

// Middleware para permitir que el servidor interprete solicitudes con cuerpo JSON
app.use(express.json());

// Definimos un arreglo inicial que actuará como base de datos temporal para los productos
const products = [
  { id: 1, name: "Producto A" },
  { id: 2, name: "Producto B" },
];

// Importamos Zod para realizar validaciones
const { z } = require("zod");

// Creamos un esquema de Zod para validar los datos del producto
const productSchema = z
  .object({
    id: z.number(), // Campo `id` de tipo número
    name: z.string(), // Campo `name` de tipo string
  })
  .nonstrict(); // No requerimos todos los campos como obligatorios

// Configuramos un endpoint POST para agregar nuevos productos
app.post("/products", (req, res) => {
  // Intentamos validar los datos recibidos con Zod
  const result = productSchema.safeParse(req.body);

  // Si hay errores en la validación, respondemos con un error 400 y un mensaje
  if (!result.success) {
    return res.status(400).json({ message: result.error.issues });
  }

  // Si la validación es exitosa, agregamos el nuevo producto al arreglo
  const { id, name } = req.body;
  products.push({ id, name });

  // Respondemos con un código de estado 201 (Creado) y el producto recién agregado
  res.status(201).json({ message: "Producto agregado", product: { id, name } });
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
