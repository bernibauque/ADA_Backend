const express = require('express');
const app = express();

const usuarios = [
    { id: 1, nombre: "Admin", rol: "admin" },
    { id: 2, nombre: "Usuario1", rol: "user" }
];

// Middleware de autenticación simple
function autenticar(req, res, next) {
    const userId = req.headers['user-id'];
    req.user = usuarios.find(u => u.id == userId);
    if (!req.user) return res.status(401).json({ error: "No autenticado" });
    next();
}

// Ruta con control de acceso ROTO
app.get('/admin', autenticar, (req, res) => {
    res.json({ mensaje: "Bienvenido al panel de administración" });
});

// Solución: verificar el rol del usuario
app.get('/admin-seguro', autenticar, (req, res) => {
    if (req.user.rol !== "admin") {
        return res.status(403).json({ error: "Acceso denegado" });
    }
    res.json({ mensaje: "Bienvenido al panel de administración" });
});

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
