// Importar el framwork de express
const express = require('express')

// Creamos una instancia de la api de express
const app = express()

//Habilitamos el middleware para analizar cuerpos de solicitudes en formato JSON
app.use(express.json())

// Base de datos
let animals = [
    { id: 1, name: "Leon", species: 'Felino' },
    { id: 2, name: "Elefante", species: 'Mamifero' },
]

// aplicamos un middleware para registro global
//app.use(requestLogger)

// Middleware para validar datos de animales en solicitudes POST y PUT
const validateAnimal = (req, res, next) => {
    const { name, species } = req.body  // extraemos datos del cuerpo de la soli
    if (!name || !species) { // validando los campos
        return res.status(400).json({ error: 'Los campos name y species son obligatorios' })
    }
    next(); // Si los datos son válidos, continúa al siguiente paso
}

// RUTAS: Funcionalidades principales de la api\

// Endpoint para obtener los animales
app.get('/api/animals', (req, res) => {
    res.status(200).json(animals)
})

// Endopoint para agregar un animal nuevo
app.post('/api/animals', (req, res) => {
    const { name, species } = req.body // extraemos los datos del cuerpo de la soli
    const newAnimal = { id: animals.length + 1, name, species } // creamos un nuevo objeto con un id unico
    animals.push(newAnimal)
    res.status(201).json(newAnimal) // devuelva el nuevo animal con codigo 201 creado
})

// Endpoint para actualizar la información de un animal existente
app.put('/api/animals/:id', validateAnimal, (req, res) => {
    const { id } = req.params; // Obtiene el ID del animal desde los parámetros de la URL
    const { name, species } = req.body; // Extrae los datos del cuerpo de la solicitud
    const animal = animals.find(a => a.id == id); // Comparación no estricta para manejar string/número
    if (!animal) {
        // Si no encuentra el animal, devuelve un error 404 (No encontrado)
        return res.status(404).json({ error: 'Animal no encontrado' });
    }
    // Actualiza el nombre y la especie del animal encontrado
    animal.name = name;
    animal.species = species;
    res.status(200).json(animal); // Devuelve el animal actualizado con código 200 (OK)
});

// Endpoint para eliminar 
app.delete('/api/animals/:id', (req, res) => {
    const { id } = req.params // obtenemos el id del animal desde los parametros de la url
    animals = animals.filter(a => a.id !== parseInt(id)) // filtrar por id
    res.status(204).send()
})

// iniciarmos el servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);

})