// Importa el módulo 'crypto' para usar funciones criptográficas
const crypto = require('crypto');

// Función para comparar dos cadenas de manera segura
function compararSeguro(input, almacenado) {
    // Convierte las cadenas de entrada en buffers (representación binaria)
    const buffer1 = Buffer.from(input);
    const buffer2 = Buffer.from(almacenado);

    // Si los buffers tienen longitudes diferentes, las cadenas no pueden ser iguales
    if (buffer1.length !== buffer2.length) {
        return false;
    }

    // Compara los buffers de manera segura (resistente a ataques de tiempo)
    return crypto.timingSafeEqual(buffer1, buffer2);
}

// Ruta POST para manejar el inicio de sesión de manera segura
app.post("/login-seguro", (req, res) => {
    // Extrae la contraseña del cuerpo de la solicitud
    const { password } = req.body;

    // Compara la contraseña proporcionada con la almacenada de manera segura
    if (compararSeguro(password, storedPassword)) {
        // Si coinciden, devuelve un mensaje de acceso concedido
        return res.json({ mensaje: "Acceso concedido" });
    } else {
        // Si no coinciden, devuelve un error 401 (No autorizado)
        return res.status(401).json({ error: "Acceso denegado" });
    }
});


