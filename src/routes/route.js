const express = require('express');
const router = express.Router();
const BookModel = require('../db/bookdb.js')
const BookController = require('../logic_db/booklogic.js')
const AuthorModel = require('../db/authordb.js')
const PublisherModel = require('../db/publisherdb.js')
const lodash = require('lodash')



router.post('/createBook', BookController.createBook)
router.post('/createAuthor', BookController.createAuthor)
router.post('/createPublisher', BookController.createPublisher)
router.get('/bookList', BookController.bookList)
router.put('/modifyBook', BookController.modifyBook)


module.exports = router;

