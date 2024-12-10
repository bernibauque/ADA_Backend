// Definimos una función asíncrona para obtener Pokémon por tipo desde la PokéAPI
async function fetchPokemonByType(type) {
    try {
        // Validamos que se haya proporcionado un tipo
        if (!type) throw new Error('No Pokémon type provided');

        // Hacemos una solicitud a la PokéAPI usando el tipo proporcionado
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

        // Verificamos si la respuesta es exitosa (código de estado 200)
        if (!response.ok) {
            throw new Error(`Error fetching Pokémon by type: ${response.status}`);
        }

        // Convertimos la respuesta a un objeto JSON para poder trabajar con los datos
        const data = await response.json();

        // Verificamos si hay Pokémon de este tipo
        if (data.pokemon.length === 0) {
            console.log(`No Pokémon found with the type "${type}"`);
        } else {
            // Extraemos los nombres de los primeros cinco Pokémon encontrados
            const pokemonList = data.pokemon.slice(0, 5).map(p => p.pokemon.name);
            console.log(`Pokémon of type "${type}":`, pokemonList);
        }
    } catch (error) {
        // Capturamos cualquier error y lo mostramos en la consola
        console.error('Error:', error.message);
    }
}

// Ejemplo de uso: Llamamos a la función con un tipo de Pokémon
fetchPokemonByType('fire');
