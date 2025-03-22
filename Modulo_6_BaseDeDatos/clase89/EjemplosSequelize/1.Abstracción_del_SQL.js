//Sin Sequelize:
connection.query('SELECT * FROM clientes WHERE id = ?', [1], (error, results) => {
    if (error) throw error;
    console.log(results);
});

//Con Sequelize:
Cliente.findByPk(1)
    .then((cliente) => {
        console.log(cliente);
    })
    .catch((error) => {
        console.error(error);
    });

