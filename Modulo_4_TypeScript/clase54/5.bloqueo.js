function tareaAsincrona1() {
    return new Promise((resolve) => setTimeout(() => resolve("Tarea 1 completado"), 2000))
}

function tareaAsincrona2() {
    return new Promise((resolve) => setTimeout(() => resolve("Tarea 2 completado"), 5000))
}

function tareaAsincrona3() {
    return new Promise((resolve) => setTimeout(() => resolve("Tarea 3 completado"), 2000))
}

async function ejecutarConcurrente() {
    try {
        const promesa1 = tareaAsincrona1();
        const promesa2 = tareaAsincrona2();
        const promesa3 = tareaAsincrona3();

        const resultados = await Promise.all([promesa1, promesa2, promesa3])
        console.log("Resultados: ", resultados);
    } catch (error) {
        console.log("Error en alguna de las tareas.", error);
    }
}

ejecutarConcurrente();