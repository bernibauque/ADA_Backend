// Importar el módulo 'crypto' de Node.js
const crypto = require('crypto');

// Datos que queremos autenticar
const data = 'Mensaje secreto';

// Clave secreta para HMAC
const secretKey = 'mi_clave_secreta';

// Crear un objeto HMAC usando el algoritmo 'sha256' y la clave secreta
const hmac = crypto.createHmac('sha256', secretKey);

// Actualizar el HMAC con los datos
hmac.update(data);

// Obtener el HMAC en formato hexadecimal
const hmacOutput = hmac.digest('hex');

// Mostrar el HMAC generado
console.log('HMAC SHA-256:', hmacOutput);

