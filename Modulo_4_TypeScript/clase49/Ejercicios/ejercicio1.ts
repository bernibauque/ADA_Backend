// Definimos un tipo para la tupla de coordenadas 2D
type Coordenadas2D = [number, number];

// Función para calcular la distancia desde el origen usando la fórmula de la distancia euclidiana
function calcularDistanciaDesdeOrigen(coordenadas: Coordenadas2D): number {
    const [x, y] = coordenadas;
    return Math.sqrt(x ** 2 + y ** 2); // Distancia al origen (0,0)
}

// Ejemplo de uso
export const coordenadas: Coordenadas2D = [3, 4];
console.log(calcularDistanciaDesdeOrigen(coordenadas)); // Resultado: 5
