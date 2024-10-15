// Definición de una interfaz con una propiedad opcional "edad"
export interface Persona {
    nombre: string;    // Propiedad obligatoria
    edad?: number;     // Propiedad opcional
  }
  
  // Objeto que implementa la interfaz con solo la propiedad obligatoria
  const persona1: Persona = { nombre: "Ana" };
  
  // Objeto que implementa la interfaz con ambas propiedades
  const persona2: Persona = { nombre: "Carlos", edad: 30 };
  
  console.log(persona1); // { nombre: "Ana" }
  console.log(persona2); // { nombre: "Carlos", edad: 30 }
  


  