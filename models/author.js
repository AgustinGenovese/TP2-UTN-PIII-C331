// author.js
const { DataTypes } = require('sequelize');
const db = require('../data/database');

const Author = db.define('Author', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: true });

module.exports = Author;