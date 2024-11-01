function simulateDataLoad(delay, callback) {
    console.log("Iniciando la carga de datos...");

    // Usa setTimeout para simular un retraso en la carga de datos
    setTimeout(() => {
        const data = ["Producto 1", "Producto 2", "Producto 3"];
        callback(data); // Ejecuta el callback con los datos simulados
    }, delay); // El retraso es configurado por el parámetro delay
}

// Llamamos a la función y pasamos un callback para manejar los datos
simulateDataLoad(2000, (data) => {
    console.log("Datos cargados:", data);
});

