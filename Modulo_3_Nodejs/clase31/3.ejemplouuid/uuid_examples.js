// Importamos las diferentes versiones de UUID del paquete 'uuid'
const { v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5 } = require('uuid');

// Ejemplo 1: UUID v1 - Basado en tiempo
// Genera un UUID único basado en la marca de tiempo actual y la dirección MAC del dispositivo.
const idV1 = uuidv1();
console.log("UUID v1 (basado en tiempo):", idV1);

// Ejemplo 2: UUID v3 - Basado en nombre y espacio de nombres
// Utiliza un nombre y un espacio de nombres para generar un UUID consistente usando un hash MD5.
const NAMESPACE = uuidv3.URL; // Espacio de nombres estándar basado en URL
const nameV3 = "ejemploNombre";
const idV3 = uuidv3(nameV3, NAMESPACE);
console.log("UUID v3 (basado en nombre y espacio de nombres):", idV3);

// Ejemplo 3: UUID v4 - Aleatorio
// Genera un UUID aleatorio utilizando valores generados de manera no predecible.
const idV4 = uuidv4();
console.log("UUID v4 (aleatorio):", idV4);

// Ejemplo 4: UUID v5 - Basado en nombre y espacio de nombres (con hash SHA-1)
// Similar a v3, pero utiliza un hash SHA-1 en lugar de MD5.
const nameV5 = "otroEjemplo";
const idV5 = uuidv5(nameV5, NAMESPACE);
console.log("UUID v5 (basado en nombre y espacio de nombres, con SHA-1):", idV5);


