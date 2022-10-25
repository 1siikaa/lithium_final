const express = require('express');
const router = express.Router();
const BookModel = require('../db/bookdb.js')
const BookController = require('../logic_db/booklogic.js')


router.post('/createBook', BookController.createBook) //11+
router.get('/bookList', BookController.bookList)
router.post('/getBooksInYear', BookController.getBooksInYear) // query
router.post('/getParticularBooks', BookController.getParticularBooks) // query
router.get('/getXINRBooks', BookController.getXINRBooks)
router.get('/getRandomBooks', BookController.getRandomBooks)



module.exports = router;

