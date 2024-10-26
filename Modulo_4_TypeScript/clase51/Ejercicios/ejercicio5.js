function calculateGrowthTime(plantType, growthTime, callback) {
    setTimeout(() => {
        const yieldAmount = Math.floor(Math.random() * 40) + 10;
        callback(`La ${plantType} está lista en ${growthTime} segundos, produciendo ${yieldAmount} unidades.`);
    }, growthTime * 1000);
}

calculateGrowthTime("tomate", 3, (message) => {
    console.log(message);
});
