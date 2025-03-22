// Importar la librería bcrypt para hashear contraseñas de manera segura
const bcrypt = require('bcrypt');

// Definir la contraseña en texto plano que se va a hashear
const contraseña = "123456";

// Definir el número de "salt rounds" (vueltas de sal) para el hashing
// Un valor más alto aumenta la seguridad pero también el tiempo de procesamiento
const saltRounds = 12; // 12 es un valor recomendado para un buen equilibrio entre seguridad y rendimiento

// Generar el hash de la contraseña usando bcrypt
bcrypt.hash(contraseña, saltRounds, (err, hash) => {
    // Manejar errores durante el proceso de hashing
    if (err) throw err;

    // Imprimir el hash generado en la consola
    console.log("Contraseña con sal:", hash);
});

