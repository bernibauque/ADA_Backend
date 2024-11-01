const fetchData1 = new Promise((resolve) => setTimeout(() => resolve("Datos 1"), 1000));
const fetchData2 = new Promise((resolve) => setTimeout(() => resolve("Datos 2"), 2000));
const fetchData3 = new Promise((resolve) => setTimeout(() => resolve("Datos 3"), 3000));

// Promise.all ejecuta las promesas en paralelo
Promise.all([fetchData1, fetchData2, fetchData3])
    .then((results) => console.log("Datos obtenidos:", results))
    .catch((error) => console.error("Error en la carga de datos:", error));
