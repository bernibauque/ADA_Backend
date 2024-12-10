const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Permite solicitudes desde cualquier origen
app.use(express.json());

// Endpoint GET para datos públicos
app.get("/data", (req, res) => {
  res.json({ data: "Esta es información pública" });
});

app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
