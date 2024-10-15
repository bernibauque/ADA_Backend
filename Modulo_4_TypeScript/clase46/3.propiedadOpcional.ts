// Definimos una Interfaz 
export interface Persona {
    nombre: string; // Propiedad obligatoria
    edad?: number; // Propiedad opcional
}

// Objeto que implementa la interfaz con solo la propiedad obligatoria
const persona1: Persona = {nombre: "Pau"};

//Objeto que implementa la interfaz con amabas propiedades
const persona2: Persona = {nombre: "Mariana", edad: 25};

console.log(persona1);
console.log(persona2);

