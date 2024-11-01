function greetUser(name, callback) {
    setTimeout(() => {
        callback(`Hola, ${name}!`); // Ejecuta el callback con el saludo
    }, 1000);
}

// Llamada a la función
greetUser("Laura", (message) => {
    console.log(message);
});
