const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(express.json());

// Middleware de rate limiting
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // Máximo 5 intentos
    message: "Demasiados intentos de inicio de sesión. Inténtalo más tarde.",
});

app.post("/login", loginLimiter, (req, res) => {
    const { usuario, password } = req.body;

    if (usuario === "admin" && password === "1234") {
        return res.json({ mensaje: "Acceso concedido" });
    } else {
        return res.status(401).json({ error: "Acceso denegado" });
    }
});

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
