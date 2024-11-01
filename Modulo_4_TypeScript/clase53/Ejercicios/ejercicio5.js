function loadData(message, callback) {
    setTimeout(() => {
        console.log(message);
        callback(); // Ejecuta el callback después de mostrar el mensaje
    }, 1000);
}

// Llamadas anidadas para simular una carga secuencial de datos
loadData("Cargando Datos 1...", () => {
    loadData("Cargando Datos 2...", () => {
        loadData("Cargando Datos 3...", () => {
            console.log("Todos los datos cargados");
        });
    });
});

