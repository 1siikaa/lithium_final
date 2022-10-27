const express = require('express');
const router = express.Router();
const BookModel = require('../db/bookdb.js')
const BookController = require('../logic_db/booklogic.js')
const AuthorModel = require('../db/authordb.js')
const lodash = require('lodash')



router.post('/createBook', BookController.createBook)
router.post('/createAuthor', BookController.createAuthor)
router.get('/bookList', BookController.bookList)
router.get('/findBookPrice', BookController.findBookPrice)
router.get('/findCost', BookController.findCost) 
module.exports = router;

