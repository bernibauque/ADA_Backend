const promesa1 = Promise.resolve(3);
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Error en promesa 2");
});
const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "¡Mundo!");
});

// Usamos Promise.allSettled() para esperar que todas las promesas se completen
Promise.allSettled([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log("Resultados de todas las promesas:", resultados);
        // Imprime: 
        // [
        //   { status: 'fulfilled', value: 3 },
        //   { status: 'rejected', reason: 'Error en promesa 2' },
        //   { status: 'fulfilled', value: '¡Mundo!' }
        // ]
    });





