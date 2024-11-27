const express = require('express');
const { createAuthor, getAllAuthors, getAuthorById, deleteAuthor } = require('../controllers/authorsController');

const router = express.Router();

router.post('/', createAuthor);
router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.delete('/:id', deleteAuthor);

module.exports = router;
