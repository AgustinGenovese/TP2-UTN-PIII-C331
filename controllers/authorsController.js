const Author = require('../models/author');

// Crear un nuevo autor
exports.createAuthor = async (req, res) => {
    try {
        const { name, surname } = req.body;
        const newAuthor = await Author.create({ name, surname });
        res.status(201).json(newAuthor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el autor', error });
    }
};

// Obtener todos los autores
exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll();
        res.status(200).json(authors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los autores', error });
    }
};

// Obtener un autor por su ID
exports.getAuthorById = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findByPk(id);
        if (!author) {
            return res.status(404).json({ message: 'Autor no encontrado' });
        }
        res.status(200).json(author);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el autor', error });
    }
};

// Eliminar un autor por su ID
exports.deleteAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findByPk(id);
        if (!author) {
            return res.status(404).json({ message: 'Autor no encontrado' });
        }
        await author.destroy();
        res.status(200).json({ message: 'Autor eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el autor', error });
    }
};
