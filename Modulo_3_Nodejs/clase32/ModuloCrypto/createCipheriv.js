const crypto = require('crypto'); // Importa el módulo 'crypto' para usar sus funcionalidades de cifrado.

// Datos a cifrar
const data = 'Texto secreto'; // Define el texto que se desea cifrar.

// Configuración del algoritmo y clave
const algorithm = 'aes-256-cbc'; // Algoritmo de cifrado AES con un tamaño de clave de 256 bits y modo CBC (Cipher Block Chaining).
const key = crypto.randomBytes(32); // Genera una clave de 256 bits (32 bytes) para el cifrado.
const iv = crypto.randomBytes(16);  // Genera un vector de inicialización (IV) de 16 bytes, que es necesario para el algoritmo AES-256-CBC.

// Crear objeto Cipher para cifrar datos
const cipher = crypto.createCipheriv(algorithm, key, iv); // Crea un objeto Cipher usando el algoritmo, la clave y el IV especificados.

// Cifrar los datos
let encrypted = cipher.update(data, 'utf8', 'hex'); // Procesa el texto plano y lo cifra, el texto de entrada está en 'utf8' y la salida en 'hex'.
encrypted += cipher.final('hex'); // Finaliza el cifrado y agrega cualquier dato cifrado restante, el resultado final está en 'hex'.

console.log('Texto cifrado:', encrypted); // Muestra el texto cifrado en la consola.

// Crear objeto Decipher para descifrar datos
const decipher = crypto.createDecipheriv(algorithm, key, iv); // Crea un objeto Decipher usando el mismo algoritmo, clave e IV que se usaron para cifrar.

// Descifrar los datos
let decrypted = decipher.update(encrypted, 'hex', 'utf8'); // Procesa el texto cifrado y lo descifra, el texto de entrada está en 'hex' y la salida en 'utf8'.
decrypted += decipher.final('utf8'); // Finaliza el desciframiento y agrega cualquier dato descifrado restante, el resultado final está en 'utf8'.

console.log('Texto descifrado:', decrypted); // Muestra el texto descifrado en la consola.





