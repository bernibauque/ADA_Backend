// Importamos el modulo fs 
const fs = require('fs');

// 1. Leer el archivo JSON
// Leemos el archivo persona.json y lo convertimos en un objeto javascript
fs.readFile('persona.json', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error al leer el archivo JSON: ', err);
        return;
    }

    //2. Mostrar el contenido JSON leido como texto
    console.log("Contenido del archivo JSON (Como texto)");
    console.log(data);

    //3. Convertir la cadena JSON en un objeto javascript
    const persona = JSON.parse(data)

    //4. Mostrar el objeto javascript convertido
    console.log("JSON convertido a objeto Javascript");
    console.log(persona);

    //5. Acceder a los valores del objeto javascript
    console.log("Accediendo a los valores del objeto: ");
    console.log("Nombre: ", persona.nombre);
    console.log("Ciudad: ", persona.direccion.ciudad);

    //6. Modificar el objeto y convertirlo nuevamente a JSON
    persona.edad = 31;

    // Convertimos el objeto javascript de nuevo a una cadena JSON
    const nuevoJSON = JSON.stringify(persona, null, 2);
    //null y 2 son para formatear el json con identacion

    //7.Guardar el JSON modificado en una nuevo archivo
    fs.writeFile('nuevaPersona.json', nuevoJSON, (err) => {
        if (err) {
            console.log('Error al escribir el archivo JSON: ', err);
            return;
        }
        console.log("JSON modificado guardado en nuevaPersona.json");

    })










})