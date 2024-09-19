let counter = 0;  // Inicializamos el contador en 0

// Función para incrementar el contador
const incrementCounter = () => {
    counter += 1;  // Incrementa el contador en 1
    return counter;
};

module.exports = {
    incrementCounter,
};

