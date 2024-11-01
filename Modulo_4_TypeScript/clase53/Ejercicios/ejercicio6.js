function validateEmail(email) {
    return new Promise((resolve, reject) => {
        if (email.includes("@") && email.endsWith(".com")) {
            resolve("Email válido"); // Resuelve la promesa si cumple las condiciones
        } else {
            reject("Error: Email no válido"); // Rechaza si no cumple
        }
    });
}

// Uso de la promesa
validateEmail("ejemplo@correo.com")
    .then(message => console.log(message))
    .catch(error => console.error(error));
