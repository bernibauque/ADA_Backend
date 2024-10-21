export class Triangle {
    private _base: number; // Propiedad privada
    private _height: number; // Propiedad privada

    constructor() {
        this._base = 0; // Inicializa en 0
        this._height = 0; // Inicializa en 0
    }

    // Setter para la base, con validacion
    public set base(value: number) {
        if (value > 0) {
            this._base = value;
        } else {
            console.log("La base debe ser mayor a 0");
        }
    }

    // Setter para la altura, con validacion
    public set height(value: number) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log("La altura debe ser mayor a 0");
        }
    }

    // Metodo para calcular el area 
    public calcularArea(): number {
        return(this._base * this._height) / 2; // Formula para sacar area de un triangulo
    }
}

// Uso de la clase
const triangle = new Triangle();

//Usamos los setter para establecer lo valores (permitidos)
triangle.base = 10; 
triangle.height = 5;

// calculamos y mostramos el area
//console.log(`Area: ${triangle.calcularArea()}`);

// Intento con valores (no permitidos)
triangle.base = -5
triangle.height = -3

// calculamos y mostramos el area
console.log(`Area con valores no permitidos: ${triangle.calcularArea()}`);
