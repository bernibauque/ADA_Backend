// Función para formatear la lista de usuarios en una cadena legible
const formatearUsuarios = (usuarios) => {
    // Mapear cada usuario a una cadena que incluya el ID y el nombre, y unirlas con saltos de línea
    return usuarios.map(u => `ID: ${u.id}, Nombre: ${u.nombre}`).join('\n');
};

// Exportamos la función de formateo
module.exports = {
    formatearUsuarios
};

