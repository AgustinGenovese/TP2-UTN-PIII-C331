// movie.js
const { DataTypes } = require('sequelize');
const db = require('../data/database');
const Author = require('./author');  // Importa Author después de definir el modelo

const Movie = db.define('Movie', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    releaseDate: { type: DataTypes.DATE, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM('active', 'inactive'), defaultValue: 'active' },
    producer: { type: DataTypes.STRING },
    idDirector: { type: DataTypes.INTEGER, allowNull: false }
}, { timestamps: true });

// Define la relación inversa después de cargar Author
Movie.belongsTo(Author, { foreignKey: 'idDirector', targetKey: 'id', as: "Director" });

module.exports = Movie;