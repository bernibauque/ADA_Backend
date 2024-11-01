function validateUsername(username, callback) {
    console.log("Validando nombre de usuario...");

    setTimeout(() => {
        if (username.length > 5) {
            callback(true); // Llama al callback con true si el nombre es válido
        } else {
            callback(false); // Llama al callback con false si el nombre no es válido
        }
    }, 1000); // Simulamos un retraso de 1 segundo
}

// Uso de la función
validateUsername("usuario123", (isValid) => {
    console.log(isValid ? "Nombre de usuario válido" : "Nombre de usuario no válido");
});

