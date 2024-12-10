// Declaramos una función asíncrona llamada fetchPlanetByName que recibe un argumento 'name'
async function fetchPlanetByName(name) {
    try {
        // Verificamos si no se proporciona un nombre; en ese caso, lanzamos un error
        if (!name) throw new Error('No planet name provided');

        // Realizamos una solicitud a la API de Star Wars para buscar el planeta por su nombre
        const response = await fetch(`https://swapi.dev/api/planets/?search=${name}`);

        // Si la respuesta no es exitosa (status diferente de 200), lanzamos un error con el código de estado
        if (!response.ok) throw new Error(`Error fetching planet: ${response.status}`);

        // Convertimos la respuesta de la API a formato JSON para poder manipular los datos
        const data = await response.json();

        // Verificamos si no se encontró ningún planeta con el nombre proporcionado
        if (data.results.length === 0) {
            // Mostramos un mensaje en consola indicando que no se encontraron resultados
            console.log(`No planet found with the name "${name}"`);
        } else {
            // Si se encontraron resultados, imprimimos los datos del primer planeta encontrado
            console.log('Planet data:', data.results[0]);
        }
    } catch (error) {
        // Capturamos cualquier error que ocurra en el bloque try y mostramos un mensaje en consola
        console.error('Error:', error.message);
    }
}

// Llamamos a la función con el nombre de un planeta (en este caso, "Tatooine")
// Puedes cambiar "Tatooine" por el nombre de otro planeta para probar diferentes resultados
fetchPlanetByName("Tatooine");
