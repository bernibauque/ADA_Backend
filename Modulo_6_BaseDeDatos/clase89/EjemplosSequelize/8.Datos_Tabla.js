Usuario.create({
    nombre: "Ana",
    email: "ana@example.com",
    edad: 25,
}).then((usuario) => console.log("✅ Usuario creado:", usuario.toJSON()));
