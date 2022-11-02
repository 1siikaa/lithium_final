const express = require('express');
const router = express.Router();
const OrderModel = require('../db/orderdb.js')
const LogicController = require('../logic_db/logic.js')
const ProductModel = require('../db/productdb.js')
const UserModel = require('../db/userdb.js')
const middleware = require('../middleware/middleware.js')


router.post('/createProduct', LogicController.createProduct)
router.post('/createUser', middleware.headerValidation, LogicController.createUser)
router.post('/createOrder', middleware.headerValidation, middleware.userValidation, middleware.productValidation, LogicController.createOrder)



module.exports = router;

