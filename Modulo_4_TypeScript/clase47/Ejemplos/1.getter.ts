// Este ejemplo demuestraremos cómo un getter permite acceder a propiedades privadas y 
// calcular información derivada (como el área) sin exponer directamente el estado 
// interno del objeto. Al usar los getters, garantizamos que la clase controla 
// cómo se accede a sus datos, aplicando así el principio de encapsulamiento.

class Rectangle {
    private _width: number;   // Propiedad privada
    private _height: number;  // Propiedad privada

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    // Getter para el área del rectángulo
    public get area(): number {
        return this._width * this._height; // Devolvemos el área calculada
    }

    // Getter para obtener la altura
    public get height(): number {
        return this._height;
    }

    // Getter para obtener el ancho
    public get width(): number {
        return this._width;
    }
}

// Uso de la clase Rectangle
const rect = new Rectangle(10, 5);

// Accedemos a los valores usando los getters
console.log(`Ancho: ${rect.width}`);   // Ancho: 10
console.log(`Altura: ${rect.height}`); // Altura: 5
console.log(`Área: ${rect.area}`);     // Área: 50

// No podemos modificar directamente las propiedades privadas.
// rect._width = 20; // Error: 'width' is private and only accessible within class 'Rectangle'.



