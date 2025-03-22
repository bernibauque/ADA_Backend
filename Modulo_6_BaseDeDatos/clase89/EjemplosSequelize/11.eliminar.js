Usuario.detroy(
    { edad: 26 }, // Nuevos valores
    { where: { email: "ana@example.com" } } // Condición
).then(() => console.log("🔄 Usuario actualizado"));

