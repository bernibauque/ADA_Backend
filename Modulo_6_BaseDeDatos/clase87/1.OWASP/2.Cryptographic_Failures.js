// Ejemplo de almacenamiento inseguro de contraseñas en Node.js:
const usuarios = [
    { id: 1, nombre: "Alice", password: "123456" }  // ❌ ¡Contraseña en texto plano!
];

// Solución: Usar hashing con bcrypt:

const bcrypt = require('bcrypt');

// Define una función asíncrona para registrar un usuario
async function registrarUsuario(nombre, password) {
    // Genera un "salt" (valor aleatorio) para aumentar la seguridad del hashing
    // El número 10 indica el costo del proceso de hashing (cuanto mayor, más seguro pero más lento)
    const salt = await bcrypt.genSalt(10);

    // Hashea la contraseña usando el salt generado
    const hashedPassword = await bcrypt.hash(password, salt);

    // Muestra la contraseña hasheada en la consola
    console.log(`Contraseña segura: ${hashedPassword}`);
}

// Llama a la función para registrar un usuario con nombre "Alice" y contraseña "123456"
registrarUsuario("Alice", "123456");

