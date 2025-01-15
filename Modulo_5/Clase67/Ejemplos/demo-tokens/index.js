// Requerir las dependencias necesarias
const express = require('express'); // Importa el framework Express para manejar las rutas y el servidor.
const jwt = require('jsonwebtoken'); // Importa la librería jsonwebtoken para manejar los tokens JWT.

const app = express(); // Crea una instancia de la aplicación Express.
const PORT = 3000; // Define el puerto en el que el servidor escuchará las solicitudes (en este caso, el puerto 3000).

// Clave secreta para firmar el token (¡Mantén esto privado en un entorno real!)
const SECRET_KEY = 'miClaveSuperSecreta'; // Esta es la clave que se usará para firmar y verificar los tokens. Es importante mantenerla secreta.


// Middleware para validar el token
// Este middleware será ejecutado en ciertas rutas para asegurarse de que el usuario tiene un token válido.
function verifyToken(req, res, next) {
    // Obtener el token del encabezado 'Authorization' de la solicitud HTTP.
    const authHeader = req.headers['authorization']; // Los tokens suelen enviarse en el encabezado Authorization.

    // El token debe estar en el formato 'Bearer <token>', por lo tanto, se separa el prefijo 'Bearer ' del token.
    const token = authHeader && authHeader.split(' ')[1]; // Si existe el encabezado, extrae el token.

    if (!token) {
        // Si no se proporciona el token en el encabezado, devolver un error 401 (no autorizado).
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    try {
        // Verificar el token usando la clave secreta. Si el token es válido, se decodifica.
        const decoded = jwt.verify(token, SECRET_KEY); // Esta función valida y decodifica el token.

        // Si el token es válido, la información decodificada se almacena en req.user.
        req.user = decoded; // Se agrega la información del usuario al objeto de solicitud (req).

        // Llamar al siguiente middleware o controlador si el token es válido.
        next();
    } catch (err) {
        // Si el token es inválido o ha expirado, se devuelve un error 403 (prohibido).
        res.status(403).json({ message: 'Token inválido o expirado' });
    }
}


// Ruta para generar un token
// Esta ruta simula un proceso de inicio de sesión y genera un token JWT.
app.get('/login', (req, res) => {
    // Información del usuario (en un caso real, se verificarían las credenciales de la base de datos).
    const user = {
        id: 1, // ID único del usuario.
        name: 'Juan Pérez', // Nombre del usuario.
        email: 'juan@example.com', // Correo electrónico del usuario.
        role: 'admin', // Rol del usuario (en este caso, es un administrador).
    };

    // Crear el token. El token se firmará con la clave secreta y expirará en una hora.
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' }); // jwt.sign crea un token a partir de la información del usuario.

    // Responder al cliente con el mensaje de éxito y el token generado.
    res.json({
        message: 'Inicio de sesión exitoso', // Mensaje informativo.
        token: token, // El token que el cliente debe almacenar y usar en futuras solicitudes.
    });
});


// Ruta protegida: Solo accesible con un token válido
// Esta ruta requiere que el usuario proporcione un token válido para acceder a ella.
app.get('/protected', verifyToken, (req, res) => {
    // Si el middleware verifyToken permite el acceso, respondemos con la información del usuario decodificada.
    res.json({
        message: 'Acceso a ruta protegida concedido', // Mensaje de acceso permitido.
        user: req.user, // Información del usuario que fue decodificada y almacenada en req.user en el middleware.
    });
});

// Iniciar el servidor
// Este comando pone en marcha el servidor Express y lo hace escuchar en el puerto especificado.
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`); // Informa que el servidor está en ejecución.
});





