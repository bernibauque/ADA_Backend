const error = "Algo salió mal.";

// Creamos una promesa rechazada usando Promise.reject()
const miPromesa = Promise.reject(error);

miPromesa
    .catch((error) => {
        console.error("Error de la promesa:", error); // Imprime: "Algo salió mal."
    });





