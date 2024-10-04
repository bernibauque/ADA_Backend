// Definir la clase Gato
class Gato {
    // Propiedades
    public nombre: string;
    public edad: number;
    private raza: string;
  
    // Constructor
    constructor(nombre: string, edad: number, raza: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.raza = raza;
    }
  
    // Método para obtener información del gato
    public obtenerInformacion(): string {
      return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}`;
    }
  
    // Método para cambiar la raza del gato
    public cambiarRaza(nuevaRaza: string): void {
      this.raza = nuevaRaza;
    }
  }
  
  // Crear una instancia de la clase Gato
  const gato1 = new Gato("Miau", 2, "Siamés");
  
  // Llamar al método obtenerInformacion()
  console.log(gato1.obtenerInformacion()); 
  // Output: Nombre: Miau, Edad: 2, Raza: Siamés
  
  // Cambiar la raza
  gato1.cambiarRaza("Persa");
  
  // Llamar de nuevo al método obtenerInformacion()
  console.log(gato1.obtenerInformacion()); 
  // Output: Nombre: Miau, Edad: 2, Raza: Persa
  

  
  
  
  
  