class Coleccion<T> {
    private elementos: T[] = [];
  
    agregar(elemento: T): void {
      this.elementos.push(elemento);
    }
  
    recorrer(callback: (elemento: T) => void): void {
      for (const elemento of this.elementos) {
        callback(elemento);
      }
    }
  }
  
  // Ejemplo de uso:
export const numeros = new Coleccion<number>();
  
  numeros.agregar(1);
  numeros.agregar(2);
  numeros.agregar(3);
  numeros.agregar(4);
  numeros.agregar(5);
  
  // Filtrar e imprimir solo números pares
  numeros.recorrer((num) => {
    if (num % 2 === 0) {
      console.log(num); // 2, 4
    }
  });
  