// En este ejemplo, La clase Triangle permite establecer la base y la altura de un triángulo 
// a través de setters con validación, asegurando que ambos valores sean positivos. 
// Incluye un método para calcular el área utilizando la fórmula correspondiente.

class Triangle {
    private _base: number;      // Propiedad privada para la base del triángulo
    private _height: number;    // Propiedad privada para la altura del triángulo

    constructor() {
        this._base = 0;         // Inicializa la base en 0
        this._height = 0;       // Inicializa la altura en 0
    }

    // Setter para la base, con validación
    public set base(value: number) {
        if (value > 0) {
            this._base = value;
        } else {
            console.log("La base debe ser mayor a 0.");
        }
    }

    // Setter para la altura, con validación
    public set height(value: number) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log("La altura debe ser mayor a 0.");
        }
    }

    // Método para calcular el área del triángulo
    public calculateArea(): number {
        return (this._base * this._height) / 2;  // Fórmula del área de un triángulo
    }
}

// Uso de la clase Triangle
const triangle = new Triangle();

// Usamos los setters para establecer los valores
triangle.base = 10;   // Establecemos una base válida
triangle.height = 5;  // Establecemos una altura válida

// Calculamos y mostramos el área
console.log(`Área: ${triangle.calculateArea()}`); // Área: 25

// Intento inválido para establecer un valor negativo
triangle.base = -5;  // Mostrará un mensaje de error
triangle.height = -3; // Mostrará un mensaje de error

// Verificamos el área con valores no válidos (base y altura no cambiadas)
console.log(`Área con valores inválidos: ${triangle.calculateArea()}`); // Área: 25




