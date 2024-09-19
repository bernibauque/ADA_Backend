// Función para formatear la lista de tareas en una cadena legible
const formatearTareas = (tareas) => {
    // Mapear cada tarea a una cadena que incluya el ID y el título, y unirlas con saltos de línea
    return tareas.map(t => `ID: ${t.id}, Título: ${t.titulo}`).join('\n');
};

// Exportamos la función de formateo
module.exports = {
    formatearTareas
};
