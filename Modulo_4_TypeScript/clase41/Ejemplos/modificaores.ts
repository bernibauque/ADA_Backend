class Animal {
    // Propiedad pública (accesible desde cualquier parte)
    public nombre: string;
  
    // Propiedad privada (solo accesible dentro de esta clase)
    private tipoAlimento: string;
  
    // Propiedad protegida (accesible dentro de esta clase y clases hijas)
    protected especie: string;
  
    // Constructor
    constructor(nombre: string, tipoAlimento: string, especie: string) {
      this.nombre = nombre;
      this.tipoAlimento = tipoAlimento;
      this.especie = especie;
    }
  
    // Método público (accesible desde cualquier parte)
    public describirAnimal(): void {
      console.log(`Este es ${this.nombre}, un animal de la especie ${this.especie}.`);
    }
  
    // Método privado (solo accesible dentro de esta clase)
    private mostrarTipoAlimento(): void {
      console.log(`${this.nombre} se alimenta de ${this.tipoAlimento}.`);
    }
  
    // Método protegido (accesible dentro de esta clase y clases hijas)
    protected sonidoAnimal(): void {
      console.log(`${this.nombre} hace un sonido.`);
    }
  
    // Método para acceder al privado dentro de la clase
    public alimentarAnimal(): void {
      this.mostrarTipoAlimento(); // Llama al método privado dentro de la clase
    }
  }
  
  // Clase hija
  class Perro extends Animal {
    constructor(nombre: string, tipoAlimento: string) {
      super(nombre, tipoAlimento, "Canino"); // Llama al constructor de la clase base
    }
  
    // Método público en la clase hija que accede al método protegido de la clase base
    public hacerSonido(): void {
      this.sonidoAnimal(); // Se puede acceder porque es un método protegido
      console.log(`${this.nombre} ladra.`);
    }
  }
  
  // Crear una instancia de la clase Animal
  const miAnimal = new Animal("Gato", "Croquetas", "Felino");
  miAnimal.describirAnimal(); // Funciona: propiedad y método públicos
  miAnimal.alimentarAnimal(); // Funciona: llama al método privado a través de un método público
  
  // Crear una instancia de la clase Perro (hereda de Animal)
  const miPerro = new Perro("Rex", "Carne");
  miPerro.describirAnimal(); // Funciona: hereda el método público
  miPerro.hacerSonido();     // Funciona: accede al método protegido desde la clase hija
  
  // Errores por intentar acceder a propiedades/métodos privados o protegidos desde fuera
  // console.log(miAnimal.tipoAlimento); // Error: 'tipoAlimento' es privado
  // miAnimal.mostrarTipoAlimento(); // Error: 'mostrarTipoAlimento' es privado
  // miAnimal.sonidoAnimal(); // Error: 'sonidoAnimal' es protegido
  