// Importar el módulo crypto para funciones criptográficas
const crypto = require('crypto');

// Definir una contraseña común (en este caso, "123456")
const contraseña = "123456";

// Generar un hash SHA-256 de la contraseña
const hash = crypto.createHash('sha256') // Crear un objeto hash usando el algoritmo SHA-256
    .update(contraseña) // Añadir la contraseña al objeto hash
    .digest('hex');     // Calcular el hash y convertirlo a una cadena hexadecimal

// Imprimir el hash generado en la consola
console.log("Hash SHA-256 de la contraseña:", hash);

