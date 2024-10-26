let visitorID = 1;

function registerVisitor(visitorName, category, callback) {
    const verificationTime = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(() => {
        const entryNumber = visitorID++;
        callback(`Visitante: ${visitorName}, Categoría: ${category}, Entrada #${entryNumber}, Verificación en ${verificationTime / 1000} segundos.`);
    }, verificationTime);
}

registerVisitor("Laura", "VIP", (message) => {
    console.log(message);
});
