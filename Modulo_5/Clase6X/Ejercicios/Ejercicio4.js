// Importamos el módulo express para crear el servidor
const express = require("express");

// Inicializamos una aplicación de Express
const app = express();

// Middleware para permitir que el servidor interprete solicitudes con cuerpo JSON
app.use(express.json());

// Creamos un arreglo temporal para almacenar productos
const products = [
  { id: 1, name: "Producto A" },
  { id: 2, name: "Producto B" },
];

// Configuramos un endpoint PATCH para actualizar el nombre de un producto
app.patch("/products/:id", (req, res) => {
  const { id } = req.params; // Obtenemos el ID del producto desde la ruta
  const { name } = req.body; // Obtenemos el nuevo nombre del producto desde el cuerpo de la solicitud

  // Buscamos el producto por su ID
  const product = products.find((product) => product.id === parseInt(id));

  // Si el producto no existe, respondemos con un error 404
  if (!product) return res.status(404).send("Producto no encontrado");

  // Si existe, actualizamos el nombre
  product.name = name;

  // Respondemos con el producto actualizado
  res.json(product);
});

// Configuramos un endpoint DELETE para eliminar un producto por su ID
app.delete("/products/:id", (req, res) => {
  const { id } = req.params; // Obtenemos el ID del producto desde la ruta

  // Encontramos el índice del producto a eliminar
  const index = products.findIndex((product) => product.id === parseInt(id));

  // Si el producto no se encuentra, respondemos con un error 404
  if (index === -1) return res.status(404).send("Producto no encontrado");

  // Eliminamos el producto del arreglo
  products.splice(index, 1);

  // Respondemos con un mensaje de éxito
  res.send("Producto eliminado");
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
