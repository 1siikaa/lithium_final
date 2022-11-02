const ProductModel = require('../db/productdb.js')
const OrderModel = require('../db/orderdb.js')
const UserModel = require('../db/userdb.js')

const { isValidObjectId } = require('mongoose')

const createProduct = async function (req, res ){
    let product = req.body
    let productInfo = await ProductModel.create(product)
    res.send({msg: productInfo})
}

const createOrder= async function (req, res ){
    let order = req.body
    
    let saveData = await OrderModel.create(order) 
    res.send({msg: saveData})
     }

const createUser = async function (req, res ){
    let user = req.body
    let storeUser = await CreateModel.create(user)
    res.send({msg: storeUser})
}




module.exports.createProduct= createProduct
module.exports.createUser = createUser
module.exports.createOrder= createOrder
