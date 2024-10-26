function checkInventory(product, stock, callback) {
    setTimeout(() => {
        if (stock < 10) {
            callback(`Es necesario hornear más ${product}. Stock actual: ${stock}`);
            bakeProduct(product, callback);
        } else {
            callback(`Hay suficiente stock de ${product}.`);
        }
    }, Math.random() * 1000 + 1000);
}

function bakeProduct(product, callback) {
    const bakeTime = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(() => {
        callback(`${product} horneado y listo para agregar al inventario.`);
    }, bakeTime);
}

checkInventory("Baguette", 8, (message) => {
    console.log(message);
});
