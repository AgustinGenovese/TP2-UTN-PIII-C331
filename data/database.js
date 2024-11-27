const { Sequelize } = require('sequelize');

const db = new Sequelize("peliculasdb", "root", "", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = db;