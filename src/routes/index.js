const { Router } = require('express');
const app = require('../app');
const router = Router();

const { renderIndex, renderNewBook, createNewBook, deleteBook } = require('../controller/index');

router.get('/', renderIndex);

router.get('/new-book', renderNewBook);

router.post('/new-book', createNewBook);

// para este ejemplo se usara el metodo get, proximamente el metodo delete
router.get('/delete/:id', deleteBook);

module.exports = router;