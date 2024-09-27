// Declarar el enum
enum NivelesDeAcceso {
    Admin,
    Usuario,
    Invitado
  }
  
  // Función para verificar permisos
  function verificarPermisos(nivel: NivelesDeAcceso): string {
    switch (nivel) {
      case NivelesDeAcceso.Admin:
        return "Tienes todos los permisos.";
      case NivelesDeAcceso.Usuario:
        return "Tienes permisos limitados.";
      case NivelesDeAcceso.Invitado:
        return "Tienes permisos mínimos.";
      default:
        return "Nivel de acceso no válido.";
    }
  }
  
  // Usar la función con el nivel Usuario
  console.log(verificarPermisos(NivelesDeAcceso.Usuario));
  