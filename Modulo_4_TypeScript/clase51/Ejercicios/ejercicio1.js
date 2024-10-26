function checkTicketAvailability(visitors, openingTime, callback) {
    visitors.forEach((visitor) => {
        const arrivalTime = visitor.arrivalTime;
        const delay = openingTime - arrivalTime;
        setTimeout(() => {
            const available = Math.random() > 0.3;
            const message = available ? "Entrada confirmada" : "Debe esperar su turno";
            callback({ name: visitor.name, arrivalTime, status: message });
        }, delay);
    });
}

const visitors = [
    { name: "Ana", arrivalTime: 9000 },
    { name: "Pedro", arrivalTime: 6000 },
    { name: "Luis", arrivalTime: 8000 },
];

checkTicketAvailability(visitors, 7000, (info) => {
    console.log(`Visitante: ${info.name}, Llegada: ${info.arrivalTime}, Estado: ${info.status}`);
});

