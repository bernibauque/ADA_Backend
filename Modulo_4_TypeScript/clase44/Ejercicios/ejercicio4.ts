class Caja<T> {
    contenido: T;
  
    constructor(valor: T) {
      this.contenido = valor;
    }
  
    obtenerContenido(): T {
      return this.contenido;
    }
  }
  
  // Uso de la clase genérica:
  let cajaNumero = new Caja<number>(123);
  console.log(cajaNumero.obtenerContenido()); // 123
  
  let cajaTexto = new Caja<string>("Hola");
  console.log(cajaTexto.obtenerContenido()); // "Hola"
  