// Función para obtener la hora actual sin usar Date
const getCurrentTime = () => {
    const now = process.hrtime();  // Obtenemos el tiempo de alta resolución
    const secondsSinceEpoch = Math.floor(now[0]);  // Convertimos el tiempo en segundos
    const hours = Math.floor((secondsSinceEpoch % 86400) / 3600);  // Calculamos las horas
    const minutes = Math.floor((secondsSinceEpoch % 3600) / 60);   // Calculamos los minutos
    const seconds = secondsSinceEpoch % 60;  // Calculamos los segundos

    // Formateamos la hora como HH:MM:SS
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

module.exports = {
    getCurrentTime,
};


/*
USANDO METODO DATE
// Función para obtener la hora actual
const getCurrentTime = () => {
    const now = new Date();  // Obtenemos la fecha y hora actual
    return now.toLocaleTimeString();  // Devolvemos la hora en formato de cadena
};

module.exports = {
    getCurrentTime,
};*/
