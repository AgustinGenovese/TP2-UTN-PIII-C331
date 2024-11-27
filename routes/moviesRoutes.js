const express = require('express');
const { createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie } = require('../controllers/moviesController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: API para gestionar las películas
 */

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Crear una nueva película
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               releaseDate:
 *                 type: string
 *                 format: date
 *               genre:
 *                 type: string
 *               type:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [active, inactive]
 *               producer:
 *                 type: string
 *               idDirector:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Película creada con éxito
 *       500:
 *         description: Error al crear la película
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Obtener todas las películas
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número de página
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Número de elementos por página
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *         description: Ordenar las películas
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Filtrar por tipo de película
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [active, inactive]
 *         description: Filtrar por estado
 *     responses:
 *       200:
 *         description: Lista de películas
 *       500:
 *         description: Error al obtener las películas
 */

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Obtener una película por ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la película
 *     responses:
 *       200:
 *         description: Película encontrada
 *       404:
 *         description: Película no encontrada
 *       500:
 *         description: Error al obtener la película
 */

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Actualizar una película por ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la película
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               releaseDate:
 *                 type: string
 *                 format: date
 *               genre:
 *                 type: string
 *               type:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [active, inactive]
 *               producer:
 *                 type: string
 *               idDirector:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Película actualizada
 *       404:
 *         description: Película no encontrada
 *       500:
 *         description: Error al actualizar la película
 */

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Eliminar una película por ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la película
 *     responses:
 *       200:
 *         description: Película eliminada
 *       404:
 *         description: Película no encontrada
 *       500:
 *         description: Error al eliminar la película
 */

router.post('/', createMovie);
router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
