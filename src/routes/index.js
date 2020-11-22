const { Router } = require('express');
const app = require('../app');
const router = Router();

const { renderIndex, renderNewBook, createNewBook } = require('../controller/index');

router.get('/', renderIndex);

router.get('/new-book', renderNewBook);

router.post('/new-book', createNewBook);

module.exports = router;