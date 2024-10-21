// Clase que solo tiene un getter
class Constante {
    private _valor: number; // Propiedad privada

    constructor(valor: number) {
        this._valor = valor; // Inicializa el valor
    }

    // Solo getter para acceder al valor
    public get valor(): number {
        return this._valor; // Devuelve el valor
    }
}

// Uso de la clase Constante
const constante = new Constante(42);
console.log(constante.valor); // Muestra 42
// constante.valor = 50; // Esto causaría un error, ya que no hay setter

// ----------------------------------------

// Clase que solo tiene un setter
class Contador {
    private _cuenta: number; // Propiedad privada

    constructor() {
        this._cuenta = 0; // Inicializa la cuenta en 0
    }

    // Solo setter para modificar la cuenta
    public set cuenta(value: number) {
        if (value >= 0) { // Verifica que el valor sea no negativo
            this._cuenta = value; // Asigna el nuevo valor
        } else {
            console.log("La cuenta no puede ser negativa."); // Mensaje de error
        }
    }

    // Método para mostrar la cuenta
    public mostrarCuenta(): number {
        return this._cuenta; // Devuelve el valor de la cuenta
    }
}

// Uso de la clase Contador
const contador = new Contador();
contador.cuenta = 5; // Cambia la cuenta a 5
console.log(contador.mostrarCuenta()); // Muestra 5
// No hay manera de acceder directamente al valor de _cuenta
// console.log(contador._cuenta); // Esto causaría un error, ya que _cuenta es privado

// La clase Constante ilustra cómo se puede encapsular un valor que debe permanecer inmutable, 
// permitiendo su acceso a través de un getter sin ofrecer la posibilidad de modificación. 
// Por otro lado, la clase Contador muestra cómo se puede gestionar un valor que se puede actualizar, 
// permitiendo su modificación a través de un setter con validación, mientras que el acceso directo 
// al valor se restringe, fomentando así un control más seguro sobre la lógica de la aplicación.



