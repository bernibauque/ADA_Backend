// Importamos Express
const express = require('express');

// Creamos una instancia de Express
const app = express();

// Definimos un puerto para nuestro servidor
const PORT = 3000;

// Ruta GET para la URL raíz
app.get('/', (req, res) => {
    res.send('¡Hola, alumnas de ADA! Bienvenidas al servidor con Express.js');
});

// Ruta GET para "/pokemon"
app.get('/pokemon', (req, res) => {
    res.json({ message: 'Aquí te mostraré una lista de Pokémon' });
});

// Iniciamos el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
