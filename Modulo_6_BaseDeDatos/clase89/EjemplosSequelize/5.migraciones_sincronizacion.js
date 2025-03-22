/*Sin Sequelize:
CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  direccion VARCHAR(255) NOT NULL
);
*/

//Con Sequelize:
sequelize.sync(); // Crea la tabla automáticamente


