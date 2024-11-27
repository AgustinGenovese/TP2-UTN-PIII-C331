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
        // Desestructuración de parámetros de la query
        const { page = 1, limit = 2, sort = 'ASC', type, status } = req.query;

        // Convertir `page` y `limit` a enteros
        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);

        // Definir los parámetros de filtrado, si existen
        const filterOptions = {};
        if (type) {
            filterOptions.type = type; // Filtrar por tipo
        }
        if (status) {
            filterOptions.status = status; // Filtrar por estado
        }

        // Configuración de paginado y ordenado
        const options = {
            where: filterOptions, // Aplicar los filtros
            include: {
                model: Author,
                as: "Director", // Incluir el autor (director)
                attributes: ['name', 'surname'] // Seleccionar los atributos que quieres del autor
            },
            order: [['createdAt', sort.toUpperCase()]], // Ordenar por `createdAt` en orden ascendente o descendente
            limit: limitNumber, // Limitar el número de registros por página
            offset: (pageNumber - 1) * limitNumber, // Desplazamiento según la página
        };

        // Obtener las películas con las opciones de filtrado, ordenado y paginado
        const { count, rows } = await Movie.findAndCountAll(options);

        // Enviar la respuesta con los datos paginados
        res.status(200).json({
            total: count, // Total de registros
            totalPages: Math.ceil(count / limitNumber), // Total de páginas
            currentPage: pageNumber, // Página actual
            movies: rows // Películas en la página actual
        });
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
