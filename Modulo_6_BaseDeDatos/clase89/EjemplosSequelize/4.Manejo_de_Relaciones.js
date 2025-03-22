/*Sin Sequelize:
SELECT * FROM clientes
JOIN ordenes ON clientes.id = ordenes.cliente_id
WHERE clientes.id = 1;
*/

//Con Sequelize:
const cliente = await Cliente.findByPk(1, {
    include: Orden, // Incluye las órdenes relacionadas
});

