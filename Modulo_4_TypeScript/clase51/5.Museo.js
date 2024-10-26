function checkTicket(visitantes, apertura, callback) {
    visitantes.forEach((visitantes) => {
        const llegada = visitantes.llegada;
        const delay = apertura - llegada;
        setTimeout(() => {
            const disponible = Math.random() > 0.2;
            const mensaje = disponible ? "Entrada confirmada" : "Debe esperar su turno";
            callback({ name: visitantes.name, llegada, status: mensaje });
        }, delay)
    })
}

const visitante = [
    { name: "Sofi", llegada: 9000 },
    { name: "Viki", llegada: 6000 },
    { name: "Kati", llegada: 8000 },
    { name: "Juli", llegada: 7000 },
];

checkTicket(visitante, 7000, (info) => {
    console.log(`Visitantes: ${info.name}, Llegada: ${info.llegada}, Estado: ${info.status}`);

})