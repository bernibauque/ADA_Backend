// ejemplo de código que permite escribir datos a un archivo mediante el uso del módulo file system
var fs = requiere('fs') // Importamos el modulo mediante un requiere

// Configuramos una variable de nombre datos, que contiene los datos a persistir (guardar) en un archivo, en este caso un string
datos = "Ejemplo de datos que podemos escribir en un archivo";

// Utilizamos el metodo de fs 'writeFile' nos permita escribir los datos a un archivo
// 1. WF tambien crea el archivo por nosotros, el nombre de dicho archivo lo pasamos como primer parametro
// 2. Segundo parametro es donde guardaremos los datos, en este caso en una variable de nombre datos
// 3. Tercer param hace referencia a que hacer si ocurre un error va a dar lugar a que se lance el error con el mensaje determinado
fs.writeFile('archivo.txt', datos, function (err) {
    if (!err) {
        console.log('Los datos han sido escritos a archivo.txt');
    } else {
        throw err;
    }
})

// Extra:
// Errores: En este tipo de archivos tienen que ver principalmente con intentar escribir en
// un archivo dentro de un directorio en el cual no tenemos permisos para poder escribir

// Donde se guarda el archivo: el archivo se va a guardar exactamente en el mismo lugar
// donde se encuentre el script que lo ejecuta en este caso este archivo al que hemos llamado
// "escribirarchivo.js" si quisiéramos que se guardara en cualquier otra ruta tenemos que indicar
// antes de 'archivo.txt' (nombre),  la ruta completa