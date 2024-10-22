// Interfaz base Vehiculo
export interface Vehiculo {
    marca: string;
    modelo: string;
}

// Interfaz Auto que extiende de Vehiculo
interface Auto extends Vehiculo {
    cantidadDePuertas: number;
}

// Ejemplo de implementación de un Auto
const miAuto: Auto = {
    marca: "Toyota",
    modelo: "Corolla",
    cantidadDePuertas: 4
};

console.log(miAuto);
