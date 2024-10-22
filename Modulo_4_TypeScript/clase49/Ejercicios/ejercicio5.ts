// Clase abstracta FiguraGeometrica
abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

// Clase concreta Cuadrado
class Cuadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado ** 2;
    }
}

// Clase concreta Circulo
class Circulo extends FiguraGeometrica {
    constructor(private radio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }
}

// Ejemplo de uso
const miCuadrado = new Cuadrado(4);
const miCirculo = new Circulo(3);

console.log(miCuadrado.calcularArea()); // Resultado: 16
console.log(miCirculo.calcularArea());  // Resultado: ~28.27
