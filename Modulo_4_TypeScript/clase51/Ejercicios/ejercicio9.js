function loanRequest(clientName, amount, callback) {
    const waitTime = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
        const approved = amount <= 5000 || Math.random() > 0.3;
        const status = approved ? "aprobada" : "rechazada";
        callback(`Solicitud de ${clientName} para $${amount} ha sido ${status}.`);
    }, waitTime);
}

loanRequest("Daniela", 6000, (message) => {
    console.log(message);
});
