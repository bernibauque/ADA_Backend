// Cargar variables de entorno desde un archivo .env
require('dotenv').config();

// Importar la librería bcrypt para hashear contraseñas de manera segura
const bcrypt = require('bcrypt');

// Obtener la "pimienta" (pepper) desde las variables de entorno
// La pimienta es un valor secreto que se añade a la contraseña antes de hashearla
const PEPPER = process.env.PEPPER_SECRET;

// Definir la contraseña en texto plano que se va a hashear
const contraseña = "123456";

// Concatenar la pimienta a la contraseña
// Esto añade una capa adicional de seguridad
const contraseñaConPimienta = contraseña + PEPPER;

// Definir el número de "salt rounds" (vueltas de sal) para el hashing
// Un valor más alto aumenta la seguridad pero también el tiempo de procesamiento
const saltRounds = 12;

// Generar el hash de la contraseña con pimienta usando bcrypt
bcrypt.hash(contraseñaConPimienta, saltRounds, (err, hash) => {
    // Manejar errores durante el proceso de hashing
    if (err) throw err;

    // Imprimir el hash generado en la consola
    console.log("Hash con sal y pimienta:", hash);
});

