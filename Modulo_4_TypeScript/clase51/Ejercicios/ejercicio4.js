function attractionQueue(attraction, visitor, waitTime, callback) {
    const maxCapacity = Math.floor(Math.random() * 10) + 1;
    let availableSpots = maxCapacity;

    setTimeout(() => {
        if (availableSpots > 0) {
            availableSpots--;
            callback(`${visitor} puede subirse a ${attraction}. Lugares restantes: ${availableSpots}`);
        } else {
            callback(`No hay cupo para ${visitor} en ${attraction}.`);
        }
    }, waitTime);
}

attractionQueue("Montaña Rusa", "Carlos", 5000, (message) => {
    console.log(message);
});
