const promise1 = new Promise((resolve) => {
    setTimeout(resolve, 100, "Promesa 1 completada")
})
const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 50, "Promesa 2 completada")
})

Promise.race([promise1, promise2])
    .then((resultado) => {
        console.log("Resultado de la promesa ganadora: ", resultado);
    })