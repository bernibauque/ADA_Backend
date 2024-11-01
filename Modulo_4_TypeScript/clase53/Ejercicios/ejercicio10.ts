type User = [string, number, boolean]; // Definimos la tupla

function registerUser(user: User) {
  const [name, age, isActive] = user;
  console.log(`Usuario: ${name}, Edad: ${age}, Estado activo: ${isActive ? "Sí" : "No"}`);
}

// Llamada de ejemplo a la función
registerUser(["Carlos", 30, true]);
