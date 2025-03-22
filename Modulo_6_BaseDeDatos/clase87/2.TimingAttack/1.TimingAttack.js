const express = require('express');
const bcrypt = require('bcrypt'); // Importa bcrypt para hashear contraseñas
const app = express();

// ❌ Nunca almacenes contraseñas en texto plano. Esto es solo para el ejemplo.
const storedPasswordHash = bcrypt.hashSync("secreta123", 10); // Hashea la contraseña

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Ruta POST para manejar el inicio de sesión
app.post("/login", async (req, res) => {
    try {
        // Extrae la contraseña del cuerpo de la solicitud
        const { password } = req.body;

        // Valida que la contraseña esté presente
        if (!password) {
            return res.status(400).json({ error: "La contraseña es requerida" });
        }

        // Compara la contraseña proporcionada con la almacenada (hasheada)
        const esValida = await bcrypt.compare(password, storedPasswordHash);

        if (esValida) {
            // Si coinciden, devuelve un mensaje de acceso concedido
            return res.json({ mensaje: "Acceso concedido" });
        } else {
            // Si no coinciden, devuelve un error 401 (No autorizado)
            return res.status(401).json({ error: "Acceso denegado" });
        }
    } catch (error) {
        // Manejo de errores inesperados
        console.error("Error en el inicio de sesión:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));