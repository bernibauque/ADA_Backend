function checkStock(product, stock, callback) {
    const verificationTime = Math.floor(Math.random() * 500) + 500;
    setTimeout(() => {
        if (stock < 5) {
            callback(`Producto: ${product}, estado: Pedido necesario (stock actual: ${stock})`);
        } else {
            callback(`Producto: ${product}, estado: En stock (stock actual: ${stock})`);
        }
    }, verificationTime);
}

function checkMultipleStocks(products) {
    products.forEach(({ name, stock }) => {
        checkStock(name, stock, (message) => {
            console.log(message);
        });
    });
}

const products = [
    { name: "Leche", stock: 4 },
    { name: "Huevos", stock: 10 },
    { name: "Pan", stock: 3 },
];

checkMultipleStocks(products);
