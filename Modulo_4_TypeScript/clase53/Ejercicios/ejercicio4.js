function multiplyNumbers(a, b) {
    return new Promise((resolve, reject) => {
        // Validamos que ambos parámetros sean números
        if (typeof a === "number" && typeof b === "number") {
            resolve(a * b); // Resolvemos con el resultado de la multiplicación
        } else {
            reject("Error: Ambos valores deben ser números"); // Rechazamos si no son números
        }
    });
}

// Usamos la promesa con then y catch
multiplyNumbers(4, 5)
    .then(result => console.log("Resultado de la multiplicación:", result))
    .catch(error => console.error(error));

