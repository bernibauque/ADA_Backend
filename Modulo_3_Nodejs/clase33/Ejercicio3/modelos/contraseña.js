const crypto = require('crypto');

// Lista para almacenar contraseñas en formato hash
let contraseñas = [];

// Función para añadir una contraseña
const agregarContraseña = (usuario, contraseña) => {
    const sal = crypto.randomBytes(16).toString('hex');
    const hash = crypto.createHash('sha256').update(contraseña + sal).digest('hex');
    contraseñas.push({ usuario, hash, sal });
    return `Contraseña para ${usuario} añadida con éxito.`;
};

// Función para listar todas las contraseñas
const listarContraseñas = () => {
    return contraseñas; // Asegúrate de devolver un array
};

module.exports = {
    agregarContraseña,
    listarContraseñas
};


