const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'Test1234!!', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
