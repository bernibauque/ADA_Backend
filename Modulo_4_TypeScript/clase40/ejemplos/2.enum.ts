// Definición de un enum numérico
enum Colores {
    Rojo,    // 0
    Verde,   // 1
    Azul,    // 2
}

// Acceder a los valores del enum
let colorFavorito: Colores = Colores.Verde;
console.log('Color favorito (por número):', colorFavorito); // Imprime el índice

// Acceder al nombre del valor por su índice
console.log('Nombre del color por índice:', Colores[colorFavorito]); // Imprime "Verde"

// Definición de un enum de cadenas
enum Direcciones {
    Norte = "N",
    Sur = "S",
    Este = "E",
    Oeste = "O"
}

// Asignar un valor del enum a una variable
let direccionViaje: Direcciones = Direcciones.Norte;
console.log('Dirección del viaje:', direccionViaje); // Imprime "N"








