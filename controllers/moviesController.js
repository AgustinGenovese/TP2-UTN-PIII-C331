const Movie = require('../models/movie');
const Author = require('../models/author');

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

exports.getAllMovies = async (req, res) => {
    try {
        const { page = 1, limit = 2, sort = 'ASC', type, status } = req.query;

        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);

        const filterOptions = {};
        if (type) {
            filterOptions.type = type; 
        }
        if (status) {
            filterOptions.status = status; 
        }

        const options = {
            where: filterOptions, 
            include: {
                model: Author,
                as: "Director", 
                attributes: ['name', 'surname'] 
            },
            order: [['createdAt', sort.toUpperCase()]], 
            limit: limitNumber, 
            offset: (pageNumber - 1) * limitNumber, 
        };

        const { count, rows } = await Movie.findAndCountAll(options);

        res.status(200).json({
            total: count,
            totalPages: Math.ceil(count / limitNumber), 
            currentPage: pageNumber, 
            movies: rows 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las películas', error });
    }
};

exports.getMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByPk(id, {
            include: {
                model: Author,
                as: "Director", 
                attributes: ['name', 'surname'] 
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
