import app from './app'

// Configuracion del puerto
// Definimos el puerto donde el servidor escuchara las solis http
const PORT = 3000;

// Iniciar el servidor
// Llamamos al metodo .listen de la instancia de la aplicacion
// para que comience a escuchar solicitudes en el puerto 3000
// Este metodo toma como parametros:
// 1. El puerto en el que el servidor escuchara (en este caso, el valor de PORT)
// 2. Una funcion de callback que se ejecutara cuando el servidor se haya iniciado correctamente
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})