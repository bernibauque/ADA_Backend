// En este ejemplo, se define una clase base Evento y se crean subclases como 
// EventoMouse y EventoTeclado, cada una sobrescribiendo el método manejarEvento.

// Clase base: Evento
class Evento {
    // Método que será sobrescrito por las subclases
    manejarEvento(): void {
        console.log("Evento genérico manejado.");
    }
}

// Subclase: EventoMouse
class EventoMouse extends Evento {
    // Sobrescribimos el método para manejar eventos de mouse
    manejarEvento(): void {
        console.log("Evento de mouse manejado.");
    }
}

// Subclase: EventoTeclado
class EventoTeclado extends Evento {
    // Sobrescribimos el método para manejar eventos de teclado
    manejarEvento(): void {
        console.log("Evento de teclado manejado.");
    }
}

// Función que maneja cualquier tipo de evento
function gestionarEvento(evento: Evento) {
    // Llamamos al método que se ha sobrescrito en cada subclase
    evento.manejarEvento();
}

// Creando instancias de los diferentes eventos
let eventoMouse: Evento = new EventoMouse();
let eventoTeclado: Evento = new EventoTeclado();

// Ejecutamos la función que gestiona los eventos, aplicando polimorfismo
gestionarEvento(eventoMouse);  // Salida: Evento de mouse manejado.
gestionarEvento(eventoTeclado); // Salida: Evento de teclado manejado.



