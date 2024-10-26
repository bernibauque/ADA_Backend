function applyDiscount(price, clientType, callback) {
    setTimeout(() => {
        let discount;
        if (clientType === "nuevo") discount = 0.05;
        else if (clientType === "recurrente") discount = 0.1;
        else if (clientType === "VIP") discount = 0.2;

        const finalPrice = price - (price * discount);
        const message = `Descuento aplicado: ${discount * 100}%. Precio final: $${finalPrice.toFixed(2)}`;
        callback(finalPrice, message);
    }, Math.random() * 1000 + 1000);
}

applyDiscount(200, "VIP", (finalPrice, message) => {
    console.log(message);
});
