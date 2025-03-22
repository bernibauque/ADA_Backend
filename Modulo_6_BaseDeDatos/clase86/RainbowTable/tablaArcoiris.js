// Importar el módulo crypto para funciones criptográficas
const crypto = require('crypto');

// Importar el módulo fs para leer archivos del sistema
const fs = require('fs');

// Definir el hash objetivo que queremos descifrar
// En este caso, es el hash SHA-256 de la contraseña "123456"
const hashObjetivo = "e150a1a19b0b3219e616f36b498204564c7c9d3151a641da36f38c27b91a634c";

// Cargar la Rainbow Table desde un archivo de texto
// El archivo "rainbow_table.txt" debe contener pares de contraseñas y sus hashes, separados por ":"
const rainbowTable = fs.readFileSync("rainbow_table.txt", "utf-8").split("\n");

// Recorrer cada entrada en la Rainbow Table
for (let entrada of rainbowTable) {
    // Dividir la entrada en contraseña y hash usando el separador ":"
    const [contraseña, hash] = entrada.split(":");

    // Comparar el hash de la entrada con el hash objetivo
    if (hash === hashObjetivo) {
        // Si coinciden, imprimir la contraseña encontrada
        console.log(`¡Contraseña encontrada!: ${contraseña}`);
        // Salir del bucle, ya que se encontró la contraseña
        break;
    }
}

