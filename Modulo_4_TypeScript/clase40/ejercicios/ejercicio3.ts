// Declarar el enum
enum DiasDeLaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
  }
  
  // Función para verificar si es un día laborable
  function esDiaLaborable(dia: DiasDeLaSemana): string {
    if (dia === DiasDeLaSemana.Sabado || dia === DiasDeLaSemana.Domingo) {
      return "Es un día de descanso.";
    } else {
      return "Es un día laborable.";
    }
  }
  
  // Usar el enum para invocar la función
  console.log(esDiaLaborable(DiasDeLaSemana.Sabado));  // "Es un día de descanso."
  