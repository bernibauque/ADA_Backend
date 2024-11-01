const promesa1 = Promise.reject("Error en promesa 1");
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "¡Hola!");
});
const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "¡Mundo!");
});

// Usamos Promise.any() para esperar que al menos una promesa se resuelva
Promise.any([promesa1, promesa2, promesa3])
    .then((resultado) => {
        console.log("Primera promesa resuelta:", resultado); // Imprime: "¡Hola!"
    })
    .catch((error) => {
        console.error("Todas las promesas fueron rechazadas:", error);
    });





