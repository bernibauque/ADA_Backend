//📌 Ejemplo de almacenamiento inseguro de contraseñas en Node.js:
//const dbPassword = "password123"; // ❌ Nunca hagas esto

//✅ Solución: Usar variables de entorno con dotenv.
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
