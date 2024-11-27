const express = require('express');
const { createAuthor, getAllAuthors, getAuthorById, deleteAuthor } = require('../controllers/authorsController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authors
 *   description: API para gestionar los autores
 */

/**
 * @swagger
 * /authors:
 *   post:
 *     summary: Crear un nuevo autor
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               surname:
 *                 type: string
 *     responses:
 *       201:
 *         description: Autor creado con éxito
 *       500:
 *         description: Error al crear el autor
 */

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Obtener todos los autores
 *     tags: [Authors]
 *     responses:
 *       200:
 *         description: Lista de autores
 *       500:
 *         description: Error al obtener los autores
 */

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Obtener un autor por ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del autor
 *     responses:
 *       200:
 *         description: Autor encontrado
 *       404:
 *         description: Autor no encontrado
 *       500:
 *         description: Error al obtener el autor
 */

/**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Eliminar un autor por ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del autor
 *     responses:
 *       200:
 *         description: Autor eliminado
 *       404:
 *         description: Autor no encontrado
 *       500:
 *         description: Error al eliminar el autor
 */

router.post('/', createAuthor);
router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.delete('/:id', deleteAuthor);

module.exports = router;
