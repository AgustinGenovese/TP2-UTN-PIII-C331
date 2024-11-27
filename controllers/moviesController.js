const Movie = require('../models/movie');
const Author = require('../models/author');

// Crear una nueva película
exports.createMovie = async (req, res) => {
    try {
        const { title, releaseDate, genre, type, status, producer, idDirector } = req.body;
        const newMovie = await Movie.create({ title, releaseDate, genre, type, status, producer, idDirector  });
        res.status(201).json(newMovie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear la película', error });
    }
};

// Obtener todas las películas
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll({
            include: {
                model: Author,
                as: "Director", // Incluir el autor (director)
                attributes: ['name', 'surname'] // Seleccionar los atributos que quieres del autor
            }
        });
        res.status(200).json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las películas', error });
    }
};


// Obtener una película por su ID
exports.getMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByPk(id, {
            include: {
                model: Author,
                as: "Director", // Incluir el autor (director)
                attributes: ['name', 'surname'] // Selecciona los atributos que quieres del autor
            }
        });

        if (!movie) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }

        res.status(200).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la película', error });
    }
};


// Actualizar una película por su ID
exports.updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, releaseDate, genre, type, status, producer, idDirector  } = req.body;
        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
        await movie.update({ title, releaseDate, genre, type, status, producer, idDirector  });
        res.status(200).json({ message: 'Película actualizada', movie });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la película', error });
    }
};

// Eliminar una película por su ID
exports.deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
        await movie.destroy();
        res.status(200).json({ message: 'Película eliminada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la película', error });
    }
};
