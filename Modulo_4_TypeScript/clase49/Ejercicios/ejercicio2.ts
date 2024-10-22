// Definimos la interfaz Persona
interface Persona {
    nombre: string;
    edad: number;
    correo: string;
}

// Función para imprimir la información de una persona
function imprimirPersona(persona: Persona): void {
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Edad: ${persona.edad}`);
    console.log(`Correo: ${persona.correo}`);
}

// Ejemplo de uso
export const personaEjemplo: Persona = {
    nombre: "Juan Pérez",
    edad: 30,
    correo: "juan.perez@example.com"
};

imprimirPersona(personaEjemplo);
