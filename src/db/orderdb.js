const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const ProductModel = require('../db/productdb.js')
const UserModel = require('../db/userdb.js')
const orderSchema = new mongoose.Schema

({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
	productId: {
        type: ObjectId,
        ref: 'Product'
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date: Date},
    
    { timestamps : true});

     module.exports = mongoose.model('Order', orderSchema)
