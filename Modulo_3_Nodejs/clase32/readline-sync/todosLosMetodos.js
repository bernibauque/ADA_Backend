// Importamos el módulo readline-sync
const readlineSync = require('readline-sync');

// 1. Preguntar el nombre del usuario
const nombre = readlineSync.question('Como te llamas? ');

// 2. Preguntar la edad del usuario como número entero
const edad = readlineSync.questionInt('Cuantos anios tienes? ');

// 3. Preguntar el salario del usuario como número decimal
const salario = readlineSync.questionFloat('Cual es tu salario mensual? ');

// 4. Preguntar si el usuario desea continuar
const continuar = readlineSync.keyInYN('¿Deseas continuar con la encuesta? ');

if (continuar) {
    // 5. Confirmar la elección del usuario
    const confirmar = readlineSync.keyInYNStrict('¿Confirmas que los datos son correctos? (y/n) ');

    if (confirmar) {
        // 6. Seleccionar la categoría de empleo del usuario
        const categorias = ['Desarrollador', 'Diseñador', 'Gerente', 'Otro'];
        const seleccion = readlineSync.keyInSelect(categorias, 'Selecciona tu categoria de empleo: ');

        console.log(`Has seleccionado la categoria: ${categorias[seleccion]}`);

        // 7. Preguntar al usuario si desea realizar otra encuesta
        readlineSync.promptCLLoop(() => {
            const repetir = readlineSync.keyInYN('¿Deseas realizar otra encuesta? ');
            return !repetir; // Termina el loop si el usuario responde 'n'
        });

        // 8. Preguntar una nueva contraseña
        const nuevaContrasena = readlineSync.questionNewPassword('Introduce una nueva contrasenia: ');

        // 9. Solicitar una entrada con opciones predeterminadas
        readlineSync.setDefaultOptions({ limit: 3 });
        const intento = readlineSync.question('Puedes intentar esto tres veces? ');

        // 10. Solicitar una contraseña oculta
        const contrasena = readlineSync.getRawInput('Introduce tu contrasenia (oculta): ');

        // Mostrar un mensaje final con los datos recopilados
        console.log(`Gracias por participar, ${nombre}.`);
        console.log(`Edad: ${edad}`);
        console.log(`Salario: ${salario}`);
        console.log(`Categoría de empleo: ${categorias[seleccion]}`);
    } else {
        console.log('Por favor, verifica tus datos y vuelve a intentarlo.');
    }
} else {
    console.log('Encuesta cancelada.');
}

