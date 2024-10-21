// En este ejemplo, se crea una clase base Componente que tiene un 
// método dibujar(). Las subclases Boton, Etiqueta y CuadroTexto 
// sobrescriben este método para mostrar sus propias implementaciones.

// Clase base: Componente
class Componente {
    // Método que será sobrescrito por las subclases
    dibujar(): void {
        console.log("Dibujando un componente genérico.");
    }
}

// Subclase: Boton
class Boton extends Componente {
    // Sobrescribimos el método para dibujar un botón
    dibujar(): void {
        console.log("Dibujando un botón.");
    }
}

// Subclase: Etiqueta
class Etiqueta extends Componente {
    // Sobrescribimos el método para dibujar una etiqueta
    dibujar(): void {
        console.log("Dibujando una etiqueta.");
    }
}

// Subclase: CuadroTexto
class CuadroTexto extends Componente {
    // Sobrescribimos el método para dibujar un cuadro de texto
    dibujar(): void {
        console.log("Dibujando un cuadro de texto.");
    }
}

// Función que dibuja cualquier tipo de componente
function renderizarComponente(componente: Componente) {
    // Llamamos al método correspondiente a la subclase
    componente.dibujar();
}

// Creando instancias de diferentes componentes
let boton: Componente = new Boton();
let etiqueta: Componente = new Etiqueta();
let cuadroTexto: Componente = new CuadroTexto();

// Dibujamos los componentes usando la función polimórfica
renderizarComponente(boton);       // Salida: Dibujando un botón.
renderizarComponente(etiqueta);    // Salida: Dibujando una etiqueta.
renderizarComponente(cuadroTexto); // Salida: Dibujando un cuadro de texto.



