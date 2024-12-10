// Definimos una función asincrónica llamada fetchCharacter que recibe un parámetro 'id'.
async function fetchCharacter(id) {
    try {
        // Validamos si el 'id' no fue proporcionado, lanzamos un error con un mensaje.
        if (!id) throw new Error('No ID provided');

        // Hacemos una solicitud a la API de Star Wars usando el ID proporcionado.
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);

        // Verificamos si la respuesta no fue exitosa (status diferente de 200), lanzamos un error.
        if (!response.ok) throw new Error(`Character not found: ${response.status}`);

        // Convertimos la respuesta a formato JSON para obtener los datos del personaje.
        const character = await response.json();

        // Imprimimos en consola los datos del personaje.
        console.log('Character data:', character);
    } catch (error) {
        // Capturamos cualquier error ocurrido en el bloque try y lo mostramos en la consola.
        console.error('Error:', error.message);
    }
}

// Llamamos a la función fetchCharacter pasando el ID del personaje (en este caso, 3).
fetchCharacter(3); // Cambia el ID para probar otros personajes.



