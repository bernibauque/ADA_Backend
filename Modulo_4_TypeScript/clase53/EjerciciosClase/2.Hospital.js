function registrarPaciente(nombre, emergencia) {
    return new Promise((resolver, rechazar) => {
        // Validamos que el nombre no esté vacío ni sea nulo
        if (!nombre) {
            rechazar("Error: Nombre inválido para registro");
            // Rechazamos la promesa si el nombre es inválido
            return; // Finalizamos la función para evitar que continúe
        }

        // Simulamos un retraso de 1 segundo para el registro del paciente
        setTimeout(() => {
            // Resolución de la promesa en función del estado de emergencia
            if (emergencia) {
                resolver(`Paciente ${nombre} registrado en emergencia`);
                // Resolvemos con mensaje de emergencia
            } else {
                resolver(`Paciente ${nombre} registrado en sala de espera`);
                // Resolvemos con mensaje de sala de espera
            }
        }, 1000); // Tiempo de espera simulado de 1 segundo
    });
}

// Llamada a la función con un paciente de emergencia
registrarPaciente("Ana Perez", true)
    .then((mensaje) => console.log(mensaje))
    // Manejamos la resolución exitosa con then
    .catch((error) => console.error(error));
// Manejamos el rechazo de la promesa con catch

// Llamada a la función con un paciente en sala de espera
registrarPaciente("Carlos Lopez", false)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));

// Llamada a la función con un nombre inválido para simular el error
registrarPaciente("", false)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));



