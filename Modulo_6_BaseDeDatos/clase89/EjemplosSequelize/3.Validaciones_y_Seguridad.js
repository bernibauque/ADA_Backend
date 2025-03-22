//Sin Sequelize:
if (!cliente.nombre) {
    throw new Error('El nombre es obligatorio');
}
connection.query('INSERT INTO clientes (nombre, direccion) VALUES (?, ?)', [cliente.nombre, cliente.direccion]);

//Con Sequelize:
const cliente = await Cliente.create({
    nombre: 'Luis',
    direccion: 'Zacatepec',
});

