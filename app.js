// app.js
const express = require('express');
const cors = require("cors");

const db = require('./data/database');
const moviesRoutes = require('./routes/moviesRoutes');
const authorsRoutes = require('./routes/authorsRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.use('/movies', moviesRoutes);
app.use('/authors', authorsRoutes);

const conexionDB = async () => {
    try { 
        await db.authenticate()
        console.log("Conectado")
    }
    catch (error) {
        console.log("Error: " + error)
    }
}

// Asegúrate de importar y establecer relaciones aquí
const Movie = require('./models/movie');
const Author = require('./models/author');

// Establece las relaciones después de definir ambos modelos
Author.hasMany(Movie, { foreignKey: 'idDirector' });

app.listen(port, () => {
    conexionDB();
    console.log(`listening on port ${port}`);
});
