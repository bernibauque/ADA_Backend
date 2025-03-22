// Importar la librería bcrypt para hashear contraseñas
const bcrypt = require('bcrypt');

// Definir la contraseña en texto plano que se va a hashear
const contraseña = "mypassword";

// Definir el número de "salt rounds" (vueltas de sal) para el hashing
// Un valor más alto aumenta la seguridad pero también el tiempo de procesamiento
const saltRounds = 10;

// Generar el hash de la contraseña
bcrypt.hash(contraseña, saltRounds, (err, hash) => {
    // Manejar errores durante el proceso de hashing
    if (err) throw err;

    // Imprimir el hash generado en la consola
    console.log("Contraseña hasheada:", hash);
});


