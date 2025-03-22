// Importa el módulo 'mysql' para interactuar con una base de datos MySQL
const mysql = require('mysql');
// Importa el módulo 'express' para crear un servidor web
const express = require('express');
// Crea una instancia de la aplicación Express
const app = express();

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: "localhost",  // Dirección del servidor de la base de datos
    user: "root",       // Usuario de la base de datos
    password: "",       // Contraseña del usuario (en este caso, vacía)
    database: "test"    // Nombre de la base de datos a la que se conectará
});

// Define una ruta GET en la aplicación para obtener información de un usuario
app.get("/usuario", (req, res) => {
    // Obtiene el parámetro 'id' de la consulta (query) de la URL
    const id = req.query.id;

    // Ejecuta una consulta SQL para seleccionar un usuario con el ID proporcionado
    connection.query(`SELECT * FROM usuarios WHERE id = ${id}`, (err, results) => {
        // Si hay un error en la consulta, lanza una excepción
        if (err) throw err;

        // Devuelve los resultados de la consulta en formato JSON como respuesta
        res.json(results);
    });
});
// Falta iniciar el servidor con app.listen() para que la aplicación funcione.

// Ruta GET para obtener información de un usuario de manera segura
app.get("/usuario-seguro", (req, res) => {
    // Obtiene el parámetro 'id' de la consulta (query) de la URL
    const id = req.query.id;

    // Ejecuta una consulta SQL utilizando consultas preparadas
    connection.query(
        "SELECT * FROM usuarios WHERE id = ?", // Consulta SQL con un marcador de posición (?)
        [id], // Array de valores que reemplazarán los marcadores de posición
        (err, results) => { // Callback que maneja el resultado de la consulta
            if (err) throw err; // Si hay un error, se lanza una excepción
            res.json(results); // Devuelve los resultados de la consulta en formato JSON
        }
    );
});
