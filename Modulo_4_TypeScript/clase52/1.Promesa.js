// Creamos una promesa
const miPromesa = new Promise((resolve, reject) => {
    console.log("Estado: Pendiente. La operacion ha comenzado...");

    //Simulamos una operacion asincrona
    setTimeout(() => {
        const exito = Math.random() > 0.5
        // Generamos un vaor booleano aletorio, tru es exito false es fallo
        if (exito) {
            resolve("Operacion completada con exito.")
        } else {
            reject("Error: No se pudo completar la opercion.")
        }
    }, 2000);
})

// Manejo de la promesa 
miPromesa
    // Este bloque se ejecuta si la promesa se resuleve con exito
    .then((resultado) => {
        console.log("Exito: ", resultado);
    })
    // Este bloque se ejecuta si la promesa es rechazada
    .catch((error) => {
        console.log("Error: ", error);
    })
    // Este bloque se ejecuta cuando la promesa finaliza
    .finally(() => {
        console.log("Promesa finalizada.");
    })

console.log("Promesa creada, esperando resultado... ");



