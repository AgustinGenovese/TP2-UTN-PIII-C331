// app.js
const express = require('express');
const cors = require("cors");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const db = require('./data/database');
const moviesRoutes = require('./routes/moviesRoutes');
const authorsRoutes = require('./routes/authorsRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Movie API', 
        version: '1.0.0',    
        description: 'API para gestionar películas y autores'
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['./routes/moviesRoutes.js', './routes/authorsRoutes.js'],
  };
  
const swaggerSpec = swaggerJSDoc(swaggerOptions);

const port = 3000;

app.use('/movies', moviesRoutes);
app.use('/authors', authorsRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const conexionDB = async () => {
    try { 
        await db.authenticate()
        console.log("Conectado")
    }
    catch (error) {
        console.log("Error: " + error)
    }
}

const Movie = require('./models/movie');
const Author = require('./models/author');

Author.hasMany(Movie, { foreignKey: 'idDirector' });

app.listen(port, () => {
    conexionDB();
    console.log(`listening on port ${port}`);
});
