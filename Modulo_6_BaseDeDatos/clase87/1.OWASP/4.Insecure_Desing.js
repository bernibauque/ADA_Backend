// Ruta POST para cambiar la contraseña de un usuario
app.post("/cambiar-password", async (req, res) => {
    // Extrae los datos del cuerpo de la solicitud (id, oldPassword, newPassword)
    const { id, oldPassword, newPassword } = req.body;

    // Busca el usuario en el array "usuarios" por su ID
    const usuario = usuarios.find(u => u.id === id);

    // Si no se encuentra el usuario, devuelve un error 404 (No encontrado)
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    // Compara la contraseña antigua proporcionada con la contraseña almacenada usando bcrypt
    const esValida = await bcrypt.compare(oldPassword, usuario.password);

    // Si la contraseña antigua no es válida, devuelve un error 403 (Prohibido)
    if (!esValida) return res.status(403).json({ error: "Contraseña incorrecta" });

    // Hashea la nueva contraseña usando bcrypt con un costo de 10
    usuario.password = await bcrypt.hash(newPassword, 10);

    // Devuelve una respuesta exitosa indicando que la contraseña se cambió correctamente
    res.json({ mensaje: "Contraseña cambiada con éxito" });
});
