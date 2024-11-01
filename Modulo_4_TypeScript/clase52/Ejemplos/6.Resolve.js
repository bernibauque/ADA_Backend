const valor = 42;

// Creamos una promesa resuelta usando Promise.resolve()
const miPromesa = Promise.resolve(valor);

miPromesa
    .then((resultado) => {
        console.log("Valor de la promesa:", resultado); // Imprime: 42
    });





