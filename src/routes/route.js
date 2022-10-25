const express = require('express');
const router = express.Router();
const BookModel = require('../db/mydb.js')
const BookController = require('../logic_db/logic.js')
const NameModel = require('../db/namedb.js')
const NameController = require('../logic_db/namelogic.js')

router.post('/newBook', BookController.addBook)
router.get('/listBook', BookController.fetchBook)

router.post('/names', NameController.addNames)
router .get('/getNames', NameController.fetchNames)


module.exports = router;

