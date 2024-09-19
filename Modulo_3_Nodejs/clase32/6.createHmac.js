const crypto = require('crypto');

const data = 'Mensaje Secreto';
const secretKey = 'mi_clave_secreta';

const hmac = crypto.createHmac('sha256', secretKey);
hmac.update(data);
const hmacOutput = hmac.digest('hex');
console.log('HMAC SHA-256: ', hmacOutput);
