// Ejemplo de Objetos en TypeScript

// 1. Definición básica de un objeto
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022
  };
  
  // Mostramos las propiedades del objeto en la consola
  console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.año}`);
  
  
  // 2. Declaración explícita del tipo de un objeto
  let libro: { titulo: string; autor: string; paginas: number } = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    paginas: 417
  };
  
  // Mostramos las propiedades del libro en la consola
  console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Páginas: ${libro.paginas}`);
  
  
  // 3. Propiedades opcionales
  let estudiante: { nombre: string; edad?: number } = {
    nombre: "Ana"
  };
  
  // Usamos el operador ?? para manejar la propiedad opcional "edad"
  console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad ?? "Desconocida"}`);
  
  
  // 4. Métodos en un objeto
  let perro = {
    nombre: "Firulais",
    raza: "Labrador",
    ladrar: function() {
      return `${this.nombre} está ladrando!`;
    }
  };
  
  // Llamamos al método ladrar y mostramos el resultado en la consola
  console.log(perro.ladrar());

  
  
  
  
  

  
  
  
  