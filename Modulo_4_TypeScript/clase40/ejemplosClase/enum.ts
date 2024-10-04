// Definimos un enum numerico
export enum Colores {
    Rojo,   //0
    Verde, //1
    Azul, //2
}

// Acceder a los valores del enum
let colorFavorito: Colores = Colores.Verde;
console.log('Color favorito (por numero): ', colorFavorito); // Impirmir el indice

// Acceder al nombre del valor por su indice
console.log('Nombre del color por indice: ', Colores[colorFavorito]); // Imprime el nombre

// Definicion de enum de cadenas
enum Direcciones {
    Norte = 'N',
    Sur = 'S',
    Este = 'E',
    Oeste = 'O'
}

// Asignar un valor del enum a una variable
let direccionesViaje: Direcciones = Direcciones.Norte;
console.log('Direccion del viaje: ',direccionesViaje); // Imprime el valor
