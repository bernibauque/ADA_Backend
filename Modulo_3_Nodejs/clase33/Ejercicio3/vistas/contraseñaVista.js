// Función para formatear la lista de contraseñas en una cadena legible
const formatearContraseñas = (contraseñas) => {
    if (!Array.isArray(contraseñas)) {
        throw new Error('El parámetro debe ser un array');
    }
    return contraseñas.map(c => `Usuario: ${c.usuario}, Hash: ${c.hash}`).join('\n');
};

module.exports = {
    formatearContraseñas
};


