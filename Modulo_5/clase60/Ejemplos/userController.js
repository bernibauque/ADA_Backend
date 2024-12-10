// funciones de controlador

// Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
    res.json({ message: "Obteniendo todos los usuarios" });
};

// Crear un nuevo usuario
exports.createUser = (req, res) => {
    res.json({ message: "Usuario creado", data: req.body });
};

// Obtener un usuario por ID
exports.getUserById = (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Obteniendo usuario con ID ${userId}` });
};

// Actualizar un usuario por ID
exports.updateUser = (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Usuario con ID ${userId} actualizado`, data: req.body });
};

// Eliminar un usuario por ID
exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Usuario con ID ${userId} eliminado` });
};
