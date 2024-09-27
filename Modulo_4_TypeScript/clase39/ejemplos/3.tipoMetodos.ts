export let persona = {
    nombre: "Ana",
    edad: 25,
    pais: "Argentina"
  };
  
  // Claves del objeto
  const keys = Object.keys(persona);
  console.log("Claves del objeto:", keys); // ['nombre', 'edad', 'pais']
  
  // Valores del objeto
  const values = Object.values(persona);
  console.log("Valores del objeto:", values); // ['Ana', 25, 'Argentina']
  
  // Congelar el objeto
  Object.freeze(persona);
  persona.edad = 30; // Esto no tendrá efecto porque el objeto está congelado
  console.log("Edad después de intentar modificar:", persona.edad); // 25
  
  // Convertir a un array de pares clave-valor
  const entries = Object.entries(persona);
  console.log("Array de pares clave-valor:", entries); 
  // [['nombre', 'Ana'], ['edad', 25], ['pais', 'Argentina']]
  
  // Crear un objeto a partir de pares clave-valor
  const nuevoObjeto = Object.fromEntries(entries);
  console.log("Nuevo objeto creado:", nuevoObjeto); 
  // { nombre: 'Ana', edad: 25, pais: 'Argentina' }
  