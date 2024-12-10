// Importamos la aplicación configurada desde el archivo "app".
const app = require("../app");

// Definimos el número del puerto en el que el servidor escuchará las solicitudes.
const PORT = 3000;

// Iniciamos el servidor para que escuche en el puerto definido.
// La función `listen` de Express arranca el servidor y le indica que procese las solicitudes entrantes en el puerto especificado.
app.listen(PORT, () => {
  // Este callback se ejecuta una vez que el servidor ha comenzado a escuchar.
  // Aquí mostramos un mensaje en la consola para informar que el servidor está corriendo y en qué puerto.
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
