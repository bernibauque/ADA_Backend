const express = require("express"); // Importamos Express para manejar las solicitudes HTTP

const app = express(); // Creamos una aplicación de Express

// Middleware para autenticación
const authMiddleware = (req, res, next) => {
  // Obtenemos el token del encabezado 'Authorization'
  const token = req.headers.authorization;

  // Verificamos si no hay token
  if (!token) {
    // Respondemos con un código 403 (Prohibido) y un mensaje de error
    return res.status(403).json({ message: "No autorizado" });
  }

  // Si hay un token, continuamos con la siguiente función o middleware
  next();
};

// Rutas protegidas que usan el middleware de autenticación
app.get("/protected", authMiddleware, (req, res) => {
  // Respondemos con un mensaje indicando que el usuario tiene acceso
  res.status(200).json({ message: "Acceso autorizado" });
});

// Ruta pública que no requiere autenticación
app.get("/", (req, res) => {
  // Respondemos con un mensaje de bienvenida
  res.status(200).json({ message: "Bienvenido a la API pública" });
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
