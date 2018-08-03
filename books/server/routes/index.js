const router = require('express').Router();
const bookRouter = require('./book.routes');
const authRouter = require('./auth.routes');

module.exports = router.use('/auth', authRouter).use('/books', bookRouter);
