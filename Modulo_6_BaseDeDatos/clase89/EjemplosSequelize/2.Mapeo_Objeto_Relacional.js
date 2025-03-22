//Sin Sequelize:
//const cliente = { id: 1, nombre: 'Luis', direccion: 'Zacatepec' };
console.log(cliente.nombre); // Acceso directo a propiedades

//Con Sequelize:
const cliente = await Cliente.findByPk(1);
console.log(cliente.getNombre()); // Métodos getters/setters

