// Importar el módulo 'crypto' de Node.js
const crypto = require('crypto');

// Datos que queremos hashear
const data = 'Este es un mensaje secreto';

// Crear un objeto Hash usando el algoritmo 'sha256'
const hash = crypto.createHash('sha256');

// Actualizar el hash con los datos
hash.update(data);

// Obtener el hash en formato hexadecimal
const hashOutput = hash.digest('hex');

// Mostrar el hash generado
console.log('Hash SHA-256:', hashOutput);

