// URL de una API que devuelve información de usuarios
const url = 'https://jsonplaceholder.typicode.com/users';

// Hacer una solicitud GET a la API
fetch(url)
    .then(response => {
        if (!response.ok) { // Verificamos si la respuesta fue exitosa
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json(); // Convertimos la respuesta a JSON
    })
    .then(data => {
        console.log("Datos recibidos:", data); // Mostramos los datos obtenidos
    })
    .catch(error => {
        console.error("Hubo un error:", error.message); // Manejamos errores
    });
