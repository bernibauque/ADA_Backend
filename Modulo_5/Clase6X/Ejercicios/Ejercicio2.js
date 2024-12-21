const express = require("express");
const app = express();

app.use(express.json());

// Arreglo inicial de productos
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
];

// Endpoint GET para listar todos los productos
app.get("/products", (req, res) => {
  res.json(products);
});

// Endpoint POST para agregar un nuevo producto
app.post("/products", (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ message: "ID y Name son requeridos" });
  }

  products.push({ id, name });

  res.status(201).json({ message: "Producto agregado", product: { id, name } });
});

app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
