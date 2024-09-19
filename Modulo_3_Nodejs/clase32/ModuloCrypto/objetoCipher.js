// Importamos el módulo 'crypto' que proporciona funcionalidades criptográficas
const crypto = require('crypto');

// Generamos una clave aleatoria de 32 bytes para el algoritmo AES-256
// La clave debe tener el tamaño adecuado para el algoritmo seleccionado
const key = crypto.randomBytes(32); // Clave de 32 bytes para AES-256

// Generamos un vector de inicialización (IV) aleatorio de 16 bytes
// El IV es necesario para que el cifrado sea único incluso para el mismo texto
const iv = crypto.randomBytes(16);  // IV de 16 bytes para AES-256

// Función para cifrar texto
function cifrarTexto(texto) {
    // Creamos un objeto Cipher utilizando el algoritmo 'aes-256-cbc', la clave y el IV
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

    // Ciframos el texto de entrada; 'utf8' es la codificación del texto de entrada
    // 'hex' es la codificación de salida, que es más legible para los humanos
    let cifrado = cipher.update(texto, 'utf8', 'hex');

    // Finalizamos el cifrado; esto procesa cualquier dato restante y lo añade al resultado
    cifrado += cipher.final('hex');

    // Devolvemos el texto cifrado
    return cifrado;
}

// Función para descifrar texto
function descifrarTexto(cifrado) {
    // Creamos un objeto Decipher utilizando el mismo algoritmo 'aes-256-cbc', la clave y el IV
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

    // Desciframos el texto cifrado de entrada; 'hex' es la codificación del texto cifrado
    // 'utf8' es la codificación de salida, que es la forma legible del texto original
    let descifrado = decipher.update(cifrado, 'hex', 'utf8');

    // Finalizamos el desciframiento; esto procesa cualquier dato restante y lo añade al resultado
    descifrado += decipher.final('utf8');

    // Devolvemos el texto descifrado
    return descifrado;
}

// Mensaje original que queremos cifrar
const mensajeOriginal = 'Hola Mundo';

// Llamamos a la función para cifrar el mensaje original
const mensajeCifrado = cifrarTexto(mensajeOriginal);
console.log(`Mensaje cifrado: ${mensajeCifrado}`); // Mostramos el mensaje cifrado en la consola

// Llamamos a la función para descifrar el mensaje cifrado
const mensajeDescifrado = descifrarTexto(mensajeCifrado);
console.log(`Mensaje descifrado: ${mensajeDescifrado}`); // Mostramos el mensaje descifrado en la consola
