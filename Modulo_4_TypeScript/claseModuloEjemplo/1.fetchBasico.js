fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la red');
        }
        return response.json(); // Convierte la respuesta en JSON
    })
    .then(data => console.log(data)) // Imprime los datos en consola
    .catch(error => console.error('Error:', error)); // Manejo de errores
