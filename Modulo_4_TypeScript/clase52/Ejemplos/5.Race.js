const promesa1 = new Promise((resolve) => {
    setTimeout(resolve, 100, "Promesa 1 completada");
});
const promesa2 = new Promise((resolve) => {
    setTimeout(resolve, 50, "Promesa 2 completada");
});

// Usamos Promise.race() para obtener el resultado de la primera promesa que se complete
Promise.race([promesa1, promesa2])
    .then((resultado) => {
        console.log("Resultado de la promesa ganadora:", resultado);
        // Imprime: "Promesa 2 completada"
    });





