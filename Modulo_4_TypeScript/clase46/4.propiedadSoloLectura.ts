// Definimos una interfaz con propiedades de solo lectura
interface Punto {
    readonly x: number; // Propiedad de solo lectura
    readonly y: number; // Propiedad de solo lectura
}

// Creamos un objeto con las propiedades
export const punto: Punto = { x:10, y:20 };
console.log(punto);

// Intentamos modificar una propiedad de solo lectura (causa error)
//punto.x = 15; // Error: Cannot assign to 'x' because it is a read-only property