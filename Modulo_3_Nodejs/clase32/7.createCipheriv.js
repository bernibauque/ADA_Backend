const crypto = require('crypto');
const algoritmo = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algoritmo, key, iv)

let encriptado = cipher.update(algoritmo, 'utf-8', 'hex');
encriptado += cipher.final('hex')

console.log('Texto cifrado: ', encriptado);

const decifrado = crypto.createCipheriv(algoritmo, key, iv)

let desencriptado = decifrado.update(encriptado, 'hex', 'utf-8')
desencriptado += decifrado.final('utf-8');

console.log('Texto decifrado: ', desencriptado);

