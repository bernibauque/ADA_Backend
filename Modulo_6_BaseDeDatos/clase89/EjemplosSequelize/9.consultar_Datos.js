//Ejemplo: Obtener todos los usuarios
Usuario.findAll().then((usuarios) => {
    console.log("📌 Lista de usuarios:");
    console.log(usuarios.map((u) => u.toJSON()));
});

//Ejemplo: Buscar un usuario por email
Usuario.findOne({ where: { email: "ana@example.com" } }).then((usuario) => {
    if (usuario) console.log("📌 Usuario encontrado:", usuario.toJSON());
    else console.log("❌ Usuario no encontrado");
});

