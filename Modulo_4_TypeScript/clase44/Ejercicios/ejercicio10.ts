class FiltroAvanzado<T> {
    private elementos: T[] = [];
  
    agregar(elemento: T): void {
      this.elementos.push(elemento);
    }
  
    filtrar(condicion: (elemento: T) => boolean): T[] {
      const resultados: T[] = [];
      for (const elemento of this.elementos) {
        if (condicion(elemento)) {
          resultados.push(elemento);
        }
      }
      return resultados;
    }
  }
  
  // Definición del tipo de objeto
  interface Persona {
    nombre: string;
    edad: number;
  }
  
  // Uso de la clase genérica:
export const personas = new FiltroAvanzado<Persona>();
  
  personas.agregar({ nombre: "Ana", edad: 25 });
  personas.agregar({ nombre: "Juan", edad: 35 });
  personas.agregar({ nombre: "Luis", edad: 40 });
  
  // Filtrar personas mayores de 30 años
  const mayoresDe30 = personas.filtrar((persona) => persona.edad > 30);
  console.log(mayoresDe30); // [{ nombre: "Juan", edad: 35 }, { nombre: "Luis", edad: 40 }]
  