// Clase base
class Zoologico {
    abrirPuertas(): void {
      console.log("El zoológico está abierto al público.");
    }
  }
  
  // Clase derivada
  class ZoologicoSafari extends Zoologico {
    abrirPuertas(): void {
      super.abrirPuertas(); // Llama al método de la clase base
      console.log("El zoológico safari está abierto para aventuras.");
    }
  }
  
  // Ejemplo
  const zoo = new ZoologicoSafari();
  zoo.abrirPuertas();
  // El zoológico está abierto al público.
  // El zoológico safari está abierto para aventuras.
  