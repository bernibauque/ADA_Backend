// Declarar el enum
enum CategoriaProducto {
    Electronica,
    Ropa,
    Alimentos,
    Muebles
  }
  
  // Función que recibe un enum y devuelve un mensaje
  function mostrarCategoria(categoria: CategoriaProducto): string {
    switch (categoria) {
      case CategoriaProducto.Electronica:
        return "Categoría: Electrónica";
      case CategoriaProducto.Ropa:
        return "Categoría: Ropa";
      case CategoriaProducto.Alimentos:
        return "Categoría: Alimentos";
      case CategoriaProducto.Muebles:
        return "Categoría: Muebles";
      default:
        return "Categoría no válida";
    }
  }
  
  // Usar la función con varias categorías
  console.log(mostrarCategoria(CategoriaProducto.Electronica));  // "Categoría: Electrónica"
  console.log(mostrarCategoria(CategoriaProducto.Ropa));        // "Categoría: Ropa"
  console.log(mostrarCategoria(CategoriaProducto.Alimentos));    // "Categoría: Alimentos"
  console.log(mostrarCategoria(CategoriaProducto.Muebles));      // "Categoría: Muebles"
  