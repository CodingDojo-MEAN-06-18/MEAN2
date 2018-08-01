const router = require('express').Router();
const bookRouter = require('./book.routes');

module.exports = router.use('/books', bookRouter);
