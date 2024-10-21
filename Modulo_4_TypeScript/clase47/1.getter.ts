export class Rectangle {
    private _width: number; // Propiedad privada
    private _height: number; // Propiedad privada

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    // Getter para el area del rectangulo
    public get area(): number {
        return this._width * this._height; // Devolvemos el area calculada
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

// Usamos la clase Rectangulo
const rect = new Rectangle(10, 5);

// Accedemos a los valores usando los getter
console.log(`Ancho ${rect.width}`);
console.log(`Altura ${rect.height}`);
console.log(`Area ${rect.area}`);

//rect._width = 20; // No podemos modificar directamente las prop privadas



