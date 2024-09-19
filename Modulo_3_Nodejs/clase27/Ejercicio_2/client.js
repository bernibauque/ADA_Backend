const net = require('net');

for (let i = 0; i < 3; i++) {
    const client = net.createConnection({ port: 9000, host: 'localhost' }, () => {
        client.write(`Mensaje desde el cliente ${i}`);
    });

    client.on('data', (data) => {
        console.log(`Respuesta del servidor para cliente ${i}: ${data.toString()}`);
        client.end();
    });

    client.on('error', (err) => {
        console.error('Error:', err.message);
    });
}
