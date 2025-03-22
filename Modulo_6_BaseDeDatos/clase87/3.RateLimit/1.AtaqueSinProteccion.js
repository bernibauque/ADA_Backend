// Importa el módulo 'express' para crear un servidor web
const express = require("express");
// Crea una instancia de la aplicación Express
const app = express();

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Ruta POST para manejar el inicio de sesión
app.post("/login", (req, res) => {
    // Extrae el nombre de usuario y la contraseña del cuerpo de la solicitud
    const { usuario, password } = req.body;

    // Verifica si el usuario y la contraseña coinciden con valores hardcodeados
    if (usuario === "admin" && password === "1234") {
        // Si coinciden, devuelve un mensaje de acceso concedido
        return res.json({ mensaje: "Acceso concedido" });
    } else {
        // Si no coinciden, devuelve un error 401 (No autorizado)
        return res.status(401).json({ error: "Acceso denegado" });
    }
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
