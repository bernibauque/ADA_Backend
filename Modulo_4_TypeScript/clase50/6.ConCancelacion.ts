//2. Ejecucion con cancelacion
let termporizador = setTimeout(() => {
    console.log("Este mensaje no se mostrara porque cancelaremos el temporizador");
}, 2000);

clearTimeout(termporizador) // cancelamos el temporizador antes de los 2 segundos